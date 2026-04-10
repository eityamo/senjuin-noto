import SectionTitle from "./SectionTitle";
import { newsItems } from "@/lib/news";
import { BASE_PATH } from "@/lib/constants";

export default function News() {
  return (
    <section className="bg-white">
      <SectionTitle japanese="お知らせ" english="News" id="news" />

      <div className="max-w-3xl mx-auto px-6 pb-20">
        <ul className="divide-y divide-gray-200">
          {newsItems.slice(0, 3).map((item, index) => (
            <li key={index}>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 py-6">
                <time className="text-text-muted text-sm tracking-wider shrink-0">
                  {item.date}
                </time>
                <span className="text-text-primary text-sm md:text-base">
                  {item.title}
                </span>
              </div>
            </li>
          ))}
        </ul>

        {/* お知らせ一覧ボタン */}
        <div className="mt-10 text-center">
          <a
            href={`${BASE_PATH}/news`}
            className="inline-flex items-center gap-3 border border-text-primary px-8 py-3 text-sm tracking-widest cursor-pointer transition-all duration-200 hover:bg-text-primary hover:text-white"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            お知らせ一覧へ
          </a>
        </div>
      </div>
    </section>
  );
}
