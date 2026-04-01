import React, { useState } from "react";

// ── These are shared utilities from AdminPanel.jsx ────────────────
// Import them from wherever AdminPanel exports them in your project.
// The apiFetch base is http://localhost:6055/api/admin
// If AdminUtils.jsx doesn't exist yet, AdminPanel inlines them.

const API_BASE = "http://localhost:6055/api/admin";

const apiFetch = async (path, options = {}) => {
  const user  = JSON.parse(sessionStorage.getItem("user") || "{}");
  const token = user.token || "";
  const res   = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...(options.headers || {}),
    },
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || err.message || `HTTP ${res.status}`);
  }
  return res.json();
};

const Skeleton = ({ className = "" }) => (
  <div className={`animate-pulse bg-white/5 rounded-xl ${className}`} />
);

// ── Status badge styles (delivery) ────────────────────────────────
const STATUS_STYLES = {
  Delivered:  "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25",
  Shipped:    "bg-blue-500/15    text-blue-400    border border-blue-500/25",
  Processing: "bg-amber-500/15   text-amber-400   border border-amber-500/25",
  Pending:    "bg-gray-500/15    text-gray-400    border border-gray-500/25",
  Cancelled:  "bg-red-500/15     text-red-400     border border-red-500/25",
};

// ── Payment badge styles ──────────────────────────────────────────
const PAYMENT_STYLES = {
  paid:     "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25",
  pending:  "bg-amber-500/15   text-amber-400   border border-amber-500/25",
  failed:   "bg-red-500/15     text-red-400     border border-red-500/25",
  refunded: "bg-violet-500/15  text-violet-400  border border-violet-500/25",
};

const PAYMENT_LABELS = {
  cod: "Cash on Delivery", upi: "UPI", card: "Card", netbanking: "Net Banking", wallet: "Wallet",
};

// ── Timeline step indicator ───────────────────────────────────────
const DELIVERY_STEPS = ["Pending", "Processing", "Shipped", "Delivered"];
const DeliveryProgress = ({ status }) => {
  const cancelledIdx = -1;
  const isCancelled  = status === "Cancelled";
  const activeIdx    = isCancelled ? cancelledIdx : DELIVERY_STEPS.indexOf(status);
  return (
    <div className="flex items-center gap-0 my-4">
      {DELIVERY_STEPS.map((step, i) => (
        <React.Fragment key={step}>
          <div className="flex flex-col items-center flex-shrink-0">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all ${
              isCancelled ? "bg-white/5 border-white/10 text-white/20"
              : i < activeIdx  ? "bg-emerald-500 border-emerald-500 text-white"
              : i === activeIdx ? "bg-violet-600 border-violet-500 text-white shadow-lg shadow-violet-500/40"
              : "bg-white/5 border-white/10 text-white/25"
            }`}>
              {!isCancelled && i < activeIdx ? "✓" : i + 1}
            </div>
            <span className={`text-xs mt-1 font-medium whitespace-nowrap ${
              isCancelled ? "text-white/20"
              : i === activeIdx ? "text-violet-300"
              : i < activeIdx ? "text-emerald-400"
              : "text-white/25"
            }`} style={{ fontSize: "9px" }}>{step}</span>
          </div>
          {i < DELIVERY_STEPS.length - 1 && (
            <div className={`h-0.5 flex-1 mx-1 mb-5 transition-all ${
              isCancelled ? "bg-white/5"
              : i < activeIdx ? "bg-emerald-500" : "bg-white/8"
            }`} />
          )}
        </React.Fragment>
      ))}
      {isCancelled && (
        <div className="ml-3 flex-shrink-0 text-xs text-red-400 font-bold bg-red-500/15 px-2 py-1 rounded-lg border border-red-500/25">✕ Cancelled</div>
      )}
    </div>
  );
};

// ══════════════════════════════════════════════════════════════════
// ADMIN ORDERS PANEL
// ══════════════════════════════════════════════════════════════════
const AdminOrders = ({ orders, setOrders, loading, errors, onRetry, notify, searchQuery }) => {
  const [orderFilter,   setOrderFilter]   = useState("All");
  const [expandedOrder, setExpandedOrder] = useState(null);
  const [editStatus,    setEditStatus]    = useState(null); // orderId being edited for delivery
  const [editPayment,   setEditPayment]   = useState(null); // orderId being edited for payment
  const [updatingId,    setUpdatingId]    = useState(null);

  // ── Filter orders ─────────────────────────────────────────────
  const filtered = (() => {
    let o = orders;
    if (orderFilter !== "All") o = o.filter((x) => x.status === orderFilter);
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      o = o.filter((x) =>
        (x.customer || x.address?.fullName || "").toLowerCase().includes(q) ||
        (x.customerEmail || "").toLowerCase().includes(q) ||
        (x._id || "").toLowerCase().includes(q) ||
        (x.orderNumber || "").toLowerCase().includes(q)
      );
    }
    return o;
  })();

  // ── PUT /api/admin/orders/:id  { status } ─────────────────────
  // After update → the change is stored in DB so when user refreshes
  // GET /api/orders/my, they get the updated status + new timeline entry
  const handleUpdateDelivery = async (orderId, status) => {
    setUpdatingId(orderId);
    try {
      const data = await apiFetch(`/orders/${orderId}`, {
        method: "PUT",
        body:   JSON.stringify({ status }),
      });
      // Update local state immediately so admin sees change without refresh
      setOrders((prev) =>
        prev.map((o) => (o._id || o.id) === orderId
          ? { ...o, status, statusTimeline: data.order?.statusTimeline || o.statusTimeline,
              paymentStatus: data.order?.paymentStatus || o.paymentStatus }
          : o
        )
      );
      setEditStatus(null);
      notify(`✓ Delivery status → ${status}`);
    } catch (e) {
      notify(`Failed: ${e.message}`, "error");
    } finally {
      setUpdatingId(null);
    }
  };

  // ── PATCH /api/admin/orders/:id/payment  { paymentStatus } ────
  const handleUpdatePayment = async (orderId, paymentStatus) => {
    setUpdatingId(orderId);
    try {
      const data = await apiFetch(`/orders/${orderId}/payment`, {
        method: "PATCH",
        body:   JSON.stringify({ paymentStatus }),
      });
      setOrders((prev) =>
        prev.map((o) => (o._id || o.id) === orderId
          ? { ...o, paymentStatus, statusTimeline: data.order?.statusTimeline || o.statusTimeline }
          : o
        )
      );
      setEditPayment(null);
      notify(`✓ Payment status → ${paymentStatus}`);
    } catch (e) {
      notify(`Failed: ${e.message}`, "error");
    } finally {
      setUpdatingId(null);
    }
  };

  const toggleExpand = (id) => setExpandedOrder((prev) => prev === id ? null : id);

  // ── Status counts for filter pills ────────────────────────────
  const counts = orders.reduce((acc, o) => { acc[o.status] = (acc[o.status] || 0) + 1; return acc; }, {});

  return (
    <div className="space-y-4">
      {errors?.orders && (
        <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-red-400 text-sm">
          ⚠ {errors.orders}
          {onRetry && <button onClick={onRetry} className="ml-auto text-xs underline hover:text-red-300">Retry</button>}
        </div>
      )}

      {/* ── Filter pills ── */}
      <div className="flex items-center gap-2 flex-wrap">
        {["All","Pending","Processing","Shipped","Delivered","Cancelled"].map((f) => (
          <button key={f} onClick={() => setOrderFilter(f)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all border ${
              orderFilter === f
                ? "bg-violet-600 text-white border-violet-600"
                : "bg-white/5 text-white/50 border-white/10 hover:border-violet-500/30 hover:text-white/70"
            }`}>
            {f}
            <span className="ml-1.5 opacity-60">({f === "All" ? orders.length : (counts[f] || 0)})</span>
          </button>
        ))}
        <button onClick={onRetry}
          className="ml-auto text-xs text-violet-400 hover:text-violet-300 px-3 py-1.5 rounded-full border border-violet-500/20 hover:border-violet-500/40 transition-all">
          ↻ Refresh
        </button>
      </div>

      {/* ── Orders table ── */}
      <div className="bg-[#130d24] border border-white/5 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="p-4 space-y-3">{Array.from({ length: 5 }).map((_, i) => <Skeleton key={i} className="h-14" />)}</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="border-b border-white/5 bg-white/2">
                  <th className="w-8 px-4 py-3.5" />
                  {["Order","Customer","Date","Items","Total","Payment","Delivery","Actions"].map((h) => (
                    <th key={h} className="text-left px-3 py-3.5 text-white/30 text-xs font-semibold uppercase tracking-wider whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/4">
                {filtered.map((order) => {
                  const id         = String(order._id || order.id);
                  const isExpanded = expandedOrder === id;
                  const isUpdating = updatingId === id;

                  return (
                    <React.Fragment key={id}>
                      {/* ── Summary row ── */}
                      <tr className={`transition-colors cursor-pointer ${isExpanded ? "bg-violet-900/10" : "hover:bg-white/3"}`}
                        onClick={() => toggleExpand(id)}>
                        {/* Expand toggle */}
                        <td className="px-4 py-3.5">
                          <span className={`text-white/30 text-xs transition-transform inline-block ${isExpanded ? "rotate-90" : ""}`}>▶</span>
                        </td>

                        {/* Order ID */}
                        <td className="px-3 py-3.5">
                          <p className="font-mono text-violet-400 text-xs font-bold">{order.orderNumber || id.slice(-8).toUpperCase()}</p>
                          <p className="text-white/20 text-xs mt-0.5 font-mono">{id.slice(-12)}</p>
                        </td>

                        {/* Customer */}
                        <td className="px-3 py-3.5">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                              {(order.userName || "?").charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <p className="text-white text-xs font-medium">{order.userName || order.address?.fullName || "Unknown"}</p>
                              <p className="text-white/30 text-xs">{order.userEmail || order.address?.city || ""}</p>
                            </div>
                          </div>
                        </td>

                        {/* Date */}
                        <td className="px-3 py-3.5 text-white/40 text-xs whitespace-nowrap">
                          {order.createdAt
                            ? new Date(order.createdAt).toLocaleDateString("en-IN", { day:"numeric", month:"short", year:"2-digit" })
                            : "—"}
                          <br />
                          <span className="text-white/20" style={{ fontSize: "10px" }}>
                            {order.createdAt ? new Date(order.createdAt).toLocaleTimeString("en-IN", { hour:"2-digit", minute:"2-digit" }) : ""}
                          </span>
                        </td>

                        {/* Items (count only in summary row) */}
                        <td className="px-3 py-3.5">
                          <div className="flex items-center gap-1.5">
                            {/* Show mini product images in summary */}
                            {Array.isArray(order.items) && order.items.slice(0, 3).map((item, i) => (
                              <div key={i} className="w-8 h-8 rounded-lg overflow-hidden bg-white/5 border border-white/10 flex-shrink-0">
                                {item.image
                                  ? <img src={item.image} alt={item.name} className="w-full h-full object-cover" onError={(e) => { e.target.style.display = "none"; }} />
                                  : <div className="w-full h-full flex items-center justify-center text-white/20 text-xs">?</div>
                                }
                              </div>
                            ))}
                            {(order.itemCount || 0) > 3 && (
                              <span className="text-white/30 text-xs">+{order.itemCount - 3}</span>
                            )}
                            {(order.itemCount || 0) === 0 && <span className="text-white/30 text-xs">—</span>}
                          </div>
                        </td>

                        {/* Total */}
                        <td className="px-3 py-3.5">
                          <p className="text-white text-xs font-bold">₹{(order.total || 0).toLocaleString()}</p>
                          <p className="text-white/30 text-xs">{PAYMENT_LABELS[order.paymentMethod] || order.paymentMethod || "—"}</p>
                        </td>

                        {/* Payment status */}
                        <td className="px-3 py-3.5" onClick={(e) => e.stopPropagation()}>
                          {editPayment === id ? (
                            <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                              <select
                                defaultValue={order.paymentStatus || "pending"}
                                disabled={isUpdating}
                                onChange={(e) => handleUpdatePayment(id, e.target.value)}
                                className="bg-[#1e0a3c] border border-violet-500/30 text-white text-xs rounded-lg px-2 py-1 outline-none"
                              >
                                {["pending","paid","failed","refunded"].map((s) => (
                                  <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
                                ))}
                              </select>
                              <button onClick={() => setEditPayment(null)} className="text-white/30 text-xs hover:text-white/60">✕</button>
                            </div>
                          ) : (
                            <div className="flex items-center gap-1.5">
                              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full capitalize ${PAYMENT_STYLES[order.paymentStatus || "pending"]}`}>
                                {order.paymentStatus || "pending"}
                              </span>
                              <button onClick={(e) => { e.stopPropagation(); setEditPayment(id); setEditStatus(null); }}
                                className="text-white/20 hover:text-violet-400 text-xs transition-colors" title="Edit payment status">✏</button>
                            </div>
                          )}
                        </td>

                        {/* Delivery status */}
                        <td className="px-3 py-3.5" onClick={(e) => e.stopPropagation()}>
                          {editStatus === id ? (
                            <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                              <select
                                defaultValue={order.status}
                                disabled={isUpdating}
                                onChange={(e) => handleUpdateDelivery(id, e.target.value)}
                                className="bg-[#1e0a3c] border border-violet-500/30 text-white text-xs rounded-lg px-2 py-1 outline-none"
                              >
                                {["Pending","Processing","Shipped","Delivered","Cancelled"].map((s) => (
                                  <option key={s}>{s}</option>
                                ))}
                              </select>
                              <button onClick={() => setEditStatus(null)} className="text-white/30 text-xs hover:text-white/60">✕</button>
                            </div>
                          ) : (
                            <div className="flex items-center gap-1.5">
                              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${STATUS_STYLES[order.status] || STATUS_STYLES.Pending}`}>
                                {order.status || "Pending"}
                              </span>
                              <button onClick={(e) => { e.stopPropagation(); setEditStatus(id); setEditPayment(null); }}
                                className="text-white/20 hover:text-violet-400 text-xs transition-colors" title="Edit delivery status">✏</button>
                            </div>
                          )}
                        </td>

                        {/* Actions */}
                        <td className="px-3 py-3.5" onClick={(e) => e.stopPropagation()}>
                          <button onClick={() => toggleExpand(id)}
                            className="text-xs text-violet-400 hover:text-violet-300 font-semibold transition-colors px-2 py-1 rounded-lg hover:bg-violet-500/10">
                            {isExpanded ? "Close" : "Details"}
                          </button>
                        </td>
                      </tr>

                      {/* ── Expanded order details row ── */}
                      {isExpanded && (
                        <tr className="bg-[#0f0820]">
                          <td colSpan={9} className="px-6 py-5">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                              {/* ── LEFT: Items with images ── */}
                              <div className="lg:col-span-2 space-y-3">
                                <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-3">Order Items</p>
                                {(order.items || []).map((item, idx) => (
                                  <div key={idx} className="flex items-center gap-4 bg-white/3 rounded-xl p-3 border border-white/5">
                                    {/* Product image */}
                                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-white/5 border border-white/8 flex-shrink-0">
                                      {item.image ? (
                                        <img src={item.image} alt={item.name}
                                          className="w-full h-full object-cover"
                                          onError={(e) => {
                                            e.target.style.display = "none";
                                            e.target.nextSibling && (e.target.nextSibling.style.display = "flex");
                                          }} />
                                      ) : null}
                                      <div className="w-full h-full items-center justify-center text-white/20 text-xs hidden" style={{ display: item.image ? "none" : "flex" }}>
                                        📦
                                      </div>
                                    </div>

                                    {/* Product details */}
                                    <div className="flex-1 min-w-0">
                                      <p className="text-violet-400 text-xs font-semibold uppercase tracking-wider mb-0.5">{item.brand || "—"}</p>
                                      <p className="text-white text-sm font-medium truncate">{item.name}</p>
                                      <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                                        <span className="bg-white/8 text-white/50 text-xs px-2 py-0.5 rounded-lg border border-white/8">Size: {item.size}</span>
                                        <span className="bg-white/8 text-white/50 text-xs px-2 py-0.5 rounded-lg border border-white/8 flex items-center gap-1.5">
                                          <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: item.color?.toLowerCase() === "white" ? "#f5f5f5" : (item.color?.toLowerCase() || "#aaa") }} />
                                          {item.color}
                                        </span>
                                        <span className="text-white/30 text-xs">Qty: {item.quantity}</span>
                                      </div>
                                    </div>

                                    {/* Price */}
                                    <div className="text-right flex-shrink-0">
                                      <p className="text-white font-bold text-sm">₹{(item.price * item.quantity).toLocaleString()}</p>
                                      {item.quantity > 1 && (
                                        <p className="text-white/30 text-xs mt-0.5">₹{item.price.toLocaleString()} each</p>
                                      )}
                                      {item.originalPrice && item.originalPrice > item.price && (
                                        <p className="text-emerald-400 text-xs">
                                          {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% off
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                ))}

                                {/* Delivery progress bar */}
                                <div className="bg-white/3 rounded-xl p-4 border border-white/5 mt-3">
                                  <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-1">Delivery Progress</p>
                                  <DeliveryProgress status={order.status} />
                                  {order.estimatedDelivery && order.status !== "Delivered" && order.status !== "Cancelled" && (
                                    <p className="text-white/30 text-xs mt-1">
                                      Estimated delivery: {new Date(order.estimatedDelivery).toLocaleDateString("en-IN", { day:"numeric", month:"long", year:"numeric" })}
                                    </p>
                                  )}
                                </div>

                                {/* Status timeline */}
                                {order.statusTimeline && order.statusTimeline.length > 0 && (
                                  <div className="bg-white/3 rounded-xl p-4 border border-white/5">
                                    <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-3">Status Timeline</p>
                                    <div className="space-y-2.5 max-h-48 overflow-y-auto">
                                      {[...order.statusTimeline].reverse().map((ev, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                          <div className="w-5 h-5 rounded-full bg-violet-600/30 border border-violet-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                                          </div>
                                          <div className="flex-1 min-w-0">
                                            <span className="text-xs font-semibold text-white/70">{ev.status}</span>
                                            {ev.message && <span className="text-xs text-white/30 ml-2">— {ev.message}</span>}
                                            <p className="text-white/25 text-xs mt-0.5">
                                              {ev.timestamp ? new Date(ev.timestamp).toLocaleString("en-IN") : ""}
                                            </p>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>

                              {/* ── RIGHT: Order info ── */}
                              <div className="space-y-4">

                                {/* Customer card */}
                                <div className="bg-white/3 rounded-xl p-4 border border-white/5">
                                  <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-3">Customer</p>
                                  <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center text-white font-bold">
                                      {(order.userName || "?").charAt(0)}
                                    </div>
                                    <div>
                                      <p className="text-white text-sm font-semibold">{order.userName || "Unknown"}</p>
                                      <p className="text-white/40 text-xs">{order.userEmail || "—"}</p>
                                    </div>
                                  </div>
                                  {order.userPhone && <p className="text-white/40 text-xs">📞 {order.userPhone}</p>}
                                  {order.userId && <p className="text-white/20 text-xs font-mono mt-1">ID: {String(order.userId).slice(-8).toUpperCase()}</p>}
                                </div>

                                {/* Delivery address */}
                                {order.address && (
                                  <div className="bg-white/3 rounded-xl p-4 border border-white/5">
                                    <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-3">📍 Delivery Address</p>
                                    <p className="text-white/80 text-xs font-semibold">{order.address.fullName}</p>
                                    <p className="text-white/40 text-xs mt-0.5">{order.address.phone}</p>
                                    <p className="text-white/40 text-xs mt-1 leading-relaxed">
                                      {order.address.street}, {order.address.city},<br />
                                      {order.address.state} - {order.address.pincode}
                                    </p>
                                    {order.address.label && (
                                      <span className="inline-block mt-2 bg-violet-500/15 text-violet-400 text-xs px-2 py-0.5 rounded-lg border border-violet-500/20">{order.address.label}</span>
                                    )}
                                  </div>
                                )}

                                {/* Order financials */}
                                <div className="bg-white/3 rounded-xl p-4 border border-white/5">
                                  <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-3">Price Breakdown</p>
                                  <div className="space-y-2">
                                    <div className="flex justify-between text-xs">
                                      <span className="text-white/40">Subtotal ({order.itemCount} items)</span>
                                      <span className="text-white/70">₹{(order.subtotal || order.total || 0).toLocaleString()}</span>
                                    </div>
                                    {(order.discount || 0) > 0 && (
                                      <div className="flex justify-between text-xs">
                                        <span className="text-emerald-400">Discount {order.couponCode ? `(${order.couponCode})` : ""}</span>
                                        <span className="text-emerald-400">− ₹{order.discount.toLocaleString()}</span>
                                      </div>
                                    )}
                                    <div className="flex justify-between text-xs">
                                      <span className="text-white/40">Shipping</span>
                                      <span className={(order.shippingFee || 0) === 0 ? "text-emerald-400" : "text-white/70"}>
                                        {(order.shippingFee || 0) === 0 ? "FREE" : `₹${order.shippingFee}`}
                                      </span>
                                    </div>
                                    <div className="flex justify-between text-sm font-bold pt-2 border-t border-white/8">
                                      <span className="text-white">Total</span>
                                      <span className="text-white">₹{(order.total || 0).toLocaleString()}</span>
                                    </div>
                                  </div>
                                </div>

                                {/* Payment + status edit */}
                                <div className="bg-white/3 rounded-xl p-4 border border-white/5">
                                  <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-3">Payment & Status</p>
                                  <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                      <span className="text-white/40 text-xs">Method</span>
                                      <span className="text-white/70 text-xs font-semibold">{PAYMENT_LABELS[order.paymentMethod] || order.paymentMethod || "—"}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                      <span className="text-white/40 text-xs">Payment</span>
                                      <div className="flex items-center gap-2">
                                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full capitalize ${PAYMENT_STYLES[order.paymentStatus || "pending"]}`}>
                                          {order.paymentStatus || "pending"}
                                        </span>
                                        <button onClick={() => setEditPayment(editPayment === id ? null : id)}
                                          className="text-white/20 hover:text-violet-400 text-xs transition-colors">✏</button>
                                      </div>
                                    </div>
                                    {editPayment === id && (
                                      <div className="flex gap-2 pt-1">
                                        {["pending","paid","failed","refunded"].map((ps) => (
                                          <button key={ps} disabled={isUpdating}
                                            onClick={() => handleUpdatePayment(id, ps)}
                                            className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all disabled:opacity-50 ${
                                              order.paymentStatus === ps
                                                ? "bg-violet-600 text-white"
                                                : "bg-white/8 text-white/50 hover:bg-violet-500/20 hover:text-violet-300"
                                            }`}>
                                            {ps.charAt(0).toUpperCase() + ps.slice(1)}
                                          </button>
                                        ))}
                                      </div>
                                    )}

                                    <div className="flex items-center justify-between">
                                      <span className="text-white/40 text-xs">Delivery</span>
                                      <div className="flex items-center gap-2">
                                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${STATUS_STYLES[order.status] || STATUS_STYLES.Pending}`}>
                                          {order.status}
                                        </span>
                                        <button onClick={() => setEditStatus(editStatus === id ? null : id)}
                                          className="text-white/20 hover:text-violet-400 text-xs transition-colors">✏</button>
                                      </div>
                                    </div>
                                    {editStatus === id && (
                                      <div className="grid grid-cols-2 gap-2 pt-1">
                                        {["Pending","Processing","Shipped","Delivered","Cancelled"].map((s) => (
                                          <button key={s} disabled={isUpdating}
                                            onClick={() => handleUpdateDelivery(id, s)}
                                            className={`py-1.5 rounded-lg text-xs font-semibold transition-all disabled:opacity-50 ${
                                              order.status === s
                                                ? "bg-violet-600 text-white"
                                                : "bg-white/8 text-white/50 hover:bg-violet-500/20 hover:text-violet-300"
                                            }`}>
                                            {s}
                                          </button>
                                        ))}
                                      </div>
                                    )}
                                    {isUpdating && (
                                      <p className="text-violet-400 text-xs text-center animate-pulse">Updating...</p>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {!loading && filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-white/20 text-4xl mb-3">📦</p>
            <p className="text-white/30 text-sm">No orders found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminOrders;