"use client";

import { cn } from "@/lib/utils";

export function LetterFrames({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none grid grid-cols-4 gap-3 opacity-90 sm:gap-4",
        className
      )}
    >
      <FrameO />
      <FrameM />
      <FrameC />
      <FrameDot />
    </div>
  );
}

function FrameO() {
  return (
    <div className="relative aspect-square overflow-hidden rounded-full bg-spectrum-blue">
      <div className="absolute inset-[18%] rounded-full bg-background" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.55), transparent 55%)",
        }}
      />
    </div>
  );
}

function FrameM() {
  return (
    <div className="relative aspect-square overflow-hidden bg-spectrum-yellow">
      <svg viewBox="0 0 100 100" className="absolute inset-0 size-full">
        <defs>
          <clipPath id="omc-m-clip">
            <path d="M8 92 V18 L35 62 L50 28 L65 62 L92 18 V92 H78 V48 L62 78 L50 54 L38 78 L22 48 V92 Z" />
          </clipPath>
        </defs>
        <rect
          width="100"
          height="100"
          fill="#18181B"
          clipPath="url(#omc-m-clip)"
        />
      </svg>
    </div>
  );
}

function FrameC() {
  return (
    <div className="relative aspect-square overflow-hidden bg-spectrum-pink">
      <div className="absolute inset-0 rounded-full border-[14px] border-background [clip-path:inset(0_0_0_42%)]" />
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.35), transparent 60%)",
        }}
      />
    </div>
  );
}

function FrameDot() {
  return (
    <div className="relative grid aspect-square place-items-center bg-foreground">
      <span className="size-[42%] rounded-full bg-spectrum-yellow shadow-[0_0_40px_rgba(245,197,24,0.45)]" />
    </div>
  );
}
