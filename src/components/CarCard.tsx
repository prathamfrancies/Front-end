import { Fuel, Gauge, Calendar } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

interface CarCardProps {
  id?: number;
  image: string;
  title: string;
  year: number;
  price: number;
  mileage: string;
  fuel: string;
  transmission: string;
}

const CarCard = ({ id, image, title, year, price, mileage, fuel, transmission }: CarCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-[var(--card-shadow-hover)]">
      <div className="relative overflow-hidden h-48">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
          ${price.toLocaleString()}
        </div>
      </div>
      
      <CardContent className="p-5">
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{year}</span>
          </div>
          <div className="flex items-center gap-1">
            <Gauge className="h-4 w-4" />
            <span>{mileage}</span>
          </div>
          <div className="flex items-center gap-1">
            <Fuel className="h-4 w-4" />
            <span>{fuel}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{transmission}</span>
          <Button 
            className="bg-primary hover:bg-primary/90"
            onClick={() => window.location.href = `/car/${id}`}
          >
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarCard;
