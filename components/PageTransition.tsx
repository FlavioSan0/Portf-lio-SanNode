"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type PageTransitionProps = {
  children: ReactNode;
};

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 0.38,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="page-transition-wrapper"
    >
      <div className="page-transition-scan" />
      {children}
    </motion.div>
  );
}