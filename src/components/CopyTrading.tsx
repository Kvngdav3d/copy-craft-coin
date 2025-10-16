import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, ArrowUp, ArrowDown, DollarSign } from "lucide-react";
import { useRealtimeCrypto } from "@/hooks/useRealtimeCrypto";
export const CopyTrading = () => {
  const { cryptoData: realtimeTrades, isLoading } = useRealtimeCrypto();
  
  return (
    <section className="py-24 bg-secondary/20" id="copy-trading">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            📊 Live Market Data
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Real-Time
            <span className="text-primary"> Crypto Trading</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with live prices, charts, and market trends across 500+ cryptocurrencies.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 bg-gradient-card border-border/50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground">Market Cap</h3>
              <TrendingUp className="h-5 w-5 text-success" />
            </div>
            <div className="text-3xl font-bold text-foreground">$2.45T</div>
            <div className="text-sm text-success flex items-center gap-1 mt-1">
              <ArrowUp className="h-3 w-3" />
              +2.8% (24h)
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card border-border/50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground">24h Volume</h3>
              <DollarSign className="h-5 w-5 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground">$89.2B</div>
            <div className="text-sm text-muted-foreground mt-1">
              Across all pairs
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card border-border/50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground">BTC Dominance</h3>
              <Badge variant="default">BTC</Badge>
            </div>
            <div className="text-3xl font-bold text-foreground">54.2%</div>
            <div className="text-sm text-muted-foreground mt-1">
              Market share
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card border-border/50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground">Fear & Greed</h3>
              <Badge variant="secondary">Neutral</Badge>
            </div>
            <div className="text-3xl font-bold text-foreground">58</div>
            <div className="text-sm text-muted-foreground mt-1">
              Index score
            </div>
          </Card>
        </div>

        <Card className="p-6 bg-gradient-card border-border/50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-foreground">Top Cryptocurrencies</h3>
            <Button variant="outline" size="sm">
              View All Markets
            </Button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-muted-foreground border-b border-border">
                  <th className="pb-3">Asset</th>
                  <th className="pb-3">Price</th>
                  <th className="pb-3">24h Change</th>
                  <th className="pb-3">Volume</th>
                  <th className="pb-3">Market Cap</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-muted-foreground">
                      Loading live market data...
                    </td>
                  </tr>
                ) : (
                  realtimeTrades.map((asset) => (
                    <tr key={asset.symbol} className="border-b border-border/50 hover:bg-secondary/50 transition-colors">
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold">
                            {asset.symbol}
                          </div>
                          <div>
                            <div className="font-medium text-foreground">{asset.symbol}</div>
                            <div className="text-sm text-muted-foreground">{asset.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4">
                        <div className="font-mono text-foreground">
                          ${asset.price.toLocaleString()}
                        </div>
                      </td>
                      <td className="py-4">
                        <div className={`flex items-center gap-1 ${asset.change > 0 ? 'text-success' : 'text-destructive'}`}>
                          {asset.change > 0 ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                          {Math.abs(asset.change).toFixed(2)}%
                        </div>
                      </td>
                      <td className="py-4 text-muted-foreground">${asset.volume}</td>
                      <td className="py-4 text-muted-foreground">${asset.marketCap}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </section>
  );
};