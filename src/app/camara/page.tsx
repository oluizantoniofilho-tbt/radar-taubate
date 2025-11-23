import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CircleDollarSign, Landmark, TrendingDown, Users } from "lucide-react";
import dynamic from "next/dynamic";

// Corrigido: Uso do alias @/ para ambos os componentes
const CamaraOrcamentoChart = dynamic(
  () => import("@/components/charts/CamaraOrcamentoChart"),
  { ssr: false }
);

const CamaraDespesasTop10Chart = dynamic(
  () => import("@/components/charts/CamaraDespesasTop10Chart"),
  { ssr: false }
);

export default function CamaraPage() {
  // números-base (você pode depois puxar isso de um JSON ou API)
  const orcado2025 = 45_600_000;
  const pago2025 = 33_185_611.14;
  const execucaoPercent = (pago2025 / orcado2025) * 100; // ~72,8%

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);

  return (
    <div className="container mx-auto pt-28 pb-8 px-4 md:pt-32 md:pb-10 bg-gray-50 dark:bg-gray-900">
      <header className="mb-8 text-center">
        <div className="inline-block bg-blue-100 dark:bg-blue-900 p-3 rounded-full mb-4">
          <Landmark className="h-8 w-8 text-blue-600 dark:text-blue-300" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
          Câmara Municipal de Taubaté
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Análise do orçamento, despesas e quadro de pessoal da casa legislativa da cidade.
        </p>
      </header>

      {/* Seção de KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Orçamento 2025</CardTitle>
            <CircleDollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(orcado2025)}</div>
            <p className="text-xs text-muted-foreground">Valor total autorizado</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Despesas Pagas (2025)</CardTitle>
            <TrendingDown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(pago2025)}</div>
            <p className="text-xs text-muted-foreground">Até a data atual</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Execução Orçamentária</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{execucaoPercent.toFixed(1)}%</div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${execucaoPercent}%` }}></div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vereadores</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">19</div>
            <p className="text-xs text-muted-foreground">Mandato 2021-2024</p>
          </CardContent>
        </Card>
      </div>

      {/* Seção dos Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Orçamento da Câmara (2025)</CardTitle>
            </CardHeader>
            <CardContent className="h-[400px] flex items-start">
              <CamaraOrcamentoChart orcado={orcado2025} pago={pago2025} />
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Top 10 Despesas</CardTitle>
            </CardHeader>
            <CardContent className="h-[400px] flex items-start">
              <CamaraDespesasTop10Chart />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}