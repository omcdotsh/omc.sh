import { PortfolioContent } from "@/features/portfolio/PortfolioContent";
import { Suspense } from "react";

export default function RoutePage() {
  return (
    <Suspense fallback={null}>
      <PortfolioContent />
    </Suspense>
  );
}
