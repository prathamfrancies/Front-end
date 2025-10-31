import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FilterSection from "@/components/FilterSection";
import FeaturedCars from "@/components/FeaturedCars";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <FilterSection />
        <FeaturedCars />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
