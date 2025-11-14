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
      className="relative w-full h-[90vh] md:h-[100vh] overflow-hidden flex items-center justify-center"
    >
      {/* Background Cinematic Zoom */}
      <motion.div
        initial={{ scale: 1.18 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: "easeOut" }}
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
      {/* Cinematic Tech Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b
        from-black/80 via-black/55 to-black/35
        md:bg-gradient-to-r md:from-black/80 md:via-black/55 md:to-black/25" 
      />
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-xl tracking-tight"
        >
          Radar 
          <span className="text-cyan-300 drop-shadow-xl"> Taubaté</span>
        </motion.h1>
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.9 }}
          className="mt-4 text-lg md:text-2xl text-white/90 max-w-2xl leading-snug drop-shadow"
        >
          Transparência, inteligência municipal e dados públicos de forma clara e acessível.
        </motion.p>
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.9 }}
        >
          <Link
            href="/indicadores"
            className="mt-10 bg-white/95 text-[#0f172a] font-semibold px-8 py-4 
                       rounded-2xl text-lg shadow-2xl hover:bg-white transition-all duration-300"
          >
            Acessar dados →
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}