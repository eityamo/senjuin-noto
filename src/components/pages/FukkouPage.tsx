import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideIcons from "@/components/SideIcons";
import type { Dictionary } from "@/i18n/dictionaries/ja";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/utils";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const img = (name: string) => `${basePath}/images/fukkou-no-tomoshibi/${name}`;

const gallerySrc = [
  "bontou-04.jpg",
  "bontou-02.jpg",
  "bontou-06.jpg",
  "bontou-05.jpg",
  "bontou-01.jpg",
  "bontou-07.jpg",
  "bontou-09.jpg",
  "bontou-03.jpg",
  "bontou-17.jpg",
];

interface FukkouPageProps {
  locale: Locale;
  dict: Dictionary;
}

export default function FukkouPage({ locale, dict }: FukkouPageProps) {
  const t = dict.fukkou;
  const common = dict.common;

  return (
    <main lang={locale === "ja" ? undefined : locale}>
      <Header locale={locale} dict={dict} currentPath="/events/fukkou-no-tomoshibi" />
      <SideIcons />

      {/* メインビジュアル */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${img("bontou-11.jpg")}')` }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-6 text-center">
          <p className="text-xs tracking-[0.5em] text-white/60 mb-4">
            {t.pageLabel}
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-wider leading-relaxed">
            {t.title}
            <br />
            <span className="text-xl md:text-2xl lg:text-3xl">
              {t.subtitle}
            </span>
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
              <a href={localePath(locale, "/")} className="hover:text-temple transition-colors cursor-pointer">
                {common.home}
              </a>
            </li>
            <li aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </li>
            <li>
              <a href={localePath(locale, "/events")} className="hover:text-temple transition-colors cursor-pointer">
                {dict.events.breadcrumb}
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

      {/* イベント概要 */}
      <section className="bg-washi py-16 px-6">
        <div className="max-w-3xl mx-auto">
          {/* 概要カード */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
            <h2 className="font-serif text-xl md:text-2xl text-text-primary mb-6 text-center">
              {t.overviewTitle}
            </h2>

            <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-4 text-sm md:text-base">
              <dt className="text-text-muted">{t.dateLabel}</dt>
              <dd className="text-text-primary">{t.dateValue}</dd>

              <dt className="text-text-muted">{t.venueLabel}</dt>
              <dd className="text-text-primary">{t.venueValue}</dd>

              <dt className="text-text-muted">{t.organizerLabel}</dt>
              <dd className="text-text-primary">{t.organizerValue}</dd>

              <dt className="text-text-muted">{t.attendeesLabel}</dt>
              <dd className="text-text-primary">{t.attendeesValue}</dd>
            </dl>
          </div>

          {/* 紹介文 */}
          <div className="mb-12">
            <h2 className="font-serif text-xl md:text-2xl text-text-primary mb-4 text-center">
              {t.introTitle}
            </h2>
            <div className="bg-white rounded-lg shadow-sm p-8">
              <p className="text-text-secondary leading-[1.8] text-sm md:text-base">
                {t.introParagraph1}
              </p>
              <p className="text-text-secondary leading-[1.8] text-sm md:text-base mt-4">
                {t.introParagraph2}
              </p>
            </div>
          </div>

          {/* プログラム */}
          <div className="mb-12">
            <h2 className="font-serif text-xl md:text-2xl text-text-primary mb-6 text-center">
              {t.programTitle}
            </h2>
            <div className="grid gap-6">
              {t.programs.map((program, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm p-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-full bg-gold/20 text-gold flex items-center justify-center text-sm font-bold shrink-0">
                      {index + 1}
                    </span>
                    <h3 className="font-serif text-text-primary">
                      {program.title}
                    </h3>
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {program.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* フォトギャラリー */}
          <div className="mb-12">
            <h2 className="font-serif text-xl md:text-2xl text-text-primary mb-6 text-center">
              {t.galleryTitle}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {t.gallery.map((photo, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] overflow-hidden rounded-lg"
                >
                  <img
                    src={img(gallerySrc[index])}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 注記 */}
          <div className="bg-temple/5 border border-temple/20 rounded-lg p-6 mb-12 text-center">
            <p className="text-text-secondary text-sm leading-relaxed">
              {common.contactNote}
              <a
                href="mailto:taishoshotai@yahoo.co.jp"
                className="text-temple underline underline-offset-4 mx-1"
              >
                {common.contactEmail}
              </a>
              {common.or}
              <a
                href="https://lin.ee/ZstB0lW"
                target="_blank"
                rel="noopener noreferrer"
                className="text-temple underline underline-offset-4 mx-1"
              >
                LINE
              </a>
              {common.contactNoteSuffix}
            </p>
          </div>

          {/* 戻るボタン */}
          <div className="text-center">
            <a
              href={localePath(locale, "/events")}
              className="inline-flex items-center gap-3 border border-text-primary px-8 py-3 text-sm tracking-widest cursor-pointer transition-all duration-200 hover:bg-text-primary hover:text-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              {common.backToEvents}
            </a>
          </div>
        </div>
      </section>

      <Footer dict={dict} />
    </main>
  );
}
