"use client";

import React from "react";
import clsx from "clsx";

/* ============================
   COMPONENTE — TÍTULO DE SEÇÃO
=============================== */
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className={clsx(
        "text-3xl md:text-4xl font-bold tracking-tight",
        "text-slate-900 dark:text-white"
      )}
    >
      {children}
    </h2>
  );
}

export default function ManifestoPage() {
  return (
    <main
      className={clsx(
        "min-h-screen pt-28 pb-20 px-6",
        "bg-white text-slate-800",
        "dark:bg-slate-950 dark:text-slate-100"
      )}
    >
      <section
        className={clsx(
          "max-w-5xl mx-auto space-y-20",
          "bg-white dark:bg-slate-900",
          "rounded-2xl shadow-xl",
          "p-8 md:p-12 lg:p-14"
        )}
      >
        {/* ===================================
           HEADER — HERO EDITORIAL
        =================================== */}
        <header className="space-y-6">
          <h1
            className={clsx(
              "text-4xl md:text-6xl font-extrabold leading-tight",
              "bg-gradient-to-b from-slate-900 to-slate-700 bg-clip-text text-transparent",
              "dark:from-white dark:to-slate-300"
            )}
          >
            Manifesto — Radar Taubaté
          </h1>

          <p
            className={clsx(
              "text-xl md:text-2xl leading-relaxed max-w-3xl",
              "text-slate-600 dark:text-slate-300"
            )}
          >
            A primeira <strong className="text-slate-900 dark:text-white">Plataforma Independente de Inteligência Pública</strong> do Vale do Paraíba.  
            Uma nova cultura de clareza, verdade e consciência cívica começa aqui — versão 1.0.
          </p>
        </header>

        {/* BLOCO 1 — ORIGEM */}
        <section className="space-y-6">
          <SectionTitle>Por que o Radar existe?</SectionTitle>

          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            O maior problema das cidades brasileiras não é a falta de dados.  
            <span className="font-semibold text-slate-900 dark:text-white">
              É a falta de compreensão.
            </span>
          </p>

          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            As informações públicas existem — mas estão dispersas em PDFs, portais, planilhas,
            leis e sistemas fragmentados. Nada está organizado, traduzido ou explicado para
            o cidadão comum.
          </p>

          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            O Radar Taubaté nasce para transformar dados públicos em clareza: visualizações simples, análises profundas e entendimento real sobre como a cidade funciona e como o dinheiro público é aplicado.
          </p>

          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Transparência que ilumina. Dados que fortalecem.  
            <span className="font-semibold text-slate-900 dark:text-white">
              Inteligência pública que empodera.
            </span>
          </p>
        </section>

        {/* BLOCO 2 — PROPÓSITO */}
        <section className="space-y-6">
          <SectionTitle>Nosso propósito</SectionTitle>

          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Construir uma cultura pública baseada em evidências, não narrativas.  
            O Radar existe para traduzir o complexo, iluminar prioridades e permitir
            que qualquer cidadão entenda como o orçamento é planejado, executado e fiscalizado.
          </p>

          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Nosso papel é fortalecer a cidadania informada, qualificar o debate público
            e aproximar o funcionamento do Estado daqueles que ele serve.
          </p>
        </section>

        {/* BLOCO 3 — O QUE É / NÃO É */}
        <section className="space-y-6">
          <SectionTitle>O que o Radar é — e o que não é</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* COLUNA: SOMOS */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                ✔ O Radar É
              </h3>

              <ul className="space-y-3 text-lg text-slate-600 dark:text-slate-300">
                <li>
                  • <strong className="text-slate-900 dark:text-white">Independente</strong> — não pertence a governo, oposição ou grupos de influência.
                </li>
                <li>
                  • <strong className="text-slate-900 dark:text-white">Técnico</strong> — fundamentado em dados oficiais e metodologia clara.
                </li>
                <li>
                  • <strong className="text-slate-900 dark:text-white">Cívico</strong> — feito para servir a população.
                </li>
                <li>
                  • <strong className="text-slate-900 dark:text-white">Educativo</strong> — ajuda Taubaté a pensar sobre si mesma.
                </li>
              </ul>
            </div>

            {/* COLUNA: NÃO SOMOS */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-red-500 dark:text-red-400">
                ✘ O Radar NÃO É
              </h3>

              <ul className="space-y-3 text-lg text-slate-600 dark:text-slate-300">
                <li>• Ferramenta partidária.</li>
                <li>• Máquina de narrativa política.</li>
                <li>• Projeto de interesse privado.</li>
                <li>• Plataforma de opinião sem evidência.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* BLOCO 4 — ALETHEIA HUB */}
        <section className="space-y-6">
          <SectionTitle>Aletheia Hub — o ecossistema por trás do Radar</SectionTitle>

          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            O Radar Taubaté é o primeiro grande produto público do{" "}
            <strong className="text-slate-900 dark:text-white">Aletheia Hub</strong>,
            um ecossistema dedicado à inteligência governamental, transparência
            institucional e fortalecimento cívico.
          </p>

          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            O Radar é a porta de entrada, o primeiro farol de uma transformação cultural.
          </p>
        </section>

        {/* BLOCO 5 — ROADMAP */}
        <section className="space-y-6">
          <SectionTitle>Roadmap — o que vem a seguir</SectionTitle>

          <ul className="space-y-3 text-lg text-slate-600 dark:text-slate-300">
            <li>🚀 <strong>Versão 1.1</strong> — novos indicadores, comparativos e séries históricas.</li>
            <li>🤖 <strong>Radar Analytics</strong> — IA, machine learning e diagnósticos automáticos.</li>
            <li>📊 <strong>Portal Regional</strong> — Vale do Paraíba completo em dados.</li>
            <li>🏛 <strong>Painéis Temáticos</strong> — Saúde, Educação, Infraestrutura e Governança.</li>
            <li>🧭 <strong>Índices Proprietários</strong> — eficiência legislativa, rigor fiscal e capacidade de governo.</li>
          </ul>
        </section>

        {/* BLOCO 6 — CHAMADO */}
        <section className="space-y-6">
          <SectionTitle>Nosso chamado ao cidadão</SectionTitle>

          <p className="text-lg text-slate-600 dark:text-slate-300">
            O Radar existe para iluminar, para transformar a complexidade em compreensão.
          </p>

          <p className="text-lg text-slate-600 dark:text-slate-300">
            Cidadãos bem informados não são manipulados, são protagonistas.
          </p>

          <p className="text-xl font-semibold text-slate-900 dark:text-white">
            Informação liberta. Transparência educa. Dados constroem cidadania.
          </p>
        </section>

        {/* CONTATO */}
        <section className="pt-12 border-t border-slate-300/30 dark:border-white/10">
          <SectionTitle>Contato Oficial</SectionTitle>

          <p className="text-lg text-slate-600 dark:text-slate-300">
            Enquanto evoluímos para a versão 2.0, nossos canais oficiais são:
          </p>

          <ul className="mt-6 space-y-3 text-lg">
            <li>
              <span className="font-semibold text-sky-600 dark:text-sky-400">E-mail:</span>
              <a
                href="mailto:contatoaletheiahub@gmail.com"
                className="ml-2 underline hover:text-sky-500 dark:hover:text-sky-300"
              >
                contatoaletheiahub@gmail.com
              </a>
            </li>
            <li>
              <span className="font-semibold text-sky-600 dark:text-sky-400">Instagram:</span>
              <a
                href="https://instagram.com/radartaubate"
                target="_blank"
                className="ml-2 underline hover:text-sky-500 dark:hover:text-sky-300"
              >
                @radartaubate
              </a>
            </li>
          </ul>
        </section>
      </section>
    </main>
  );
}
