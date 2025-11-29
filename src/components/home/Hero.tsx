'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { HeroBackground } from "./HeroBackground";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] md:h-screen md:min-h-[720px] flex items-center text-white overflow-hidden">
      <HeroBackground />

      <div
        className="
          relative z-10 flex flex-col justify-center
          px-6 md:px-12 lg:px-20
          text-left
          w-full max-w-[1400px]
          mx-auto
        "
      >
        {/* TÍTULO PRINCIPAL */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="
            font-bold text-white drop-shadow-2xl
            text-4xl leading-tight
            md:text-5xl md:leading-snug
            lg:text-5xl lg:leading-tight
            xl:text-6xl xl:leading-tight
            max-w-full md:max-w-4xl lg:max-w-5xl
          "
        >
          A Primeira Plataforma de Inteligência Pública do Vale do Paraíba
        </motion.h1>

        {/* SUBTÍTULO PRINCIPAL (único subtítulo agora) */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="max-w-2xl mt-6 text-white/90 text-base md:text-lg lg:text-xl"
        >
          Criado em Taubaté para transformar dados públicos em clareza, impacto e decisões melhores.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.9 }}
          className="mt-10 md:mt-16"
        >
          <Link href="/indicadores">
            <span
              className="
                inline-flex items-center justify-center
                px-8 py-4 text-lg font-bold text-white
                bg-blue-600 hover:bg-blue-700
                rounded-full shadow-lg
                hover:scale-105 active:scale-100
                ring-2 ring-blue-500/50 transition-all
              "
            >
              Explorar Indicadores
              <ArrowRight className="w-5 h-5 ml-2" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
