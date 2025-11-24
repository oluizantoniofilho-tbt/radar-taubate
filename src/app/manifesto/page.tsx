"use client";

import React from "react";
import clsx from "clsx";

/* ============================
   COMPONENTE — TÍTULO DE SEÇÃO
   ============================ */
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
      <section className="max-w-5xl mx-auto space-y-20">

        {/* ===================================
           HEADER — HERO EDITORIAL PREMIUM
           =================================== */}
        <header className="space-y-6">
          <h1
            className={clsx(
              "text-4xl md:text-6xl font-extrabold leading-tight",
              "bg-gradient-to-b from-slate-900 to-slate-700 bg-clip-text text-transparent",
              "dark:from-white dark:to-slate-300"
            )}
          >
            Manifesto Radar Taubaté
          </h1>

          <p
            className={clsx(
              "text-xl md:text-2xl leading-relaxed max-w-3xl",
              "text-slate-600 dark:text-slate-300"
            )}
          >
            Uma nova cultura de transparência, educação cívica e inteligência pública
            começa aqui. Esta é a <span className="font-semibold dark:text-white">versão 1.0</span> 
            do primeiro observatório social independente do Vale do Paraíba.
          </p>
        </header>

        {/* BLOCO 1 — VISÃO */}
        <section className="space-y-6">
          <SectionTitle>Por que o Radar existe?</SectionTitle>

          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            O Radar Taubaté nasce para resolver um problema real:
            <span className="font-semibold text-slate-900 dark:text-white">
              {" "}a população não sabe onde o dinheiro público está sendo aplicado,
              quais são as prioridades reais do governo ou se as promessas estão
              sendo cumpridas.
            </span>
          </p>

          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            As informações existem, mas estão espalhadas em PDFs, sistemas, portais
            federais, planilhas e documentos técnicos. Porém, não estão organizadas,
            traduzidas ou interpretadas de forma acessível para o cidadão.
          </p>

          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            O Radar resolve isso tornando dados públicos compreensíveis, visualizáveis
            e acionáveis. Transparência que faz sentido. Dados que viram poder cívico.
          </p>
        </section>

        {/* BLOCO 2 — PROPÓSITO */}
        <section className="space-y-6">
          <SectionTitle>Nosso propósito</SectionTitle>

          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Construir uma cidade mais consciente, crítica e capaz de cobrar resultados —
            não narrativas. Transformar números frios em compreensão pública. Mostrar,
            com clareza, onde o orçamento é cumprido, onde trava e onde precisa melhorar.
          </p>

          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Ser ponte entre o cidadão e o funcionamento do Estado. Facilitar o
            entendimento e fortalecer uma cultura de participação cívica baseada em
            dados, não em opiniões soltas.
          </p>
        </section>

        {/* BLOCO 3 — O QUE SOMOS / NÃO SOMOS */}
        <section className="space-y-6">
          <SectionTitle>O que o Radar é — e o que não é</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* COLUNA: SOMOS */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                ✔ O Radar É
              </h3>

              <p className="text-lg text-slate-600 dark:text-slate-300">
                • <span className="font-semibold text-slate-900 dark:text-white">Independente</span>  
                — não representa governo nem oposição.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                • <span className="font-semibold text-slate-900 dark:text-white">Cívico</span>  
                — existe para educar e fortalecer a sociedade.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                • <span className="font-semibold text-slate-900 dark:text-white">Técnico</span>  
                — usa dados oficiais, metodologia e rigor.
              </p>
            </div>

            {/* COLUNA: NÃO SOMOS */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-red-500 dark:text-red-400">
                ✘ O Radar NÃO É
              </h3>

              <p className="text-lg text-slate-600 dark:text-slate-300">
                • Ferramenta política ou eleitoral.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                • Criação partidária.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                • Grupo de interesse.
              </p>
            </div>

          </div>
        </section>

        {/* BLOCO 4 — ALETHEIA HUB */}
        <section className="space-y-6">
          <SectionTitle>Parte de algo maior: Aletheia Hub</SectionTitle>

          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            O Radar Taubaté é o primeiro grande produto público do  
            <span className="font-semibold text-slate-900 dark:text-white"> Aletheia Hub</span>,  
            um ecossistema dedicado a construir transparência, inteligência governamental
            e alta performance institucional.
          </p>

          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            É o início — o primeiro farol de uma mudança cultural.
          </p>
        </section>

        {/* BLOCO 5 — ROADMAP */}
        <section className="space-y-6">
          <SectionTitle>Roadmap — a evolução já começou</SectionTitle>

          <p className="text-lg text-slate-600 dark:text-slate-300">
            Esta é a versão <span className="font-semibold text-slate-900 dark:text-white">1.0</span> do Radar.
            O ponto de partida. E já estamos construindo o próximo passo.
          </p>

          <ul className="space-y-3 text-lg text-slate-600 dark:text-slate-300">
            <li>🚀 <span className="font-semibold">Versão 1.1</span> — novos indicadores e séries históricas.</li>
            <li>🤖 <span className="font-semibold">Radar Analytics</span> — diagnóstico automático, IA e machine learning.</li>
            <li>📊 <span className="font-semibold">Portal Regional</span> — expansão para todo o Vale do Paraíba.</li>
            <li>🏛 <span className="font-semibold">Painéis Temáticos</span> — Saúde, Educação, Infraestrutura, etc.</li>
            <li>🧭 <span className="font-semibold">Índices Próprios</span> — eficiência legislativa, rigor fiscal e mais.</li>
          </ul>
        </section>

        {/* BLOCO 6 — CHAMADO */}
        <section className="space-y-6">
          <SectionTitle>Nosso chamado ao cidadão</SectionTitle>

          <p className="text-lg text-slate-600 dark:text-slate-300">
            O Radar existe para iluminar. Para mostrar a verdade dos números.
          </p>

          <p className="text-lg text-slate-600 dark:text-slate-300">
            Cidadãos bem informados não são manipulados — são protagonistas.
          </p>

          <p className="text-xl font-semibold text-slate-900 dark:text-white">
            Informação liberta. Transparência educa. Dados constroem cidadania.
          </p>
        </section>

        {/* CONTATO */}
        <section className="pt-12 border-t border-slate-300/30 dark:border-white/10">
          <SectionTitle>Contato Oficial</SectionTitle>

          <p className="text-lg text-slate-600 dark:text-slate-300">
            Como estamos na versão 1.0, nossos canais estão evoluindo. Por enquanto, use:
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
