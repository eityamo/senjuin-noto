export default function Footer() {
  return (
    <footer className="relative bg-temple text-white overflow-hidden">
      {/* 寺院屋根風SVGシルエット */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L0 80C200 80 300 20 420 20C480 20 520 40 560 60C600 80 640 40 720 0C800 40 840 80 880 60C920 40 960 20 1020 20C1140 20 1240 80 1440 80L1440 120Z"
            fill="white"
          />
        </svg>
      </div>

      {/* 背景に薄く寺名 */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <span className="font-serif text-[12rem] md:text-[20rem] tracking-wider">
          千手院
        </span>
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 pt-32 pb-12 px-6 text-center">
        {/* 宗派 */}
        <p className="text-sm tracking-[0.5em] text-white/60 mb-4">
          高野山真言宗
        </p>

        {/* 装飾 */}
        <div className="flex justify-center mb-4">
          <svg width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="white" strokeWidth="1" opacity="0.6">
            <path d="M24 4 L44 24 L24 44 L4 24 Z" />
            <path d="M24 12 L36 24 L24 36 L12 24 Z" />
          </svg>
        </div>

        {/* 山号 */}
        <p className="font-serif text-lg tracking-[0.3em] mb-2">海臨山</p>

        {/* 寺名 */}
        <h2 className="font-serif text-4xl md:text-5xl tracking-[0.2em] mb-8">
          千手院
        </h2>

        {/* SNSアイコン */}
        <div className="flex justify-center gap-6 mb-12">
          <a
            href="https://note.com/nice_godwit9538"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-white/20"
            aria-label="note"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-white/20"
            aria-label="Instagram"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-white/20"
            aria-label="Facebook"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
        </div>

        {/* コピーライト */}
        <p className="text-xs text-white/40 tracking-wider">
          &copy; {new Date().getFullYear()} 海臨山 千手院. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
