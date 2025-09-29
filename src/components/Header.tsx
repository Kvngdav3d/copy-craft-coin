import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, User, Bell, Search } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">CryptoTrade Pro</span>
            <Badge variant="secondary" className="ml-2">Beta</Badge>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#markets" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Markets
            </a>
            <a href="#copy-trading" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Copy Trading
            </a>
            <a href="#portfolio" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Portfolio
            </a>
            <a href="#learn" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Learn
            </a>
            <a href="#community" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Community
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="outline">
            <User className="h-4 w-4" />
            Login
          </Button>
          <Button variant="hero">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};