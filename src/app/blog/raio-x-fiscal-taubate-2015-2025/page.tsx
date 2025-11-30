
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// CHARTS
import ExecucaoOrcamentariaChart from "@/components/blog-charts/ExecucaoOrcamentariaChart";
import EvolucaoRCLChart from "@/components/blog-charts/EvolucaoRCLChart";
import DespesaPessoalRCLChart from "@/components/blog-charts/DespesaPessoalRCLChart";
import DeficitPercentualRCLChart from "@/components/blog-charts/DeficitPercentualRCLChart";
import TendenciaFiscalChart from "@/components/blog-charts/TendenciaFiscalChart";

// DATA (JSON que você enviou)
import fiscalData from "./fiscal-data.json";

// COMPONENTE – TÍTULO DE SEÇÃO
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
      {children}
    </h2>
  );
}

// COMPONENTE DO SUMÁRIO
function Sidebar({ sections }: { sections: any[] }) {
  return (
    <aside className="hidden lg:block w-64 pr-8 sticky top-32 h-max">
      <nav className="space-y-3 border-l border-slate-300/30 dark:border-white/10 pl-4">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4">
          Sumário
        </h3>

        {sections.map((sec) => (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            className="block text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 text-sm"
          >
            {sec.title}
          </a>
        ))}
      </nav>
    </aside>
  );
}

// COMPONENTE DO CONTEÚDO
function ArticleContent({ data }: { data: any }) {
  return (
    <article className="max-w-4xl">
      {/* HEADER */}
      <header className="mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4"
        >
          {data.title}
        </motion.h1>

        <p className="text-xl text-slate-600 dark:text-slate-300 mb-2">
          {data.subtitle}
        </p>

        <p className="text-sm text-slate-500 dark:text-slate-400">
          {data.author} — Versão {data.version}
        </p>
      </header>

      {/* SEÇÕES */}
      {data.sections.map((sec: any) => (
        <section key={sec.id} id={sec.id} className="mb-20 scroll-mt-32">

          <SectionTitle>{sec.title}</SectionTitle>

          {sec.content.map((p: string, i: number) => (
            <p
              key={i}
              className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6"
              dangerouslySetInnerHTML={{ __html: p }}
            />
          ))}

          {/* INSERÇÃO AUTOMÁTICA DOS GRÁFICOS POR ID */}
          {sec.id === "oito-anos-deficit" && (
            <div className="my-12">
              <ExecucaoOrcamentariaChart />
            </div>
          )}

          {sec.id === "rcl-confirma" && (
            <div className="my-12">
              <EvolucaoRCLChart />
            </div>
          )}

          {sec.id === "causa-estrutural-pessoal" && (
            <div className="my-12">
              <DespesaPessoalRCLChart />
            </div>
          )}

          {sec.id === "ponto-ruptura" && (
            <div className="my-12">
              <DeficitPercentualRCLChart />
            </div>
          )}

          {sec.id === "projecao" && (
            <div className="my-20">
              <TendenciaFiscalChart />
            </div>
          )}
        </section>
      ))}
    </article>
  );
}

// ===============================
// PAGE FINAL
// ===============================
export default function FiscalStudyPage() {
  return (
    <main className="pt-28 pb-20 px-6 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-row gap-10">

        {/* SUMÁRIO */}
        <Sidebar sections={fiscalData.sections} />

        {/* CONTEÚDO */}
        <ArticleContent data={fiscalData} />

      </div>
    </main>
  );
}


