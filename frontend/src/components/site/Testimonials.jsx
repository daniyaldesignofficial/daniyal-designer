import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react";
import { TESTIMONIALS } from "../../data";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIdx(i => (i + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(id);
  }, [paused]);

  const next = () => setIdx(i => (i + 1) % TESTIMONIALS.length);
  const prev = () => setIdx(i => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const visible = [
    TESTIMONIALS[idx % TESTIMONIALS.length],
    TESTIMONIALS[(idx + 1) % TESTIMONIALS.length],
    TESTIMONIALS[(idx + 2) % TESTIMONIALS.length],
  ];

  return (
    <section
      id="testimonials" className="relative py-20 md:py-28" data-testid="testimonials-section"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="font-accent text-[11px] tracking-[0.3em] text-[#2341e1]">CLIENT LOVE</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-black text-[#0f1115] leading-tight">
              Client Reviews
            </h2>
          </div>
          <div className="flex gap-2">
            <button onClick={prev} data-testid="testimonial-prev" className="h-12 w-12 rounded-full bg-white border border-[#0f1115]/10 hover:border-[#2341e1] flex items-center justify-center text-[#0f1115]"><ChevronLeft /></button>
            <button onClick={next} data-testid="testimonial-next" className="h-12 w-12 rounded-full bg-white border border-[#0f1115]/10 hover:border-[#2341e1] flex items-center justify-center text-[#0f1115]"><ChevronRight /></button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {visible.map((tm, i) => (
              <motion.div
                key={`${idx}-${i}`}
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative rounded-2xl card-soft p-6 md:p-7"
                data-testid={`testimonial-card-${i}`}
              >
                <Quote className="absolute -top-3 -right-3 text-[#2341e1]/15" size={56} />
                <div className="flex gap-0.5">
                  {Array.from({ length: tm.rating }).map((_, n) => (
                    <Star key={n} size={16} className="fill-[#facc15] text-[#facc15]" />
                  ))}
                </div>
                <p className="mt-4 text-[#0f1115]/85 leading-relaxed text-[15px] md:text-base min-h-[100px]">“{tm.text}”</p>
                <div className="mt-6 pt-5 border-t border-[#0f1115]/10 flex items-center gap-3">
                  <img src={tm.avatar} alt={tm.name} className="h-12 w-12 rounded-full ring-2 ring-[#2341e1]/30 object-cover" />
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5 font-heading font-bold text-[#0f1115]">
                      {tm.name} <BadgeCheck size={16} className="text-[#2341e1]" />
                    </div>
                    <div className="text-xs text-[#4b5563] flex items-center gap-1.5">
                      {tm.role} · <span className="text-base leading-none">{tm.country}</span> {tm.flag}
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-1 text-[10px] font-bold tracking-wider text-emerald-700">
                    Verified Client
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i} onClick={() => setIdx(i)} aria-label={`Go to slide ${i + 1}`}
              data-testid={`testimonial-dot-${i}`}
              className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-[#2341e1]" : "w-2 bg-[#0f1115]/20 hover:bg-[#0f1115]/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
