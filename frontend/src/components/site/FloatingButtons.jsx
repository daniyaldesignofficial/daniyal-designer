import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowUp } from "lucide-react";
import { WHATSAPP_URL } from "../../data";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-testid="floating-whatsapp"
         className="group fixed bottom-6 right-6 z-[60] flex items-center gap-2">
        <span className="pointer-events-none mr-1 hidden md:inline-flex items-center rounded-full bg-[#0f1115] px-3 py-1.5 text-xs font-bold text-white opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all">
          Chat With Daniyal
        </span>
        <span className="relative">
          <span className="absolute -top-1 -right-1 z-10 h-3 w-3 rounded-full bg-emerald-400 border-2 border-[#ececec]" />
          <span className="relative wa-pulse wa-vibrate flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_40px_-10px_rgba(37,211,102,0.6)]">
            <MessageCircle size={26} />
          </span>
        </span>
      </a>
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            data-testid="scroll-top" aria-label="Scroll to top"
            className="fixed bottom-6 left-6 z-[60] flex h-12 w-12 items-center justify-center rounded-full bg-[#2341e1] text-white shadow-[0_18px_40px_-10px_rgba(35,65,225,0.7)]"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
