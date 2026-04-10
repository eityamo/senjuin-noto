import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideIcons from "@/components/SideIcons";
import { newsItems } from "@/lib/news";
import { BASE_PATH } from "@/lib/constants";

export const metadata: Metadata = {
  title: "お知らせ | 高野山真言宗 海臨山 千手院",
  description:
    "千手院からのお知らせ一覧。行事・イベント・活動報告などの最新情報をお届けします。",
};

export default function NewsPage() {
  return (
    <main>
      <Header />
      <SideIcons />

      {/* ページヘッダー */}
      <section className="bg-temple text-white pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.5em] text-white/60 mb-4">News</p>
          <h1 className="font-serif text-3xl md:text-4xl tracking-widest">
            お知らせ
          </h1>
        </div>
      </section>

      {/* パンくずリスト */}
      <nav
        className="bg-washi border-b border-gray-200 py-3 px-6"
        aria-label="パンくずリスト"
      >
        <div className="max-w-3xl mx-auto">
          <ol className="flex items-center gap-2 text-xs text-text-muted">
            <li>
              <a
                href={`${BASE_PATH}/`}
                className="hover:text-temple transition-colors cursor-pointer"
              >
                ホーム
              </a>
            </li>
            <li aria-hidden="true">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </li>
            <li aria-current="page" className="text-text-primary">
              お知らせ
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
              href={`${BASE_PATH}/`}
              className="inline-flex items-center gap-3 border border-text-primary px-8 py-3 text-sm tracking-widest cursor-pointer transition-all duration-200 hover:bg-text-primary hover:text-white"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              ホームに戻る
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
