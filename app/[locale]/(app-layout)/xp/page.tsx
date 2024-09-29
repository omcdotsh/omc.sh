import { XPContent } from "@/features/xp/XpContent";
import { Suspense } from "react";

export default function RoutePage() {
  return (
    <Suspense fallback={null}>
      <XPContent />
    </Suspense>
  );
}
