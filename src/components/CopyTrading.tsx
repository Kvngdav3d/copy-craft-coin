import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TrendingUp, ArrowUp, ArrowDown, Copy, Users, BarChart3 } from "lucide-react";
import { useRealtimeCrypto } from "@/hooks/useRealtimeCrypto";

const topTraders = [
  {
    id: 1,
    name: "Alex Chen",
    avatar: "/placeholder.svg",
    profit: "+234.5%",
    followers: 12500,
    winRate: "87%",
    trades: 1289,
    verified: true,
  },
  {
    id: 2,
    name: "Sarah Martinez",
    avatar: "/placeholder.svg",
    profit: "+189.2%",
    followers: 9800,
    winRate: "82%",
    trades: 956,
    verified: true,
  },
  {
    id: 3,
    name: "David Kim",
    avatar: "/placeholder.svg",
    profit: "+156.7%",
    followers: 7300,
    winRate: "79%",
    trades: 743,
    verified: true,
  },
];

export const CopyTrading = () => {
  const { cryptoData, isLoading } = useRealtimeCrypto();

  return (
    <section className="py-24 bg-secondary/20" id="copy-trading">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Copy className="h-4 w-4 mr-1" />
            Copy Trading
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Follow & Copy
            <span className="text-primary"> Top Traders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Automatically replicate trades from verified successful traders and grow your 
            portfolio with proven strategies.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {topTraders.map((trader) => (
            <Card 
              key={trader.id} 
              className="p-6 bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={trader.avatar} alt={trader.name} />
                  <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                    {trader.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-foreground">{trader.name}</h3>
                    {trader.verified && (
                      <Badge variant="outline" className="text-xs">
                        ✓ Verified
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-3 w-3" />
                    {trader.followers.toLocaleString()} followers
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total Profit</span>
                  <span className="text-lg font-bold text-success">{trader.profit}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Win Rate</span>
                  <span className="font-semibold text-foreground">{trader.winRate}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total Trades</span>
                  <span className="font-semibold text-foreground">{trader.trades}</span>
                </div>
              </div>

              <Button variant="hero" className="w-full">
                <Copy className="h-4 w-4" />
                Copy Trader
              </Button>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-gradient-hero border-border/50">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <BarChart3 className="h-6 w-6 text-primary" />
                Recent Trading Activity
              </h3>
              <p className="text-muted-foreground mb-6">
                Live trades from our top-performing traders. Start copying their strategies today.
              </p>
              <div className="flex gap-3">
                <Button variant="hero" size="lg">
                  View All Traders
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              {isLoading ? (
                <div className="text-center text-muted-foreground py-8">
                  Loading market data...
                </div>
              ) : (
                cryptoData.slice(0, 4).map((crypto, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${
                        parseFloat(crypto.change.toString()) >= 0 ? 'bg-success/10' : 'bg-destructive/10'
                      }`}>
                        {parseFloat(crypto.change.toString()) >= 0 ? (
                          <ArrowUp className="h-4 w-4 text-success" />
                        ) : (
                          <ArrowDown className="h-4 w-4 text-destructive" />
                        )}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{crypto.symbol}</div>
                        <div className="text-sm text-muted-foreground">{crypto.name}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-foreground">${crypto.price}</div>
                      <div className={`text-sm ${
                        parseFloat(crypto.change.toString()) >= 0 ? 'text-success' : 'text-destructive'
                      }`}>
                        {crypto.change}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};