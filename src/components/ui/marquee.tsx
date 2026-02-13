import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  const controls = useAnimation();
  const axis = vertical ? "y" : "x";
  const distance = 100; // % of width/height to travel

  useEffect(() => {
    controls.start({
      [axis]: reverse ? [`0%`, `-${distance}%`] : [`-${distance}%`, `0%`],
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: 20,
      },
    } as Parameters<typeof controls.start>[0]);
  }, [controls, axis, reverse]);

  return (
    <div
      className={cn(
        "relative overflow-hidden" /* hide overflow */,
        vertical
          ? "h-64"
          : "w-full" /* fix height (for vertical) or full width */,
        className
      )}
      onMouseEnter={() => pauseOnHover && controls.stop()}
      onMouseLeave={() => pauseOnHover && controls.start({ [axis]: 0 })}
      {...props}
    >
      <motion.div
        animate={controls}
        className={cn(
          "flex",
          vertical ? "flex-col" : "flex-row",
          "whitespace-nowrap"
        )}
        style={{ willChange: axis }}
      >
        {Array(repeat)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className={vertical ? "block mb-4" : "inline-block mr-8"}
            >
              {children}
            </div>
          ))}
      </motion.div>
    </div>
  );
}
