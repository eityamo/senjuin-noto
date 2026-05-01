import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideIcons from "@/components/SideIcons";
import { members } from "@/lib/members";
import { BASE_PATH } from "@/lib/constants";

export const metadata: Metadata = {
  title: "千手院の縁の下 | 高野山真言宗 海臨山 千手院",
  description:
    "千手院に関わる人々の紹介。千の手を支える、私たちの想い。",
};

export default function MembersPage() {
  return (
    <main>
      <Header />
      <SideIcons />

      {/* ページヘッダー */}
      <section className="bg-temple text-white pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.5em] text-white/60 mb-4">Members</p>
          <h1 className="font-serif text-3xl md:text-4xl tracking-widest">
            千手院の縁の下
          </h1>
          <p className="mt-4 text-sm text-white/70 tracking-wider">
            千の手を支える、私たちの想い
          </p>
        </div>
      </section>

      {/* パンくずリスト */}
      <nav
        className="bg-washi border-b border-gray-200 py-3 px-6"
        aria-label="パンくずリスト"
      >
        <div className="max-w-4xl mx-auto">
          <ol className="flex items-center gap-2 text-xs text-text-muted">
            <li>
              <a
                href={`${BASE_PATH}/`}
                className="hover:text-temple transition-colors cursor-pointer"
              >
                ホーム
              </a>
            </li>
            <li aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </li>
            <li aria-current="page" className="text-text-primary">
              千手院の縁の下
            </li>
          </ol>
        </div>
      </nav>

      {/* メンバー一覧 */}
      <section className="bg-washi py-16 px-6 min-h-[50vh]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                {/* 写真 */}
                <div className="aspect-square bg-temple/10 flex items-center justify-center overflow-hidden">
                  {member.image ? (
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url('${member.image}')` }}
                    />
                  ) : (
                    <svg
                      width="64"
                      height="64"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-temple/30"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  )}
                </div>

                {/* 情報 */}
                <div className="p-6">
                  <h2 className="font-serif text-lg text-text-primary tracking-wider">
                    {member.name}
                  </h2>
                  <p className="mt-1 text-sm text-temple font-medium">
                    {member.role}
                  </p>
                  <p className="mt-0.5 text-xs text-text-muted">
                    {member.title}
                  </p>
                  <p className="mt-4 text-sm text-text-muted leading-relaxed">
                    {member.comment}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ホームに戻るボタン */}
          <div className="mt-12 text-center">
            <a
              href={`${BASE_PATH}/`}
              className="inline-flex items-center gap-3 border border-text-primary px-8 py-3 text-sm tracking-widest cursor-pointer transition-all duration-200 hover:bg-text-primary hover:text-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              ホームに戻る
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
