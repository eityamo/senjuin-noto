import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideIcons from "@/components/SideIcons";
import { members } from "@/lib/members";
import type { Dictionary } from "@/i18n/dictionaries/ja";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/utils";

interface MembersPageProps {
  locale: Locale;
  dict: Dictionary;
}

export default function MembersPage({ locale, dict }: MembersPageProps) {
  const t = dict.members;
  const common = dict.common;

  return (
    <main lang={locale === "ja" ? undefined : locale}>
      <Header locale={locale} dict={dict} currentPath="/members" />
      <SideIcons />

      {/* ページヘッダー */}
      <section className="bg-temple text-white pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.5em] text-white/60 mb-4">{t.pageEnglish}</p>
          <h1 className="font-serif text-3xl md:text-4xl tracking-widest">
            {t.pageTitle}
          </h1>
          <p className="mt-4 text-sm text-white/70 tracking-wider">
            {t.tagline}
          </p>
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

      {/* メンバー一覧 */}
      <section className="bg-washi py-16 px-6 min-h-[50vh]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                {/* 写真 */}
                <div className="aspect-square flex items-center justify-center overflow-hidden relative">
                  {member.image ? (
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url('${member.image}')` }}
                    />
                  ) : (
                    <svg
                      width="64"
                      height="64"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-temple/30"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  )}
                </div>

                {/* 情報 */}
                <div className="p-5">
                  <h2 className="font-serif text-lg text-text-primary tracking-wider border-b-2" style={{ borderColor: member.color }}>
                    {member.name}
                  </h2>
                  <p className="mt-3 text-sm text-temple font-medium">
                    {member.role}
                  </p>
                  <p className="mt-0.5 text-xs text-text-muted">
                    {member.title}
                  </p>
                  <p className="mt-2 text-sm text-text-muted leading-relaxed">
                    {member.comment}
                  </p>
                </div>
              </div>
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
