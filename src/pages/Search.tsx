import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import FilterSection from "@/components/FilterSection";
import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";
import car4 from "@/assets/car-4.jpg";
import car5 from "@/assets/car-5.jpg";
import car6 from "@/assets/car-6.jpg";

const allCars = [
  {
    id: 1,
    image: car1,
    title: "Honda CR-V",
    year: 2021,
    price: 28500,
    mileage: "32,000 mi",
    fuel: "Petrol",
    transmission: "Automatic"
  },
  {
    id: 2,
    image: car2,
    title: "BMW 5 Series",
    year: 2020,
    price: 42000,
    mileage: "28,500 mi",
    fuel: "Diesel",
    transmission: "Automatic"
  },
  {
    id: 3,
    image: car3,
    title: "Volkswagen Golf",
    year: 2022,
    price: 22500,
    mileage: "15,000 mi",
    fuel: "Petrol",
    transmission: "Manual"
  },
  {
    id: 4,
    image: car4,
    title: "Toyota RAV4",
    year: 2021,
    price: 31000,
    mileage: "24,000 mi",
    fuel: "Hybrid",
    transmission: "Automatic"
  },
  {
    id: 5,
    image: car5,
    title: "Audi A5 Coupe",
    year: 2020,
    price: 38500,
    mileage: "35,000 mi",
    fuel: "Petrol",
    transmission: "Automatic"
  },
  {
    id: 6,
    image: car6,
    title: "Mazda CX-5",
    year: 2022,
    price: 29500,
    mileage: "18,000 mi",
    fuel: "Petrol",
    transmission: "Automatic"
  }
];

const Search = () => {
  const [cars] = useState(allCars);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Browse All Cars</h1>
            <p className="text-muted-foreground">Find your perfect vehicle from our extensive collection</p>
          </div>
          
          <FilterSection />
          
          <div className="mt-8">
            <p className="text-sm text-muted-foreground mb-4">Showing {cars.length} vehicles</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cars.map((car) => (
                <CarCard key={car.id} {...car} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
