'use client';

import React from "react";
import dynamic from 'next/dynamic';

// Componentes principais da Home
import { Hero } from '@/components/home/Hero';
import { ManifestoSection } from "@/components/home/ManifestoSection";
import { CamaraHeroCTA } from "@/components/home/CamaraHeroCTA";

// Componentes dinâmicos (exportados sem default — CORRIGIDOS)
const MacroDashboard = dynamic(
  () => import('@/components/home/MacroDashboard'),
  { ssr: false }
);

const FiscalOverview = dynamic(
  () => import('@/components/home/FiscalOverview'),
  { ssr: false }
);

// CORREÇÃO: buscar export nomeado
const DespesasPorSecretariaTop10 = dynamic(
  () =>
    import('@/components/charts/DespesasPorSecretariaTop10').then(
      (mod) => mod.DespesasPorSecretariaTop10
    ),
  { ssr: false }
);

const TopGastosMunicipaisChart = dynamic(
  () =>
    import('@/components/charts/TopGastosMunicipaisChart').then(
      (mod) => mod.TopGastosMunicipaisChart
    ),
  { ssr: false }
);

export default function Home() {
  return (
    <main>

      {/* Dobra 1 */}
      <Hero />

      {/* Dobra 2 */}
      <ManifestoSection />

      {/* Dobra 3 */}
      <MacroDashboard />

      {/* Dobra 4 */}
      <FiscalOverview />

      {/* Dobra 5 */}
      <section className="py-16 px-4 bg-gray-100 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Despesas por Secretaria — Top 10
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">
              Acompanhe a distribuição dos gastos nas principais secretarias do município.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-900/70 backdrop-blur-sm border border-slate-300/40 dark:border-slate-700/40 shadow-lg hover:shadow-xl rounded-xl p-6 transition-shadow duration-300">
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-4">
              <DespesasPorSecretariaTop10 />
            </div>
          </div>
        </div>
      </section>

      {/* Dobra 6 */}
      <section className="py-16 px-4 bg-gray-100 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Top 10 Gastos Municipais
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">
              Veja os principais focos de despesa da administração municipal em detalhes.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-900/70 backdrop-blur-sm border border-slate-300/40 dark:border-slate-700/40 shadow-lg hover:shadow-xl rounded-xl p-6 transition-shadow duration-300">
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-4">
              <TopGastosMunicipaisChart />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CamaraHeroCTA />
    </main>
  );
}