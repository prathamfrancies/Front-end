import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Fuel, Gauge, Settings, Phone, Mail } from "lucide-react";
import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";
import car4 from "@/assets/car-4.jpg";
import car5 from "@/assets/car-5.jpg";
import car6 from "@/assets/car-6.jpg";

const carsData = [
  {
    id: 1,
    image: car1,
    title: "Honda CR-V",
    year: 2021,
    price: 28500,
    mileage: "32,000 mi",
    fuel: "Petrol",
    transmission: "Automatic",
    description: "Well-maintained Honda CR-V with full service history. This reliable SUV offers excellent fuel economy and spacious interior. Perfect for families."
  },
  {
    id: 2,
    image: car2,
    title: "BMW 5 Series",
    year: 2020,
    price: 42000,
    mileage: "28,500 mi",
    fuel: "Diesel",
    transmission: "Automatic",
    description: "Luxury sedan with premium features and exceptional performance. This BMW 5 Series comes with leather interior, navigation system, and advanced safety features."
  },
  {
    id: 3,
    image: car3,
    title: "Volkswagen Golf",
    year: 2022,
    price: 22500,
    mileage: "15,000 mi",
    fuel: "Petrol",
    transmission: "Manual",
    description: "Sporty and efficient hatchback with low mileage. Recent model with modern features and excellent driving dynamics."
  },
  {
    id: 4,
    image: car4,
    title: "Toyota RAV4",
    year: 2021,
    price: 31000,
    mileage: "24,000 mi",
    fuel: "Hybrid",
    transmission: "Automatic",
    description: "Eco-friendly hybrid SUV with outstanding fuel efficiency. Features Toyota's renowned reliability and advanced safety systems."
  },
  {
    id: 5,
    image: car5,
    title: "Audi A5 Coupe",
    year: 2020,
    price: 38500,
    mileage: "35,000 mi",
    fuel: "Petrol",
    transmission: "Automatic",
    description: "Elegant coupe with powerful performance and luxurious interior. Quattro all-wheel drive and premium sound system included."
  },
  {
    id: 6,
    image: car6,
    title: "Mazda CX-5",
    year: 2022,
    price: 29500,
    mileage: "18,000 mi",
    fuel: "Petrol",
    transmission: "Automatic",
    description: "Stylish crossover SUV with cutting-edge technology and refined interior. Low mileage and in pristine condition."
  }
];

const CarDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = carsData.find(c => c.id === Number(id));

  if (!car) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Car Not Found</h1>
            <Button onClick={() => navigate("/search")}>Back to Search</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Button 
            variant="outline" 
            onClick={() => navigate("/search")}
            className="mb-6"
          >
            ← Back to Search
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <img 
                src={car.image} 
                alt={car.title}
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>

            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">{car.title}</h1>
              <p className="text-3xl font-bold text-accent mb-6">${car.price.toLocaleString()}</p>

              <Card className="mb-6">
                <CardContent className="grid grid-cols-2 gap-4 p-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-sm text-muted-foreground">Year</p>
                      <p className="font-semibold text-foreground">{car.year}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gauge className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-sm text-muted-foreground">Mileage</p>
                      <p className="font-semibold text-foreground">{car.mileage}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Fuel className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-sm text-muted-foreground">Fuel Type</p>
                      <p className="font-semibold text-foreground">{car.fuel}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-sm text-muted-foreground">Transmission</p>
                      <p className="font-semibold text-foreground">{car.transmission}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-3">Description</h2>
                <p className="text-muted-foreground leading-relaxed">{car.description}</p>
              </div>

              <div className="space-y-3">
                <Button className="w-full bg-accent hover:bg-accent/90" size="lg">
                  <Phone className="h-5 w-5 mr-2" />
                  Contact Seller
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  <Mail className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CarDetail;
