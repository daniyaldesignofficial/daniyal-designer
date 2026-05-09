import { motion } from "framer-motion";
import { Zap, Lightbulb, RefreshCw, Globe2 } from "lucide-react";
import { WHY } from "../../data";

const ICONS = { Zap, Lightbulb, RefreshCw, Globe2 };

export default function WhyChoose() {
  return (
    <section className="relative py-20 md:py-28" data-testid="why-section">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-accent text-[11px] tracking-[0.3em] text-[#2341e1]">WHY ME</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-black text-[#0f1115] leading-tight">
            Why Clients Choose Me
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY.map((it, i) => {
            const Icon = ICONS[it.icon];
            return (
              <motion.div
                key={it.t}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl card-soft p-6 text-center"
                data-testid={`why-item-${i}`}
              >
                <div className="mx-auto h-14 w-14 rounded-2xl bg-[#2341e1]/10 border border-[#2341e1]/30 flex items-center justify-center">
                  <Icon className="text-[#2341e1]" />
                </div>
                <h3 className="mt-5 font-heading font-bold text-[#0f1115] text-xl">{it.t}</h3>
                <p className="mt-2 text-sm text-[#4b5563] leading-relaxed">{it.d}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
