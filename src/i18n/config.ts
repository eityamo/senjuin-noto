export type Locale = "ja" | "en" | "zh";

export const defaultLocale: Locale = "ja";

export const locales: Locale[] = ["ja", "en", "zh"];

export const localeLabels: Record<Locale, string> = {
  ja: "日本語",
  en: "English",
  zh: "中文",
};
