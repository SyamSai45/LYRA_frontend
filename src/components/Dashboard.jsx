
  // // import React, { useEffect, useState, useRef } from "react";
  // // import { useNavigate } from "react-router-dom";
  // // import { useCart } from "./CartContext";
  // // import { useWishlist } from "./WishlistContext";
  // // import { bannerApiFetch } from "../utils/bannerApi";
  // // import AddToCartModal from "./AddToCartModal";
  // // import axios from "axios";
  // // import LyraFooter from "./Footer";


  // // const API = axios.create({
  // //   baseURL: "http://localhost:6055/api/admin",
  // // });

  // // const CATEGORIES = [
  // //   { id: 1, name: "Fashion",     icon: "👗", bg: "bg-purple-50" },
  // //   { id: 2, name: "Footwear",    icon: "👟", bg: "bg-pink-50" },
  // //   { id: 3, name: "Watches",     icon: "⌚", bg: "bg-blue-50" },
  // //   { id: 4, name: "Accessories", icon: "💍", bg: "bg-yellow-50" },
  // //   { id: 5, name: "Bags",        icon: "👜", bg: "bg-green-50" },
  // //   { id: 6, name: "Sunglasses",  icon: "🕶️", bg: "bg-orange-50" },
  // //   { id: 7, name: "Ethnic Wear", icon: "🥻", bg: "bg-red-50" },
  // //   { id: 8, name: "Activewear",  icon: "🏃", bg: "bg-teal-50" },
  // // ];


  // // // ── Brand logos — mix of real CDN logos + in-app brands ──
  // // const BRANDS = [
  // //   // Real popular brands — logos via brand CDNs
  // //   {
  // //     name: "Nike",
  // //     logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  // //     category: "Footwear",
  // //     bg: "#f5f5f5",
  // //   },
  // //   {
  // //     name: "Adidas",
  // //     logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
  // //     category: "Footwear",
  // //     bg: "#f5f5f5",
  // //   },
  // //   {
  // //     name: "Zara",
  // //     logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg",
  // //     category: "Fashion",
  // //     bg: "#f5f5f5",
  // //   },
  // //   {
  // //     name: "H&M",
  // //     logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg",
  // //     category: "Fashion",
  // //     bg: "#fff0f0",
  // //   },
  // //   {
  // //     name: "Puma",
  // //     logo: "https://upload.wikimedia.org/wikipedia/commons/8/88/Puma_logo.svg",
  // //     category: "Footwear",
  // //     bg: "#f5f5f5",
  // //   },
  // //   {
  // //     name: "Levi's",
  // //     logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Levi%27s_logo_red.svg",
  // //     category: "Denim",
  // //     bg: "#fff0f0",
  // //   },
  // //   {
  // //     name: "Gucci",
  // //     logo: "https://upload.wikimedia.org/wikipedia/commons/7/79/1000x1000_Gucci_logo.svg",
  // //     category: "Luxury",
  // //     bg: "#fafaf5",
  // //   },
  // //   {
  // //     name: "Rolex",
  // //     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Rolex_Logo.png/640px-Rolex_Logo.png",
  // //     category: "Watches",
  // //     bg: "#f5faf5",
  // //   },
  // //   {
  // //     name: "Fossil",
  // //     logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Fossil_Group_logo.svg",
  // //     category: "Watches",
  // //     bg: "#f5f5f5",
  // //   },
  // //   {
  // //     name: "Tommy Hilfiger",
  // //     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Tommy_Hilfiger_logo.svg/640px-Tommy_Hilfiger_logo.svg.png",
  // //     category: "Fashion",
  // //     bg: "#f5f5ff",
  // //   },
  // //   {
  // //     name: "Calvin Klein",
  // //     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Calvin_Klein_color_logo.svg/640px-Calvin_Klein_color_logo.svg.png",
  // //     category: "Fashion",
  // //     bg: "#f5f5f5",
  // //   },
  // //   {
  // //     name: "Ray-Ban",
  // //     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Ray-Ban_logo.svg/640px-Ray-Ban_logo.svg.png",
  // //     category: "Sunglasses",
  // //     bg: "#fff5f5",
  // //   },
  // //   // In-app brands — styled text pill logos
  // //   {
  // //     name: "Lyra Studio",
  // //     logoText: "LYRA",
  // //     color: "#7F77DD",
  // //     category: "Fashion · Bags",
  // //     bg: "#f0efff",
  // //   },
  // //   {
  // //     name: "Elliot & Co",
  // //     logoText: "E&Co",
  // //     color: "#1D9E75",
  // //     category: "Fashion",
  // //     bg: "#edfaf5",
  // //   },
  // //   {
  // //     name: "StreetLux",
  // //     logoText: "SLX",
  // //     color: "#D85A30",
  // //     category: "Fashion",
  // //     bg: "#fff3ef",
  // //   },
  // //   {
  // //     name: "BloomWear",
  // //     logoText: "bloom",
  // //     color: "#D4537E",
  // //     category: "Fashion",
  // //     bg: "#fff0f5",
  // //   },
  // //   {
  // //     name: "TimeLux",
  // //     logoText: "TL",
  // //     color: "#BA7517",
  // //     category: "Watches",
  // //     bg: "#fdf6ec",
  // //   },
  // //   {
  // //     name: "FlexFit",
  // //     logoText: "FF",
  // //     color: "#0F6E56",
  // //     category: "Activewear",
  // //     bg: "#edf7f4",
  // //   },
  // //   {
  // //     name: "RunElite",
  // //     logoText: "RE",
  // //     color: "#639922",
  // //     category: "Footwear",
  // //     bg: "#f3f9ea",
  // //   },
  // //   {
  // //     name: "ShadeHouse",
  // //     logoText: "SH",
  // //     color: "#185FA5",
  // //     category: "Sunglasses",
  // //     bg: "#edf4fc",
  // //   },
  // //   {
  // //     name: "EthnicLux",
  // //     logoText: "EL",
  // //     color: "#A32D2D",
  // //     category: "Ethnic Wear",
  // //     bg: "#fdf0f0",
  // //   },
  // //   {
  // //     name: "EcoLux",
  // //     logoText: "eco",
  // //     color: "#3B6D11",
  // //     category: "Bags",
  // //     bg: "#f0f7ea",
  // //   },
  // // ];

  // // // ── Brand Logo Scrollbar Component ──
  // // const BrandScrollBar = ({ onBrandClick }) => {
  // //   const trackRef = useRef(null);
  // //   const animRef  = useRef(null);
  // //   const posRef   = useRef(0);
  // //   const pausedRef = useRef(false);

  // //   useEffect(() => {
  // //     const track = trackRef.current;
  // //     if (!track) return;

  // //     const speed = 0.6; // px per frame

  // //     const step = () => {
  // //       if (!pausedRef.current) {
  // //         posRef.current += speed;
  // //         // Reset when first half scrolled
  // //         if (posRef.current >= track.scrollWidth / 2) {
  // //           posRef.current = 0;
  // //         }
  // //         track.style.transform = `translateX(-${posRef.current}px)`;
  // //       }
  // //       animRef.current = requestAnimationFrame(step);
  // //     };

  // //     animRef.current = requestAnimationFrame(step);
  // //     return () => cancelAnimationFrame(animRef.current);
  // //   }, []);

  // //   const allBrands = [...BRANDS, ...BRANDS]; // duplicate for seamless loop

  // //   return (
  // //     <div className="mb-6">
  // //       {/* Header */}
  // //       <div className="flex items-center justify-between mb-3">
  // //         <h2 className="font-serif text-2xl text-gray-900">
  // //           Top <span className="text-violet-600">Brands</span>
  // //         </h2>
  // //         <button className="text-sm text-violet-600 font-medium hover:underline">
  // //           View All →
  // //         </button>
  // //       </div>

  // //       {/* Scroll strip */}
  // //       <div
  // //         className="relative overflow-hidden bg-white rounded-2xl border border-purple-100 py-4"
  // //         onMouseEnter={() => { pausedRef.current = true; }}
  // //         onMouseLeave={() => { pausedRef.current = false; }}
  // //       >
  // //         {/* Fade edges */}
  // //         <div
  // //           className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
  // //           style={{ background: "linear-gradient(to right, white, transparent)" }}
  // //         />
  // //         <div
  // //           className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
  // //           style={{ background: "linear-gradient(to left, white, transparent)" }}
  // //         />

  // //         {/* Scrolling track */}
  // //         <div
  // //           ref={trackRef}
  // //           className="flex items-center gap-3 px-4 will-change-transform"
  // //           style={{ width: "max-content" }}
  // //         >
  // //           {allBrands.map((brand, i) => (
  // //             <button
  // //               key={`${brand.name}-${i}`}
  // //               onClick={() => onBrandClick(brand.name)}
  // //               title={`${brand.name} · ${brand.category}`}
  // //               className="flex-shrink-0 flex flex-col items-center gap-2 group"
  // //             >
  // //               {/* Logo card */}
  // //               <div
  // //                 className="w-24 h-14 rounded-xl flex items-center justify-center border border-purple-100 group-hover:border-violet-300 group-hover:shadow-md group-hover:-translate-y-0.5 transition-all duration-200 overflow-hidden px-3"
  // //                 style={{ background: brand.bg || "#f9f9f9" }}
  // //               >
  // //                 {brand.logo ? (
  // //                   <img
  // //                     src={brand.logo}
  // //                     alt={brand.name}
  // //                     className="max-w-full max-h-full object-contain"
  // //                     style={{ maxHeight: "36px" }}
  // //                     onError={(e) => {
  // //                       // fallback to text badge if logo fails
  // //                       e.target.style.display = "none";
  // //                       e.target.nextSibling && (e.target.nextSibling.style.display = "flex");
  // //                     }}
  // //                   />
  // //                 ) : null}
  // //                 {/* Text logo for in-app brands or fallback */}
  // //                 <span
  // //                   className="font-bold tracking-tight text-sm"
  // //                   style={{
  // //                     color: brand.color || "#1e0a3c",
  // //                     display: brand.logo ? "none" : "flex",
  // //                     fontFamily: "serif",
  // //                     letterSpacing: "0.05em",
  // //                   }}
  // //                 >
  // //                   {brand.logoText || brand.name}
  // //                 </span>
  // //               </div>
  // //               {/* Brand name label */}
  // //               <span className="text-xs text-gray-500 group-hover:text-violet-600 transition-colors font-medium whitespace-nowrap">
  // //                 {brand.name}
  // //               </span>
  // //             </button>
  // //           ))}
  // //         </div>
  // //       </div>
  // //     </div>
  // //   );
  // // };

  // // const Stars = ({ rating }) => (
  // //   <div className="flex items-center gap-1">
  // //     <span className="text-amber-400 text-xs">{"★".repeat(Math.floor(rating))}{"☆".repeat(5 - Math.floor(rating))}</span>
  // //     <span className="text-gray-400 text-xs">{rating}</span>
  // //   </div>
  // // );

  // // const ProductCard = ({ product, onAddToCart }) => {
  // //   const navigate = useNavigate();
  // //   const { toggleWishlist, isWishlisted } = useWishlist();
  // //   const wishlisted = isWishlisted(product._id);
  // //   const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  // //   return (
  // //     <div
  // //       onClick={() => navigate(`/product/${product._id}`)}
  // //       className="bg-white rounded-2xl border border-purple-100 overflow-hidden group hover:border-purple-300 hover:shadow-xl hover:shadow-purple-100 hover:-translate-y-1 transition-all duration-300 relative cursor-pointer"
  // //     >
  // //       {product.badge && (
  // //         <span className="absolute top-2 left-2 z-10 bg-gradient-to-r from-violet-600 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
  // //           {product.badge}
  // //         </span>
  // //       )}
  // //       <button
  // //         onClick={(e) => { e.stopPropagation(); toggleWishlist(product); }}
  // //         className="absolute top-2 right-2 z-10 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-lg hover:scale-110 transition-transform"
  // //         style={{ color: wishlisted ? "#ef4444" : "#d1d5db" }}
  // //       >
  // //         {wishlisted ? "♥" : "♡"}
  // //       </button>
  // //       <div className="h-56 overflow-hidden bg-purple-50">
  // //         <img
  // //           src={product.image} alt={product.name}
  // //           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
  // //           onError={(e) => { e.target.src = "https://placehold.co/300x400/f3f4f6/9ca3af?text=Lyra"; }}
  // //         />
  // //       </div>
  // //       <div className="p-3">
  // //         <p className="text-xs font-semibold text-violet-400 uppercase tracking-wider mb-1">{product.category}</p>
  // //         <p className="text-sm font-medium text-gray-900 truncate mb-1">{product.name}</p>
  // //         <div className="flex items-center gap-1 mb-1">
  // //           <span className="text-amber-400 text-xs">{"★".repeat(Math.floor(product.rating))}{"☆".repeat(5 - Math.floor(product.rating))}</span>
  // //           <span className="text-gray-400 text-xs">{product.rating}</span>
  // //         </div>
  // //         <p className="text-xs text-gray-400 mt-0.5">({product.reviews.toLocaleString()} reviews)</p>
  // //         <div className="flex items-center gap-2 mt-2 flex-wrap">
  // //           <span className="text-base font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
  // //           <span className="text-xs text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
  // //           <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded">{discount}% off</span>
  // //         </div>
  // //         <button
  // //           onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
  // //           className="w-full mt-3 py-2 bg-gradient-to-r from-violet-600 to-purple-500 text-white text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:shadow-lg hover:shadow-purple-200"
  // //         >
  // //           Add to Cart
  // //         </button>
  // //       </div>
  // //     </div>
  // //   );
  // // };

  // // const Dashboard = () => {
  // //   const navigate = useNavigate();
  // //   const { cartCount } = useCart();
  // //   const { wishlistCount } = useWishlist();
  // //   const [user, setUser]                 = useState({});
  // //   const [search, setSearch]             = useState("");
  // //   const [currentBanner, setCurrent]     = useState(0);
  // //   const [showMenu, setShowMenu]         = useState(false);
  // //   const [activeTab, setActiveTab]       = useState("All");
  // //   const [activeBrand, setActiveBrand]   = useState(null);
  // //   const [modalProduct, setModalProduct] = useState(null);
  // //   const [products, setProducts] = useState([]);
  // //   const [banners, setBanners] = useState([]);
  // //   const [loadingBanners, setLoadingBanners] = useState(false);


  // //   useEffect(() => {
  // //     const loadData = async () => {
  // //       try {
  // //         const stored = sessionStorage.getItem("user");
  // //         if (!stored) { navigate("/"); return; }
  // //         setUser(JSON.parse(stored));

  // //         const { data } = await API.get("/products");
  // //         setProducts(data);

  // //         setLoadingBanners(true);
  // //         try {
  // //           const bannersData = await bannerApiFetch("/active");
  // //           setBanners(bannersData);
  // //         } catch (err) {
  // //           console.error("Failed to fetch banners:", err);
  // //           setBanners([]); // Fallback to empty array
  // //         } finally {
  // //           setLoadingBanners(false);
  // //         }

  // //       } catch (err) {
  // //         console.error(err);
  // //       }
  // //     };

  // //     loadData();
  // //   }, [navigate]);

  // //   // Update banner rotation effect
  // //   useEffect(() => {
  // //     if (banners.length > 0) {
  // //       const t = setInterval(() => {
  // //         setCurrent((c) => (c + 1) % banners.length);
  // //       }, 5000);
  // //       return () => clearInterval(t);
  // //     }
  // //   }, [banners]);


  // //   const handleLogout = () => { sessionStorage.removeItem("user"); navigate("/"); };

  // //   // Brand click handler — filters products if brand exists in data, else shows toast
  // //   const handleBrandClick = (brandName) => {
  // //     const match = products.find(
  // //       (p) => p.brand?.toLowerCase() === brandName.toLowerCase()
  // //     );
  // //     if (match) {
  // //       setActiveBrand(brandName);
  // //       setActiveTab("All");
  // //       setSearch("");
  // //     } else {
  // //       // Brand not in product data — just visually select it
  // //       setActiveBrand(brandName);
  // //     }
  // //   };

  // //   const filtered = products.filter((p) => {
  // //     const matchTab    = activeTab === "All" || p.category === activeTab;
  // //     const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
  // //     const matchBrand  = !activeBrand || p.brand?.toLowerCase() === activeBrand.toLowerCase();
  // //     return matchTab && matchSearch && matchBrand;
  // //   });

  // //   const banner = banners[currentBanner];
  // //   const HeroBanner = ({ banner }) => {
  // //     if (!banner) return null;
      
  // //     return (
  // //       <div className={`relative rounded-2xl overflow-hidden mb-8 h-72 bg-gradient-to-r ${banner.colorFrom || 'from-purple-900'} ${banner.colorVia || 'via-violet-800'} ${banner.colorTo || 'to-purple-600'} shadow-xl flex`}>
  // //         <div className="relative z-10 flex flex-col justify-center px-12 w-1/2 flex-shrink-0">
  // //           <p className="text-xs tracking-widest text-white/60 uppercase mb-2">✦ Lyra Exclusive</p>
  // //           <h1 className="font-serif text-4xl font-light text-white leading-tight mb-2">{banner.title}</h1>
  // //           <p className="text-white/70 text-sm mb-6">{banner.subtitle}</p>
  // //           <button 
  // //             onClick={() => banner.link && navigate(banner.link)}
  // //             className="w-fit px-7 py-3 bg-white text-[#1e0a3c] text-sm font-semibold rounded-xl hover:bg-violet-100 transition-all hover:-translate-y-0.5 hover:shadow-lg"
  // //           >
  // //             {banner.ctaText || "Shop Now"} →
  // //           </button>
  // //           <div className="flex gap-2 mt-6">
  // //             {banners.map((_, i) => (
  // //               <button
  // //                 key={i}
  // //                 onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
  // //                 className={`h-1 rounded-full transition-all ${i === currentBanner ? "w-8 bg-white" : "w-5 bg-white/40"}`}
  // //               />
  // //             ))}
  // //           </div>
  // //         </div>
  // //         <div className="w-1/2 flex-shrink-0 relative overflow-hidden">
  // //           <img
  // //             src={banner.image}
  // //             alt={banner.title}
  // //             className="absolute inset-0 w-full h-full object-cover object-center"
  // //             style={{ 
  // //               maskImage: "linear-gradient(to right, transparent 0%, black 30%)", 
  // //               WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 30%)" 
  // //             }}
  // //             onError={(e) => { 
  // //               e.target.style.display = "none"; 
  // //               e.target.parentElement.classList.add("bg-gradient-to-r", "from-purple-900", "to-pink-600");
  // //             }}
  // //           />
  // //         </div>
  // //       </div>
  // //     );
  // //   };

  // //   return (
  // //     <div className="min-h-screen bg-gray-50 font-sans">

  // //       {/* ── NAVBAR ── */}
  // //       <nav className="sticky top-0 z-50 bg-[#1e0a3c] shadow-lg shadow-purple-900/30">  
  // //         <div className="flex items-center gap-4 px-6 h-16">
  // //           <div
  // //             className="font-serif text-2xl tracking-widest text-purple-200 cursor-pointer flex-shrink-0 select-none"
  // //             onClick={() => { navigate("/dashboard"); setActiveBrand(null); }}
  // //           >
  // //             LY<span className="text-pink-400">R</span>A
  // //           </div>

  // //           <div className="flex-1 max-w-xl relative">
  // //             <input
  // //               className="w-full bg-white/10 text-white placeholder-white/40 rounded-xl px-4 py-2.5 pr-10 text-sm outline-none focus:bg-white focus:text-gray-900 focus:placeholder-gray-400 transition-all duration-200 border border-transparent focus:border-violet-400"
  // //               placeholder="Search clothes, shoes, watches..."
  // //               value={search}
  // //               onChange={(e) => { setSearch(e.target.value); setActiveBrand(null); }}
  // //             />
  // //             <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 text-sm">🔍</span>
  // //           </div>

  // //           <button
  // //             onClick={() => navigate("/dashboard")}
  // //             className="flex flex-col items-center px-3 py-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all text-xs gap-0.5"
  // //           >
  // //             <span className="text-lg">🏠</span>
  // //             <span className="tracking-wide">Home</span>
  // //           </button>

  // //           <button
  // //             onClick={() => navigate("/shop")}
  // //             className="flex flex-col items-center px-3 py-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all text-xs gap-0.5"
  // //           >
  // //             <span className="text-lg">🛍</span>
  // //             <span className="tracking-wide">Shop</span>
  // //           </button>

  // //           <div className="flex items-center gap-1 ml-auto">
  // //             <button
  // //               onClick={() => navigate("/wishlist")}
  // //               className="flex flex-col items-center px-3 py-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all text-xs gap-0.5 relative"
  // //             >
  // //               <span className="text-lg">{wishlistCount > 0 ? "♥" : "♡"}</span>
  // //               <span className="tracking-wide">Wishlist</span>
  // //               {wishlistCount > 0 && (
  // //                 <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">{wishlistCount}</span>
  // //               )}
  // //             </button>

  // //             <button
  // //               className="flex flex-col items-center px-3 py-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all text-xs gap-0.5 relative"
  // //               onClick={() => navigate("/cart")}
  // //             >
  // //               <span className="text-lg">🛒</span>
  // //               <span className="tracking-wide">Cart</span>
  // //               {cartCount > 0 && (
  // //                 <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">{cartCount}</span>
  // //               )}
  // //             </button>

  // //             <div className="relative">
  // //               <button
  // //                 onClick={() => setShowMenu((v) => !v)}
  // //                 className="flex flex-col items-center px-3 py-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all text-xs gap-0.5"
  // //               >
  // //                 <span className="text-lg">👤</span>
  // //                 <span className="tracking-wide">{user.fullName?.split(" ")[0] || "Account"}</span>
  // //               </button>

  // //               {showMenu && (
  // //                 <div className="absolute right-0 top-full mt-2 w-52 bg-white rounded-2xl shadow-xl shadow-purple-100 border border-purple-50 overflow-hidden z-50">
  // //                   <div className="bg-gradient-to-r from-[#1e0a3c] to-violet-700 px-4 py-3">
  // //                     <p className="text-white font-semibold text-sm">{user.fullName || "Guest"}</p>
  // //                     <p className="text-purple-300 text-xs mt-0.5">{user.email || ""}</p>
  // //                   </div>
  // //                   {[
  // //                     { label: "📦 My Orders",  tab: "orders" },
  // //                     { label: "👤 My Profile", tab: "profile" },
  // //                     { label: "♡ Wishlist",    tab: "wishlist" },
  // //                     { label: "📍 Addresses",  tab: "addresses" },
  // //                   ].map((item) => (
  // //                     <button
  // //                       key={item.label}
  // //                       onClick={() => { setShowMenu(false); navigate(`/profile?tab=${item.tab}`); }}
  // //                       className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-violet-700 transition-colors"
  // //                     >
  // //                       {item.label}
  // //                     </button>
  // //                   ))}
  // //                   <button onClick={handleLogout} className="w-full text-left px-4 py-3 text-sm text-red-500 hover:bg-red-50 transition-colors border-t border-gray-100">
  // //                     🚪 Sign Out
  // //                   </button>
  // //                 </div>
  // //               )}
  // //             </div>
  // //           </div>
  // //         </div>
          

  // //         {/* Category tab bar */}
  // //         <div className="flex overflow-x-auto bg-white border-b border-purple-100 scrollbar-hide">
  // //           <button
  // //             onClick={() => { setActiveTab("All"); setActiveBrand(null); }}
  // //             className={`flex flex-col items-center px-5 py-2.5 text-xs font-medium flex-shrink-0 border-b-2 transition-all gap-1 ${activeTab === "All" && !activeBrand ? "border-violet-600 text-violet-700" : "border-transparent text-gray-500 hover:text-violet-600 hover:bg-violet-50"}`}
  // //           >
  // //             <span className="text-xl">🏪</span>
  // //             <span className="tracking-wide uppercase text-xs">All</span>
  // //           </button>
  // //           {CATEGORIES.map((cat) => (
  // //             <button
  // //               key={cat.id}
  // //               onClick={() => navigate(`/category/${encodeURIComponent(cat.name)}`)}
  // //               className={`flex flex-col items-center px-5 py-2.5 text-xs font-medium flex-shrink-0 border-b-2 transition-all gap-1 ${activeTab === cat.name ? "border-violet-600 text-violet-700" : "border-transparent text-gray-500 hover:text-violet-600 hover:bg-violet-50"}`}
  // //             >
  // //               <span className="text-xl">{cat.icon}</span>
  // //               <span className="tracking-wide uppercase text-xs whitespace-nowrap">{cat.name}</span>
  // //             </button>
  // //           ))}
  // //         </div>
  // //       </nav>

  // //       {/* ── BODY ── */}
  // //       <div className="max-w-screen-xl mx-auto px-4 py-6" onClick={() => setShowMenu(false)}>

  // //         {/* Hero Banner - conditionally render based on loading state */}
  // //         {loadingBanners ? (
  // //           <div className="relative rounded-2xl overflow-hidden mb-8 h-72 bg-gradient-to-r from-purple-100 to-purple-200 animate-pulse flex items-center justify-center">
  // //             <p className="text-purple-400">Loading banners...</p>
  // //           </div>
  // //         ) : banners.length > 0 ? (
  // //           <HeroBanner banner={banners[currentBanner]} />
  // //         ) : (
  // //           <div className="relative rounded-2xl overflow-hidden mb-8 h-72 bg-gradient-to-r from-purple-900 to-pink-600 flex items-center justify-center">
  // //             <p className="text-white">No banners available</p>
  // //           </div>
  // //         )}

  // //         {/* Category Cards */}
  // //         <div className="mb-2 flex items-center justify-between">
  // //           <h2 className="font-serif text-2xl text-gray-900">Shop by <span className="text-violet-600">Category</span></h2>
  // //         </div>
  // //         <div className="grid grid-cols-4 md:grid-cols-8 gap-3 mb-8">
  // //           {CATEGORIES.map((cat) => (
  // //             <div
  // //               key={cat.id}
  // //               onClick={() => navigate(`/category/${encodeURIComponent(cat.name)}`)}
  // //               className={`${cat.bg} rounded-2xl p-4 flex flex-col items-center cursor-pointer border-2 border-transparent hover:border-violet-300 hover:-translate-y-1 hover:shadow-md transition-all duration-200`}
  // //             >
  // //               <span className="text-3xl mb-2">{cat.icon}</span>
  // //               <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide text-center">{cat.name}</span>
  // //             </div>
  // //           ))}
  // //         </div>

  // //         {/* Offer Banners */}
  // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
  // //           {[
  // //             { icon: "🚚", title: "Free Delivery",   sub: "On orders above ₹999",      from: "from-violet-700", to: "to-purple-600" },
  // //             { icon: "↩",  title: "Easy Returns",    sub: "30-day hassle-free returns", from: "from-teal-600",   to: "to-cyan-500" },
  // //             { icon: "🔒", title: "Secure Payments", sub: "100% safe & encrypted",      from: "from-amber-600",  to: "to-orange-500" },
  // //           ].map((o) => (
  // //             <div key={o.title} className={`bg-gradient-to-r ${o.from} ${o.to} rounded-2xl p-5 flex items-center gap-4 cursor-pointer hover:-translate-y-1 transition-all shadow-md`}>
  // //               <span className="text-3xl">{o.icon}</span>
  // //               <div>
  // //                 <p className="text-white font-semibold text-sm">{o.title}</p>
  // //                 <p className="text-white/70 text-xs mt-0.5">{o.sub}</p>
  // //               </div>
  // //             </div>
  // //           ))}
  // //         </div>

  // //         {/* Flash Sale Bar */}
  // //         <div className="bg-gradient-to-r from-[#1e0a3c] to-violet-800 rounded-2xl px-6 py-4 mb-6 flex items-center gap-4">
  // //           <h3 className="font-serif text-xl text-white">Flash Sale</h3>
  // //           <span className="bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full tracking-widest animate-pulse">⚡ LIVE</span>
  // //           <div className="ml-auto flex items-center gap-2">
  // //             {[["04", "HRS"], ["23", "MIN"], ["59", "SEC"]].map(([n, l], i) => (
  // //               <React.Fragment key={l}>
  // //                 {i > 0 && <span className="text-white/40 font-bold">:</span>}
  // //                 <div className="bg-white/10 rounded-lg px-3 py-1.5 text-center min-w-12">
  // //                   <span className="text-white font-bold text-lg block font-serif">{n}</span>
  // //                   <span className="text-white/40 text-xs uppercase tracking-widest">{l}</span>
  // //                 </div>
  // //               </React.Fragment>
  // //             ))}
  // //           </div>
  // //         </div>

  // //         {/* ── BRAND LOGO SCROLLBAR ── */}
  // //         <BrandScrollBar onBrandClick={handleBrandClick} />

  // //         {/* Active brand filter pill */}
  // //         {activeBrand && (
  // //           <div className="flex items-center gap-2 mb-4">
  // //             <span className="text-sm text-gray-500">Filtering by:</span>
  // //             <span className="bg-violet-100 text-violet-700 text-sm font-semibold px-4 py-1 rounded-full flex items-center gap-2">
  // //               {activeBrand}
  // //               <button
  // //                 onClick={() => setActiveBrand(null)}
  // //                 className="ml-1 text-violet-400 hover:text-violet-700 font-bold text-base leading-none"
  // //               >
  // //                 ×
  // //               </button>
  // //             </span>
  // //           </div>
  // //         )}

  // //         {/* Products Section */}
  // //         <div className="flex items-center justify-between mb-4">
  // //           <h2 className="font-serif text-2xl text-gray-900">
  // //             {activeBrand
  // //               ? <>{activeBrand} <span className="text-violet-600">Collection</span></>
  // //               : activeTab === "All"
  // //                 ? <>New <span className="text-violet-600">Arrivals</span></>
  // //                 : <>{activeTab} <span className="text-violet-600">Collection</span></>
  // //             }
  // //           </h2>
  // //           <button className="text-sm text-violet-600 font-medium hover:underline">View All →</button>
  // //         </div>

  // //         {filtered.length > 0 ? (
  // //           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
  // //             {filtered.map((p) => (
  // //               <ProductCard key={p._id} product={p} onAddToCart={setModalProduct} />
  // //             ))}
  // //           </div>
  // //         ) : (
  // //           <div className="text-center py-20 bg-white rounded-2xl border border-purple-100">
  // //             <p className="text-4xl mb-3">🔍</p>
  // //             <p className="text-gray-500 text-sm">
  // //               {activeBrand
  // //                 ? `No products found for "${activeBrand}" brand`
  // //                 : `No products found for "${search}"`
  // //               }
  // //             </p>
  // //             {activeBrand && (
  // //               <button
  // //                 onClick={() => setActiveBrand(null)}
  // //                 className="mt-4 text-sm text-violet-600 font-medium hover:underline"
  // //               >
  // //                 Clear brand filter
  // //               </button>
  // //             )}
  // //           </div>
  // //         )}
  // //       </div>

  // //       <LyraFooter />

  // //       {/* Add to Cart Modal */}
  // //       {modalProduct && (
  // //         <AddToCartModal product={modalProduct} onClose={() => setModalProduct(null)} />
  // //       )}
  // //     </div>
  // //   );
  // // };

  // // export default Dashboard;


  // import React, { useEffect, useState, useRef } from "react";
  // import { useNavigate } from "react-router-dom";
  // import { useCart } from "./CartContext";
  // import { useWishlist } from "./WishlistContext";
  // import { bannerApiFetch } from "../utils/bannerApi";
  // import AddToCartModal from "./AddToCartModal";
  // import axios from "axios";
  // import LyraFooter from "./Footer";


  // const API = axios.create({
  //   baseURL: "http://localhost:6055/api/admin",
  // });

  // const CATEGORIES = [
  //   { id: 1, name: "Fashion",     icon: "👗", bg: "bg-purple-50" },
  //   { id: 2, name: "Footwear",    icon: "👟", bg: "bg-pink-50" },
  //   { id: 3, name: "Watches",     icon: "⌚", bg: "bg-blue-50" },
  //   { id: 4, name: "Accessories", icon: "💍", bg: "bg-yellow-50" },
  //   { id: 5, name: "Bags",        icon: "👜", bg: "bg-green-50" },
  //   { id: 6, name: "Sunglasses",  icon: "🕶️", bg: "bg-orange-50" },
  //   { id: 7, name: "Ethnic Wear", icon: "🥻", bg: "bg-red-50" },
  //   { id: 8, name: "Activewear",  icon: "🏃", bg: "bg-teal-50" },
  // ];


  // // ── Brand logos — mix of real CDN logos + in-app brands ──
  // const BRANDS = [
  //   // Real popular brands — logos via brand CDNs
  //   {
  //     name: "Nike",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  //     category: "Footwear",
  //     bg: "#f5f5f5",
  //   },
  //   {
  //     name: "Adidas",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
  //     category: "Footwear",
  //     bg: "#f5f5f5",
  //   },
  //   {
  //     name: "Zara",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg",
  //     category: "Fashion",
  //     bg: "#f5f5f5",
  //   },
  //   {
  //     name: "H&M",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg",
  //     category: "Fashion",
  //     bg: "#fff0f0",
  //   },
  //   {
  //     name: "Puma",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/8/88/Puma_logo.svg",
  //     category: "Footwear",
  //     bg: "#f5f5f5",
  //   },
  //   {
  //     name: "Levi's",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Levi%27s_logo_red.svg",
  //     category: "Denim",
  //     bg: "#fff0f0",
  //   },
  //   {
  //     name: "Gucci",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/7/79/1000x1000_Gucci_logo.svg",
  //     category: "Luxury",
  //     bg: "#fafaf5",
  //   },
  //   {
  //     name: "Rolex",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Rolex_Logo.png/640px-Rolex_Logo.png",
  //     category: "Watches",
  //     bg: "#f5faf5",
  //   },
  //   {
  //     name: "Fossil",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Fossil_Group_logo.svg",
  //     category: "Watches",
  //     bg: "#f5f5f5",
  //   },
  //   {
  //     name: "Tommy Hilfiger",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Tommy_Hilfiger_logo.svg/640px-Tommy_Hilfiger_logo.svg.png",
  //     category: "Fashion",
  //     bg: "#f5f5ff",
  //   },
  //   {
  //     name: "Calvin Klein",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Calvin_Klein_color_logo.svg/640px-Calvin_Klein_color_logo.svg.png",
  //     category: "Fashion",
  //     bg: "#f5f5f5",
  //   },
  //   {
  //     name: "Ray-Ban",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Ray-Ban_logo.svg/640px-Ray-Ban_logo.svg.png",
  //     category: "Sunglasses",
  //     bg: "#fff5f5",
  //   },
  //   // In-app brands — styled text pill logos
  //   {
  //     name: "Lyra Studio",
  //     logoText: "LYRA",
  //     color: "#7F77DD",
  //     category: "Fashion · Bags",
  //     bg: "#f0efff",
  //   },
  //   {
  //     name: "Elliot & Co",
  //     logoText: "E&Co",
  //     color: "#1D9E75",
  //     category: "Fashion",
  //     bg: "#edfaf5",
  //   },
  //   {
  //     name: "StreetLux",
  //     logoText: "SLX",
  //     color: "#D85A30",
  //     category: "Fashion",
  //     bg: "#fff3ef",
  //   },
  //   {
  //     name: "BloomWear",
  //     logoText: "bloom",
  //     color: "#D4537E",
  //     category: "Fashion",
  //     bg: "#fff0f5",
  //   },
  //   {
  //     name: "TimeLux",
  //     logoText: "TL",
  //     color: "#BA7517",
  //     category: "Watches",
  //     bg: "#fdf6ec",
  //   },
  //   {
  //     name: "FlexFit",
  //     logoText: "FF",
  //     color: "#0F6E56",
  //     category: "Activewear",
  //     bg: "#edf7f4",
  //   },
  //   {
  //     name: "RunElite",
  //     logoText: "RE",
  //     color: "#639922",
  //     category: "Footwear",
  //     bg: "#f3f9ea",
  //   },
  //   {
  //     name: "ShadeHouse",
  //     logoText: "SH",
  //     color: "#185FA5",
  //     category: "Sunglasses",
  //     bg: "#edf4fc",
  //   },
  //   {
  //     name: "EthnicLux",
  //     logoText: "EL",
  //     color: "#A32D2D",
  //     category: "Ethnic Wear",
  //     bg: "#fdf0f0",
  //   },
  //   {
  //     name: "EcoLux",
  //     logoText: "eco",
  //     color: "#3B6D11",
  //     category: "Bags",
  //     bg: "#f0f7ea",
  //   },
  // ];

  // // ── Brand Logo Scrollbar Component ──
  // const BrandScrollBar = ({ onBrandClick }) => {
  //   const trackRef = useRef(null);
  //   const animRef  = useRef(null);
  //   const posRef   = useRef(0);
  //   const pausedRef = useRef(false);

  //   useEffect(() => {
  //     const track = trackRef.current;
  //     if (!track) return;

  //     const speed = 0.6; // px per frame

  //     const step = () => {
  //       if (!pausedRef.current) {
  //         posRef.current += speed;
  //         // Reset when first half scrolled
  //         if (posRef.current >= track.scrollWidth / 2) {
  //           posRef.current = 0;
  //         }
  //         track.style.transform = `translateX(-${posRef.current}px)`;
  //       }
  //       animRef.current = requestAnimationFrame(step);
  //     };

  //     animRef.current = requestAnimationFrame(step);
  //     return () => cancelAnimationFrame(animRef.current);
  //   }, []);

  //   const allBrands = [...BRANDS, ...BRANDS]; // duplicate for seamless loop

  //   return (
  //     <div className="mb-6">
  //       {/* Header */}
  //       <div className="flex items-center justify-between mb-3">
  //         <h2 className="font-serif text-2xl text-gray-900">
  //           Top <span className="text-violet-600">Brands</span>
  //         </h2>
  //         <button className="text-sm text-violet-600 font-medium hover:underline">
  //           View All →
  //         </button>
  //       </div>

  //       {/* Scroll strip */}
  //       <div
  //         className="relative overflow-hidden bg-white rounded-2xl border border-purple-100 py-4"
  //         onMouseEnter={() => { pausedRef.current = true; }}
  //         onMouseLeave={() => { pausedRef.current = false; }}
  //       >
  //         {/* Fade edges */}
  //         <div
  //           className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
  //           style={{ background: "linear-gradient(to right, white, transparent)" }}
  //         />
  //         <div
  //           className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
  //           style={{ background: "linear-gradient(to left, white, transparent)" }}
  //         />

  //         {/* Scrolling track */}
  //         <div
  //           ref={trackRef}
  //           className="flex items-center gap-3 px-4 will-change-transform"
  //           style={{ width: "max-content" }}
  //         >
  //           {allBrands.map((brand, i) => (
  //             <button
  //               key={`${brand.name}-${i}`}
  //               onClick={() => onBrandClick(brand.name)}
  //               title={`${brand.name} · ${brand.category}`}
  //               className="flex-shrink-0 flex flex-col items-center gap-2 group"
  //             >
  //               {/* Logo card */}
  //               <div
  //                 className="w-24 h-14 rounded-xl flex items-center justify-center border border-purple-100 group-hover:border-violet-300 group-hover:shadow-md group-hover:-translate-y-0.5 transition-all duration-200 overflow-hidden px-3"
  //                 style={{ background: brand.bg || "#f9f9f9" }}
  //               >
  //                 {brand.logo ? (
  //                   <img
  //                     src={brand.logo}
  //                     alt={brand.name}
  //                     className="max-w-full max-h-full object-contain"
  //                     style={{ maxHeight: "36px" }}
  //                     onError={(e) => {
  //                       // fallback to text badge if logo fails
  //                       e.target.style.display = "none";
  //                       e.target.nextSibling && (e.target.nextSibling.style.display = "flex");
  //                     }}
  //                   />
  //                 ) : null}
  //                 {/* Text logo for in-app brands or fallback */}
  //                 <span
  //                   className="font-bold tracking-tight text-sm"
  //                   style={{
  //                     color: brand.color || "#1e0a3c",
  //                     display: brand.logo ? "none" : "flex",
  //                     fontFamily: "serif",
  //                     letterSpacing: "0.05em",
  //                   }}
  //                 >
  //                   {brand.logoText || brand.name}
  //                 </span>
  //               </div>
  //               {/* Brand name label */}
  //               <span className="text-xs text-gray-500 group-hover:text-violet-600 transition-colors font-medium whitespace-nowrap">
  //                 {brand.name}
  //               </span>
  //             </button>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  // const Stars = ({ rating }) => (
  //   <div className="flex items-center gap-1">
  //     <span className="text-amber-400 text-xs">{"★".repeat(Math.floor(rating))}{"☆".repeat(5 - Math.floor(rating))}</span>
  //     <span className="text-gray-400 text-xs">{rating}</span>
  //   </div>
  // );

  // const ProductCard = ({ product, onAddToCart }) => {
  //   const navigate = useNavigate();
  //   const { toggleWishlist, isWishlisted } = useWishlist();
  //   const wishlisted = isWishlisted(product._id);
  //   const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  //   return (
  //     <div
  //       onClick={() => navigate(`/product/${product._id}`)}
  //       className="bg-white rounded-2xl border border-purple-100 overflow-hidden group hover:border-purple-300 hover:shadow-xl hover:shadow-purple-100 hover:-translate-y-1 transition-all duration-300 relative cursor-pointer"
  //     >
  //       {product.badge && (
  //         <span className="absolute top-2 left-2 z-10 bg-gradient-to-r from-violet-600 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
  //           {product.badge}
  //         </span>
  //       )}
  //       <button
  //         onClick={(e) => { e.stopPropagation(); toggleWishlist(product); }}
  //         className="absolute top-2 right-2 z-10 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-lg hover:scale-110 transition-transform"
  //         style={{ color: wishlisted ? "#ef4444" : "#d1d5db" }}
  //       >
  //         {wishlisted ? "♥" : "♡"}
  //       </button>
  //       <div className="h-56 overflow-hidden bg-purple-50">
  //         <img
  //           src={product.image} alt={product.name}
  //           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
  //           onError={(e) => { e.target.src = "https://placehold.co/300x400/f3f4f6/9ca3af?text=Lyra"; }}
  //         />
  //       </div>
  //       <div className="p-3">
  //         <p className="text-xs font-semibold text-violet-400 uppercase tracking-wider mb-1">{product.category}</p>
  //         <p className="text-sm font-medium text-gray-900 truncate mb-1">{product.name}</p>
  //         <div className="flex items-center gap-1 mb-1">
  //           <span className="text-amber-400 text-xs">{"★".repeat(Math.floor(product.rating))}{"☆".repeat(5 - Math.floor(product.rating))}</span>
  //           <span className="text-gray-400 text-xs">{product.rating}</span>
  //         </div>
  //         <p className="text-xs text-gray-400 mt-0.5">({product.reviews.toLocaleString()} reviews)</p>
  //         <div className="flex items-center gap-2 mt-2 flex-wrap">
  //           <span className="text-base font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
  //           <span className="text-xs text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
  //           <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded">{discount}% off</span>
  //         </div>
  //         <button
  //           onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
  //           className="w-full mt-3 py-2 bg-gradient-to-r from-violet-600 to-purple-500 text-white text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:shadow-lg hover:shadow-purple-200"
  //         >
  //           Add to Cart
  //         </button>
  //       </div>
  //     </div>
  //   );
  // };

  // const Dashboard = () => {
  //   const navigate = useNavigate();
  //   const { cartCount } = useCart();
  //   const { wishlistCount } = useWishlist();
  //   const [user, setUser]                 = useState({});
  //   const [search, setSearch]             = useState("");
  //   const [currentBanner, setCurrent]     = useState(0);
  //   const [showMenu, setShowMenu]         = useState(false);
  //   const [activeTab, setActiveTab]       = useState("All");
  //   const [activeBrand, setActiveBrand]   = useState(null);
  //   const [modalProduct, setModalProduct] = useState(null);
  //   const [products, setProducts] = useState([]);
  //   const [banners, setBanners] = useState([]);
  //   const [loadingBanners, setLoadingBanners] = useState(false);
  //   const [activeSection, setActiveSection] = useState('home');


  //   const homeRef = useRef(null);
  //   const shopRef = useRef(null);
  //   const dealsRef = useRef(null);
  //   const trendingRef = useRef(null);

  //   const scrollToSection = (ref) => {
  //     ref.current?.scrollIntoView({ behavior: 'smooth' });
  //   };

  //   useEffect(() => {
  //     const loadData = async () => {
  //       try {
  //         const stored = sessionStorage.getItem("user");
  //         if (!stored) { navigate("/"); return; }
  //         setUser(JSON.parse(stored));

  //         const { data } = await API.get("/products");
  //         setProducts(data);

  //         setLoadingBanners(true);
  //         try {
  //           const bannersData = await bannerApiFetch("/active");
  //           setBanners(bannersData);
  //         } catch (err) {
  //           console.error("Failed to fetch banners:", err);
  //           setBanners([]); // Fallback to empty array
  //         } finally {
  //           setLoadingBanners(false);
  //         }

  //       } catch (err) {
  //         console.error(err);
  //       }
  //     };

  //     loadData();
  //   }, [navigate]);

  //   // Update banner rotation effect
  //   useEffect(() => {
  //     if (banners.length > 0) {
  //       const t = setInterval(() => {
  //         setCurrent((c) => (c + 1) % banners.length);
  //       }, 5000);
  //       return () => clearInterval(t);
  //     }
  //   }, [banners]);


  //   const handleLogout = () => { sessionStorage.removeItem("user"); navigate("/"); };

  //   // Brand click handler — filters products if brand exists in data, else shows toast
  //   const handleBrandClick = (brandName) => {
  //     const match = products.find(
  //       (p) => p.brand?.toLowerCase() === brandName.toLowerCase()
  //     );
  //     if (match) {
  //       setActiveBrand(brandName);
  //       setActiveTab("All");
  //       setSearch("");
  //     } else {
  //       // Brand not in product data — just visually select it
  //       setActiveBrand(brandName);
  //     }
  //   };

  //   const filtered = products.filter((p) => {
  //     const matchTab    = activeTab === "All" || p.category === activeTab;
  //     const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
  //     const matchBrand  = !activeBrand || p.brand?.toLowerCase() === activeBrand.toLowerCase();
  //     return matchTab && matchSearch && matchBrand;
  //   });

  //   const banner = banners[currentBanner];
  //   const HeroBanner = ({ banner }) => {
  //     if (!banner) return null;
      
  //     return (
  //       <div className={`relative rounded-2xl overflow-hidden mb-8 h-72 bg-gradient-to-r ${banner.colorFrom || 'from-purple-900'} ${banner.colorVia || 'via-violet-800'} ${banner.colorTo || 'to-purple-600'} shadow-xl flex`}>
  //         <div className="relative z-10 flex flex-col justify-center px-12 w-1/2 flex-shrink-0">
  //           <p className="text-xs tracking-widest text-white/60 uppercase mb-2">✦ Lyra Exclusive</p>
  //           <h1 className="font-serif text-4xl font-light text-white leading-tight mb-2">{banner.title}</h1>
  //           <p className="text-white/70 text-sm mb-6">{banner.subtitle}</p>
  //           <button 
  //             onClick={() => banner.link && navigate(banner.link)}
  //             className="w-fit px-7 py-3 bg-white text-[#1e0a3c] text-sm font-semibold rounded-xl hover:bg-violet-100 transition-all hover:-translate-y-0.5 hover:shadow-lg"
  //           >
  //             {banner.ctaText || "Shop Now"} →
  //           </button>
  //           <div className="flex gap-2 mt-6">
  //             {banners.map((_, i) => (
  //               <button
  //                 key={i}
  //                 onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
  //                 className={`h-1 rounded-full transition-all ${i === currentBanner ? "w-8 bg-white" : "w-5 bg-white/40"}`}
  //               />
  //             ))}
  //           </div>
  //         </div>
  //         <div className="w-1/2 flex-shrink-0 relative overflow-hidden">
  //           <img
  //             src={banner.image}
  //             alt={banner.title}
  //             className="absolute inset-0 w-full h-full object-cover object-center"
  //             style={{ 
  //               maskImage: "linear-gradient(to right, transparent 0%, black 30%)", 
  //               WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 30%)" 
  //             }}
  //             onError={(e) => { 
  //               e.target.style.display = "none"; 
  //               e.target.parentElement.classList.add("bg-gradient-to-r", "from-purple-900", "to-pink-600");
  //             }}
  //           />
  //         </div>
  //       </div>
  //     );
  //   };

  //   return (
  //     <div className="min-h-screen bg-gray-50 font-sans">

  //       {/* ── NAVBAR ── */}
  //       <nav className="sticky top-0 z-50 bg-[#1e0a3c] shadow-lg shadow-purple-900/30">
  //       {/* Section tabs above the main navbar */}

        

  //       {/* Main navbar content - keeping all existing functionality */}
  //       <div className="flex items-center gap-4 px-6 h-16">
  //         <div
  //           className="font-serif text-2xl tracking-widest text-purple-200 cursor-pointer flex-shrink-0 select-none"
  //           onClick={() => { navigate("/dashboard"); setActiveBrand(null); }}
  //         >
  //           LY<span className="text-pink-400">R</span>A
  //         </div>

  //         {/* Reduced search bar size */}
  //         <div className="flex-1 max-w-md relative">
  //           <input
  //             className="w-full bg-white/10 text-white placeholder-white/40 rounded-xl px-4 py-2.5 pr-10 text-sm outline-none focus:bg-white focus:text-gray-900 focus:placeholder-gray-400 transition-all duration-200 border border-transparent focus:border-violet-400"
  //             placeholder="Search clothes, shoes..."
  //             value={search}
  //             onChange={(e) => { setSearch(e.target.value); setActiveBrand(null); }}
  //           />
  //           <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 text-sm">🔍</span>
  //         </div>

  //         <div className="flex items-center justify-center gap-1 bg-[#1e0a3c] border-b border-violet-900/30 py-1">
  //           {['Home', 'Shop', 'Deals', 'Trending'].map((section) => (
  //             <button
  //               key={section}
  //               onClick={() => {
  //                 if (section === 'Home') navigate('/dashboard');
  //                 if (section === 'Shop') navigate('/shop');
  //                 if (section === 'Deals') navigate('/deals');
  //                 if (section === 'Trending') navigate('/trending');
  //                 setActiveSection(section.toLowerCase());
  //               }}
  //               className={`px-4 py-1.5 text-xs font-medium rounded-full transition-colors ${
  //                 activeSection === section.toLowerCase() 
  //                   ? 'bg-white text-[#1e0a3c]' 
  //                   : 'text-white/80 hover:text-white hover:bg-white/10'
  //               }`}
  //             >
  //               {section}
  //             </button>
  //           ))}
  //         </div>

  //         <div className="flex items-center gap-1 ml-auto">
  //           <button
  //             onClick={() => navigate("/wishlist")}
  //             className="flex flex-col items-center px-3 py-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all text-xs gap-0.5 relative"
  //           >
  //             <span className="text-lg">{wishlistCount > 0 ? "♥" : "♡"}</span>
  //             <span className="tracking-wide">Wishlist</span>
  //             {wishlistCount > 0 && (
  //               <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">{wishlistCount}</span>
  //             )}
  //           </button>

  //           <button
  //             className="flex flex-col items-center px-3 py-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all text-xs gap-0.5 relative"
  //             onClick={() => navigate("/cart")}
  //           >
  //             <span className="text-lg">🛒</span>
  //             <span className="tracking-wide">Cart</span>
  //             {cartCount > 0 && (
  //               <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">{cartCount}</span>
  //             )}
  //           </button>

  //           <div className="relative">
  //             <button
  //               onClick={() => setShowMenu((v) => !v)}
  //               className="flex flex-col items-center px-3 py-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all text-xs gap-0.5"
  //             >
  //               <span className="text-lg">👤</span>
  //               <span className="tracking-wide">{user.fullName?.split(" ")[0] || "Account"}</span>
  //             </button>

  //             {showMenu && (
  //               <div className="absolute right-0 top-full mt-2 w-52 bg-white rounded-2xl shadow-xl shadow-purple-100 border border-purple-50 overflow-hidden z-50">
  //                 <div className="bg-gradient-to-r from-[#1e0a3c] to-violet-700 px-4 py-3">
  //                   <p className="text-white font-semibold text-sm">{user.fullName || "Guest"}</p>
  //                   <p className="text-purple-300 text-xs mt-0.5">{user.email || ""}</p>
  //                 </div>
  //                 {[
  //                   { label: "📦 My Orders",  tab: "orders" },
  //                   { label: "👤 My Profile", tab: "profile" },
  //                   { label: "♡ Wishlist",    tab: "wishlist" },
  //                   { label: "📍 Addresses",  tab: "addresses" },
  //                 ].map((item) => (
  //                   <button
  //                     key={item.label}
  //                     onClick={() => { setShowMenu(false); navigate(`/profile?tab=${item.tab}`); }}
  //                     className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-violet-700 transition-colors"
  //                   >
  //                     {item.label}
  //                   </button>
  //                 ))}
  //                 <button onClick={handleLogout} className="w-full text-left px-4 py-3 text-sm text-red-500 hover:bg-red-50 transition-colors border-t border-gray-100">
  //                   🚪 Sign Out
  //                 </button>
  //               </div>
  //             )}
  //           </div>
  //         </div>
  //       </div>
          

  //         {/* Category tab bar */}
  //         <div className="flex overflow-x-auto bg-white border-b border-purple-100 scrollbar-hide">
  //           <button
  //             onClick={() => { setActiveTab("All"); setActiveBrand(null); }}
  //             className={`flex flex-col items-center px-5 py-2.5 text-xs font-medium flex-shrink-0 border-b-2 transition-all gap-1 ${activeTab === "All" && !activeBrand ? "border-violet-600 text-violet-700" : "border-transparent text-gray-500 hover:text-violet-600 hover:bg-violet-50"}`}
  //           >
  //             <span className="text-xl">🏪</span>
  //             <span className="tracking-wide uppercase text-xs">All</span>
  //           </button>
  //           {CATEGORIES.map((cat) => (
  //             <button
  //               key={cat.id}
  //               onClick={() => navigate(`/category/${encodeURIComponent(cat.name)}`)}
  //               className={`flex flex-col items-center px-5 py-2.5 text-xs font-medium flex-shrink-0 border-b-2 transition-all gap-1 ${activeTab === cat.name ? "border-violet-600 text-violet-700" : "border-transparent text-gray-500 hover:text-violet-600 hover:bg-violet-50"}`}
  //             >
  //               <span className="text-xl">{cat.icon}</span>
  //               <span className="tracking-wide uppercase text-xs whitespace-nowrap">{cat.name}</span>
  //             </button>
  //           ))}
  //         </div>
  //       </nav>

  //       {/* ── BODY ── */}
  //       <div className="max-w-screen-xl mx-auto px-4 py-6" onClick={() => setShowMenu(false)}>

  //         {/* Hero Banner - conditionally render based on loading state */}
  //         {loadingBanners ? (
  //           <div className="relative rounded-2xl overflow-hidden mb-8 h-72 bg-gradient-to-r from-purple-100 to-purple-200 animate-pulse flex items-center justify-center">
  //             <p className="text-purple-400">Loading banners...</p>
  //           </div>
  //         ) : banners.length > 0 ? (
  //           <HeroBanner banner={banners[currentBanner]} />
  //         ) : (
  //           <div className="relative rounded-2xl overflow-hidden mb-8 h-72 bg-gradient-to-r from-purple-900 to-pink-600 flex items-center justify-center">
  //             <p className="text-white">No banners available</p>
  //           </div>
  //         )}

  //         {/* Category Cards */}
  //         <div className="mb-2 flex items-center justify-between">
  //           <h2 className="font-serif text-2xl text-gray-900">Shop by <span className="text-violet-600">Category</span></h2>
  //         </div>
  //         <div className="grid grid-cols-4 md:grid-cols-8 gap-3 mb-8">
  //           {CATEGORIES.map((cat) => (
  //             <div
  //               key={cat.id}
  //               onClick={() => navigate(`/category/${encodeURIComponent(cat.name)}`)}
  //               className={`${cat.bg} rounded-2xl p-4 flex flex-col items-center cursor-pointer border-2 border-transparent hover:border-violet-300 hover:-translate-y-1 hover:shadow-md transition-all duration-200`}
  //             >
  //               <span className="text-3xl mb-2">{cat.icon}</span>
  //               <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide text-center">{cat.name}</span>
  //             </div>
  //           ))}
  //         </div>

  //         {/* Offer Banners */}
  //         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
  //           {[
  //             { icon: "🚚", title: "Free Delivery",   sub: "On orders above ₹999",      from: "from-violet-700", to: "to-purple-600" },
  //             { icon: "↩",  title: "Easy Returns",    sub: "30-day hassle-free returns", from: "from-teal-600",   to: "to-cyan-500" },
  //             { icon: "🔒", title: "Secure Payments", sub: "100% safe & encrypted",      from: "from-amber-600",  to: "to-orange-500" },
  //           ].map((o) => (
  //             <div key={o.title} className={`bg-gradient-to-r ${o.from} ${o.to} rounded-2xl p-5 flex items-center gap-4 cursor-pointer hover:-translate-y-1 transition-all shadow-md`}>
  //               <span className="text-3xl">{o.icon}</span>
  //               <div>
  //                 <p className="text-white font-semibold text-sm">{o.title}</p>
  //                 <p className="text-white/70 text-xs mt-0.5">{o.sub}</p>
  //               </div>
  //             </div>
  //           ))}
  //         </div>

  //         {/* Flash Sale Bar */}
  //         <div className="bg-gradient-to-r from-[#1e0a3c] to-violet-800 rounded-2xl px-6 py-4 mb-6 flex items-center gap-4">
  //           <h3 className="font-serif text-xl text-white">Flash Sale</h3>
  //           <span className="bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full tracking-widest animate-pulse">⚡ LIVE</span>
  //           <div className="ml-auto flex items-center gap-2">
  //             {[["04", "HRS"], ["23", "MIN"], ["59", "SEC"]].map(([n, l], i) => (
  //               <React.Fragment key={l}>
  //                 {i > 0 && <span className="text-white/40 font-bold">:</span>}
  //                 <div className="bg-white/10 rounded-lg px-3 py-1.5 text-center min-w-12">
  //                   <span className="text-white font-bold text-lg block font-serif">{n}</span>
  //                   <span className="text-white/40 text-xs uppercase tracking-widest">{l}</span>
  //                 </div>
  //               </React.Fragment>
  //             ))}
  //           </div>
  //         </div>

  //         {/* ── BRAND LOGO SCROLLBAR ── */}
  //         <BrandScrollBar onBrandClick={handleBrandClick} />

  //         {/* Active brand filter pill */}
  //         {activeBrand && (
  //           <div className="flex items-center gap-2 mb-4">
  //             <span className="text-sm text-gray-500">Filtering by:</span>
  //             <span className="bg-violet-100 text-violet-700 text-sm font-semibold px-4 py-1 rounded-full flex items-center gap-2">
  //               {activeBrand}
  //               <button
  //                 onClick={() => setActiveBrand(null)}
  //                 className="ml-1 text-violet-400 hover:text-violet-700 font-bold text-base leading-none"
  //               >
  //                 ×
  //               </button>
  //             </span>
  //           </div>
  //         )}

  //         {/* Products Section */}
  //         <div className="flex items-center justify-between mb-4">
  //           <h2 className="font-serif text-2xl text-gray-900">
  //             {activeBrand
  //               ? <>{activeBrand} <span className="text-violet-600">Collection</span></>
  //               : activeTab === "All"
  //                 ? <>New <span className="text-violet-600">Arrivals</span></>
  //                 : <>{activeTab} <span className="text-violet-600">Collection</span></>
  //             }
  //           </h2>
  //           <button className="text-sm text-violet-600 font-medium hover:underline">View All →</button>
  //         </div>

  //         {filtered.length > 0 ? (
  //           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
  //             {filtered.map((p) => (
  //               <ProductCard key={p._id} product={p} onAddToCart={setModalProduct} />
  //             ))}
  //           </div>
  //         ) : (
  //           <div className="text-center py-20 bg-white rounded-2xl border border-purple-100">
  //             <p className="text-4xl mb-3">🔍</p>
  //             <p className="text-gray-500 text-sm">
  //               {activeBrand
  //                 ? `No products found for "${activeBrand}" brand`
  //                 : `No products found for "${search}"`
  //               }
  //             </p>
  //             {activeBrand && (
  //               <button
  //                 onClick={() => setActiveBrand(null)}
  //                 className="mt-4 text-sm text-violet-600 font-medium hover:underline"
  //               >
  //                 Clear brand filter
  //               </button>
  //             )}
  //           </div>
  //         )}
  //       </div>

  //       <LyraFooter />

  //       {/* Add to Cart Modal */}
  //       {modalProduct && (
  //         <AddToCartModal product={modalProduct} onClose={() => setModalProduct(null)} />
  //       )}
  //     </div>
  //   );
  // };

  // export default Dashboard;


// import React, { useEffect, useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "./CartContext";
// import { useWishlist } from "./WishlistContext";
// import { bannerApiFetch } from "../utils/bannerApi";
// import AddToCartModal from "./AddToCartModal";
// import axios from "axios";
// import LyraFooter from "./Footer";




// const API = axios.create({
//   baseURL: "http://localhost:6055/api/admin",
// });

// const CATEGORIES = [
//   { id: 1, name: "Fashion",     icon: "👗", bg: "bg-purple-50" },
//   { id: 2, name: "Footwear",    icon: "👟", bg: "bg-pink-50" },
//   { id: 3, name: "Watches",     icon: "⌚", bg: "bg-blue-50" },
//   { id: 4, name: "Accessories", icon: "💍", bg: "bg-yellow-50" },
//   { id: 5, name: "Bags",        icon: "👜", bg: "bg-green-50" },
//   { id: 6, name: "Sunglasses",  icon: "🕶️", bg: "bg-orange-50" },
//   { id: 7, name: "Ethnic Wear", icon: "🥻", bg: "bg-red-50" },
//   { id: 8, name: "Activewear",  icon: "🏃", bg: "bg-teal-50" },
// ];

// const BRANDS = [
//   {
//       name: "Nike",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
//       category: "Footwear",
//       bg: "#f5f5f5",
//     },
//     {
//       name: "Adidas",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
//       category: "Footwear",
//       bg: "#f5f5f5",
//     },
//     {
//       name: "Zara",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg",
//       category: "Fashion",
//       bg: "#f5f5f5",
//     },
//     {
//       name: "H&M",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg",
//       category: "Fashion",
//       bg: "#fff0f0",
//     },
//     {
//       name: "Puma",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/8/88/Puma_logo.svg",
//       category: "Footwear",
//       bg: "#f5f5f5",
//     },
//     {
//       name: "Levi's",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Levi%27s_logo_red.svg",
//       category: "Denim",
//       bg: "#fff0f0",
//     },
//     {
//       name: "Gucci",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/7/79/1000x1000_Gucci_logo.svg",
//       category: "Luxury",
//       bg: "#fafaf5",
//     },
//     {
//       name: "Rolex",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Rolex_Logo.png/640px-Rolex_Logo.png",
//       category: "Watches",
//       bg: "#f5faf5",
//     },
//     {
//       name: "Fossil",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Fossil_Group_logo.svg",
//       category: "Watches",
//       bg: "#f5f5f5",
//     },
//     {
//       name: "Tommy Hilfiger",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Tommy_Hilfiger_logo.svg/640px-Tommy_Hilfiger_logo.svg.png",
//       category: "Fashion",
//       bg: "#f5f5ff",
//     },
//     {
//       name: "Calvin Klein",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Calvin_Klein_color_logo.svg/640px-Calvin_Klein_color_logo.svg.png",
//       category: "Fashion",
//       bg: "#f5f5f5",
//     },
//     {
//       name: "Ray-Ban",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Ray-Ban_logo.svg/640px-Ray-Ban_logo.svg.png",
//       category: "Sunglasses",
//       bg: "#fff5f5",
//     },
//     {
//       name: "Lyra Studio",
//       logoText: "LYRA",
//       color: "#7F77DD",
//       category: "Fashion · Bags",
//       bg: "#f0efff",
//     },
//     {
//       name: "Elliot & Co",
//       logoText: "E&Co",
//       color: "#1D9E75",
//       category: "Fashion",
//       bg: "#edfaf5",
//     },
//     {
//       name: "StreetLux",
//       logoText: "SLX",
//       color: "#D85A30",
//       category: "Fashion",
//       bg: "#fff3ef",
//     },
//     {
//       name: "BloomWear",
//       logoText: "bloom",
//       color: "#D4537E",
//       category: "Fashion",
//       bg: "#fff0f5",
//     },
//     {
//       name: "TimeLux",
//       logoText: "TL",
//       color: "#BA7517",
//       category: "Watches",
//       bg: "#fdf6ec",
//     },
//     {
//       name: "FlexFit",
//       logoText: "FF",
//       color: "#0F6E56",
//       category: "Activewear",
//       bg: "#edf7f4",
//     },
//     {
//       name: "RunElite",
//       logoText: "RE",
//       color: "#639922",
//       category: "Footwear",
//       bg: "#f3f9ea",
//     },
//     {
//       name: "ShadeHouse",
//       logoText: "SH",
//       color: "#185FA5",
//       category: "Sunglasses",
//       bg: "#edf4fc",
//     },
//     {
//       name: "EthnicLux",
//       logoText: "EL",
//       color: "#A32D2D",
//       category: "Ethnic Wear",
//       bg: "#fdf0f0",
//     },
//     {
//       name: "EcoLux",
//       logoText: "eco",
//       color: "#3B6D11",
//       category: "Bags",
//       bg: "#f0f7ea",
//     },
// ];
// const ProductCard = ({ product, onAddToCart }) => {
//   const navigate = useNavigate();
//   const { toggleWishlist, isWishlisted } = useWishlist();
//   const wishlisted = isWishlisted(product._id);
//   const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

//   return (
//     <div
//       onClick={() => navigate(`/product/${product._id}`)}
//       className="bg-white rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300 relative cursor-pointer"
//     >
//       <div className="relative">
//         <img
//           src={product.image || "https://placehold.co/400?text=Product"}
//           alt={product.name}
//           className="w-full aspect-square object-cover group-hover:opacity-90 transition-opacity"
//           loading="lazy"
//         />
//         <button
//           onClick={(e) => { e.stopPropagation(); toggleWishlist(product); }}
//           className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:scale-110 transition-transform"
//         >
//           {wishlisted ? (
//             <span className="text-red-500">♥</span>
//           ) : (
//             <span className="text-gray-400">♡</span>
//           )}
//         </button>
//       </div>
//       <div className="p-4">
//         <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
//         <div className="flex items-center gap-2 mb-2">
//           <div className="flex text-amber-400">
//             {[...Array(5)].map((_, i) => (
//               <span key={i}>{i < Math.floor(product.rating) ? '★' : '☆'}</span>
//             ))}
//           </div>
//           <span className="text-xs text-gray-500">({product.reviews})</span>
//         </div>
//         <div className="flex items-center gap-3">
//           <span className="font-bold">${product.price.toFixed(2)}</span>
//           {product.originalPrice > product.price && (
//             <span className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
//           )}
//           {discount > 0 && (
//             <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
//               {discount}% OFF
//             </span>
//           )}
//         </div>
//         <button
//           onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
//           className="w-full mt-3 py-2 bg-black text-white text-sm font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// const BrandScrollBar = ({ onBrandClick }) => {
//   const trackRef = useRef(null);
//   const requestRef = useRef();
//   const posRef = useRef(0);
//   const pausedRef = useRef(false);
//   const lastUpdateRef = useRef(0);

//   useEffect(() => {
//     const animate = (timestamp) => {
//       if (!pausedRef.current && trackRef.current) {
//         // Throttle to ~30fps
//         if (timestamp - lastUpdateRef.current > 33) { // 33ms ≈ 30fps
//           posRef.current += 0.3; // Reduced speed
//           if (posRef.current >= trackRef.current.scrollWidth / 2) {
//             posRef.current = 0;
//           }
//           trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
//           lastUpdateRef.current = timestamp;
//         }
//       }
//       requestRef.current = requestAnimationFrame(animate);
//     };

//     requestRef.current = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(requestRef.current);
//   }, []);

//   const allBrands = [...BRANDS, ...BRANDS]; // duplicate for seamless loop

//   return (
//     <div className="mb-6">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-3">
//         <h2 className="font-serif text-2xl text-gray-900">
//           Top <span className="text-violet-600">Brands</span>
//         </h2>
//         <button className="text-sm text-violet-600 font-medium hover:underline">
//           View All →
//         </button>
//       </div>

//       {/* Scroll strip */}
//       <div
//         className="relative overflow-hidden bg-white rounded-2xl border border-purple-100 py-4"
//         onMouseEnter={() => { pausedRef.current = true; }}
//         onMouseLeave={() => { pausedRef.current = false; }}
//       >
//         {/* Fade edges */}
//         <div
//           className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
//           style={{ background: "linear-gradient(to right, white, transparent)" }}
//         />
//         <div
//           className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
//           style={{ background: "linear-gradient(to left, white, transparent)" }}
//         />

//         {/* Scrolling track */}
//         <div
//           ref={trackRef}
//           className="flex items-center gap-3 px-4 will-change-transform"
//           style={{ width: "max-content" }}
//         >
//           {allBrands.map((brand, i) => (
//             <button
//               key={`${brand.name}-${i}`}
//               onClick={() => onBrandClick(brand.name)}
//               title={`${brand.name} · ${brand.category}`}
//               className="flex-shrink-0 flex flex-col items-center gap-2 group"
//             >
//               {/* Logo card */}
//               <div
//                 className="w-24 h-14 rounded-xl flex items-center justify-center border border-purple-100 group-hover:border-violet-300 group-hover:shadow-md group-hover:-translate-y-0.5 transition-all duration-200 overflow-hidden px-3"
//                 style={{ background: brand.bg || "#f9f9f9" }}
//               >
//                 {brand.logo ? (
//                   <img
//                     src={brand.logo}
//                     alt={brand.name}
//                     className="max-w-full max-h-full object-contain"
//                     style={{ maxHeight: "36px" }}
//                   />
//                 ) : (
//                   <span
//                     className="font-bold tracking-tight text-sm"
//                     style={{
//                       color: brand.color || "#1e0a3c",
//                       fontFamily: "serif",
//                       letterSpacing: "0.05em",
//                     }}
//                   >
//                     {brand.logoText || brand.name}
//                   </span>
//                 )}
//               </div>
//               {/* Brand name label */}
//               <span className="text-xs text-gray-500 group-hover:text-violet-600 transition-colors font-medium whitespace-nowrap">
//                 {brand.name}
//               </span>
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

//   const Dashboard = () => {
//   const navigate = useNavigate();
//   const { cartCount } = useCart();
//   // const [isReady, setIsReady] = useState(false);
//   const { wishlistCount } = useWishlist();
//   const [user, setUser] = useState({});
//   const [products, setProducts] = useState([]);
//   const [banners, setBanners] = useState([]);
//   const [scrolled, setScrolled] = useState(false);
//   const [showMenu, setShowMenu] = useState(false);
//   const [modalProduct, setModalProduct] = useState(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [loadingBanners, setLoadingBanners] = useState(false);
//   const [currentBanner, setCurrent] = useState(0);
//   const [search, setSearch] = useState("");
//   const [activeTab, setActiveTab] = useState("All");
//   const [activeBrand, setActiveBrand] = useState(null);
//   // const [showcontent, setShowContent] = useState(false);
//   const [isInitialized, setIsInitialized] = useState(false);
//   const mainContentRef = useRef(null);


//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowContent(true);
//     }, 100);

//     return( ) => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     const initialize = async () => {
//       try {
//         // Check for existing user session
//         const userData = JSON.parse(localStorage.getItem('user'));
//         if (!userData) {
//           navigate('/login');
//           return;
//         }
//         setUser(userData);

//         // Load products and banners
//         const [{ data: products }, bannersData] = await Promise.all([
//           API.get('/products'),
//           bannerApiFetch("/active").catch(() => []) // Fallback to empty array if fails
//         ]);

//         setUser(userData);
//         setProducts(products);
//         setBanners(bannersData);
        
//         // Mark app as ready
//         setIsReady(true);
        
//         // Small delay to ensure all elements are properly mounted
//         setTimeout(() => {
//           setIsInitialized(true);
//           if (mainContentRef.current) {
//             mainContentRef.current.classList.add('show');
//           }
//         }, 100);
        
//       } catch (error) {
//         console.error('Initialization error:', error);
//         navigate('/error');
//       }
//     };

//     initialize();

//     // Scroll handler
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [navigate]);

//   if (!isInitialized) {
//     return (
//       <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
//       </div>
//     );
//   }


//   useEffect(() => {
//     let ticking = false;

//     const handleScroll = () => {
//       if (!ticking) {
//         window.requestAnimationFrame(() => {
//           setScrolled(window.scrollY > 50);
//           ticking = false;
//         });
//         ticking = true;
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // , { passive: true }

//     // if (!isReady) {
//     //   return (
//     //     <>
//     //       <style>{globalStyles}</style>
//     //       <div style={{
//     //         position: 'fixed',
//     //         top: 0,
//     //         left: 0,
//     //         right: 0,
//     //         bottom: 0,
//     //         backgroundColor: 'white',
//     //         display: 'flex',
//     //         alignItems: 'center',
//     //         justifyContent: 'center',
//     //         zIndex: 9999
//     //       }}>
//     //         <div style={{
//     //           width: '60px',
//     //           height: '60px',
//     //           borderRadius: '50%',
//     //           border: '4px solid var(--lyra-light)',
//     //           borderTopColor: 'var(--lyra-primary)',
//     //           animation: 'spin 1s linear infinite'
//     //         }}></div>
//     //       </div>
//     //     </>
//     //   );
//     // }

//   useEffect(() => {
//     const fetchUserAndProducts = async () => {
//       try {
//         const userData = JSON.parse(localStorage.getItem('user'));
//         if (!userData) {
//           navigate('/login');
//           return;
//         }
//         setUser(userData);

//         const { data } = await API.get('/products');
//         setProducts(data);

//         setLoadingBanners(true);
//         try {
//           const bannersData = await bannerApiFetch("/active");
//           setBanners(bannersData);
//         } catch (err) {
//           console.error("Failed to fetch banners:", err);
//           setBanners([]);
//         } finally {
//           setLoadingBanners(false);
//         }

//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchUserAndProducts();
//   }, [navigate]);

//   useEffect(() => {
//     if (banners.length > 0) {
//       const t = setInterval(() => {
//         setCurrent((c) => (c + 1) % banners.length);
//       }, 5000);
//       return () => clearInterval(t);
//     }
//   }, [banners]);

//   const handleBrandClick = (brandName) => {
//     const match = products.find(
//       (p) => p.brand?.toLowerCase() === brandName.toLowerCase()
//     );
//     if (match) {
//       setActiveBrand(brandName);
//       setActiveTab("All");
//       setSearch("");
//     } else {
//       setActiveBrand(brandName);
//     }
//   };

//   const filtered = products.filter((p) => {
//     const matchTab = activeTab === "All" || p.category === activeTab;
//     const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
//     const matchBrand = !activeBrand || p.brand?.toLowerCase() === activeBrand.toLowerCase();
//     return matchTab && matchSearch && matchBrand;
//   });

//   const Navbar = () => (
//     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
//       <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between">
//         <div 
//           className={`text-2xl font-serif cursor-pointer ${scrolled ? 'text-gray-900' : 'text-white'}`}
//           onClick={() => navigate('/')}
//         >
//           LYRA
//         </div>

//         <div className="hidden md:flex items-center space-x-8">
//           {['New Arrivals', 'Shop', 'Collections', 'Sale'].map(item => (
//             <button
//               key={item}
//               onClick={() => navigate(`/${item.toLowerCase().replace(' ', '-')}`)}
//               className={`font-medium ${scrolled ? 'text-gray-700 hover:text-black' : 'text-white hover:text-gray-200'}`}
//             >
//               {item}
//             </button>
//           ))}
//         </div>

//         <div className="flex items-center space-x-4">
//           <button className={`p-2 ${scrolled ? 'text-gray-700' : 'text-white'}`}>
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//             </svg>
//           </button>
          
//           <button 
//             onClick={() => navigate('/wishlist')}
//             className={`relative p-2 ${scrolled ? 'text-gray-700' : 'text-white'}`}
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//             </svg>
//             {wishlistCount > 0 && (
//               <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
//                 {wishlistCount}
//               </span>
//             )}
//           </button>
          
//           <button 
//             onClick={() => navigate('/cart')}
//             className={`relative p-2 ${scrolled ? 'text-gray-700' : 'text-white'}`}
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//             </svg>
//             {cartCount > 0 && (
//               <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
//                 {cartCount}
//               </span>
//             )}
//           </button>

//           <div className="relative">
//             <button
//               onClick={() => setShowMenu(!showMenu)}
//               className="flex items-center"
//             >
//               <img 
//                 src={user.avatar || "https://placehold.co/40x40?text=U"} 
//                 alt="User" 
//                 className="w-8 h-8 rounded-full border-2 border-white/50"
//               />
//             </button>
//             {showMenu && (
//               <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
//                 <div className="px-4 py-2 border-b">
//                   <p className="text-sm font-medium">{user.name || 'Guest'}</p>
//                   <p className="text-xs text-gray-500">{user.email || ''}</p>
//                 </div>
//                 <button
//                   onClick={() => navigate('/profile')}
//                   className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                 >
//                   My Account
//                 </button>
//                 <button
//                   onClick={() => navigate('/orders')}
//                   className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                 >
//                   My Orders
//                 </button>
//                 <button
//                   onClick={() => {
//                     localStorage.removeItem('user');
//                     navigate('/login');
//                   }}
//                   className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-t"
//                 >
//                   Sign Out
//                 </button>
//               </div>
//             )}
//           </div>

//           <button 
//             className="md:hidden p-2"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-white text-gray-900 py-4 px-6 shadow-lg">
//           <div className="flex flex-col space-y-3">
//             {['New Arrivals', 'Shop', 'Collections', 'Sale'].map(item => (
//               <button
//                 key={item}
//                 onClick={() => {
//                   navigate(`/${item.toLowerCase().replace(' ', '-')}`);
//                   setIsMobileMenuOpen(false);
//                 }}
//                 className="text-left py-2 font-medium hover:text-violet-600"
//               >
//                 {item}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );

//   const HeroSection = () => (
//     <div className="relative h-screen max-h-[800px] overflow-hidden">
//       <div className="absolute inset-0 bg-black/30 z-10"></div>
//       <img
//         src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
//         alt="Fashion Collection"
//         className="absolute inset-0 w-full h-full object-cover object-center"
//       />
//       <div className="relative z-20 h-full flex flex-col justify-center px-6 sm:px-12 lg:px-24 text-white">
//         <h1 className="text-4xl md:text-6xl font-serif font-light mb-6 leading-tight">
//           New Season <br /><span className="text-pink-300">Collection</span>
//         </h1>
//         <p className="text-lg md:text-xl max-w-xl mb-8 opacity-90">
//           Discover our exclusive summer styles with modern elegance and timeless designs
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4">
//           <button 
//             onClick={() => navigate('/shop')}
//             className="px-8 py-3 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-all hover:shadow-lg"
//           >
//             Shop Now
//           </button>
//           <button 
//             onClick={() => navigate('/collections')}
//             className="px-8 py-3 border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-all"
//           >
//             View Collections
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen">
//         <div ref={mainContentRef} className="prevent-flicker">

//        <style>{globalStyles}</style>
//         <div 
//           ref={mainContentRef}
//           className={`prevent-flicker ${initialLoad ? '' : 'show'}`}
//           style={{ minHeight: '100vh' }}
//         >
//         </div>
//       <Navbar />
//       <HeroSection />

//       <div className="bg-white py-16">
//         {/* Featured Brands */}
//         <section className="max-w-screen-xl mx-auto px-6">
//           <h2 className="text-3xl font-serif font-light text-center mb-12">Featured Brands</h2>
//           <BrandScrollBar onBrandClick={handleBrandClick} />
//         </section>

//         {/* New Arrivals */}
//         <section className="max-w-screen-xl mx-auto px-6 py-16">
//           <div className="flex items-center justify-between mb-8">
//             <h2 className="text-3xl font-serif font-light">New Arrivals</h2>
//             <button 
//               onClick={() => navigate('/new-arrivals')}
//               className="text-black hover:underline"
//             >
//               View All →
//             </button>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {products.slice(0, 8).map(product => (
//               <ProductCard 
//                 key={product._id} 
//                 product={product} 
//                 onAddToCart={setModalProduct} 
//               />
//             ))}
//           </div>
//         </section>

//         {/* Categories */}
//         <section className="max-w-screen-xl mx-auto px-6 py-16">
//           <h2 className="text-3xl font-serif font-light text-center mb-12">Shop by Category</h2>
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
//             {CATEGORIES.map(category => (
//               <div 
//                 key={category.id}
//                 onClick={() => navigate(`/category/${category.name.toLowerCase()}`)}
//                 className={`${category.bg} rounded-xl p-8 flex flex-col items-center cursor-pointer transition-transform hover:scale-105`}
//               >
//                 <span className="text-4xl mb-3">{category.icon}</span>
//                 <span className="font-medium">{category.name}</span>
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>

//       <LyraFooter />

//       {modalProduct && (
//         <AddToCartModal 
//           product={modalProduct} 
//           onClose={() => setModalProduct(null)} 
//         />
//       )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;




// import React, { useEffect, useState, useRef, useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "./CartContext";
// import { useWishlist } from "./WishlistContext";
// import AddToCartModal from "./AddToCartModal";
// import axios from "axios";
// import LyraFooter from "./Footer";
// import { getBanners, getBrands } from "./BannersData.js";

// // ── No bannerApiFetch needed — banners come from BannersData (localStorage-backed) ──
// // ── If you want backend banners, swap getBanners() with an axios call in useEffect ──

// const API = axios.create({ baseURL: "http://localhost:6055/api/admin" });

// const CATEGORIES = [
//   { id: 1, name: "Fashion",     icon: "👗", bg: "from-violet-50 to-purple-100" },
//   { id: 2, name: "Footwear",    icon: "👟", bg: "from-pink-50 to-rose-100"     },
//   { id: 3, name: "Watches",     icon: "⌚", bg: "from-blue-50 to-indigo-100"   },
//   { id: 4, name: "Accessories", icon: "💍", bg: "from-amber-50 to-yellow-100"  },
//   { id: 5, name: "Bags",        icon: "👜", bg: "from-emerald-50 to-teal-100"  },
//   { id: 6, name: "Sunglasses",  icon: "🕶️", bg: "from-orange-50 to-amber-100" },
//   { id: 7, name: "Ethnic Wear", icon: "🥻", bg: "from-red-50 to-pink-100"      },
//   { id: 8, name: "Activewear",  icon: "🏃", bg: "from-cyan-50 to-teal-100"     },
// ];

// const DEALS_META = [
//   { label: "Up to 70% Off",    sub: "Fashion & Apparel",   emoji: "👗", color: "from-violet-600 to-purple-700" },
//   { label: "Buy 2 Get 1 Free", sub: "Footwear Collection", emoji: "👟", color: "from-pink-600 to-rose-700"    },
//   { label: "Flat ₹500 Off",    sub: "Orders above ₹2999",  emoji: "💳", color: "from-amber-500 to-orange-600" },
//   { label: "New Arrivals Sale", sub: "Extra 15% with app", emoji: "✨", color: "from-teal-600 to-cyan-700"    },
// ];

// // ── Hero slides (cinematic full-screen style) ─────────────────────
// // These are used when no admin-set banners are active
// const HERO_SLIDES = [
//   {
//     id: "h1",
//     image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=80",
//     title: "New Season",
//     titleAccent: "Collection",
//     subtitle: "Discover exclusive summer styles with modern elegance and timeless designs.",
//     cta: "Shop Now",
//     overlay: "rgba(15,5,30,0.55)",
//   },
//   {
//     id: "h2",
//     image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80",
//     title: "Luxury",
//     titleAccent: "Redefined",
//     subtitle: "Premium fashion curated for the discerning modern wardrobe.",
//     cta: "Explore",
//     overlay: "rgba(20,5,40,0.50)",
//   },
//   {
//     id: "h3",
//     image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1600&q=80",
//     title: "Urban",
//     titleAccent: "Style",
//     subtitle: "Street-smart fashion meets refined luxury. Be effortlessly iconic.",
//     cta: "View Collection",
//     overlay: "rgba(10,5,25,0.60)",
//   },
// ];

// // ── Brand scroll bar ───────────────────────────────────────────────
// const BrandScrollBar = ({ brands, onBrandClick }) => {
//   const trackRef  = useRef(null);
//   const animRef   = useRef(null);
//   const posRef    = useRef(0);
//   const pausedRef = useRef(false);
//   const activeBrands = brands.filter((b) => b.active !== false);
//   const allBrands    = [...activeBrands, ...activeBrands];

//   useEffect(() => {
//     const track = trackRef.current;
//     if (!track || activeBrands.length === 0) return;
//     const step = () => {
//       if (!pausedRef.current) {
//         posRef.current += 0.5;
//         if (posRef.current >= track.scrollWidth / 2) posRef.current = 0;
//         track.style.transform = `translateX(-${posRef.current}px)`;
//       }
//       animRef.current = requestAnimationFrame(step);
//     };
//     animRef.current = requestAnimationFrame(step);
//     return () => cancelAnimationFrame(animRef.current);
//   }, [activeBrands.length]);

//   if (activeBrands.length === 0) return null;

//   return (
//     <div className="mb-10">
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="font-serif text-2xl text-gray-900">Top <span className="text-violet-600">Brands</span></h2>
//         <button className="text-sm text-violet-600 font-medium hover:underline">View All →</button>
//       </div>
//       <div className="relative overflow-hidden bg-white rounded-2xl border border-purple-100 py-5 shadow-sm"
//         onMouseEnter={() => { pausedRef.current = true; }}
//         onMouseLeave={() => { pausedRef.current = false; }}>
//         <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, white, transparent)" }} />
//         <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, white, transparent)" }} />
//         <div ref={trackRef} className="flex items-center gap-4 px-4 will-change-transform" style={{ width: "max-content" }}>
//           {allBrands.map((brand, i) => (
//             <button key={`${brand.id || brand.name}-${i}`} onClick={() => onBrandClick(brand.name)} title={brand.name}
//               className="flex-shrink-0 flex flex-col items-center gap-2 group">
//               <div className="w-28 h-16 rounded-xl flex items-center justify-center border border-purple-100 group-hover:border-violet-400 group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-200 overflow-hidden px-3"
//                 style={{ background: brand.bg || "#f9f9f9" }}>
//                 {brand.logo
//                   ? <img src={brand.logo} alt={brand.name} className="max-w-full max-h-full object-contain" style={{ maxHeight: "40px" }} onError={(e) => { e.target.style.display = "none"; }} />
//                   : <span className="font-bold text-sm tracking-widest font-serif" style={{ color: brand.color || "#1e0a3c" }}>{brand.logoText || brand.name}</span>
//                 }
//               </div>
//               <span className="text-xs text-gray-500 group-hover:text-violet-600 transition-colors font-medium">{brand.name}</span>
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // ── Admin-set banner (split or full mode) ─────────────────────────
// // Used only when admin has created active banners
// const AdminBanner = ({ banner, currentIndex, total, onDotClick }) => {
//   if (!banner) return null;
//   const Dots = () => (
//     <div className="flex gap-2 mt-6">
//       {Array.from({ length: total }).map((_, i) => (
//         <button key={i} onClick={(e) => { e.stopPropagation(); onDotClick(i); }}
//           className={`h-1 rounded-full transition-all duration-300 ${i === currentIndex ? "w-10 bg-white" : "w-5 bg-white/40"}`} />
//       ))}
//     </div>
//   );
//   if (banner.displayMode === "full") {
//     return (
//       <div className="relative rounded-3xl overflow-hidden mb-10 h-80 shadow-2xl shadow-purple-200">
//         <img src={banner.img} alt={banner.title} className="absolute inset-0 w-full h-full object-cover" onError={(e) => { e.target.style.display = "none"; }} />
//         <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${banner.overlayColor || "#000"}f0 0%, ${banner.overlayColor || "#000"}70 50%, transparent 100%)` }} />
//         <div className="relative z-10 flex flex-col justify-center px-14 h-full w-1/2">
//           <p className="text-xs tracking-[0.3em] text-white/50 uppercase mb-3">✦ Lyra Exclusive</p>
//           <h1 className="font-serif text-5xl font-light text-white leading-tight mb-3">{banner.title}</h1>
//           <p className="text-white/60 text-sm mb-7">{banner.subtitle}</p>
//           <button className="w-fit px-8 py-3.5 bg-white text-[#1e0a3c] text-sm font-semibold rounded-xl hover:bg-violet-50 transition-all hover:-translate-y-0.5 hover:shadow-xl">{banner.cta} →</button>
//           <Dots />
//         </div>
//       </div>
//     );
//   }
//   return (
//     <div className={`relative rounded-3xl overflow-hidden mb-10 h-80 bg-gradient-to-r ${banner.from} ${banner.via || ""} ${banner.to} shadow-2xl flex`}>
//       <div className="relative z-10 flex flex-col justify-center px-14 w-1/2 flex-shrink-0">
//         <p className="text-xs tracking-[0.3em] text-white/50 uppercase mb-3">✦ Lyra Exclusive</p>
//         <h1 className="font-serif text-5xl font-light text-white leading-tight mb-3">{banner.title}</h1>
//         <p className="text-white/60 text-sm mb-7">{banner.subtitle}</p>
//         <button className="w-fit px-8 py-3.5 bg-white text-[#1e0a3c] text-sm font-semibold rounded-xl hover:bg-violet-50 transition-all hover:-translate-y-0.5 hover:shadow-xl">{banner.cta} →</button>
//         <Dots />
//       </div>
//       <div className="w-1/2 flex-shrink-0 relative overflow-hidden">
//         <img src={banner.img} alt={banner.title} className="absolute inset-0 w-full h-full object-cover object-center"
//           style={{ maskImage: "linear-gradient(to right, transparent 0%, black 35%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 35%)" }}
//           onError={(e) => { e.target.style.display = "none"; }} />
//       </div>
//     </div>
//   );
// };

// // ── Cinematic full-screen hero (fallback when no admin banners) ───
// // Defined OUTSIDE Dashboard — avoids re-creation on every render
// const CinematicHero = ({ slide, currentIndex, total, onDotClick, onShopClick }) => {
//   if (!slide) return null;
//   return (
//     <div className="relative w-full overflow-hidden" style={{ 
//       height: "85vh", 
//       minHeight: "600px",
//       maxHeight: "900px" 
//     }}>
//       {/* Background image with gradient overlay */}
//       <div className="absolute inset-0">
//         <img src={slide.image} alt={slide.title}
//           className="w-full h-full object-cover object-center"
//           style={{ transition: "opacity 1s ease" }}
//           onError={(e) => { 
//             e.target.style.background = "linear-gradient(135deg, #1e0a3c, #7c3aed)"; 
//             e.target.style.display = "block"; 
//           }} />
        
//         {/* Gradient overlay */}
//         <div className={`absolute inset-0 bg-gradient-to-b ${slide.gradient}`} />
        
//         {/* Additional overlay for depth */}
//         <div className="absolute inset-0" style={{ background: slide.overlay }} />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-16 lg:px-24">
//         <div className="max-w-2xl">
//           <p className="text-xs tracking-[0.4em] text-white/45 uppercase mb-4 font-light">✦ LYRA EXCLUSIVE</p>
          
//           <h1 className="font-serif font-normal text-white leading-none mb-4"
//             style={{ 
//               fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
//               letterSpacing: "0.03em",
//               lineHeight: "1.1"
//             }}>
//             {slide.title}<br />
//             <span style={{
//               background: "linear-gradient(135deg, #f3e8ff, #e879f9, #fbcfe8)",
//               WebkitBackgroundClip: "text", 
//               WebkitTextFillColor: "transparent",
//               fontStyle: "italic",
//               fontWeight: "500"
//             }}>{slide.titleAccent}</span>
//           </h1>
          
//           <p className="text-white/70 text-lg sm:text-xl max-w-xl mb-8 font-light leading-relaxed tracking-wide">
//             {slide.subtitle}
//           </p>
          
//           <div className="flex items-center gap-4">
//             <button onClick={onShopClick}
//               className="px-12 py-4 bg-white text-[#1e0a3c] text-sm font-bold rounded-full hover:bg-violet-50 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-wider">
//               {slide.cta} →
//             </button>
//             <button onClick={() => scrollTo(shopRef)}
//               className="px-10 py-4 border border-white/30 text-white text-sm font-semibold rounded-full hover:bg-white/10 hover:border-white/60 transition-all duration-300 uppercase tracking-wider">
//               Discover More
//             </button>
//           </div>
//         </div>

//         {/* Slide dots - premium version */}
//         <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
//           {Array.from({ length: total }).map((_, i) => (
//             <button key={i} onClick={() => onDotClick(i)}
//               className={`rounded-full transition-all duration-400 ${i === currentIndex ? "w-8 h-1.5 bg-white" : "w-4 h-1.5 bg-white/35 hover:bg-white/60"}`} />
//           ))}
//         </div>
//       </div>

//       {/* Scroll hint - premium version */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50">
//         <span className="text-xs tracking-widest uppercase mb-2">Scroll Down</span>
//         <div className="w-px h-12 bg-white/30" />
//       </div>
//     </div>
//   );
// };

// // ── Product Card ───────────────────────────────────────────────────
// // Defined OUTSIDE Dashboard — prevents re-render focus loss
// const ProductCard = ({ product, onAddToCart }) => {
//   const navigate = useNavigate();
//   const { toggleWishlist, isWishlisted } = useWishlist();
//   const wishlisted = isWishlisted(product._id);
//   const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

//   return (
//     <div onClick={() => navigate(`/product/${product._id}`)}
//       className="bg-white rounded-2xl border border-purple-100 overflow-hidden group hover:border-violet-300 hover:shadow-2xl hover:shadow-purple-100 hover:-translate-y-1.5 transition-all duration-300 relative cursor-pointer">
//       {product.badge && (
//         <span className="absolute top-3 left-3 z-10 bg-gradient-to-r from-violet-600 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">{product.badge}</span>
//       )}
//       {discount >= 30 && !product.badge && (
//         <span className="absolute top-3 left-3 z-10 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">{discount}% OFF</span>
//       )}
//       <button onClick={(e) => { e.stopPropagation(); toggleWishlist(product); }}
//         className="absolute top-3 right-3 z-10 w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center text-lg hover:scale-110 transition-transform"
//         style={{ color: wishlisted ? "#ef4444" : "#d1d5db" }}>
//         {wishlisted ? "♥" : "♡"}
//       </button>
//       <div className="h-60 overflow-hidden bg-gradient-to-b from-purple-50 to-gray-50">
//         <img src={product.image || product.images?.[0]} alt={product.name}
//           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//           onError={(e) => { e.target.src = "https://placehold.co/300x400/f3f4f6/9ca3af?text=Lyra"; }} />
//       </div>
//       <div className="p-4">
//         <p className="text-xs font-semibold text-violet-400 uppercase tracking-widest mb-1">{product.brand || product.category}</p>
//         <p className="text-sm font-medium text-gray-900 truncate mb-1.5">{product.name}</p>
//         <div className="flex items-center gap-1 mb-2">
//           {Array.from({ length: 5 }).map((_, i) => (
//             <span key={i} className={`text-xs ${i < Math.floor(product.rating || 0) ? "text-amber-400" : "text-gray-200"}`}>★</span>
//           ))}
//           <span className="text-gray-400 text-xs ml-1">({(product.reviews || 0).toLocaleString()})</span>
//         </div>
//         <div className="flex items-center gap-2 flex-wrap">
//           <span className="text-base font-bold text-gray-900">₹{(product.price || 0).toLocaleString()}</span>
//           {product.originalPrice && product.originalPrice > product.price && (
//             <span className="text-xs text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
//           )}
//           {discount > 0 && discount < 30 && (
//             <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-lg">{discount}% off</span>
//           )}
//         </div>
//         <button onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
//           className="w-full mt-3 py-2.5 bg-gradient-to-r from-violet-600 to-purple-500 text-white text-xs font-semibold rounded-xl opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300 hover:shadow-lg hover:shadow-purple-300">
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// // ── Live countdown ─────────────────────────────────────────────────
// const useCountdown = () => {
//   const [time, setTime] = useState({ h: "08", m: "23", s: "47" });
//   useEffect(() => {
//     const tick = () => setTime((prev) => {
//       let s = parseInt(prev.s) - 1, m = parseInt(prev.m), h = parseInt(prev.h);
//       if (s < 0) { s = 59; m--; }
//       if (m < 0) { m = 59; h--; }
//       if (h < 0) { h = 23; m = 59; s = 59; }
//       return { h: String(h).padStart(2,"0"), m: String(m).padStart(2,"0"), s: String(s).padStart(2,"0") };
//     });
//     const id = setInterval(tick, 1000);
//     return () => clearInterval(id);
//   }, []);
//   return time;
// };

// // ══════════════════════════════════════════════════════════════════
// // DASHBOARD
// // ── Fixes vs document 9 broken version:
// //   ✓ No undefined variables (isReady, initialLoad, showContent removed)
// //   ✓ sessionStorage only (not localStorage)
// //   ✓ navigate("/") for unauth redirect
// //   ✓ Single useEffect for data load — no duplicate hooks
// //   ✓ Single scroll useEffect with passive listener
// //   ✓ Navbar/HeroSection/ProductCard all defined OUTSIDE the component
// //   ✓ CinematicHero: real full-screen style when no admin banners exist
// //   ✓ Sections: Home / Shop / Deals / About with smooth scroll navigation
// // ══════════════════════════════════════════════════════════════════
// const Dashboard = () => {
//   const navigate = useNavigate();
//   const { cartCount }     = useCart();
//   const { wishlistCount } = useWishlist();
//   const countdown = useCountdown();

//   const [user,           setUser]          = useState({});
//   const [search,         setSearch]        = useState("");
//   const [currentBanner,  setCurrent]       = useState(0);
//   const [showMenu,       setShowMenu]      = useState(false);
//   const [showShopMenu,   setShowShopMenu]  = useState(false);
//   const [activeTab,      setActiveTab]     = useState("All");
//   const [activeBrand,    setActiveBrand]   = useState(null);
//   const [modalProduct,   setModalProduct]  = useState(null);
//   const [products,       setProducts]      = useState([]);
//   const [scrolled,       setScrolled]      = useState(false);
//   const [activeSection,  setActiveSection] = useState("home");
//   const [banners,  setBanners]  = useState(() => getBanners().filter((b) => b.active !== false));
//   const [brands,   setBrands]   = useState(() => getBrands());

//   // Section refs for smooth scrolling + IntersectionObserver
//   const homeRef     = useRef(null);
//   const shopRef     = useRef(null);
//   const dealsRef    = useRef(null);
//   const aboutRef    = useRef(null);
//   const shopMenuRef = useRef(null);

//   // ── 1. Scroll → glass navbar (single effect, passive) ──────────
//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 80);
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // ── 2. IntersectionObserver → active nav link ──────────────────
//   useEffect(() => {
//     const map = [
//       { ref: homeRef,  id: "home"  },
//       { ref: shopRef,  id: "shop"  },
//       { ref: dealsRef, id: "deals" },
//       { ref: aboutRef, id: "about" },
//     ];
//     const observer = new IntersectionObserver(
//       (entries) => entries.forEach((e) => {
//         if (e.isIntersecting) {
//           const found = map.find((m) => m.ref.current === e.target);
//           if (found) setActiveSection(found.id);
//         }
//       }),
//       { threshold: 0.25 }
//     );
//     map.forEach(({ ref }) => { if (ref.current) observer.observe(ref.current); });
//     return () => observer.disconnect();
//   }, [products.length]);

//   // ── 3. Close shop megamenu on outside click ─────────────────────
//   useEffect(() => {
//     const handler = (e) => {
//       if (shopMenuRef.current && !shopMenuRef.current.contains(e.target)) {
//         setShowShopMenu(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   // ── 4. Live banner/brand updates from AdminPanel ────────────────
//   useEffect(() => {
//     const onB  = () => setBanners(getBanners().filter((b) => b.active !== false));
//     const onBr = () => setBrands(getBrands());
//     window.addEventListener("lyra_banners_updated", onB);
//     window.addEventListener("lyra_brands_updated",  onBr);
//     return () => {
//       window.removeEventListener("lyra_banners_updated", onB);
//       window.removeEventListener("lyra_brands_updated",  onBr);
//     };
//   }, []);

//   // ── 5. Single data-load useEffect — sessionStorage, no localStorage ──
//   useEffect(() => {
//     const load = async () => {
//       const stored = sessionStorage.getItem("user");
//       if (!stored) { navigate("/"); return; }         // redirect to Login route
//       setUser(JSON.parse(stored));
//       try {
//         const { data } = await API.get("/products");
//         setProducts(Array.isArray(data) ? data : data.products || []);
//       } catch (err) {
//         console.error("Products load error:", err.message);
//       }
//     };
//     load();

//     // Banner auto-advance
//     const t = setInterval(() => setCurrent((c) => (c + 1) % Math.max(banners.length || HERO_SLIDES.length, 1)), 5000);
//     return () => clearInterval(t);
//   }, [navigate, banners.length]);

//   // ── Scroll-to helper ────────────────────────────────────────────
//   const scrollTo = useCallback((ref) => {
//     ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
//     setShowShopMenu(false);
//     setShowMenu(false);
//   }, []);

//   const handleLogout     = () => { sessionStorage.removeItem("user"); navigate("/"); };
//   const handleBrandClick = (n) => { setActiveBrand(n); setActiveTab("All"); setSearch(""); scrollTo(shopRef); };

//   const filtered = products.filter((p) => {
//     const matchTab    = activeTab === "All" || p.category === activeTab;
//     const matchSearch = !search || p.name?.toLowerCase().includes(search.toLowerCase()) || p.brand?.toLowerCase().includes(search.toLowerCase());
//     const matchBrand  = !activeBrand || p.brand?.toLowerCase() === activeBrand.toLowerCase();
//     return matchTab && matchSearch && matchBrand;
//   });

//   const dealsProducts   = products.filter((p) => p.originalPrice && ((p.originalPrice - p.price) / p.originalPrice) >= 0.3).slice(0, 10);
//   const activeBanners   = banners.filter((b) => b.active !== false);
//   const useAdminBanners = activeBanners.length > 0;
//   const safeIdx         = useAdminBanners
//     ? currentBanner % activeBanners.length
//     : currentBanner % HERO_SLIDES.length;
//   const firstName       = user.fullName?.split(" ")[0] || "Account";

//   const NAV_LINKS = [
//     { id: "home",  label: "Home",     ref: homeRef  },
//     { id: "shop",  label: "Shop",     ref: shopRef,  hasMenu: true },
//     { id: "deals", label: "Deals",    ref: dealsRef, badge: "HOT" },
//     { id: "about", label: "About Us", ref: aboutRef },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');
//         .lyra-body, .lyra-body * { font-family: 'DM Sans', system-ui, sans-serif; }
//         .lyra-serif { font-family: 'Cormorant Garamond', Georgia, serif !important; }
//         .nav-line { position: relative; }
//         .nav-line::after { content: ''; position: absolute; bottom: -3px; left: 50%; right: 50%; height: 1.5px; background: white; transition: left 0.25s ease, right 0.25s ease; border-radius: 2px; }
//         .nav-line:hover::after, .nav-line.nav-active::after { left: 0; right: 0; }
//         @keyframes shimmer { 0% { background-position: -300% 0; } 100% { background-position: 300% 0; } }
//         .shimmer-text { background: linear-gradient(90deg, #c084fc, #f472b6, #fb923c, #c084fc); background-size: 300% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; animation: shimmer 5s linear infinite; }
//         @keyframes slideDown { from { opacity: 0; transform: translateY(-10px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
//         .slide-down { animation: slideDown 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
//         .hero-btn {
//           transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
//           box-shadow: 0 4px 15px rgba(0,0,0,0.1);
//         }
//         .hero-btn:hover {
//           box-shadow: 0 10px 25px rgba(0,0,0,0.2);
//           transform: translateY(-2px);
//         }
//         .hero-btn:active {
//           transform: translateY(0);
//         }
//         .hero-text {
//           text-shadow: 0 2px 4px rgba(0,0,0,0.15);
//         }

//       `}</style>

//       <div className="lyra-body">

//       {/* ══════════════════════════════════════════════════════════
//           PREMIUM NAVBAR
//       ══════════════════════════════════════════════════════════ */}
//       <nav className={`sticky top-0 z-50 transition-all duration-500 ${
//         scrolled
//           ? "bg-[#0c0618]/97 backdrop-blur-2xl shadow-2xl shadow-violet-950/60 border-b border-violet-900/20"
//           : "bg-transparent"
//       }`}>

//         {/* Announcement strip */}
//         <div className="bg-gradient-to-r from-[#1a0836] via-violet-800 to-[#1a0836] py-1.5 text-center border-b border-violet-800/30">
//           <span className="shimmer-text text-xs font-semibold tracking-[0.18em]">
//             ✦ FREE DELIVERY ON ORDERS ABOVE ₹999 &nbsp;·&nbsp; NEW ARRIVALS EVERY FRIDAY &nbsp;·&nbsp; LYRA MEMBERS GET EXTRA 10% OFF ✦
//           </span>
//         </div>

//         {/* Main bar */}
//         <div className="max-w-screen-xl mx-auto px-6 h-16 flex items-center gap-6">

//           {/* Logo */}
//           <button onClick={() => scrollTo(homeRef)}
//             className="lyra-serif text-2xl tracking-[0.35em] text-white flex-shrink-0 select-none hover:opacity-90 transition-opacity">
//             LY<span className="text-pink-400">R</span>A
//             <sup className="text-white/20 ml-0.5" style={{ fontSize: "7px", letterSpacing: "0.4em", verticalAlign: "top", marginTop: "6px" }}>FASHION</sup>
//           </button>

//           {/* Center nav links */}
//           <div className="hidden md:flex items-center gap-1 mx-auto">
//             {NAV_LINKS.map((link) => (
//               <div key={link.id} className="relative" ref={link.hasMenu ? shopMenuRef : undefined}>
//                 <button
//                   onClick={() => { if (link.hasMenu) setShowShopMenu((v) => !v); else scrollTo(link.ref); }}
//                   className={`nav-line relative px-4 py-2 text-xs font-semibold tracking-[0.12em] uppercase transition-all duration-200 rounded-lg flex items-center gap-1.5 ${
//                     activeSection === link.id ? "text-white nav-active" : "text-white/50 hover:text-white/90 hover:bg-white/5"
//                   }`}>
//                   {link.label}
//                   {link.hasMenu && (
//                     <span className={`transition-transform duration-200 opacity-50 ${showShopMenu ? "rotate-180" : ""}`} style={{ fontSize: "10px" }}>▾</span>
//                   )}
//                   {link.badge && (
//                     <span className="absolute -top-2 -right-2 bg-pink-500 text-white font-bold px-1.5 rounded-full" style={{ fontSize: "8px" }}>{link.badge}</span>
//                   )}
//                 </button>

//                 {/* Shop mega-menu */}
//                 {link.hasMenu && showShopMenu && (
//                   <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 slide-down" onClick={(e) => e.stopPropagation()}>
//                     <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-purple-100 rounded-sm z-[1]" />
//                     <div className="relative bg-white rounded-2xl shadow-2xl shadow-purple-200/60 border border-purple-100 overflow-hidden" style={{ width: "540px" }}>
//                       <div className="px-6 py-4 border-b border-purple-50 flex items-center justify-between bg-gradient-to-r from-violet-50 to-purple-50">
//                         <p className="lyra-serif text-lg text-gray-900">Shop by <span className="text-violet-600">Category</span></p>
//                         <button onClick={() => { scrollTo(shopRef); setShowShopMenu(false); }} className="text-xs text-violet-600 font-semibold hover:underline">View All →</button>
//                       </div>
//                       <div className="p-5 grid grid-cols-4 gap-3">
//                         {CATEGORIES.map((cat) => (
//                           <button key={cat.id} onClick={() => { navigate(`/category/${encodeURIComponent(cat.name)}`); setShowShopMenu(false); }}
//                             className={`flex flex-col items-center gap-2 p-3 rounded-xl bg-gradient-to-br ${cat.bg} hover:scale-105 hover:shadow-md transition-all group`}>
//                             <span className="text-2xl group-hover:scale-110 transition-transform">{cat.icon}</span>
//                             <span className="text-xs font-semibold text-gray-700 text-center leading-tight">{cat.name}</span>
//                           </button>
//                         ))}
//                       </div>
//                       <div className="px-5 pb-5 grid grid-cols-3 gap-2 border-t border-purple-50 pt-4 bg-violet-50/30">
//                         {[{ label: "New Arrivals", emoji: "✨" }, { label: "Best Sellers", emoji: "🔥" }, { label: "On Sale", emoji: "🏷️" }].map((item) => (
//                           <button key={item.label} onClick={() => { scrollTo(shopRef); setShowShopMenu(false); }}
//                             className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-violet-100 border border-purple-100 transition-colors">
//                             <span className="text-base">{item.emoji}</span>
//                             <span className="text-xs font-semibold text-violet-700">{item.label}</span>
//                           </button>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Right icons */}
//           <div className="flex items-center gap-1.5 ml-auto md:ml-0">
//             {/* Search */}
//             <div className="relative hidden lg:block">
//               <input
//                 className="w-48 bg-white/8 border border-white/10 text-white placeholder-white/30 rounded-xl px-4 py-2 pr-9 text-xs outline-none focus:bg-white focus:text-gray-900 focus:placeholder-gray-400 focus:border-violet-400 focus:w-64 transition-all duration-300"
//                 placeholder="Search fashion..."
//                 value={search}
//                 onChange={(e) => { setSearch(e.target.value); setActiveBrand(null); }}
//                 onFocus={() => scrollTo(shopRef)}
//               />
//               <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white/25 text-sm pointer-events-none">⌕</span>
//             </div>

//             {/* Wishlist */}
//             <button onClick={() => navigate("/wishlist")}
//               className="relative flex flex-col items-center px-3 py-1.5 text-white/55 hover:text-white hover:bg-white/8 rounded-xl transition-all group">
//               <span className="text-xl leading-none group-hover:scale-110 transition-transform">{wishlistCount > 0 ? "♥" : "♡"}</span>
//               <span className="hidden sm:block mt-0.5 text-white/40 group-hover:text-white/70 transition-colors" style={{ fontSize: "9px", letterSpacing: "0.08em" }}>WISHLIST</span>
//               {wishlistCount > 0 && <span className="absolute -top-1 right-0.5 w-4 h-4 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold shadow-md" style={{ fontSize: "8px" }}>{wishlistCount}</span>}
//             </button>

//             {/* Cart */}
//             <button onClick={() => navigate("/cart")}
//               className="relative flex flex-col items-center px-3 py-1.5 text-white/55 hover:text-white hover:bg-white/8 rounded-xl transition-all group">
//               <span className="text-xl leading-none group-hover:scale-110 transition-transform">🛒</span>
//               <span className="hidden sm:block mt-0.5 text-white/40 group-hover:text-white/70 transition-colors" style={{ fontSize: "9px", letterSpacing: "0.08em" }}>CART</span>
//               {cartCount > 0 && <span className="absolute -top-1 right-0.5 w-4 h-4 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold shadow-md" style={{ fontSize: "8px" }}>{cartCount}</span>}
//             </button>

//             {/* Account */}
//             <div className="relative">
//               <button onClick={() => { setShowMenu((v) => !v); setShowShopMenu(false); }}
//                 className="flex flex-col items-center px-3 py-1.5 text-white/55 hover:text-white hover:bg-white/8 rounded-xl transition-all group">
//                 <span className="text-xl leading-none group-hover:scale-110 transition-transform">👤</span>
//                 <span className="hidden sm:block mt-0.5 text-white/40 group-hover:text-white/70 transition-colors" style={{ fontSize: "9px", letterSpacing: "0.08em" }}>{firstName.toUpperCase()}</span>
//               </button>
//               {showMenu && (
//                 <div className="absolute right-0 top-full mt-3 w-56 bg-white rounded-2xl shadow-2xl shadow-purple-100 border border-purple-50 overflow-hidden z-50 slide-down">
//                   <div className="bg-gradient-to-br from-[#1e0a3c] to-violet-700 px-5 py-4">
//                     <p className="lyra-serif text-white font-semibold">{user.fullName || "Guest"}</p>
//                     <p className="text-purple-300 text-xs mt-0.5">{user.email || user.mobileNumber || ""}</p>
//                   </div>
//                   {[
//                     { label: "📦 My Orders",  path: "/profile?tab=orders"    },
//                     { label: "👤 My Profile", path: "/profile?tab=profile"   },
//                     { label: "♡  Wishlist",   path: "/wishlist"              },
//                     { label: "📍 Addresses",  path: "/profile?tab=addresses" },
//                   ].map((item) => (
//                     <button key={item.label} onClick={() => { setShowMenu(false); navigate(item.path); }}
//                       className="w-full text-left px-5 py-3 text-sm text-gray-700 hover:bg-violet-50 hover:text-violet-700 transition-colors border-b border-gray-50 last:border-0">
//                       {item.label}
//                     </button>
//                   ))}
//                   <button onClick={handleLogout} className="w-full text-left px-5 py-3 text-sm text-red-500 hover:bg-red-50 transition-colors border-t border-gray-100">🚪 Sign Out</button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* ══ PAGE BODY — clicking anywhere closes menus ══ */}
//       <div onClick={() => { setShowMenu(false); setShowShopMenu(false); }}>

//         {/* ════════════════════════════════════════
//             HOME — Hero + categories + trust badges
//         ════════════════════════════════════════ */}
//         <section ref={homeRef} id="home">

//           {/* Hero: cinematic full-screen OR admin banner */}
//           {useAdminBanners ? (
//           <div className="max-w-screen-xl mx-auto px-4 pt-8">
//             <AdminBanner
//               banner={activeBanners[safeIdx]}
//               currentIndex={safeIdx}
//               total={activeBanners.length}
//               onDotClick={setCurrent}
//             />
//           </div>
//         ) : (
//           <CinematicHero
//             slide={HERO_SLIDES[safeIdx]}
//             currentIndex={safeIdx}
//             total={HERO_SLIDES.length}
//             onDotClick={setCurrent}
//             onShopClick={() => scrollTo(shopRef)}
//           />
//         )}

//         // With this:
//         <CinematicHero
//           slide={HERO_SLIDES[safeIdx]}
//           currentIndex={safeIdx}
//           total={HERO_SLIDES.length}
//           onDotClick={setCurrent}
//           onShopClick={() => scrollTo(shopRef)}
//         />

//           <div className="max-w-screen-xl mx-auto px-4 pt-8 pb-4">
//             {/* Trust badges */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
//               {[
//                 { icon: "🚚", title: "Free Delivery",   sub: "On orders above ₹999",  from: "from-violet-600", to: "to-purple-600" },
//                 { icon: "↩",  title: "30-Day Returns",  sub: "Hassle-free exchanges",  from: "from-teal-600",   to: "to-cyan-500"   },
//                 { icon: "🔒", title: "Secure Payments", sub: "100% safe & encrypted",  from: "from-amber-500",  to: "to-orange-500" },
//               ].map((o) => (
//                 <div key={o.title} className={`bg-gradient-to-r ${o.from} ${o.to} rounded-2xl p-5 flex items-center gap-4 hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-pointer`}>
//                   <span className="text-3xl">{o.icon}</span>
//                   <div>
//                     <p className="lyra-serif text-white font-semibold text-base">{o.title}</p>
//                     <p className="text-white/70 text-xs mt-0.5">{o.sub}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Category grid */}
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="lyra-serif text-3xl text-gray-900">Shop by <span className="text-violet-600">Category</span></h2>
//             </div>
//             <div className="grid grid-cols-4 md:grid-cols-8 gap-3 mb-10">
//               {CATEGORIES.map((cat) => (
//                 <div key={cat.id} onClick={() => navigate(`/category/${encodeURIComponent(cat.name)}`)}
//                   className={`bg-gradient-to-br ${cat.bg} rounded-2xl p-4 flex flex-col items-center cursor-pointer border-2 border-transparent hover:border-violet-300 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200`}>
//                   <span className="text-3xl mb-2">{cat.icon}</span>
//                   <span className="font-semibold text-gray-700 uppercase text-center leading-tight" style={{ fontSize: "10px" }}>{cat.name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ════════════════════════════════════════
//             SHOP — Brands + Products
//         ════════════════════════════════════════ */}
//         <section ref={shopRef} id="shop" className="max-w-screen-xl mx-auto px-4 py-10">
//           <BrandScrollBar brands={brands} onBrandClick={handleBrandClick} />

//           <div className="flex items-center justify-between mb-6">
//             <h2 className="lyra-serif text-3xl text-gray-900">
//               {activeBrand
//                 ? <>{activeBrand} <span className="text-violet-600">Collection</span></>
//                 : activeTab === "All"
//                   ? <>New <span className="text-violet-600">Arrivals</span></>
//                   : <>{activeTab} <span className="text-violet-600">Collection</span></>}
//             </h2>
//             <div className="flex items-center gap-3">
//               <div className="relative lg:hidden">
//                 <input className="w-40 bg-white border border-purple-100 text-gray-900 placeholder-gray-400 rounded-xl px-4 py-2 pr-8 text-xs outline-none focus:border-violet-400 transition-all"
//                   placeholder="Search..." value={search} onChange={(e) => { setSearch(e.target.value); setActiveBrand(null); }} />
//                 <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">⌕</span>
//               </div>
//               {activeBrand && (
//                 <button onClick={() => setActiveBrand(null)}
//                   className="flex items-center gap-2 bg-violet-100 text-violet-700 text-sm font-semibold px-4 py-1.5 rounded-full hover:bg-violet-200 transition-colors">
//                   {activeBrand} <span className="font-bold">×</span>
//                 </button>
//               )}
//               <button className="text-sm text-violet-600 font-medium hover:underline">View All →</button>
//             </div>
//           </div>

//           {filtered.length > 0 ? (
//             <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
//               {filtered.map((p) => <ProductCard key={p._id} product={p} onAddToCart={setModalProduct} />)}
//             </div>
//           ) : (
//             <div className="text-center py-24 bg-white rounded-3xl border border-purple-100">
//               <p className="text-5xl mb-4">🔍</p>
//               <p className="lyra-serif text-xl text-gray-700 mb-2">No products found</p>
//               <p className="text-gray-400 text-sm">{activeBrand ? `No "${activeBrand}" products` : `No results for "${search}"`}</p>
//               <button onClick={() => { setSearch(""); setActiveBrand(null); setActiveTab("All"); }} className="mt-5 text-sm text-violet-600 font-medium hover:underline">Clear filters</button>
//             </div>
//           )}
//         </section>

//         {/* ════════════════════════════════════════
//             DEALS — Flash sale + discounts + coupons
//         ════════════════════════════════════════ */}
//         <section ref={dealsRef} id="deals" className="py-16 bg-[#0e0720]">
//           <div className="max-w-screen-xl mx-auto px-4">
//             <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-6">
//               <div>
//                 <p className="text-xs tracking-[0.35em] text-violet-400 uppercase mb-2">✦ Limited Time Only</p>
//                 <h2 className="lyra-serif text-5xl text-white">Flash <span className="text-pink-400">Sale</span></h2>
//                 <p className="text-white/40 text-sm mt-1">Handpicked deals — updated every 24 hours</p>
//               </div>
//               <div className="flex items-center gap-2 bg-white/6 border border-white/10 rounded-2xl px-6 py-4">
//                 <span className="text-white/30 text-xs tracking-widest uppercase mr-2">Ends in</span>
//                 {[[countdown.h,"HRS"],[countdown.m,"MIN"],[countdown.s,"SEC"]].map(([n, l], i) => (
//                   <React.Fragment key={l}>
//                     {i > 0 && <span className="text-violet-500 font-bold text-xl mx-0.5">:</span>}
//                     <div className="text-center min-w-12 bg-white/5 rounded-xl px-2 py-2">
//                       <p className="lyra-serif text-white font-bold text-2xl leading-none">{n}</p>
//                       <p className="text-white/25 mt-1" style={{ fontSize: "8px", letterSpacing: "0.2em" }}>{l}</p>
//                     </div>
//                   </React.Fragment>
//                 ))}
//               </div>
//             </div>

//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
//               {DEALS_META.map((deal) => (
//                 <div key={deal.label} className={`bg-gradient-to-br ${deal.color} rounded-2xl p-6 cursor-pointer hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/40 transition-all duration-300 group`}>
//                   <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform">{deal.emoji}</span>
//                   <p className="lyra-serif text-xl text-white leading-tight mb-1">{deal.label}</p>
//                   <p className="text-white/55 text-xs mb-4">{deal.sub}</p>
//                   <div className="flex items-center gap-1 text-white/60 text-xs font-semibold">
//                     Shop now <span className="group-hover:translate-x-1.5 transition-transform">→</span>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {dealsProducts.length > 0 && (
//               <>
//                 <div className="flex items-center justify-between mb-5">
//                   <h3 className="lyra-serif text-3xl text-white">Top <span className="text-pink-400">Discounts</span></h3>
//                   <button onClick={() => scrollTo(shopRef)} className="text-sm text-violet-400 hover:text-violet-300 font-semibold">View all →</button>
//                 </div>
//                 <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
//                   {dealsProducts.map((p) => (
//                     <div key={p._id} onClick={() => navigate(`/product/${p._id}`)}
//                       className="bg-white/5 border border-white/8 rounded-2xl overflow-hidden cursor-pointer hover:border-violet-500/50 hover:-translate-y-1 transition-all duration-300 group">
//                       <div className="h-44 overflow-hidden relative">
//                         <img src={p.image || p.images?.[0]} alt={p.name}
//                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                           onError={(e) => { e.target.src = "https://placehold.co/200x200/1e0a3c/a855f7?text=L"; }} />
//                         <span className="absolute top-2 left-2 bg-pink-500 text-white font-bold px-2 py-0.5 rounded-full" style={{ fontSize: "10px" }}>
//                           {Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100)}% OFF
//                         </span>
//                       </div>
//                       <div className="p-3">
//                         <p className="text-white/75 text-xs truncate font-medium">{p.name}</p>
//                         <div className="flex items-center gap-2 mt-1.5">
//                           <span className="lyra-serif text-white font-bold text-sm">₹{p.price.toLocaleString()}</span>
//                           <span className="text-white/25 text-xs line-through">₹{p.originalPrice.toLocaleString()}</span>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </>
//             )}

//             {/* Coupons */}
//             <div className="bg-gradient-to-r from-violet-900/50 via-purple-900/40 to-violet-900/50 border border-violet-700/25 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-5">
//               <div>
//                 <p className="lyra-serif text-2xl text-white mb-1">🎁 Exclusive Coupons</p>
//                 <p className="text-white/35 text-sm">Apply at checkout for instant savings</p>
//               </div>
//               <div className="flex gap-3 flex-wrap justify-center">
//                 {[
//                   { code: "LYRA10",  desc: "10% off",           min: "Min ₹300"  },
//                   { code: "SAVE20",  desc: "20% off",           min: "Min ₹800"  },
//                   { code: "FIRST50", desc: "50% off (max ₹500)",min: "Min ₹1500" },
//                 ].map((c) => (
//                   <div key={c.code} onClick={() => navigate("/cart")}
//                     className="flex flex-col items-center bg-white/8 border border-dashed border-violet-500/40 rounded-xl px-5 py-3 hover:bg-violet-600/25 hover:border-violet-400/60 transition-all cursor-pointer group">
//                     <span className="font-mono font-bold text-violet-300 tracking-[0.2em] text-sm group-hover:text-white transition-colors">{c.code}</span>
//                     <span className="text-white/40 text-xs mt-0.5">{c.desc}</span>
//                     <span className="text-white/25 text-xs">{c.min}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ════════════════════════════════════════
//             ABOUT US
//         ════════════════════════════════════════ */}
//         <section ref={aboutRef} id="about" className="py-20 bg-white">
//           <div className="max-w-screen-xl mx-auto px-4">
//             <div className="text-center mb-16">
//               <p className="text-xs tracking-[0.4em] text-violet-400 uppercase mb-3">✦ Our Story</p>
//               <h2 className="lyra-serif text-5xl text-gray-900 mb-5">About <span className="text-violet-600">Lyra</span></h2>
//               <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
//                 Where luxury meets everyday style. We curate the finest fashion from around the world, delivering premium experiences to every wardrobe.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//               {[
//                 { icon: "🌿", title: "Sustainably Sourced",  desc: "Every collection is curated with ethical sourcing and sustainable practices at the forefront.", accent: "from-emerald-500 to-teal-500"  },
//                 { icon: "✦",  title: "Luxury Curation",      desc: "Our fashion experts handpick only the finest pieces — from emerging designers to heritage brands.", accent: "from-violet-500 to-purple-600" },
//                 { icon: "🛡️", title: "100% Authentic",       desc: "Every product comes with an authenticity guarantee. Zero counterfeits, always.",                accent: "from-amber-500 to-orange-500" },
//               ].map((v) => (
//                 <div key={v.title} className="group text-center p-8 rounded-3xl border border-purple-50 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-50 transition-all duration-300 hover:-translate-y-1">
//                   <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${v.accent} flex items-center justify-center mx-auto mb-5 text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>{v.icon}</div>
//                   <h3 className="lyra-serif text-2xl text-gray-900 mb-3">{v.title}</h3>
//                   <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
//                 </div>
//               ))}
//             </div>

//             <div className="bg-gradient-to-r from-[#1e0a3c] to-violet-800 rounded-3xl p-12 mb-16">
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//                 {[{ value: "2M+", label: "Happy Customers" }, { value: "500+", label: "Premium Brands" }, { value: "50K+", label: "Products Listed" }, { value: "4.8★", label: "Average Rating" }].map((s) => (
//                   <div key={s.label}>
//                     <p className="lyra-serif text-4xl text-white mb-2">{s.value}</p>
//                     <p className="text-white/40 text-sm">{s.label}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
//               <div>
//                 <p className="text-xs tracking-[0.35em] text-violet-400 uppercase mb-4">✦ Our Promise</p>
//                 <h3 className="lyra-serif text-4xl text-gray-900 mb-5 leading-tight">Fashion that<br /><em className="text-violet-600">speaks to you</em></h3>
//                 <p className="text-gray-500 text-sm leading-relaxed mb-4">Lyra was born out of a simple belief — that fashion should be personal, accessible, and exceptional. We started in 2020 with a small collection and a big dream: to democratise luxury for everyone.</p>
//                 <p className="text-gray-500 text-sm leading-relaxed mb-8">Today we're India's fastest-growing premium fashion platform, serving millions of discerning shoppers who know exactly what they want.</p>
//                 <button onClick={() => scrollTo(shopRef)}
//                   className="px-8 py-3.5 bg-[#1e0a3c] text-white text-sm font-semibold rounded-xl hover:bg-violet-800 transition-all hover:-translate-y-0.5 hover:shadow-xl lyra-serif tracking-wide">
//                   Explore Collection →
//                 </button>
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 {[
//                   { bg: "from-violet-100 to-purple-50", icon: "👗", label: "Fashion Week",   sub: "Exclusive looks"  },
//                   { bg: "from-pink-100 to-rose-50",     icon: "👟", label: "Street Style",   sub: "Everyday wear"    },
//                   { bg: "from-amber-100 to-yellow-50",  icon: "⌚", label: "Luxury Watches", sub: "Timeless pieces"  },
//                   { bg: "from-emerald-100 to-teal-50",  icon: "🌿", label: "Eco Collection", sub: "Sustainably made" },
//                 ].map((item) => (
//                   <div key={item.label} onClick={() => scrollTo(shopRef)}
//                     className={`bg-gradient-to-br ${item.bg} rounded-2xl p-6 cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-200`}>
//                     <span className="text-3xl block mb-2">{item.icon}</span>
//                     <p className="lyra-serif font-semibold text-gray-900">{item.label}</p>
//                     <p className="text-gray-500 text-xs mt-0.5">{item.sub}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="flex flex-col md:flex-row items-center justify-between gap-5 bg-violet-50 rounded-2xl px-8 py-6 border border-violet-100">
//               <div>
//                 <p className="lyra-serif text-2xl text-gray-900 mb-1">Get in touch with us</p>
//                 <p className="text-gray-500 text-sm">Questions, partnerships, or press? We'd love to hear from you.</p>
//               </div>
//               <div className="flex gap-3">
//                 <a href="mailto:support@lyra.fashion" className="px-6 py-2.5 bg-[#1e0a3c] text-white text-sm font-semibold rounded-xl hover:bg-violet-800 transition-colors">✉ Email Us</a>
//                 <a href="tel:+918001234567" className="px-6 py-2.5 border-2 border-violet-200 text-violet-700 text-sm font-semibold rounded-xl hover:bg-violet-100 transition-colors">📞 Call Us</a>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>

//       <LyraFooter />
//       {modalProduct && <AddToCartModal product={modalProduct} onClose={() => setModalProduct(null)} />}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



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
      { title: "Clothing",    links: ["Shirts","T-Shirts","Jeans","Trousers","Kurtas","Jackets","Suits & Blazers","Shorts","Track Pants","Innerwear"] },
      { title: "Footwear",    links: ["Sneakers","Formal Shoes","Loafers","Sandals","Boots","Sports Shoes","Slippers","Flip Flops"] },
      { title: "Accessories", links: ["Watches","Sunglasses","Wallets","Belts","Ties & Cufflinks","Bags & Backpacks","Caps & Hats","Jewellery"] },
      { title: "Grooming",    links: ["Skincare","Hair Care","Fragrances","Beard Care","Bath & Body","Gift Sets"] },
    ],
  },
  {
    id: "women", label: "Women",
    featured: { label: "Trending Now", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
    columns: [
      { title: "Clothing",    links: ["Kurtas & Suits","Sarees","Dresses","Tops & Tees","Jeans","Leggings","Skirts","Ethnic Wear","Nightwear","Activewear"] },
      { title: "Footwear",    links: ["Heels","Flats","Sandals","Sneakers","Boots","Kolhapuris","Wedges","Sports Shoes"] },
      { title: "Accessories", links: ["Handbags","Clutches","Jewellery","Sunglasses","Watches","Scarves","Haircare","Belts"] },
      { title: "Beauty",      links: ["Lipstick","Foundation","Moisturisers","Serums","Perfumes","Eye Makeup","Nail Care","Skincare Kits"] },
    ],
  },
  {
    id: "kids", label: "Kids",
    featured: { label: "Back to School", img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&q=80" },
    columns: [
      { title: "Boys",          links: ["T-Shirts & Shirts","Jeans & Trousers","Ethnic Wear","Shorts","Jackets","Swimwear","Innerwear","Shoes"] },
      { title: "Girls",         links: ["Dresses","Tops & Tees","Ethnic Wear","Jeans & Leggings","Skirts","Party Wear","Shoes","Accessories"] },
      { title: "Infants (0–2)", links: ["Bodysuits","Sleepsuits","Rompers","Sets","Booties","Bibs & Accessories"] },
      { title: "Essentials",    links: ["School Bags","Lunch Boxes","Stationery","Toys","Nursery","Gifting"] },
    ],
  },
  {
    id: "beauty", label: "Beauty & Health",
    featured: { label: "Bestsellers", img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80" },
    columns: [
      { title: "Skincare",          links: ["Moisturisers","Serums","Sunscreen","Face Wash","Toners","Eye Cream","Sheet Masks","Exfoliators"] },
      { title: "Makeup",            links: ["Lipstick","Foundation","Concealer","Blush & Bronzer","Mascara","Kajal","Eyeshadow","Nail Polish"] },
      { title: "Hair Care",         links: ["Shampoo","Conditioner","Hair Masks","Oils","Serums","Styling","Dry Shampoo","Colour"] },
      { title: "Fragrances & More", links: ["Perfumes","Deodorants","Body Mists","Bath & Body","Oral Care","Vitamins & Supplements"] },
    ],
  },
  {
    id: "home", label: "Home & Living",
    featured: { label: "Trending Décor", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80" },
    columns: [
      { title: "Decor",   links: ["Wall Art","Cushions & Throws","Candles & Diffusers","Plants & Pots","Photo Frames","Vases"] },
      { title: "Bedding", links: ["Bed Sheets","Duvet Covers","Pillowcases","Mattress Protectors","Blankets","Comforters"] },
      { title: "Kitchen", links: ["Cookware","Bakeware","Storage & Jars","Cutlery","Table Linen","Mugs & Glasses"] },
      { title: "Bath",    links: ["Towels","Bath Mats","Shower Curtains","Soap Dispensers","Organisers"] },
    ],
  },
  {
    id: "electronics", label: "Electronics",
    featured: { label: "Tech Picks", img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&q=80" },
    columns: [
      { title: "Wearables",      links: ["Smart Watches","Fitness Bands","Earbuds","Headphones","Wireless Speakers"] },
      { title: "Mobiles & Tabs", links: ["Smartphones","Tablets","Mobile Covers","Screen Guards","Chargers & Cables","Power Banks"] },
      { title: "Computing",      links: ["Laptops","Laptop Bags","Keyboards","Mouse","Monitors","Storage Drives"] },
      { title: "Smart Home",     links: ["Smart Bulbs","Security Cameras","Smart Plugs","Routers","Voice Assistants"] },
    ],
  },
  {
    id: "sports", label: "Sports",
    featured: { label: "New Season Gear", img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&q=80" },
    columns: [
      { title: "Sports Clothing", links: ["Running","Yoga & Pilates","Gym & Fitness","Cycling","Swimming","Football","Cricket","Basketball"] },
      { title: "Footwear",        links: ["Running Shoes","Training Shoes","Hiking Boots","Cricket Shoes","Football Cleats","Cycling Shoes"] },
      { title: "Equipment",       links: ["Yoga Mats","Resistance Bands","Dumbbells","Gym Bags","Bottles","Supplements"] },
      { title: "Outdoor",         links: ["Camping","Trekking","Cycling","Skates & Skateboards","Adventure Gear"] },
    ],
  },
  {
    id: "sale", label: "Sale",
    badge: "UP TO 70% OFF",
    badgeColor: "#ef4444",
    noMenu: true,
  },
];

// ── Premium category showcase ──────────────────────────────────────
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

// ── Brand scroll data ──────────────────────────────────────────────
const BRANDS_LOOP = (() => {
  const raw = [
    { name: "Nike",           logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",                                                                        bg: "#f5f5f5" },
    { name: "Adidas",         logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",                                                                       bg: "#f5f5f5" },
    { name: "Zara",           logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg",                                                                         bg: "#f5f5f5" },
    { name: "H&M",            logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg",                                                                        bg: "#fff0f0" },
    { name: "Puma",           logo: "https://upload.wikimedia.org/wikipedia/commons/8/88/Puma_logo.svg",                                                                         bg: "#f5f5f5" },
    { name: "Levi's",         logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Levi%27s_logo_red.svg",                                                                 bg: "#fff0f0" },
    { name: "Gucci",          logo: "https://upload.wikimedia.org/wikipedia/commons/7/79/1000x1000_Gucci_logo.svg",                                                              bg: "#fafaf5" },
    { name: "Rolex",          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Rolex_Logo.png/640px-Rolex_Logo.png",                                             bg: "#f5faf5" },
    { name: "Ray-Ban",        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Ray-Ban_logo.svg/640px-Ray-Ban_logo.svg.png",                                     bg: "#fff5f5" },
    { name: "Tommy Hilfiger", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Tommy_Hilfiger_logo.svg/640px-Tommy_Hilfiger_logo.svg.png",                       bg: "#f5f5ff" },
    { name: "Calvin Klein",   logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Calvin_Klein_color_logo.svg/640px-Calvin_Klein_color_logo.svg.png",               bg: "#f5f5f5" },
    { name: "Lyra Studio",    logoText: "LYRA",  color: "#7c3aed", bg: "#f5f3ff" },
    { name: "Elliot & Co",    logoText: "E&Co",  color: "#059669", bg: "#ecfdf5" },
    { name: "BloomWear",      logoText: "bloom", color: "#db2777", bg: "#fdf2f8" },
    { name: "TimeLux",        logoText: "TL",    color: "#b45309", bg: "#fffbeb" },
    { name: "FlexFit",        logoText: "FF",    color: "#0f766e", bg: "#f0fdfa" },
    { name: "ShadeHouse",     logoText: "SH",    color: "#1d4ed8", bg: "#eff6ff" },
  ];
  return [...raw, ...raw];
})();

// ══════════════════════════════════════════════════════════════════
// CINEMATIC HERO — full-bleed, no gap under navbar
// ══════════════════════════════════════════════════════════════════
const CinematicHero = ({ slide, currentIndex, total, onDotClick, onShopClick }) => {
  if (!slide) return null;
  return (
    <div className="relative w-full overflow-hidden" style={{ height: "86vh", maxHeight: "780px" }}>
      <div className="absolute inset-0">
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover object-center"
          onError={(e) => { e.target.style.opacity = "0"; }}
        />
        <div className="absolute inset-0" style={{ background: slide.overlay }} />
        <div className="absolute bottom-0 left-0 right-0 h-40"
          style={{ background: "linear-gradient(to bottom, transparent, #f9fafb)" }} />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-center px-10 sm:px-20 lg:px-28">
        <p className="text-xs tracking-[0.45em] text-white/40 uppercase mb-5 font-light">✦ Lyra Collection</p>
        <h1 className="font-light text-white leading-none mb-5"
          style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(3rem,8vw,6.5rem)" }}>
          {slide.title}<br />
          <span style={{
            background: "linear-gradient(135deg, #f3e8ff, #e879f9, #fbcfe8)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>{slide.titleAccent}</span>
        </h1>
        <p className="text-white/55 text-base sm:text-lg max-w-lg mb-9 font-light leading-relaxed">{slide.subtitle}</p>
        <div className="flex items-center gap-4">
          <button onClick={onShopClick}
            className="px-10 py-4 bg-white text-[#1e0a3c] text-sm font-bold rounded-2xl hover:bg-violet-50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            {slide.cta} →
          </button>
          <button onClick={onShopClick}
            className="px-8 py-4 border-2 border-white/30 text-white text-sm font-semibold rounded-2xl hover:bg-white/10 hover:border-white/60 transition-all duration-300">
            View Collections
          </button>
        </div>
        <div className="flex gap-2 mt-10">
          {Array.from({ length: total }).map((_, i) => (
            <button key={i} onClick={() => onDotClick(i)}
              className={`rounded-full transition-all duration-400 ${i === currentIndex ? "w-8 h-1.5 bg-white" : "w-4 h-1.5 bg-white/35 hover:bg-white/60"}`} />
          ))}
        </div>
      </div>
    </div>
  );
};


// ── Brand scroll ─────────────────────────────────────────────────
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
        posRef.current += 0.45;
        if (posRef.current >= track.scrollWidth / 2) posRef.current = 0;
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(step);
    };
    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, []);
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="lyra-serif text-2xl text-gray-900">Top <span className="text-violet-600">Brands</span></h2>
        <button className="text-sm text-violet-600 font-medium hover:underline">View All →</button>
      </div>
      <div className="relative overflow-hidden bg-white rounded-2xl border border-purple-100 py-5 shadow-sm"
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}>
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, white, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, white, transparent)" }} />
        <div ref={trackRef} className="flex items-center gap-4 px-4" style={{ width: "max-content", willChange: "transform" }}>
          {BRANDS_LOOP.map((b, i) => (
            <button key={`${b.name}-${i}`} onClick={() => onBrandClick(b.name)}
              className="flex-shrink-0 flex flex-col items-center gap-2 group">
              <div className="w-28 h-14 rounded-xl flex items-center justify-center border border-purple-100 group-hover:border-violet-400 group-hover:shadow-md group-hover:-translate-y-0.5 transition-all overflow-hidden px-3"
                style={{ background: b.bg }}>
                {b.logo
                  ? <img src={b.logo} alt={b.name} className="max-w-full max-h-9 object-contain" onError={(e) => { e.target.style.display = "none"; }} />
                  : <span style={{ color: b.color || "#1e0a3c", fontFamily: "Georgia,serif", fontWeight: "bold", fontSize: "0.88rem" }}>{b.logoText || b.name}</span>
                }
              </div>
              <span className="text-xs text-gray-500 group-hover:text-violet-600 transition-colors font-medium">{b.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// ── Product Card ─────────────────────────────────────────────────
const ProductCard = ({ product, onAddToCart }) => {
  const navigate = useNavigate();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const wishlisted = isWishlisted(product._id);
  const disc = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
  return (
    <div onClick={() => navigate(`/product/${product._id}`)}
      className="bg-white rounded-2xl border border-purple-100 overflow-hidden group hover:border-violet-300 hover:shadow-2xl hover:shadow-purple-100 hover:-translate-y-1.5 transition-all duration-300 relative cursor-pointer">
      {product.badge && <span className="absolute top-3 left-3 z-10 bg-gradient-to-r from-violet-600 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">{product.badge}</span>}
      {disc >= 30 && !product.badge && <span className="absolute top-3 left-3 z-10 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">{disc}% OFF</span>}
      <button onClick={(e) => { e.stopPropagation(); toggleWishlist(product); }}
        className="absolute top-3 right-3 z-10 w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center text-lg hover:scale-110 transition-transform"
        style={{ color: wishlisted ? "#ef4444" : "#d1d5db" }}>
        {wishlisted ? "♥" : "♡"}
      </button>
      <div className="h-60 overflow-hidden bg-gradient-to-b from-purple-50 to-gray-50">
        <img src={product.image || product.images?.[0]} alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          onError={(e) => { e.target.src = "https://placehold.co/300x400/f3f4f6/9ca3af?text=Lyra"; }} />
      </div>
      <div className="p-4">
        <p className="text-xs font-semibold text-violet-400 uppercase tracking-widest mb-1">{product.brand || product.category}</p>
        <p className="text-sm font-medium text-gray-900 truncate mb-1.5">{product.name}</p>
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={`text-xs ${i < Math.floor(product.rating || 0) ? "text-amber-400" : "text-gray-200"}`}>★</span>
          ))}
          <span className="text-gray-400 text-xs ml-1">({(product.reviews || 0).toLocaleString()})</span>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-base font-bold text-gray-900">₹{(product.price || 0).toLocaleString()}</span>
          {product.originalPrice && product.originalPrice > product.price && <span className="text-xs text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span>}
          {disc > 0 && disc < 30 && <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-lg">{disc}% off</span>}
        </div>
        <button onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
          className="w-full mt-3 py-2.5 bg-gradient-to-r from-violet-600 to-purple-500 text-white text-xs font-semibold rounded-xl opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

// ── Countdown ────────────────────────────────────────────────────
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
  const [activeMega,    setActiveMega]   = useState(null);
  const [activeBrand,   setActiveBrand]  = useState(null);
  const [activeTab,     setActiveTab]    = useState("All");
  const [modalProduct,  setModalProduct] = useState(null);
  const [products,      setProducts]     = useState([]);
  const [scrolled,      setScrolled]     = useState(false);
  const [currentSlide,  setCurrent] = useState(0);

  // ── Hero slides — fetched from API, no local mock data ──────────
  // API: GET /api/admin/hero-slides/active
  // Response shape: { success: true, slides: [ { _id, title, titleAccent,
  //   subtitle, image, cta, overlay, active, order } ] }
  const [heroSlides,  setHeroSlides]  = useState([]);   // populated from API
  const [heroLoading, setHeroLoading] = useState(true);  // shows skeleton until loaded

  const shopRef    = useRef(null);
  const megaTimers = useRef({});

  // ── Scroll effect ────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  // ── Data load ────────────────────────────────────────────────
  useEffect(() => {
    const load = async () => {
      const stored = sessionStorage.getItem("user");
      if (!stored) { navigate("/"); return; }
      setUser(JSON.parse(stored));

      // Products
      try {
        const { data } = await API.get("/products");
        setProducts(Array.isArray(data) ? data : data.products || []);
      } catch (err) {
        console.error("Products:", err.message);
      }

      // ── Hero slides from API ─────────────────────────────────
      // Hits GET /api/admin/hero-slides/active
      // Returns only slides where active === true, sorted by `order`.
      // If the endpoint is not yet ready, heroSlides stays [] and
      // the hero section simply does not render (no broken UI).
      // Run POST /api/admin/hero-slides/seed once to populate the DB.
      try {
        const { data: heroData } = await API.get("/hero-slides/active");
        const slides = heroData.slides || heroData || [];
        setHeroSlides(slides);
      } catch (err) {
        console.warn("Hero slides API not reachable:", err.message);
        // heroSlides stays [] — AdminBanner will take over if banners exist,
        // otherwise the hero section is hidden until backend is ready.
      } finally {
        setHeroLoading(false);
      }
    };
    load();
  }, [navigate]);

  // ── Auto-advance ─────────────────────────────────────────────
  useEffect(() => {
    const count = heroSlides.length;
    if (!count) return;

    const t = setInterval(() => setCurrent((c) => (c + 1) % count), 5000);
    return () => clearInterval(t);
  }, [heroSlides.length]);

  const scrollTo     = useCallback((ref) => { ref.current?.scrollIntoView({ behavior: "smooth", block: "start" }); setActiveMega(null); setShowMenu(false); }, []);
  const handleLogout = () => { sessionStorage.removeItem("user"); navigate("/"); };
  const handleBrand  = (n) => { setActiveBrand(n); setActiveTab("All"); setSearch(""); scrollTo(shopRef); };

  // Mega-menu with hover delay
  const openMega  = (id) => { clearTimeout(megaTimers.current[id]); setActiveMega(id); };
  const closeMega = (id) => { megaTimers.current[id] = setTimeout(() => setActiveMega((c) => c === id ? null : c), 180); };

  const filtered      = products.filter((p) => {
    if (activeTab !== "All" && p.category !== activeTab) return false;
    if (activeBrand && (p.brand || "").toLowerCase() !== activeBrand.toLowerCase()) return false;
    if (search && !p.name?.toLowerCase().includes(search.toLowerCase()) && !p.brand?.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });
  const dealsProducts = products.filter((p) => p.originalPrice && ((p.originalPrice - p.price) / p.originalPrice) >= 0.3).slice(0, 10);
  const safeIdx       = heroSlides.length
    ? currentSlide % heroSlides.length
    : 0;
  const firstName     = user.fullName?.split(" ")[0] || "Account";

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');
        .lyra-body, .lyra-body * { font-family: 'DM Sans', system-ui, sans-serif; }
        .lyra-serif { font-family: 'Cormorant Garamond', Georgia, serif !important; }

        @keyframes shimmer { 0% { background-position: -300% 0; } 100% { background-position: 300% 0; } }
        .shimmer-text {
          background: linear-gradient(90deg, #c084fc, #f472b6, #fb923c, #c084fc);
          background-size: 300% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text; animation: shimmer 5s linear infinite;
        }
        @keyframes megaFade { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: translateY(0); } }
        .mega-panel { animation: megaFade 0.18s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

        @keyframes slideDown { from { opacity: 0; transform: translateY(-8px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .slide-down { animation: slideDown 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

        .mega-link {
          position: relative; color: #4b5563; font-size: 12.5px; font-weight: 400;
          padding: 3px 0; display: block; transition: color 0.15s; cursor: pointer;
        }
        .mega-link:hover { color: #7c3aed; }
        .mega-link::after {
          content: ''; position: absolute; bottom: 0; left: 0; width: 0;
          height: 1px; background: #7c3aed; transition: width 0.2s ease;
        }
        .mega-link:hover::after { width: 100%; }

        /* ── Nav items ── */
        .nav-item {
          position: relative; padding: 0 18px; height: 44px;
          display: flex; align-items: center;
          font-size: 12px; font-weight: 600; letter-spacing: 0.08em;
          text-transform: uppercase; cursor: pointer;
          transition: color 0.2s, background 0.2s;
          color: rgba(255,255,255,0.55); white-space: nowrap;
        }
        .nav-item:hover  { color: white; background: rgba(255,255,255,0.06); }
        .nav-item.active { color: white; }
        .nav-item::after {
          content: ''; position: absolute; bottom: 0; left: 18px; right: 18px;
          height: 2px; background: white; transform: scaleX(0);
          transition: transform 0.2s ease; border-radius: 2px 2px 0 0;
        }
        .nav-item:hover::after, .nav-item.active::after { transform: scaleX(1); }
        .nav-item.sale-item { color: #f87171; }
        .nav-item.sale-item:hover { color: #fca5a5; }
        .nav-item.sale-item::after { background: #ef4444; }

        /* ── Mega dropdown positioning ──
           Each mega parent is position:relative (default block).
           The panel is position:absolute, top:100%, left:0.
           If the panel would overflow the right edge we shift it leftward
           via the .mega-right class applied when the item is in the
           right half of the nav (electronics, sports, sale).           */
        .mega-parent { position: relative; flex-shrink: 0; }
        .mega-drop {
          position: absolute;
          top: 100%;
          left: 0;
          z-index: 200;
          min-width: 760px;
        }
        /* For items near the right side, anchor right instead of left */
        .mega-drop.anchor-right {
          left: auto;
          right: 0;
        }
      `}</style>

      <div className="lyra-body">

      {/* ════════════════════════════════════════════════════════
          NAVBAR
      ════════════════════════════════════════════════════════ */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#0c0618]/97 backdrop-blur-2xl shadow-2xl shadow-violet-950/60" : "bg-[#1e0a3c]"
        }`}
        onClick={() => setShowMenu(false)}
      >

        {/* Layer 1 — announcement */}
        <div className="bg-gradient-to-r from-[#1a0836] via-violet-800 to-[#1a0836] py-1.5 text-center border-b border-violet-800/30">
          <span className="shimmer-text text-xs font-semibold tracking-[0.18em]">
            ✦ FREE DELIVERY ON ORDERS ABOVE ₹999 &nbsp;·&nbsp; NEW ARRIVALS EVERY FRIDAY &nbsp;·&nbsp; LYRA MEMBERS GET EXTRA 10% OFF ✦
          </span>
        </div>

        {/* Layer 2 — logo + search + icons */}
        <div className="max-w-screen-xl mx-auto px-6 h-16 flex items-center gap-5 border-b border-white/[0.06]">
          {/* Logo */}
          <button
            onClick={() => { navigate("/dashboard"); setActiveTab("All"); setActiveBrand(null); }}
            className="lyra-serif text-2xl tracking-[0.35em] text-white flex-shrink-0 select-none hover:opacity-90 transition-opacity"
          >
            LY<span className="text-pink-400">R</span>A
            <sup className="text-white/20 ml-0.5" style={{ fontSize: "7px", letterSpacing: "0.4em", verticalAlign: "top", marginTop: "6px" }}>FASHION</sup>
          </button>

          {/* Search */}
          <div className="flex-1 max-w-2xl relative">
            <div className="flex items-center bg-white/8 border border-white/10 rounded-xl hover:bg-white/12 focus-within:bg-white focus-within:border-violet-400 transition-all group">
              <svg className="ml-3.5 w-4 h-4 text-white/30 group-focus-within:text-violet-600 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
              <input
                className="flex-1 py-2.5 px-3 text-sm bg-transparent outline-none text-white group-focus-within:text-gray-900 placeholder-white/30 group-focus-within:placeholder-gray-400 transition-colors"
                placeholder="Search fashion, footwear, beauty, electronics..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setActiveBrand(null); }}
              />
              {search && (
                <button onClick={() => setSearch("")} className="mr-3 w-5 h-5 rounded-full bg-white/15 text-white/60 flex items-center justify-center text-xs flex-shrink-0">✕</button>
              )}
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-1 ml-auto flex-shrink-0">
            <button onClick={() => navigate("/wishlist")}
              className="relative flex flex-col items-center px-3 py-1.5 text-white/55 hover:text-white hover:bg-white/8 rounded-xl transition-all">
              <svg className="w-5 h-5" fill={wishlistCount > 0 ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="hidden sm:block mt-0.5 text-white/40" style={{ fontSize: "9px", letterSpacing: "0.08em" }}>WISHLIST</span>
              {wishlistCount > 0 && <span className="absolute -top-1 right-0.5 w-4 h-4 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold shadow-md" style={{ fontSize: "8px" }}>{wishlistCount}</span>}
            </button>

            <button onClick={() => navigate("/cart")}
              className="relative flex flex-col items-center px-3 py-1.5 text-white/55 hover:text-white hover:bg-white/8 rounded-xl transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="hidden sm:block mt-0.5 text-white/40" style={{ fontSize: "9px", letterSpacing: "0.08em" }}>CART</span>
              {cartCount > 0 && <span className="absolute -top-1 right-0.5 w-4 h-4 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold shadow-md" style={{ fontSize: "8px" }}>{cartCount}</span>}
            </button>

            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setShowMenu((v) => !v)}
                className="flex flex-col items-center px-3 py-1.5 text-white/55 hover:text-white hover:bg-white/8 rounded-xl transition-all">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="hidden sm:block mt-0.5 text-white/40" style={{ fontSize: "9px", letterSpacing: "0.08em" }}>{firstName.toUpperCase()}</span>
              </button>
              {showMenu && (
                <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-purple-50 overflow-hidden z-50 slide-down">
                  <div className="bg-gradient-to-br from-[#1e0a3c] to-violet-700 px-5 py-4">
                    <p className="lyra-serif text-white font-semibold">{user.fullName || "Guest"}</p>
                    <p className="text-purple-300 text-xs mt-0.5">{user.email || user.mobileNumber || ""}</p>
                  </div>
                  {[
                    { label: "📦 My Orders",  path: "/profile?tab=orders"    },
                    { label: "👤 My Profile", path: "/profile?tab=profile"   },
                    { label: "♡  Wishlist",   path: "/wishlist"              },
                    { label: "📍 Addresses",  path: "/profile?tab=addresses" },
                  ].map((item) => (
                    <button key={item.label} onClick={() => { setShowMenu(false); navigate(item.path); }}
                      className="w-full text-left px-5 py-3 text-sm text-gray-700 hover:bg-violet-50 hover:text-violet-700 transition-colors border-b border-gray-50 last:border-0">
                      {item.label}
                    </button>
                  ))}
                  <button onClick={handleLogout} className="w-full text-left px-5 py-3 text-sm text-red-500 hover:bg-red-50 transition-colors border-t border-gray-100">🚪 Sign Out</button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────
            Layer 3 — MEGA-NAV
            Items centered in the bar. Dropdown is position:absolute
            relative to each item's parent div (.mega-parent).
            Right-side items (electronics, sports, sale) anchor right
            so the panel never overflows the viewport edge.
        ───────────────────────────────────────────────────── */}
        <div className="relative border-t border-white/[0.07]" style={{ background: "rgba(0,0,0,0.22)" }}>
          <div className="flex items-stretch justify-center">

            {MEGA_MENU.map((item, idx) => {
              // Items in the right half anchor the dropdown to the right
              const anchorRight = idx >= Math.floor(MEGA_MENU.length / 2);
              return (
                <div
                  key={item.id}
                  className="mega-parent"
                  onMouseEnter={() => !item.noMenu && openMega(item.id)}
                  onMouseLeave={() => !item.noMenu && closeMega(item.id)}
                >
                  {/* Nav tab */}
                  <button
                    onClick={() => {
                      if (item.noMenu) navigate(`/category/${item.id}`);
                      else setActiveMega((v) => v === item.id ? null : item.id);
                    }}
                    className={`nav-item ${item.id === "sale" ? "sale-item" : ""} ${activeMega === item.id ? "active" : ""}`}
                  >
                    {item.label}
                    {item.badge && (
                      <span className="ml-2 text-[9px] font-bold px-1.5 py-0.5 rounded-full text-white"
                        style={{ background: item.badgeColor || "#7c3aed", letterSpacing: "0.05em" }}>
                        {item.badge}
                      </span>
                    )}
                    {!item.noMenu && (
                      <svg className={`ml-1 w-3 h-3 opacity-40 transition-transform duration-200 ${activeMega === item.id ? "rotate-180" : ""}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>

                  {/* ── MEGA DROPDOWN ── */}
                  {!item.noMenu && activeMega === item.id && item.columns && (
                    <div
                      className={`mega-drop mega-panel bg-white shadow-2xl shadow-black/20 border-t-2 border-violet-600 ${anchorRight ? "anchor-right" : ""}`}
                      onMouseEnter={() => openMega(item.id)}
                      onMouseLeave={() => closeMega(item.id)}
                    >
                      <div className="flex">
                        {/* Columns */}
                        <div className="flex-1 grid gap-0 px-6 py-5"
                          style={{ gridTemplateColumns: `repeat(${item.columns.length}, 1fr)`, columnGap: "20px" }}>
                          {item.columns.map((col) => (
                            <div key={col.title} className="py-1">
                              <p className="text-[10px] font-bold text-violet-700 uppercase tracking-[0.18em] mb-3 pb-2 border-b border-violet-100">
                                {col.title}
                              </p>
                              <div className="space-y-1.5">
                                {col.links.map((link) => (
                                  <span key={link} className="mega-link"
                                    onClick={() => { navigate(`/category/${encodeURIComponent(link)}`); setActiveMega(null); }}>
                                    {link}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Featured panel */}
                        {item.featured && (
                          <div className="w-52 flex-shrink-0 relative overflow-hidden border-l border-gray-100">
                            <img src={item.featured.img} alt={item.featured.label}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                              onError={(e) => { e.target.parentElement.style.display = "none"; }} />
                            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15,5,30,0.75) 0%, transparent 55%)" }} />
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                              <p className="text-[10px] tracking-widest text-white/50 uppercase mb-1">Featured</p>
                              <p className="text-white font-semibold text-sm">{item.featured.label}</p>
                              <button onClick={() => { navigate(`/category/${item.id}`); setActiveMega(null); }}
                                className="mt-2 text-xs text-white/70 hover:text-white transition-colors flex items-center gap-1">
                                Shop Now →
                              </button>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Quick-links bar */}
                      <div className="px-6 py-3 border-t border-gray-100 bg-gray-50 flex items-center gap-4">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Quick Shop:</span>
                        {["New Arrivals","Best Sellers","Under ₹999","Premium Picks"].map((q) => (
                          <button key={q} onClick={() => { navigate(`/category/${item.id}`); setActiveMega(null); }}
                            className="text-xs text-violet-600 font-semibold hover:text-violet-800 px-3 py-1 rounded-full bg-violet-50 hover:bg-violet-100 transition-colors">
                            {q}
                          </button>
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

      {/* ════════════════════════════════════════════════════════
          PAGE BODY
      ════════════════════════════════════════════════════════ */}
      <div onClick={() => { setShowMenu(false); setActiveMega(null); }}>

        {!heroLoading && heroSlides.length > 0 ? (
          <CinematicHero
            slide={heroSlides[safeIdx]}
            currentIndex={safeIdx}
            total={heroSlides.length}
            onDotClick={setCurrent}
            onShopClick={() => scrollTo(shopRef)}
          />
        ) : !heroLoading && heroSlides.length === 0 ? (
          <div className="w-full flex items-center justify-center bg-gradient-to-br from-[#1e0a3c] to-violet-900"
            style={{ height: "320px" }}>
            <div className="text-center">
              <p className="lyra-serif text-white/40 text-2xl mb-2">No hero slides configured</p>
              <p className="text-white/20 text-xs tracking-widest">
                Run POST /api/admin/hero-slides/seed to populate
              </p>
            </div>
          </div>
        ) : null}

        {/* ── MAIN CONTENT ─────────────────────────────────── */}
        <div className="max-w-screen-xl mx-auto px-4 py-8">

          {/* Trust badges */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            {[
              { icon: "🚚", title: "Free Delivery",   sub: "On orders above ₹999",  from: "from-violet-600", to: "to-purple-600" },
              { icon: "↩",  title: "30-Day Returns",  sub: "Hassle-free exchanges",  from: "from-teal-600",   to: "to-cyan-500"   },
              { icon: "🔒", title: "Secure Payments", sub: "100% safe & encrypted",  from: "from-amber-500",  to: "to-orange-500" },
              { icon: "⭐", title: "Lyra Rewards",    sub: "Earn on every purchase", from: "from-pink-600",   to: "to-rose-500"   },
            ].map((o) => (
              <div key={o.title} className={`bg-gradient-to-r ${o.from} ${o.to} rounded-2xl p-5 flex items-center gap-4 hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-pointer`}>
                <span className="text-3xl">{o.icon}</span>
                <div>
                  <p className="lyra-serif text-white font-semibold text-base">{o.title}</p>
                  <p className="text-white/70 text-xs mt-0.5">{o.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Category showcase */}
          <div className="mb-14">
            <div className="flex items-end justify-between mb-6">
              <div>
                <p className="text-xs tracking-[0.35em] text-violet-500 uppercase mb-2">✦ All Categories</p>
                <h2 className="lyra-serif text-4xl text-gray-900">Shop by <span className="text-violet-600">World</span></h2>
              </div>
              <button className="text-sm text-violet-600 font-semibold hover:underline">View All →</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {SHOWCASE_CATS.slice(0, 4).map((cat) => (
                <div key={cat.label} onClick={() => navigate(cat.route)}
                  className="relative overflow-hidden rounded-2xl cursor-pointer group" style={{ height: "260px" }}>
                  <img src={cat.img} alt={cat.label}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-600"
                    onError={(e) => { e.target.parentElement.style.background = "linear-gradient(135deg,#1e0a3c,#7c3aed)"; e.target.style.display = "none"; }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,3,25,0.88) 0%, rgba(10,3,25,0.3) 55%, transparent 100%)" }} />
                  <div className="absolute inset-0 bg-violet-900/0 group-hover:bg-violet-900/20 transition-all duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="lyra-serif text-white text-2xl font-light leading-none mb-1">{cat.label}</p>
                    <p className="text-white/50 text-xs font-medium tracking-wide">{cat.sub}</p>
                    <div className="mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span className="text-xs font-bold text-white bg-violet-600 px-3 py-1 rounded-full">Shop Now</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {SHOWCASE_CATS.slice(4, 8).map((cat) => (
                <div key={cat.label} onClick={() => navigate(cat.route)}
                  className="relative overflow-hidden rounded-2xl cursor-pointer group bg-white border border-purple-100 hover:border-violet-300 hover:shadow-lg transition-all duration-300 flex"
                  style={{ height: "100px" }}>
                  <div className="absolute right-0 top-0 bottom-0 w-2/5 overflow-hidden">
                    <img src={cat.img} alt={cat.label}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      style={{ maskImage: "linear-gradient(to right, transparent 0%, black 40%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 40%)" }}
                      onError={(e) => { e.target.style.display = "none"; }} />
                  </div>
                  <div className="relative z-10 p-4 flex flex-col justify-center flex-1">
                    <p className="font-bold text-gray-900 text-sm">{cat.label}</p>
                    <p className="text-gray-400 text-xs mt-0.5 leading-tight">{cat.sub}</p>
                    <span className="mt-2 text-[10px] font-bold text-violet-600 tracking-wide">Explore →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Flash sale */}
          <div className="rounded-2xl px-6 py-5 mb-10 flex items-center gap-4 shadow-xl"
            style={{ background: "linear-gradient(135deg,#1e0a3c,#4c1d95,#6d28d9)" }}>
            <div>
              <h3 className="lyra-serif text-white text-2xl">Flash Sale</h3>
              <p className="text-white/40 text-xs mt-0.5">Limited quantities — ends soon</p>
            </div>
            <span className="bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">⚡ LIVE</span>
            <div className="ml-auto flex items-center gap-1.5">
              {[[countdown.h,"HRS"],[countdown.m,"MIN"],[countdown.s,"SEC"]].map(([n, l], i) => (
                <React.Fragment key={l}>
                  {i > 0 && <span className="text-violet-400 font-bold">:</span>}
                  <div className="bg-white/10 border border-white/10 rounded-xl px-3 py-2 text-center min-w-[48px]">
                    <span className="lyra-serif text-white font-bold text-xl block">{n}</span>
                    <span className="text-white/30 text-[8px] uppercase tracking-widest">{l}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Brands */}
          <BrandScrollBar onBrandClick={handleBrand} />

          {/* Deals */}
          {dealsProducts.length > 0 && (
            <div className="mb-12">
              <div className="flex items-end justify-between mb-5">
                <div>
                  <p className="text-xs tracking-[0.3em] text-pink-500 uppercase mb-1">✦ Limited Time</p>
                  <h2 className="lyra-serif text-3xl text-gray-900">Best <span className="text-pink-600">Deals</span></h2>
                </div>
                <button className="text-sm text-violet-600 font-semibold hover:underline">View All Deals →</button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {dealsProducts.map((p) => <ProductCard key={p._id} product={p} onAddToCart={setModalProduct} />)}
              </div>
            </div>
          )}

          {/* Product grid */}
          <section ref={shopRef} id="shop">
            <div className="flex items-center justify-between mb-6">
              <h2 className="lyra-serif text-3xl text-gray-900">
                {activeBrand
                  ? <>{activeBrand} <span className="text-violet-600">Collection</span></>
                  : <>New <span className="text-violet-600">Arrivals</span></>}
              </h2>
              <div className="flex items-center gap-3">
                {activeBrand && (
                  <button onClick={() => setActiveBrand(null)}
                    className="flex items-center gap-2 bg-violet-100 text-violet-700 text-sm font-semibold px-4 py-1.5 rounded-full hover:bg-violet-200 transition-colors">
                    {activeBrand} <span className="font-bold">×</span>
                  </button>
                )}
                <button className="text-sm text-violet-600 font-medium hover:underline">View All →</button>
              </div>
            </div>

            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {filtered.map((p) => <ProductCard key={p._id} product={p} onAddToCart={setModalProduct} />)}
              </div>
            ) : products.length === 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-purple-100 overflow-hidden animate-pulse">
                    <div className="h-60 bg-purple-50" />
                    <div className="p-4 space-y-2">
                      <div className="h-2 bg-gray-100 rounded w-1/3" />
                      <div className="h-4 bg-gray-100 rounded w-3/4" />
                      <div className="h-3 bg-gray-100 rounded w-1/2" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-24 bg-white rounded-3xl border border-purple-100">
                <p className="text-5xl mb-4">🔍</p>
                <p className="lyra-serif text-xl text-gray-700 mb-2">No products found</p>
                <button onClick={() => { setSearch(""); setActiveBrand(null); setActiveTab("All"); }}
                  className="mt-5 text-sm text-violet-600 font-medium hover:underline">Clear filters</button>
              </div>
            )}
          </section>

          {/* Editorial strips */}
          <div className="mt-16 mb-10">
            <div className="flex items-end justify-between mb-6">
              <h2 className="lyra-serif text-3xl text-gray-900">Explore <span className="text-violet-600">Collections</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { cat: "Fashion",     img: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&q=80", badge: "New Arrivals", f: "#5b21b6" },
                { cat: "Beauty",      img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&q=80", badge: "Editor Picks", f: "#9d174d" },
                { cat: "Electronics", img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=500&q=80", badge: "Best Sellers", f: "#1f2937" },
                { cat: "Watches",     img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80", badge: "Luxury Picks", f: "#78350f" },
              ].map((item) => (
                <div key={item.cat} onClick={() => navigate(`/category/${encodeURIComponent(item.cat)}`)}
                  className="relative rounded-2xl overflow-hidden cursor-pointer group h-52 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <img src={item.img} alt={item.cat}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.target.style.display = "none"; }} />
                  <div className="absolute inset-0 opacity-75" style={{ background: `linear-gradient(to top, ${item.f}, transparent 65%)` }} />
                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <span className="text-white/50 text-[10px] font-bold uppercase tracking-widest mb-1">{item.badge}</span>
                    <p className="lyra-serif text-white font-light text-xl leading-tight">{item.cat}</p>
                    <span className="text-white/45 text-xs mt-1 group-hover:text-white transition-colors">Shop now →</span>
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