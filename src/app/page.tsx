'use client';

import React from "react";
import dynamic from 'next/dynamic';

// Componentes principais
import { Hero } from '@/components/home/Hero';
import { ManifestoSection } from "@/components/home/ManifestoSection";
import { CamaraHeroCTA } from "@/components/home/CamaraHeroCTA";
import GastosMunicipaisGrid from "@/components/home/GastosMunicipaisGrid";

// Mantidos como dynamic
const MacroDashboard = dynamic(() => import('@/components/home/MacroDashboard'), { ssr: false });
const FiscalOverview = dynamic(() => import('@/components/home/FiscalOverview'), { ssr: false });
const SecretariasGrid = dynamic(() => import('@/components/home/SecretariasGrid'), { ssr: false });

export default function Home() {
  return (
    <main>
      <Hero />
      <ManifestoSection />
      <MacroDashboard />
      <FiscalOverview />
      <SecretariasGrid />
      <GastosMunicipaisGrid />  
      <CamaraHeroCTA />
    </main>
  );
}