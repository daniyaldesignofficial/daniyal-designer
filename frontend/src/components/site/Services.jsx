import { motion } from "framer-motion";
import { ArrowUpRight, PenTool, Palette, Monitor, Instagram, FileText, Linkedin, UtensilsCrossed, BookOpen, Sparkles } from "lucide-react";
import { SERVICES, WHATSAPP_URL } from "../../data";

const ICONS = { PenTool, Palette, Monitor, Instagram, FileText, Linkedin, UtensilsCrossed, BookOpen };

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28" data-testid="services-section">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#2341e1]/25 bg-[#2341e1]/10 px-4 py-1.5">
            <Sparkles size={14} className="text-[#2341e1]" />
            <span className="font-accent text-[11px] tracking-[0.3em] text-[#2341e1]">WHAT I DO</span>
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-black text-[#0f1115] leading-tight section-underline">
            My Services
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon] || Sparkles;
            return (
              <motion.a
                key={s.id}
                href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
                whileHover={{ y: -8 }}
                className="group rounded-2xl card-soft p-6 flex flex-col gap-4 cursor-pointer"
                data-testid={`service-${s.id}`}
              >
                <div className="flex items-center justify-between">
                  <div className="relative h-12 w-12 rounded-xl bg-[#2341e1]/10 border border-[#2341e1]/30 flex items-center justify-center group-hover:rotate-6 transition-transform">
                    <Icon size={22} className="text-[#2341e1]" />
                  </div>
                  <ArrowUpRight size={20} className="text-[#0f1115]/30 group-hover:text-[#2341e1] group-hover:rotate-12 transition-all" />
                </div>
                <h3 className="font-heading font-bold text-[#0f1115] text-xl leading-tight">{s.title}</h3>
                <p className="text-sm text-[#4b5563] leading-relaxed">{s.desc}</p>
                <div className="mt-auto pt-2 text-[#2341e1] text-xs font-bold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More →
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
