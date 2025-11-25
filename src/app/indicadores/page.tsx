
// src/app/indicadores/page.tsx

import React from "react";

import ReceitaGeralIntroSection from "@/components/indicadores/ReceitaGeralIntroSection";
import ReceitaGeralSection from "@/components/indicadores/ReceitaGeralSection";
import { DespesaGeralSection } from "@/components/indicadores/DespesaGeralSection";
import IpmSection  from "@/components/indicadores/IpmSection";
import CamaraResumoSection from "@/components/indicadores/CamaraResumoSection";
import ExecucaoPorFuncaoSection from "@/components/indicadores/ExecucaoPorFuncaoSection";
import TransferenciasCorrentesSection from "@/components/indicadores/TransferenciasCorrentesSection";

export default function IndicadoresPage() {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-50">
      
      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4">

        {/* ===========================================
            1. INTRO DA RECEITA (contexto geral)
        =========================================== */}
        <ReceitaGeralIntroSection />

        {/* ===========================================
            2. RECEITA DETALHADA
        =========================================== */}
        <div className="mt-16">
          <ReceitaGeralSection />
        </div>

        {/* ===========================================
            3. DESPESAS GERAIS
        =========================================== */}
        <div className="mt-16">
          <DespesaGeralSection />
        </div>

        {/* ===========================================
            4. IPMT — SEGURIDADE SOCIAL
        =========================================== */}
        <div className="mt-16">
          <IpmSection />
        </div>

        {/* ===========================================
            5. RESUMO DA CÂMARA MUNICIPAL
        =========================================== */}
        <div className="mt-16">
          <CamaraResumoSection />
        </div>

        {/* ===========================================
            6. TRANSFERÊNCIAS CORRENTES
        =========================================== */}
        <div className="mt-16">
          <TransferenciasCorrentesSection />
        </div>

        {/* ===========================================
            7. EXECUÇÃO ORÇAMENTÁRIA POR FUNÇÃO
            (último sempre, pois fala de execução real)
        =========================================== */}
        <div className="mt-16">
          <ExecucaoPorFuncaoSection />
        </div>

      </div>

      {/* ===========================================
          8. CTA FINAL PARA PPA/LOA
      =========================================== */}
      <section
        className="max-w-5xl mx-auto mt-10 mb-16 px-6 py-10
        rounded-2xl bg-slate-100 dark:bg-slate-800
        border border-slate-300 dark:border-slate-700 shadow-lg"
      >
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Quer entender de onde vêm esses números?
        </h2>

        <p className="text-slate-700 dark:text-slate-300 mt-2 text-lg">
          O planejamento oficial do município — PPA e LOA — define o que Taubaté
          pretende realizar e quanto cada ação vai custar.  
          Acesse a análise completa e baixe os documentos oficiais.
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

