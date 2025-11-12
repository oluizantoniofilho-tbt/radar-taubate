'use client';

import dynamic from 'next/dynamic';
import Hero from '@/components/home/Hero';

const MacroDashboard = dynamic(() => import('@/components/home/MacroDashboard'), { ssr: false });
const FiscalOverview = dynamic(() => import('@/components/home/FiscalOverview'), { ssr: false });
const SecretariasGrid = dynamic(() => import('@/components/home/SecretariasGrid'), { ssr: false });

export default function Home() {
  return (
    <main>
      <Hero />
      <MacroDashboard />
      <FiscalOverview />
      <SecretariasGrid />
    </main>
  );
}
