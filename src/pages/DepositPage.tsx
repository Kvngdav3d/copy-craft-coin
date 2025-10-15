import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Copy, Wallet, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const DepositPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [depositAmount, setDepositAmount] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  
  const MINIMUM_DEPOSIT = 45;
  const WALLET_ADDRESS = "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(WALLET_ADDRESS);
    toast({
      title: "Copied!",
      description: "Wallet address copied to clipboard",
    });
  };

  const handleVerifyDeposit = () => {
    const amount = parseFloat(depositAmount);
    
    if (isNaN(amount) || amount < MINIMUM_DEPOSIT) {
      toast({
        title: "Invalid Amount",
        description: `Please enter a valid amount. Minimum deposit is $${MINIMUM_DEPOSIT}`,
        variant: "destructive",
      });
      return;
    }

    setIsVerifying(true);
    
    // Simulate verification process
    setTimeout(() => {
      setIsVerifying(false);
      localStorage.setItem("crypto_deposited", "true");
      localStorage.setItem("deposit_amount", depositAmount);
      
      toast({
        title: "Deposit Verified!",
        description: "Your deposit has been confirmed. Redirecting to copy trading...",
      });
      
      setTimeout(() => {
        navigate("/copy-trading");
      }, 1500);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Wallet className="h-3 w-3 mr-1" />
              Deposit Required
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Fund Your Account
            </h1>
            <p className="text-xl text-muted-foreground">
              Transfer a minimum of ${MINIMUM_DEPOSIT} to start copy trading
            </p>
          </div>

          <Card className="bg-gradient-card border-border/50 mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-primary" />
                Important Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                <p className="text-sm">Minimum deposit: <span className="font-bold">${MINIMUM_DEPOSIT} USD</span> in any supported cryptocurrency</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                <p className="text-sm">Supported cryptocurrencies: BTC, ETH, USDT, BNB, SOL</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                <p className="text-sm">Deposits are usually confirmed within 10-30 minutes</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 mb-6">
            <CardHeader>
              <CardTitle>Deposit Wallet Address</CardTitle>
              <CardDescription>
                Send your cryptocurrency to this address
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Input 
                  value={WALLET_ADDRESS} 
                  readOnly 
                  className="font-mono text-sm"
                />
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={copyToClipboard}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle>Verify Your Deposit</CardTitle>
              <CardDescription>
                Enter the amount you transferred to verify your deposit
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="amount">Deposit Amount (USD)</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder={`Minimum $${MINIMUM_DEPOSIT}`}
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(e.target.value)}
                  min={MINIMUM_DEPOSIT}
                  step="0.01"
                />
              </div>
              
              <Button 
                className="w-full" 
                onClick={handleVerifyDeposit}
                disabled={isVerifying}
              >
                {isVerifying ? "Verifying..." : "Verify Deposit"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DepositPage;
