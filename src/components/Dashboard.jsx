import React, { useEffect, useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useCart }     from "./CartContext";
import { useWishlist } from "./WishlistContext";
import AddToCartModal  from "./AddToCartModal";
import axios           from "axios";
import LyraFooter      from "./Footer";

const API = axios.create({ baseURL: "http://localhost:6055/api/admin" });

// ══════════════════════════════════════════════════════════════════
// MEGA-MENU STRUCTURE
// ══════════════════════════════════════════════════════════════════
const MEGA_MENU = [
  {
    id: "men", label: "Men",
    featured: { label: "New Arrivals", img: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&q=80" },
    columns: [
      { title: "Clothing",    links: ["Shirts","T-Shirts","Jeans","Trousers","Kurtas","Jackets","Suits & Blazers","Shorts"] },
      { title: "Footwear",    links: ["Sneakers","Formal Shoes","Loafers","Sandals","Boots","Sports Shoes"] },
      { title: "Accessories", links: ["Watches","Sunglasses","Wallets","Belts","Bags & Backpacks","Caps & Hats"] },
      { title: "Grooming",    links: ["Skincare","Hair Care","Fragrances","Beard Care","Bath & Body"] },
    ],
  },
  {
    id: "women", label: "Women",
    featured: { label: "Trending Now", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
    columns: [
      { title: "Clothing",    links: ["Kurtas & Suits","Sarees","Dresses","Tops & Tees","Jeans","Ethnic Wear"] },
      { title: "Footwear",    links: ["Heels","Flats","Sandals","Sneakers","Boots","Wedges"] },
      { title: "Accessories", links: ["Handbags","Clutches","Jewellery","Sunglasses","Watches","Scarves"] },
      { title: "Beauty",      links: ["Lipstick","Foundation","Moisturisers","Serums","Perfumes","Skincare Kits"] },
    ],
  },
  {
    id: "kids", label: "Kids",
    featured: { label: "Back to School", img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&q=80" },
    columns: [
      { title: "Boys",          links: ["T-Shirts & Shirts","Jeans & Trousers","Ethnic Wear","Shoes"] },
      { title: "Girls",         links: ["Dresses","Tops & Tees","Ethnic Wear","Shoes"] },
      { title: "Infants",       links: ["Bodysuits","Sleepsuits","Rompers","Booties"] },
      { title: "Essentials",    links: ["School Bags","Lunch Boxes","Stationery","Toys"] },
    ],
  },
  {
    id: "beauty", label: "Beauty",
    featured: { label: "Bestsellers", img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80" },
    columns: [
      { title: "Skincare",    links: ["Moisturisers","Serums","Sunscreen","Face Wash","Toners"] },
      { title: "Makeup",      links: ["Lipstick","Foundation","Concealer","Blush","Mascara"] },
      { title: "Hair Care",   links: ["Shampoo","Conditioner","Hair Masks","Oils","Styling"] },
      { title: "Fragrance",   links: ["Perfumes","Deodorants","Body Mists","Bath & Body"] },
    ],
  },
  {
    id: "home", label: "Home",
    featured: { label: "Trending Décor", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80" },
    columns: [
      { title: "Decor",   links: ["Wall Art","Cushions","Candles","Plants & Pots"] },
      { title: "Bedding", links: ["Bed Sheets","Duvet Covers","Pillowcases","Blankets"] },
      { title: "Kitchen", links: ["Cookware","Storage","Cutlery","Mugs & Glasses"] },
      { title: "Bath",    links: ["Towels","Bath Mats","Shower Curtains","Organisers"] },
    ],
  },
  {
    id: "electronics", label: "Electronics",
    featured: { label: "Tech Picks", img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&q=80" },
    columns: [
      { title: "Wearables",      links: ["Smart Watches","Earbuds","Headphones","Fitness Bands"] },
      { title: "Mobiles",        links: ["Smartphones","Tablets","Chargers","Power Banks"] },
      { title: "Computing",      links: ["Laptops","Keyboards","Mouse","Storage Drives"] },
      { title: "Smart Home",     links: ["Smart Bulbs","Cameras","Smart Plugs","Routers"] },
    ],
  },
  {
    id: "sports", label: "Sports",
    featured: { label: "New Season Gear", img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&q=80" },
    columns: [
      { title: "Clothing",   links: ["Running","Yoga","Gym","Cycling","Swimming"] },
      { title: "Footwear",   links: ["Running Shoes","Training Shoes","Hiking Boots"] },
      { title: "Equipment",  links: ["Yoga Mats","Resistance Bands","Dumbbells","Gym Bags"] },
      { title: "Outdoor",    links: ["Camping","Trekking","Cycling","Adventure Gear"] },
    ],
  },
  {
    id: "sale", label: "Sale",
    badge: "UP TO 70% OFF",
    badgeColor: "#ef4444",
    noMenu: true,
  },
];

const SHOWCASE_CATS = [
  { label: "Men",         sub: "Clothing · Footwear · Accessories", img: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&q=80", route: "/category/Men"         },
  { label: "Women",       sub: "Fashion · Beauty · Bags",           img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80", route: "/category/Women"       },
  { label: "Kids",        sub: "Boys · Girls · Infants",            img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80", route: "/category/Kids"        },
  { label: "Beauty",      sub: "Skincare · Makeup · Fragrance",     img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80", route: "/category/Beauty"      },
  { label: "Home Living", sub: "Décor · Bedding · Kitchen",         img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",   route: "/category/Home"        },
  { label: "Electronics", sub: "Wearables · Mobiles · Smart Home",  img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80", route: "/category/Electronics" },
  { label: "Sports",      sub: "Activewear · Gear · Footwear",      img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&q=80", route: "/category/Sports"      },
  { label: "Watches",     sub: "Luxury · Casual · Smart",           img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80", route: "/category/Watches"     },
];

const BRANDS_LOOP = (() => {
  const raw = [
    { name: "Nike",           logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",                                                                        bg: "#f8f8f8" },
    { name: "Adidas",         logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",                                                                       bg: "#f8f8f8" },
    { name: "Zara",           logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg",                                                                         bg: "#f8f8f8" },
    { name: "H&M",            logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg",                                                                        bg: "#fff5f5" },
    { name: "Puma",           logo: "https://upload.wikimedia.org/wikipedia/commons/8/88/Puma_logo.svg",                                                                         bg: "#f8f8f8" },
    { name: "Levi's",         logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Levi%27s_logo_red.svg",                                                                 bg: "#fff5f5" },
    { name: "Gucci",          logo: "https://upload.wikimedia.org/wikipedia/commons/7/79/1000x1000_Gucci_logo.svg",                                                              bg: "#fafaf8" },
    { name: "Rolex",          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Rolex_Logo.png/640px-Rolex_Logo.png",                                             bg: "#f5faf5" },
    { name: "Ray-Ban",        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Ray-Ban_logo.svg/640px-Ray-Ban_logo.svg.png",                                     bg: "#fff8f5" },
    { name: "Tommy Hilfiger", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Tommy_Hilfiger_logo.svg/640px-Tommy_Hilfiger_logo.svg.png",                       bg: "#f5f5ff" },
    { name: "Calvin Klein",   logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Calvin_Klein_color_logo.svg/640px-Calvin_Klein_color_logo.svg.png",               bg: "#f8f8f8" },
    { name: "Lyra Studio",    logoText: "LYRA",  color: "#6d28d9", bg: "#f5f3ff" },
    { name: "Elliot & Co",    logoText: "E&Co",  color: "#047857", bg: "#ecfdf5" },
    { name: "BloomWear",      logoText: "bloom", color: "#be185d", bg: "#fdf2f8" },
    { name: "TimeLux",        logoText: "TL",    color: "#92400e", bg: "#fffbeb" },
    { name: "FlexFit",        logoText: "FF",    color: "#0f766e", bg: "#f0fdfa" },
  ];
  return [...raw, ...raw];
})();

// ══════════════════════════════════════════════════════════════════
// CINEMATIC HERO
// ══════════════════════════════════════════════════════════════════
const CinematicHero = ({ slide, currentIndex, total, onDotClick, onShopClick }) => {
  if (!slide) return null;
  return (
    <div className="relative w-full overflow-hidden lyra-hero">
      <div className="absolute inset-0">
        <img src={slide.image} alt={slide.title} className="w-full h-full object-cover object-center" onError={(e) => { e.target.style.opacity = "0"; }} />
        <div className="absolute inset-0" style={{ background: slide.overlay }} />
        <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-48" style={{ background: "linear-gradient(to bottom, transparent, #f9fafb)" }} />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-center px-5 sm:px-12 lg:px-24">
        <p className="text-[10px] sm:text-xs tracking-[0.4em] text-white/40 uppercase mb-3 sm:mb-5 font-light">✦ Lyra Collection</p>
        <h1 className="font-light text-white leading-none mb-4 sm:mb-5 lyra-serif" style={{ fontSize: "clamp(2.2rem,7vw,6rem)" }}>
          {slide.title}<br />
          <span style={{ background: "linear-gradient(135deg, #f3e8ff, #e879f9, #fbcfe8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            {slide.titleAccent}
          </span>
        </h1>
        <p className="text-white/55 text-sm sm:text-base lg:text-lg max-w-xs sm:max-w-lg mb-7 sm:mb-9 font-light leading-relaxed">{slide.subtitle}</p>
        <div className="flex flex-wrap items-center gap-3">
          <button onClick={onShopClick} className="px-6 sm:px-10 py-3 sm:py-4 bg-white text-[#1e0a3c] text-xs sm:text-sm font-bold rounded-2xl hover:bg-violet-50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">{slide.cta} →</button>
          <button onClick={onShopClick} className="px-5 sm:px-8 py-3 sm:py-4 border-2 border-white/30 text-white text-xs sm:text-sm font-semibold rounded-2xl hover:bg-white/10 hover:border-white/60 transition-all duration-300">View Collections</button>
        </div>
        <div className="flex gap-2 mt-7 sm:mt-10">
          {Array.from({ length: total }).map((_, i) => (
            <button key={i} onClick={() => onDotClick(i)} className={`rounded-full transition-all duration-400 ${i === currentIndex ? "w-8 h-1.5 bg-white" : "w-4 h-1.5 bg-white/35 hover:bg-white/60"}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

// ══════════════════════════════════════════════════════════════════
// EDITORIAL MARQUEE STRIP — replaces basic hero fallback
// ══════════════════════════════════════════════════════════════════
const EditorialStrip = ({ onShopClick }) => {
  const items = ["New Season", "Men's Edit", "Women's Edit", "Beauty Drop", "Tech Essentials", "Home Luxe"];
  return (
    <div className="lyra-editorial-strip overflow-hidden relative" style={{ background: "linear-gradient(135deg,#0f0820 0%,#1e0a3c 40%,#2d1060 70%,#0f0820 100%)" }}>
      {/* Grain overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")", backgroundSize: "128px" }} />

      {/* Floating orbs */}
      <div className="absolute top-8 left-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: "radial-gradient(circle, #a855f7, transparent)" }} />
      <div className="absolute bottom-4 right-1/3 w-48 h-48 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: "radial-gradient(circle, #ec4899, transparent)" }} />

      <div className="relative z-10 flex flex-col lg:flex-row items-stretch min-h-0" style={{ minHeight: "420px" }}>
        {/* Left — editorial text */}
        <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-12 lg:py-16">
          <div className="lyra-strip-badge inline-flex items-center gap-2 mb-5 self-start">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 text-[10px] font-bold tracking-[0.3em] uppercase">SS 2025 Collection</span>
          </div>
          <h2 className="lyra-serif text-white font-light leading-[0.95] mb-5" style={{ fontSize: "clamp(2.4rem,5.5vw,4.8rem)" }}>
            Style That<br />
            <span style={{ background: "linear-gradient(90deg,#f9a8d4,#c084fc,#818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Speaks First.
            </span>
          </h2>
          <p className="text-white/40 text-sm sm:text-base max-w-sm mb-8 leading-relaxed font-light">
            Curated collections for every occasion. Discover pieces that define your story this season.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            {["Explore Men", "Explore Women", "New Arrivals"].map((label, i) => (
              <button key={label} onClick={onShopClick}
                className={`px-5 py-2.5 text-xs font-bold rounded-full transition-all duration-300 ${
                  i === 0
                    ? "bg-white text-[#1e0a3c] hover:bg-violet-100 hover:shadow-lg hover:-translate-y-0.5"
                    : "border border-white/20 text-white/70 hover:border-white/50 hover:text-white hover:bg-white/5"
                }`}>
                {label}
              </button>
            ))}
          </div>
          {/* Stat row */}
          <div className="flex items-center gap-6 sm:gap-10">
            {[["50K+","Products"],["200+","Brands"],["4.9★","Rating"]].map(([num, lbl]) => (
              <div key={lbl}>
                <p className="lyra-serif text-white font-semibold text-xl sm:text-2xl">{num}</p>
                <p className="text-white/30 text-[10px] tracking-widest uppercase">{lbl}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — tiled image mosaic */}
        <div className="w-full lg:w-2/5 flex-shrink-0 grid grid-cols-2 gap-2 p-4 lg:p-6 self-center">
          {[
            { img: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&q=80", tall: true,  label: "Women's" },
            { img: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&q=80", tall: false, label: "Men's"   },
            { img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80", tall: false, label: "Watches" },
          ].map((tile, i) => (
            <div key={i}
              onClick={onShopClick}
              className={`relative overflow-hidden rounded-xl cursor-pointer group lyra-mosaic-tile ${tile.tall ? "row-span-2" : ""}`}
              style={{ minHeight: tile.tall ? "220px" : "104px" }}>
              <img src={tile.img} alt={tile.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute bottom-2 left-3 text-white text-[10px] font-bold tracking-widest uppercase opacity-80">{tile.label}</span>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-violet-400/40 rounded-xl transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling tag line */}
      <div className="border-t border-white/5 overflow-hidden py-3">
        <div className="lyra-marquee-track flex items-center gap-0 whitespace-nowrap" style={{ width: "max-content" }}>
          {[...items, ...items, ...items].map((item, i) => (
            <React.Fragment key={i}>
              <span className="text-white/15 text-[11px] font-bold uppercase tracking-[0.3em] px-6">{item}</span>
              <span className="text-violet-700/30 text-[10px]">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

// ══════════════════════════════════════════════════════════════════
// BRAND SCROLL
// ══════════════════════════════════════════════════════════════════
const BrandScrollBar = ({ onBrandClick }) => {
  const trackRef  = useRef(null);
  const animRef   = useRef(null);
  const posRef    = useRef(0);
  const pausedRef = useRef(false);
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const step = () => {
      if (!pausedRef.current) {
        posRef.current += 0.4;
        if (posRef.current >= track.scrollWidth / 2) posRef.current = 0;
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(step);
    };
    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, []);
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-[10px] tracking-[0.35em] text-slate-400 uppercase mb-1.5">Partners</p>
          <h2 className="lyra-serif text-2xl sm:text-3xl text-gray-900">Top <span className="text-violet-600">Brands</span></h2>
        </div>
        <button className="text-xs text-violet-600 font-semibold hover:text-violet-800 transition-colors border border-violet-200 hover:border-violet-400 px-4 py-1.5 rounded-full">View All →</button>
      </div>
      <div className="relative overflow-hidden bg-white rounded-2xl border border-slate-100 py-5 shadow-sm"
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}>
        <div className="absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, white, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, white, transparent)" }} />
        <div ref={trackRef} className="flex items-center gap-3 px-4" style={{ width: "max-content", willChange: "transform" }}>
          {BRANDS_LOOP.map((b, i) => (
            <button key={`${b.name}-${i}`} onClick={() => onBrandClick(b.name)} className="flex-shrink-0 flex flex-col items-center gap-2 group">
              <div className="w-24 h-12 rounded-xl flex items-center justify-center border border-slate-100 group-hover:border-violet-300 group-hover:shadow-md group-hover:-translate-y-0.5 transition-all overflow-hidden px-3" style={{ background: b.bg }}>
                {b.logo
                  ? <img src={b.logo} alt={b.name} className="max-w-full max-h-8 object-contain" onError={(e) => { e.target.style.display = "none"; }} />
                  : <span style={{ color: b.color || "#1e0a3c", fontFamily: "Georgia,serif", fontWeight: "bold", fontSize: "0.82rem" }}>{b.logoText || b.name}</span>}
              </div>
              <span className="text-[10px] text-gray-400 group-hover:text-violet-600 transition-colors font-medium">{b.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// ══════════════════════════════════════════════════════════════════
// PRODUCT CARD
// ══════════════════════════════════════════════════════════════════
const ProductCard = ({ product, onAddToCart }) => {
  const navigate = useNavigate();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const wishlisted = isWishlisted(product._id);
  const disc = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
  return (
    <div onClick={() => navigate(`/product/${product._id}`)}
      className="bg-white rounded-2xl border border-slate-100 overflow-hidden group hover:border-violet-200 hover:shadow-xl hover:shadow-violet-50 hover:-translate-y-1 transition-all duration-300 relative cursor-pointer">
      {product.badge && <span className="absolute top-3 left-3 z-10 bg-gradient-to-r from-violet-600 to-pink-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow">{product.badge}</span>}
      {disc >= 30 && !product.badge && <span className="absolute top-3 left-3 z-10 bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">{disc}% OFF</span>}
      <button onClick={(e) => { e.stopPropagation(); toggleWishlist(product); }}
        className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow flex items-center justify-center text-base hover:scale-110 transition-transform"
        style={{ color: wishlisted ? "#ef4444" : "#cbd5e1" }}>
        {wishlisted ? "♥" : "♡"}
      </button>
      <div className="h-52 sm:h-60 overflow-hidden bg-gradient-to-b from-slate-50 to-gray-50">
        <img src={product.image || product.images?.[0]} alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          onError={(e) => { e.target.src = "https://placehold.co/300x400/f8f9fa/9ca3af?text=Lyra"; }} />
      </div>
      <div className="p-3 sm:p-4">
        <p className="text-[10px] font-semibold text-violet-400 uppercase tracking-widest mb-1">{product.brand || product.category}</p>
        <p className="text-xs sm:text-sm font-medium text-gray-900 truncate mb-1.5">{product.name}</p>
        <div className="flex items-center gap-0.5 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={`text-[10px] ${i < Math.floor(product.rating || 0) ? "text-amber-400" : "text-gray-200"}`}>★</span>
          ))}
          <span className="text-gray-400 text-[10px] ml-1">({(product.reviews || 0).toLocaleString()})</span>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm sm:text-base font-bold text-gray-900">₹{(product.price || 0).toLocaleString()}</span>
          {product.originalPrice && product.originalPrice > product.price && <span className="text-xs text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span>}
          {disc > 0 && disc < 30 && <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-lg">{disc}% off</span>}
        </div>
        <button onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
          className="w-full mt-3 py-2 sm:py-2.5 bg-gradient-to-r from-violet-600 to-purple-500 text-white text-[10px] sm:text-xs font-semibold rounded-xl opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

// ══════════════════════════════════════════════════════════════════
// COUNTDOWN
// ══════════════════════════════════════════════════════════════════
const useCountdown = () => {
  const [time, setTime] = useState({ h: "08", m: "23", s: "47" });
  useEffect(() => {
    const tick = () => setTime((prev) => {
      let s = parseInt(prev.s) - 1, m = parseInt(prev.m), h = parseInt(prev.h);
      if (s < 0) { s = 59; m--; }
      if (m < 0) { m = 59; h--; }
      if (h < 0) { h = 23; m = 59; s = 59; }
      return { h: String(h).padStart(2, "0"), m: String(m).padStart(2, "0"), s: String(s).padStart(2, "0") };
    });
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
};

// ══════════════════════════════════════════════════════════════════
// MOBILE MENU DRAWER
// ══════════════════════════════════════════════════════════════════
const MobileDrawer = ({ open, onClose, navigate, user, handleLogout, firstName }) => {
  if (!open) return null;
  return (
    <>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]" onClick={onClose} />
      <div className="fixed left-0 top-0 bottom-0 w-[85vw] max-w-xs bg-white z-[70] overflow-y-auto shadow-2xl lyra-drawer">
        <div className="bg-gradient-to-br from-[#1e0a3c] to-violet-700 px-6 py-8">
          <div className="flex items-center justify-between mb-4">
            <span className="lyra-serif text-white text-xl tracking-widest">LY<span className="text-pink-400">R</span>A</span>
            <button onClick={onClose} className="text-white/60 hover:text-white text-xl">✕</button>
          </div>
          <p className="text-white font-semibold">{user.fullName || "Guest"}</p>
          <p className="text-purple-300 text-xs mt-0.5">{user.email || user.mobileNumber || ""}</p>
        </div>
        <div className="p-4">
          <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-3 px-2">Shop</p>
          {MEGA_MENU.map((item) => (
            <button key={item.id} onClick={() => { navigate(`/category/${item.id}`); onClose(); }}
              className="w-full flex items-center justify-between px-3 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-violet-50 hover:text-violet-700 transition-colors">
              <span>{item.label}</span>
              {item.badge && <span className="text-[9px] font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded-full">{item.badge}</span>}
            </button>
          ))}
          <div className="border-t border-slate-100 mt-3 pt-3">
            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-3 px-2">Account</p>
            {[{ label: "📦 My Orders", path: "/profile?tab=orders" }, { label: "👤 My Profile", path: "/profile?tab=profile" }, { label: "♡  Wishlist", path: "/wishlist" }, { label: "📍 Addresses", path: "/profile?tab=addresses" }].map((item) => (
              <button key={item.label} onClick={() => { navigate(item.path); onClose(); }} className="w-full text-left px-3 py-3 rounded-xl text-sm text-gray-700 hover:bg-violet-50 hover:text-violet-700 transition-colors">{item.label}</button>
            ))}
            <button onClick={handleLogout} className="w-full text-left px-3 py-3 rounded-xl text-sm text-red-500 hover:bg-red-50 transition-colors mt-1">🚪 Sign Out</button>
          </div>
        </div>
      </div>
    </>
  );
};

// ══════════════════════════════════════════════════════════════════
// DASHBOARD
// ══════════════════════════════════════════════════════════════════
const Dashboard = () => {
  const navigate = useNavigate();
  const { cartCount }     = useCart();
  const { wishlistCount } = useWishlist();
  const countdown = useCountdown();

  const [user,          setUser]         = useState({});
  const [search,        setSearch]       = useState("");
  const [showMenu,      setShowMenu]     = useState(false);
  const [showDrawer,    setShowDrawer]   = useState(false);
  const [activeMega,    setActiveMega]   = useState(null);
  const [activeBrand,   setActiveBrand]  = useState(null);
  const [activeTab,     setActiveTab]    = useState("All");
  const [modalProduct,  setModalProduct] = useState(null);
  const [products,      setProducts]     = useState([]);
  const [scrolled,      setScrolled]     = useState(false);
  const [currentSlide,  setCurrent]      = useState(0);
  const [heroSlides,    setHeroSlides]   = useState([]);
  const [heroLoading,   setHeroLoading]  = useState(true);

  const shopRef    = useRef(null);
  const megaTimers = useRef({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const load = async () => {
      const stored = sessionStorage.getItem("user");
      if (!stored) { navigate("/"); return; }
      setUser(JSON.parse(stored));
      try {
        const { data } = await API.get("/products");
        setProducts(Array.isArray(data) ? data : data.products || []);
      } catch (err) { console.error("Products:", err.message); }
      try {
        const { data: heroData } = await API.get("/hero-slides/active");
        setHeroSlides(heroData.slides || heroData || []);
      } catch (err) { console.warn("Hero slides:", err.message); }
      finally { setHeroLoading(false); }
    };
    load();
  }, [navigate]);

  useEffect(() => {
    if (!heroSlides.length) return;
    const t = setInterval(() => setCurrent((c) => (c + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, [heroSlides.length]);

  const scrollTo     = useCallback((ref) => { ref.current?.scrollIntoView({ behavior: "smooth", block: "start" }); setActiveMega(null); setShowMenu(false); }, []);
  const handleLogout = () => { sessionStorage.removeItem("user"); navigate("/"); };
  const handleBrand  = (n) => { setActiveBrand(n); setActiveTab("All"); setSearch(""); scrollTo(shopRef); };

  const openMega  = (id) => { clearTimeout(megaTimers.current[id]); setActiveMega(id); };
  const closeMega = (id) => { megaTimers.current[id] = setTimeout(() => setActiveMega((c) => c === id ? null : c), 180); };

  const filtered      = products.filter((p) => {
    if (activeTab !== "All" && p.category !== activeTab) return false;
    if (activeBrand && (p.brand || "").toLowerCase() !== activeBrand.toLowerCase()) return false;
    if (search && !p.name?.toLowerCase().includes(search.toLowerCase()) && !p.brand?.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });
  const dealsProducts = products.filter((p) => p.originalPrice && ((p.originalPrice - p.price) / p.originalPrice) >= 0.3).slice(0, 10);
  const safeIdx       = heroSlides.length ? currentSlide % heroSlides.length : 0;
  const firstName     = user.fullName?.split(" ")[0] || "Account";

  return (
    <div className="min-h-screen bg-[#f9f9fb]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

        .lyra-body, .lyra-body * { font-family: 'DM Sans', system-ui, sans-serif; box-sizing: border-box; }
        .lyra-serif { font-family: 'Cormorant Garamond', Georgia, serif !important; }

        /* ── Hero heights ── */
        .lyra-hero { height: 88vh; max-height: 800px; }
        @media (max-width: 640px) { .lyra-hero { height: 75vh; max-height: 600px; } }

        /* ── Editorial strip ── */
        .lyra-editorial-strip { min-height: 420px; }
        @media (max-width: 640px) { .lyra-editorial-strip { min-height: 0; } }

        /* ── Mosaic grid heights ── */
        .lyra-mosaic-tile { aspect-ratio: 1; }
        .lyra-mosaic-tile.row-span-2 { aspect-ratio: auto; }
        @media (max-width: 640px) { .lyra-mosaic-tile { min-height: 80px !important; } .lyra-mosaic-tile.row-span-2 { min-height: 160px !important; } }

        /* ── Drawer animation ── */
        .lyra-drawer { animation: drawerSlide 0.28s cubic-bezier(0.16,1,0.3,1) forwards; }
        @keyframes drawerSlide { from { transform: translateX(-100%); } to { transform: translateX(0); } }

        /* ── Shimmer text ── */
        @keyframes shimmer { 0% { background-position: -300% 0; } 100% { background-position: 300% 0; } }
        .shimmer-text {
          background: linear-gradient(90deg, #c084fc, #f472b6, #fb923c, #c084fc);
          background-size: 300% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text; animation: shimmer 5s linear infinite;
        }

        /* ── Mega dropdown ── */
        @keyframes megaFade { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: translateY(0); } }
        .mega-panel { animation: megaFade 0.18s cubic-bezier(0.16,1,0.3,1) forwards; }
        @keyframes slideDown { from { opacity: 0; transform: translateY(-8px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .slide-down { animation: slideDown 0.2s cubic-bezier(0.16,1,0.3,1) forwards; }

        .mega-link { position: relative; color: #4b5563; font-size: 12px; font-weight: 400; padding: 3px 0; display: block; transition: color 0.15s; cursor: pointer; }
        .mega-link:hover { color: #7c3aed; }
        .mega-link::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 1px; background: #7c3aed; transition: width 0.2s ease; }
        .mega-link:hover::after { width: 100%; }

        /* ── Nav items ── */
        .nav-item {
          position: relative; padding: 0 14px; height: 42px;
          display: flex; align-items: center;
          font-size: 11px; font-weight: 600; letter-spacing: 0.07em;
          text-transform: uppercase; cursor: pointer;
          transition: color 0.2s, background 0.2s;
          color: rgba(255,255,255,0.5); white-space: nowrap;
        }
        .nav-item:hover { color: white; background: rgba(255,255,255,0.05); }
        .nav-item.active { color: white; }
        .nav-item::after { content: ''; position: absolute; bottom: 0; left: 14px; right: 14px; height: 2px; background: white; transform: scaleX(0); transition: transform 0.2s ease; border-radius: 2px 2px 0 0; }
        .nav-item:hover::after, .nav-item.active::after { transform: scaleX(1); }
        .nav-item.sale-item { color: #f87171; }
        .nav-item.sale-item:hover { color: #fca5a5; }
        .nav-item.sale-item::after { background: #ef4444; }

        .mega-parent { position: relative; flex-shrink: 0; }
        .mega-drop { position: absolute; top: 100%; left: 0; z-index: 200; min-width: 680px; }
        .mega-drop.anchor-right { left: auto; right: 0; }

        /* ── Marquee ── */
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .lyra-marquee-track { animation: marquee 30s linear infinite; }

        /* ── Section fade-in ── */
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .lyra-fadein { animation: fadeUp 0.5s ease forwards; }

        /* ── Responsive mega nav: hide on small screens ── */
        @media (max-width: 1023px) { .lyra-mega-nav { display: none !important; } }
        .lyra-mobile-hamburger { display: none; }
        @media (max-width: 1023px) { .lyra-mobile-hamburger { display: flex !important; } }

        /* ── Search bar responsive ── */
        @media (max-width: 640px) { .lyra-search-expand { display: none; } .lyra-search-expand.lyra-search-open { display: flex; position: fixed; top: 0; left: 0; right: 0; z-index: 100; background: #1e0a3c; padding: 10px 16px; } }

        /* ── Grid responsiveness ── */
        .lyra-trust-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
        @media (min-width: 768px) { .lyra-trust-grid { grid-template-columns: repeat(4, 1fr); } }

        .lyra-showcase-top { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
        @media (min-width: 768px) { .lyra-showcase-top { grid-template-columns: repeat(4, 1fr); } }

        .lyra-showcase-bottom { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
        @media (min-width: 768px) { .lyra-showcase-bottom { grid-template-columns: repeat(4, 1fr); } }

        .lyra-products-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
        @media (min-width: 640px) { .lyra-products-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (min-width: 1024px) { .lyra-products-grid { grid-template-columns: repeat(4, 1fr); } }
        @media (min-width: 1280px) { .lyra-products-grid { grid-template-columns: repeat(5, 1fr); } }

        .lyra-editorial-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
        @media (min-width: 1024px) { .lyra-editorial-grid { grid-template-columns: repeat(4, 1fr); } }
      `}</style>

      <div className="lyra-body">

        {/* ═══════════════════════ NAVBAR ═══════════════════════ */}
        <nav className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#0c0618]/97 backdrop-blur-2xl shadow-2xl shadow-violet-950/40" : "bg-[#1e0a3c]"}`}
          onClick={() => setShowMenu(false)}>

          {/* Announcement bar */}
          <div className="bg-gradient-to-r from-[#1a0836] via-violet-800 to-[#1a0836] py-1.5 text-center border-b border-violet-800/20">
            <span className="shimmer-text text-[10px] sm:text-xs font-semibold tracking-[0.12em] sm:tracking-[0.18em]">
              ✦ FREE DELIVERY ON ORDERS ABOVE ₹999 · NEW ARRIVALS EVERY FRIDAY · LYRA MEMBERS GET 10% OFF ✦
            </span>
          </div>

          {/* Logo + Search + Icons */}
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center gap-3 sm:gap-5 border-b border-white/[0.06]">

            {/* Mobile hamburger */}
            <button onClick={(e) => { e.stopPropagation(); setShowDrawer(true); }} className="lyra-mobile-hamburger flex-shrink-0 w-9 h-9 items-center justify-center text-white/60 hover:text-white hover:bg-white/8 rounded-xl transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Logo */}
            <button onClick={() => { navigate("/dashboard"); setActiveTab("All"); setActiveBrand(null); }}
              className="lyra-serif text-xl sm:text-2xl tracking-[0.35em] text-white flex-shrink-0 select-none hover:opacity-90 transition-opacity">
              LY<span className="text-pink-400">R</span>A
              <sup className="text-white/20 ml-0.5 hidden sm:inline" style={{ fontSize: "7px", letterSpacing: "0.4em", verticalAlign: "top", marginTop: "6px" }}>FASHION</sup>
            </button>

            {/* Search */}
            <div className="flex-1 max-w-2xl relative hidden sm:block">
              <div className="flex items-center bg-white/8 border border-white/10 rounded-xl hover:bg-white/12 focus-within:bg-white focus-within:border-violet-400 transition-all group">
                <svg className="ml-3.5 w-4 h-4 text-white/30 group-focus-within:text-violet-600 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                </svg>
                <input className="flex-1 py-2.5 px-3 text-sm bg-transparent outline-none text-white group-focus-within:text-gray-900 placeholder-white/30 group-focus-within:placeholder-gray-400 transition-colors"
                  placeholder="Search fashion, footwear, beauty, electronics..."
                  value={search}
                  onChange={(e) => { setSearch(e.target.value); setActiveBrand(null); }} />
                {search && <button onClick={() => setSearch("")} className="mr-3 w-5 h-5 rounded-full bg-white/15 text-white/60 flex items-center justify-center text-xs flex-shrink-0">✕</button>}
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-0.5 ml-auto flex-shrink-0">
              {/* Mobile search */}
              <button className="sm:hidden flex items-center justify-center w-9 h-9 text-white/55 hover:text-white hover:bg-white/8 rounded-xl transition-all">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                </svg>
              </button>

              <button onClick={() => navigate("/wishlist")} className="relative flex flex-col items-center px-2 sm:px-3 py-1.5 text-white/55 hover:text-white hover:bg-white/8 rounded-xl transition-all">
                <svg className="w-5 h-5" fill={wishlistCount > 0 ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="hidden sm:block mt-0.5 text-white/35 text-[9px] tracking-wider">WISHLIST</span>
                {wishlistCount > 0 && <span className="absolute -top-1 right-0 w-4 h-4 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold shadow" style={{ fontSize: "8px" }}>{wishlistCount}</span>}
              </button>

              <button onClick={() => navigate("/cart")} className="relative flex flex-col items-center px-2 sm:px-3 py-1.5 text-white/55 hover:text-white hover:bg-white/8 rounded-xl transition-all">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="hidden sm:block mt-0.5 text-white/35 text-[9px] tracking-wider">CART</span>
                {cartCount > 0 && <span className="absolute -top-1 right-0 w-4 h-4 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold shadow" style={{ fontSize: "8px" }}>{cartCount}</span>}
              </button>

              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <button onClick={() => setShowMenu((v) => !v)} className="flex flex-col items-center px-2 sm:px-3 py-1.5 text-white/55 hover:text-white hover:bg-white/8 rounded-xl transition-all">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="hidden sm:block mt-0.5 text-white/35 text-[9px] tracking-wider">{firstName.toUpperCase().slice(0,8)}</span>
                </button>
                {showMenu && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-50 slide-down">
                    <div className="bg-gradient-to-br from-[#1e0a3c] to-violet-700 px-5 py-4">
                      <p className="lyra-serif text-white font-semibold">{user.fullName || "Guest"}</p>
                      <p className="text-purple-300 text-xs mt-0.5">{user.email || user.mobileNumber || ""}</p>
                    </div>
                    {[{ label: "📦 My Orders", path: "/profile?tab=orders" }, { label: "👤 My Profile", path: "/profile?tab=profile" }, { label: "♡  Wishlist", path: "/wishlist" }, { label: "📍 Addresses", path: "/profile?tab=addresses" }].map((item) => (
                      <button key={item.label} onClick={() => { setShowMenu(false); navigate(item.path); }}
                        className="w-full text-left px-5 py-3 text-sm text-gray-700 hover:bg-violet-50 hover:text-violet-700 transition-colors border-b border-gray-50 last:border-0">{item.label}</button>
                    ))}
                    <button onClick={handleLogout} className="w-full text-left px-5 py-3 text-sm text-red-500 hover:bg-red-50 transition-colors border-t border-gray-100">🚪 Sign Out</button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mega Nav — desktop only */}
          <div className="lyra-mega-nav relative border-t border-white/[0.06]" style={{ background: "rgba(0,0,0,0.18)" }}>
            <div className="flex items-stretch justify-center max-w-screen-xl mx-auto">
              {MEGA_MENU.map((item, idx) => {
                const anchorRight = idx >= Math.floor(MEGA_MENU.length / 2);
                return (
                  <div key={item.id} className="mega-parent"
                    onMouseEnter={() => !item.noMenu && openMega(item.id)}
                    onMouseLeave={() => !item.noMenu && closeMega(item.id)}>
                    <button onClick={() => { if (item.noMenu) navigate(`/category/${item.id}`); else setActiveMega((v) => v === item.id ? null : item.id); }}
                      className={`nav-item ${item.id === "sale" ? "sale-item" : ""} ${activeMega === item.id ? "active" : ""}`}>
                      {item.label}
                      {item.badge && <span className="ml-2 text-[9px] font-bold px-1.5 py-0.5 rounded-full text-white" style={{ background: item.badgeColor || "#7c3aed" }}>{item.badge}</span>}
                      {!item.noMenu && (
                        <svg className={`ml-1 w-3 h-3 opacity-30 transition-transform duration-200 ${activeMega === item.id ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </button>

                    {!item.noMenu && activeMega === item.id && item.columns && (
                      <div className={`mega-drop mega-panel bg-white shadow-2xl shadow-black/15 border-t-2 border-violet-500 ${anchorRight ? "anchor-right" : ""}`}
                        onMouseEnter={() => openMega(item.id)}
                        onMouseLeave={() => closeMega(item.id)}>
                        <div className="flex">
                          <div className="flex-1 grid gap-0 px-5 py-5" style={{ gridTemplateColumns: `repeat(${item.columns.length}, 1fr)`, columnGap: "16px" }}>
                            {item.columns.map((col) => (
                              <div key={col.title} className="py-1">
                                <p className="text-[9px] font-bold text-violet-600 uppercase tracking-[0.2em] mb-3 pb-2 border-b border-violet-100">{col.title}</p>
                                <div className="space-y-1.5">
                                  {col.links.map((link) => (
                                    <span key={link} className="mega-link" onClick={() => { navigate(`/category/${encodeURIComponent(link)}`); setActiveMega(null); }}>{link}</span>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                          {item.featured && (
                            <div className="w-44 flex-shrink-0 relative overflow-hidden border-l border-gray-100">
                              <img src={item.featured.img} alt={item.featured.label} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" onError={(e) => { e.target.parentElement.style.display = "none"; }} />
                              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15,5,30,0.75) 0%, transparent 55%)" }} />
                              <div className="absolute bottom-0 left-0 right-0 p-3">
                                <p className="text-[9px] tracking-widest text-white/50 uppercase mb-1">Featured</p>
                                <p className="text-white font-semibold text-xs">{item.featured.label}</p>
                                <button onClick={() => { navigate(`/category/${item.id}`); setActiveMega(null); }} className="mt-1.5 text-[10px] text-white/70 hover:text-white transition-colors">Shop Now →</button>
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="px-5 py-2.5 border-t border-gray-100 bg-gray-50 flex items-center gap-3 flex-wrap">
                          <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Quick Shop:</span>
                          {["New Arrivals","Best Sellers","Under ₹999","Premium Picks"].map((q) => (
                            <button key={q} onClick={() => { navigate(`/category/${item.id}`); setActiveMega(null); }}
                              className="text-[11px] text-violet-600 font-semibold hover:text-violet-800 px-3 py-1 rounded-full bg-violet-50 hover:bg-violet-100 transition-colors">{q}</button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </nav>
        {/* Mobile drawer */}
        <MobileDrawer open={showDrawer} onClose={() => setShowDrawer(false)} navigate={navigate} user={user} handleLogout={handleLogout} firstName={firstName} />

        {/* ═══════════════════════ BODY ═══════════════════════ */}
        <div onClick={() => { setShowMenu(false); setActiveMega(null); }}>

          {/* ── Hero slides ── */}
          {!heroLoading && heroSlides.length > 0 && (
            <CinematicHero slide={heroSlides[safeIdx]} currentIndex={safeIdx} total={heroSlides.length} onDotClick={setCurrent} onShopClick={() => scrollTo(shopRef)} />
          )}

          {/* ── Editorial strip — always shown after hero (or instead if no slides) ── */}
          {!heroLoading && <EditorialStrip onShopClick={() => scrollTo(shopRef)} />}

          {/* ── Main content ── */}
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

            {/* Trust badges */}
            <div className="lyra-trust-grid mb-10 sm:mb-14">
              {[
                { icon: "🚚", title: "Free Delivery",   sub: "On orders above ₹999",  from: "from-violet-600", to: "to-purple-600" },
                { icon: "↩",  title: "30-Day Returns",  sub: "Hassle-free exchanges",  from: "from-teal-600",   to: "to-cyan-500"   },
                { icon: "🔒", title: "Secure Payments", sub: "100% safe & encrypted",  from: "from-amber-500",  to: "to-orange-500" },
                { icon: "⭐", title: "Lyra Rewards",    sub: "Earn on every purchase", from: "from-pink-600",   to: "to-rose-500"   },
              ].map((o) => (
                <div key={o.title} className={`bg-gradient-to-r ${o.from} ${o.to} rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 hover:-translate-y-1 transition-all duration-300 shadow cursor-pointer`}>
                  <span className="text-2xl sm:text-3xl">{o.icon}</span>
                  <div>
                    <p className="lyra-serif text-white font-semibold text-sm sm:text-base">{o.title}</p>
                    <p className="text-white/70 text-[11px] sm:text-xs mt-0.5">{o.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Category showcase */}
            <div className="mb-12 sm:mb-16">
              <div className="flex items-end justify-between mb-5 sm:mb-7">
                <div>
                  <p className="text-[10px] tracking-[0.3em] text-violet-400 uppercase mb-1.5">✦ All Categories</p>
                  <h2 className="lyra-serif text-3xl sm:text-4xl text-gray-900">Shop by <span className="text-violet-600">World</span></h2>
                </div>
                <button className="text-xs sm:text-sm text-violet-600 font-semibold hover:underline">View All →</button>
              </div>
              <div className="lyra-showcase-top mb-3 sm:mb-4">
                {SHOWCASE_CATS.slice(0, 4).map((cat) => (
                  <div key={cat.label} onClick={() => navigate(cat.route)}
                    className="relative overflow-hidden rounded-2xl cursor-pointer group" style={{ height: "clamp(180px, 22vw, 280px)" }}>
                    <img src={cat.img} alt={cat.label} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => { e.target.parentElement.style.background = "linear-gradient(135deg,#1e0a3c,#7c3aed)"; e.target.style.display = "none"; }} />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,3,25,0.85) 0%, rgba(10,3,25,0.25) 55%, transparent 100%)" }} />
                    <div className="absolute inset-0 bg-violet-900/0 group-hover:bg-violet-900/15 transition-all duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5">
                      <p className="lyra-serif text-white text-lg sm:text-2xl font-light leading-none mb-1">{cat.label}</p>
                      <p className="text-white/50 text-[10px] sm:text-xs font-medium tracking-wide hidden sm:block">{cat.sub}</p>
                      <div className="mt-2 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <span className="text-[10px] sm:text-xs font-bold text-white bg-violet-600 px-2 sm:px-3 py-1 rounded-full">Shop Now</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="lyra-showcase-bottom">
                {SHOWCASE_CATS.slice(4, 8).map((cat) => (
                  <div key={cat.label} onClick={() => navigate(cat.route)}
                    className="relative overflow-hidden rounded-2xl cursor-pointer group bg-white border border-slate-100 hover:border-violet-200 hover:shadow-lg transition-all duration-300 flex" style={{ height: "90px" }}>
                    <div className="absolute right-0 top-0 bottom-0 w-2/5 overflow-hidden">
                      <img src={cat.img} alt={cat.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        style={{ maskImage: "linear-gradient(to right, transparent 0%, black 40%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 40%)" }}
                        onError={(e) => { e.target.style.display = "none"; }} />
                    </div>
                    <div className="relative z-10 p-3 sm:p-4 flex flex-col justify-center flex-1">
                      <p className="font-bold text-gray-900 text-xs sm:text-sm">{cat.label}</p>
                      <p className="text-gray-400 text-[10px] mt-0.5 leading-tight hidden sm:block">{cat.sub}</p>
                      <span className="mt-1.5 text-[10px] font-bold text-violet-600 tracking-wide">Explore →</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Flash sale */}
            <div className="rounded-2xl px-4 sm:px-6 py-4 sm:py-5 mb-10 sm:mb-12 flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 shadow-lg"
              style={{ background: "linear-gradient(135deg,#1e0a3c,#4c1d95,#6d28d9)" }}>
              <div className="flex-1 min-w-0">
                <h3 className="lyra-serif text-white text-xl sm:text-2xl">Flash Sale</h3>
                <p className="text-white/40 text-xs mt-0.5 hidden sm:block">Limited quantities — ends soon</p>
              </div>
              <span className="bg-pink-500 text-white text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full animate-pulse">⚡ LIVE</span>
              <div className="flex items-center gap-1.5 ml-auto sm:ml-0">
                {[[countdown.h,"HRS"],[countdown.m,"MIN"],[countdown.s,"SEC"]].map(([n, l], i) => (
                  <React.Fragment key={l}>
                    {i > 0 && <span className="text-violet-400 font-bold text-sm">:</span>}
                    <div className="bg-white/10 border border-white/10 rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 text-center min-w-[40px] sm:min-w-[48px]">
                      <span className="lyra-serif text-white font-bold text-lg sm:text-xl block">{n}</span>
                      <span className="text-white/30 text-[7px] sm:text-[8px] uppercase tracking-widest">{l}</span>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Brands */}
            <BrandScrollBar onBrandClick={handleBrand} />

            {/* Deals */}
            {dealsProducts.length > 0 && (
              <div className="mb-10 sm:mb-14">
                <div className="flex items-end justify-between mb-4 sm:mb-6">
                  <div>
                    <p className="text-[10px] tracking-[0.3em] text-pink-400 uppercase mb-1">✦ Limited Time</p>
                    <h2 className="lyra-serif text-2xl sm:text-3xl text-gray-900">Best <span className="text-pink-600">Deals</span></h2>
                  </div>
                  <button className="text-xs sm:text-sm text-violet-600 font-semibold hover:underline">View All Deals →</button>
                </div>
                <div className="lyra-products-grid">
                  {dealsProducts.map((p) => <ProductCard key={p._id} product={p} onAddToCart={setModalProduct} />)}
                </div>
              </div>
            )}

            {/* Product grid */}
            <section ref={shopRef} id="shop">
              <div className="flex items-center justify-between mb-5 sm:mb-7">
                <h2 className="lyra-serif text-2xl sm:text-3xl text-gray-900">
                  {activeBrand ? <>{activeBrand} <span className="text-violet-600">Collection</span></> : <>New <span className="text-violet-600">Arrivals</span></>}
                </h2>
                <div className="flex items-center gap-2 sm:gap-3">
                  {activeBrand && (
                    <button onClick={() => setActiveBrand(null)} className="flex items-center gap-1.5 bg-violet-100 text-violet-700 text-xs font-semibold px-3 sm:px-4 py-1.5 rounded-full hover:bg-violet-200 transition-colors">
                      {activeBrand} <span className="font-bold">×</span>
                    </button>
                  )}
                  <button className="text-xs sm:text-sm text-violet-600 font-medium hover:underline">View All →</button>
                </div>
              </div>

              {filtered.length > 0 ? (
                <div className="lyra-products-grid">
                  {filtered.map((p) => <ProductCard key={p._id} product={p} onAddToCart={setModalProduct} />)}
                </div>
              ) : products.length === 0 ? (
                <div className="lyra-products-grid">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden animate-pulse">
                      <div className="h-52 sm:h-60 bg-slate-50" />
                      <div className="p-4 space-y-2">
                        <div className="h-2 bg-gray-100 rounded w-1/3" />
                        <div className="h-4 bg-gray-100 rounded w-3/4" />
                        <div className="h-3 bg-gray-100 rounded w-1/2" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 sm:py-24 bg-white rounded-3xl border border-slate-100">
                  <p className="text-4xl sm:text-5xl mb-4">🔍</p>
                  <p className="lyra-serif text-xl text-gray-700 mb-2">No products found</p>
                  <button onClick={() => { setSearch(""); setActiveBrand(null); setActiveTab("All"); }}
                    className="mt-5 text-sm text-violet-600 font-medium hover:underline">Clear filters</button>
                </div>
              )}
            </section>

            {/* Editorial collection strips */}
            <div className="mt-14 sm:mt-20 mb-10">
              <div className="flex items-end justify-between mb-5 sm:mb-7">
                <h2 className="lyra-serif text-2xl sm:text-3xl text-gray-900">Explore <span className="text-violet-600">Collections</span></h2>
              </div>
              <div className="lyra-editorial-grid">
                {[
                  { cat: "Fashion",     img: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&q=80", badge: "New Arrivals", f: "#5b21b6" },
                  { cat: "Beauty",      img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&q=80", badge: "Editor Picks", f: "#9d174d" },
                  { cat: "Electronics", img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=500&q=80", badge: "Best Sellers", f: "#1f2937" },
                  { cat: "Watches",     img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80", badge: "Luxury Picks", f: "#78350f" },
                ].map((item) => (
                  <div key={item.cat} onClick={() => navigate(`/category/${encodeURIComponent(item.cat)}`)}
                    className="relative rounded-2xl overflow-hidden cursor-pointer group shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    style={{ height: "clamp(140px,16vw,220px)" }}>
                    <img src={item.img} alt={item.cat} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.target.style.display = "none"; }} />
                    <div className="absolute inset-0 opacity-75" style={{ background: `linear-gradient(to top, ${item.f}, transparent 65%)` }} />
                    <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-5">
                      <span className="text-white/50 text-[9px] font-bold uppercase tracking-widest mb-1">{item.badge}</span>
                      <p className="lyra-serif text-white font-light text-base sm:text-xl leading-tight">{item.cat}</p>
                      <span className="text-white/45 text-[10px] sm:text-xs mt-1 group-hover:text-white transition-colors">Shop now →</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        <LyraFooter />
        {modalProduct && <AddToCartModal product={modalProduct} onClose={() => setModalProduct(null)} />}
      </div>
    </div>
  );
};

export default Dashboard;