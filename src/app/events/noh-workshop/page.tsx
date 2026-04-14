import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideIcons from "@/components/SideIcons";
import { BASE_PATH } from "@/lib/constants";

export const metadata: Metadata = {
  title: "能による祈祷とワークショップ | 千手院",
  description:
    "千手院で開催される能の祈祷とワークショップ。日本の伝統芸能「能」を通じた祈りの体験と、能の所作を学ぶワークショップ。",
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const img = (name: string) => `${basePath}/images/noh-workshop/${name}`;

const gallery = [
  { src: "S__10149922.jpg", alt: "能面を手に舞台に立つ能楽師" },
  { src: "LINE_ALBUM_20250628_250628_3.jpg", alt: "生徒たちの前で能面を紹介する能楽師" },
  { src: "LINE_ALBUM_20250628_250628_4.jpg", alt: "地域の方々へのワークショップ講義" },
  { src: "LINE_ALBUM_20250628_250628_5.jpg", alt: "能の資料を解説する能楽師" },
  { src: "LINE_ALBUM_20250628_250628_9.jpg", alt: "能装束の着付け体験" },
  { src: "LINE_ALBUM_20250628_250628_18.jpg", alt: "能装束を纏う参加者" },
  { src: "LINE_ALBUM_20250628_250628_15.jpg", alt: "能装束を着て笑顔の参加者" },
  { src: "LINE_ALBUM_20250628_250628_23.jpg", alt: "能面を体験する参加者" },
  { src: "S__10149920.jpg", alt: "本堂での集合写真" },
];

const programs = [
  {
    title: "能による奉納・祈祷",
    description:
      "能楽師による本堂での奉納舞。能登の復興と平和への祈りを、能の荘厳な舞と謡で捧げます。",
  },
  {
    title: "能の所作ワークショップ",
    description:
      "能の基本的な所作（すり足、構え、扇の扱い）を能楽師から直接学べる体験型ワークショップです。",
  },
  {
    title: "能面・装束の解説",
    description:
      "能面や装束の意味・歴史について解説。実際に間近で見て触れる貴重な機会です。",
  },
];

export default function NohWorkshopPage() {
  return (
    <main>
      <Header />
      <SideIcons />

      {/* メインビジュアル */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${img("S__10149920.jpg")}')` }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-6 text-center">
          <p className="text-xs tracking-[0.5em] text-white/60 mb-4">
            Event
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-wider leading-relaxed">
            能による祈祷と
            <br />
            ワークショップ
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
              能による祈祷とワークショップ
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
              <dd className="text-text-primary">不定期開催（詳細は決まり次第お知らせします）</dd>

              <dt className="text-text-muted">会場</dt>
              <dd className="text-text-primary">千手院 本堂（石川県鳳珠郡穴水町曽良106）</dd>
            </dl>
          </div>

          {/* 紹介文 */}
          <div className="mb-12">
            <h2 className="font-serif text-xl md:text-2xl text-text-primary mb-4 text-center">
              能と祈りの時間
            </h2>
            <div className="bg-white rounded-lg shadow-sm p-8">
              <p className="text-text-secondary leading-[1.8] text-sm md:text-base">
                千手院では、日本の伝統芸能「能」を通じた祈祷とワークショップを開催しています。
                能楽師による本堂での奉納舞は、能登の復興と平和への祈りを荘厳な舞と謡で捧げる特別な時間です。
              </p>
              <p className="text-text-secondary leading-[1.8] text-sm md:text-base mt-4">
                ワークショップでは、能の基本的な所作を能楽師から直接学ぶことができます。
                初めての方でも気軽にご参加いただけます。
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
              開催日程が決まり次第、お知らせページにてご案内いたします。
              <br />
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
