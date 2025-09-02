"use client";

import { useState, useMemo } from 'react'
import { motion, useReducedMotion } from "framer-motion"
import { Badge } from '@/components/ui/badge'
import { Search, Filter, SortAsc, Star, Users, FolderOpen, Eye, UserPlus, X, Mail, User, MessageSquare } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

interface Guild {
  id: string;
  name: string;
  tagline: string;
  description: string;
  logo: string;
  category: string;
  memberCount: number;
  activeProjects: number;
  mentors: Array<{
    name: string;
    role: string;
    avatar: string;
  }>;
  upcomingEvents: Array<{
    title: string;
    date: string;
    description: string;
  }>;
  gallery: string[];
  isFollowed: boolean;
}

const mockGuilds: Guild[] = [
  {
    id: "1",
    name: "DSA",
    tagline: "Building the future through innovative software development",
    description: "A community of passionate developers working on cutting-edge projects, from web applications to mobile apps and everything in between. We focus on modern technologies and best practices.",
    logo: "💻",
    category: "Development",
    memberCount: 127,
    activeProjects: 8,
    mentors: [
      { name: "Alex Chen", role: "Guild Leader", avatar: "/avatars/alex.jpg" },
      { name: "Sarah Kim", role: "Tech Lead", avatar: "/avatars/sarah.jpg" }
    ],
    upcomingEvents: [
      { title: "React Workshop", date: "2024-01-15", description: "Learn advanced React patterns" },
      { title: "Code Review Session", date: "2024-01-20", description: "Weekly code review and feedback" }
    ],
    gallery: ["/gallery/1.jpg", "/gallery/2.jpg", "/gallery/3.jpg"],
    isFollowed: false
  },
  {
    id: "2",
    name: "Design Studio",
    tagline: "Creating beautiful and functional user experiences",
    description: "Our design guild focuses on UI/UX design, branding, and visual storytelling. We work on everything from mobile interfaces to brand identities.",
    logo: "🎨",
    category: "Design",
    memberCount: 89,
    activeProjects: 12,
    mentors: [
      { name: "Maria Rodriguez", role: "Creative Director", avatar: "/avatars/maria.jpg" },
      { name: "James Wilson", role: "UX Lead", avatar: "/avatars/james.jpg" }
    ],
    upcomingEvents: [
      { title: "Design System Workshop", date: "2024-01-18", description: "Building scalable design systems" }
    ],
    gallery: ["/gallery/4.jpg", "/gallery/5.jpg"],
    isFollowed: true
  },
  {
    id: "3",
    name: "Finance Guild",
    tagline: "Empowering financial literacy and innovation",
    description: "We provide resources and support for individuals looking to improve their financial knowledge and skills. Join us for workshops, discussions, and networking opportunities.",
    logo: "💰",
    category: "Finance",
    memberCount: 45,
    activeProjects: 6,
    mentors: [
      { name: "Dr. Michael Chang", role: "Lab Director", avatar: "/avatars/michael.jpg" }
    ],
    upcomingEvents: [
      { title: "Financial Literacy Workshop", date: "2024-01-22", description: "Preparing for the regional financial literacy competition" }
    ],
    gallery: ["/gallery/6.jpg", "/gallery/7.jpg", "/gallery/8.jpg"],
    isFollowed: false
  },
  
  {
    id: "4",
    name: "Web Development",
    tagline: "Pushing the boundaries of web technology",
    description: "We focus on modern web development, from progressive web apps to advanced web APIs. Our projects showcase the latest in web technology.",
    logo: "🌐",
    category: "Web",
    memberCount: 156,
    activeProjects: 11,
    mentors: [
      { name: "Emma Foster", role: "Frontend Lead", avatar: "/avatars/emma.jpg" },
      { name: "Ryan Clark", role: "Backend Lead", avatar: "/avatars/ryan.jpg" }
    ],
    upcomingEvents: [
      { title: "Web Performance Workshop", date: "2024-01-28", description: "Optimizing web applications for speed" }
    ],
    gallery: ["/gallery/11.jpg", "/gallery/12.jpg", "/gallery/13.jpg"],
    isFollowed: true
  },
];

const categories = ["All", "Development", "Design", "Finance", "AI", "Web"];
const sortOptions = [
  { value: "name", label: "Name" },
  { value: "members", label: "Most Members" },
  { value: "projects", label: "Most Active" }
];

export default function GuildsSection() {
  const [guilds, setGuilds] = useState<Guild[]>(mockGuilds);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("name");
  const [selectedGuild, setSelectedGuild] = useState<Guild | null>(null);
  const [joinForm, setJoinForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const shouldReduceMotion = useReducedMotion();

  const filteredAndSortedGuilds = useMemo(() => {
    let filtered = guilds.filter(guild => {
      const matchesSearch = guild.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          guild.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || guild.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "members":
          return b.memberCount - a.memberCount;
        case "projects":
          return b.activeProjects - a.activeProjects;
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });
  }, [guilds, searchQuery, selectedCategory, sortBy]);

  const toggleFollow = (guildId: string) => {
    setGuilds(prevGuilds =>
      prevGuilds.map(guild =>
        guild.id === guildId
          ? { ...guild, isFollowed: !guild.isFollowed }
          : guild
      )
    );
    
    const guild = guilds.find(g => g.id === guildId);
    if (guild) {
      toast.success(
        guild.isFollowed ? `Unfollowed ${guild.name}` : `Following ${guild.name}`,
        {
          duration: 2000,
        }
      );
    }
  };

  const handleJoinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedGuild) return;

    toast.success(`Join request sent to ${selectedGuild.name}!`, {
      description: "You'll receive a response within 24 hours.",
      duration: 3000,
    });

    setJoinForm({ name: "", email: "", message: "" });
    setSelectedGuild(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
  duration: shouldReduceMotion ? 0 : 0.5,
      },
    },
  };

  return (
    <div className="space-y-8">
      {/* Header and Controls */}
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-heading font-bold mb-2">Guilds Directory</h2>
          <p className="text-muted-foreground text-lg">
            Discover and join communities that match your interests and skills
          </p>
        </div>
      </div>

      {/* Results Count */}
      <div className="text-sm text-muted-foreground">
        Showing {filteredAndSortedGuilds.length} guild{filteredAndSortedGuilds.length !== 1 ? 's' : ''}
      </div>

      {/* Guilds Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-6 md:grid-cols-1 lg:grid-cols-2"
      >
        {filteredAndSortedGuilds.map((guild) => (
          <motion.div
            key={guild.id}
            variants={cardVariants}
            whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="bg-card border-border hover:shadow-lg transition-shadow duration-200 group">
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl" role="img" aria-label={`${guild.name} logo`}>
                      {guild.logo}
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg">{guild.name}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {guild.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleFollow(guild.id)}
                    className="h-8 w-8 p-0 hover:bg-accent/10"
                    aria-label={guild.isFollowed ? `Unfollow ${guild.name}` : `Follow ${guild.name}`}
                  >
                    <Star 
                      className={`h-4 w-4 transition-colors ${
                        guild.isFollowed ? 'fill-accent text-accent' : 'text-muted-foreground'
                      }`} 
                    />
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2">
                  {guild.tagline}
                </p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{guild.memberCount}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FolderOpen className="h-4 w-4" />
                    <span>{guild.activeProjects}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => setSelectedGuild(guild)}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      {selectedGuild && (
                        <>
                          <DialogHeader>
                            <DialogTitle className="flex items-center gap-3">
                              <span className="text-3xl">{selectedGuild.logo}</span>
                              <div>
                                <div className="text-xl">{selectedGuild.name}</div>
                                <Badge variant="secondary">{selectedGuild.category}</Badge>
                              </div>
                            </DialogTitle>
                          </DialogHeader>

                          <div className="space-y-6">
                            <p className="text-muted-foreground">{selectedGuild.description}</p>

                            <div className="flex gap-6">
                              <div className="flex items-center gap-2">
                                <Users className="h-4 w-4 text-muted-foreground" />
                                <span className="font-medium">{selectedGuild.memberCount}</span>
                                <span className="text-muted-foreground">members</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <FolderOpen className="h-4 w-4 text-muted-foreground" />
                                <span className="font-medium">{selectedGuild.activeProjects}</span>
                                <span className="text-muted-foreground">active projects</span>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-3">Mentors</h4>
                              <div className="space-y-3">
                                {selectedGuild.mentors.map((leader, index) => (
                                  <div key={index} className="flex items-center gap-3">
                                    <Avatar className="h-8 w-8">
                                      <AvatarImage src={leader.avatar} alt={leader.name} />
                                      <AvatarFallback>{leader.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                      <div className="font-medium text-sm">{leader.name}</div>
                                      <div className="text-xs text-muted-foreground">{leader.role}</div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-3">Upcoming Events</h4>
                              <div className="space-y-3">
                                {selectedGuild.upcomingEvents.map((event, index) => (
                                  <div key={index} className="border border-border rounded-lg p-3">
                                    <div className="font-medium text-sm">{event.title}</div>
                                    <div className="text-xs text-muted-foreground mb-1">
                                      {new Date(event.date).toLocaleDateString()}
                                    </div>
                                    <div className="text-xs text-muted-foreground">{event.description}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </DialogContent>
                  </Dialog>

                  <Dialog>
                    <Button
                      size="sm"
                      className="flex-1"
                      onClick={() => {
                        const footer = document.getElementById("footer");
                        if (footer) {
                          footer.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      <UserPlus className="h-4 w-4 mr-2" />
                      Join
                    </Button>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Request to Join {guild.name}</DialogTitle>
                      </DialogHeader>

                      <form onSubmit={handleJoinSubmit} className="space-y-4">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                              id="name"
                              value={joinForm.name}
                              onChange={(e) => setJoinForm(prev => ({ ...prev, name: e.target.value }))}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="email">Email</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                              id="email"
                              type="email"
                              value={joinForm.email}
                              onChange={(e) => setJoinForm(prev => ({ ...prev, email: e.target.value }))}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="message">Why do you want to join?</Label>
                          <div className="relative">
                            <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Textarea
                              id="message"
                              value={joinForm.message}
                              onChange={(e) => setJoinForm(prev => ({ ...prev, message: e.target.value }))}
                              className="pl-10 min-h-[100px]"
                              placeholder="Tell us about your experience and what you hope to contribute..."
                              required
                            />
                          </div>
                        </div>

                        <div className="flex gap-2 pt-4">
                          <Button type="submit" className="flex-1">
                            Send Request
                          </Button>
                          <DialogTrigger asChild>
                            <Button type="button" variant="outline">
                              Cancel
                            </Button>
                          </DialogTrigger>
                        </div>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {filteredAndSortedGuilds.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="font-heading font-semibold text-xl mb-2">No guilds found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search terms or filters to find what you're looking for.
          </p>
        </div>
      )}
    </div>
  );
}