"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnalyticCardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  delay?: number;
}

export function AnalyticCard({ title, subtitle, children, delay = 0.2 }: AnalyticCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="
        bg-white dark:bg-slate-900/70 backdrop-blur-sm
        border border-slate-300/40 dark:border-slate-700/40
        shadow-lg hover:shadow-xl transition-shadow
        rounded-xl p-6 mb-12
      "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      variants={cardVariants}
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-1 text-slate-600 dark:text-slate-400 text-sm">
            {subtitle}
          </p>
        )}
      </div>

      <div className="w-full">
        {children}
      </div>
    </motion.div>
  );
}