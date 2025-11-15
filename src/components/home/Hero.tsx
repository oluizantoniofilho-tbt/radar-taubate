"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="relative w-full h-[92vh] md:h-[100vh] overflow-hidden flex items-center justify-center"
    >
      {/* Background Cinematic Zoom */}
      <motion.div
        initial={{ scale: 1.18 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <Image
          src="/taubate-panorama.jpg"
          alt="Panorama de Taubaté"
          fill
          priority
          className="object-cover object-[55%_50%]"
        />
      </motion.div>

      {/* Cinematic Institutional Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b
        from-black/85 via-black/60 to-black/30
        md:bg-gradient-to-r md:from-black/85 md:via-black/60 md:to-black/25" 
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 gap-6 mt-[10vh] md:mt-[14vh] lg:mt-[15vh]">

        {/* HEADLINE INSTITUCIONAL */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-2xl max-w-4xl"
        >
          O Primeiro Observatório Independente do Vale do Paraíba
        </motion.h1>

        {/* SUBTÍTULO */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.9 }}
          className="mt-2 text-lg md:text-2xl text-white/90 max-w-2xl leading-snug drop-shadow-md"
        >
          Educação cívica e informação verdadeira para formar uma cidade mais consciente.
        </motion.p>

        {/* LINHA DE APOIO */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.9 }}
          className="text-base md:text-xl text-white/80 max-w-xl leading-snug"
        >
          Transparência e educação pública para fortalecer o cidadão.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.9 }}
        >
          <Link
            href="/indicadores"
            className="mt-10 bg-white/95 text-[#0f172a] font-semibold 
                       px-10 py-4 rounded-2xl text-xl md:text-2xl shadow-2xl
                       hover:bg-white transition-all duration-300"
          >
            Acessar dados →
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
