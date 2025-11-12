import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { promises as fs } from 'fs';
import path from 'path';
import { z } from "zod";

const DataSchema = z.object({
  month: z.string(),
  revenue: z.number(),
  expense: z.number(),
});

type Data = z.infer<typeof DataSchema>;

async function getData(): Promise<Data[]> {
  const filePath = path.join(process.cwd(), 'src', 'data', 'financial_data.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  const data = JSON.parse(fileContents);
  return data.map((item: any) => DataSchema.parse(item));
}

export default async function HomePage() {
  const data = await getData();

  const totalRevenue = data.reduce((acc, item) => acc + item.revenue, 0);
  const totalExpense = data.reduce((acc, item) => acc + item.expense, 0);
  const balance = totalRevenue - totalExpense;

  return (
    <div className="container mx-auto p-4 md:p-8 pt-24">
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">Radar Taubaté</h1>
        <p className="text-lg text-muted-foreground mt-2">Seu painel de inteligência para as finanças de Taubaté</p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Receita Total</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">R$ {totalRevenue.toLocaleString('pt-BR')}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Despesa Total</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">R$ {totalExpense.toLocaleString('pt-BR')}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Saldo</CardTitle>
          </CardHeader>
          <CardContent>
            <p className={`text-3xl font-bold ${balance >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              R$ {balance.toLocaleString('pt-BR')}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
