
import type { ChartDataset } from "../../lib/types/charts";

export interface IEvolucao {
  mes: string;
  receita: number;
  despesa: number;
}

export interface ISecretaria {
  nome: string;
  valor: number;
}

export interface IComposicao {
  nome: string;
  valor: number;
}

// === Dados demo ===
export const evolucaoData: IEvolucao[] = [
  { mes: "Jan", receita: 8.5, despesa: 7.8 },
  { mes: "Fev", receita: 8.9, despesa: 8.1 },
  { mes: "Mar", receita: 9.2, despesa: 8.4 },
  { mes: "Abr", receita: 9.0, despesa: 8.7 },
  { mes: "Mai", receita: 9.8, despesa: 8.9 },
  { mes: "Jun", receita: 9.5, despesa: 9.0 },
];

export const secretariasData: ISecretaria[] = [
  { nome: "Educação", valor: 35 },
  { nome: "Saúde", valor: 28 },
  { nome: "Infraestrutura", valor: 20 },
  { nome: "Desenvolvimento Social", valor: 10 },
  { nome: "Administração", valor: 7 },
];

export const composicaoData: IComposicao[] = [
  { nome: "Impostos", valor: 55 },
  { nome: "Transferências", valor: 35 },
  { nome: "Outros", valor: 10 },
];

// === Despesas da Câmara — Top 10 ===
export const camaraDespesasTop10Data = [
  { label: "Vencimentos Fixos", value: 20909693.0 },
  { label: "Obrigações Patronais", value: 2957414.88 },
  { label: "Auxílio Alimentação", value: 2294556.03 },
  { label: "Obrigações (2)", value: 1553597.27 },
  { label: "Indenizações", value: 1264928.24 },
  { label: "Exercícios Anteriores", value: 1018996.86 },
  { label: "Equipamentos", value: 857439.77 },
  { label: "Serviços PJ", value: 579460.82 },
  { label: "TI", value: 376147.95 },
];

// === Orçamento da Câmara ===
export const camaraOrcamentoData = [
  { label: "Orçado", value: 45600000 },
  { label: "Empenhado", value: 34911105.97 },
  { label: "Liquidado", value: 33327680.69 },
  { label: "Pago", value: 32954885.97 },
];

// === Despesas por Secretaria — Top 10 ===
export const despesasPorSecretariaTop10Data = [
  { label: "Secretaria de Educação", value: 430055300 },
  { label: "Fundo Municipal de Saúde", value: 390021100 },
  { label: "Secretaria da Fazenda", value: 99386450 },
  { label: "Secretaria de Serviços Públicos", value: 73133240 },
  { name: "Secretaria de Segurança Pública Municipal", value: 27474410 },
  { name: "Fundo Municipal de Assistência Social", value: 26701080 },
  { name: "Secretaria de Obras", value: 25190030 },
  { name: "Secretaria de Administração", value: 24036030 },
  { name: "Secretaria de Mobilidade Urbana", value: 24030710 },
  { name: "Secretaria de Saúde (Admin. Direta)", value: 11613220 },
  { name: "Secretaria de Esportes", value: 11508090 },
  { name: "Fundo de Iluminação Pública", value: 10721320 },
  { name: "Secretaria de Cultura", value: 9274740 },
  { name: "Fundo de Assistência ao Esporte Amador", value: 9215490 },
  { name: "Procuradoria Geral", value: 9050780 },
  { name: "Desenvolvimento e Inclusão Social", value: 8989880 },
  { name: "Fundo Municipal de Transporte", value: 7759680 },
  { name: "Sec. Governo e Relações Institucionais", value: 6425940 },
  { name: "Secretaria de Gabinete", value: 6077560 },
  { name: "Meio Ambiente", value: 5207080 },
];

// === Execução por Área — Termômetros ===
export const execucaoTermometrosData = [
  { label: "Saúde", value: 74 },
  { label: "Educação", value: 82 },
  { label: "Obras", value: 68 },
  { label: "Administração", value: 76 },
  { label: "Segurança", value: 88 },
];

// === Orçado x Executado por Área ===
export const orcadoExecutadoAreasData = [
  { label: "Saúde", orcado: 420000000, executado: 310000000 },
  { label: "Educação", orcado: 380000000, executado: 290000000 },
  { label: "Obras", orcado: 120000000, executado: 84000000 },
  { label: "Administração", orcado: 98000000, executado: 75000000 },
  { label: "Segurança", orcado: 42000000, executado: 37000000 },
];

export const PIE_CHART_COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

// === Estrutura padronizada de datasets ===
export const chartDatasets: ChartDataset[] = [
  {
    id: "evolucao",
    title: "Evolução Mensal da Receita e Despesa",
    color: "#2563eb",
    data: evolucaoData.map(item => ({
      label: item.mes,
      value: item.receita - item.despesa,
    })),
  },
  {
    id: "secretarias",
    title: "Top 5 Secretarias em Gastos",
    color: "#dc2626",
    data: secretariasData.map(item => ({
      label: item.nome,
      value: item.valor,
    })),
  },
  {
    id: "composicao",
    title: "Composição da Receita",
    color: "#16a34a",
    data: composicaoData.map(item => ({
      label: item.nome,
      value: item.valor,
    })),
  },
];