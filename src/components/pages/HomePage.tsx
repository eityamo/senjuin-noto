import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NoticeBanner from "@/components/NoticeBanner";
import About from "@/components/About";
import FeatureCards from "@/components/FeatureCards";
import News from "@/components/News";
import Access from "@/components/Access";
import Footer from "@/components/Footer";
import SideIcons from "@/components/SideIcons";
import type { Dictionary } from "@/i18n/dictionaries/ja";
import type { Locale } from "@/i18n/config";

interface HomePageProps {
  locale: Locale;
  dict: Dictionary;
}

export default function HomePage({ locale, dict }: HomePageProps) {
  return (
    <main lang={locale === "ja" ? undefined : locale}>
      <Header locale={locale} dict={dict} currentPath="/" />
      <SideIcons />
      <Hero dict={dict} />
      <NoticeBanner dict={dict} />
      <About dict={dict} />
      <FeatureCards locale={locale} dict={dict} />
      <News locale={locale} dict={dict} />
      <Access dict={dict} />
      <Footer dict={dict} />
    </main>
  );
}
