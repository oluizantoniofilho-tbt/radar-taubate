"use client";

import { motion } from "framer-motion";

export function ManifestoSection() {
  return (
    <section className="py-16 px-4 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white mb-6 text-center md:text-left"
        >
          Por que criamos este Observatório
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4 text-lg md:text-xl text-slate-700 dark:text-slate-200 leading-relaxed text-center md:text-left"
        >
          <p>
            O Observatório nasce com uma missão clara: devolver ao cidadão a
            verdade sobre a sua própria cidade.
          </p>

          <p>
            Em vez de números soltos e linguagem técnica, aqui os dados públicos
            são organizados, traduzidos e explicados de forma clara, confiável
            e acessível. Qualquer pessoa pode entender como Taubaté funciona,
            para onde vão os recursos e quais decisões moldam o futuro coletivo.
          </p>

          <p>
            Queremos mais do que transparência: queremos consciência cívica.
            Iluminar o debate público, tirar a névoa da desinformação e formar
            cidadãos capazes de transformar Taubaté por meio da educação e da
            verdade.
          </p>
        </motion.div>

      </div>
    </section>
  );
}