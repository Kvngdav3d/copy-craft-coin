import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { CopyTrading } from "@/components/CopyTrading";
import { MarketOverview } from "@/components/MarketOverview";
import { Community } from "@/components/Community";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <CopyTrading />
      <MarketOverview />
      <Community />
      <Footer />
    </div>
  );
};

export default Index;
