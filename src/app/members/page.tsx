import type { Metadata } from "next";
import ja from "@/i18n/dictionaries/ja";
import MembersPage from "@/components/pages/MembersPage";

export const metadata: Metadata = {
  title: ja.metadata.membersTitle,
  description: ja.metadata.membersDescription,
};

export default function Members() {
  return <MembersPage locale="ja" dict={ja} />;
}
