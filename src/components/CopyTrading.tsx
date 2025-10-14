import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TrendingUp, Users, Star, Shield, Trophy, ArrowUp, ArrowDown, Copy } from "lucide-react";
const topTraders = [{
  id: 1,
  name: "CryptoKing",
  avatar: "/placeholder.svg",
  followers: 12450,
  winRate: 87.3,
  monthlyReturn: 247.8,
  totalReturn: 1250.5,
  riskLevel: "Medium",
  verified: true,
  rating: 4.9,
  copiers: 3420
}, {
  id: 2,
  name: "BlockchainPro",
  avatar: "/placeholder.svg",
  followers: 8930,
  winRate: 92.1,
  monthlyReturn: 198.3,
  totalReturn: 890.2,
  riskLevel: "Low",
  verified: true,
  rating: 4.8,
  copiers: 2150
}, {
  id: 3,
  name: "AltcoinMaster",
  avatar: "/placeholder.svg",
  followers: 15670,
  winRate: 79.5,
  monthlyReturn: 312.7,
  totalReturn: 2100.8,
  riskLevel: "High",
  verified: true,
  rating: 4.7,
  copiers: 5680
}, {
  id: 4,
  name: "DeFiExpert",
  avatar: "/placeholder.svg",
  followers: 6540,
  winRate: 84.2,
  monthlyReturn: 156.9,
  totalReturn: 567.3,
  riskLevel: "Medium",
  verified: true,
  rating: 4.6,
  copiers: 1890
}];
export const CopyTrading = () => {
  return <section className="py-24 bg-secondary/20" id="copy-trading">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            🏆 Top Performers
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Copy the Best
            <span className="text-primary"> Traders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Browse verified traders, analyze their performance, and automatically 
            copy their trades with complete transparency.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {topTraders.map(trader => <Card key={trader.id} className="p-6 bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={trader.avatar} alt={trader.name} />
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                      {trader.name.slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-foreground">{trader.name}</h3>
                      {trader.verified && <Shield className="h-4 w-4 text-primary" />}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {trader.followers.toLocaleString()} followers
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-warning" />
                        {trader.rating}
                      </span>
                    </div>
                  </div>
                </div>
                <Badge variant={trader.riskLevel === 'Low' ? 'default' : trader.riskLevel === 'Medium' ? 'secondary' : 'destructive'} className="text-xs">
                  {trader.riskLevel} Risk
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-2xl font-bold text-success flex items-center gap-1">
                    <ArrowUp className="h-5 w-5" />
                    +{trader.monthlyReturn}%
                  </div>
                  <div className="text-sm text-muted-foreground">30-day return</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">
                    +{trader.totalReturn}%
                  </div>
                  <div className="text-sm text-muted-foreground">Total return</div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Win Rate</span>
                  <span className="text-foreground font-medium">{trader.winRate}%</span>
                </div>
                <Progress value={trader.winRate} className="h-2" />
                
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Active Copiers</span>
                  <span className="text-foreground font-medium">{trader.copiers.toLocaleString()}</span>
                </div>
              </div>

              
            </Card>)}
        </div>

        <Card className="p-8 bg-gradient-hero border-border/50 shadow-card">
          <div className="text-center mb-8">
            <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Why Copy Trading Works
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform provides complete transparency, real-time performance tracking, 
              and risk management tools to help you make informed decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Verified Traders</h4>
              <p className="text-sm text-muted-foreground">
                All traders are verified with transparent track records
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-success" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Real-Time Copying</h4>
              <p className="text-sm text-muted-foreground">
                Trades are copied instantly with no delays
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Risk Management</h4>
              <p className="text-sm text-muted-foreground">
                Set stop-loss limits and control your exposure
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>;
};