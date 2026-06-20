import { Phone, MessageCircle } from "lucide-react";
import { company } from "@/data/site";

export function StickyCTAs() {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3">
      <a
        href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent("Hello AK Pharma Engineering, I'd like to enquire about your machinery.")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-13 h-13 md:w-14 md:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-brand hover:scale-105 transition"
        style={{ width: 52, height: 52 }}
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <a
        href={`tel:${company.phoneRaw}`}
        aria-label="Call AK Pharma Engineering"
        className="rounded-full bg-brand-gradient text-white flex items-center justify-center shadow-brand hover:scale-105 transition"
        style={{ width: 52, height: 52 }}
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
