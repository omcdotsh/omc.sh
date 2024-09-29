import { StatsSection } from "@/features/sections/stats-section";
import { HeroSection } from "@/features/sections/hero-section";

export default function RoutePage() {
  return (
    <div className="w-full flex flex-col gap-2">
      <HeroSection />
      <StatsSection />
    </div>
  );
}
