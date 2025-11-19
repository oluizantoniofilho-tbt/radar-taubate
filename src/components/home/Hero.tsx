"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HeroBackground } from "./HeroBackground";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  supportingLine: string;
  ctaLabel: string;
  ctaLink: string;
}

export function Hero({ title, subtitle, supportingLine, ctaLabel, ctaLink }: HeroProps) {
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
        {/* HEADLINE - FOCO DA MUDANÇA NAS CLASSES TAILWIND */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="
            font-bold text-white drop-shadow-2xl
            
            /* Mobile/Small Desktop (3 linhas): Fonte ligeiramente menor */
            text-4xl leading-tight 
            md:text-6xl md:leading-snug
            
            /* Large Desktop (Duas Linhas - Aumentando o max-w e a fonte): */
            lg:text-7xl lg:leading-tight
            xl:text-8xl xl:leading-tight
            
            /* Aumentando a largura máxima para ocupar mais a tela no desktop (70% do contêiner) */
            max-w-full md:max-w-[800px] lg:max-w-[950px]
          "
        >
          {title}
        </motion.h1>

        {/* SUBTÍTULO */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="max-w-2xl mt-6 text-white/90 text-base md:text-lg lg:text-xl"
        >
          {subtitle}
        </motion.p>

        {/* LINHA DE APOIO */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="hidden md:block max-w-2xl mt-4 text-white/80 text-base lg:text-lg"
        >
          {supportingLine}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.9 }}
          className="mt-10 md:mt-16"
        >
          <Link href={ctaLink}>
            <span className="
              inline-flex items-center justify-center
              px-8 py-4 text-lg font-bold text-white
              bg-blue-600 hover:bg-blue-700
              rounded-full shadow-lg
              hover:scale-105 active:scale-100
              ring-2 ring-blue-500/50 transition-all
            ">
              {ctaLabel}
              <ArrowRight className="w-5 h-5 ml-2" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}