'use client';

export function ManifestoSection() {
  return (
    <section
      className="
        w-full 
        py-20 px-6 
        bg-gradient-to-b from-[#0f172a] to-[#1e293b]
        text-left
      "
    >
      <div className="max-w-3xl mx-auto">
        
        {/* TÍTULO */}
        <h2
          className="
            text-3xl font-bold 
            text-white 
            mb-6
          "
        >
          Por que criamos este Observatório
        </h2>

        {/* PARÁGRAFO 1 */}
        <p className="text-[16px] md:text-[17px] leading-relaxed text-slate-200 mb-6">
          O Observatório nasce para devolver ao cidadão aquilo que lhe pertence: 
          <span className="hlt"> a verdade sobre a sua própria cidade</span>.
        </p>

        {/* PARÁGRAFO 2 */}
        <p className="text-[16px] md:text-[17px] leading-relaxed text-slate-300 mb-6">
          Aqui, dados públicos são traduzidos em conhecimento claro, confiável e acessível,
          permitindo que qualquer pessoa compreenda como Taubaté funciona, para onde vão os
          recursos e como decisões moldam o futuro coletivo.
        </p>

        {/* PARÁGRAFO 3 */}
        <p className="text-[16px] md:text-[17px] leading-relaxed text-slate-300">
          Nosso propósito é fortalecer a 
          <span className="hlt"> consciência cívica</span>, iluminar o 
          <span className="hlt"> debate público</span> e promover a 
          <span className="hlt"> educação pública</span> como caminho para uma cidade mais justa e transparente.
        </p>

      </div>
    </section>
  );
}