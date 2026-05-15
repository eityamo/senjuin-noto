export type Member = {
  name: string;
  role: string;
  title: string;
  comment: string;
  image: string;
  color: string;
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const members: Member[] = [
  {
    name: "森本敬一",
    role: "復興プロジェクト推進",
    title: "ガソリンスタンド経営",
    comment: "能登の地に再び灯りをともすために、一歩ずつ前に進んでいます。",
    image: `${basePath}/images/members/member001.jpg`,
    color: "#ff0000",
  },
  {
    name: "行廣映二",
    role: "ホームページ制作",
    title: "Webエンジニア",
    comment: "パソコンやスマホが苦手なみなさんのサポートをさせていただいてます。",
    image: `${basePath}/images/members/member000.jpg`,
    color: "#008000",
  },
];
