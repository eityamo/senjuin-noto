export type Member = {
  name: string;
  role: string;
  title: string;
  comment: string;
  image: string;
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const members: Member[] = [
  {
    name: "森本敬一",
    role: "復興プロジェクト推進",
    title: "プロジェクトマネージャー",
    comment: "能登の地に再び灯りをともすために、一歩ずつ前に進んでいます。",
    image: `${basePath}/images/members/member001.jpg`,
  },
  {
    name: "行廣映二",
    role: "コーディネーター",
    title: "ホームページ担当",
    comment: "パソコンやスマホが苦手なみなさんのサポートをさせていただいてます。",
    image: `${basePath}/images/members/member000.jpeg`,
  },
];
