import { useEffect, useState } from "react";
import { company } from "@/data/site";

export function Splash() {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("ak-splash-shown")) {
      setHidden(true);
      return;
    }
    const t = setTimeout(() => {
      sessionStorage.setItem("ak-splash-shown", "1");
      setHidden(true);
    }, 2700);
    return () => clearTimeout(t);
  }, []);

  if (hidden) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-hero-gradient flex flex-col items-center justify-center animate-splash-out">
      <div className="grid-bg absolute inset-0 opacity-20" />
      <div className="relative animate-splash-in flex flex-col items-center text-center px-6">
        <div className="rounded-full bg-white p-3 shadow-brand ring-4 ring-white/20">
          <img
            src={company.logoUrl}
            alt="AK Pharma Engineering"
            width={140}
            height={140}
            className="w-28 h-28 md:w-36 md:h-36 rounded-full object-contain"
          />
        </div>
        <h1 className="mt-6 text-white text-3xl md:text-5xl font-display font-bold tracking-tight">
          AK Pharma Engineering
        </h1>
        <p className="mt-3 text-white/80 text-sm md:text-base max-w-md">
          {company.tagline}
        </p>
        <div className="mt-8 w-40 h-1 rounded-full bg-white/15 overflow-hidden">
          <div className="h-full w-1/2 bg-white animate-[fade-up_1.8s_ease-in-out_infinite_alternate]" />
        </div>
      </div>
    </div>
  );
}
