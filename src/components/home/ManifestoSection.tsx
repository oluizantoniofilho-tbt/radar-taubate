'use client';

import { motion } from "framer-motion";

export function ManifestoSection() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8"
        >
          Por que criamos este Observatório
        </motion.h2>

        {/* Texto */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="
            text-lg leading-relaxed text-slate-700 dark:text-slate-300
          "
        >
          O Observatório nasce para devolver ao cidadão aquilo que lhe pertence:
          <span className="font-semibold text-slate-900 dark:text-white"> a verdade sobre a sua própria cidade.</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="
            text-lg leading-relaxed text-slate-700 dark:text-slate-300 mt-6
          "
        >
          Aqui, dados públicos são traduzidos em conhecimento claro, confiável e 
          acessível, permitindo que qualquer pessoa compreenda como Taubaté funciona,
          para onde vão os recursos e como decisões moldam o futuro coletivo.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="
            text-lg leading-relaxed text-slate-700 dark:text-slate-300 mt-6
          "
        >
          Nosso propósito é fortalecer a consciência cívica, iluminar o debate público
          e promover a educação pública como caminho para uma cidade mais justa e
          transparente.
        </motion.p>

      </div>
    </section>
  );
}