import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative w-full h-[80vh] md:h-screen rounded-none md:rounded-3xl overflow-hidden mt-0 md:mt-6"
    >
      <Image
        src="/taubate-panorama.jpg"
        alt="Panorama de Taubaté"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay cinematográfico */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/10 md:bg-gradient-to-r md:from-black/70 md:via-black/40 md:to-transparent" />

      {/* Conteúdo */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-2xl max-w-4xl leading-tight">
          Radar Taubaté
        </h1>

        <p className="text-lg md:text-2xl text-white/90 mt-4 max-w-2xl drop-shadow">
          Transparência, dados públicos e inteligência municipal em um só lugar.
        </p>

        <Link
          href="/planejamento"
          className="mt-8 px-8 py-4 bg-white/90 text-[#0f172a] font-semibold rounded-2xl shadow-xl hover:bg-white transition-all duration-300 text-lg md:text-xl"
        >
          Acessar dados →
        </Link>
      </div>
    </motion.section>
  );
}