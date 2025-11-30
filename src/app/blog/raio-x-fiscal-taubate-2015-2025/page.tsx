

"use client";

import React from "react";
import { motion } from "framer-motion";

// CHARTS
import ExecucaoOrcamentariaChart from "@/components/blog-charts/ExecucaoOrcamentariaChart";
import EvolucaoRCLChart from "@/components/blog-charts/EvolucaoRCLChart";
import DespesaPessoalRCLChart from "@/components/blog-charts/DespesaPessoalRCLChart";
import DeficitPercentualRCLChart from "@/components/blog-charts/DeficitPercentualRCLChart";
import TendenciaFiscalChart from "@/components/blog-charts/TendenciaFiscalChart";

// DATA
import fiscalData from "./fiscal-data.json";

// Título
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
      {children}
    </h2>
  );
}

// Sidebar
function Sidebar({ sections }: { sections: any[] }) {
  return (
    <aside className="hidden lg:block w-64 pr-8 sticky top-32 h-max">
      <nav className="space-y-4 border-l border-slate-300/30 dark:border-white/10 pl-4">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
          Sumário
        </h3>

        {sections.map((sec) => (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            className="block text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 text-sm leading-relaxed"
          >
            {sec.title}
          </a>
        ))}
      </nav>
    </aside>
  );
}

// Conteúdo principal
function ArticleContent({ data }: { data: any }) {
  return (
    <article className="w-full max-w-4xl mx-auto">

      {/* HEADER */}
      <header className="mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4"
        >
          {data.title}
        </motion.h1>

        <p className="text-xl text-slate-600 dark:text-slate-300 mb-3">
          {data.subtitle}
        </p>

        <p className="text-sm text-slate-500 dark:text-slate-400">
          {data.author} — Versão {data.version}
        </p>
      </header>

      {/* SEÇÕES */}
      {data.sections.map((sec: any) => (
        <section
          key={sec.id}
          id={sec.id}
          className="mb-24 scroll-mt-32"
        >
          <SectionTitle>{sec.title}</SectionTitle>

          {sec.content.map((p: string, i: number) => (
            <p
              key={i}
              className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6"
              dangerouslySetInnerHTML={{ __html: p }}
            />
          ))}

          {/* Renderização dos Gráficos */}
          {sec.id === "oito-anos-deficit" && <ExecucaoOrcamentariaChart />}
          {sec.id === "rcl-confirma" && <EvolucaoRCLChart />}
          {sec.id === "causa-estrutural-pessoal" && <DespesaPessoalRCLChart />}
          {sec.id === "ponto-ruptura" && <DeficitPercentualRCLChart />}
          {sec.id === "projecao" && <TendenciaFiscalChart />}
        </section>
      ))}
    </article>
  );
}

// PAGE FINAL
export default function FiscalStudyPage() {
  return (
    <main className="pt-28 pb-20 px-4 md:px-6 bg-white dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">

        {/* SIDEBAR */}
        <Sidebar sections={fiscalData.sections} />

        {/* CONTEÚDO SEM CARD EXTERNO */}
        <div className="w-full">
          <ArticleContent data={fiscalData} />
        </div>

      </div>
    </main>
  );
}





