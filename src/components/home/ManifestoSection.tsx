'use client';

import { motion } from "framer-motion";

export function ManifestoSection() {
  return (
    <section
      className="
        relative
        w-full 
        py-24 px-6 
        bg-gradient-to-b from-[#0f172a] to-[#1e293b]
        text-left
      "
    >
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* TÍTULO */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            text-[32px] md:text-[34px] 
            font-bold 
            text-white 
            mb-6
            leading-tight
          "
        >
          Por que criamos este Observatório
        </motion.h2>

        {/* PARÁGRAFO 1 */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[16px] md:text-[17px] leading-relaxed text-slate-200 mb-6"
        >
          O Observatório nasce para devolver ao cidadão aquilo que lhe pertence: 
          <span className="hlt"> a verdade sobre a sua própria cidade</span>.
        </motion.p>

        {/* PARÁGRAFO 2 */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[16px] md:text-[17px] leading-relaxed text-slate-300 mb-6"
        >
          Aqui, dados públicos são traduzidos em conhecimento claro, confiável e acessível,
          permitindo que qualquer pessoa compreenda como Taubaté funciona, para onde vão os
          recursos e como decisões moldam o futuro coletivo.
        </motion.p>

        {/* PARÁGRAFO 3 */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[16px] md:text-[17px] leading-relaxed text-slate-300"
        >
          Nosso propósito é fortalecer a 
          <span className="hlt"> consciência cívica</span>, iluminar o 
          <span className="hlt"> debate público</span> e promover a 
          <span className="hlt"> educação pública</span> como caminho para uma cidade mais justa e transparente.
        </motion.p>

      </div>
    </section>
  );
}