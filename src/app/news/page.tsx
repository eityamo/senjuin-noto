import type { Metadata } from "next";
import ja from "@/i18n/dictionaries/ja";
import NewsPage from "@/components/pages/NewsPage";

export const metadata: Metadata = {
  title: ja.metadata.newsTitle,
  description: ja.metadata.newsDescription,
};

export default function News() {
  return <NewsPage locale="ja" dict={ja} />;
}
