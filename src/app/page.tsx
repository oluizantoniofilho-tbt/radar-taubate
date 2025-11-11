"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import DashboardCards from "../components/DashboardCards";


<DashboardCards />
export default function HomePage() {
  return (
    <main className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      {/* ==== Fundo com imagem e overlay ==== */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/taubate-panorama.jpg" // ✅ Corrigido — o Next acessa direto da pasta /public
          alt="Cidade de Taubaté"
          fill
          priority
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-blue-900/40 to-slate-900/90"></div>
      </div>

      {/* ==== Conteúdo principal ==== */}
      <section className="relative z-10 px-6 py-12 max-w-4xl">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Radar Taubaté
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-xl text-blue-100 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Painel de Inteligência Pública • Transparência e análise inteligente das finanças municipais
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Link
            href="/indicadores"
            className="inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold text-white rounded-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-blue-500/40"
          >
            Explorar Indicadores →
          </Link>
        </motion.div>
      </section>

      {/* ==== Rodapé do Hero (opcional) ==== */}
      <div className="absolute bottom-4 text-xs text-blue-200">
        © {new Date().getFullYear()} Aletheia — Observatório de Governança e Dados Públicos
      </div>
    </main>
  );
}