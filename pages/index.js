import Layout from '../components/Layout';
import Footer from '../components/Footer';
import BannerSection from '../components/BannerSection';
import LineaImagenes from '../components/LineaImagenes';
import FAQSection from '../components/FAQSection';


export default function Home() {
  return (
    <Layout>
      <BannerSection />
      <LineaImagenes />
      <FAQSection />
      <Footer />
    </Layout>
  );
}
