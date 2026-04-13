export type EventItem = {
  title: string;
  slug: string;
  date: string;
  location: string;
  description: string;
  image?: string;
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const events: EventItem[] = [
  {
    title: "復興の灯 キャンドルナイト＆スカイランタン",
    slug: "fukkou-no-tomoshibi",
    date: "毎年8月14日",
    location: "千手院 境内",
    description:
      "能登半島地震からの復興を祈り、境内に800本のロウソクを灯し、スカイランタンを夜空へ放つ夏の夜のイベント。",
    image: `${basePath}/images/events/bontou-11.jpg`,
  },
  {
    title: "能による祈祷とワークショップ",
    slug: "noh-workshop",
    date: "不定期開催",
    location: "千手院 本堂",
    description:
      "日本の伝統芸能「能」を通じた祈祷と、能の所作を体験するワークショップ。",
    image: `${basePath}/images/asoview_01.jpg`,
  },
];
