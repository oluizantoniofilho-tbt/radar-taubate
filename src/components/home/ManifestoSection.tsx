"use client";

import { motion } from "framer-motion";

export function ManifestoSection() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-slate-950">
      <div className="max-w-3xl mx-auto">

        {/* TÍTULO */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-10 leading-tight"
        >
          Por que criamos este Observatório
        </motion.h2>

        {/* PARÁGRAFOS */}
        <div className="space-y-6 text-left">

          {/* Parágrafo 1 */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-lg md:text-xl text-slate-700 dark:text-slate-200 leading-relaxed"
          >
            O Observatório nasce para devolver ao <span className="px-[6px] py-[2px] rounded-md bg-[var(--color-primary-soft)] text-[var(--color-primary)] font-semibold">cidadão</span> aquilo que lhe pertence: a{" "}
            <span className="px-[6px] py-[2px] rounded-md bg-[var(--color-primary-soft)] text-[var(--color-primary)] font-semibold">verdade</span> sobre a sua própria cidade.
          </motion.p>

          {/* Parágrafo 2 */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="text-lg md:text-xl text-slate-700 dark:text-slate-200 leading-relaxed"
          >
            Aqui, <span className="px-[6px] py-[2px] rounded-md bg-[var(--color-primary-soft)] text-[var(--color-primary)] font-semibold">dados públicos</span> são traduzidos em{" "}
            <span className="px-[6px] py-[2px] rounded-md bg-[var(--color-primary-soft)] text-[var(--color-primary)] font-semibold">conhecimento claro, confiável e acessível</span>,
            permitindo que qualquer pessoa compreenda como <span className="px-[6px] py-[2px] rounded-md bg-[var(--color-primary-soft)] text-[var(--color-primary)] font-semibold">Taubaté</span> funciona,
            para onde vão os recursos e como decisões moldam o futuro coletivo.
          </motion.p>

          {/* Parágrafo 3 */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="text-lg md:text-xl text-slate-700 dark:text-slate-200 leading-relaxed"
          >
            Nosso propósito é fortalecer a <span className="px-[6px] py-[2px] rounded-md bg-[var(--color-primary-soft)] text-[var(--color-primary)] font-semibold">consciência cívica</span>,
            iluminar o debate público e promover a <span className="px-[6px] py-[2px] rounded-md bg-[var(--color-primary-soft)] text-[var(--color-primary)] font-semibold">educação pública</span> como caminho para uma cidade mais justa e transparente.
          </motion.p>

        </div>

      </div>
    </section>
  );
}