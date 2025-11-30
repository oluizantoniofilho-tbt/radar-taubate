
"use client";


import React from "react";


export default function ChartWrapper({
  title,
  children,
  description,
}: {
  title: string;
  children: React.ReactNode;
  description?: string;
}) {
  return (
    <div className="
      w-full
      rounded-2xl
      bg-gray-50 dark:bg-slate-900/40
      border border-slate-200/40 dark:border-white/10
      p-5 md:p-6
      shadow-sm
      flex
      flex-col
      gap-4
    ">
      <h3 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-white">
        {title}
      </h3>


      <div className="w-full h-[260px] md:h-[320px]">
        {children}
      </div>


      {description && (
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
