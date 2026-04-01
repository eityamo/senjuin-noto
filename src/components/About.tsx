import SectionTitle from "./SectionTitle";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function About() {
  return (
    <section className="bg-white">
      <SectionTitle japanese="千手院について" english="About" id="about" />

      <div className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* 写真 */}
          <div className="overflow-hidden">
            <img
              src={`${basePath}/images/asoview_01.jpg`}
              alt="千手院 本堂外観"
              className="w-full h-80 md:h-96 object-cover"
              loading="lazy"
            />
          </div>

          {/* テキスト */}
          <div>
            <p className="text-text-secondary leading-relaxed mb-6 text-sm md:text-base">
              海臨山千手院は、石川県鳳珠郡穴水町曽良に佇む高野山真言宗の寺院です。
              穏やかな湾を臨む絶景の地に位置し、古くから地域の人々に親しまれてきました。
            </p>
            <p className="text-text-secondary leading-relaxed mb-6 text-sm md:text-base">
              2024年の能登半島地震で被災しましたが、地域の方々の支えとともに復興を歩んでいます。
              日常の喧騒から少し離れて、心と向き合う特別な時間をお過ごしください。
            </p>
            <p className="text-text-secondary leading-relaxed mb-8 text-sm md:text-base">
              写経、読経、精進料理体験など、さまざまな体験を通じて仏教の教えに触れることができます。
            </p>

            {/* ボタン */}
            <a
              href="#features"
              className="inline-flex items-center gap-3 border border-text-primary px-8 py-3 text-sm tracking-widest cursor-pointer transition-all duration-200 hover:bg-text-primary hover:text-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              体験・活動について
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
