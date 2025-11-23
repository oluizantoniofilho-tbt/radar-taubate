"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export function DespesaGeralSection() {
  // ---------------------------
  // DADOS OFICIAIS (LOA 2025)
  // ---------------------------
  const custeio = 2307789800;
  const investimento = 256210570;

  const data = [
    { name: "Custeio (Despesas Correntes)", value: custeio },
    { name: "Investimento (Despesas de Capital)", value: investimento },
  ];

  const currency = (value: number) =>
    value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    });

  const percent = (value: number) =>
    ((value / (custeio + investimento)) * 100).toFixed(1).replace(".", ",");

  return (
    <section className="max-w-6xl mx-auto px-6 py-14 space-y-12">
      {/* TÍTULO */}
      <header className="space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Estrutura do Gasto Municipal — LOA 2025
        </h2>
        <p className="text-slate-300 max-w-3xl text-sm md:text-base">
          Estes são os valores **estimados** da Lei Orçamentária Anual (LOA) de
          Taubaté para 2025. Aqui você vê quanto do orçamento a cidade usa para
          manter o presente (custeio) e quanto pode investir no futuro
          (investimentos).
        </p>
      </header>

      {/* KPIs */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* CUSTEIO */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg">
          <p className="text-xs uppercase tracking-wide text-slate-400">
            Despesa Corrente (Custeio)
          </p>
          <p className="text-3xl font-bold text-white mt-1">
            {currency(custeio)}
          </p>
          <p className="text-sm text-slate-400 mt-1">
            Representa <strong className="text-sky-400">{percent(custeio)}%</strong>{" "}
            de todo o orçamento da cidade para 2025.
          </p>
        </div>

        {/* INVESTIMENTO */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg">
          <p className="text-xs uppercase tracking-wide text-slate-400">
            Despesa de Capital (Investimento)
          </p>
          <p className="text-3xl font-bold text-white mt-1">
            {currency(investimento)}
          </p>
          <p className="text-sm text-slate-400 mt-1">
            Representa apenas{" "}
            <strong className="text-emerald-400">
              {percent(investimento)}%
            </strong>{" "}
            do orçamento — a parte destinada às obras e ao futuro da cidade.
          </p>
        </div>
      </div>

      {/* GRÁFICO */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl">
        <h3 className="text-lg md:text-xl font-semibold mb-4 text-white">
          Custeio x Investimento — Quanto vai para onde?
        </h3>

        <div className="h-[320px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              layout="vertical"
              margin={{ top: 10, left: 0, right: 20, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.15} />

              <XAxis
                type="number"
                tickFormatter={(v: number) =>
                  v >= 1_000_000
                    ? (v / 1_000_000).toFixed(1) + "M"
                    : v.toString()
                }
                stroke="#94a3b8"
              />

              <Tooltip
                formatter={(value: number) => currency(value)}
                contentStyle={{
                  background: "#1e293b",
                  border: "none",
                  borderRadius: "8px",
                  color: "white",
                }}
              />

              <Bar dataKey="value" radius={[4, 4, 4, 4]} fill="#38bdf8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <p className="text-xs text-slate-400 mt-3">
          Valores **estimados** conforme a LOA 2025. Podem sofrer ajustes durante
          o ano à medida que a receita municipal oscila.
        </p>
      </div>

      {/* ANÁLISE CRÍTICA */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-white">
          O que este gráfico revela sobre Taubaté
        </h3>
        <p className="text-slate-300 text-sm md:text-base max-w-4xl">
          O orçamento de Taubaté é amplamente consumido pelo custeio — folha de
          pagamento, saúde, educação, manutenção de estruturas e serviços
          públicos. Isso deixa pouco espaço para investimentos e obras.
        </p>
        <p className="text-slate-300 text-sm md:text-base max-w-4xl">
          Não é possível executar plenamente o planejamento estratégico do PPA
          com apenas 10% de capital. Isso cria um cenário de{" "}
          <span className="text-red-400 font-semibold">
            alto risco de corte em obras
          </span>{" "}
          e inovação, tornando a cidade dependente de receitas extraordinárias.
        </p>
      </section>

      {/* GLOSSÁRIO */}
      <aside className="rounded-xl border border-dashed border-slate-700 p-5 bg-slate-900/40 mt-8">
        <h4 className="text-lg font-semibold text-white mb-2">Glossário rápido</h4>

        <ul className="text-slate-300 text-sm space-y-2">
          <li>
            <strong className="text-sky-400">Custeio:</strong> Despesas do dia a dia —
            salários, manutenção, combustível, medicamentos, contas públicas.
          </li>
          <li>
            <strong className="text-emerald-400">Investimento:</strong> Obras,
            infraestrutura, tecnologia e projetos que constroem o futuro.
          </li>
        </ul>
      </aside>
    </section>
  );
}
