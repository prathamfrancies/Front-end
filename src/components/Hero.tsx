import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import heroImage from "@/assets/hero-car.jpg";

const Hero = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Find Your Perfect Car
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Discover thousands of quality pre-owned vehicles at unbeatable prices
        </p>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input 
              placeholder="Make or Model" 
              className="col-span-1"
            />
            <Input 
              placeholder="Year" 
              type="number"
              className="col-span-1"
            />
            <Input 
              placeholder="Max Price" 
              type="number"
              className="col-span-1"
            />
            <Button 
              className="bg-accent hover:bg-accent/90 col-span-1"
              onClick={() => window.location.href = '/search'}
            >
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
