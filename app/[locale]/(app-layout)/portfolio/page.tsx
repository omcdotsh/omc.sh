import { PortfolioContent } from "@/features/portfolio/PortfolioContent";
import { combineWithParentMetadata } from "@/lib/metadata";

export const generateMetadata = combineWithParentMetadata({
  title: "portfolio",
  description:
    "explore my portfolio of projects, showcasing my skills and expertise in software development, blockchain technology, and DeFi applications.",
});

export default function RoutePage() {
  return <PortfolioContent />;
}
