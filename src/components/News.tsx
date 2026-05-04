import SectionTitle from "./SectionTitle";
import { newsItems } from "@/lib/news";
import type { Dictionary } from "@/i18n/dictionaries/ja";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/utils";

interface NewsProps {
  locale?: Locale;
  dict?: Dictionary;
}

export default function News({ locale = "ja", dict }: NewsProps) {
  const t = dict?.news ?? {
    sectionTitle: "お知らせ",
    sectionEnglish: "News",
  };
  const viewAllLabel = dict?.common.viewAllNews ?? "お知らせ一覧へ";

  return (
    <section className="bg-white">
      <SectionTitle japanese={t.sectionTitle} english={t.sectionEnglish} id="news" />

      <div className="max-w-3xl mx-auto px-6 pb-20">
        <ul className="divide-y divide-gray-200">
          {newsItems.slice(0, 3).map((item, index) => (
            <li key={index}>
              {item.externalUrl ? (
                <a
                  href={item.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 py-6 cursor-pointer transition-opacity duration-200 hover:opacity-60"
                >
                  <div className="flex items-center gap-3 shrink-0">
                    <time className="text-text-muted text-sm tracking-wider">
                      {item.date}
                    </time>
                    {item.category && (
                      <span className="text-xs bg-temple/10 text-temple px-2 py-0.5 rounded">
                        {item.category}
                      </span>
                    )}
                  </div>
                  <span className="text-text-primary text-sm md:text-base flex items-center gap-1">
                    {item.title}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="shrink-0 text-text-muted"
                      aria-hidden="true"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </span>
                </a>
              ) : (
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 py-6">
                  <time className="text-text-muted text-sm tracking-wider shrink-0">
                    {item.date}
                  </time>
                  <span className="text-text-primary text-sm md:text-base">
                    {item.title}
                  </span>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* お知らせ一覧ボタン */}
        <div className="mt-10 text-center">
          <a
            href={localePath(locale, "/news")}
            className="inline-flex items-center gap-3 border border-text-primary px-8 py-3 text-sm tracking-widest cursor-pointer transition-all duration-200 hover:bg-text-primary hover:text-white"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            {viewAllLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
