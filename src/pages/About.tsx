import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, Shield, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About AutoMarket
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner in buying and selling quality pre-owned vehicles
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-secondary/30 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2020, AutoMarket has grown to become one of the leading platforms for 
                buying and selling pre-owned cars. We believe that purchasing a car should be a 
                transparent, enjoyable, and hassle-free experience.
              </p>
              <p className="text-muted-foreground">
                Our mission is to connect buyers and sellers through a platform that prioritizes 
                trust, quality, and customer satisfaction. Every vehicle listed on our platform 
                goes through a verification process to ensure you get the best value for your money.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-accent mb-2" />
                <CardTitle>10,000+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Happy Customers</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-accent mb-2" />
                <CardTitle>5,000+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Cars Sold</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-10 w-10 text-accent mb-2" />
                <CardTitle>15+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Years Experience</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-accent mb-2" />
                <CardTitle>100%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Verified Listings</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/10 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Transparency</h3>
                <p className="text-muted-foreground">
                  Honest pricing and detailed vehicle information for informed decisions
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Quality</h3>
                <p className="text-muted-foreground">
                  Every vehicle is thoroughly inspected and verified before listing
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Support</h3>
                <p className="text-muted-foreground">
                  Dedicated customer service to help you through every step
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
