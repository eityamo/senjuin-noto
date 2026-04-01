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
