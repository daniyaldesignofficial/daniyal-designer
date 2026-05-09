import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => Math.min(100, p + Math.random() * 14 + 4));
    }, 110);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const t = setTimeout(() => { setShow(false); onDone && onDone(); }, 450);
      return () => clearTimeout(t);
    }
  }, [progress, onDone]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          data-testid="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-[#ececec] preloader-grid"
        >
          <div className="relative flex flex-col items-center gap-8 px-6">
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-3xl bg-[#2341e1]/15 blur-3xl" />
              <div className="relative px-9 py-7 rounded-3xl bg-white border-2 border-[#2341e1]/30 shadow-[0_30px_80px_-30px_rgba(35,65,225,0.45)]">
                <div className="font-display text-6xl md:text-7xl font-black tracking-tight text-[#0f1115]">
                  D<span className="text-[#2341e1]">G</span>D
                </div>
                <div className="mt-2 font-accent text-xs tracking-[0.5em] text-[#2341e1] text-center">
                  DANIYAL · DESIGNER
                </div>
              </div>
            </motion.div>

            <div className="w-72 md:w-96">
              <div className="progress-track">
                <motion.div className="progress-fill" initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 0.2 }} />
              </div>
              <div className="mt-3 flex justify-between text-[10px] tracking-[0.3em] font-accent text-[#4b5563]">
                <span>LOADING PORTFOLIO</span>
                <span>{Math.floor(progress)}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
