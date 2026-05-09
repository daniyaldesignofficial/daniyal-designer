import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Sparkles, Layers } from "lucide-react";
import { PORTFOLIO_CATEGORIES, WHATSAPP_URL } from "../../data";

const ALL_TAB = { id: "all", name: "All Work" };

export default function Portfolio() {
  const [active, setActive] = useState("all");

  const visibleCats = active === "all" ? PORTFOLIO_CATEGORIES : PORTFOLIO_CATEGORIES.filter(c => c.id === active);

  return (
    <section id="portfolio" className="relative py-20 md:py-28" data-testid="portfolio-section">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2341e1]/25 bg-[#2341e1]/10 px-4 py-1.5">
              <Sparkles size={14} className="text-[#2341e1]" />
              <span className="font-accent text-[11px] tracking-[0.3em] text-[#2341e1]">SELECTED WORK</span>
            </div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-black text-[#0f1115] leading-tight section-underline">
              Featured Projects
            </h2>
            <p className="mt-5 max-w-xl text-[#4b5563]">
              Each project is grouped by category — every mockup matches the work it represents.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2">
            {[ALL_TAB, ...PORTFOLIO_CATEGORIES].map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                data-testid={`portfolio-tab-${c.id}`}
                className={`px-4 py-2 text-xs md:text-sm font-bold tracking-wide rounded-full transition-all border ${
                  active === c.id
                    ? "bg-[#2341e1] border-[#2341e1] text-white shadow-[0_10px_30px_-12px_rgba(35,65,225,0.6)]"
                    : "bg-white border-[#0f1115]/10 text-[#4b5563] hover:text-[#0f1115] hover:border-[#0f1115]/25"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 space-y-16">
          <AnimatePresence mode="popLayout">
            {visibleCats.map((cat) => (
              <motion.div
                key={cat.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45 }}
                data-testid={`portfolio-category-${cat.id}`}
              >
                <div className="flex items-end justify-between gap-4 mb-6">
                  <div>
                    <div className="inline-flex items-center gap-2 text-[#2341e1] font-accent tracking-[0.25em] text-xs">
                      <Layers size={14} /> {cat.name.toUpperCase()}
                    </div>
                    <h3 className="mt-1 font-display text-2xl md:text-3xl font-extrabold text-[#0f1115]">{cat.name}</h3>
                    <p className="text-sm text-[#4b5563]">{cat.blurb}</p>
                  </div>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                     className="hidden md:inline-flex text-sm font-bold text-[#2341e1] hover:underline">
                    Order This Service →
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {cat.items.map((p, i) => (
                    <motion.a
                      key={p.title}
                      href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.4, delay: (i % 6) * 0.04 }}
                      whileHover={{ y: -6 }}
                      className="group relative aspect-[4/5] overflow-hidden rounded-2xl card-soft cursor-pointer"
                      data-testid={`portfolio-item-${cat.id}-${i}`}
                    >
                      <img src={p.img} alt={p.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute inset-0 p-5 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="inline-flex w-fit rounded-full bg-white/95 border border-white/40 px-2.5 py-0.5 text-[10px] font-bold tracking-[0.2em] text-[#2341e1] uppercase">
                          {cat.name}
                        </span>
                        <h4 className="mt-2 font-heading font-bold text-white text-lg">{p.title}</h4>
                        <div className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          <Eye size={16} /> View Project
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
