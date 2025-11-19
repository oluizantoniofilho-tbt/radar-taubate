// src/app/planejamento/page.tsx

import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Planejamento Público (PPA & LOA) | Radar Taubaté",
  description:
    "Entenda o ciclo orçamentário do município: PPA e LOA, com acesso aos documentos oficiais.",
};

export default function PlanejamentoPage() {
  return (
    // CORREÇÃO UX: Adicionado pt-24 para afastar o conteúdo do Navbar
    // Layout Centralizado: max-w-7xl mx-auto
    <main className="max-w-7xl mx-auto px-6 pt-24 pb-16 min-h-screen">
      
      {/* Intro */}
      <header className="space-y-4 mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
          Planejamento Público: PPA & LOA
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-5xl">
          O ciclo orçamentário municipal é composto pelo{" "}
          <strong className="text-primary">PPA</strong> (plano de médio prazo) e pela{" "}
          <strong className="text-primary">LOA</strong> (orçamento anual). Aqui você entende cada peça e
          acessa os documentos oficiais.
        </p>
      </header>

      {/* Ciclo em 3 linhas rápidas */}
      <div className="grid gap-4 sm:grid-cols-3 mb-12">
        <div className="rounded-xl border border-border p-5 bg-card shadow-sm">
          <h3 className="font-semibold text-lg text-primary">1) PPA (Plano Plurianual)</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Diretrizes, objetivos e metas para 4 anos de mandato, garantindo a continuidade das políticas.
          </p>
        </div>
        <div className="rounded-xl border border-border p-5 bg-card shadow-sm">
          <h3 className="font-semibold text-lg text-primary">2) LDO (Lei de Diretrizes Orçamentárias)</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Prioriza as metas do PPA que serão executadas no ano e orienta a elaboração da LOA.
          </p>
        </div>
        <div className="rounded-xl border border-border p-5 bg-card shadow-sm">
          <h3 className="font-semibold text-lg text-primary">3) LOA (Lei Orçamentária Anual)</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Estima receitas e fixa despesas detalhadas por programa e órgão para o exercício financeiro.
          </p>
        </div>
      </div>

      {/* PPA Section */}
      <section className="space-y-4 py-8 border-t border-border">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">PPA 2026–2029 (Plano de Médio Prazo)</h2>
        <p className="text-muted-foreground max-w-4xl text-lg">
          O PPA define programas, ações e resultados esperados ao longo de quatro anos. Ele é a espinha dorsal do planejamento estratégico do município.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          {/* Ajuste o href conforme o nome real do arquivo no /public/data */}
          <Link
            href="/data/PPA 2026-2029.pdf"
            target="_blank"
            className="inline-flex items-center rounded-lg border border-primary bg-primary text-primary-foreground px-5 py-2.5 font-medium hover:bg-primary/90 transition"
          >
            Abrir PPA (PDF)
          </Link>

          <Link
            href="/indicadores"
            className="inline-flex items-center rounded-lg border border-border px-5 py-2.5 text-slate-700 dark:text-slate-200 hover:bg-muted transition"
          >
            Ver indicadores relacionados
          </Link>
        </div>
      </section>

      {/* LOA Section */}
      <section className="space-y-4 py-8 border-t border-border">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">LOA 2025 (Orçamento Anual Detalhado)</h2>
        <p className="text-muted-foreground max-w-4xl text-lg">
          A LOA é a lei que detalha o orçamento do ano: quanto o município pretende arrecadar
          e como planeja gastar, por função e programa. É aqui que o dinheiro é alocado.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          {/* Este arquivo você já tem: /public/data/loa.pdf */}
          <Link
            href="/data/loa.pdf"
            target="_blank"
            className="inline-flex items-center rounded-lg border border-primary bg-primary text-primary-foreground px-5 py-2.5 font-medium hover:bg-primary/90 transition"
          >
            Abrir LOA (PDF)
          </Link>

          <Link
            href="/relatorios"
            className="inline-flex items-center rounded-lg border border-border px-5 py-2.5 text-slate-700 dark:text-slate-200 hover:bg-muted transition"
          >
            Ver relatórios de execução
          </Link>
        </div>
      </section>

      {/* Chamada educativa futura */}
      <aside className="rounded-xl border border-dashed border-border p-6 mt-12 bg-card/40">
        <p className="text-sm text-muted-foreground">
          Em breve: comparativos entre o que foi planejado (PPA) e o que foi de fato executado (LOA),
          com análises de desvios e variações orçamentárias detalhadas por área.
        </p>
      </aside>
    </main>
  );
}
