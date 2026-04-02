// AdminHeroSlides.jsx
// ─────────────────────────────────────────────────────────────────
// Manages hero banner slides shown on the Dashboard.
//
// API routes (all under /api/admin):
//   GET    /hero-slides/           → list all
//   GET    /hero-slides/active     → only active ones (Dashboard reads this)
//   POST   /hero-slides/           → create new slide
//   PUT    /hero-slides/:id        → update slide
//   DELETE /hero-slides/:id        → delete slide
//   PATCH  /hero-slides/:id/toggle → toggle active on/off
//   POST   /hero-slides/seed       → seed default slides (one-time)
//
// Slide shape (what the Dashboard HeroSection expects):
// {
//   _id, title, subtitle, cta, image,
//   gradientFrom, gradientVia, gradientTo, gradientDir,
//   active, order
// }
// ─────────────────────────────────────────────────────────────────
import React, { useState, useEffect, useCallback } from "react";
import { apiFetch } from "./AdminUtils.jsx";

// ── Gradient presets ──────────────────────────────────────────────
const GRADIENT_PRESETS = [
  { label: "Royal Purple",  from: "#0f0518", via: "#2e1065", to: "#4c1d95"  },
  { label: "Deep Navy",     from: "#0c0a1e", via: "#1e3a5f", to: "#1d4ed8"  },
  { label: "Burnt Amber",   from: "#1c0700", via: "#78350f", to: "#b45309"  },
  { label: "Rose Crimson",  from: "#3b0020", via: "#9d174d", to: "#db2777"  },
  { label: "Forest Green",  from: "#022c16", via: "#065f46", to: "#059669"  },
  { label: "Midnight Teal", from: "#0c1a1a", via: "#134e4a", to: "#0f766e"  },
  { label: "Slate Dark",    from: "#0f172a", via: "#1e293b", to: "#334155"  },
  { label: "Magenta Deep",  from: "#2d0036", via: "#5b21b6", to: "#7c3aed"  },
];

// ── Default empty form ────────────────────────────────────────────
const EMPTY_FORM = {
  title:        "",
  subtitle:     "",
  cta:          "Shop Now",
  image:        "",
  gradientFrom: "#0f0518",
  gradientVia:  "#2e1065",
  gradientTo:   "#4c1d95",
  gradientDir:  "135deg",
  order:        0,
  active:       true,
};

// ── Skeleton ──────────────────────────────────────────────────────
const Sk = ({ className = "" }) => (
  <div className={`animate-pulse bg-white/5 rounded-xl ${className}`} />
);

// ── Live mini preview of the hero card ───────────────────────────
const SlidePreview = ({ form }) => (
  <div
    className="relative rounded-2xl overflow-hidden border border-white/10"
    style={{
      height: "180px",
      background: `linear-gradient(${form.gradientDir || "135deg"}, ${form.gradientFrom || "#0f0518"}, ${form.gradientVia || "#2e1065"}, ${form.gradientTo || "#4c1d95"})`,
    }}
  >
    {/* Dot texture */}
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.06]"
      style={{ backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)", backgroundSize: "22px 22px" }}
    />
    {/* Image right-fade */}
    {form.image && (
      <div className="absolute right-0 top-0 bottom-0 w-[55%]">
        <img
          src={form.image}
          alt="preview"
          className="w-full h-full object-cover"
          style={{ maskImage: "linear-gradient(to right, transparent 0%, black 35%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 35%)" }}
          onError={(e) => { e.target.style.display = "none"; }}
        />
      </div>
    )}
    {/* Content */}
    <div className="relative z-10 h-full flex flex-col justify-center px-6 max-w-[55%]">
      <p className="text-white/40 text-[9px] tracking-[0.3em] uppercase mb-1.5">✦ Lyra Exclusive</p>
      <h3 className="text-white font-light leading-tight mb-1.5" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(0.9rem, 2vw, 1.4rem)" }}>
        {form.title || <span className="text-white/20 italic">Slide Title</span>}
      </h3>
      <p className="text-white/50 text-xs leading-relaxed mb-3 line-clamp-2">
        {form.subtitle || <span className="text-white/20 italic">Subtitle text…</span>}
      </p>
      <span className="inline-block px-4 py-1.5 bg-white text-[#1e0a3c] text-xs font-bold rounded-full w-fit">
        {form.cta || "Shop Now"} →
      </span>
    </div>
    <p className="absolute bottom-2 right-3 text-white/15 text-[9px]">PREVIEW</p>
  </div>
);

// ══════════════════════════════════════════════════════════════════
// ADMIN HERO SLIDES
// ══════════════════════════════════════════════════════════════════
const AdminHeroSlides = ({ notify }) => {
  const [slides,    setSlides]    = useState([]);
  const [loading,   setLoading]   = useState(true);
  const [saving,    setSaving]    = useState(false);
  const [deleting,  setDeleting]  = useState(null);
  const [toggling,  setToggling]  = useState(null);
  const [showForm,  setShowForm]  = useState(false);
  const [editing,   setEditing]   = useState(null);    // slide object being edited
  const [form,      setForm]      = useState(EMPTY_FORM);
  const [seeding,   setSeeding]   = useState(false);
  const [imgError,  setImgError]  = useState(false);

  // ── Fetch all slides ──────────────────────────────────────────
  const fetchSlides = useCallback(async () => {
    setLoading(true);
    try {
      const data = await apiFetch("/hero-slides/");
      setSlides(Array.isArray(data) ? data : data.slides || []);
    } catch (e) {
      notify?.(`Failed to load slides: ${e.message}`, "error");
    } finally {
      setLoading(false);
    }
  }, [notify]);

  useEffect(() => { fetchSlides(); }, [fetchSlides]);

  // ── Seed defaults ─────────────────────────────────────────────
  const handleSeed = async () => {
    setSeeding(true);
    try {
      await apiFetch("/hero-slides/seed", { method: "POST" });
      notify?.("✓ Default slides seeded");
      fetchSlides();
    } catch (e) {
      notify?.(`Seed failed: ${e.message}`, "error");
    } finally {
      setSeeding(false);
    }
  };

  // ── Open form ─────────────────────────────────────────────────
  const openCreate = () => {
    setEditing(null);
    setForm({ ...EMPTY_FORM, order: slides.length });
    setImgError(false);
    setShowForm(true);
  };

  const openEdit = (slide) => {
    setEditing(slide);
    setForm({
      title:        slide.title        || "",
      subtitle:     slide.subtitle     || "",
      cta:          slide.cta          || "Shop Now",
      image:        slide.image        || "",
      gradientFrom: slide.gradientFrom || "#0f0518",
      gradientVia:  slide.gradientVia  || "#2e1065",
      gradientTo:   slide.gradientTo   || "#4c1d95",
      gradientDir:  slide.gradientDir  || "135deg",
      order:        slide.order        ?? 0,
      active:       slide.active       !== false,
    });
    setImgError(false);
    setShowForm(true);
  };

  // ── Save (create or update) ───────────────────────────────────
  const handleSave = async () => {
    if (!form.title.trim()) { notify?.("Title is required", "error"); return; }
    setSaving(true);
    try {
      if (editing) {
        const updated = await apiFetch(`/hero-slides/${editing._id}`, {
          method: "PUT",
          body: JSON.stringify(form),
        });
        setSlides((prev) => prev.map((s) => s._id === editing._id ? (updated.slide || updated) : s));
        notify?.("✓ Slide updated");
      } else {
        const created = await apiFetch("/hero-slides/", {
          method: "POST",
          body: JSON.stringify(form),
        });
        setSlides((prev) => [...prev, created.slide || created]);
        notify?.("✓ Slide created");
      }
      setShowForm(false);
    } catch (e) {
      notify?.(`Save failed: ${e.message}`, "error");
    } finally {
      setSaving(false);
    }
  };

  // ── Delete ────────────────────────────────────────────────────
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this slide?")) return;
    setDeleting(id);
    try {
      await apiFetch(`/hero-slides/${id}`, { method: "DELETE" });
      setSlides((prev) => prev.filter((s) => s._id !== id));
      notify?.("✓ Slide deleted");
    } catch (e) {
      notify?.(`Delete failed: ${e.message}`, "error");
    } finally {
      setDeleting(null);
    }
  };

  // ── Toggle active ─────────────────────────────────────────────
  const handleToggle = async (id) => {
    setToggling(id);
    try {
      const res = await apiFetch(`/hero-slides/${id}/toggle`, { method: "PATCH" });
      setSlides((prev) => prev.map((s) => s._id === id ? { ...s, active: res.active ?? !s.active } : s));
      notify?.(`✓ Slide ${res.active ? "activated" : "deactivated"}`);
    } catch (e) {
      notify?.(`Toggle failed: ${e.message}`, "error");
    } finally {
      setToggling(null);
    }
  };

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  // ─────────────────────────────────────────────────────────────
  return (
    <div className="space-y-6">

      {/* ── Header ── */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-white font-bold text-lg">Hero Slides</h2>
          <p className="text-white/30 text-xs mt-0.5">Manage the full-width hero banner on the storefront</p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={handleSeed} disabled={seeding}
            className="px-4 py-2 text-xs font-semibold text-violet-300 border border-violet-500/30 rounded-xl hover:bg-violet-500/10 transition-all disabled:opacity-50">
            {seeding ? "Seeding…" : "🌱 Seed Defaults"}
          </button>
          <button onClick={fetchSlides}
            className="px-4 py-2 text-xs font-semibold text-white/50 border border-white/10 rounded-xl hover:bg-white/5 transition-all">
            ↻ Refresh
          </button>
          <button onClick={openCreate}
            className="px-5 py-2 text-xs font-bold bg-gradient-to-r from-violet-600 to-purple-500 text-white rounded-xl hover:shadow-lg hover:shadow-violet-900/40 transition-all">
            + New Slide
          </button>
        </div>
      </div>

      {/* ── Slide cards ── */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array.from({ length: 4 }).map((_, i) => <Sk key={i} className="h-56" />)}
        </div>
      ) : slides.length === 0 ? (
        <div className="text-center py-20 bg-[#130d24] border border-white/5 rounded-2xl">
          <p className="text-5xl mb-4">🖼</p>
          <p className="text-white/40 text-base mb-2">No hero slides yet</p>
          <p className="text-white/20 text-sm mb-5">Click "Seed Defaults" to add 5 starter slides, or create one manually.</p>
          <button onClick={openCreate}
            className="px-6 py-2.5 bg-violet-600 text-white text-sm font-semibold rounded-xl hover:bg-violet-700 transition-colors">
            + Create First Slide
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {[...slides].sort((a, b) => (a.order ?? 0) - (b.order ?? 0)).map((slide) => (
            <div key={slide._id}
              className={`bg-[#130d24] border rounded-2xl overflow-hidden transition-all ${
                slide.active !== false ? "border-violet-500/20" : "border-white/5 opacity-60"
              }`}
            >
              {/* Mini preview */}
              <div
                className="relative h-44 overflow-hidden"
                style={{ background: `linear-gradient(${slide.gradientDir || "135deg"}, ${slide.gradientFrom || "#0f0518"}, ${slide.gradientVia || "#2e1065"}, ${slide.gradientTo || "#4c1d95"})` }}
              >
                {slide.image && (
                  <div className="absolute right-0 top-0 bottom-0 w-[55%]">
                    <img src={slide.image} alt={slide.title}
                      className="w-full h-full object-cover"
                      style={{ maskImage: "linear-gradient(to right, transparent 0%, black 35%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 35%)" }}
                      onError={(e) => { e.target.style.display = "none"; }}
                    />
                  </div>
                )}
                <div className="relative z-10 h-full flex flex-col justify-center px-5 max-w-[55%]">
                  <p className="text-white/35 text-[8px] tracking-[0.3em] uppercase mb-1">✦ Lyra Exclusive</p>
                  <h3 className="text-white font-light text-lg leading-tight mb-1" style={{ fontFamily: "Georgia, serif" }}>{slide.title}</h3>
                  <p className="text-white/45 text-xs leading-relaxed line-clamp-2">{slide.subtitle}</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-white text-[#1e0a3c] text-xs font-bold rounded-full w-fit">{slide.cta || "Shop Now"} →</span>
                </div>
                {/* Order badge */}
                <div className="absolute top-2 left-2 bg-black/40 text-white/60 text-[9px] px-2 py-0.5 rounded-full font-mono">
                  #{(slide.order ?? 0) + 1}
                </div>
                {/* Active indicator */}
                <div className={`absolute top-2 right-2 text-[9px] font-bold px-2.5 py-1 rounded-full ${
                  slide.active !== false
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                    : "bg-white/10 text-white/30 border border-white/10"
                }`}>
                  {slide.active !== false ? "● ACTIVE" : "○ HIDDEN"}
                </div>
              </div>

              {/* Footer */}
              <div className="px-4 py-3 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-white/60 text-xs font-mono truncate">{slide._id}</p>
                  <p className="text-white/25 text-[10px] mt-0.5">
                    Order: {slide.order ?? 0} · {slide.gradientFrom} → {slide.gradientTo}
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  {/* Toggle */}
                  <button
                    onClick={() => handleToggle(slide._id)}
                    disabled={toggling === slide._id}
                    title={slide.active !== false ? "Deactivate" : "Activate"}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all disabled:opacity-50 ${
                      slide.active !== false
                        ? "border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10"
                        : "border-white/10 text-white/30 hover:bg-white/5 hover:text-white/60"
                    }`}
                  >
                    {toggling === slide._id ? "…" : slide.active !== false ? "Deactivate" : "Activate"}
                  </button>
                  {/* Edit */}
                  <button onClick={() => openEdit(slide)}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-violet-500/30 text-violet-400 hover:bg-violet-500/10 transition-all">
                    Edit
                  </button>
                  {/* Delete */}
                  <button onClick={() => handleDelete(slide._id)} disabled={deleting === slide._id}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-red-500/20 text-red-400 hover:bg-red-500/10 transition-all disabled:opacity-50">
                    {deleting === slide._id ? "…" : "Delete"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ══════════════════════════════════════════════════════
          SLIDE FORM MODAL
      ══════════════════════════════════════════════════════ */}
      {showForm && (
        <div className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm flex items-start justify-center overflow-y-auto py-8 px-4">
          <div className="bg-[#130d24] border border-white/10 rounded-2xl w-full max-w-3xl shadow-2xl">

            {/* Modal header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
              <div>
                <h3 className="text-white font-bold text-base">{editing ? "Edit Slide" : "New Hero Slide"}</h3>
                <p className="text-white/30 text-xs mt-0.5">Changes appear immediately on the storefront once active</p>
              </div>
              <button onClick={() => setShowForm(false)}
                className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all">✕</button>
            </div>

            <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">

              {/* ── LEFT: form fields ── */}
              <div className="space-y-4">

                {/* Title */}
                <div>
                  <label className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-1.5 block">Slide Title *</label>
                  <input value={form.title}
                    onChange={(e) => set("title", e.target.value)}
                    placeholder="e.g. New Season Arrivals"
                    className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-2.5 text-sm outline-none focus:border-violet-500/60 transition-all placeholder-white/20"
                  />
                </div>

                {/* Subtitle */}
                <div>
                  <label className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-1.5 block">Subtitle</label>
                  <textarea value={form.subtitle}
                    onChange={(e) => set("subtitle", e.target.value)}
                    rows={2}
                    placeholder="e.g. Up to 50% off on premium fashion & lifestyle"
                    className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-2.5 text-sm outline-none focus:border-violet-500/60 transition-all placeholder-white/20 resize-none"
                  />
                </div>

                {/* CTA */}
                <div>
                  <label className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-1.5 block">CTA Button Label</label>
                  <input value={form.cta}
                    onChange={(e) => set("cta", e.target.value)}
                    placeholder="e.g. Shop Now"
                    className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-2.5 text-sm outline-none focus:border-violet-500/60 transition-all placeholder-white/20"
                  />
                </div>

                {/* Image URL */}
                <div>
                  <label className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-1.5 block">
                    Image URL <span className="text-white/20 font-normal normal-case">(right-side lifestyle photo)</span>
                  </label>
                  <input value={form.image}
                    onChange={(e) => { set("image", e.target.value); setImgError(false); }}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-2.5 text-sm outline-none focus:border-violet-500/60 transition-all placeholder-white/20"
                  />
                  {form.image && !imgError && (
                    <img src={form.image} alt="check"
                      className="mt-2 w-24 h-16 object-cover rounded-lg border border-white/10"
                      onError={() => setImgError(true)}
                    />
                  )}
                  {imgError && <p className="text-red-400 text-xs mt-1">⚠ Image URL could not be loaded</p>}
                </div>

                {/* Order + Active row */}
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-1.5 block">Display Order</label>
                    <input
                      type="number" min={0}
                      value={form.order}
                      onChange={(e) => set("order", parseInt(e.target.value) || 0)}
                      className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-2.5 text-sm outline-none focus:border-violet-500/60 transition-all"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-1.5 block">Status</label>
                    <button
                      onClick={() => set("active", !form.active)}
                      className={`w-full py-2.5 rounded-xl text-sm font-semibold border transition-all ${
                        form.active
                          ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-400"
                          : "bg-white/5 border-white/10 text-white/40"
                      }`}
                    >
                      {form.active ? "● Active" : "○ Hidden"}
                    </button>
                  </div>
                </div>
              </div>

              {/* ── RIGHT: gradient + preview ── */}
              <div className="space-y-4">

                {/* Gradient presets */}
                <div>
                  <label className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-2 block">Gradient Preset</label>
                  <div className="grid grid-cols-4 gap-2">
                    {GRADIENT_PRESETS.map((p) => (
                      <button key={p.label}
                        onClick={() => { set("gradientFrom", p.from); set("gradientVia", p.via); set("gradientTo", p.to); }}
                        title={p.label}
                        className="h-8 rounded-lg border border-white/10 hover:scale-105 transition-all"
                        style={{ background: `linear-gradient(135deg, ${p.from}, ${p.via}, ${p.to})` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Custom gradient hex inputs */}
                <div>
                  <label className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-2 block">Custom Gradient</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: "From", key: "gradientFrom" },
                      { label: "Via",  key: "gradientVia"  },
                      { label: "To",   key: "gradientTo"   },
                    ].map(({ label, key }) => (
                      <div key={key} className="space-y-1">
                        <p className="text-white/25 text-[10px] uppercase tracking-widest">{label}</p>
                        <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-xl px-2.5 py-1.5">
                          <input
                            type="color"
                            value={form[key] || "#000000"}
                            onChange={(e) => set(key, e.target.value)}
                            className="w-5 h-5 rounded cursor-pointer border-0 bg-transparent p-0"
                          />
                          <input
                            type="text"
                            value={form[key]}
                            onChange={(e) => set(key, e.target.value)}
                            className="flex-1 bg-transparent text-white text-xs outline-none font-mono"
                            maxLength={9}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-2">
                    <p className="text-white/25 text-[10px] uppercase tracking-widest mb-1">Direction</p>
                    <div className="flex gap-2">
                      {["135deg","to right","to bottom","to bottom right"].map((d) => (
                        <button key={d} onClick={() => set("gradientDir", d)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                            form.gradientDir === d
                              ? "bg-violet-600 text-white"
                              : "bg-white/5 text-white/30 hover:text-white/60 hover:bg-white/8"
                          }`}>
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Live preview */}
                <div>
                  <label className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-2 block">Live Preview</label>
                  <SlidePreview form={form} />
                </div>
              </div>
            </div>

            {/* Modal footer */}
            <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-white/5">
              <button onClick={() => setShowForm(false)}
                className="px-5 py-2.5 rounded-xl border border-white/10 text-white/50 text-sm font-semibold hover:bg-white/5 transition-all">
                Cancel
              </button>
              <button onClick={handleSave} disabled={saving || !form.title.trim()}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 text-white text-sm font-bold hover:shadow-lg hover:shadow-violet-900/40 transition-all disabled:opacity-50">
                {saving ? "Saving…" : editing ? "Save Changes" : "Create Slide"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminHeroSlides;