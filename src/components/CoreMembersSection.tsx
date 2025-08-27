"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { useState, useEffect } from "react"
import { Search, Mail, Linkedin, Twitter, Star, Clock, ChevronRight, X, Send, Users, Award } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

interface CoreMember {
  id: string
  name: string
  role: string
  category: "Senior Council" | "Junior Council"
  avatar: string
  bio: string
  expandedBio: string
  responsibilities: string[]
  projects: string[]
  email: string
  linkedin?: string
  twitter?: string
  joinedDate: string
  featured: boolean
  level: "President" | "Vice President" | "Secretary" | "Treasurer" | "Lead" | "Coordinator" | "Member"
}

const mockMembers: CoreMember[] = [
  // Senior Council
  {
    id: "1",
    name: "Sarah Chen",
    role: "President",
    category: "Senior Council",
    avatar: "/avatars/sarah.jpg",
    bio: "Leading strategic vision and organizational growth",
    expandedBio: "Sarah brings over 8 years of experience in nonprofit leadership and community organizing. She has a passion for building inclusive spaces where everyone can thrive and contribute meaningfully to our mission.",
    responsibilities: ["Strategic planning", "Board relations", "External partnerships"],
    projects: ["Community Growth Initiative", "Strategic Plan 2024-2026"],
    email: "sarah@example.org",
    linkedin: "https://linkedin.com/in/sarahchen",
    twitter: "https://twitter.com/sarahchen",
    joinedDate: "2022-01-15",
    featured: true,
    level: "President",
  },
  {
    id: "2",
    name: "Marcus Rodriguez",
    role: "Vice President",
    category: "Senior Council",
    avatar: "/avatars/marcus.jpg",
    bio: "Driving innovation through technology and digital transformation",
    expandedBio: "Marcus is a seasoned software architect with expertise in full-stack development and system design. He leads our technical initiatives and ensures our digital infrastructure supports our growing community.",
    responsibilities: ["Technical architecture", "Development oversight", "Infrastructure management"],
    projects: ["Platform Modernization", "API Development", "Mobile App Launch"],
    email: "marcus@example.org",
    linkedin: "https://linkedin.com/in/marcusrodriguez",
    joinedDate: "2022-03-20",
    featured: false,
    level: "Vice President"
  },
  {
    id: "3",
    name: "David Kim",
    role: "Secretary",
    category: "Senior Council",
    avatar: "/avatars/david.jpg",
    bio: "Streamlining processes and ensuring organizational efficiency",
    expandedBio: "David oversees day-to-day operations and implements systems that help our organization run smoothly. His attention to detail and process optimization skills keep everything on track.",
    responsibilities: ["Operations oversight", "Process improvement", "Budget management"],
    projects: ["Operations Handbook", "Workflow Automation", "Budget Planning 2024"],
    email: "david@example.org",
    linkedin: "https://linkedin.com/in/davidkim",
    joinedDate: "2022-02-28",
    featured: false,
    level: "Secretary"
  },
  {
    id: "4",
    name: "Elena Vasquez",
    role: "Treasurer",
    category: "Senior Council",
    avatar: "/avatars/elena.jpg",
    bio: "Managing finances and ensuring fiscal responsibility",
    expandedBio: "Elena is a financial strategist who ensures our resources are allocated effectively to maximize impact. She oversees budgets, fundraising, and financial reporting.",
    responsibilities: ["Financial planning", "Budget oversight", "Fundraising coordination"],
    projects: ["Annual Budget 2024", "Fundraising Campaign", "Financial Dashboard"],
    email: "elena@example.org",
    twitter: "https://twitter.com/elenavasquez",
    linkedin: "https://linkedin.com/in/elenavasquez",
    joinedDate: "2022-05-15",
    featured: false,
    level: "Treasurer"
  },
  // Junior Council
  {
    id: "5",
    name: "Amara Okafor",
    role: "Events Lead",
    category: "Junior Council",
    avatar: "/avatars/amara.jpg",
    bio: "Building bridges and fostering meaningful connections",
    expandedBio: "Amara specializes in community engagement and event coordination. Her background in social work and passion for bringing people together makes her instrumental in creating welcoming spaces for all members.",
    responsibilities: ["Event planning", "Member engagement", "Volunteer coordination"],
    projects: ["Monthly Meetups", "Mentorship Program", "Welcome Series"],
    email: "amara@example.org",
    twitter: "https://twitter.com/amaraokafor",
    joinedDate: "2022-06-10",
    featured: true,
    level: "Lead"
  },
  {
    id: "6",
    name: "James Thompson",
    role: "Partnership Coordinator",
    category: "Junior Council",
    avatar: "/avatars/james.jpg",
    bio: "Developing strategic alliances and collaborative initiatives",
    expandedBio: "James focuses on building relationships with partner organizations and stakeholders. His networking skills and strategic thinking help expand our reach and impact in the community.",
    responsibilities: ["Partnership development", "Stakeholder relations", "Collaboration initiatives"],
    projects: ["Partner Network Expansion", "Joint Initiatives Program", "Sponsor Relations"],
    email: "james@example.org",
    linkedin: "https://linkedin.com/in/jamesthompson",
    joinedDate: "2022-04-05",
    featured: false,
    level: "Coordinator"
  },
  {
    id: "7",
    name: "Maya Patel",
    role: "Content Coordinator",
    category: "Junior Council",
    avatar: "/avatars/maya.jpg",
    bio: "Creating engaging content and managing digital presence",
    expandedBio: "Maya manages our social media presence and creates compelling content that showcases our community's achievements and upcoming events.",
    responsibilities: ["Content creation", "Social media management", "Digital marketing"],
    projects: ["Social Media Strategy", "Content Calendar", "Newsletter Design"],
    email: "maya@example.org",
    twitter: "https://twitter.com/mayapatel",
    joinedDate: "2023-01-12",
    featured: false,
    level: "Coordinator"
  },
  {
    id: "8",
    name: "Alex Chen",
    role: "Technical Coordinator",
    category: "Junior Council",
    avatar: "/avatars/alex.jpg",
    bio: "Supporting technical projects and infrastructure",
    expandedBio: "Alex assists with technical implementations and helps coordinate development projects within our community.",
    responsibilities: ["Technical support", "Project coordination", "Developer relations"],
    projects: ["Website Maintenance", "API Documentation", "Developer Tools"],
    email: "alex@example.org",
    linkedin: "https://linkedin.com/in/alexchen",
    joinedDate: "2023-02-20",
    featured: false,
    level: "Coordinator"
  }
]

export default function CoreMembersSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [selectedMember, setSelectedMember] = useState<CoreMember | null>(null)
  const [messageForm, setMessageForm] = useState({ subject: "", message: "" })
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
      setReducedMotion(mediaQuery.matches)
      
      const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
      mediaQuery.addEventListener("change", handleChange)
      return () => mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  const categories = ["All", "Senior Council", "Junior Council"]

  const filteredMembers = mockMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || member.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const seniorCouncil = filteredMembers.filter(member => member.category === "Senior Council")
  const juniorCouncil = filteredMembers.filter(member => member.category === "Junior Council")

  const handleSendMessage = () => {
    if (!messageForm.subject.trim() || !messageForm.message.trim()) {
      toast.error("Please fill in all fields")
      return
    }
    
    toast.success(`Message sent to ${selectedMember?.name}`)
    setMessageForm({ subject: "", message: "" })
    setSelectedMember(null)
  }

  const motionProps = reducedMotion 
    ? {} 
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.3, ease: "easeOut" }
      }

  return (
    <section className="w-full bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-heading font-bold mb-4"
            >
              Core Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Meet the dedicated individuals who drive our mission forward and shape our community's future.
            </motion.p>
          </div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search members by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-card border-border"
              />
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-primary text-primary-foreground" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Senior Council Section */}
          {(selectedCategory === "All" || selectedCategory === "Senior Council") && seniorCouncil.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: reducedMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-8">
                <Award className="h-6 w-6 text-accent" />
                <h3 className="text-2xl font-heading font-semibold">Senior Council</h3>
                <div className="h-px bg-border flex-1 ml-4" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {seniorCouncil.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: reducedMotion ? 0 : 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <MemberCard
                      member={member}
                      onSelect={setSelectedMember}
                      hoveredCard={hoveredCard}
                      setHoveredCard={setHoveredCard}
                      reducedMotion={reducedMotion}
                      featured={member.featured}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Junior Council Section */}
          {(selectedCategory === "All" || selectedCategory === "Junior Council") && juniorCouncil.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: reducedMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-8">
                <Users className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-heading font-semibold">Junior Council</h3>
                <div className="h-px bg-border flex-1 ml-4" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {juniorCouncil.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: reducedMotion ? 0 : 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <MemberCard
                      member={member}
                      onSelect={setSelectedMember}
                      hoveredCard={hoveredCard}
                      setHoveredCard={setHoveredCard}
                      reducedMotion={reducedMotion}
                      featured={member.featured}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Member Detail Dialog */}
          <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
            <DialogContent className="max-w-2xl bg-card border-border">
              {selectedMember && (
                <>
                  <DialogHeader>
                    <div className="flex items-start gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={selectedMember.avatar} alt={selectedMember.name} />
                        <AvatarFallback className="bg-secondary text-secondary-foreground text-lg font-semibold">
                          {selectedMember.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <DialogTitle className="text-2xl font-heading">{selectedMember.name}</DialogTitle>
                        <p className="text-primary font-medium">{selectedMember.role}</p>
                        <Badge variant="secondary" className="mt-2">{selectedMember.category}</Badge>
                      </div>
                    </div>
                  </DialogHeader>

                  <div className="rounded-2xl space-y-6 mt-6 p-4 bg-muted">
                    {/* Bio */}
                    <div>
                      <h4 className="font-semibold mb-2">About</h4>
                      <p className="text-muted-foreground">{selectedMember.expandedBio}</p>
                    </div>

                    {/* Responsibilities */}
                    <div>
                      <h4 className="font-semibold mb-2">Key Responsibilities</h4>
                      <ul className="list-none space-y-2 bg-muted/40 rounded-lg p-4">
                        {selectedMember.responsibilities.map((resp, index) => (
                          <li key={index} className="flex items-center gap-2 text-muted-foreground">
                            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary/10 text-primary">
                              <Star className="h-4 w-4" />
                            </span>
                            <span className="text-base">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Projects */}
                    <div>
                      <h4 className="font-semibold mb-2">Current Projects</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedMember.projects.map((project, index) => (
                          <Badge key={index} variant="outline">{project}</Badge>
                        ))}
                      </div>
                    </div>

                    {/* Social Links */}
                    <div>
                      <h4 className="font-semibold mb-2">Connect</h4>
                      <div className="flex gap-3">
                        <Button variant="outline" size="sm" asChild>
                          <a href={`mailto:${selectedMember.email}`}>
                            <Mail className="h-4 w-4 mr-2" />
                            Email
                          </a>
                        </Button>
                        {selectedMember.linkedin && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer">
                              <Linkedin className="h-4 w-4 mr-2" />
                              LinkedIn
                            </a>
                          </Button>
                        )}
                        {selectedMember.twitter && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={selectedMember.twitter} target="_blank" rel="noopener noreferrer">
                              <Twitter className="h-4 w-4 mr-2" />
                              Twitter
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  )
}

function MemberCard({ 
  member, 
  onSelect, 
  hoveredCard, 
  setHoveredCard, 
  reducedMotion,
  featured 
}: {
  member: CoreMember
  onSelect: (member: CoreMember) => void
  hoveredCard: string | null
  setHoveredCard: (id: string | null) => void
  reducedMotion: boolean
  featured: boolean
}) {
  const isHovered = hoveredCard === member.id

  return (
    <motion.div
      className={`group relative bg-card border-2 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
        featured 
          ? 'border-accent/50 ring-2 ring-accent/20' 
          : 'border-border hover:border-primary/50'
      }`}
      onMouseEnter={() => !reducedMotion && setHoveredCard(member.id)}
      onMouseLeave={() => !reducedMotion && setHoveredCard(null)}
      onClick={() => onSelect(member)}
      whileHover={reducedMotion ? {} : { y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {featured && (
        <div className="absolute top-3 right-3 z-10">
          <Star className="h-4 w-4 text-accent fill-accent" />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={member.avatar} alt={member.name} />
            <AvatarFallback className="bg-secondary text-secondary-foreground font-semibold">
              {member.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <h3 className="font-heading font-semibold text-foreground truncate">{member.name}</h3>
            <p className="text-sm text-primary font-medium">{member.role}</p>
            <Badge variant="outline" className="mt-1 text-xs">{member.category}</Badge>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!reducedMotion && isHovered ? (
            <motion.div
              key="bio"
              initial={{ opacity: 0, rotateY: -90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: 90 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              <p className="text-sm text-muted-foreground line-clamp-3">{member.expandedBio}</p>
              <div className="flex items-center text-primary text-sm font-medium">
                <span>View details</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="default"
              initial={reducedMotion ? {} : { opacity: 0, rotateY: 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={reducedMotion ? {} : { opacity: 0, rotateY: -90 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              <p className="text-sm text-muted-foreground">{member.bio}</p>
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="sm" className="p-1 h-8 w-8" asChild>
                  <a href={`mailto:${member.email}`}>
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
                {member.linkedin && (
                  <Button variant="ghost" size="sm" className="p-1 h-8 w-8" asChild>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                )}
                {member.twitter && (
                  <Button variant="ghost" size="sm" className="p-1 h-8 w-8" asChild>
                    <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}