"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function CamaraHeroCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative w-full h-[260px] md:h-[320px] rounded-2xl overflow-hidden shadow-md mt-16"
    >
      <Image
        src="/camara-municipal-taubate.jpg"
        alt="Câmara Municipal de Taubaté"
        fill
        className="object-cover"
        priority={false}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/80 to-[#1E40AF]/60" />

      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-10">
        <h2 className="text-2xl md:text-4xl text-white font-bold mb-2 drop-shadow">
          Câmara Municipal de Taubaté
        </h2>

        <p className="text-slate-100 md:text-lg max-w-xl">
          Execução orçamentária • despesas • folha • contratos
        </p>

        <Link
          href="/camara"
          className="mt-6 inline-block bg-white/90 text-[#0f172a] font-semibold px-6 py-3 rounded-xl shadow hover:bg-white transition"
        >
          Ver dados completos →
        </Link>
      </div>
    </motion.section>
  );
}
