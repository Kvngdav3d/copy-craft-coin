import { TrendingUp, Shield, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
export const Footer = () => {
  return <footer className="bg-gradient-hero border-t border-border">
      <div className="container py-16">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">CryptoTrade Pro</span>
            </div>
            <p className="text-muted-foreground">
              The world's most trusted cryptocurrency copy trading platform. 
              Join 500,000+ traders and start your crypto journey today.
            </p>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-success" />
              <span className="text-sm text-foreground">Bank-Grade Security</span>
            </div>
          </div>


          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              
              
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="https://t.me/copytradepro1" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Community</a></li>
              
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                support@cryptotradepro.com
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                24/7 Live Chat Support
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Global Operations
              </div>
            </div>
            <Button variant="hero" className="mt-4 w-full">
              Get Support
            </Button>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span>© 2024 CryptoTrade Pro. All rights reserved.</span>
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Risk Disclosure</a>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="text-xs">
                Licensed & Regulated
              </Badge>
              <Badge variant="outline" className="text-xs">
                ISO 27001 Certified
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};