"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center min-h-[60vh] text-center">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/img/taubate-panorama.jpg"
            alt="Cidade de Taubaté"
            fill
            style={{ objectFit: "cover" }}
            className="opacity-30 blur-[1px]"
            priority
          />
        </div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 -z-0 bg-gradient-to-b from-background/40 via-background/50 to-background/90" />

        {/* Conteúdo principal */}
        <div className="relative z-10 space-y-4">
          <h1 className="text-5xl font-bold tracking-tight text-primary">
            Radar Taubaté
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Painel de Inteligência Pública • Transparência e análise inteligente das finanças municipais
          </p>
          <Link
            href="/indicadores"
            className="inline-flex items-center px-6 py-3 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all"
          >
            Explorar Indicadores →
          </Link>
        </div>
      </section>

      {/* DASHBOARD PREVIEW */}
      <section className="container mx-auto py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-green-600 text-white p-6 rounded-xl text-center shadow-md">
            <h3 className="text-lg font-semibold">Total de Receitas</h3>
            <p className="text-3xl font-bold mt-2">R$ 50.000.000,00</p>
            <span className="text-sm opacity-80">Atualizado: nov/2025</span>
          </div>

          <div className="bg-red-600 text-white p-6 rounded-xl text-center shadow-md">
            <h3 className="text-lg font-semibold">Total de Despesas</h3>
            <p className="text-3xl font-bold mt-2">R$ 45.000.000,00</p>
            <span className="text-sm opacity-80">Atualizado: nov/2025</span>
          </div>

          <div className="bg-blue-600 text-white p-6 rounded-xl text-center shadow-md">
            <h3 className="text-lg font-semibold">Saldo Atual</h3>
            <p className="text-3xl font-bold mt-2">R$ 5.000.000,00</p>
            <span className="text-sm opacity-80">Atualizado: nov/2025</span>
          </div>
        </div>
      </section>
    </main>
  );
}