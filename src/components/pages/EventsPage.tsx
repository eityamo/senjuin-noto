import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideIcons from "@/components/SideIcons";
import { events } from "@/lib/events";
import type { Dictionary } from "@/i18n/dictionaries/ja";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/utils";

interface EventsPageProps {
  locale: Locale;
  dict: Dictionary;
}

export default function EventsPage({ locale, dict }: EventsPageProps) {
  const t = dict.events;
  const common = dict.common;

  return (
    <main lang={locale === "ja" ? undefined : locale}>
      <Header locale={locale} dict={dict} currentPath="/events" />
      <SideIcons />

      {/* ページヘッダー */}
      <section className="bg-temple text-white pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.5em] text-white/60 mb-4">{t.pageEnglish}</p>
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
        <div className="max-w-4xl mx-auto">
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

      {/* イベント一覧 */}
      <section className="bg-washi py-16 px-6 min-h-[50vh]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event) => (
              <a
                key={event.slug}
                href={localePath(locale, `/events/${event.slug}`)}
                className="group block bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-md"
              >
                {/* カード画像 */}
                <div className="relative h-48 overflow-hidden">
                  {event.image ? (
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url('${event.image}')` }}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-temple" />
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-white text-xs bg-temple/80 px-3 py-1 rounded">
                      {event.date}
                    </span>
                  </div>
                </div>

                {/* カード情報 */}
                <div className="p-6">
                  <h2 className="font-serif text-lg md:text-xl text-text-primary mb-2 group-hover:text-temple transition-colors">
                    {event.title}
                  </h2>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {event.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-temple text-sm">
                    <span>{common.viewDetails}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>

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
