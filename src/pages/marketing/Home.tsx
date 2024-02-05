import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Features from './components/Features';

export default function Home() {
  return (
    <div className='bg-zinc-50 text-zinc-800'>
      <Header />
      <HeroSection />
      <Features />
      <Faq />
      <Footer />
    </div>
  );
}
