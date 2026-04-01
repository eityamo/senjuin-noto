import type { Metadata } from "next";
import { Noto_Serif_JP, Noto_Sans_JP } from "next/font/google";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}/`),
  title: "高野山真言宗 海臨山 千手院 | 石川県穴水町",
  description:
    "石川県鳳珠郡穴水町曽良に佇む高野山真言宗の寺院。写経・読経・精進料理体験。能登半島の穏やかな湾を臨む絶景の地で、心と向き合う特別な時間を。",
  openGraph: {
    title: "高野山真言宗 海臨山 千手院",
    description:
      "能登・穴水町曽良の高野山真言宗寺院。写経・読経・精進料理体験。",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "images/asoview_01.jpg",
        width: 1200,
        height: 630,
        alt: "千手院 本堂外観",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "高野山真言宗 海臨山 千手院",
    description:
      "能登・穴水町曽良の高野山真言宗寺院。写経・読経・精進料理体験。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSerifJP.variable} ${notoSansJP.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
