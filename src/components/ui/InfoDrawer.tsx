"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import React from "react";

interface InfoDrawerProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

/* ============================================================
   COMPONENTE UNIVERSAL — InfoDrawer
   Uso:
   <InfoDrawer open={open} onClose={close} title="Meu título">
      <p>conteúdo...</p>
   </InfoDrawer>
   ============================================================ */

export default function InfoDrawer({ open, onClose, title, children }: InfoDrawerProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* BACKDROP */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[80]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* DRAWER */}
          <motion.div
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white dark:bg-slate-900 shadow-xl z-[90] p-6 overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.25 }}
          >
            {/* HEADER */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                {title}
              </h2>

              <button
                onClick={onClose}
                className="text-slate-500 hover:text-slate-800 dark:hover:text-white transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* CONTEÚDO */}
            <div className="space-y-4 text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
