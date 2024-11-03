import { XPContent } from "@/features/xp/XpContent";
import { combineWithParentMetadata } from "@/lib/metadata";

export const generateMetadata = combineWithParentMetadata({
  title: "xp",
  description:
    "explore my professional journey, academic achievements, and personal projects. a comprehensive timeline showcasing my experience in software development, blockchain technology, and DeFi applications.",
});

export default function RoutePage() {
  return <XPContent />;
}
