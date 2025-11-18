
"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Info, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const TransfereGovPage = () => {
  const cardContent = [
    {
      icon: <Info className="w-8 h-8 text-blue-500" />,
      title: "O que é o TransfereGov?",
      text: "É a plataforma do Governo Federal que centraliza as transferências de recursos da União para estados, municípios e organizações da sociedade civil. Ele integra diversas modalidades de repasses em um só lugar, aumentando a transparência e a eficiência.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: "Por que isso importa para Taubaté?",
      text: "Acompanhar o TransfereGov permite saber exatamente quais convênios, contratos de repasse e outros recursos federais estão sendo destinados para Taubaté. Isso é essencial para entender os investimentos em áreas como saúde, educação e infraestrutura.",
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-500" />,
      title: "Como o cidadão pode fiscalizar?",
      text: "Através do portal, qualquer pessoa pode consultar os detalhes dos repasses: o valor, o órgão responsável, o projeto beneficiado e o andamento das obras ou serviços. O Radar Taubaté irá consolidar e simplificar esses dados para você.",
    },
  ];

  return (
    <div className="bg-background text-foreground min-h-screen">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-6xl mx-auto">
          {/* Cabeçalho */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="text-left mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground leading-tight">
              TransfereGov
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl">
              Acompanhe os recursos federais transferidos para o município de
              Taubaté de forma centralizada e transparente.
            </p>
          </motion.div>

          {/* Cards Explicativos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {cardContent.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-card p-6 rounded-lg border border-border flex flex-col"
              >
                <div className="flex-shrink-0 mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                <p className="text-muted-foreground flex-grow">{card.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center"
          >
            <div className="bg-card/40 border border-dashed border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-3">
                Dados em Breve
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Nossa equipe está trabalhando para integrar e processar os dados
                do TransfereGov. Em breve, você poderá explorar todos os
                repasses de forma interativa.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" disabled>
                Ver dados (quando disponíveis)
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default TransfereGovPage;
