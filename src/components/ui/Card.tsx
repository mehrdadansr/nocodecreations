"use client";

import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.2 }}
      className={`bg-surface border border-border rounded-2xl p-6 transition-colors hover:border-primary/30 ${className}`}
    >
      {children}
    </motion.div>
  );
}
