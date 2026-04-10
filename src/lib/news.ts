export type NewsItem = {
  date: string;
  title: string;
  slug: string;
  /** 外部リンクがある場合のURL */
  externalUrl?: string;
  /** カテゴリラベル（例: "メディア掲載"） */
  category?: string;
};

export const newsItems: NewsItem[] = [
  {
    date: "2026年1月28日",
    title: "「ほっと石川旅ねっと」に千手院が紹介されました",
    slug: "hot-ishikawa-2026",
    externalUrl:
      "https://www.hot-ishikawa.jp/blog/detail_697.html#10804",
    category: "メディア掲載",
  },
  {
    date: "2025年4月1日",
    title: "「いしかわのWa!」体験プログラムに掲載されました",
    slug: "ishikawa-no-wa-2025",
    externalUrl:
      "https://app.ishikawanowa.pref.ishikawa.lg.jp/program-list/program-list002/detail/pgi0000000000000172",
    category: "メディア掲載",
  },
  {
    date: "2025年4月1日",
    title: "ホームページを開設しました",
    slug: "website-launch",
  },
  {
    date: "2024年12月31日",
    title: "除夜の鐘を行いました",
    slug: "joya-no-kane-2024",
  },
  {
    date: "2024年8月14日",
    title: "復興の灯 キャンドルナイト＆スカイランタンを開催しました",
    slug: "candle-night-2024",
  },
];
