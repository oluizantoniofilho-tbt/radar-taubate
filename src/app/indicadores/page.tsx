
 // src/app/indicadores/page.tsx
import React from "react";

import ReceitaGeralIntroSection from "@/components/indicadores/ReceitaGeralIntroSection";
import ReceitaGeralSection from "@/components/indicadores/ReceitaGeralSection";
import { DespesaGeralSection } from "@/components/indicadores/DespesaGeralSection";
import IpmSection from "@/components/indicadores/IpmSection";
import CamaraResumoSection from "@/components/indicadores/CamaraResumoSection";

import ProgramasFederaisSection from "@/components/indicadores/ProgramasFederaisSection";
import ExecucaoPorFuncaoSection from "@/components/indicadores/ExecucaoPorFuncaoSection";

export default function IndicadoresPage() {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-50">

      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4">

        {/* BLOCO 1 — INTRO RECEITAS */}
        <ReceitaGeralIntroSection />

        {/* BLOCO 2 — RECEITA DETALHADA */}
        <div className="mt-16">
          <ReceitaGeralSection />
        </div>

        {/* BLOCO 3 — DESPESAS GERAIS */}
        <div className="mt-16">
          <DespesaGeralSection />
        </div>

        {/* BLOCO 4 — IPMT */}
        <div className="mt-16">
          <IpmSection />
        </div>

        {/* BLOCO 5 — RESUMO DA CÂMARA */}
        <div className="mt-16">
          <CamaraResumoSection />
        </div>
        
        {/* BLOCO 6 — PROGRAMAS FEDERAIS */}
        <div className="mt-16">
          <ProgramasFederaisSection />
        </div>

        {/* BLOCO 7 — EXECUÇÃO POR FUNÇÃO */}
        <div className="mt-16">
          <ExecucaoPorFuncaoSection />
        </div>

      </div>

      {/* CTA FINAL */}
      <section
        className="max-w-5xl mx-auto mt-10 mb-16 px-6 py-10
          rounded-2xl bg-slate-100 dark:bg-slate-800
          border border-slate-300 dark:border-slate-700 shadow-lg"
      >
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Quer entender de onde vêm esses números?
        </h2>

        <p className="text-slate-700 dark:text-slate-300 mt-2 text-lg">
          O planejamento oficial do município — PPA e LOA — define o que a cidade pretende
          realizar e quanto cada ação vai custar. Acesse a análise completa e baixe os documentos.
        </p>

        <a
          href="/planejamento"
          className="inline-flex items-center mt-6 px-6 py-3 rounded-xl font-semibold
            bg-sky-600 hover:bg-sky-700 text-white shadow-md
            dark:bg-sky-500 dark:hover:bg-sky-400 transition"
        >
          📘 Ver PPA & LOA
        </a>
      </section>

    </main>
  );
}
