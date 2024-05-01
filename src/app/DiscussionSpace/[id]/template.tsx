"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: 3, x: 3, opacity: 0 }}
      animate={{ y: 0, x: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
