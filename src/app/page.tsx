'use client';

import NoticiasOficiaisSection from "@/components/home/NoticiasOficiaisSection";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Hero } from "@/components/home/Hero";
import { ManifestoSection } from "@/components/home/ManifestoSection";
import { CamaraHeroCTA } from "@/components/home/CamaraHeroCTA";
import InsightsDrawer from "@/components/home/InsightsDrawer";


// componentes dinâmicos
const MacroDashboard = dynamic(
  () => import("@/components/home/MacroDashboard"),
  { ssr: false }
);

const FiscalOverview = dynamic(
  () => import("@/components/home/FiscalOverview"),
  { ssr: false }
);

const DespesasPorSecretariaTop10 = dynamic(
  () => import("@/components/charts/DespesasPorSecretariaTop10"),
  { ssr: false }
);

const TopGastosMunicipaisChart = dynamic(
  () => import("@/components/charts/TopGastosMunicipaisChart"),
  { ssr: false }
);

export default function Home() {
  const [isSecretariasDrawerOpen, setSecretariasDrawerOpen] = useState(false);
  const [isTopGastosDrawerOpen, setTopGastosDrawerOpen] = useState(false);

  return (
    <main>
      {/* Dobra 1: Hero */}
      <Hero />

      {/* NOVA DOBRA: Notícias Oficiais */}
      <NoticiasOficiaisSection />

      {/* Dobra 2: Manifesto */}
      <ManifestoSection />

      {/* Dobra 3: Visão Geral das Contas Públicas */}
      <MacroDashboard />

      {/* Dobra 4: Análise Fiscal (Termômetros) */}
      <FiscalOverview />

      {/* Dobra 5: Despesas por Secretaria — Top 10 */}
      <section className="py-16 px-4 bg-gray-100 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Despesas por Secretaria — Top 10
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">
              Acompanhe como os recursos públicos são distribuídos entre as
              principais áreas da administração municipal.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900/70 backdrop-blur-sm border border-slate-300/40 dark:border-slate-700/40 shadow-lg hover:shadow-xl rounded-xl p-6 transition-shadow duration-300">
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow p-4">
              <DespesasPorSecretariaTop10 />

              <div className="text-right mt-4">
                <button
                  onClick={() => setSecretariasDrawerOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 mt-2 text-sm font-semibold rounded-xl shadow-md bg-white/90 text-slate-900 hover:bg-white dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 transition-all duration-300 border border-white/20 hover:scale-[1.03] active:scale-[1.00]"
                >
                  Saiba mais
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dobra 6: Top 10 Gastos Municipais */}
      <section className="py-16 px-4 bg-gray-100 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Top 10 Gastos Municipais
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">
              Veja quem são os principais destinos do dinheiro público e como
              isso impacta o orçamento da cidade.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900/70 backdrop-blur-sm border border-slate-300/40 dark:border-slate-700/40 shadow-lg hover:shadow-xl rounded-xl p-6 transition-shadow duration-300">
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow p-4">
              <TopGastosMunicipaisChart />

              <div className="text-right mt-4">
                <button
                  onClick={() => setTopGastosDrawerOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 mt-2 text-sm font-semibold rounded-xl shadow-md bg-white/90 text-slate-900 hover:bg-white dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 transition-all duration-300 border border-white/20 hover:scale-[1.03] active:scale-[1.00]"
                >
                  Saiba mais
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA da Câmara */}
      <CamaraHeroCTA />

      {/* Drawer — Despesas por Secretaria */}
      <InsightsDrawer
        isOpen={isSecretariasDrawerOpen}
        onClose={() => setSecretariasDrawerOpen(false)}
        title="Como ler as despesas por secretaria"
      >
        <div className="space-y-4 text-sm leading-relaxed">
          <p>
            Cada barra representa o total de despesas de uma secretaria ao longo
            do período analisado. Secretarias como <strong>Saúde</strong> e{" "}
            <strong>Educação</strong> tendem naturalmente a concentrar mais
            recursos, pois lidam com políticas públicas de grande escala e alto
            impacto social.
          </p>
          <p>
            Ao comparar os valores, é importante observar não apenas quem gasta
            mais, mas também se o volume de recursos está coerente com as
            responsabilidades daquela área. Uma secretaria pequena com gastos
            muito altos pode ser um sinal de ineficiência, desequilíbrio
            orçamentário ou prioridades questionáveis.
          </p>
          <p>
            Outro ponto essencial é acompanhar a evolução desses gastos ao longo
            dos anos. Crescimentos muito acelerados em determinadas áreas podem
            indicar mudanças de políticas, novos contratos de grande porte ou
            reestruturações administrativas que merecem investigação mais
            detalhada por parte da sociedade civil.
          </p>
          <p>
            Este gráfico deve ser lido sempre em conjunto com indicadores de{" "}
            <strong>resultado</strong> (qualidade dos serviços prestados) e não
            apenas de <strong>gasto</strong>. Gastar mais não significa
            automaticamente gastar melhor. Por isso, o papel do cidadão
            consciente é conectar números com impacto real na vida das pessoas.
          </p>
          <p>
            Use esses dados como ponto de partida para fazer perguntas:
            &quot;Por que essa secretaria gasta tanto?&quot;, &quot;Houve
            aumento recente?&quot;, &quot;Esses gastos se traduzem em melhorias
            perceptíveis para a população?&quot;. É assim que a cultura de
            transparência se transforma em controle social efetivo.
          </p>
        </div>
      </InsightsDrawer>

      {/* Drawer — Top 10 Gastos Municipais */}
      <InsightsDrawer
        isOpen={isTopGastosDrawerOpen}
        onClose={() => setTopGastosDrawerOpen(false)}
        title="Entendendo os Top 10 Gastos Municipais"
      >
        <div className="space-y-4 text-sm leading-relaxed">
          <p>
            Os maiores gastos do município tendem a se concentrar em alguns
            grupos: <strong>folha de pagamento</strong>,{" "}
            <strong>saúde</strong>, <strong>educação</strong>, contratos de{" "}
            <strong>serviços contínuos</strong> (como limpeza urbana, gestão de
            resíduos) e <strong>convênios estratégicos</strong>. Isso é normal
            em quase todas as prefeituras do país.
          </p>
          <p>
            O papel deste ranking é mostrar, de forma direta,{" "}
            <strong>quem recebe grandes volumes de recursos públicos</strong>.
            Quando um mesmo fornecedor aparece recorrentemente nas primeiras
            posições, isso exige atenção redobrada: é um contrato estratégico
            que precisa de acompanhamento contínuo pela sociedade.
          </p>
          <p>
            A presença forte de despesas com pessoal (folha de pagamento) indica
            o peso da máquina administrativa. Embora seja natural que essa conta
            seja alta, o crescimento descontrolado pode comprometer a capacidade
            de investimento do município em obras, inovação e políticas
            públicas.
          </p>
          <p>
            Já os contratos com hospitais, instituições de saúde e serviços
            assistenciais mostram para onde está indo a parte mais sensível do
            orçamento: o cuidado direto com as pessoas. Aqui, a pergunta-chave
            é: <strong>os valores pagos se traduzem em qualidade de
            atendimento?</strong> Filas menores, estrutura adequada, equipes
            completas?
          </p>
          <p>
            Também é fundamental observar empresas de serviços urbanos (limpeza,
            coleta de lixo, transporte coletivo, alimentação escolar). Elas
            costumam concentrar valores altos e contratos de longa duração. Uma
            licitação mal feita ou um contrato mal fiscalizado pode gerar
            desperdícios milionários ao longo dos anos.
          </p>
          <p>
            A leitura madura deste ranking passa por três camadas:{" "}
            <strong>quem recebe</strong>, <strong>quanto recebe</strong> e{" "}
            <strong>em troca de quê</strong>. O Radar Taubaté existe justamente
            para ajudar o cidadão a sair de uma visão abstrata dos números e
            entrar numa compreensão concreta do uso do dinheiro público.
          </p>
          <p>
            Use este painel como ponto de partida para fiscalizar, perguntar,
            debater e exigir transparência ativa da gestão. Quanto mais clareza
            sobre os grandes gastos, menor o espaço para ineficiência e má
            gestão.
          </p>
        </div>
      </InsightsDrawer>
    </main>
  );
} 