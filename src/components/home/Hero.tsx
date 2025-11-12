"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[65vh] flex items-center justify-center text-center text-white">
      <Image
        src="/img/taubate-panorama.jpg"
        alt="Vista panorâmica de Taubaté"
        fill
        className="object-cover brightness-50"
        priority
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl px-4"
      >
        <h1 className="text-5xl font-bold mb-4 tracking-tight">Radar Taubaté</h1>
        <p className="text-lg opacity-90">
          Painel de Inteligência Pública — Transparência e análise inteligente
          das finanças municipais.
        </p>
        <a
          href="#indicadores"
          className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-2xl transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          Explorar Indicadores →
        </a>
      </motion.div>
    </section>
  );
}