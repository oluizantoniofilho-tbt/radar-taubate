
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

export const PIE_CHART_COLORS = ["#0088FE", "#00C49F", "#FFBB28"];
