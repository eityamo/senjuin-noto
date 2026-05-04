import type { Metadata } from "next";
import ja from "@/i18n/dictionaries/ja";
import NohPage from "@/components/pages/NohPage";

export const metadata: Metadata = {
  title: ja.metadata.nohTitle,
  description: ja.metadata.nohDescription,
};

export default function NohWorkshop() {
  return <NohPage locale="ja" dict={ja} />;
}
