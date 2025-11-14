"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-[380px] md:h-[520px] rounded-3xl overflow-hidden mt-8"
    >
      <Image
        src="/taubate-panorama.jpg"
        alt="Panorama de Taubaté"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay cinematográfico */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />

      {/* Conteúdo */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-14 lg:px-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg max-w-3xl">
          Radar Taubaté
        </h1>

        <p className="text-lg md:text-xl text-white/90 max-w-2xl mt-3 leading-snug drop-shadow">
          Transparência, dados públicos e inteligência municipal em um só lugar.
        </p>

        <Link
          href="/planejamento"
          className="mt-6 w-fit bg-white/90 text-[#0f172a] font-semibold px-7 py-3 rounded-2xl shadow-lg hover:bg-white transition-all duration-300"
        >
          Acessar dados →
        </Link>
      </div>
    </motion.section>
  );
}
