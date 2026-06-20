import { Phone, MessageCircle } from "lucide-react";
import { company } from "@/data/site";

export function StickyCTAs() {
  return (
    <div className="fixed right-3 sm:right-4 bottom-20 sm:bottom-4 z-50 flex flex-col gap-2 sm:gap-3">
      <a
        href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent("Hello AK Pharma Engineering, I'd like to enquire about your machinery.")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-brand hover:scale-110 transition duration-200"
      >
        <MessageCircle className="w-5 sm:w-6 h-5 sm:h-6" />
      </a>
      <a
        href={`tel:${company.phoneRaw}`}
        aria-label="Call AK Pharma Engineering"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand-gradient text-white flex items-center justify-center shadow-brand hover:scale-110 transition duration-200"
      >
        <Phone className="w-5 sm:w-6 h-5 sm:h-6" />
      </a>
    </div>
  );
}
