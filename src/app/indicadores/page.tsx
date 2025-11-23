// src/app/indicadores/page.tsx
"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import Link from "next/link";

// =======================
// DADOS BASE 2025 (PPA/LOA)
// =======================

// Orçamento total 2025 (LOA)
const ORCAMENTO_TOTAL_2025 = 2_578_000_000; // R$ 2,578 bi

// Aproximação usada no texto analítico do Planejamento
const CUSTEIO_2025 = 2_322_000_000; // ~90% do total
const INVESTIMENTO_2025 = 256_000_000; // ~10% do total

// IPMT – valores informados por você
const IPMT_INATIVOS = 245_846_000;
const IPMT_PENSIONISTAS = 45_334_291;
const IPMT_CUSTEIO = 8_967_368;
const IPMT_COMPENSACOES = 1_800_000;
const IPMT_RESERVA = 54_785_387;

const IPMT_TOTAL =
  IPMT_INATIVOS +
  IPMT_PENSIONISTAS +
  IPMT_CUSTEIO +
  IPMT_COMPENSACOES +
  IPMT_RESERVA;

// =======================
// HELPERS
// =======================

const formatCurrency = (value: number) =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

const formatMillions = (value: number) =>
  (value / 1_000_000).toFixed(1).replace(".", ",") + "M";

// Estrutura do orçamento (custeio x investimento)
const estruturaOrcamentoData = [
  {
    name: "Custeio (Despesas Correntes)",
    value: CUSTEIO_2025,
  },
  {
    name: "Investimento (Despesas de Capital)",
    value: INVESTIMENTO_2025,
  },
];

// Detalhamento IPMT
const ipmtBreakdownData = [
  {
    name: "Pagamento de inativos",
    value: IPMT_INATIVOS,
  },
  {
    name: "Pagamento de pensionistas",
    value: IPMT_PENSIONISTAS,
  },
  {
    name: "Custeio administrativo (RPPS)",
    value: IPMT_CUSTEIO,
  },
  {
    name: "Compensações previdenciárias",
    value: IPMT_COMPENSACOES,
  },
  {
    name: "Reserva de contingência",
    value: IPMT_RESERVA,
  },
];

// =======================
// PÁGINA
// =======================

export default function IndicadoresPage() {
  const percInvestimento = (INVESTIMENTO_2025 / ORCAMENTO_TOTAL_2025) * 100;
  const percCusteio = (CUSTEIO_2025 / ORCAMENTO_TOTAL_2025) * 100;
  const percIpmtOrcamento = (IPMT_TOTAL / ORCAMENTO_TOTAL_2025) * 100;
  const percIpmtCusteio = (IPMT_TOTAL / CUSTEIO_2025) * 100;

  return (
    <main className="max-w-6xl mx-auto px-4 pt-24 pb-16 min-h-screen bg-slate-950 text-slate-50">
      {/* HERO */}
      <header className="mb-10 space-y-3">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-sky-400">
          Indicadores • Radar Taubaté
        </p>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          Indicadores Financeiros do Município
        </h1>
        <p className="text-sm md:text-base text-slate-300 max-w-2xl">
          Aqui você vê o município em números: tamanho do orçamento, quanto vai
          para o dia a dia, quanto de fato vira investimento e qual é o peso da
          previdência (IPMT) sobre as contas públicas.
        </p>
      </header>

      {/* GRID PRINCIPAL DE INDICADORES */}
      <section className="space-y-10">
        {/* Linha 1 – orçamento x estrutura */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-sky-500/40 bg-slate-900/70 px-4 py-4 shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-wide text-sky-400">
              Orçamento total 2025 (LOA)
            </p>
            <p className="mt-2 text-2xl font-bold">
              {formatCurrency(ORCAMENTO_TOTAL_2025)}
            </p>
            <p className="mt-1 text-xs text-slate-300">
              Valor global aprovado para o exercício de 2025.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-4 shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Despesa corrente (custeio)
            </p>
            <p className="mt-2 text-2xl font-bold">
              {formatCurrency(CUSTEIO_2025)}
            </p>
            <p className="mt-1 text-xs text-slate-300">
              Aproximadamente {percCusteio.toFixed(1).replace(".", ",")}% do
              orçamento é usado para manter a máquina funcionando hoje.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-500/40 bg-slate-900/70 px-4 py-4 shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-400">
              Investimento em 2025
            </p>
            <p className="mt-2 text-2xl font-bold">
              {formatCurrency(INVESTIMENTO_2025)}
            </p>
            <p className="mt-1 text-xs text-slate-300">
              Cerca de{" "}
              {percInvestimento.toFixed(1).replace(".", ",")}% do orçamento para
              obras, equipamentos e futuro da cidade.
            </p>
          </div>
        </div>

        {/* Linha 2 – IPMT e pressão previdenciária */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-amber-500/40 bg-slate-900/70 px-4 py-4 shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-400">
              Transferência total ao IPMT (2025)
            </p>
            <p className="mt-2 text-2xl font-bold">
              {formatCurrency(IPMT_TOTAL)}
            </p>
            <p className="mt-1 text-xs text-slate-300">
              Somatório de inativos, pensionistas, custeio, compensações e
              reserva de contingência.
            </p>
          </div>

          <div className="rounded-2xl border border-amber-500/30 bg-slate-900/70 px-4 py-4 shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-300">
              Peso do IPMT no orçamento
            </p>
            <p className="mt-2 text-2xl font-bold">
              {percIpmtOrcamento.toFixed(1).replace(".", ",")}%
            </p>
            <p className="mt-1 text-xs text-slate-300">
              De cada 100 reais do orçamento, quase{" "}
              {percIpmtOrcamento.toFixed(0).replace(".", ",")} vão para cobrir
              o déficit previdenciário.
            </p>
          </div>

          <div className="rounded-2xl border border-amber-500/30 bg-slate-900/70 px-4 py-4 shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-300">
              IPMT dentro do custeio
            </p>
            <p className="mt-2 text-2xl font-bold">
              {percIpmtCusteio.toFixed(1).replace(".", ",")}%
            </p>
            <p className="mt-1 text-xs text-slate-300">
              Quase {percIpmtCusteio.toFixed(0).replace(".", ",")}% do custeio
              está preso na previdência, reduzindo a margem para políticas
              públicas ativas.
            </p>
          </div>
        </div>
      </section>

      {/* GRÁFICO 1 – ESTRUTURA DO ORÇAMENTO */}
      <section className="mt-12 space-y-4 rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">
              Estrutura do Orçamento 2025
            </h2>
            <p className="text-sm text-slate-300 max-w-xl mt-1">
              Comparação entre o que vai para manter a máquina (despesa
              corrente) e o que financia o futuro (investimento). Esta é a
              fotografia da rigidez orçamentária do município.
            </p>
          </div>
        </div>

        <div className="h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={estruturaOrcamentoData}
              layout="vertical"
              margin={{ top: 10, right: 40, bottom: 10, left: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
              <XAxis
                type="number"
                tickFormatter={formatMillions}
                stroke="#9CA3AF"
              />
              <YAxis
                type="category"
                dataKey="name"
                width={200}
                stroke="#9CA3AF"
              />
              <Tooltip
                cursor={{ opacity: 0.15 }}
                formatter={(value: any) => [formatCurrency(value as number)]}
                contentStyle={{
                  backgroundColor: "#020617",
                  borderRadius: 8,
                  border: "1px solid #1E293B",
                }}
                labelStyle={{ color: "#E5E7EB" }}
              />
              <Bar dataKey="value" radius={[4, 4, 4, 4]} fill="#0EA5E9" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* GRÁFICO 2 – DETALHAMENTO IPMT */}
      <section className="mt-10 space-y-4 rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">
              Estrutura da Despesa Previdenciária (IPMT)
            </h2>
            <p className="text-sm text-slate-300 max-w-xl mt-1">
              Como os recursos transferidos ao Instituto de Previdência são
              distribuídos entre inativos, pensionistas, administração e
              reserva de contingência.
            </p>
          </div>
        </div>

        <div className="h-[340px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={ipmtBreakdownData}
              layout="vertical"
              margin={{ top: 10, right: 40, bottom: 10, left: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
              <XAxis
                type="number"
                tickFormatter={formatMillions}
                stroke="#9CA3AF"
              />
              <YAxis
                type="category"
                dataKey="name"
                width={230}
                stroke="#9CA3AF"
              />
              <Tooltip
                cursor={{ opacity: 0.15 }}
                formatter={(value: any) => [formatCurrency(value as number)]}
                contentStyle={{
                  backgroundColor: "#020617",
                  borderRadius: 8,
                  border: "1px solid #1E293B",
                }}
                labelStyle={{ color: "#E5E7EB" }}
              />
              <Bar dataKey="value" radius={[4, 4, 4, 4]} fill="#F97316" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <p className="mt-2 text-xs text-slate-400">
          Note como a maior parte do IPMT está concentrada no pagamento de
          benefícios já concedidos (inativos e pensionistas), comprimindo a
          capacidade de investimento do município nos próximos anos.
        </p>
      </section>

      {/* INSIGHTS E LINKS */}
      <section className="mt-10 grid gap-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <div className="rounded-3xl border border-sky-500/30 bg-slate-900/80 p-5 shadow-xl space-y-3">
          <h2 className="text-lg md:text-xl font-semibold">
            Como ler estes indicadores
          </h2>
          <ul className="space-y-2 text-sm text-slate-200">
            <li>
              • Se o investimento continuar em torno de{" "}
              {percInvestimento.toFixed(1).replace(".", ",")}% do orçamento,
              grandes obras e transformações estruturais vão disputar centavos
              com o custeio obrigatório.
            </li>
            <li>
              • A pressão previdenciária acima de{" "}
              {percIpmtOrcamento.toFixed(1).replace(".", ",")}% do orçamento
              mostra que a cidade precisa discutir reforma previdenciária,
              fundo de capitalização e reequilíbrio atuarial.
            </li>
            <li>
              • Sempre compare estes números com os programas e metas do PPA:
              não basta saber quanto foi gasto, mas qual resultado foi
              entregue.
            </li>
          </ul>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5 shadow-xl space-y-3">
          <h2 className="text-lg font-semibold">Aprofunde a análise</h2>
          <p className="text-sm text-slate-300">
            Veja o detalhamento completo do planejamento e as análises
            explicativas já publicadas no Radar.
          </p>
          <div className="flex flex-wrap gap-3 mt-2">
            <Link
              href="/planejamento"
              className="inline-flex items-center rounded-xl bg-sky-500 text-slate-950 px-4 py-2 text-sm font-semibold hover:bg-sky-400 transition-colors"
            >
              Planejamento (PPA &amp; LOA)
            </Link>
            <Link
              href="/camara"
              className="inline-flex items-center rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-800 transition-colors"
            >
              Câmara Municipal
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
