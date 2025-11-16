"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Camada de zoom cinematográfico */}
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
          className="object-cover object-center"
        />
      </motion.div>

      {/* Overlay institucional */}
      <div
        className="
          absolute inset-0 
          bg-gradient-to-b from-black/85 via-black/60 to-black/30
          md:bg-gradient-to-r md:from-black/85 md:via-black/60 md:to-black/25
        "
      />
    </div>
  );
}
