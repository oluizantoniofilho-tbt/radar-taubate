// src/app/indicadores/ppa-analise/page.tsx
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Análise Técnica do PPA 2026–2029 | Radar Taubaté",
  description:
    "Leitura técnica do Plano Plurianual (PPA) com foco em gestão pública, planejamento estratégico e impacto social.",
};

export default function PPAAnalisePage() {
  return (
    <section className="p-8 space-y-10">
      {/* Título */}
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-primary">
          Análise Técnica do PPA 2026–2029 (Taubaté)
        </h1>
        <p className="text-muted-foreground max-w-3xl">
          Esta análise apresenta uma leitura técnica e interpretativa do Plano
          Plurianual (PPA) de Taubaté, destacando avanços, desafios e
          oportunidades de melhoria na gestão municipal.
        </p>
      </header>

      {/* Acesso aos documentos oficiais */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">
          Acesso aos Documentos Oficiais
        </h2>
        <p className="text-muted-foreground">
          Você pode acessar os arquivos completos do PPA e da LOA diretamente
          pelos links abaixo:
        </p>
        <Link
          href="/data/PPA 2026-2029.pdf"
          target="_blank"
          className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
        >
          📘 Abrir PPA 2026–2029 (PDF)
        </Link>
        <Link
          href="/data/loa.pdf"
          target="_blank"
          className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700 transition"
        >
          📗 Abrir LOA 2025 (PDF)
        </Link>
        <p className="text-xs text-muted-foreground">
          Fonte: Portal da Transparência de Taubaté e documentos oficiais
          disponibilizados pela Prefeitura.
        </p>
      </div>
    </section>
  );
}