import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles, Star } from "lucide-react";
import { BRAND, WHATSAPP_URL, PORTFOLIO_CATEGORIES } from "../../data";

function Particles({ count = 20 }) {
  const items = useMemo(
    () => Array.from({ length: count }).map(() => ({
      left: Math.random() * 100,
      delay: Math.random() * 8,
      dur: 9 + Math.random() * 12,
      size: 2 + Math.random() * 4,
      opacity: 0.25 + Math.random() * 0.5,
    })), [count]);
  return (
    <div className="particles" aria-hidden="true">
      {items.map((p, i) => (
        <span key={i} className="particle"
          style={{ left: `${p.left}%`, width: p.size, height: p.size, animationDelay: `${p.delay}s`, animationDuration: `${p.dur}s`, opacity: p.opacity }} />
      ))}
    </div>
  );
}

function TypingRoles({ roles }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const role = roles[i % roles.length];
    const speed = del ? 38 : 80;
    const t = setTimeout(() => {
      if (!del) {
        const next = role.slice(0, text.length + 1);
        setText(next);
        if (next === role) setTimeout(() => setDel(true), 1300);
      } else {
        const next = role.slice(0, text.length - 1);
        setText(next);
        if (next === "") { setDel(false); setI(v => v + 1); }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i, roles]);

  return (
    <span className="text-[#2341e1] font-semibold">
      {text}<span className="ml-0.5 inline-block w-[2px] h-5 md:h-6 align-middle bg-[#2341e1] animate-pulse" />
    </span>
  );
}

const ROLES = ["Graphic Designer", "Brand Identity Expert", "Website Designer", "Resume Writer", "LinkedIn Optimizer"];

export default function Hero() {
  // Pick 6 mockups across categories for the visual stack
  const mockups = useMemo(() => {
    const picks = [];
    const desired = ["web", "social", "branding", "logo", "menu", "resume"];
    for (const id of desired) {
      const cat = PORTFOLIO_CATEGORIES.find(c => c.id === id);
      if (cat?.items?.length) picks.push({ ...cat.items[0], cat: cat.name });
    }
    return picks;
  }, []);

  const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden flex items-center pt-28 pb-16" data-testid="hero-section">
      <Particles count={22} />
      {/* Soft blue blobs */}
      <div className="absolute -top-20 -right-20 h-[480px] w-[480px] rounded-full bg-[#2341e1]/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-32 -left-20 h-[440px] w-[440px] rounded-full bg-[#2341e1]/5 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10 grid lg:grid-cols-12 gap-10 items-center">
        {/* Left text */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#2341e1]/25 bg-[#2341e1]/10 px-4 py-1.5"
            data-testid="hero-label"
          >
            <Sparkles size={14} className="text-[#2341e1]" />
            <span className="font-accent text-[11px] tracking-[0.25em] text-[#2341e1]">GRAPHIC & WEB DESIGNER</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.2rem] leading-[1.02] font-black text-[#0f1115]"
            data-testid="hero-headline"
          >
            I Create Brands<br />
            That <span className="glow-text">Stand Out</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-5 text-lg md:text-xl text-[#4b5563]"
          >
            <TypingRoles roles={ROLES} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-5 max-w-xl text-base md:text-lg text-[#4b5563] leading-relaxed"
          >
            Helping brands grow through Logo Design, Branding, Website Design,
            Social Media Graphics, Resume Writing & LinkedIn Optimization.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <button onClick={() => goTo("portfolio")} data-testid="hero-cta-work" className="btn-outline btn-glow group">
              View My Work <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-testid="hero-cta-whatsapp"
               className="btn-primary btn-glow group">
              <MessageCircle size={18} className="group-hover:rotate-12 transition-transform" /> Chat On WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-9 flex items-center gap-4"
          >
            <div className="flex -space-x-3">
              {[12, 47, 33, 49, 22].map((n) => (
                <img key={n} src={`https://i.pravatar.cc/64?img=${n}`} alt="client" className="h-9 w-9 rounded-full border-2 border-[#ececec] object-cover" />
              ))}
            </div>
            <div className="text-xs text-[#4b5563]">
              <div className="flex gap-0.5">{[...Array(5)].map((_,i)=> <Star key={i} size={12} className="fill-[#facc15] text-[#facc15]" />)}</div>
              <div className="font-semibold text-[#0f1115]">130+ Happy Clients · 14 Countries</div>
            </div>
          </motion.div>
        </div>

        {/* Right — Project mockup stack (visual-first) */}
        <div className="lg:col-span-6">
          <div className="relative max-w-xl mx-auto">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[#2341e1]/15 to-transparent blur-2xl" aria-hidden="true" />

            {/* Character logo card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="relative z-20 mx-auto w-fit rounded-3xl bg-white border border-[#2341e1]/15 px-7 py-5 shadow-[0_30px_60px_-30px_rgba(15,17,21,0.25)]"
            >
              <motion.img
                src={BRAND.charLogo} alt="Daniyal Graphic Designer"
                animate={{ y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="h-28 md:h-36 w-auto object-contain"
              />
            </motion.div>

            {/* Mockup grid */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {mockups.map((m, i) => (
                <motion.a
                  key={i}
                  href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.07 }}
                  whileHover={{ y: -6 }}
                  className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-white border border-[#0f1115]/8 shadow-[0_10px_30px_-20px_rgba(15,17,21,0.25)]"
                  data-testid={`hero-mockup-${i}`}
                >
                  <img src={m.img} alt={m.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                    <div className="text-[10px] font-bold tracking-wider text-white uppercase">{m.cat}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity }}
              className="absolute -left-4 top-32 rounded-2xl bg-white border border-[#0f1115]/10 px-3 py-2 text-xs font-bold text-[#0f1115] shadow-lg"
            >5★ Reviews</motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }}
              className="absolute -right-3 bottom-10 rounded-2xl bg-[#2341e1] px-3 py-2 text-xs font-bold text-white shadow-lg"
            >+150 Projects</motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
