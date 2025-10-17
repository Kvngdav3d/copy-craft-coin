import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, User, Bell, Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { LoginDialog } from "./LoginDialog";
export const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [defaultToSignUp, setDefaultToSignUp] = useState(false);
  return <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search pages..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
            <CommandItem onSelect={() => { navigate('/'); setOpen(false); }}>
              <TrendingUp className="mr-2 h-4 w-4" />
              <span>Home</span>
            </CommandItem>
            <CommandItem onSelect={() => { navigate('/copy-trading'); setOpen(false); }}>
              <User className="mr-2 h-4 w-4" />
              <span>Copy Trading</span>
            </CommandItem>
            <CommandItem onSelect={() => { navigate('/deposit'); setOpen(false); }}>
              <TrendingUp className="mr-2 h-4 w-4" />
              <span>Deposit</span>
            </CommandItem>
            <CommandItem onSelect={() => { navigate('/courses'); setOpen(false); }}>
              <User className="mr-2 h-4 w-4" />
              <span>Courses</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
      
      <LoginDialog open={loginOpen} onOpenChange={setLoginOpen} defaultToSignUp={defaultToSignUp} />
      
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-8 w-8 text-primary" />
            <span onClick={() => navigate('/')} className="text-xl font-bold text-foreground cursor-pointer hover:opacity-80 transition-opacity">CryptoTrade Pro</span>
            
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
          <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
            <Search className="h-4 w-4" />
          </Button>
          
          <Button variant="outline" onClick={() => {
            setDefaultToSignUp(false);
            setLoginOpen(true);
          }}>
            <User className="h-4 w-4" />
            Login
          </Button>
          <Button variant="hero" onClick={() => {
            setDefaultToSignUp(true);
            setLoginOpen(true);
          }}>
            Get Started
          </Button>
        </div>
      </div>
    </header>
    </>;
};