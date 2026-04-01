import SectionTitle from "./SectionTitle";

const newsItems = [
  {
    date: "2025年4月1日",
    title: "ホームページを開設しました",
  },
  {
    date: "2024年12月31日",
    title: "除夜の鐘を行いました",
  },
  {
    date: "2024年8月14日",
    title: "復興の灯 キャンドルナイト＆スカイランタンを開催しました",
  },
];

export default function News() {
  return (
    <section className="bg-white">
      <SectionTitle japanese="お知らせ" english="News" id="news" />

      <div className="max-w-3xl mx-auto px-6 pb-20">
        <ul className="divide-y divide-gray-200">
          {newsItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 py-6 cursor-pointer transition-opacity duration-200 hover:opacity-60"
              >
                <time className="text-text-muted text-sm tracking-wider shrink-0">
                  {item.date}
                </time>
                <span className="text-text-primary text-sm md:text-base">
                  {item.title}
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* お知らせ一覧ボタン */}
        <div className="mt-10 text-center">
          <a
            href="#"
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
