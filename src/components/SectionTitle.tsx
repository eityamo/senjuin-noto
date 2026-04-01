interface SectionTitleProps {
  japanese: string;
  english: string;
  id?: string;
}

export default function SectionTitle({ japanese, english, id }: SectionTitleProps) {
  return (
    <div id={id} className="flex flex-col items-center py-16 md:py-24">
      {/* 装飾ダイヤモンド */}
      <div className="mb-6">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b4b7a" strokeWidth="1">
          <path d="M12 2 L22 12 L12 22 L2 12 Z" />
          <path d="M12 6 L18 12 L12 18 L6 12 Z" />
        </svg>
      </div>
      {/* 縦書き日本語 */}
      <h2 className="writing-vertical font-serif text-2xl md:text-3xl tracking-[0.3em] text-text-primary mb-4">
        {japanese}
      </h2>
      {/* 英語サブタイトル */}
      <span className="text-text-muted text-sm tracking-[0.2em] font-light">
        {english}
      </span>
    </div>
  );
}
