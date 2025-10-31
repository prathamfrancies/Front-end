import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Calculator } from "lucide-react";
import { useState } from "react";

const Finance = () => {
  const [loanAmount, setLoanAmount] = useState("25000");
  const [interestRate, setInterestRate] = useState("5.5");
  const [loanTerm, setLoanTerm] = useState("60");
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);

  const calculatePayment = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const payments = parseFloat(loanTerm);
    
    const x = Math.pow(1 + rate, payments);
    const monthly = (principal * x * rate) / (x - 1);
    
    setMonthlyPayment(monthly);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Financing Options
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Flexible financing solutions to help you drive your dream car home today
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <Calculator className="h-10 w-10 text-accent mb-2" />
                <CardTitle>Loan Calculator</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="amount">Loan Amount ($)</Label>
                  <Input 
                    id="amount" 
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rate">Interest Rate (%)</Label>
                  <Input 
                    id="rate" 
                    type="number"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="term">Loan Term (months)</Label>
                  <Input 
                    id="term" 
                    type="number"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(e.target.value)}
                  />
                </div>
                <Button 
                  className="w-full bg-accent hover:bg-accent/90"
                  onClick={calculatePayment}
                >
                  Calculate Monthly Payment
                </Button>
                {monthlyPayment && (
                  <div className="bg-primary/10 p-4 rounded-lg text-center">
                    <p className="text-sm text-muted-foreground mb-1">Estimated Monthly Payment</p>
                    <p className="text-3xl font-bold text-foreground">${monthlyPayment.toFixed(2)}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Why Finance With Us?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Competitive Rates</h3>
                      <p className="text-sm text-muted-foreground">Starting from 3.99% APR</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Flexible Terms</h3>
                      <p className="text-sm text-muted-foreground">12 to 84 months available</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Quick Approval</h3>
                      <p className="text-sm text-muted-foreground">Get approved in minutes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Bad Credit OK</h3>
                      <p className="text-sm text-muted-foreground">We work with all credit types</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Financing Partners</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We partner with leading financial institutions to offer you the best rates and terms:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Major banks and credit unions</li>
                    <li>• Online lenders</li>
                    <li>• Manufacturer financing programs</li>
                    <li>• Special financing for military and first responders</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Finance;
