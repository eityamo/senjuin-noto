"use client";

import { locales, localeLabels } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/utils";

interface LanguageSwitcherProps {
  locale: Locale;
  /** 現在のページパス（例: "/events"） */
  currentPath?: string;
}

export default function LanguageSwitcher({
  locale,
  currentPath = "/",
}: LanguageSwitcherProps) {
  return (
    <div className="flex items-center gap-3">
      {locales.map((loc) => (
        <a
          key={loc}
          href={localePath(loc, currentPath)}
          className={`text-sm tracking-wider transition-opacity duration-200 ${
            loc === locale
              ? "opacity-100 font-bold underline underline-offset-4"
              : "opacity-60 hover:opacity-100"
          }`}
          aria-current={loc === locale ? "true" : undefined}
        >
          {localeLabels[loc]}
        </a>
      ))}
    </div>
  );
}
