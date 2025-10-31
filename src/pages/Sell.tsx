import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Upload, DollarSign, HandshakeIcon } from "lucide-react";

const Sell = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sell Your Car With Confidence
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              List your car for free and reach thousands of potential buyers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <Upload className="h-12 w-12 text-accent mb-2" />
                <CardTitle>1. List Your Car</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Create a detailed listing with photos and specifications
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <DollarSign className="h-12 w-12 text-accent mb-2" />
                <CardTitle>2. Get Offers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Receive competitive offers from verified buyers
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <HandshakeIcon className="h-12 w-12 text-accent mb-2" />
                <CardTitle>3. Close the Deal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Complete the sale securely with our support
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-secondary/30 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
              Why Sell With Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Free Listing</h3>
                  <p className="text-muted-foreground text-sm">No upfront costs to list your vehicle</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Wide Reach</h3>
                  <p className="text-muted-foreground text-sm">Access thousands of potential buyers</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Quick Process</h3>
                  <p className="text-muted-foreground text-sm">Sell your car in as little as 24 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Secure Transactions</h3>
                  <p className="text-muted-foreground text-sm">Safe payment and transfer process</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90"
              onClick={() => navigate("/list-car")}
            >
              List Your Car Now
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sell;
