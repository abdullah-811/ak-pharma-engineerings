import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { StickyCTAs } from "./StickyCTAs";
import { Splash } from "./Splash";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Splash />
      <Header />
      <main>{children}</main>
      <Footer />
      <StickyCTAs />
    </>
  );
}
