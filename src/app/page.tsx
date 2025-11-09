"use client";
import { useEffect, useState } from "react";
import ThemeToggle from "./dashboard/components/ThemeToggle";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
  BarChart, Bar
} from "recharts";

type ApiData = {
  totals: { receitas: number; despesas: number; saldo: number };
  receitasTop5: { fonte: string; valor: number }[];
  despesasTop5: { funcao: string; valor: number }[];
  serie: { mes: string; receitas: number; despesas: number }[];
  pdf: { bytes: number; preview: string };
};

export default function Home() {
  const [data, setData] = useState<ApiData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/data").then(r => r.json()).then(setData).finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-8">Carregando…</div>;
  if (!data) return <div className="p-8">Sem dados.</div>;

  const moeda = (n:number)=> n.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});

  return (
    <main className="max-w-7xl mx-auto p-6 space-y-8">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Radar Taubaté</h1>
        <ThemeToggle />
      </header>

      {/* Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4">
          <p className="text-sm opacity-70">Receitas</p>
          <p className="text-2xl font-semibold">{moeda(data.totals.receitas)}</p>
        </div>
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4">
          <p className="text-sm opacity-70">Despesas</p>
          <p className="text-2xl font-semibold">{moeda(data.totals.despesas)}</p>
        </div>
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4">
          <p className="text-sm opacity-70">Saldo</p>
          <p className="text-2xl font-semibold">{moeda(data.totals.saldo)}</p>
        </div>
      </section>

      {/* Série temporal */}
      <section className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4">
        <h2 className="font-semibold mb-4">Evolução mensal</h2>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data.serie}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="receitas" />
              <Line type="monotone" dataKey="despesas" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Top 5 */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4">
          <h2 className="font-semibold mb-4">Receitas — Top 5 Fontes</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.receitasTop5}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="fonte" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="valor" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4">
          <h2 className="font-semibold mb-4">Despesas — Top 5 Funções</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.despesasTop5}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="funcao" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="valor" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* PDF */}
      <section className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4">
        <h2 className="font-semibold mb-2">PDF (pré-visualização técnica)</h2>
        {data.pdf.bytes > 0 ? (
          <>
            <p className="text-sm opacity-70 mb-2">Arquivo detectado: {data.pdf.bytes.toLocaleString()} bytes</p>
            <pre className="text-xs whitespace-pre-wrap opacity-80">{data.pdf.preview}</pre>
          </>
        ) : (
          <p className="text-sm opacity-70">Nenhum PDF encontrado em <code>data/loa.pdf</code>.</p>
        )}
      </section>
    </main>
  );
}