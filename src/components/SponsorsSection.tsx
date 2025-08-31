"use client"

import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
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
    name: "KodeKloud",
    logo: "/sponsor2/KodeKloud.svg",
    description: "Leading technology solutions",
    website: "https://kodekloud.com"
  },
  {
    id: "2", 
    name: "Code Ninjas",
    logo: "/sponsor2/code-ninjas.svg",
    description: "Future coders start here",
    website: "https://www.codingninjas.com/"
  },
  {
    id: "3",
    name: "elearnmarket",
    logo: "/sponsor2/elearnmarkets.svg",
    description: "Finance education made simple",
    website: "https://www.elearnmarkets.com/"
  },
  {
    id: "4",
    name: "Motorola",
    logo: "/sponsor2/motorola-logo.webp",
    description: "Smartphones that spark innovation",
    website: "https://www.motorola.in/"
  },
  
  {
    id: "5",
    name: "gfg",
    logo: "/sponsor2/gfg.png",
    description: "Your coding learning hub",
    website: "https://www.geeksforgeeks.org/"
  },
  {
    id: "6",
    name: "Fresca Juices",
    logo: "/sponsor2/fresca.webp",
    description: "Drink the Fruit",
    website: "https://www.frescajuices.com/"
  },
  {
    id: "7",
    name: "InterviewBuddy",
    logo: "/sponsor2/interview.png",
    description: "Mock Interviews, Real Results",
    website: "https://interviewbuddy.net/"
  },
  {
    id: "8",
    name: "Converge",
    logo: "/sponsor2/CTS.webp",
    description: "Empowering Technology, Empowering People",
    website: "https://convergetp.com/"
  },
  {
    id: "9",
    name: "Jnuobi",
    logo: "/sponsor2/jnuobi.png",
    description: "Gadgets for the Go-Getters",
    website: ""
  },
  {
    id: "10",
    name: "Sybgen",
    logo: "/sponsor2/SYBGEN-1.png",
    description: "Certifying Cyber Skills Today",
    website: "https://sybgen.com/"
  },
  {
    id: "11",
    name: "mentro",
    logo: "/sponsor2/mentro.svg",
    description: "Mentors Match. Interviews Mastered",
    website: "https://mentro.tech/"
  },
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
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null)
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
          <h2 className="text-4xl font-heading font-bold mb-4">Our Sponsors</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Collaborating with industry leaders to create opportunities and drive innovation in our community.
          </p>
        </div>

        {/* Rotating Partners Showcase */}
        <div className="">
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
                  <Card className="bg-card hover:bg-muted/50 transition-all duration-300 cursor-pointer group" onClick={() => setSelectedPartner(partner)}>
                    <CardContent className="p-4 flex items-center justify-center h-20">
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="max-w-full max-h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
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

            {/* Sponsor detail dialog */}
            <Dialog open={!!selectedPartner} onOpenChange={(open) => { if (!open) setSelectedPartner(null) }}>
              <DialogContent className="max-w-lg">
                {selectedPartner && (
                  <div className="space-y-4">
                    <DialogHeader>
                      <DialogTitle>{selectedPartner.name}</DialogTitle>
                      <DialogDescription>{selectedPartner.description}</DialogDescription>
                    </DialogHeader>

                    <div className="flex items-center justify-center p-4">
                      <img src={selectedPartner.logo} alt={`${selectedPartner.name} logo`} className="max-w-full max-h-40 object-contain" />
                    </div>

                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={selectedPartner.website || '#'} target="_blank" rel="noopener noreferrer">
                          Visit Website
                        </a>
                      </Button>
                      <Button size="sm" onClick={() => setSelectedPartner(null)}>Close</Button>
                    </div>
                  </div>
                )}
              </DialogContent>
            </Dialog>

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
                    {/* Fixed: Display the actual logo image instead of the file path */}
                    <div className="flex items-center justify-center mb-4">
                      <img
                        src={mockPartners[currentPartnerIndex].logo}
                        alt={`${mockPartners[currentPartnerIndex].name} logo`}
                        className="max-h-16 object-contain"
                      />
                    </div>
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