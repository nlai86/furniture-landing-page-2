import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandStatement from "@/components/BrandStatement";
import FeaturedPieces from "@/components/FeaturedPieces";
import MaterialsSection from "@/components/MaterialsSection";
import LifestyleSection from "@/components/LifestyleSection";
import ArchiveSection from "@/components/ArchiveSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => (
  <main>
    <Navbar />
    <Hero />
    <BrandStatement />
    <FeaturedPieces />
    <MaterialsSection />
    <LifestyleSection />
    <ArchiveSection />
    <FinalCTA />
    <Footer />
  </main>
);

export default Index;
