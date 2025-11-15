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
      className="relative w-full h-[92vh] md:h-[100vh] overflow-hidden flex items-center"
    >
      {/* Background zoom */}
      <motion.div
        initial={{ scale: 1.22 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <Image
          src="/taubate-panorama.jpg"
          alt="Panorama de Taubaté"
          fill
          priority
          className="object-cover object-[57%_50%]"
        />
      </motion.div>

      {/* Overlay */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b from-black/85 via-black/60 to-black/30
          md:bg-gradient-to-r md:from-black/85 md:via-black/60 md:to-black/25
        "
      />

      {/* Content */}
      <div
        className="
          relative z-20 flex flex-col gap-6 px-6
          mt-[10vh] md:mt-[12vh] lg:mt-[14vh]
          text-center md:text-left
          items-center md:items-start
          max-w-[90%] md:max-w-[750px] lg:max-w-[900px]
          mx-auto md:ml-[6vw] lg:ml-[8vw]
        "
      >

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="
            font-extrabold tracking-tight text-white drop-shadow-2xl
            text-[2.4rem] leading-[2.8rem]
            md:text-[3.4rem] md:leading-[3.6rem]
            lg:text-[5rem] lg:leading-[5.2rem]
            xl:text-[5.4rem]
          "
        >
          O Primeiro Observatório<br />
          Independente do Vale do Paraíba
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.9 }}
          className="text-base md:text-xl lg:text-2xl text-white/90 drop-shadow leading-snug max-w-[700px]"
        >
          Criado em Taubaté para inspirar uma nova cultura de transparência no Vale.
        </motion.p>

        {/* Terceira frase – apenas Desktop */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="hidden md:block text-white/80 text-lg max-w-[600px] leading-snug"
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
            className="
              mt-10 md:mt-16
              bg-white/95 text-[#0f172a] font-semibold
              px-10 py-4 rounded-2xl
              text-lg md:text-xl shadow-xl
              hover:bg-white transition-all duration-300
            "
          >
            Acessar dados →
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
