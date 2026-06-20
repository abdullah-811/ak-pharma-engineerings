import { Phone, MessageCircle } from "lucide-react";
import { company } from "@/data/site";

export function StickyCTAs() {
  return (
    <div className="fixed right-4 sm:right-6 bottom-24 sm:bottom-6 z-40 flex flex-col gap-3 sm:gap-4">
      <a
        href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent("Hello AK Pharma Engineering, I'd like to enquire about your machinery.")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-brand hover:shadow-lg hover:scale-110 active:scale-95 transition-all duration-200"
      >
        <MessageCircle className="w-6 sm:w-7 h-6 sm:h-7" />
      </a>
      <a
        href={`tel:${company.phoneRaw}`}
        aria-label="Call AK Pharma Engineering"
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-brand-gradient text-white flex items-center justify-center shadow-brand hover:shadow-lg hover:scale-110 active:scale-95 transition-all duration-200"
      >
        <Phone className="w-6 sm:w-7 h-6 sm:h-7" />
      </a>
    </div>
  );
}
