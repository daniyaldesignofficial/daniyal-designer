import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles } from "lucide-react";
import { BRAND, STATS, WHATSAPP_URL } from "../../data";

function Counter({ to, suffix = "", duration = 1.6 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf, start;
    const step = (ts) => {
      if (!start) start = ts;
      const t = Math.min(1, (ts - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.floor(eased * to));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return <span ref={ref}>{val}{suffix}</span>;
}

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28" data-testid="about-section">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-[#2341e1]/10 blur-3xl" aria-hidden="true" />
            <div className="relative rounded-[2rem] overflow-hidden card-soft">
              <img src={BRAND.aboutImage} alt="Daniyal at his design setup" className="w-full h-[460px] object-cover" />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/85 via-black/30 to-transparent">
                <div className="font-accent text-[11px] tracking-[0.3em] text-white/85">DANIYAL</div>
                <div className="mt-1 font-display text-2xl font-extrabold text-white">Graphic Designer</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2341e1]/25 bg-[#2341e1]/10 px-4 py-1.5">
              <Sparkles size={14} className="text-[#2341e1]" />
              <span className="font-accent text-[11px] tracking-[0.3em] text-[#2341e1]">ABOUT ME</span>
            </div>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-black text-[#0f1115] leading-tight">
              Who Is Daniyal?
            </h2>
            <p className="mt-6 max-w-2xl text-base md:text-lg text-[#4b5563] leading-relaxed">
              Daniyal is a professional graphic and website designer helping businesses create powerful visual identities and premium digital experiences. Specialized in branding, social media design, website UI/UX, resume writing, and LinkedIn optimization.
            </p>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="rounded-2xl card-soft p-5"
                  data-testid={`stat-${s.label.replace(/\s+/g,"-").toLowerCase()}`}
                >
                  <div className="font-display text-3xl md:text-4xl font-black text-[#0f1115]">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-xs md:text-sm text-[#4b5563]">{s.label}</div>
                </motion.div>
              ))}
            </div>

            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-testid="about-cta"
               className="mt-10 btn-primary btn-glow">
              Hire Me Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
