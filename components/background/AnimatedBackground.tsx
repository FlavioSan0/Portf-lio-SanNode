"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import CircuitLines from "@/components/background/CircuitLines";
import FloatingOrbs from "@/components/background/FloatingOrbs";
import TechGrid from "@/components/background/TechGrid";

type AnimatedBackgroundProps = {
  variant?: "hero" | "page" | "subtle";
};

const variantOpacity = {
  hero: "opacity-100",
  page: "opacity-80",
  subtle: "opacity-55",
};

export default function AnimatedBackground({
  variant = "page",
}: AnimatedBackgroundProps) {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yReverse = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const opacity = useTransform(scrollYProgress, [0, 0.35, 1], [1, 0.75, 0.55]);

  if (prefersReducedMotion) {
    return (
      <div
        aria-hidden="true"
        className={[
          "pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#07111F]",
          variantOpacity[variant],
        ].join(" ")}
      >
        <TechGrid />
        <FloatingOrbs />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#00D9FF14,transparent_32%),radial-gradient(circle_at_left,#2563EB12,transparent_40%)]" />
      </div>
    );
  }

  return (
    <motion.div
      aria-hidden="true"
      style={{ opacity }}
      className={[
        "pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#07111F]",
        variantOpacity[variant],
      ].join(" ")}
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <TechGrid />
      </motion.div>

      <motion.div style={{ y: yReverse }} className="absolute inset-0">
        <FloatingOrbs />
      </motion.div>

      <motion.div style={{ y }} className="absolute inset-0">
        <CircuitLines />
      </motion.div>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.08),rgba(7,17,31,0.72)_70%,#07111F)]" />
      <div className="sannode-noise absolute inset-0 opacity-[0.055]" />
    </motion.div>
  );
}