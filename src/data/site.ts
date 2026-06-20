import logoAsset from "@/assets/ak-logo.asset.json";

export const company = {
  name: "AK Pharma Engineering",
  short: "AK Pharma",
  tagline: "Pharmaceutical Engineering & Machinery Solutions",
  ceo: "M. Khizar Hayyat",
  management: "M. Asif",
  address:
    "Plot No. P-51, Street #10, Taj Colony, Millat Road, Near Haq Baho Chowk, Faisalabad 37000, Pakistan",
  city: "Faisalabad, Pakistan",
  phone: "+92 300 7685906",
  phoneRaw: "+923007685906",
  whatsapp: "923007685906",
  email: "pharmaengineeringpk@gmail.com",
  logoUrl: logoAsset.url,
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/ceo-message", label: "CEO Message" },
  { to: "/vision-mission", label: "Vision & Mission" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/quality", label: "Quality" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export type ProductSlug =
  | "alu-alu-blister-dpp-260"
  | "alu-pvc-blister-dpp-160"
  | "sachet-packing-machine"
  | "strip-packing-machine"
  | "tablet-press-machine"
  | "rotary-tablet-machine"
  | "blister-machine-dies"
  | "alu-alu-dies"
  | "alu-pvc-dies"
  | "rotary-punches"
  | "water-cooling-chillers"
  | "expiry-date-coding"
  | "pharmaceutical-tooling"
  | "custom-engineering";

export interface Product {
  slug: ProductSlug;
  name: string;
  short: string;
  image: string;
  overview: string;
  features: string[];
  benefits: string[];
  specs: { label: string; value: string }[];
  applications: string[];
  industries: string[];
  maintenance: string[];
}

import alualu from "@/assets/prod-alualu.jpg";
import alupvc from "@/assets/prod-alupvc.jpg";
import sachet from "@/assets/prod-sachet.jpg";
import strip from "@/assets/prod-strip.jpg";
import tablet from "@/assets/prod-tablet.jpg";
import dies from "@/assets/prod-dies.jpg";
import punches from "@/assets/prod-punches.jpg";
import chiller from "@/assets/prod-chiller.jpg";
import coding from "@/assets/prod-coding.jpg";

const commonMaint = [
  "Daily cleaning of contact parts with food-grade solvents",
  "Weekly inspection of seals, gaskets and pneumatic lines",
  "Monthly lubrication of moving components per manual",
  "Quarterly calibration of temperature and pressure sensors",
  "Annual overhaul and certification by AK Pharma service team",
];

export const products: Product[] = [
  {
    slug: "alu-alu-blister-dpp-260",
    name: "Alu Alu Blister Packing Machine DPP-260",
    short: "High-output cold-form aluminum blister line for moisture-sensitive tablets and capsules.",
    image: alualu,
    overview:
      "The DPP-260 is a fully automatic Alu-Alu blister packing machine designed for cold forming of hard-tempered aluminum foil. Engineered for high-barrier pharmaceutical packaging, it delivers superior protection against moisture, oxygen and light for sensitive APIs.",
    features: [
      "PLC control with 7\" HMI touchscreen",
      "Servo-driven indexing for ±0.1 mm registration",
      "Quick-change forming and sealing dies",
      "Stainless steel SS304/SS316 contact parts",
      "Integrated batch coding and embossing station",
      "Automatic foil tension and temperature control",
    ],
    benefits: [
      "Up to 30% lower foil consumption vs conventional designs",
      "GMP-compliant tool-free changeover in under 20 minutes",
      "Consistent seal integrity validated to ASTM F1929",
      "Reduced operator intervention and downtime",
    ],
    specs: [
      { label: "Max forming area", value: "240 × 130 mm" },
      { label: "Forming depth", value: "Up to 12 mm" },
      { label: "Output", value: "30 – 60 cycles / minute" },
      { label: "Foil specification", value: "Alu 0.10 mm + OPA 0.025 mm + PVC 0.06 mm" },
      { label: "Compressed air", value: "0.6 MPa, 0.6 m³/min" },
      { label: "Power supply", value: "3-phase 380 V / 50 Hz, 8.5 kW" },
      { label: "Machine dimensions", value: "3650 × 720 × 1700 mm" },
      { label: "Net weight", value: "1600 kg" },
    ],
    applications: ["Tablets", "Hard capsules", "Soft gelatin capsules", "Effervescent products"],
    industries: ["Pharmaceuticals", "Nutraceuticals", "Veterinary medicine"],
    maintenance: commonMaint,
  },
  {
    slug: "alu-pvc-blister-dpp-160",
    name: "Alu PVC Blister Packing Machine DPP-160",
    short: "Compact, economical Alu-PVC blister line for small to medium pharmaceutical batches.",
    image: alupvc,
    overview:
      "The DPP-160 is a precision Alu-PVC blister packing machine offering an excellent balance of footprint, output and reliability. Ideal for contract manufacturers and growing pharmaceutical units producing standard PVC/PVDC blisters.",
    features: [
      "Flat-plate sealing system for uniform pressure",
      "Thermo-controlled forming station",
      "Photoelectric registration for printed foil",
      "Servo cutting with adjustable stroke",
      "FDA-grade contact surfaces",
    ],
    benefits: [
      "Low investment, fast ROI for SME pharma units",
      "Easy operator training",
      "Stable performance with minimal scrap rate",
      "Compatible with most standard die formats",
    ],
    specs: [
      { label: "Max forming area", value: "150 × 110 mm" },
      { label: "Forming depth", value: "Up to 10 mm" },
      { label: "Output", value: "25 – 45 cycles / minute" },
      { label: "Foil specification", value: "PVC 0.15 – 0.5 mm, Alu 0.02 mm" },
      { label: "Power supply", value: "3-phase 380 V / 50 Hz, 4.5 kW" },
      { label: "Machine dimensions", value: "2500 × 600 × 1600 mm" },
      { label: "Net weight", value: "900 kg" },
    ],
    applications: ["Tablets", "Capsules", "Lozenges"],
    industries: ["Pharmaceuticals", "Herbal medicine", "Confectionery"],
    maintenance: commonMaint,
  },
  {
    slug: "sachet-packing-machine",
    name: "Sachet Packing Machine",
    short: "Multi-lane VFFS sachet machine for powders, granules and liquids.",
    image: sachet,
    overview:
      "A versatile vertical form-fill-seal sachet packaging machine engineered for hygienic dosing of pharmaceutical powders, granules and viscous liquids into four-side sealed sachets.",
    features: [
      "2 to 8 lane configurations available",
      "Volumetric, auger or piston dosing",
      "Servo-driven film transport",
      "Hot air or ultrasonic sealing options",
      "Tool-free roll changeover",
    ],
    benefits: [
      "Up to 480 sachets/minute on 8-lane variant",
      "Hermetic seal protects product integrity",
      "Reduced film waste with edge-to-edge cutting",
      "21 CFR Part 11 ready data logging",
    ],
    specs: [
      { label: "Sachet size range", value: "30 × 40 mm to 90 × 120 mm" },
      { label: "Fill volume", value: "0.5 – 30 g" },
      { label: "Output", value: "60 – 480 sachets / min" },
      { label: "Film", value: "Aluminum laminate, paper-poly, PET-AL-PE" },
      { label: "Power supply", value: "3-phase 380 V / 50 Hz, 6 kW" },
    ],
    applications: ["ORS powders", "Granules", "Syrups", "Suspensions"],
    industries: ["Pharmaceuticals", "Nutraceuticals", "Cosmetics"],
    maintenance: commonMaint,
  },
  {
    slug: "strip-packing-machine",
    name: "Strip Packing Machine",
    short: "High-speed heat-sealed strip packaging for tablets and capsules.",
    image: strip,
    overview:
      "Robust four-side heat-sealed strip packaging machine for tablets and capsules. Suitable for pharmaceuticals requiring individual dose protection in moisture-resistant aluminum foil strips.",
    features: [
      "Knurled roller heat-sealing system",
      "Automatic feeding from multiple hoppers",
      "Digital temperature controllers per roller",
      "Servo-driven cutting and perforation",
      "Reject station for incomplete strips",
    ],
    benefits: [
      "Excellent for high-volume OTC and hospital packs",
      "Long-life rollers with hardened tooth profile",
      "Easy integration with cartoner downstream",
    ],
    specs: [
      { label: "Strip width", value: "Up to 160 mm" },
      { label: "Pockets per strip", value: "4 – 12 (configurable)" },
      { label: "Output", value: "60 – 120 strokes / minute" },
      { label: "Power supply", value: "3-phase 380 V / 50 Hz, 5 kW" },
    ],
    applications: ["Tablets", "Capsules", "Lozenges", "Suppositories"],
    industries: ["Pharmaceuticals", "Hospital supply", "OTC manufacturing"],
    maintenance: commonMaint,
  },
  {
    slug: "tablet-press-machine",
    name: "Single Punch Tablet Press Machine",
    short: "Laboratory and pilot-scale single-station tablet compression press.",
    image: tablet,
    overview:
      "A precision single-punch tablet press designed for R&D, formulation development and small-batch production. Built with hardened components for repeatable compression at controlled hardness.",
    features: [
      "Adjustable filling depth and pressure",
      "Eccentric drive with overload protection",
      "Stainless steel turret and feeder",
      "Easy disassembly for cleaning",
    ],
    benefits: [
      "Ideal for pilot batches and trial runs",
      "Low noise, low vibration operation",
      "Compatible with B and D type tooling",
    ],
    specs: [
      { label: "Max tablet diameter", value: "Up to 20 mm" },
      { label: "Max compression force", value: "60 kN" },
      { label: "Output", value: "Up to 80 tablets / minute" },
      { label: "Power supply", value: "1-phase 220 V / 50 Hz, 1.5 kW" },
    ],
    applications: ["R&D batches", "Pilot trials", "Effervescent tablets"],
    industries: ["Pharmaceutical R&D", "Universities", "Contract labs"],
    maintenance: commonMaint,
  },
  {
    slug: "rotary-tablet-machine",
    name: "Rotary Tablet Press Machine",
    short: "High-output multi-station rotary press for commercial tablet manufacturing.",
    image: tablet,
    overview:
      "Multi-station rotary tablet press engineered for continuous, high-volume pharmaceutical tablet production. Available in 17, 27, 35 and 45 station configurations with pre-compression and main compression rollers.",
    features: [
      "Pre-compression and main compression rollers",
      "Force feeder for uniform die filling",
      "Touch HMI with recipe management",
      "Automatic lubrication system",
      "Sound-attenuating safety enclosure",
    ],
    benefits: [
      "Output up to 230,000 tablets per hour",
      "Excellent weight and hardness uniformity",
      "GMP compliant cGMP design",
      "Reduced changeover times",
    ],
    specs: [
      { label: "Stations", value: "17 / 27 / 35 / 45" },
      { label: "Max compression force", value: "100 kN" },
      { label: "Max tablet diameter", value: "25 mm" },
      { label: "Output", value: "Up to 230,000 tablets / hour" },
      { label: "Power supply", value: "3-phase 380 V / 50 Hz, 7.5 kW" },
    ],
    applications: ["Commercial tablet production", "Multi-layer tablets"],
    industries: ["Pharmaceuticals", "Nutraceuticals", "Veterinary"],
    maintenance: commonMaint,
  },
  {
    slug: "blister-machine-dies",
    name: "Blister Machine Dies",
    short: "Custom precision dies for Alu-Alu and Alu-PVC blister machines.",
    image: dies,
    overview:
      "AK Pharma Engineering manufactures precision forming, sealing and cutting dies for all major blister packaging machine brands. Each die is CNC machined and hand-finished to micron tolerances.",
    features: [
      "CNC machined from hardened tool steel",
      "Mirror-polished forming cavities",
      "Reverse-engineered to match existing machines",
      "Heat-treated for long service life",
    ],
    benefits: [
      "Drop-in replacement for OEM tooling",
      "Faster lead times than imported tools",
      "Lower total cost of ownership",
    ],
    specs: [
      { label: "Material", value: "Tool steel, SS420, brass options" },
      { label: "Surface finish", value: "Ra < 0.4 μm" },
      { label: "Compatible machines", value: "DPP series, IMA, Uhlmann formats" },
    ],
    applications: ["Forming", "Sealing", "Cutting / perforation"],
    industries: ["Pharmaceutical packaging"],
    maintenance: [
      "Clean after every shift to prevent residue build-up",
      "Re-polish sealing surface annually",
      "Inspect for wear at every changeover",
    ],
  },
  {
    slug: "alu-alu-dies",
    name: "Alu Alu Dies",
    short: "Cold-form aluminum forming dies for high-barrier blister packs.",
    image: dies,
    overview:
      "Specialized Alu-Alu cold-forming dies engineered to deform hard-tempered aluminum foil without micro-cracks. Critical for moisture-sensitive products requiring high-barrier protection.",
    features: [
      "Optimized punch geometry for deep draws",
      "Graduated forming stages",
      "Hardened, polished punches",
    ],
    benefits: [
      "Crack-free deep cavities up to 12 mm",
      "Consistent wall thickness",
      "Extended foil life and reduced scrap",
    ],
    specs: [
      { label: "Cavity depth", value: "Up to 12 mm" },
      { label: "Materials handled", value: "Cold-form Alu laminate 145 μm" },
    ],
    applications: ["Moisture-sensitive APIs", "Hygroscopic powders", "Oxygen-sensitive products"],
    industries: ["Pharmaceuticals", "Diagnostics"],
    maintenance: [
      "Lubricate punch guides weekly",
      "Inspect cavity polish monthly",
      "Recondition annually",
    ],
  },
  {
    slug: "alu-pvc-dies",
    name: "Alu PVC Dies",
    short: "Thermoformed PVC blister dies with high-precision sealing geometry.",
    image: dies,
    overview:
      "Precision Alu-PVC dies engineered for thermoforming PVC and PVDC films. Designed for consistent cavity geometry and reliable seal integrity across production runs.",
    features: [
      "Vented forming cavities",
      "Knurled sealing pattern options",
      "Modular cassette mounting",
    ],
    benefits: [
      "Reduced cycle times",
      "Improved seal strength",
      "Easy operator changeover",
    ],
    specs: [
      { label: "Cavity depth", value: "Up to 10 mm" },
      { label: "Materials handled", value: "PVC 0.15 – 0.5 mm" },
    ],
    applications: ["Standard tablet and capsule packs"],
    industries: ["Pharmaceuticals", "OTC", "Nutraceuticals"],
    maintenance: [
      "Clean vents weekly with compressed air",
      "Polish sealing surface as needed",
    ],
  },
  {
    slug: "rotary-punches",
    name: "Rotary Tablet Punches & Dies",
    short: "B and D tooling for rotary tablet presses, custom shapes and engravings.",
    image: punches,
    overview:
      "Complete sets of rotary tablet punches and dies manufactured per TSM and EU standards. Available in B-type and D-type configurations with custom engravings, logos and break lines.",
    features: [
      "TSM and EU standard compliant",
      "Custom embossing and bisect options",
      "Hardened DC53 / S7 tool steel",
      "Mirror-polished cup surfaces",
    ],
    benefits: [
      "Extended tooling life",
      "Reduced sticking and capping",
      "Sharp, legible logos and identifiers",
    ],
    specs: [
      { label: "Standards", value: "TSM, EU, B-type, D-type" },
      { label: "Shapes", value: "Round, oval, oblong, custom" },
      { label: "Material", value: "DC53, S7, S2 tool steel" },
    ],
    applications: ["All rotary tablet presses"],
    industries: ["Pharmaceuticals", "Nutraceuticals"],
    maintenance: [
      "Store in oiled punch racks",
      "Inspect tips under magnification weekly",
      "Re-polish or replace as wear is detected",
    ],
  },
  {
    slug: "water-cooling-chillers",
    name: "Water Cooling Chillers",
    short: "Industrial process chillers for blister machines, presses and tooling cooling.",
    image: chiller,
    overview:
      "Compact, energy-efficient water cooling chillers sized to maintain precise temperatures for pharmaceutical machinery. Reliable cooling extends tooling life and stabilizes process quality.",
    features: [
      "Scroll compressor with R410A refrigerant",
      "Stainless steel water tank",
      "Microprocessor temperature controller",
      "Low-water and high-pressure alarms",
    ],
    benefits: [
      "Stable ±0.5 °C process water temperature",
      "Energy-efficient operation",
      "Long compressor service life",
    ],
    specs: [
      { label: "Cooling capacity", value: "3 – 30 kW" },
      { label: "Temperature range", value: "5 – 35 °C" },
      { label: "Power supply", value: "3-phase 380 V / 50 Hz" },
    ],
    applications: ["Blister machines", "Tablet presses", "Tooling cooling"],
    industries: ["Pharmaceuticals", "Plastics", "Electronics"],
    maintenance: [
      "Clean condenser fins monthly",
      "Check refrigerant pressure quarterly",
      "Replace water filter every 6 months",
    ],
  },
  {
    slug: "expiry-date-coding",
    name: "Expiry Date Coding Systems",
    short: "Inkjet and thermal transfer coders for batch, MRP and expiry printing.",
    image: coding,
    overview:
      "Reliable on-line printing solutions for batch numbers, manufacturing dates, expiry dates and pricing on pharmaceutical packaging. Compatible with blister, strip, sachet and carton lines.",
    features: [
      "CIJ continuous inkjet, TIJ and TTO options",
      "Pharma-grade ethanol-resistant inks",
      "Encoder-driven for variable line speed",
      "Easy integration into existing lines",
    ],
    benefits: [
      "Sharp, legible codes that pass vision inspection",
      "Low maintenance and ink consumption",
      "Full traceability for serialization",
    ],
    specs: [
      { label: "Print speed", value: "Up to 300 m/min" },
      { label: "Character height", value: "1 – 12 mm" },
      { label: "Power supply", value: "1-phase 220 V / 50 Hz" },
    ],
    applications: ["Blister foils", "Strip foils", "Cartons", "Labels"],
    industries: ["Pharmaceuticals", "Cosmetics", "Food"],
    maintenance: [
      "Daily print head purge",
      "Weekly ink and solvent top-up",
      "Quarterly nozzle inspection",
    ],
  },
  {
    slug: "pharmaceutical-tooling",
    name: "Pharmaceutical Tooling",
    short: "Full range of replacement parts, change parts and precision tooling.",
    image: punches,
    overview:
      "AK Pharma Engineering supplies and manufactures a complete catalog of pharmaceutical change parts, spares and precision tooling for blister, strip, sachet, capsule and tablet lines.",
    features: [
      "Reverse engineering capability",
      "CNC machining and EDM",
      "Material certificates and traceability",
      "Quality inspection reports with every order",
    ],
    benefits: [
      "Reduced downtime through faster supply",
      "Cost-effective alternative to OEM imports",
      "Locally serviced and supported",
    ],
    specs: [
      { label: "Tolerance", value: "±0.01 mm" },
      { label: "Material range", value: "SS304, SS316, tool steel, brass, Delrin" },
    ],
    applications: ["Change parts", "Custom fixtures", "Spare components"],
    industries: ["Pharmaceuticals", "Nutraceuticals"],
    maintenance: ["As per OEM specification of host machine"],
  },
  {
    slug: "custom-engineering",
    name: "Custom Pharmaceutical Engineering Solutions",
    short: "Bespoke design, fabrication and turnkey project execution.",
    image: dies,
    overview:
      "From feasibility study to commissioning, AK Pharma Engineering delivers turnkey custom pharmaceutical engineering solutions. Our team works with you to design machines, fixtures and process lines tailored to your specific products and throughput targets.",
    features: [
      "Concept design and 3D modelling",
      "Prototype build and validation",
      "FAT and SAT support",
      "Operator training and documentation",
    ],
    benefits: [
      "Solutions tailored to your formulation and SKU mix",
      "Single point of accountability",
      "Local engineering reduces project lead times",
    ],
    specs: [
      { label: "Project scope", value: "Single machine to full line integration" },
      { label: "Documentation", value: "URS, DQ, IQ, OQ, PQ packages" },
    ],
    applications: ["New product launches", "Capacity expansion", "Retrofits"],
    industries: ["Pharmaceuticals", "Nutraceuticals", "Veterinary"],
    maintenance: ["Annual service contracts available"],
  },
];

export const services = [
  { title: "Machinery Manufacturing", desc: "In-house design and fabrication of blister, strip, sachet and tablet machines." },
  { title: "Precision Tooling", desc: "Forming, sealing and cutting dies, plus rotary punches to TSM/EU standards." },
  { title: "Installation & Commissioning", desc: "Site survey, mechanical and electrical installation, FAT and SAT." },
  { title: "Validation Support", desc: "IQ, OQ and PQ documentation aligned with cGMP and 21 CFR Part 11." },
  { title: "Spare Parts & Change Parts", desc: "Reverse-engineered parts for legacy and imported machines." },
  { title: "Annual Maintenance Contracts", desc: "Preventive maintenance, calibration and 24/7 breakdown support." },
  { title: "Operator Training", desc: "On-site and classroom training programs for operators and engineers." },
  { title: "Turnkey Project Execution", desc: "End-to-end project delivery from URS to handover." },
];

export const projects = [
  { title: "Blister Line Upgrade — Faisalabad", desc: "Retrofit of three DPP-260 lines with new tooling and cooling for a leading Pakistani pharma." },
  { title: "Sachet Line Installation — Lahore", desc: "Turnkey 4-lane sachet packaging line for ORS and granule manufacturer." },
  { title: "Tooling Supply — Karachi", desc: "Custom Alu-Alu dies for moisture-sensitive antibiotic blister packaging." },
  { title: "Tablet Press Refurbishment — Islamabad", desc: "Complete overhaul and validation support for a 35-station rotary press." },
  { title: "Strip Pack Capacity Expansion — Multan", desc: "Two additional strip packing lines with synchronized coding systems." },
  { title: "Export Project — Middle East", desc: "Supply of blister tooling and chillers for a GCC-based pharma client." },
];

export const stats = [
  { value: "15+", label: "Years of Engineering" },
  { value: "200+", label: "Machines Delivered" },
  { value: "50+", label: "Pharma Clients" },
  { value: "100%", label: "GMP Aligned" },
];
