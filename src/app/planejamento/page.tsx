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
    <section className="p-8 space-y-8">
      {/* Intro */}
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-primary">
          Planejamento Público: PPA & LOA
        </h1>
        <p className="text-muted-foreground max-w-3xl">
          O ciclo orçamentário municipal é composto pelo{" "}
          <strong>PPA</strong> (plano de médio prazo) e pela{" "}
          <strong>LOA</strong> (orçamento anual). Aqui você entende cada peça e
          acessa os documentos oficiais.
        </p>
      </header>

      {/* Ciclo em 3 linhas rápidas */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-border p-4 bg-card">
          <h3 className="font-semibold">1) PPA</h3>
          <p className="text-sm text-muted-foreground">
            Plano Plurianual: diretrizes, objetivos e metas para 4 anos.
          </p>
        </div>
        <div className="rounded-xl border border-border p-4 bg-card">
          <h3 className="font-semibold">2) LDO</h3>
          <p className="text-sm text-muted-foreground">
            Lei de Diretrizes Orçamentárias: prioriza metas do ano.
          </p>
        </div>
        <div className="rounded-xl border border-border p-4 bg-card">
          <h3 className="font-semibold">3) LOA</h3>
          <p className="text-sm text-muted-foreground">
            Lei Orçamentária Anual: estima receitas e fixa despesas do ano.
          </p>
        </div>
      </div>

      {/* PPA */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">PPA 2026–2029</h2>
        <p className="text-muted-foreground max-w-3xl">
          O PPA define programas e resultados esperados ao longo de quatro anos.
          Ele orienta as prioridades estratégicas e dá previsibilidade ao
          orçamento.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          {/* Ajuste o href conforme o nome real do arquivo no /public/data */}
          <Link
            href="/data/PPA 2026-2029.pdf"
            target="_blank"
            className="inline-flex items-center rounded-lg border border-primary px-4 py-2 text-primary hover:bg-primary hover:text-primary-foreground transition"
          >
            Abrir PPA (PDF)
          </Link>

          <Link
            href="/indicadores"
            className="inline-flex items-center rounded-lg border border-border px-4 py-2 hover:bg-muted transition"
          >
            Ver indicadores relacionados
          </Link>
        </div>
      </section>

      {/* LOA */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">LOA 2025</h2>
        <p className="text-muted-foreground max-w-3xl">
          A LOA detalha o orçamento do ano: quanto o município pretende arrecadar
          e como planeja gastar, por função e programa.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          {/* Este arquivo você já tem: /public/data/loa.pdf */}
          <Link
            href="/data/loa.pdf"
            target="_blank"
            className="inline-flex items-center rounded-lg border border-primary px-4 py-2 text-primary hover:bg-primary hover:text-primary-foreground transition"
          >
            Abrir LOA (PDF)
          </Link>

          <Link
            href="/relatorios"
            className="inline-flex items-center rounded-lg border border-border px-4 py-2 hover:bg-muted transition"
          >
            Ver relatórios
          </Link>
        </div>
      </section>

      {/* Chamada educativa futura */}
      <aside className="rounded-xl border border-dashed border-border p-4 bg-card/40">
        <p className="text-sm text-muted-foreground">
          Em breve: comparativos entre planejado (PPA) e executado (LOA),
          variações por função, e alertas automáticos de desvios.
        </p>
      </aside>
    </section>
  );
}