import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NoticeBanner from "@/components/NoticeBanner";
import About from "@/components/About";
import FeatureCards from "@/components/FeatureCards";
import News from "@/components/News";
import Access from "@/components/Access";
import Footer from "@/components/Footer";
import SideIcons from "@/components/SideIcons";

export default function Home() {
  return (
    <main>
      <Header />
      <SideIcons />
      <Hero />
      <NoticeBanner />
      <About />
      <FeatureCards />
      <News />
      <Access />
      <Footer />
    </main>
  );
}
