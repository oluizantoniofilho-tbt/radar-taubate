import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#1e3a8a] text-white">
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center text-center py-24 px-6 overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/taubate-panorama.jpg"
            alt="Cidade de Taubaté"
            layout="fill"
            objectFit="cover"
            className="opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Radar Taubaté
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-300">
            Painel de Inteligência Pública • Transparência e análise inteligente das finanças municipais
          </p>

          <Link
            href="/indicadores"
            className="mt-8 inline-flex items-center rounded-lg bg-blue-600 hover:bg-blue-700 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all"
          >
            Explorar Indicadores →
          </Link>
        </div>

        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/20 blur-3xl rounded-full" />
      </section>

      {/* KPI CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-16 max-w-6xl mx-auto">
        {/* Receita */}
        <div className="rounded-2xl bg-gradient-to-b from-green-500/90 to-green-600/80 p-6 text-white shadow-xl hover:scale-105 transition-transform relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white/10 opacity-0 hover:opacity-10 transition" />
          <h3 className="text-lg font-medium">Total de Receitas</h3>
          <p className="text-3xl font-bold mt-2">R$ 50.000.000,00</p>
          <p className="text-sm mt-2 opacity-80">Atualizado: nov/2025</p>
          <div className="absolute bottom-3 right-4 text-2xl">↗️</div>
        </div>

        {/* Despesa */}
        <div className="rounded-2xl bg-gradient-to-b from-red-500/90 to-red-600/80 p-6 text-white shadow-xl hover:scale-105 transition-transform relative overflow-hidden">
          <h3 className="text-lg font-medium">Total de Despesas</h3>
          <p className="text-3xl font-bold mt-2">R$ 45.000.000,00</p>
          <p className="text-sm mt-2 opacity-80">Atualizado: nov/2025</p>
          <div className="absolute bottom-3 right-4 text-2xl">↘️</div>
        </div>

        {/* Saldo */}
        <div className="rounded-2xl bg-gradient-to-b from-blue-500/90 to-blue-600/80 p-6 text-white shadow-xl hover:scale-105 transition-transform relative overflow-hidden">
          <h3 className="text-lg font-medium">Saldo Atual</h3>
          <p className="text-3xl font-bold mt-2">R$ 5.000.000,00</p>
          <p className="text-sm mt-2 opacity-80">Atualizado: nov/2025</p>
          <div className="absolute bottom-3 right-4 text-2xl">⚖️</div>
        </div>
      </section>
    </main>
  );
}