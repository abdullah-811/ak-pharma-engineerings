import { company } from "@/data/site";

interface LogoProps {
  size?: number;
  showText?: boolean;
  variant?: "light" | "dark";
}

export function Logo({ size = 44, showText = true, variant = "dark" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-foreground";
  const subColor = variant === "light" ? "text-white/70" : "text-muted-foreground";
  return (
    <div className="flex items-center gap-3">
      <div
        className="rounded-full bg-white shadow-card ring-1 ring-black/5 overflow-hidden flex items-center justify-center shrink-0"
        style={{ width: size, height: size }}
      >
        <img
          src={company.logoUrl}
          alt="AK Pharma Engineering logo"
          width={size}
          height={size}
          className="object-contain w-full h-full"
        />
      </div>
      {showText && (
        <div className="leading-tight">
          <div className={`font-display font-bold tracking-tight ${textColor}`} style={{ fontSize: size * 0.36 }}>
            AK Pharma Engineering
          </div>
          <div className={`text-[10px] uppercase tracking-[0.18em] ${subColor}`}>
            Pharmaceutical Machinery
          </div>
        </div>
      )}
    </div>
  );
}
