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
          Por que criamos esta Plataforma de Inteligência Pública
        </motion.h2>

        {/* PARÁGRAFO 1 */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[16px] md:text-[17px] leading-relaxed text-slate-200 mb-6"
        >
          O Radar Taubaté nasce para transformar dados públicos em clareza, verdade e compreensão.
          Aqui, números deixam de ser uma barreira e passam a ser um instrumento:
          um caminho para entender como a cidade funciona, como os recursos são aplicados e quais
          escolhas moldam o futuro coletivo.
        </motion.p>

        {/* PARÁGRAFO 2 */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[16px] md:text-[17px] leading-relaxed text-slate-300 mb-6"
        >
          Somos independentes, neutros e guiados pela evidência.
          Nosso propósito é fortalecer a cidadania informada, qualificar o debate público e ampliar
          a capacidade de Taubaté pensar sobre si mesma com maturidade e transparência.
        </motion.p>

        {/* PARÁGRAFO 3 */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[16px] md:text-[17px] leading-relaxed text-slate-300"
        >
          Inteligência pública é isso:
          iluminar o que importa, explicar o que é complexo e aproximar o cidadão das decisões que
          afetam sua vida.
        </motion.p>

      </div>
    </section>
  );
}
