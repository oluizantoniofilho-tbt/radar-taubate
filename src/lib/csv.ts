import fs from "fs";
import Papa from "papaparse";

export function readCSV(path: string) {
  const raw = fs.readFileSync(path, "utf8");
  const { data } = Papa.parse<Record<string, string>>(raw, {
    header: true,
    skipEmptyLines: true,
    transformHeader: h => h.trim().toLowerCase().replace(/\s+/g, "_")
  });
  return data;
}

export function toNumber(x: unknown) {
  if (typeof x === "number") return x;
  if (typeof x === "string") {
    const n = Number(x.replace(/\./g, "").replace(",", "."));
    return Number.isFinite(n) ? n : 0;
  }
  return 0;
}
