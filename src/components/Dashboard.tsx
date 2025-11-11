'use client';

import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ArrowDownLeft, ArrowUpRight, Scale } from 'lucide-react';
import CardKPI from './CardKPI';

// Definição de tipo para os dados da API
type ApiData = {
  ok: boolean;
  totais: {
    receitas: number;
    despesas: number;
    saldo: number;
  };
  fontes: {
    receitas: { [key: string]: any }[];
    despesas: { [key: string]: any }[];
  };
};

// Função para formatar números como moeda BRL (CURRENCY)
const CURRENCY = (value: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);


function FinancialOverview({ totals }: { totals: ApiData['totais'] }) {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CardKPI
          title="Total de Receitas"
          value={totals.receitas}
          variant="receitas"
          icon={ArrowUpRight}
        />
        <CardKPI
          title="Total de Despesas"
          value={totals.despesas}
          variant="despesas"
          icon={ArrowDownLeft}
        />
        <CardKPI 
          title="Saldo Atual" 
          value={totals.saldo} 
          variant="saldo" 
          icon={Scale} 
        />
      </div>
    </section>
  );
}

// --- COMPONENTES DE GRÁFICOS (mantidos como antes) ---

function TimeSeriesChart({ data }: { data: any[] }) {
  return (
    <section className="rounded-2xl border bg-card text-card-foreground shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Evolução Mensal</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="mes" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" tickFormatter={(value) => CURRENCY(value)} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--background))',
                borderColor: 'hsl(var(--border))',
              }}
              formatter={(value: number) => CURRENCY(value)}
            />
            <Legend />
            <Line type="monotone" dataKey="receitas" name="Receitas" stroke="var(--color-receitas)" strokeWidth={2} />
            <Line type="monotone" dataKey="despesas" name="Despesas" stroke="var(--color-despesas)" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

function Top5Charts({ fontes }: { fontes: ApiData['fontes'] }) {
  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="rounded-2xl border bg-card text-card-foreground shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Top 5 Fontes de Receita</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={fontes.receitas.slice(0, 5)} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis type="number" stroke="hsl(var(--muted-foreground))" tickFormatter={(value) => CURRENCY(value)} />
              <YAxis
                type="category"
                dataKey="NOME_FONTE_RECEITA"
                width={120}
                stroke="hsl(var(--muted-foreground))"
                tick={{ fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--background))',
                  borderColor: 'hsl(var(--border))',
                }}
                formatter={(value: number) => CURRENCY(value)}
              />
              <Bar dataKey="valor_arrecadado" name="Valor Arrecadado" fill="var(--color-receitas)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="rounded-2xl border bg-card text-card-foreground shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Top 5 Funções de Despesa</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={fontes.despesas.slice(0, 5)} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis type="number" stroke="hsl(var(--muted-foreground))" tickFormatter={(value) => CURRENCY(value)} />
              <YAxis
                type="category"
                dataKey="NOME_FUNCAO"
                width={120}
                stroke="hsl(var(--muted-foreground))"
                tick={{ fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--background))',
                  borderColor: 'hsl(var(--border))',
                }}
                formatter={(value: number) => CURRENCY(value)}
              />
              <Bar dataKey="valor_pago" name="Valor Pago" fill="var(--color-despesas)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}

// --- COMPONENTE PRINCIPAL DO DASHBOARD ---

export default function Dashboard({ data }: { data: ApiData }) {
  if (!data || !data.ok) {
    return (
      <div className="flex h-[calc(100vh-5rem)] items-center justify-center">
        <p className="text-lg text-rose-500">Erro ao carregar os dados.</p>
      </div>
    );
  }

  // Dados mockados para o gráfico de série temporal (substituir com dados reais se disponível)
  const timeSeriesData = [
    { mes: 'Jan', receitas: 40000000, despesas: 35000000 },
    { mes: 'Fev', receitas: 42000000, despesas: 37000000 },
    { mes: 'Mar', receitas: 45000000, despesas: 40000000 },
    { mes: 'Abr', receitas: 43000000, despesas: 38000000 },
    { mes: 'Mai', receitas: 47000000, despesas: 42000000 },
    { mes: 'Jun', receitas: 46000000, despesas: 41000000 },
  ];

  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <div className="space-y-12">
        <div className="animate-fade-in-up">
          <FinancialOverview totals={data.totais} />
        </div>
        <div className="animate-fade-in-up animation-delay-200">
          <TimeSeriesChart data={timeSeriesData} />
        </div>
        <div className="animate-fade-in-up animation-delay-400">
          <Top5Charts fontes={data.fontes} />
        </div>
      </div>
    </div>
  );
}
