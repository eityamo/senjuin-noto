import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideIcons from "@/components/SideIcons";
import { newsItems } from "@/lib/news";
import type { Dictionary } from "@/i18n/dictionaries/ja";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/utils";

interface NewsPageProps {
  locale: Locale;
  dict: Dictionary;
}

export default function NewsPage({ locale, dict }: NewsPageProps) {
  const t = dict.news;
  const common = dict.common;

  return (
    <main lang={locale === "ja" ? undefined : locale}>
      <Header locale={locale} dict={dict} currentPath="/news" />
      <SideIcons />

      {/* ページヘッダー */}
      <section className="bg-temple text-white pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.5em] text-white/60 mb-4">{t.sectionEnglish}</p>
          <h1 className="font-serif text-3xl md:text-4xl tracking-widest">
            {t.pageTitle}
          </h1>
        </div>
      </section>

      {/* パンくずリスト */}
      <nav
        className="bg-washi border-b border-gray-200 py-3 px-6"
        aria-label="breadcrumb"
      >
        <div className="max-w-3xl mx-auto">
          <ol className="flex items-center gap-2 text-xs text-text-muted">
            <li>
              <a
                href={localePath(locale, "/")}
                className="hover:text-temple transition-colors cursor-pointer"
              >
                {common.home}
              </a>
            </li>
            <li aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </li>
            <li aria-current="page" className="text-text-primary">
              {t.breadcrumb}
            </li>
          </ol>
        </div>
      </nav>

      {/* お知らせ一覧 */}
      <section className="bg-washi py-16 px-6 min-h-[50vh]">
        <div className="max-w-3xl mx-auto">
          <ul className="divide-y divide-gray-200 bg-white rounded-lg shadow-sm">
            {newsItems.map((item, index) => (
              <li key={index}>
                {item.externalUrl ? (
                  <a
                    href={item.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 px-6 py-6 cursor-pointer transition-opacity duration-200 hover:opacity-60"
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
                    <h2 className="text-text-primary text-sm md:text-base leading-relaxed flex items-center gap-1">
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
                    </h2>
                  </a>
                ) : (
                  <article className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 px-6 py-6">
                    <time className="text-text-muted text-sm tracking-wider shrink-0">
                      {item.date}
                    </time>
                    <h2 className="text-text-primary text-sm md:text-base leading-relaxed">
                      {item.title}
                    </h2>
                  </article>
                )}
              </li>
            ))}
          </ul>

          {/* ホームに戻るボタン */}
          <div className="mt-12 text-center">
            <a
              href={localePath(locale, "/")}
              className="inline-flex items-center gap-3 border border-text-primary px-8 py-3 text-sm tracking-widest cursor-pointer transition-all duration-200 hover:bg-text-primary hover:text-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              {common.backToHome}
            </a>
          </div>
        </div>
      </section>

      <Footer dict={dict} />
    </main>
  );
}
