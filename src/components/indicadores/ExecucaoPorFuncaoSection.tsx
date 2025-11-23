import React, { useState } from "react";

// =============================
//  DADOS ESTÁTICOS (você pode mover depois para um arquivo .json)
// =============================
const funcoesData = [
  {
    funcao: "Educação",
    orcado: 559000000,
    empenho: 450000000,
    liquidado: 420000000,
    pago: 395000000,
    execucao: 70.7,
  },
  {
    funcao: "Saúde",
    orcado: 508000000,
    empenho: 420000000,
    liquidado: 395000000,
    pago: 380000000,
    execucao: 74.8,
  },
  {
    funcao: "Previdência Social (IPMT)",
    orcado: 356753046,
    empenho: 301967659,
    liquidado: 285000000,
    pago: 270000000,
    execucao: 75.7,
  },
  {
    funcao: "Assistência Social",
    orcado: 180000000,
    empenho: 145000000,
    liquidado: 135000000,
    pago: 130000000,
    execucao: 72.2,
  },
  {
    funcao: "Segurança Pública",
    orcado: 95000000,
    empenho: 75000000,
    liquidado: 70000000,
    pago: 68000000,
    execucao: 71.6,
  },
  {
    funcao: "Administração",
    orcado: 85000000,
    empenho: 68000000,
    liquidado: 62000000,
    pago: 60000000,
    execucao: 70.6,
  },
  {
    funcao: "Urbanismo e Infraestrutura",
    orcado: 165000000,
    empenho: 135000000,
    liquidado: 120000000,
    pago: 110000000,
    execucao: 66.7,
  },
  {
    funcao: "Cultura",
    orcado: 28000000,
    empenho: 20500000,
    liquidado: 18000000,
    pago: 16000000,
    execucao: 57.1,
  },
  {
    funcao: "Transporte",
    orcado: 42000000,
    empenho: 32000000,
    liquidado: 30000000,
    pago: 28000000,
    execucao: 66.7,
  },
  {
    funcao: "Habitação",
    orcado: 25000000,
    empenho: 18000000,
    liquidado: 15000000,
    pago: 14000000,
    execucao: 56.0,
  },
  {
    funcao: "Outros / Reserva de Contingência",
    orcado: 179000000,
    empenho: 125000000,
    liquidado: 110000000,
    pago: 100000000,
    execucao: 55.9,
  },
];

// =============================
//  COMPONENTE PRINCIPAL
// =============================
export default function ExecucaoPorFuncaoSection() {
  const [filtro, setFiltro] = useState("Todos");

  const funcoesFiltradas =
    filtro === "Todos"
      ? funcoesData
      : funcoesData.filter((f) => f.funcao === filtro);

  return (
    <section className="mt-16 space-y-8">
      <h2 className="text-3xl font-bold text-slate-100">
        Execução Orçamentária por Função
      </h2>
      <p className="text-slate-300 max-w-3xl">
        Visualize quanto cada área da administração pública executou em 2025 —
        valores estimados segundo a LOA e dados de execução.
      </p>

      {/* =============================
          FILTRO SIMPLES 
      ============================== */}
      <div className="pt-4">
        <label className="block text-sm mb-2 text-slate-300">
          Filtrar por função/setor:
        </label>
        <select
          className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-slate-100"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        >
          <option value="Todos">Todos</option>
          {funcoesData.map((f) => (
            <option key={f.funcao} value={f.funcao}>
              {f.funcao}
            </option>
          ))}
        </select>
      </div>

      {/* =============================
          TABELA DE EXECUÇÃO
      ============================== */}
      <div className="overflow-x-auto rounded-lg border border-slate-800">
        <table className="min-w-full">
          <thead className="bg-slate-800 text-slate-300 text-sm uppercase">
            <tr>
              <th className="px-4 py-3">Função</th>
              <th className="px-4 py-3 text-right">Orçado</th>
              <th className="px-4 py-3 text-right">Empenhado</th>
              <th className="px-4 py-3 text-right">Liquidado</th>
              <th className="px-4 py-3 text-right">Pago</th>
              <th className="px-4 py-3 text-right">% Execução</th>
            </tr>
          </thead>
          <tbody className="text-slate-200">
            {funcoesFiltradas.map((f) => (
              <tr
                key={f.funcao}
                className="border-b border-slate-800 even:bg-slate-900/40"
              >
                <td className="px-4 py-3">{f.funcao}</td>
                <td className="px-4 py-3 text-right">
                  {f.orcado.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </td>
                <td className="px-4 py-3 text-right">
                  {f.empenho.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </td>
                <td className="px-4 py-3 text-right">
                  {f.liquidado.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </td>
                <td className="px-4 py-3 text-right">
                  {f.pago.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </td>
                <td className="px-4 py-3 text-right">{f.execucao}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
