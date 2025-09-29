import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Copy, 
  BarChart3, 
  Shield, 
  Users, 
  Brain, 
  Smartphone,
  Clock,
  TrendingUp,
  Globe,
  BookOpen,
  DollarSign,
  Zap
} from "lucide-react";

const features = [
  {
    icon: Copy,
    title: "Copy Trading",
    description: "Automatically replicate trades from successful traders with full transparency.",
    badge: "Most Popular",
    color: "text-primary"
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Advanced charts, technical indicators, and portfolio performance tracking.",
    badge: "Professional",
    color: "text-accent"
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "2FA, encryption, cold storage, and insurance protection for your assets.",
    badge: "Secure",
    color: "text-success"
  },
  {
    icon: Brain,
    title: "AI Trading Bots",
    description: "Smart algorithms that analyze market trends and execute optimal trades.",
    badge: "AI-Powered",
    color: "text-warning"
  },
  {
    icon: Users,
    title: "Social Trading",
    description: "Connect with traders, share insights, and learn from the community.",
    badge: "Community",
    color: "text-primary"
  },
  {
    icon: Globe,
    title: "Multi-Crypto Support",
    description: "Trade 500+ cryptocurrencies including Bitcoin, Ethereum, and altcoins.",
    badge: "Extensive",
    color: "text-accent"
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-background" id="features">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            ⚡ Powerful Features
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need to
            <span className="text-primary"> Succeed</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional trading tools, social features, and educational resources 
            designed for both beginners and experienced traders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-secondary ${feature.color}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <Badge variant="outline" className="text-xs">
                  {feature.badge}
                </Badge>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-gradient-hero border-border/50 shadow-card">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Start Your Crypto Journey?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of successful traders who trust our platform. 
                Start with a demo account or begin copy trading today.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="hero" size="lg">
                  <TrendingUp className="h-4 w-4" />
                  Start Trading Now
                </Button>
                <Button variant="outline" size="lg">
                  <BookOpen className="h-4 w-4" />
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-secondary/50 rounded-lg">
                <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">0.1%</div>
                <div className="text-sm text-muted-foreground">Trading Fees</div>
              </div>
              <div className="text-center p-4 bg-secondary/50 rounded-lg">
                <Clock className="h-8 w-8 text-success mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
              <div className="text-center p-4 bg-secondary/50 rounded-lg">
                <Smartphone className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">Mobile</div>
                <div className="text-sm text-muted-foreground">App Ready</div>
              </div>
              <div className="text-center p-4 bg-secondary/50 rounded-lg">
                <DollarSign className="h-8 w-8 text-warning mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">$10</div>
                <div className="text-sm text-muted-foreground">Min Deposit</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};