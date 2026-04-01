const features = [
  {
    title: "写経・読経\n体験",
    image: "/images/asoview_02.jpg",
    description: "心静かに筆を運び、仏の教えに触れる",
  },
  {
    title: "イベント\n案内",
    image: "/images/chunichi_lantern.jpg",
    description: "復興の灯・スカイランタンなど",
  },
  {
    title: "カフェ\nデモンク",
    image: "/images/asoview_01.jpg",
    description: "傾聴移動喫茶で心安らぐひとときを",
  },
];

export default function FeatureCards() {
  return (
    <section id="features" className="bg-washi py-16 md:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <a
              key={index}
              href="#"
              className="group relative overflow-hidden block h-72 md:h-96 cursor-pointer"
            >
              {/* 背景画像 */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${feature.image}')` }}
              />
              {/* オーバーレイ */}
              <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/50" />

              {/* コンテンツ */}
              <div className="relative z-10 h-full flex flex-col justify-between p-6">
                {/* 縦書きタイトル */}
                <div className="flex justify-end">
                  <h3 className="writing-vertical font-serif text-white text-xl md:text-2xl tracking-[0.2em] whitespace-pre-line">
                    {feature.title}
                  </h3>
                </div>

                {/* 下部の矢印 + 説明 */}
                <div className="flex items-end justify-between">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.5"
                    className="transition-transform duration-300 group-hover:translate-y-1"
                  >
                    <path d="M12 5v14M5 12l7 7 7-7" />
                  </svg>
                  <p className="text-white/80 text-xs tracking-wider">
                    {feature.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
