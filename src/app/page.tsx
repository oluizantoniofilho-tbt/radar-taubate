"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import DashboardCards from "../components/DashboardCards"; // ✅ caminho correto

export default function HomePage() {
  return (
    <main className="relative min-h-screen flex flex-col justify-center items-center text-center">
      {/* ==== Fundo com imagem e overlay ==== */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/taubate-panorama.jpg"
          alt="Cidade de Taubaté"
          fill
          priority
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
      </div>

      {/* ==== Conteúdo principal ==== */}
      <section className="relative z-10 px-6 py-16 max-w-4xl">
        <h1 className="text-5xl font-bold text-white drop-shadow-lg mb-4">
          Radar Taubaté
        </h1>
        <p className="text-lg text-gray-200 mb-8">
          Painel de Inteligência Pública • Transparência e análise inteligente das finanças municipais
        </p>
        <Link href="/indicadores">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition-all">
            Explorar Indicadores →
          </button>
        </Link>

        {/* ==== Bloco de Cards ==== */}
        <div className="mt-16">
          <DashboardCards />
        </div>
      </section>
    </main>
  );
}