"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HeroBackground } from "./HeroBackground";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] md:h-screen md:min-h-[720px] flex items-center justify-center text-white overflow-hidden">
      <HeroBackground />

      <div
        className="relative z-10 flex flex-col items-center justify-center px-4 text-center md:items-start md:text-left"
        style={{ fontFamily: '"Neue Haas Grotesk Display", "Inter", "system-ui", sans-serif' }}
      >
        <div className="max-w-4xl lg:max-w-6xl">
          {/* TÍTULO */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="font-bold text-white text-[2.2rem] leading-[2.6rem] md:text-[3.4rem] md:leading-[3.6rem] lg:text-[5rem] lg:leading-[5.2rem]"
          >
            O Primeiro Observatório
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
          
          {/* LINHA DE APOIO - SÓ DESKTOP */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.9 }}
            className="hidden max-w-2xl mt-4 text-lg text-white/80 md:block"
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
            <Link href="/explorar">
              <span className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 active:scale-100 ring-2 ring-blue-500/50">
                Explorar Dados
                <ArrowRight className="w-5 h-5 ml-2" />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
