"use client";

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Search, User, Sun, Moon, Mail, Github, Twitter } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Guilds", href: "#guilds" },
  { name: "Events", href: "#events" },
  { name: "Sponsors", href: "#sponsors" },
  { name: "Members", href: "#members" },
  { name: "Gallery", href: "#gallery" },
];

const socialLinks = [
  { name: "GitHub", href: "#github", icon: Github },
  { name: "Twitter", href: "#twitter", icon: Twitter },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isThemeHigh, setIsThemeHigh] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches);
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleThemeToggle = () => {
    setIsThemeHigh(!isThemeHigh);
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("high-contrast", !isThemeHigh);
    }
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    toast.success(`Welcome back, ${email}! Successfully signed in.`);
    setIsLoginOpen(false);
  };

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    toast.success(`Account created for ${email}! Welcome to Tech Society.`);
    setIsLoginOpen(false);
  };

  const motionProps = prefersReducedMotion 
    ? {} 
    : {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0 },
        whileHover: { scale: 1.02, y: -1 },
        transition: { duration: 0.2, ease: "easeOut" },
      };

  return (
    <nav className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">TS</span>
            </div>
            <span className="font-heading font-semibold text-lg hidden sm:block">
              Tech Society
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 bg-muted/50 rounded-full p-1">
            {navLinks.map((link) => (
              <motion.button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                {...motionProps}
              >
                {link.name}
              </motion.button>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleThemeToggle}
              className="hidden sm:flex"
              aria-label={isThemeHigh ? "Switch to Premium Black" : "Switch to High-Contrast White"}
            >
              {isThemeHigh ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </Button>

            {/* Search */}
            <div className="relative hidden md:block">
              <motion.div
                animate={{ width: isSearchFocused ? 240 : 180 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="relative"
              >
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search..."
                  className="pl-10 h-9 bg-muted/50 border-muted focus:border-ring transition-colors"
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
              </motion.div>
            </div>

            {/* Profile/Login */}
            <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm" className="hidden sm:flex">
                  <User className="w-4 h-4 mr-1" />
                  <span className="hidden lg:inline">Sign In</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Welcome to Tech Society</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <form onSubmit={handleLogin} className="space-y-3">
                    <div className="space-y-2">
                      <Label htmlFor="login-email">Email</Label>
                      <Input
                        id="login-email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="login-password">Password</Label>
                      <Input
                        id="login-password"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Sign In
                    </Button>
                  </form>
                  
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-popover px-2 text-muted-foreground">
                        Or create account
                      </span>
                    </div>
                  </div>

                  <form onSubmit={handleSignup} className="space-y-3">
                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email</Label>
                      <Input
                        id="signup-email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-name">Full Name</Label>
                      <Input
                        id="signup-name"
                        name="name"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <Button type="submit" variant="outline" className="w-full">
                      Create Account
                    </Button>
                  </form>
                </div>
              </DialogContent>
            </Dialog>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden"
              aria-label="Open mobile menu"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <Dialog open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <DialogContent className="sm:max-w-full h-full max-h-full p-0 border-0">
          <div className="flex flex-col h-full bg-card">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">TS</span>
                </div>
                <span className="font-heading font-semibold text-lg">Tech Society</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close mobile menu"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <div className="p-4 space-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className="block w-full text-left px-4 py-3 text-lg font-medium text-foreground hover:bg-muted/50 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {link.name}
                  </button>
                ))}
              </div>

              <div className="border-t border-border p-4">
                <div className="space-y-2 mb-4">
                  <Button
                    variant="ghost"
                    onClick={handleThemeToggle}
                    className="w-full justify-start"
                  >
                    {isThemeHigh ? <Moon className="w-4 h-4 mr-2" /> : <Sun className="w-4 h-4 mr-2" />}
                    {isThemeHigh ? "Premium Black" : "High-Contrast White"}
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => setIsLoginOpen(true)}
                    className="w-full justify-start"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Sign In / Sign Up
                  </Button>
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground px-4 py-2">
                    Connect with us
                  </p>
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <button
                        key={link.name}
                        onClick={() => handleNavClick(link.href)}
                        className="flex items-center w-full px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <Icon className="w-4 h-4 mr-3" />
                        {link.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </nav>
  );
}