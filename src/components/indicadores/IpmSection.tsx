"use client";

import React from "react";

export default function IpmSection() {
  // Dados reais enviados por você:
  const dados = [
    { categoria: "Pagamento de Inativos", valor: 245_846_000 },
    { categoria: "Pagamento de Pensionistas", valor: 45_334_291 },
    { categoria: "Custeio Administrativo (RPPS)", valor: 8_967_368 },
    { categoria: "Compensações Previdenciárias", valor: 1_800_000 },
    { categoria: "Reserva de Contingência", valor: 54_785_387 },
  ];

  const total = dados.reduce((acc, d) => acc + d.valor, 0);

  return (
    <section className="max-w-6xl mx-auto px-4 pt-10 pb-16 space-y-12">
      
      {/* HEADER */}
      <header className="space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          IPMT — Impacto Previdenciário no Orçamento (2025)
        </h2>

        <p className="text-slate-300 max-w-3xl text-base md:text-lg">
          O Instituto de Previdência do Município de Taubaté (IPMT) é hoje um dos
          maiores fatores de pressão sobre as finanças municipais.  
          Ele representa uma despesa obrigatória e crescente, reduzindo o espaço
          fiscal para investimentos e políticas públicas estruturantes.
        </p>

        <p className="text-xs text-slate-400 italic">
          *Valores informados pelo LOA 2025 e consolidados nesta análise.
        </p>
      </header>

      {/* TABELA */}
      <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl backdrop-blur">
        <table className="w-full text-left">
          <thead className="bg-slate-900/80 border-b border-slate-700">
            <tr>
              <th className="px-6 py-3 text-slate-400 text-sm font-semibold">Categoria</th>
              <th className="px-6 py-3 text-right text-slate-400 text-sm font-semibold">
                Valor (R$)
              </th>
            </tr>
          </thead>

          <tbody>
            {dados.map((d, i) => (
              <tr
                key={i}
                className={`border-b border-slate-800 ${
                  i % 2 === 0 ? "bg-slate-900/40" : "bg-slate-900/20"
                }`}
              >
                <td className="px-6 py-3 text-slate-200 text-sm">{d.categoria}</td>
                <td className="px-6 py-3 text-right text-slate-100 font-semibold">
                  {d.valor.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}
                </td>
              </tr>
            ))}

            {/* TOTAL */}
            <tr className="bg-red-900/30 border-t border-slate-700">
              <td className="px-6 py-4 font-bold text-red-300 text-base">
                Total das Despesas do IPMT (2025)
              </td>
              <td className="px-6 py-4 text-right font-bold text-red-300 text-base">
                {total.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* BLOCO DE ANÁLISE */}
      <div className="rounded-2xl border border-red-600/20 bg-red-900/20 p-6 shadow-lg space-y-4">
        <h3 className="text-xl font-semibold text-red-300">
          Por que isso importa para Taubaté?
        </h3>

        <p className="text-slate-200 text-sm leading-relaxed">
          O IPMT consome uma fatia significativa do orçamento municipal.  
          Isso ocorre porque o modelo previdenciário local enfrenta desequilíbrios acumulados,
          exigindo repasses constantes do Tesouro Municipal.
        </p>

        <p className="text-slate-200 text-sm leading-relaxed">
          Esse gasto obrigatório reduz drasticamente a capacidade de investimento,
          pressionando áreas como infraestrutura, inovação, desenvolvimento econômico
          e programas sociais — todos diretamente ligados às metas do PPA.
        </p>

        <div className="pt-3 border-t border-red-700/40">
          <p className="text-sm text-red-200">
            <span className="font-bold">Resumo técnico:</span>  
            a despesa previdenciária é o segundo maior inimigo estrutural do investimento municipal,
            ao lado do custeio rígido das áreas essenciais.
          </p>
        </div>
      </div>

      {/* BLOCO COMPARATIVO */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg space-y-3">
        <h3 className="text-xl font-semibold text-white">Peso no Orçamento</h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          Com despesas superiores a{" "}
          <span className="font-semibold text-sky-300">
            R$ {total.toLocaleString("pt-BR")}
          </span>{" "}
          o IPMT figura entre os maiores compromissos financeiros permanentes da cidade,
          consumindo recursos que poderiam estar fortalecendo o investimento público.
        </p>
      </div>
    </section>
  );
}
