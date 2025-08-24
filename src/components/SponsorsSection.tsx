"use client"

import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Building2, Heart, Star, Zap, ExternalLink, Bell, Mail } from "lucide-react"
import { toast } from "sonner"

interface Partner {
  id: string
  name: string
  logo: string
  tier: "platinum" | "gold" | "silver" | "bronze"
  description: string
  website: string
}

const mockPartners: Partner[] = [
  {
    id: "1",
    name: "TechCorp",
    logo: "/api/placeholder/120/60",
    tier: "platinum",
    description: "Leading technology solutions",
    website: "https://techcorp.com"
  },
  {
    id: "2", 
    name: "InnovateLab",
    logo: "/api/placeholder/120/60",
    tier: "gold",
    description: "Innovation and research",
    website: "https://innovatelab.com"
  },
  {
    id: "3",
    name: "DataFlow",
    logo: "/api/placeholder/120/60",
    tier: "silver",
    description: "Data analytics platform",
    website: "https://dataflow.com"
  },
  {
    id: "4",
    name: "CloudSync",
    logo: "/api/placeholder/120/60",
    tier: "bronze",
    description: "Cloud infrastructure",
    website: "https://cloudsync.com"
  },
  {
    id: "5",
    name: "DevTools Inc",
    logo: "/api/placeholder/120/60",
    tier: "gold",
    description: "Developer productivity tools",
    website: "https://devtools.com"
  },
  {
    id: "6",
    name: "StartupHub",
    logo: "/api/placeholder/120/60",
    tier: "silver",
    description: "Supporting startups",
    website: "https://startuphub.com"
  },
  {
    id: "7",
    name: "AI Solutions",
    logo: "/api/placeholder/120/60",
    tier: "gold",
    description: "Artificial intelligence platform",
    website: "https://aisolutions.com"
  },
  {
    id: "8",
    name: "CyberShield",
    logo: "/api/placeholder/120/60",
    tier: "silver",
    description: "Cybersecurity solutions",
    website: "https://cybershield.com"
  }
]

const updates = [
  {
    id: "1",
    title: "New Partnership with TechCorp",
    description: "Excited to announce our platinum partnership",
    date: "2024-03-15",
    type: "partnership"
  },
  {
    id: "2",
    title: "Workshop Series Announced",
    description: "Monthly technical workshops starting next week",
    date: "2024-03-12",
    type: "event"
  },
  {
    id: "3",
    title: "Community Growth Milestone",
    description: "We've reached 500+ active members!",
    date: "2024-03-10",
    type: "milestone"
  },
  {
    id: "4",
    title: "New Project Showcase Platform",
    description: "Members can now showcase their projects",
    date: "2024-03-08",
    type: "feature"
  }
]

export default function PartnersSection() {
  const [currentPartnerIndex, setCurrentPartnerIndex] = useState(0)
  const [emailForm, setEmailForm] = useState({ email: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  // Rotating partners animation
  useEffect(() => {
    if (shouldReduceMotion) return
    
    const interval = setInterval(() => {
      setCurrentPartnerIndex(prev => (prev + 1) % mockPartners.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [shouldReduceMotion])

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!emailForm.email) {
      toast.error("Please enter your email")
      return
    }

    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast.success("Subscribed to updates!")
    setEmailForm({ email: "" })
    setIsSubmitting(false)
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold mb-4">Our Partners</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Collaborating with industry leaders to create opportunities and drive innovation in our community.
          </p>
        </div>

        {/* Rotating Partners Showcase */}
        <div className="mb-16">
          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
              {mockPartners.map((partner, index) => (
                <motion.div
                  key={partner.id}
                  className="relative"
                  initial={{ opacity: 0.3, scale: 0.9 }}
                  animate={{
                    opacity: index === currentPartnerIndex ? 1 : 0.4,
                    scale: index === currentPartnerIndex ? 1.05 : 0.95,
                    y: index === currentPartnerIndex ? -8 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-card hover:bg-muted/50 transition-all duration-300 cursor-pointer group">
                    <CardContent className="p-4 flex items-center justify-center h-20">
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
                      />
                    </CardContent>
                  </Card>
                  {index === currentPartnerIndex && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center"
                    >
                      <Badge variant="secondary" className="text-xs">
                        {partner.tier}
                      </Badge>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Featured Partner Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPartnerIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <Card className="bg-card border-border max-w-md mx-auto">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {mockPartners[currentPartnerIndex].name}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {mockPartners[currentPartnerIndex].description}
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a 
                        href={mockPartners[currentPartnerIndex].website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Visit Website <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Stay Updated Grid */}
        <div className="bg-card border border-border rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-semibold mb-2">Stay Updated</h3>
            <p className="text-muted-foreground">
              Get the latest news, updates, and announcements from our community
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Newsletter Signup */}
            <div className="lg:col-span-1">
              <Card className="bg-background border-border h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Mail className="h-5 w-5 text-primary" />
                    Newsletter
                  </CardTitle>
                  <CardDescription>
                    Weekly updates delivered to your inbox
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleEmailSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="newsletter-email" className="sr-only">Email</Label>
                      <Input
                        id="newsletter-email"
                        type="email"
                        placeholder="your@email.com"
                        value={emailForm.email}
                        onChange={(e) => setEmailForm({ email: e.target.value })}
                        className="bg-input border-border"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      disabled={isSubmitting} 
                      className="w-full"
                    >
                      <Bell className="h-4 w-4 mr-2" />
                      {isSubmitting ? "Subscribing..." : "Subscribe"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Recent Updates */}
            <div className="lg:col-span-2">
              <Card className="bg-background border-border h-full">
                <CardHeader>
                  <CardTitle className="text-lg">Recent Updates</CardTitle>
                  <CardDescription>
                    Latest news and announcements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {updates.map((update, index) => (
                      <motion.div
                        key={update.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                      >
                        <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2" />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm">{update.title}</h4>
                          <p className="text-xs text-muted-foreground mb-1">
                            {update.description}
                          </p>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              {update.type}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {new Date(update.date).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}