import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideIcons from "@/components/SideIcons";
import { BASE_PATH } from "@/lib/constants";

export const metadata: Metadata = {
  title: "復興の灯 キャンドルナイト＆スカイランタン | 千手院",
  description:
    "毎年8月14日開催。能登半島地震からの復興を祈り、千手院境内に800本のロウソクを灯し、スカイランタンを夜空へ放つ夏の夜のイベント。",
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const img = (name: string) => `${basePath}/images/events/${name}`;

const gallery = [
  { src: "bontou-04.jpg", alt: "NOTO MOTTO COME ONの火文字" },
  { src: "bontou-02.jpg", alt: "ロウソクの参道" },
  { src: "bontou-06.jpg", alt: "灯りが並ぶ境内" },
  { src: "bontou-05.jpg", alt: "本堂での追悼法要" },
  { src: "bontou-01.jpg", alt: "プロジェクションマッピング" },
  { src: "bontou-07.jpg", alt: "金色のプロジェクションマッピング" },
  { src: "bontou-09.jpg", alt: "赤いプロジェクションマッピング" },
  { src: "bontou-03.jpg", alt: "境内のライトアップ" },
  { src: "bontou-17.jpg", alt: "夜空に浮かぶスカイランタン" },
  { src: "bontou-18.jpg", alt: "曽良の夜空を飛ぶスカイランタン" },
  { src: "bontou-12-jomon.jpg", alt: "縄文焼きランプシェード制作" },
  { src: "bontou-13-jomon.jpg", alt: "縄文焼きの灯り" },
];

const programs = [
  {
    title: "キャンドル点灯（800本）",
    description:
      "境内いっぱいに灯されたロウソクが、闇夜に復興のメッセージを浮かび上がらせます。2025年には「NOTO MOTTO COME ON」の火文字が灯され、能登への想いを全国に届けました。",
  },
  {
    title: "追悼法要・復興祈願",
    description:
      "本堂にて、能登半島地震の犠牲者への追悼と復興祈願の法要を執り行います。住職の読経が響く荘厳な空間で、参加者一人ひとりが祈りを捧げます。",
  },
  {
    title: "プロジェクションマッピング",
    description:
      "本堂の外壁と内部に色鮮やかな映像を投影。古い木造建築が光のキャンバスに変わり、幻想的な空間が生まれます。",
  },
  {
    title: "スカイランタン",
    description:
      "復興への祈りを込めた約100基のランタンが、夜空へゆっくりと舞い上がります。日本スカイランタン協会の協力のもと、参加者全員で一斉にランタンを放つ瞬間は、このイベントのクライマックスです。",
  },
];

export default function FukkouNoTomoshibiPage() {
  return (
    <main>
      <Header />
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
            Event
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-wider leading-relaxed">
            復興の灯
            <br />
            <span className="text-xl md:text-2xl lg:text-3xl">
              キャンドルナイト＆スカイランタン
            </span>
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
              <a href={`${BASE_PATH}/`} className="hover:text-temple transition-colors cursor-pointer">
                ホーム
              </a>
            </li>
            <li aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </li>
            <li>
              <a href={`${BASE_PATH}/events`} className="hover:text-temple transition-colors cursor-pointer">
                イベント案内
              </a>
            </li>
            <li aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </li>
            <li aria-current="page" className="text-text-primary">
              復興の灯
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
              イベント概要
            </h2>

            <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-4 text-sm md:text-base">
              <dt className="text-text-muted">開催日</dt>
              <dd className="text-text-primary">毎年 8月14日（お盆）</dd>

              <dt className="text-text-muted">会場</dt>
              <dd className="text-text-primary">千手院 境内（石川県鳳珠郡穴水町曽良106）</dd>

              <dt className="text-text-muted">主催</dt>
              <dd className="text-text-primary">NPO法人 チーム能登喰いしん坊</dd>

              <dt className="text-text-muted">参加者数</dt>
              <dd className="text-text-primary">約200名（2024年実績）</dd>
            </dl>
          </div>

          {/* 紹介文 */}
          <div className="mb-12">
            <h2 className="font-serif text-xl md:text-2xl text-text-primary mb-4 text-center">
              復興への祈りを灯す夜
            </h2>
            <div className="bg-white rounded-lg shadow-sm p-8">
              <p className="text-text-secondary leading-[1.8] text-sm md:text-base">
                2024年の能登半島地震を受け、復興への祈りを込めて始まったイベント。
                千手院の曽良地区に古くから根づく「盆灯会」の伝統を受け継ぎ、
                全国から集まる約200名の参加者とともに、能登の夜空を照らします。
              </p>
              <p className="text-text-secondary leading-[1.8] text-sm md:text-base mt-4">
                曽良地区では2009年から「曽良の盆灯」が開催されてきました。
                縄文焼きのランプシェードと最大1万本のロウソクで飾られた境内は、
                地域の誇りであり、復興の灯の原点です。
              </p>
            </div>
          </div>

          {/* プログラム */}
          <div className="mb-12">
            <h2 className="font-serif text-xl md:text-2xl text-text-primary mb-6 text-center">
              プログラム
            </h2>
            <div className="grid gap-6">
              {programs.map((program, index) => (
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
              フォトギャラリー
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {gallery.map((photo, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] overflow-hidden rounded-lg"
                >
                  <img
                    src={img(photo.src)}
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
              お問い合わせは
              <a
                href="mailto:taishoshotai@yahoo.co.jp"
                className="text-temple underline underline-offset-4 mx-1"
              >
                メール
              </a>
              または
              <a
                href="https://lin.ee/ZstB0lW"
                target="_blank"
                rel="noopener noreferrer"
                className="text-temple underline underline-offset-4 mx-1"
              >
                LINE
              </a>
              にてお気軽にどうぞ。
            </p>
          </div>

          {/* 戻るボタン */}
          <div className="text-center">
            <a
              href={`${BASE_PATH}/events`}
              className="inline-flex items-center gap-3 border border-text-primary px-8 py-3 text-sm tracking-widest cursor-pointer transition-all duration-200 hover:bg-text-primary hover:text-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              イベント一覧に戻る
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
