import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import LogosSection from '@/components/sections/LogosSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ComparisonSection from '@/components/sections/ComparisonSection';
import PricingSection from '@/components/sections/PricingSection';
import ContactSection from '@/components/sections/ContactSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <LogosSection />
      <FeaturesSection />
      <ComparisonSection />
      <PricingSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </main>
  );
}
