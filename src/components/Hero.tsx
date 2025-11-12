
'use client'
import * as React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative h-[60vh] w-full">
      <Image
        src="/taubate-panorama.jpg"
        alt="Panorama de Taubaté"
        fill
        className="object-cover brightness-50"
        quality={80}
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          Radar Taubaté
        </h1>
        <p className="mt-2 text-lg md:text-xl opacity-90">
          Painel de Inteligência Pública — Transparência e análise inteligente das finanças municipais.
        </p>
        <a
          href="#indicadores"
          className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-2xl transition"
        >
          Explorar Indicadores →
        </a>
      </div>
    </div>
  )
}