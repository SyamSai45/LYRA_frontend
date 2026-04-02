// AdminCustomers.jsx
// Full customer list with expandable profile dropdown per user.
import React, { useState } from "react";
import { Skeleton } from "./AdminUtils.jsx";

const Field = ({ label, value, mono = false, accent }) => (
  <div className="flex flex-col gap-0.5">
    <span className="text-white/25 text-[9px] font-bold uppercase tracking-widest">{label}</span>
    <span className={`text-xs font-medium break-all ${mono ? "font-mono" : ""} ${accent || "text-white/75"}`}>
      {value || <span className="text-white/20 italic">—</span>}
    </span>
  </div>
);

const Avatar = ({ name, size = "md" }) => {
  const initials = (name || "?").split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2);
  const sz = size === "lg" ? "w-14 h-14 text-lg" : size === "sm" ? "w-7 h-7 text-xs" : "w-9 h-9 text-sm";
  return (
    <div className={`${sz} rounded-full bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center text-white font-bold flex-shrink-0`}>
      {initials}
    </div>
  );
};

const StatusBadge = ({ status }) => {
  const map = {
    Active:   "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
    New:      "bg-blue-500/15    text-blue-400    border-blue-500/25",
    Inactive: "bg-gray-500/15    text-gray-400    border-gray-500/25",
    Blocked:  "bg-red-500/15     text-red-400     border-red-500/25",
  };
  return (
    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${map[status] || map.Active}`}>
      {status || "Active"}
    </span>
  );
};

const AdminCustomers = ({ customers, loading, errors, onRetry, searchQuery }) => {
  const [expanded, setExpanded] = useState(null);

  const filtered = searchQuery
    ? customers.filter((c) => {
        const q = searchQuery.toLowerCase();
        return (
          (c.name || c.fullName || "").toLowerCase().includes(q) ||
          (c.email || "").toLowerCase().includes(q) ||
          (c.phone || c.mobileNumber || "").includes(q) ||
          String(c._id || "").toLowerCase().includes(q)
        );
      })
    : customers;

  const toggle = (id) => setExpanded((p) => (p === id ? null : id));

  return (
    <div className="space-y-4">

      {errors?.customers && (
        <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-red-400 text-sm">
          ⚠ {errors.customers}
          {onRetry && <button onClick={onRetry} className="ml-auto text-xs underline">Retry</button>}
        </div>
      )}

      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <span className="text-white/40 text-sm">{filtered.length} customers</span>
          {filtered.length !== customers.length && (
            <span className="text-violet-400 text-xs">(filtered from {customers.length})</span>
          )}
        </div>
        <button onClick={onRetry}
          className="text-xs text-violet-400 hover:text-violet-300 px-3 py-1.5 rounded-full border border-violet-500/20 hover:border-violet-500/40 transition-all">
          ↻ Refresh
        </button>
      </div>

      <div className="bg-[#130d24] border border-white/5 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="p-4 space-y-3">
            {Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} className="h-14" />)}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="border-b border-white/5 bg-white/[0.02]">
                  <th className="w-8 px-4 py-3.5" />
                  {["Customer","User ID","Email","Phone","City","Orders","Spent","Joined","Status"].map((h) => (
                    <th key={h} className="text-left px-3 py-3.5 text-white/30 text-xs font-bold uppercase tracking-wider whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {filtered.map((c) => {
                  const id   = String(c._id || c.id || "");
                  const name = c.name || c.fullName || "Unknown";
                  const isEx = expanded === id;

                  return (
                    <React.Fragment key={id}>
                      <tr
                        className={`transition-colors cursor-pointer ${isEx ? "bg-violet-900/10" : "hover:bg-white/[0.02]"}`}
                        onClick={() => toggle(id)}
                      >
                        <td className="px-4 py-3.5">
                          <span className={`text-white/30 text-xs transition-transform inline-block ${isEx ? "rotate-90" : ""}`}>▶</span>
                        </td>
                        <td className="px-3 py-3.5">
                          <div className="flex items-center gap-2.5">
                            <Avatar name={name} />
                            <div>
                              <p className="text-white text-xs font-semibold">{name}</p>
                              {(c.role && c.role !== "user") && (
                                <p className="text-violet-400 text-[9px] font-bold uppercase">{c.role}</p>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-3 py-3.5">
                          <span className="font-mono text-violet-400 text-[10px] font-bold">{id.slice(-10).toUpperCase()}</span>
                        </td>
                        <td className="px-3 py-3.5 text-white/50 text-xs">{c.email || "—"}</td>
                        <td className="px-3 py-3.5 text-white/50 text-xs">{c.phone || c.mobileNumber || "—"}</td>
                        <td className="px-3 py-3.5 text-white/50 text-xs">{c.city || "—"}</td>
                        <td className="px-3 py-3.5 text-white text-xs font-bold">{c.orders || c.orderCount || 0}</td>
                        <td className="px-3 py-3.5 text-emerald-400 text-xs font-bold">
                          ₹{(c.spent || c.totalSpent || 0).toLocaleString()}
                        </td>
                        <td className="px-3 py-3.5 text-white/30 text-xs whitespace-nowrap">
                          {c.joined || (c.createdAt
                            ? new Date(c.createdAt).toLocaleDateString("en-IN", { day:"numeric", month:"short", year:"numeric" })
                            : "—")}
                        </td>
                        <td className="px-3 py-3.5"><StatusBadge status={c.status} /></td>
                      </tr>

                      {/* ── Full profile dropdown ── */}
                      {isEx && (
                        <tr className="bg-[#0a0618]">
                          <td colSpan={10} className="px-6 py-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

                              {/* Card 1 — Identity */}
                              <div className="bg-[#130d24] border border-white/5 rounded-2xl p-5">
                                <div className="flex items-start gap-4 mb-5">
                                  <Avatar name={name} size="lg" />
                                  <div className="min-w-0">
                                    <p className="text-white font-bold text-base leading-tight">{name}</p>
                                    <p className="text-white/40 text-xs mt-0.5 break-all">{c.email || "No email"}</p>
                                    <div className="mt-1.5"><StatusBadge status={c.status} /></div>
                                  </div>
                                </div>
                                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-3">Identity</p>
                                <div className="grid grid-cols-1 gap-3">
                                  <Field label="Full User ID" value={id} mono accent="text-violet-400" />
                                  <Field label="Short ID" value={id.slice(-10).toUpperCase()} mono />
                                  <Field label="Full Name" value={name} />
                                  <Field label="Email" value={c.email} />
                                  <Field label="Mobile" value={c.phone || c.mobileNumber} />
                                  <Field label="Gender" value={c.gender} />
                                  <Field label="Date of Birth" value={c.dob
                                    ? new Date(c.dob).toLocaleDateString("en-IN")
                                    : (c.dateOfBirth ? new Date(c.dateOfBirth).toLocaleDateString("en-IN") : null)} />
                                  <Field label="Role" value={c.role || "user"} />
                                </div>
                              </div>

                              {/* Card 2 — Account & Contact */}
                              <div className="bg-[#130d24] border border-white/5 rounded-2xl p-5 space-y-4">
                                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Account Details</p>
                                <div className="grid grid-cols-2 gap-3">
                                  <Field label="Created At" value={c.createdAt
                                    ? new Date(c.createdAt).toLocaleDateString("en-IN", { day:"numeric", month:"short", year:"numeric" })
                                    : null} />
                                  <Field label="Last Login" value={c.lastLogin
                                    ? new Date(c.lastLogin).toLocaleDateString("en-IN")
                                    : null} />
                                  <Field label="Auth Provider" value={c.provider || "email"} />
                                  <Field label="Email Verified"
                                    value={c.emailVerified === true ? "✓ Verified" : c.emailVerified === false ? "✗ Unverified" : null}
                                    accent={c.emailVerified ? "text-emerald-400" : "text-red-400"}
                                  />
                                  <Field label="Phone Verified"
                                    value={c.phoneVerified === true ? "✓ Verified" : c.phoneVerified === false ? "✗ Unverified" : null}
                                    accent={c.phoneVerified ? "text-emerald-400" : "text-red-400"}
                                  />
                                  <Field label="Account Status" value={c.status || "Active"}
                                    accent={c.status === "Blocked" ? "text-red-400" : c.status === "Inactive" ? "text-gray-400" : "text-emerald-400"}
                                  />
                                  <Field label="Language" value={c.language || c.preferredLanguage} />
                                  <Field label="Referral Code" value={c.referralCode} mono />
                                </div>

                                <div className="border-t border-white/5 pt-4">
                                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-3">Location</p>
                                  <div className="grid grid-cols-2 gap-3">
                                    <Field label="City" value={c.city} />
                                    <Field label="State" value={c.state} />
                                    <Field label="Pincode" value={c.pincode} />
                                    <Field label="Country" value={c.country || "India"} />
                                  </div>
                                </div>

                                {/* Notification prefs */}
                                {c.notifications && (
                                  <div className="border-t border-white/5 pt-4">
                                    <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-3">Notifications</p>
                                    <div className="flex gap-3 flex-wrap">
                                      {Object.entries(c.notifications).map(([k, v]) => (
                                        <span key={k} className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                                          v ? "border-emerald-500/25 text-emerald-400" : "border-white/10 text-white/25"
                                        }`}>{k}: {v ? "on" : "off"}</span>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>

                              {/* Card 3 — Orders & Addresses */}
                              <div className="bg-[#130d24] border border-white/5 rounded-2xl p-5 space-y-4">
                                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Order Summary</p>
                                <div className="grid grid-cols-2 gap-3">
                                  <div className="bg-white/3 rounded-xl p-3 border border-white/5 text-center">
                                    <p className="text-white font-bold text-2xl" style={{ fontFamily: "Georgia, serif" }}>
                                      {c.orders || c.orderCount || 0}
                                    </p>
                                    <p className="text-white/25 text-[9px] uppercase tracking-widest mt-0.5">Total Orders</p>
                                  </div>
                                  <div className="bg-white/3 rounded-xl p-3 border border-white/5 text-center">
                                    <p className="text-emerald-400 font-bold text-xl" style={{ fontFamily: "Georgia, serif" }}>
                                      ₹{(c.spent || c.totalSpent || 0).toLocaleString()}
                                    </p>
                                    <p className="text-white/25 text-[9px] uppercase tracking-widest mt-0.5">Total Spent</p>
                                  </div>
                                  <div className="bg-white/3 rounded-xl p-3 border border-white/5 text-center">
                                    <p className="text-blue-400 font-bold text-base" style={{ fontFamily: "Georgia, serif" }}>
                                      {(c.orders || c.orderCount) > 0
                                        ? `₹${Math.round((c.spent || c.totalSpent || 0) / (c.orders || c.orderCount)).toLocaleString()}`
                                        : "—"}
                                    </p>
                                    <p className="text-white/25 text-[9px] uppercase tracking-widest mt-0.5">Avg Order</p>
                                  </div>
                                  <div className="bg-white/3 rounded-xl p-3 border border-white/5 text-center">
                                    <p className="text-amber-400 font-bold text-base" style={{ fontFamily: "Georgia, serif" }}>
                                      {c.cancelledOrders || 0}
                                    </p>
                                    <p className="text-white/25 text-[9px] uppercase tracking-widest mt-0.5">Cancelled</p>
                                  </div>
                                </div>

                                {/* Saved addresses */}
                                {Array.isArray(c.addresses) && c.addresses.length > 0 && (
                                  <div className="border-t border-white/5 pt-4">
                                    <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-3">
                                      Saved Addresses ({c.addresses.length})
                                    </p>
                                    <div className="space-y-2 max-h-52 overflow-y-auto pr-1">
                                      {c.addresses.map((addr, i) => (
                                        <div key={i} className="bg-white/3 rounded-xl p-3 border border-white/5">
                                          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                                            <span className="text-[9px] font-bold text-violet-400 uppercase px-2 py-0.5 bg-violet-500/10 rounded-full border border-violet-500/20">
                                              {addr.label || "Address"}
                                            </span>
                                            {addr.isDefault && (
                                              <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">✓ Default</span>
                                            )}
                                          </div>
                                          <p className="text-white/80 text-xs font-semibold">{addr.fullName}</p>
                                          <p className="text-white/45 text-xs mt-0.5 leading-relaxed">
                                            {[addr.street, addr.city, addr.state, addr.pincode].filter(Boolean).join(", ")}
                                          </p>
                                          {addr.phone && <p className="text-white/30 text-xs mt-0.5">📞 {addr.phone}</p>}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {/* Recent orders */}
                                {Array.isArray(c.recentOrders) && c.recentOrders.length > 0 && (
                                  <div className="border-t border-white/5 pt-4">
                                    <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-2">Recent Orders</p>
                                    <div className="space-y-2 max-h-36 overflow-y-auto">
                                      {c.recentOrders.slice(0, 6).map((order, i) => (
                                        <div key={i} className="flex items-center justify-between gap-2 text-xs bg-white/3 rounded-lg px-3 py-2 border border-white/5">
                                          <span className="font-mono text-violet-400 font-bold">
                                            {(order.orderNumber || String(order._id || "").slice(-8)).toUpperCase()}
                                          </span>
                                          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                                            order.status === "Delivered" ? "text-emerald-400 bg-emerald-500/10"
                                            : order.status === "Cancelled" ? "text-red-400 bg-red-500/10"
                                            : order.status === "Shipped"  ? "text-blue-400 bg-blue-500/10"
                                            : "text-amber-400 bg-amber-500/10"
                                          }`}>{order.status || "—"}</span>
                                          <span className="text-white/50 font-semibold">₹{(order.total || 0).toLocaleString()}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}
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
            <p className="text-4xl mb-3">👥</p>
            <p className="text-white/30 text-sm">No customers found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminCustomers;