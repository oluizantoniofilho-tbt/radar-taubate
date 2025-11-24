"use client";

import React from "react";

export default function ManifestoPage() {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-50 pt-24 pb-16 px-6">
      <section className="max-w-4xl mx-auto space-y-12">

        {/* HEADER */}
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
            Manifesto Radar Taubaté
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Uma nova cultura de transparência, educação cívica e inteligência pública
            começa aqui. Esta é a versão 1.0 do primeiro observatório social
            independente do Vale do Paraíba.
          </p>
        </header>

        {/* BLOCO 1 — VISÃO */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Por que o Radar existe?</h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            O Radar Taubaté nasce para resolver um problema real:
            <span className="text-white font-semibold">
              {" "}a população não sabe onde o dinheiro público está sendo aplicado,
              quais são as prioridades reais do governo ou se as promessas estão
              sendo cumpridas.
            </span>
          </p>

          <p className="text-slate-300 text-lg">
            As informações existem, mas estão em PDFs, sistemas, portais federais,
            planilhas e documentos técnicos, mas não estão organizadas,
            interpretadas ou traduzidas para a linguagem do cidadão.
          </p>

          <p className="text-slate-300 text-lg">
            O Radar resolve isso tornando dados públicos compreensíveis, visualizáveis
            e acionáveis. Transparência que faz sentido. Dados que viram poder cívico.
          </p>
        </section>

        {/* BLOCO 2 — PROPÓSITO */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Nosso propósito</h2>

          <p className="text-slate-300 text-lg">
            Construir uma cidade mais consciente, crítica e capaz de cobrar resultados,
            não narrativas. Transformar números frios em compreensão pública. Mostrar,
            com clareza, onde o orçamento é cumprido, onde trava e onde precisa melhorar.
          </p>

          <p className="text-slate-300 text-lg">
            Ser ponte entre o cidadão e o funcionamento do Estado. Facilitar o
            entendimento e fortalecer uma cultura de participação cívica baseada em
            dados, não em opiniões soltas.
          </p>
        </section>

        {/* BLOCO 3 — O QUE SOMOS / O QUE NÃO SOMOS */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">O que o Radar é, e o que não é</h2>

          <div className="space-y-3">
            <p className="text-slate-300 text-lg">
              ✔ <span className="font-semibold text-white">Somos independentes.</span>{" "}
              Não representamos prefeitura, partidos, vereadores ou grupos econômicos.
            </p>
            <p className="text-slate-300 text-lg">
              ✔ <span className="font-semibold text-white">Somos cívicos.</span>{" "}
              Nossa missão é educar, esclarecer e empoderar a sociedade.
            </p>
            <p className="text-slate-300 text-lg">
              ✔ <span className="font-semibold text-white">Somos técnicos.</span>{" "}
              Utilizamos dados oficiais, estatísticas públicas, metodologias sólidas e
              análise de impacto.
            </p>
            <p className="text-slate-300 text-lg">
              ❌ <span className="font-semibold text-red-400">Não somos oposição.</span>
            </p>
            <p className="text-slate-300 text-lg">
              ❌ <span className="font-semibold text-red-400">Não somos situação.</span>
            </p>
            <p className="text-slate-300 text-lg">
              ❌ <span className="font-semibold text-red-400">Não fazemos campanha política.</span>
            </p>
          </div>
        </section>

        {/* BLOCO 4 — O RADAR É PARTE DO ALETHEIA */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Parte de algo maior: Aletheia Hub</h2>

          <p className="text-slate-300 text-lg">
            O Radar Taubaté é o primeiro grande produto público do
            <span className="font-semibold text-white"> Aletheia Hub</span>,
            um ecossistema dedicado a criar transparência, inteligência governamental e
            cultura de alto desempenho institucional.
          </p>

          <p className="text-slate-300 text-lg">
            O Aletheia Hub nasce com a visão de construir uma nova geração de cidadãos,
            lideranças e gestores públicos guiados pela verdade, pelos dados e
            pela responsabilidade.
          </p>

          <p className="text-slate-300 text-lg">
            O Radar é o início, o primeiro farol.
          </p>
        </section>

        {/* BLOCO 5 — ROADMAP */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Roadmap, a evolução já começou</h2>

          <p className="text-slate-300 text-lg">
            Esta é a versão <span className="text-white font-semibold">1.0</span> do Radar.
            Um ponto de partida sólido. Mas o projeto é muito maior.
          </p>

          <ul className="space-y-2 text-lg text-slate-300 mt-4">
            <li>🚀 <span className="text-white font-semibold">Versão 1.1</span>: novos indicadores, mais séries históricas e análises aprofundadas.</li>
            <li>🤖 <span className="text-white font-semibold">Radar Analytics (versão executiva)</span>:  
              inteligência artificial, machine learning, diagnósticos automáticos, planos de ação e previsão de risco fiscal/político.
            </li>
            <li>📊 <span className="text-white font-semibold">Portal regional</span>: expansão para todo Vale do Paraíba.</li>
            <li>🏛 <span className="text-white font-semibold">Painéis temáticos</span>: Saúde, Educação, Infraestrutura, Segurança e Mobilidade.</li>
            <li>🧭 <span className="text-white font-semibold">Índices próprios</span>: Eficiência Legislativa, Rigor Fiscal, Capacidade de Investimento e Impacto Social.</li>
          </ul>
        </section>

        {/* BLOCO 6 — CHAMADO AO CIDADÃO */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Nosso chamado ao cidadão</h2>

          <p className="text-slate-300 text-lg">
            O Radar não existe para criticar nem para elogiar governos.
            Existe para iluminar. Para mostrar. Para dar clareza.
          </p>

          <p className="text-slate-300 text-lg">
            Acreditamos que uma população bem informada é mais difícil de manipular,
            mais forte para exigir resultados e mais preparada para transformar sua cidade.
          </p>

          <p className="text-slate-300 text-lg font-semibold">
            Informação liberta. Transparência educa. Dados constroem cidadania.
          </p>
        </section>

        {/* CONTATO OFICIAL */}
        <section className="mt-16 border-t border-white/10 pt-10">
          <h2 className="text-2xl font-bold text-white mb-4">Contato Oficial</h2>
          <p className="text-slate-300 max-w-xl">
            Como esta é a versão 1.0 do Radar Taubaté, nossos canais ainda estão em expansão.
            Por enquanto, use os canais oficiais abaixo:
          </p>

          <ul className="mt-6 space-y-3 text-slate-200">
            <li>
              <span className="font-semibold text-sky-400">E-mail:</span>
              <a href="mailto:contatoaletheiahub@gmail.com"
                 className="ml-2 underline hover:text-sky-300">
                contatoaletheiahub@gmail.com
              </a>
            </li>

            <li>
              <span className="font-semibold text-sky-400">Instagram:</span>
              <a href="https://instagram.com/radartaubate"
                 target="_blank"
                 className="ml-2 underline hover:text-sky-300">
                @radartaubate
              </a>
            </li>
          </ul>

          <p className="mt-4 text-sm text-slate-500">
            Novos canais (domínio próprio, e-mail corporativo e ambiente de atendimento)
            virão com a versão 2.0.
          </p>
        </section>

      </section>
    </main>
  );
}
