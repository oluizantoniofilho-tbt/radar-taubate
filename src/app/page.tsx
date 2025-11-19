'use client'; // MANTIDO para garantir a compatibilidade com o seu setup existente.

import dynamic from 'next/dynamic';
import { Hero } from '@/components/home/Hero';
import { CamaraHeroCTA } from "@/components/home/CamaraHeroCTA";
import { ManifestoSection } from "@/components/home/ManifestoSection";

// [CORREÇÃO APLICADA]: Definindo o conteúdo estático que o Hero precisa.
const HERO_CONTENT = {
  title: 'O Primeiro Observatório Social Independente do Vale do Paraíba', 
  subtitle: 'Criado em Taubaté para inspirar uma nova cultura de transparência no Vale.',
  supportingLine: 'Transparência e educação pública para fortalecer o cidadão.',
  ctaLabel: 'Explorar Dados',
  ctaLink: '/indicadores',
};

const MacroDashboard = dynamic(() => import('@/components/home/MacroDashboard'), { ssr: false });
const FiscalOverview = dynamic(() => import('@/components/home/FiscalOverview'), { ssr: false });
const SecretariasGrid = dynamic(() => import('@/components/home/SecretariasGrid'), { ssr: false });
const TopFornecedoresChart = dynamic(() => import('@/components/home/TopFornecedoresChart').then(mod => mod.TopFornecedoresChart), { ssr: false });

export default function Home() {
  return (
    <main>
      {/* CORREÇÃO APLICADA: Passando as props obrigatórias */}
      <Hero 
        title={HERO_CONTENT.title}
        subtitle={HERO_CONTENT.subtitle}
        supportingLine={HERO_CONTENT.supportingLine}
        ctaLabel={HERO_CONTENT.ctaLabel}
        ctaLink={HERO_CONTENT.ctaLink}
      />
      
      {/* Outros componentes mantidos */}
      <ManifestoSection />
      <MacroDashboard />
      <FiscalOverview />
      <SecretariasGrid />
      <TopFornecedoresChart />
      <CamaraHeroCTA />
    </main>
  );
}