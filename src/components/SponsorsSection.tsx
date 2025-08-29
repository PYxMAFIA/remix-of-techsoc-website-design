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
  description: string
  website: string
}

const mockPartners: Partner[] = [
  {
    id: "1",
    name: "TechCorp",
    logo: "/api/placeholder/120/60",
    description: "Leading technology solutions",
    website: "https://techcorp.com"
  },
  {
    id: "2", 
    name: "InnovateLab",
    logo: "/api/placeholder/120/60",
    description: "Innovation and research",
    website: "https://innovatelab.com"
  },
  {
    id: "3",
    name: "DataFlow",
    logo: "/api/placeholder/120/60",
    description: "Data analytics platform",
    website: "https://dataflow.com"
  },
  {
    id: "4",
    name: "CloudSync",
    logo: "/api/placeholder/120/60",
    description: "Cloud infrastructure",
    website: "https://cloudsync.com"
  },
  {
    id: "5",
    name: "DevTools Inc",
    logo: "/api/placeholder/120/60",
    description: "Developer productivity tools",
    website: "https://devtools.com"
  },
  {
    id: "6",
    name: "StartupHub",
    logo: "/api/placeholder/120/60",
    description: "Supporting startups",
    website: "https://startuphub.com"
  },
  {
    id: "7",
    name: "AI Solutions",
    logo: "/api/placeholder/120/60",
    description: "Artificial intelligence platform",
    website: "https://aisolutions.com"
  },
  {
    id: "8",
    name: "CyberShield",
    logo: "/api/placeholder/120/60",
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
          <h2 className="text-4xl font-heading font-bold mb-4">Our Sponsor</h2>
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

        
      </div>
    </section>
  )
}