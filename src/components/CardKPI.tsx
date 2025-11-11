'use client';

import { cva, type VariantProps } from "class-variance-authority";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "rounded-2xl p-6 text-white transition-all duration-300 ease-in-out transform hover:-translate-y-1 card-glow",
  {
    variants: {
      variant: {
        receitas: "bg-gradient-to-br from-emerald-500 to-emerald-600",
        despesas: "bg-gradient-to-br from-red-500 to-red-600",
        saldo: "bg-gradient-to-br from-blue-500 to-blue-600",
      },
    },
  }
);

const CURRENCY = (value: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);


interface CardKPIProps extends VariantProps<typeof cardVariants> {
  title: string;
  value: number;
  icon: LucideIcon;
}

export default function CardKPI({ title, value, variant, icon: Icon }: CardKPIProps) {
  return (
    <div className={cn(cardVariants({ variant }))}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <Icon className="h-8 w-8 text-white/80" />
      </div>
      <p className="mt-4 text-4xl font-bold">{CURRENCY(value)}</p>
    </div>
  );
}
