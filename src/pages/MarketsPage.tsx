import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUp, ArrowDown, Star, Search, TrendingUp } from "lucide-react";
import { useRealtimeCrypto } from "@/hooks/useRealtimeCrypto";
import { useState } from "react";

const MarketsPage = () => {
  const { cryptoData, isLoading } = useRealtimeCrypto();
  const [searchQuery, setSearchQuery] = useState("");

  const allCryptos = [
    ...cryptoData,
    { name: "Polygon", symbol: "MATIC", price: 0.92, change: 24.56, volume: "892M", marketCap: "8.5B" },
    { name: "Chainlink", symbol: "LINK", price: 14.82, change: 18.92, volume: "1.2B", marketCap: "8.9B" },
    { name: "Uniswap", symbol: "UNI", price: 6.45, change: 15.47, volume: "245M", marketCap: "4.8B" },
    { name: "Dogecoin", symbol: "DOGE", price: 0.082, change: -12.34, volume: "1.8B", marketCap: "11.7B" },
    { name: "Shiba Inu", symbol: "SHIB", price: 0.000009, change: -8.91, volume: "456M", marketCap: "5.3B" },
    { name: "Litecoin", symbol: "LTC", price: 94.32, change: -6.78, volume: "678M", marketCap: "7.1B" },
    { name: "Avalanche", symbol: "AVAX", price: 38.45, change: 8.23, volume: "534M", marketCap: "14.2B" },
    { name: "Cosmos", symbol: "ATOM", price: 11.67, change: 5.89, volume: "289M", marketCap: "4.6B" },
    { name: "VeChain", symbol: "VET", price: 0.034, change: 12.45, volume: "178M", marketCap: "2.5B" },
    { name: "Algorand", symbol: "ALGO", price: 0.28, change: -3.21, volume: "234M", marketCap: "2.3B" },
  ];

  const filteredCryptos = allCryptos.filter(crypto => 
    crypto.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    crypto.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-12">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Cryptocurrency <span className="text-primary">Markets</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Track prices, market caps, and volumes for 500+ cryptocurrencies
          </p>

          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search cryptocurrencies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="p-6 bg-gradient-card border-border/50">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-muted-foreground">Market Cap</h3>
              <TrendingUp className="h-4 w-4 text-success" />
            </div>
            <div className="text-2xl font-bold text-foreground">$2.45T</div>
            <div className="text-sm text-success flex items-center gap-1 mt-1">
              <ArrowUp className="h-3 w-3" />
              +2.8%
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card border-border/50">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-muted-foreground">24h Volume</h3>
            </div>
            <div className="text-2xl font-bold text-foreground">$89.2B</div>
            <div className="text-sm text-muted-foreground mt-1">All exchanges</div>
          </Card>

          <Card className="p-6 bg-gradient-card border-border/50">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-muted-foreground">BTC Dominance</h3>
            </div>
            <div className="text-2xl font-bold text-foreground">54.2%</div>
            <div className="text-sm text-muted-foreground mt-1">Market share</div>
          </Card>

          <Card className="p-6 bg-gradient-card border-border/50">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-muted-foreground">Active Cryptos</h3>
            </div>
            <div className="text-2xl font-bold text-foreground">500+</div>
            <div className="text-sm text-muted-foreground mt-1">Available to trade</div>
          </Card>
        </div>

        <Card className="p-6 bg-gradient-card border-border/50">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-muted-foreground border-b border-border">
                  <th className="pb-4 pr-4">#</th>
                  <th className="pb-4 pr-4">Name</th>
                  <th className="pb-4 pr-4">Price</th>
                  <th className="pb-4 pr-4">24h Change</th>
                  <th className="pb-4 pr-4">24h Volume</th>
                  <th className="pb-4 pr-4">Market Cap</th>
                  <th className="pb-4"></th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-muted-foreground">
                      Loading market data...
                    </td>
                  </tr>
                ) : (
                  filteredCryptos.map((crypto, index) => (
                    <tr key={crypto.symbol} className="border-b border-border/50 hover:bg-secondary/50 transition-colors">
                      <td className="py-4 pr-4">
                        <span className="text-muted-foreground">{index + 1}</span>
                      </td>
                      <td className="py-4 pr-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold">
                            {crypto.symbol.substring(0, 2)}
                          </div>
                          <div>
                            <div className="font-medium text-foreground">{crypto.name}</div>
                            <div className="text-sm text-muted-foreground">{crypto.symbol}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 pr-4">
                        <div className="font-mono text-foreground">
                          ${typeof crypto.price === 'number' ? crypto.price.toLocaleString() : crypto.price}
                        </div>
                      </td>
                      <td className="py-4 pr-4">
                        <div className={`flex items-center gap-1 font-semibold ${crypto.change > 0 ? 'text-success' : 'text-destructive'}`}>
                          {crypto.change > 0 ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                          {Math.abs(crypto.change).toFixed(2)}%
                        </div>
                      </td>
                      <td className="py-4 pr-4 text-muted-foreground">${crypto.volume}</td>
                      <td className="py-4 pr-4 text-muted-foreground">${crypto.marketCap}</td>
                      <td className="py-4">
                        <Button variant="ghost" size="icon">
                          <Star className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {filteredCryptos.length === 0 && !isLoading && (
            <div className="py-12 text-center text-muted-foreground">
              No cryptocurrencies found matching "{searchQuery}"
            </div>
          )}
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default MarketsPage;
