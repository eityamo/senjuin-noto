export default function SideIcons() {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4 hidden md:flex">
      {/* Instagram */}
      <a
        href="https://www.instagram.com/noto_morimoto/reels/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-md cursor-pointer transition-all duration-200 hover:bg-white hover:shadow-lg"
        aria-label="Instagram"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b4b7a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      </a>
      {/* Facebook */}
      <a
        href="https://www.facebook.com/p/%E9%AB%98%E9%87%8E%E5%B1%B1%E7%9C%9F%E8%A8%80%E5%AE%97%E6%B5%B7%E8%87%A8%E5%B1%B1%E5%8D%83%E6%89%8B%E9%99%A2-61562203231112/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-md cursor-pointer transition-all duration-200 hover:bg-white hover:shadow-lg"
        aria-label="Facebook"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#3b4b7a">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      </a>
      {/* TikTok */}
      <a
        href="https://www.tiktok.com/@noto_morimoto"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-md cursor-pointer transition-all duration-200 hover:bg-white hover:shadow-lg"
        aria-label="TikTok"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#3b4b7a">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.71a8.21 8.21 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.14z" />
        </svg>
      </a>
    </div>
  );
}
