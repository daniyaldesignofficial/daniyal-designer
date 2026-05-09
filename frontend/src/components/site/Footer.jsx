import { Instagram, Facebook, MessageCircle, Mail } from "lucide-react";
import { BRAND, CONTACT_INFO, WHATSAPP_URL } from "../../data";

export default function Footer() {
  const year = new Date().getFullYear();
  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <footer className="relative pt-14 pb-8 border-t border-[#0f1115]/10" data-testid="footer">
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <button onClick={goTop} data-testid="footer-logo" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-[#2341e1]/30 overflow-hidden">
            <img src={BRAND.charLogo} alt="Daniyal" className="h-9 w-9 object-contain" />
          </span>
          <span className="font-heading font-extrabold text-[#0f1115] text-lg">DANIYAL<span className="text-[#2341e1]">.</span></span>
        </button>
        <div className="flex gap-3">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-testid="footer-wa" className="h-10 w-10 rounded-full bg-white border border-[#0f1115]/10 hover:border-[#25D366] hover:text-[#25D366] flex items-center justify-center text-[#0f1115] transition"><MessageCircle size={16} /></a>
          <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" data-testid="footer-ig" className="h-10 w-10 rounded-full bg-white border border-[#0f1115]/10 hover:border-pink-500 hover:text-pink-500 flex items-center justify-center text-[#0f1115] transition"><Instagram size={16} /></a>
          <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" data-testid="footer-fb" className="h-10 w-10 rounded-full bg-white border border-[#0f1115]/10 hover:border-[#2341e1] hover:text-[#2341e1] flex items-center justify-center text-[#0f1115] transition"><Facebook size={16} /></a>
          <a href={`mailto:${CONTACT_INFO.email}`} data-testid="footer-mail" className="h-10 w-10 rounded-full bg-white border border-[#0f1115]/10 hover:border-[#2341e1] hover:text-[#2341e1] flex items-center justify-center text-[#0f1115] transition"><Mail size={16} /></a>
        </div>
      </div>
      <div className="mt-6 mx-auto max-w-7xl px-6 md:px-10 text-center text-xs text-[#4b5563]">
        © {year} Daniyal Graphic Designer · All Rights Reserved. <span className="opacity-60"> · Kingdom of Bahrain</span>
      </div>
    </footer>
  );
}
