// src/app/indicadores/page.tsx
// src/app/indicadores/page.tsx

import React from "react";

import ReceitaGeralIntroSection from "@/components/indicadores/ReceitaGeralIntroSection";
import ReceitaGeralSection from "@/components/indicadores/ReceitaGeralSection";
import { DespesaGeralSection } from "@/components/indicadores/DespesaGeralSection";
import IpmSection from "@/components/indicadores/IpmSection";
import CamaraResumoSection from "@/components/indicadores/CamaraResumoSection";

export default function IndicadoresPage() {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-50">
      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4">

        {/* ===========================
            BLOCO 1 — INTRO RECEITA
        =========================== */}
        <ReceitaGeralIntroSection />

        {/* ===========================
            BLOCO 2 — RECEITA DETALHADA
        =========================== */}
        <div className="mt-16">
          <ReceitaGeralSection />
        </div>

        {/* ===========================
            BLOCO 3 — DESPESAS GERAIS
        =========================== */}
        <div className="mt-16">
          <DespesaGeralSection />
        </div>

        {/* ===========================
            BLOCO 4 — IPMT / PREVIDÊNCIA
        =========================== */}
        <div className="mt-16">
          <IpmSection />
        </div>

        {/* ===========================
            BLOCO 5 — RESUMO DA CÂMARA
        =========================== */}
        <div className="mt-16">
          <CamaraResumoSection />
        </div>

      </div>
    </main>
  );
}

