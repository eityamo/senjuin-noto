export default function SideIcons() {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4 hidden md:flex">
      {/* note */}
      <a
        href="https://note.com/nice_godwit9538"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-md cursor-pointer transition-all duration-200 hover:bg-white hover:shadow-lg"
        aria-label="note"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b4b7a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
      </a>
      {/* Instagram */}
      <a
        href="#"
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
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-md cursor-pointer transition-all duration-200 hover:bg-white hover:shadow-lg"
        aria-label="Facebook"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#3b4b7a">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      </a>
    </div>
  );
}
