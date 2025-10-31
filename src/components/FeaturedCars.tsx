import CarCard from "./CarCard";
import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";
import car4 from "@/assets/car-4.jpg";
import car5 from "@/assets/car-5.jpg";
import car6 from "@/assets/car-6.jpg";

const cars = [
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

const FeaturedCars = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Vehicles</h2>
          <p className="text-muted-foreground text-lg">Browse our handpicked selection of quality pre-owned cars</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <CarCard key={car.id} {...car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
