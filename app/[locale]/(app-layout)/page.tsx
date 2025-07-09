import { StatsSection } from "@/features/sections/stats-section";
import { HeroSection } from "@/features/sections/hero-section";
import { CtaSection } from "@/features/sections/cta-section";
import { WorkWithSection } from "@/features/sections/work-with-section";
import { SITE_CONFIG } from "@/lib/site-config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  openGraph: {
    images: `${SITE_CONFIG.productionUrl}/images/opengraph-image.png`,
    title: `${SITE_CONFIG.name}`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.productionUrl,
    type: "website",
  },
};

export default function RoutePage() {
  return (
    <div className="w-full flex flex-col gap-2">
      <HeroSection />
      <WorkWithSection />
      <StatsSection />
      <CtaSection />
    </div>
  );
}
