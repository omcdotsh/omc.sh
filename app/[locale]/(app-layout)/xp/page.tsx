import { XPContent } from "@/features/xp/XpContent";
import { combineWithParentMetadata } from "@/lib/metadata";
import { Suspense } from "react";

export const generateMetadata = combineWithParentMetadata({
  title: "xp",
});

export default function RoutePage() {
  return (
    <Suspense fallback={null}>
      <XPContent />
    </Suspense>
  );
}
