'use client'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative h-96 w-full">
      <Image
        src="/taubate-panorama.jpg"
        alt="Panorama de Taubaté"
        layout="fill"
        objectFit="cover"
        quality={75}
        priority
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center p-4">
        <h1 className="text-4xl md:text-6xl font-bold">Radar Taubaté</h1>
        <p className="mt-2 text-lg md:text-xl">Painel de Inteligência Pública</p>
      </div>
    </div>
  )
}
