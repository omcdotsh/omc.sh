import { cn } from "@/lib/utils";

const DOT_COLORS = {
  red: "bg-spectrum-red",
  orange: "bg-spectrum-orange",
  yellow: "bg-spectrum-yellow",
  green: "bg-spectrum-green",
  teal: "bg-spectrum-teal",
  blue: "bg-spectrum-blue",
  indigo: "bg-spectrum-indigo",
  purple: "bg-spectrum-purple",
  pink: "bg-spectrum-pink",
} as const;

export type SpectrumHue = keyof typeof DOT_COLORS;

export function SpectrumTag({
  label,
  hue = "yellow",
  className,
}: {
  label: string;
  hue?: SpectrumHue;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-pill border border-foreground/10 bg-background px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-foreground/80",
        className
      )}
    >
      <span className={cn("size-1.5 shrink-0 rounded-full", DOT_COLORS[hue])} />
      {label}
    </span>
  );
}
