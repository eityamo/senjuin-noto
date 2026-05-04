import type { Metadata } from "next";
import ja from "@/i18n/dictionaries/ja";
import EventsPage from "@/components/pages/EventsPage";

export const metadata: Metadata = {
  title: ja.metadata.eventsTitle,
  description: ja.metadata.eventsDescription,
};

export default function Events() {
  return <EventsPage locale="ja" dict={ja} />;
}
