export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 背景画像 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/asoview_01.jpg')" }}
      >
        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
        {/* 宗派名 */}
        <p className="text-sm md:text-base tracking-[0.5em] mb-6 animate-fade-in-up font-light">
          高野山真言宗
        </p>

        {/* 装飾 */}
        <div className="mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="white" strokeWidth="1">
            <path d="M24 4 L44 24 L24 44 L4 24 Z" />
            <path d="M24 12 L36 24 L24 36 L12 24 Z" />
          </svg>
        </div>

        {/* 山号 */}
        <p
          className="writing-vertical font-serif text-lg md:text-xl tracking-[0.5em] mb-4 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          海臨山
        </p>

        {/* 寺名（大） */}
        <h1
          className="writing-vertical font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-[0.3em] mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          千手院
        </h1>

        {/* ローマ字 */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <p className="text-xs tracking-[0.3em] text-white/80 font-light">
            Kairinzan
          </p>
          <p className="text-base md:text-lg tracking-[0.2em] font-light">
            Senjuin
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
