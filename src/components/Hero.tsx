import type { Dictionary } from "@/i18n/dictionaries/ja";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

interface HeroProps {
  dict?: Dictionary;
}

export default function Hero({ dict }: HeroProps) {
  const t = dict?.hero ?? {
    kairinzan: "海臨山",
    kairinzanChars: ["海", "臨", "山"],
    senjuin: "千手院",
    senjuinChars: ["千", "手", "院"],
    kairinzanRomaji: "Kairinzan",
    senjuinRomaji: "Senjuin",
  };
  const sect = dict?.common.sect ?? "高野山真言宗";

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 背景画像 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${basePath}/images/asoview_01.jpg')` }}
      >
        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
        {/* 宗派名 */}
        <p className="text-sm md:text-base tracking-[0.5em] mb-6 animate-fade-in-up font-light">
          {sect}
        </p>

        {/* 装飾 */}
        <div className="mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="white" strokeWidth="1">
            <path d="M24 4 L44 24 L24 44 L4 24 Z" />
            <path d="M24 12 L36 24 L24 36 L12 24 Z" />
          </svg>
        </div>

        {/* 山号（縦書き） */}
        <div
          className="flex flex-col items-center font-serif text-lg md:text-xl mb-4 animate-fade-in-up leading-[1.8]"
          style={{ animationDelay: "0.4s" }}
          aria-label={t.kairinzan}
        >
          {t.kairinzanChars.map((char, i) => (
            <span key={i} aria-hidden="true">{char}</span>
          ))}
        </div>

        {/* 寺名（大・縦書き） */}
        <h1
          className="flex flex-col items-center font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in-up leading-[1.1]"
          style={{ animationDelay: "0.6s" }}
          aria-label={t.senjuin}
        >
          {t.senjuinChars.map((char, i) => (
            <span key={i} aria-hidden="true">{char}</span>
          ))}
        </h1>

        {/* ローマ字 */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <p className="text-xs tracking-[0.3em] text-white/80 font-light">
            {t.kairinzanRomaji}
          </p>
          <p className="text-base md:text-lg tracking-[0.2em] font-light">
            {t.senjuinRomaji}
          </p>
        </div>

        {/* スクロールインジケーター */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in-up"
          style={{ animationDelay: "1.2s" }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs tracking-[0.3em] text-white/60">SCROLL</span>
            <div className="w-px h-8 bg-white/40 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
