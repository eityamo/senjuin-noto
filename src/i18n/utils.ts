import { BASE_PATH } from "@/lib/constants";
import type { Locale } from "./config";

/**
 * locale を考慮したパスを返す。
 * ja はルート直下、en/zh は /en/... /zh/... にマッピング。
 */
export function localePath(locale: Locale, path: string = "/"): string {
  if (locale === "ja") {
    return `${BASE_PATH}${path}`;
  }
  // path が "/" の場合は "/en" にする（末尾スラッシュなし）
  const suffix = path === "/" ? "" : path;
  return `${BASE_PATH}/${locale}${suffix}`;
}
