"use client";

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
        style={{ fontFamily: '"Neue Haas Grotesk Display", "Inter", "system-ui", sans-serif' }}
      >
        {/* HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="
            font-bold text-white drop-shadow-2xl
            text-[2.1rem] leading-[2.6rem]
            md:text-[3.2rem] md:leading-[3.6rem]
            lg:text-[4.2rem] lg:leading-[4.6rem]
            xl:text-[4.6rem] xl:leading-[5rem]
            max-w-[80%]
          "
        >
          O Primeiro Observatório Social
          <br />
          Independente do Vale do Paraíba
        </motion.h1>

        {/* SUBTÍTULO */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="max-w-2xl mt-6 text-base text-white/90 md:text-xl lg:text-2xl"
        >
          Criado em Taubaté para inspirar uma nova cultura de transparência no Vale.
        </motion.p>

        {/* LINHA DE APOIO */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="hidden md:block max-w-2xl mt-4 text-lg text-white/80"
        >
          Transparência e educação pública para fortalecer o cidadão.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.9 }}
          className="mt-10 md:mt-16"
        >
          <Link href="/indicadores">
            <span className="
              inline-flex items-center justify-center
              px-8 py-4 text-lg font-bold text-white
              bg-blue-600 hover:bg-blue-700
              rounded-full shadow-lg
              hover:scale-105 active:scale-100
              ring-2 ring-blue-500/50 transition-all
            ">
              Explorar Dados
              <ArrowRight className="w-5 h-5 ml-2" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}