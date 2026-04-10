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
    date: "2025年1月14日",
    title: "「文化時報」に除夜の鐘の記事が掲載されました",
    slug: "bunka-jiho-joya-2025",
    externalUrl: "https://note.com/bunkajiho/n/n1da11cebd1de",
    category: "メディア掲載",
  },
  {
    date: "2024年10月9日",
    title: "「文化時報」に復興キャンドルナイトの記事が掲載されました",
    slug: "bunka-jiho-candle-2024",
    externalUrl: "https://note.com/bunkajiho/n/nfadc446533d4",
    category: "メディア掲載",
  },
  {
    date: "2025年8月14日",
    title: "復興の灯 キャンドルナイト＆スカイランタンを開催しました",
    slug: "candle-night-2025",
  },
  {
    date: "2024年",
    title: "「アソビュー!」に体験プランが掲載されました",
    slug: "asoview-2024",
    externalUrl: "https://www.asoview.com/base/163446/",
    category: "メディア掲載",
  },
  {
    date: "2024年8月14日",
    title: "復興の灯 キャンドルナイト＆スカイランタンを開催しました",
    slug: "candle-night-2024",
  },
  {
    date: "2026年4月1日",
    title: "ホームページを開設しました",
    slug: "website-launch",
  },
];
