import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Eye, EyeOff } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { z } from "zod";

const phoneSchema = z.string().min(10, "Phone number must be at least 10 digits");
const passwordSchema = z.string().min(6, "Password must be at least 6 characters");

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultToSignUp?: boolean;
}

export const LoginDialog = ({ open, onOpenChange, defaultToSignUp = false }: LoginDialogProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(defaultToSignUp);
  const [countryCode, setCountryCode] = useState("+1");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const { signInWithGoogle, signInWithPhone, signUpWithPhone, user } = useAuth();

  useEffect(() => {
    setIsSignUp(defaultToSignUp);
  }, [defaultToSignUp]);

  useEffect(() => {
    if (user && open) {
      onOpenChange(false);
    }
  }, [user, open, onOpenChange]);

  const handleGoogleSignIn = async () => {
    await signInWithGoogle();
  };

  const handlePhoneAuth = async () => {
    setErrors({});

    try {
      const fullPhone = `${countryCode}${phone}`;
      phoneSchema.parse(phone);
      passwordSchema.parse(password);

      if (isSignUp) {
        if (password !== confirmPassword) {
          setErrors({ confirmPassword: "Passwords do not match" });
          return;
        }
        await signUpWithPhone(fullPhone, password);
      } else {
        await signInWithPhone(fullPhone, password);
      }

      onOpenChange(false);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: { [key: string]: string } = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">
            {isSignUp ? "Create Account" : "Welcome Back"}
          </DialogTitle>
          <DialogDescription className="text-center">
            {isSignUp
              ? "Join thousands of traders and start your crypto journey"
              : "Sign in to access your trading dashboard"
            }
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="google" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="google" className="flex items-center gap-2">
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </TabsTrigger>
            <TabsTrigger value="phone" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Phone
            </TabsTrigger>
          </TabsList>

          <TabsContent value="google" className="space-y-4 mt-6">
            <div className="text-center text-sm text-muted-foreground mb-4">
              {isSignUp
                ? "Create your account with Google in seconds"
                : "Sign in with your Google account"}
            </div>

            <Button className="w-full" variant="hero" onClick={handleGoogleSignIn}>
              {isSignUp ? "Sign Up with Google" : "Sign In with Google"}
            </Button>

            <div className="text-center text-sm">
              <button
                type="button"
                className="text-primary hover:underline"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp
                  ? "Already have an account? Sign in"
                  : "Don't have an account? Sign up"}
              </button>
            </div>
          </TabsContent>

          <TabsContent value="phone" className="space-y-4 mt-6">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="flex gap-2">
                <Select value={countryCode} onValueChange={setCountryCode}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="max-h-96">
                    <SelectItem value="+1">🇺🇸 +1 USA</SelectItem>
                    <SelectItem value="+7">🇷🇺 +7 Russia</SelectItem>
                    <SelectItem value="+20">🇪🇬 +20 Egypt</SelectItem>
                    <SelectItem value="+27">🇿🇦 +27 South Africa</SelectItem>
                    <SelectItem value="+30">🇬🇷 +30 Greece</SelectItem>
                    <SelectItem value="+31">🇳🇱 +31 Netherlands</SelectItem>
                    <SelectItem value="+32">🇧🇪 +32 Belgium</SelectItem>
                    <SelectItem value="+33">🇫🇷 +33 France</SelectItem>
                    <SelectItem value="+34">🇪🇸 +34 Spain</SelectItem>
                    <SelectItem value="+36">🇭🇺 +36 Hungary</SelectItem>
                    <SelectItem value="+39">🇮🇹 +39 Italy</SelectItem>
                    <SelectItem value="+40">🇷🇴 +40 Romania</SelectItem>
                    <SelectItem value="+41">🇨🇭 +41 Switzerland</SelectItem>
                    <SelectItem value="+43">🇦🇹 +43 Austria</SelectItem>
                    <SelectItem value="+44">🇬🇧 +44 UK</SelectItem>
                    <SelectItem value="+45">🇩🇰 +45 Denmark</SelectItem>
                    <SelectItem value="+46">🇸🇪 +46 Sweden</SelectItem>
                    <SelectItem value="+47">🇳🇴 +47 Norway</SelectItem>
                    <SelectItem value="+48">🇵🇱 +48 Poland</SelectItem>
                    <SelectItem value="+49">🇩🇪 +49 Germany</SelectItem>
                    <SelectItem value="+51">🇵🇪 +51 Peru</SelectItem>
                    <SelectItem value="+52">🇲🇽 +52 Mexico</SelectItem>
                    <SelectItem value="+53">🇨🇺 +53 Cuba</SelectItem>
                    <SelectItem value="+54">🇦🇷 +54 Argentina</SelectItem>
                    <SelectItem value="+55">🇧🇷 +55 Brazil</SelectItem>
                    <SelectItem value="+56">🇨🇱 +56 Chile</SelectItem>
                    <SelectItem value="+57">🇨🇴 +57 Colombia</SelectItem>
                    <SelectItem value="+58">🇻🇪 +58 Venezuela</SelectItem>
                    <SelectItem value="+60">🇲🇾 +60 Malaysia</SelectItem>
                    <SelectItem value="+61">🇦🇺 +61 Australia</SelectItem>
                    <SelectItem value="+62">🇮🇩 +62 Indonesia</SelectItem>
                    <SelectItem value="+63">🇵🇭 +63 Philippines</SelectItem>
                    <SelectItem value="+64">🇳🇿 +64 New Zealand</SelectItem>
                    <SelectItem value="+65">🇸🇬 +65 Singapore</SelectItem>
                    <SelectItem value="+66">🇹🇭 +66 Thailand</SelectItem>
                    <SelectItem value="+81">🇯🇵 +81 Japan</SelectItem>
                    <SelectItem value="+82">🇰🇷 +82 South Korea</SelectItem>
                    <SelectItem value="+84">🇻🇳 +84 Vietnam</SelectItem>
                    <SelectItem value="+86">🇨🇳 +86 China</SelectItem>
                    <SelectItem value="+90">🇹🇷 +90 Turkey</SelectItem>
                    <SelectItem value="+91">🇮🇳 +91 India</SelectItem>
                    <SelectItem value="+92">🇵🇰 +92 Pakistan</SelectItem>
                    <SelectItem value="+93">🇦🇫 +93 Afghanistan</SelectItem>
                    <SelectItem value="+94">🇱🇰 +94 Sri Lanka</SelectItem>
                    <SelectItem value="+95">🇲🇲 +95 Myanmar</SelectItem>
                    <SelectItem value="+98">🇮🇷 +98 Iran</SelectItem>
                    <SelectItem value="+212">🇲🇦 +212 Morocco</SelectItem>
                    <SelectItem value="+234">🇳🇬 +234 Nigeria</SelectItem>
                    <SelectItem value="+256">🇺🇬 +256 Uganda</SelectItem>
                    <SelectItem value="+966">🇸🇦 +966 Saudi Arabia</SelectItem>
                    <SelectItem value="+971">🇦🇪 +971 UAE</SelectItem>
                    <SelectItem value="+972">🇮🇱 +972 Israel</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="555 123-4567"
                  className="flex-1"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phonePassword">Password</Label>
              <div className="relative">
                <Input
                  id="phonePassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
              {errors.password && <p className="text-sm text-destructive">{errors.password}</p>}
            </div>

            {isSignUp && (
              <div className="space-y-2">
                <Label htmlFor="confirmPhonePassword">Confirm Password</Label>
                <Input
                  id="confirmPhonePassword"
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {errors.confirmPassword && <p className="text-sm text-destructive">{errors.confirmPassword}</p>}
              </div>
            )}

            <Button className="w-full" variant="hero" onClick={handlePhoneAuth}>
              {isSignUp ? "Create Account" : "Sign In"}
            </Button>

            <div className="text-center text-sm">
              <button
                type="button"
                className="text-primary hover:underline"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp
                  ? "Already have an account? Sign in"
                  : "Don't have an account? Sign up"}
              </button>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-xs text-center text-muted-foreground mt-4">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </div>
      </DialogContent>
    </Dialog>
  );
};
