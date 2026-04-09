import SectionTitle from "./SectionTitle";

export default function Access() {
  return (
    <section className="bg-washi">
      <SectionTitle japanese="アクセス" english="Access" id="access" />

      <div className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-10">
          {/* 情報 */}
          <div className="flex flex-col justify-center">
            <dl className="space-y-4 text-sm md:text-base">
              <div>
                <dt className="text-text-muted text-xs tracking-widest mb-1">
                  所在地
                </dt>
                <dd className="text-text-primary">
                  〒927-0221
                  <br />
                  石川県鳳珠郡穴水町字曽良リ106番地
                </dd>
              </div>
              <div>
                <dt className="text-text-muted text-xs tracking-widest mb-1">
                  宗派
                </dt>
                <dd className="text-text-primary">高野山真言宗</dd>
              </div>
              <div>
                <dt className="text-text-muted text-xs tracking-widest mb-1">
                  交通
                </dt>
                <dd className="text-text-primary">
                  のと鉄道 穴水駅より車で約30分
                </dd>
              </div>
              <div>
                <dt className="text-text-muted text-xs tracking-widest mb-1">
                  お問い合わせ
                </dt>
                <dd className="text-text-primary space-y-2">
                  <div className="flex items-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="flex-shrink-0 text-temple"
                      aria-hidden="true"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <a
                      href="mailto:taishoshotai@yahoo.co.jp"
                      className="underline underline-offset-4 decoration-temple/40 hover:decoration-temple transition-colors break-all"
                    >
                      taishoshotai@yahoo.co.jp
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="flex-shrink-0 text-temple"
                      aria-hidden="true"
                    >
                      <path d="M19.365 9.89c.50 0 .91.41.91.91s-.41.902-.91.902h-1.266v.813h1.266c.50 0 .91.41.91.91 0 .50-.41.902-.91.902h-2.172c-.498 0-.904-.404-.904-.902V7.822c0-.498.406-.904.904-.904h2.172c.500 0 .91.406.91.904 0 .504-.41.908-.91.908h-1.266v.812h1.266v.348zm-3.855 3.443c0 .39-.25.732-.62.854-.09.03-.192.045-.29.045-.29 0-.58-.13-.76-.37l-2.22-3.02v2.486c0 .498-.4.904-.905.904-.498 0-.904-.406-.904-.904V7.822c0-.39.25-.73.62-.854.09-.026.186-.046.29-.046.29 0 .58.13.76.37l2.226 3.02V7.822c0-.498.40-.904.905-.904.498 0 .904.406.904.904v5.511zm-6.855 0c0 .498-.406.904-.904.904-.498 0-.904-.406-.904-.904V7.822c0-.498.406-.904.904-.904.498 0 .904.406.904.904v5.511zm-2.956.904H3.53c-.498 0-.904-.406-.904-.904V7.822c0-.498.406-.904.904-.904.498 0 .904.406.904.904v4.607h1.265c.498 0 .904.406.904.904 0 .498-.406.904-.904.904M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.39.085.923.258 1.058.59.12.303.08.778.038 1.08l-.164 1.02c-.045.303-.24 1.186 1.04.647 1.28-.54 6.91-4.07 9.43-6.97C23.17 14.39 24 12.46 24 10.31" />
                    </svg>
                    <a
                      href="https://lin.ee/ZstB0lW"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 decoration-temple/40 hover:decoration-temple transition-colors"
                    >
                      LINEで問い合わせる
                    </a>
                  </div>
                </dd>
              </div>
            </dl>
          </div>

          {/* Google Maps */}
          <div className="h-72 md:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3200!2d136.9!3d37.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z5Y2D5omL6Zmi!5e0!3m2!1sja!2sjp!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="千手院 地図"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
