import { PortfolioContent } from "@/features/portfolio/PortfolioContent";
import { combineWithParentMetadata } from "@/lib/metadata";
import { Suspense } from "react";

export const generateMetadata = combineWithParentMetadata({
  title: "portfolio",
});

export default function RoutePage() {
  return (
    <Suspense fallback={null}>
      <PortfolioContent />
    </Suspense>
  );
}
