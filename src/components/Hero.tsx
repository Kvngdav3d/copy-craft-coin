import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Shield, Users, BarChart3, Brain, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/crypto-hero.jpg";
export const Hero = () => {
  const navigate = useNavigate();
  
  return <section className="relative min-h-[90vh] bg-gradient-hero flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent z-10" />
      <img src={heroImage} alt="Crypto trading platform" className="absolute inset-0 w-full h-full object-cover opacity-20" />
      
      <div className="container relative z-20 grid lg:grid-cols-2 gap-12 items-center py-20">
        <div className="space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary" className="w-fit">
              🚀 #1 Copy Trading Platform
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Trade Like a 
              <span className="text-primary"> Pro</span>,
              <br />
              Even as a Beginner
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              Copy successful traders automatically, monitor your portfolio in real-time, 
              and join a community of 100,000+ crypto investors.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button 
              variant="hero" 
              size="lg" 
              className="animate-pulse-glow"
              onClick={() => navigate('/copy-trading')}
            >
              Start Copy Trading
            </Button>
            
          </div>

          <div className="flex items-center gap-6 pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-success">500k+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success">$2.5B+</div>
              <div className="text-sm text-muted-foreground">Volume Traded</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success">98.7%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="p-6 bg-gradient-card border-border/50 shadow-card animate-float">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground">Top Trader Performance</h3>
              <Badge variant="default">Live</Badge>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Star className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">CryptoKing</div>
                    <div className="text-sm text-muted-foreground">12,450 followers</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-success">+247.8%</div>
                  <div className="text-sm text-muted-foreground">30 days</div>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-2 gap-4">
            <Card className="p-4 bg-gradient-card border-border/50">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-foreground">Bank-Grade Security</span>
              </div>
              <p className="text-xs text-muted-foreground">Military-grade encryption</p>
            </Card>
            
            <Card className="p-4 bg-gradient-card border-border/50">
              <div className="flex items-center gap-2 mb-2">
                <Brain className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-foreground">AI-Powered Insights</span>
              </div>
              <p className="text-xs text-muted-foreground">Smart trading signals</p>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};