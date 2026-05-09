import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BRAND } from "../../data";

const SECTIONS = [
  { id: "home",        label: "Home" },
  { id: "portfolio",   label: "Projects" },
  { id: "services",    label: "Services" },
  { id: "about",       label: "About" },
  { id: "testimonials",label: "Reviews" },
  { id: "contact",     label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      let current = "home";
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= 120) current = s.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id) => {
    setOpen(false);
    if (id === "home") window.scrollTo({ top: 0, behavior: "smooth" });
    else document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Logo click → soft refresh + scroll top
  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "instant" });
    // Show preloader again by full reload
    window.location.reload();
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}
      data-testid="navbar"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className={`flex items-center justify-between rounded-2xl px-4 md:px-5 py-3 transition-all ${
          scrolled ? "glass-strong shadow-[0_10px_40px_-20px_rgba(15,17,21,0.18)]" : "glass"
        }`}>
          <button onClick={handleLogoClick} data-testid="logo-button" className="group flex items-center gap-2.5">
            <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-[#2341e1]/30 overflow-hidden">
              <img src={BRAND.charLogo} alt="Daniyal logo" className="h-9 w-9 object-contain" />
            </span>
            <span className="font-heading font-extrabold tracking-tight text-[#0f1115] text-base md:text-lg">
              DANIYAL<span className="text-[#2341e1]">.</span>
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => goTo(s.id)}
                data-testid={`nav-${s.id}`}
                className={`relative px-4 py-2 text-sm font-semibold transition-colors ${
                  active === s.id ? "text-[#0f1115]" : "text-[#4b5563] hover:text-[#0f1115]"
                }`}
              >
                {s.label}
                {active === s.id && (
                  <motion.span layoutId="nav-active" className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-[#2341e1]" />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button onClick={() => goTo("contact")} data-testid="navbar-cta" className="hidden md:inline-flex btn-primary text-sm py-2.5 px-5 btn-glow">
              Hire Me
            </button>
            <button
              onClick={() => setOpen((o) => !o)}
              data-testid="mobile-menu-button"
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full bg-white border border-[#0f1115]/10 text-[#0f1115]"
              aria-label="Open menu"
            >
              <AnimatePresence mode="wait">
                {open
                  ? <motion.span key="x" initial={{ rotate:-90, opacity:0 }} animate={{ rotate:0, opacity:1 }} exit={{ rotate:90, opacity:0 }}><X size={20} /></motion.span>
                  : <motion.span key="m" initial={{ rotate:90, opacity:0 }} animate={{ rotate:0, opacity:1 }} exit={{ rotate:-90, opacity:0 }}><Menu size={20} /></motion.span>}
              </AnimatePresence>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-3 rounded-2xl glass-strong p-3"
              data-testid="mobile-menu"
            >
              <div className="flex flex-col">
                {SECTIONS.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => goTo(s.id)}
                    data-testid={`mobile-nav-${s.id}`}
                    className="px-4 py-3 text-start text-[#0f1115]/85 hover:text-[#0f1115] hover:bg-black/5 rounded-xl transition-colors"
                  >
                    {s.label}
                  </button>
                ))}
                <button onClick={() => goTo("contact")} data-testid="mobile-nav-cta" className="mt-2 mx-2 mb-1 btn-primary justify-center">
                  Hire Me
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
