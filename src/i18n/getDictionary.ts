import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries/ja";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  ja: () => import("./dictionaries/ja").then((m) => m.default),
  en: () => import("./dictionaries/en").then((m) => m.default),
  zh: () => import("./dictionaries/zh").then((m) => m.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
