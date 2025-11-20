'use client';

import React from "react";
import dynamic from 'next/dynamic';

// Componentes principais da Home
import { Hero } from '@/components/home/Hero';
import { ManifestoSection } from "@/components/home/ManifestoSection";
import { CamaraHeroCTA } from "@/components/home/CamaraHeroCTA";

// Componentes dinâmicos (otimizados)
const MacroDashboard = dynamic(
  () => import('@/components/home/MacroDashboard'),
  { ssr: false }
);

const FiscalOverview = dynamic(
  () => import('@/components/home/FiscalOverview'),
  { ssr: false }
);

// 🔥 Hero content original — restaurado
const HERO_CONTENT = {
  title: 'O Primeiro Observatório Social Independente do Vale do Paraíba',
  subtitle: 'Criado em Taubaté para inspirar uma nova cultura de transparência no Vale.',
  supportingLine: 'Transparência e educação pública para fortalecer o cidadão.',
  ctaLabel: 'Explorar Dados',
  ctaLink: '/indicadores',
};

export default function Home() {
  return (
    <main>
      {/* Dobra 1: Hero */}
      <Hero
      />

      {/* Dobra 2: Manifesto */}
      <ManifestoSection />

      {/* Dobra 3: Visão Geral das Contas Públicas */}
      <MacroDashboard />

      {/* Dobra 4: Análise Fiscal do Município */}
      <FiscalOverview />

      {/* CTA da Câmara — permanece exatamente como era */}
      <CamaraHeroCTA />
    </main>
  );
}