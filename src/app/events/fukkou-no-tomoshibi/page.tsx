import type { Metadata } from "next";
import ja from "@/i18n/dictionaries/ja";
import FukkouPage from "@/components/pages/FukkouPage";

export const metadata: Metadata = {
  title: ja.metadata.fukkouTitle,
  description: ja.metadata.fukkouDescription,
};

export default function FukkouNoTomoshibi() {
  return <FukkouPage locale="ja" dict={ja} />;
}
