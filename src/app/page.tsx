'use client';

import dynamic from 'next/dynamic';
import Hero from '@/components/home/Hero';
import { CamaraHeroCTA } from "@/components/home/CamaraHeroCTA";

const MacroDashboard = dynamic(() => import('@/components/home/MacroDashboard'), { ssr: false });
const FiscalOverview = dynamic(() => import('@/components/home/FiscalOverview'), { ssr: false });
const SecretariasGrid = dynamic(() => import('@/components/home/SecretariasGrid'), { ssr: false });
const TopFornecedoresChart = dynamic(() => import('@/components/home/TopFornecedoresChart').then(mod => mod.TopFornecedoresChart), { ssr: false });

export default function Home() {
  return (
    <main>
      <Hero />
      <MacroDashboard />
      <FiscalOverview />
      <SecretariasGrid />
      <CamaraHeroCTA />
      <TopFornecedoresChart />
    </main>
  );
}
