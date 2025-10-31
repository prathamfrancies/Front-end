import { SlidersHorizontal } from "lucide-react";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card, CardContent } from "./ui/card";

const FilterSection = () => {
  return (
    <section className="py-8 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <SlidersHorizontal className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Filter Results</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Body Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sedan">Sedan</SelectItem>
                  <SelectItem value="suv">SUV</SelectItem>
                  <SelectItem value="hatchback">Hatchback</SelectItem>
                  <SelectItem value="coupe">Coupe</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-20000">$0 - $20,000</SelectItem>
                  <SelectItem value="20000-40000">$20,000 - $40,000</SelectItem>
                  <SelectItem value="40000-60000">$40,000 - $60,000</SelectItem>
                  <SelectItem value="60000+">$60,000+</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Fuel Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="petrol">Petrol</SelectItem>
                  <SelectItem value="diesel">Diesel</SelectItem>
                  <SelectItem value="hybrid">Hybrid</SelectItem>
                  <SelectItem value="electric">Electric</SelectItem>
                </SelectContent>
              </Select>

              <Button className="bg-primary hover:bg-primary/90">Apply Filters</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FilterSection;
