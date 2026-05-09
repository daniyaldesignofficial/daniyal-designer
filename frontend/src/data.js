// Static content for the portfolio site (English-only)
export const BRAND = {
  name: "Daniyal",
  full: "Daniyal — Graphic Designer",
  charLogo: "https://customer-assets.emergentagent.com/job_brand-identity-pro-6/artifacts/89rw8zne_Untitled%20design%20-%202026-05-09T192620.146.png",
  aboutImage: "https://customer-assets.emergentagent.com/job_brand-identity-pro-6/artifacts/zr990l4l_c2c25f14-427c-45be-9fea-75418f3da527.jpg",
};

export const CONTACT_INFO = {
  whatsapp: "+97333740941",
  whatsapp_display: "+973 3374 0941",
  email: "daniyaldesignofficial@gmail.com",
  instagram: "https://www.instagram.com/daniyaldesignerofficial/",
  facebook: "https://www.facebook.com/profile.php?id=61574257423949",
  location: "Kingdom of Bahrain",
};
export const WHATSAPP_URL = `https://wa.me/${CONTACT_INFO.whatsapp.replace(/\+/g, "")}`;

export const SERVICES = [
  { id: "logo",    icon: "PenTool",   title: "Logo Design",          desc: "Custom memorable logos that capture your brand essence." },
  { id: "brand",   icon: "Palette",   title: "Brand Identity",       desc: "Full branding kits — typography, color and visual systems." },
  { id: "web",     icon: "Monitor",   title: "Website Design",       desc: "Modern responsive websites with premium UI/UX." },
  { id: "social",  icon: "Instagram", title: "Social Media Design",  desc: "Instagram posts, ads and full campaign visuals." },
  { id: "resume",  icon: "FileText",  title: "Resume Writing",       desc: "Professional ATS-friendly resumes that get interviews." },
  { id: "linkedin",icon: "Linkedin",  title: "LinkedIn Optimization",desc: "Profile optimization for serious job seekers." },
  { id: "menu",    icon: "UtensilsCrossed", title: "Menu Design",    desc: "Elegant restaurant menus and food pricing cards." },
  { id: "profile", icon: "BookOpen",  title: "Company Profile",      desc: "Corporate profile booklets and business documents." },
];

// Category-strict portfolio. Each project shows imagery that matches its category.
export const PORTFOLIO_CATEGORIES = [
  {
    id: "logo",
    name: "Logo Design",
    blurb: "Wordmarks, monograms, badges, icons & 3D marks.",
    items: [
      { title: "Minimal Wordmark", img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&q=80" },
      { title: "Geometric Monogram", img: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?w=900&q=80" },
      { title: "Vintage Badge Logo", img: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=900&q=80" },
      { title: "Tech Startup Icon", img: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=900&q=80" },
      { title: "3D Premium Mark", img: "https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?w=900&q=80" },
      { title: "Hand-drawn Script", img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=900&q=80" },
    ],
  },
  {
    id: "branding",
    name: "Brand Identity",
    blurb: "Complete identity systems — corporate, luxury, creative & minimal.",
    items: [
      { title: "Blue Corporate System", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80" },
      { title: "Dark Luxury Brand", img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=900&q=80" },
      { title: "Colorful Creative Pack", img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=900&q=80" },
      { title: "Minimal Stationery", img: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=900&q=80" },
    ],
  },
  {
    id: "social",
    name: "Social Media",
    blurb: "Instagram posts, ad creatives, story templates & business promos.",
    items: [
      { title: "IG Carousel Pack", img: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=900&q=80" },
      { title: "Restaurant Ad Set", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900&q=80" },
      { title: "Real Estate Campaign", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80" },
      { title: "Ramadan Story Pack", img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=900&q=80" },
    ],
  },
  {
    id: "resume",
    name: "Resume Design",
    blurb: "ATS-friendly resumes, modern CVs and LinkedIn banners.",
    items: [
      { title: "Executive Resume Layout", img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=900&q=80" },
      { title: "Modern Tech CV", img: "https://images.unsplash.com/photo-1568667256549-094345857637?w=900&q=80" },
      { title: "Two-column ATS CV", img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900&q=80" },
      { title: "Creative LinkedIn Banner", img: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=900&q=80" },
    ],
  },
  {
    id: "menu",
    name: "Menu Design",
    blurb: "Restaurant menus, café cards & food pricing layouts.",
    items: [
      { title: "Burger Menu Card", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80" },
      { title: "Café Bi-fold Menu", img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900&q=80" },
      { title: "Premium Steakhouse Menu", img: "https://images.unsplash.com/photo-1555992336-fb0d29498b13?w=900&q=80" },
    ],
  },
  {
    id: "profile",
    name: "Company Profile",
    blurb: "Premium corporate profile booklets & investor decks.",
    items: [
      { title: "Real Estate Profile Book", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=80" },
      { title: "Construction Company Profile", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80" },
      { title: "Tech Startup Pitch Deck", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&q=80" },
    ],
  },
  {
    id: "docs",
    name: "Documentation",
    blurb: "Reports, whitepapers & corporate document layouts.",
    items: [
      { title: "Annual Report 2025", img: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=900&q=80" },
      { title: "Whitepaper Layout", img: "https://images.unsplash.com/photo-1542435503-956c469947f6?w=900&q=80" },
      { title: "Brand Guidelines PDF", img: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=900&q=80" },
    ],
  },
  {
    id: "web",
    name: "Website Design",
    blurb: "Landing pages & UI mockups — corporate, creative, minimal & bold.",
    items: [
      { title: "Corporate SaaS Landing", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80" },
      { title: "Creative Studio Site", img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&q=80" },
      { title: "Minimal Portfolio UI", img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=900&q=80" },
      { title: "Bold E-commerce Storefront", img: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=900&q=80" },
      { title: "Luxury Hotel Website", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=900&q=80" },
      { title: "Mobile App Landing", img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=900&q=80" },
    ],
  },
];

export const TESTIMONIALS = [
  { name: "Ahmed K.",   role: "Business Owner",   country: "🇸🇦", flag: "Saudi Arabia", rating: 5, avatar: "https://i.pravatar.cc/120?img=12", text: "Daniyal completely transformed our business branding. Highly professional and creative work." },
  { name: "Sara M.",    role: "Marketing Manager",country: "🇦🇪", flag: "UAE",          rating: 5, avatar: "https://i.pravatar.cc/120?img=47", text: "Best designer I worked with. Amazing communication and stunning results." },
  { name: "John D.",    role: "Founder",          country: "🇬🇧", flag: "UK",           rating: 5, avatar: "https://i.pravatar.cc/120?img=33", text: "Our website looks modern and premium now. Clients love it." },
  { name: "Fatima A.",  role: "Boutique Owner",   country: "🇧🇭", flag: "Bahrain",      rating: 5, avatar: "https://i.pravatar.cc/120?img=49", text: "Excellent social media designs. Very creative and on-brand." },
  { name: "Raza H.",    role: "Job Seeker",       country: "🇵🇰", flag: "Pakistan",     rating: 5, avatar: "https://i.pravatar.cc/120?img=15", text: "Professional resume and LinkedIn optimization service. Highly recommended." },
  { name: "Ali R.",     role: "Entrepreneur",     country: "🇦🇪", flag: "UAE",          rating: 5, avatar: "https://i.pravatar.cc/120?img=22", text: "Absolutely amazing experience. The branding looked world-class." },
  { name: "Daniel P.",  role: "Product Manager",  country: "🇬🇧", flag: "UK",           rating: 5, avatar: "https://i.pravatar.cc/120?img=68", text: "Very modern website design with smooth animations. Loved it." },
  { name: "Hassan A.",  role: "Engineer",         country: "🇧🇭", flag: "Bahrain",      rating: 5, avatar: "https://i.pravatar.cc/120?img=11", text: "Best resume designer in Bahrain. Highly professional." },
  { name: "Noor F.",    role: "Brand Manager",    country: "🇶🇦", flag: "Qatar",        rating: 5, avatar: "https://i.pravatar.cc/120?img=44", text: "Social media designs increased our engagement massively." },
  { name: "Bilal M.",   role: "CEO",              country: "🇵🇰", flag: "Pakistan",     rating: 5, avatar: "https://i.pravatar.cc/120?img=8",  text: "Fast delivery and premium quality work every time." },
  { name: "Layla S.",   role: "Restaurant Owner", country: "🇰🇼", flag: "Kuwait",       rating: 5, avatar: "https://i.pravatar.cc/120?img=23", text: "Our menu design and brand pack got us so many compliments." },
  { name: "Omar T.",    role: "Real Estate Agent",country: "🇴🇲", flag: "Oman",         rating: 5, avatar: "https://i.pravatar.cc/120?img=17", text: "Listing posters and ads — premium look at a fair price." },
];

export const TRUSTED_FLAGS = ["🇧🇭","🇸🇦","🇦🇪","🇶🇦","🇰🇼","🇴🇲","🇬🇧","🇺🇸","🇩🇪","🇫🇷","🇮🇳","🇵🇰","🇹🇷","🇪🇬"];

export const ACHIEVEMENTS = [
  { label: "Projects Completed", value: 95 },
  { label: "Client Satisfaction", value: 100 },
  { label: "On-time Delivery", value: 98 },
  { label: "Returning Clients", value: 87 },
];

export const STATS = [
  { value: 150, suffix: "+", label: "Projects Completed" },
  { value: 130, suffix: "+", label: "Happy Clients" },
  { value: 5,   suffix: "+", label: "Years Experience" },
  { value: 14,  suffix: "+", label: "Countries Served" },
  { value: 100, suffix: "%", label: "Satisfaction" },
  { value: 24,  suffix: "/7", label: "Support" },
];

export const WHY = [
  { icon: "Zap",      t: "Fast Delivery",       d: "Projects delivered quickly and professionally." },
  { icon: "Lightbulb",t: "Creative Concepts",   d: "Unique modern design ideas tailored to your brand." },
  { icon: "RefreshCw",t: "Unlimited Revisions", d: "Until the client is fully satisfied." },
  { icon: "Globe2",   t: "Worldwide Clients",   d: "Serving clients across 14+ countries." },
];
