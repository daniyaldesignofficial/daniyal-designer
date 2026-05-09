import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Mail, MessageCircle, Instagram, Facebook, MapPin, Send, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { CONTACT_INFO, WHATSAPP_URL } from "../../data";
import { toast } from "sonner";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const SERVICE_OPTIONS = [
  "Logo Design", "Brand Identity", "Website Design", "Social Media Design",
  "Resume Writing", "LinkedIn Optimization", "Menu Design", "Company Profile",
  "Documentation", "Other"
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", service: SERVICE_OPTIONS[0], message: "" });
  const [status, setStatus] = useState("idle");

  const onChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      await axios.post(`${API}/contact`, form);
      setStatus("success");
      toast.success("Message sent! I'll reply within 24 hours.");
      const text = encodeURIComponent(`Hi Daniyal, I'm ${form.name}. I need ${form.service}. ${form.message}`);
      setTimeout(() => window.open(`${WHATSAPP_URL}?text=${text}`, "_blank"), 700);
      setForm({ name: "", email: "", service: SERVICE_OPTIONS[0], message: "" });
      setTimeout(() => setStatus("idle"), 3500);
    } catch (err) {
      console.error(err);
      setStatus("error");
      toast.error("Something went wrong. Please try WhatsApp.");
      setTimeout(() => setStatus("idle"), 3500);
    }
  };

  const items = [
    { icon: MessageCircle, label: "WhatsApp", value: CONTACT_INFO.whatsapp_display, href: WHATSAPP_URL, testid: "contact-wa" },
    { icon: Mail,          label: "Email",    value: CONTACT_INFO.email,            href: `mailto:${CONTACT_INFO.email}`, testid: "contact-email" },
    { icon: Instagram,     label: "Instagram",value: "@daniyaldesignerofficial",    href: CONTACT_INFO.instagram, testid: "contact-ig" },
    { icon: Facebook,      label: "Facebook", value: "Daniyal Designer Official",   href: CONTACT_INFO.facebook, testid: "contact-fb" },
    { icon: MapPin,        label: "Location", value: CONTACT_INFO.location,         href: "https://maps.google.com/?q=Bahrain", testid: "contact-loc" },
  ];

  return (
    <section id="contact" className="relative py-20 md:py-28" data-testid="contact-section">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#2341e1]/25 bg-[#2341e1]/10 px-4 py-1.5">
            <Sparkles size={14} className="text-[#2341e1]" />
            <span className="font-accent text-[11px] tracking-[0.3em] text-[#2341e1]">GET IN TOUCH</span>
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-black text-[#0f1115] leading-tight">
            Let's Work Together
          </h2>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-3">
            {items.map((it, i) => {
              const Icon = it.icon;
              return (
                <motion.a
                  key={it.label}
                  href={it.href} target="_blank" rel="noopener noreferrer" data-testid={it.testid}
                  initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }} whileHover={{ x: 6 }}
                  className="group flex items-center gap-4 rounded-2xl card-soft p-5"
                >
                  <div className="h-12 w-12 rounded-xl bg-[#2341e1]/10 border border-[#2341e1]/30 flex items-center justify-center group-hover:rotate-6 transition-transform">
                    <Icon className="text-[#2341e1]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-accent text-[10px] tracking-[0.3em] text-[#4b5563]">{it.label.toUpperCase()}</div>
                    <div className="font-heading font-bold text-[#0f1115] truncate">{it.value}</div>
                  </div>
                </motion.a>
              );
            })}
          </div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-3xl bg-white p-6 md:p-8 border border-[#2341e1]/15 shadow-[0_30px_60px_-30px_rgba(15,17,21,0.18)]"
            data-testid="contact-form"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold tracking-wider text-[#4b5563] mb-2">YOUR NAME</label>
                <input
                  name="name" value={form.name} onChange={onChange} required data-testid="contact-input-name"
                  className="w-full rounded-xl bg-[#f7f7f9] border border-[#0f1115]/10 focus:border-[#2341e1] focus:ring-2 focus:ring-[#2341e1]/20 outline-none px-4 py-3 text-[#0f1115] placeholder-[#0f1115]/30 transition"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-xs font-bold tracking-wider text-[#4b5563] mb-2">YOUR EMAIL</label>
                <input
                  name="email" type="email" value={form.email} onChange={onChange} required data-testid="contact-input-email"
                  className="w-full rounded-xl bg-[#f7f7f9] border border-[#0f1115]/10 focus:border-[#2341e1] focus:ring-2 focus:ring-[#2341e1]/20 outline-none px-4 py-3 text-[#0f1115] placeholder-[#0f1115]/30 transition"
                  placeholder="you@email.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-xs font-bold tracking-wider text-[#4b5563] mb-2">SERVICE NEEDED</label>
              <select
                name="service" value={form.service} onChange={onChange} data-testid="contact-input-service"
                className="w-full rounded-xl bg-[#f7f7f9] border border-[#0f1115]/10 focus:border-[#2341e1] focus:ring-2 focus:ring-[#2341e1]/20 outline-none px-4 py-3 text-[#0f1115] transition"
              >
                {SERVICE_OPTIONS.map((s) => (<option key={s}>{s}</option>))}
              </select>
            </div>
            <div className="mt-4">
              <label className="block text-xs font-bold tracking-wider text-[#4b5563] mb-2">YOUR MESSAGE</label>
              <textarea
                name="message" rows={5} value={form.message} onChange={onChange} required data-testid="contact-input-message"
                className="w-full rounded-xl bg-[#f7f7f9] border border-[#0f1115]/10 focus:border-[#2341e1] focus:ring-2 focus:ring-[#2341e1]/20 outline-none px-4 py-3 text-[#0f1115] placeholder-[#0f1115]/30 transition resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="submit" disabled={status === "sending"} data-testid="contact-submit"
                className="btn-primary btn-glow disabled:opacity-60"
              >
                {status === "sending" ? <Loader2 className="animate-spin" size={18} /> :
                 status === "success" ? <CheckCircle2 size={18} /> : <Send size={18} />}
                {status === "sending" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
              </button>
              <a
                href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-testid="contact-big-wa"
                className="wa-vibrate inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 font-heading font-bold text-white shadow-[0_16px_40px_-16px_rgba(37,211,102,0.55)] hover:shadow-[0_24px_50px_-18px_rgba(37,211,102,0.7)] transition-all"
              >
                <MessageCircle size={18} /> Chat With Me On WhatsApp
              </a>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
