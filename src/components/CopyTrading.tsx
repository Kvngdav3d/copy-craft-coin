import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, ArrowUp, ArrowDown, DollarSign } from "lucide-react";
import { useRealtimeCrypto } from "@/hooks/useRealtimeCrypto";
export const CopyTrading = () => {
  const {
    cryptoData: realtimeTrades,
    isLoading
  } = useRealtimeCrypto();
  return <section className="py-24 bg-secondary/20" id="copy-trading">
      
    </section>;
};