export default function NoticeBanner() {
  return (
    <section className="bg-temple text-white py-6 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-center">
        <span className="inline-block border border-white/40 px-3 py-1 text-xs tracking-widest">
          お知らせ
        </span>
        <p className="text-sm md:text-base tracking-wider font-light">
          写経・読経体験を随時受付中です。お気軽にお問い合わせください。
        </p>
      </div>
    </section>
  );
}
