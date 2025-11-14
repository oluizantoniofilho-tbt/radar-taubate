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
      className="relative w-full h-[260px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg mt-16"
    >
      <Image
        src="/camara-municipal-taubate.jpg"
        alt="Câmara Municipal de Taubaté"
        fill
        className="object-cover object-center"
        priority={false}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/85 via-[#0f172a]/70 to-[#1E40AF]/55" />

      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-14">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-3 drop-shadow">
          Câmara Municipal de Taubaté
        </h2>

        <p className="text-slate-100 md:text-lg max-w-xl leading-snug">
          Execução orçamentária • despesas • folha • contratos
        </p>

        <Link
          href="/camara"
          className="mt-6 w-fit bg-white/90 text-[#0f172a] font-semibold px-6 py-3 rounded-xl shadow hover:bg-white transition-all duration-300"
        >
          Ver dados completos →
        </Link>
      </div>
    </motion.section>
  );
}
