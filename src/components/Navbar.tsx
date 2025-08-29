"use client";

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Search, User, Sun, Moon, Mail, Github, Twitter } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import Link from 'next/link';
import Image from 'next/image';

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
    setIsThemeHigh((prev) => {
      const newValue = !prev;
      if (typeof document !== "undefined") {
        if (newValue) {
          document.documentElement.classList.add("high-contrast");
        } else {
          document.documentElement.classList.remove("high-contrast");
        }
      }
      return newValue;
    });
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
          <Link href="/">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8bg-primary rounded-lg flex items-center justify-center">
                {/* <span className="text-primary-foreground font-bold text-sm">RT</span> */}
                <Image src="/logo.png" alt="Logo" width={32} height={32} />
              </div>
              <span className="font-heading font-semibold text-white text-lg hidden sm:block">
                RoundTable
              </span>
            </div>
          </Link>

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