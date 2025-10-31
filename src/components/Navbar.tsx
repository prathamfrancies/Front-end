import { Car } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Car className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground">AutoMarket</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="/search" className="text-foreground hover:text-primary transition-colors">Buy</a>
          <a href="/sell" className="text-foreground hover:text-primary transition-colors">Sell</a>
          <a href="/finance" className="text-foreground hover:text-primary transition-colors">Finance</a>
          <a href="/about" className="text-foreground hover:text-primary transition-colors">About</a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden sm:inline-flex" onClick={() => window.location.href = '/auth'}>Sign In</Button>
          <Button className="bg-accent hover:bg-accent/90" onClick={() => window.location.href = '/list-car'}>List Your Car</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
