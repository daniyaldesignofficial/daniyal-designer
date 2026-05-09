import Marquee from "react-fast-marquee";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { TRUSTED_FLAGS, ACHIEVEMENTS } from "../../data";

function Bar({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [w, setW] = useState(0);
  useEffect(() => { if (inView) setW(value); }, [inView, value]);
  return (
    <div ref={ref} className="progress-track">
      <motion.div className="progress-fill" initial={{ width: 0 }} animate={{ width: `${w}%` }} transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }} />
    </div>
  );
}

export default function TrustedBy() {
  return (
    <section className="relative py-20 md:py-28" data-testid="trusted-section">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center">
          <span className="font-accent text-[11px] tracking-[0.3em] text-[#2341e1]">TRUSTED BY CLIENTS WORLDWIDE</span>
        </div>
        <div className="mt-8 marquee-fade">
          <Marquee speed={42} gradient={false} pauseOnHover>
            {TRUSTED_FLAGS.map((flag, i) => (
              <div key={i} className="mx-3 flex items-center gap-3 rounded-2xl bg-white border border-[#0f1115]/10 px-5 py-3">
                <span className="text-3xl">{flag}</span>
                <span className="font-accent tracking-[0.2em] text-[#4b5563] text-sm">CLIENT</span>
              </div>
            ))}
          </Marquee>
        </div>

        <div className="mt-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="font-accent text-[11px] tracking-[0.3em] text-[#2341e1]">NUMBERS</span>
            <h3 className="mt-3 font-display text-3xl md:text-5xl font-black text-[#0f1115] leading-tight">Achievements & Track Record</h3>
          </div>
          <div className="space-y-5">
            {ACHIEVEMENTS.map((a, i) => (
              <div key={a.label} data-testid={`achievement-${i}`}>
                <div className="flex justify-between text-sm font-bold mb-2">
                  <span className="text-[#0f1115]">{a.label}</span>
                  <span className="text-[#2341e1]">{a.value}%</span>
                </div>
                <Bar value={a.value} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
