import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, TrendingUp, Users, Award } from "lucide-react";

const CopyTradingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-20">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            🚀 Copy Trading Platform
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Follow Top Traders
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Automatically copy the trades of successful traders and start earning like a pro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="p-6 bg-gradient-card border-border/50">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Star className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Trader {i}</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {Math.floor(Math.random() * 20000) + 1000} followers
                    </div>
                  </div>
                </div>
                <Badge variant="default">
                  <Award className="h-3 w-3 mr-1" />
                  Pro
                </Badge>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">30-day return</span>
                  <span className="font-bold text-success">
                    +{(Math.random() * 300 + 50).toFixed(1)}%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Win rate</span>
                  <span className="font-semibold">
                    {(Math.random() * 20 + 70).toFixed(1)}%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total trades</span>
                  <span className="font-semibold">
                    {Math.floor(Math.random() * 500 + 100)}
                  </span>
                </div>
              </div>

              <Button variant="default" className="w-full mt-4">
                <TrendingUp className="h-4 w-4 mr-2" />
                Start Copying
              </Button>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CopyTradingPage;
