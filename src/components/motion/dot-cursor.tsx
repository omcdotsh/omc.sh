"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export function DotCursor() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 420, damping: 36, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 420, damping: 36, mass: 0.35 });

  useEffect(() => {
    if (reduceMotion) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest(
        "a, button, [role='button'], input, textarea, select, label"
      );
      setExpanded(Boolean(interactive));
    };
    const onLeave = () => setVisible(false);

    document.documentElement.classList.add("omc-has-dot-cursor");

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      document.documentElement.classList.remove("omc-has-dot-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [reduceMotion, x, y]);

  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden
      className="omc-dot-cursor pointer-events-none fixed left-0 top-0 z-[100] hidden mix-blend-difference md:block"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        opacity: visible ? 1 : 0,
      }}
    >
      <motion.span
        className="block rounded-full bg-white"
        animate={{
          width: expanded ? 40 : 10,
          height: expanded ? 40 : 10,
        }}
        transition={{ type: "spring", stiffness: 380, damping: 28 }}
      />
    </motion.div>
  );
}
