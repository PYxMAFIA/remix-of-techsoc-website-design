"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, Clock, MapPin, Users, Heart, Share, ChevronRight, Star, Play, Download, HeartOff, Search, Filter, List, BarChart3, Plus } from 'lucide-react'
import { toast } from "sonner"
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface Event {
  id: string
  title: string
  description: string
  brief: string
  date: string
  time: string
  endDate?: string
  location: string
  type: "workshop" | "hackathon" | "talk"
  capacity: number
  registered: number
  thumbnail: string
  isVirtual: boolean
  speakers?: string[]
  sponsors?: string[]
  agenda?: string[]
  recordingUrl?: string
  mediaLinks?: string[]
  rating?: number
  isRsvped?: boolean
}

const mockEvents: Record<string, Event[]> = {
  upcoming: [
    {
      id: "1",
      title: "AI Workshop: Building LLM Applications",
      description: "Learn to build production-ready LLM applications with hands-on coding sessions and real-world examples.",
      brief: "Hands-on workshop on building LLM applications",
      date: "2024-12-20",
      time: "14:00",
      location: "Tech Hub - Room A",
      type: "workshop",
      capacity: 50,
      registered: 32,
      thumbnail: "/api/placeholder/400/200",
      isVirtual: false,
      speakers: ["Dr. Sarah Chen", "Alex Rodriguez"],
      sponsors: ["TechCorp", "AI Innovations"],
      agenda: ["Introduction to LLMs", "Hands-on Coding", "Deployment Strategies"]
    },
    {
      id: "2",
      title: "48-Hour Blockchain Hackathon",
      description: "Build innovative blockchain solutions in teams. Prizes for top projects.",
      brief: "Weekend hackathon focused on blockchain innovation",
      date: "2024-12-22",
      time: "09:00",
      endDate: "2024-12-24",
      location: "Virtual Event",
      type: "hackathon",
      capacity: 200,
      registered: 156,
      thumbnail: "/api/placeholder/400/200",
      isVirtual: true,
      sponsors: ["BlockChain Inc", "CryptoVentures"]
    }
  ],
  ongoing: [
    {
      id: "3",
      title: "Web3 Summit 2024",
      description: "Three-day summit covering the latest in Web3 technologies.",
      brief: "Comprehensive Web3 technology summit",
      date: "2024-12-15",
      time: "09:00",
      endDate: "2024-12-17",
      location: "Convention Center",
      type: "talk",
      capacity: 500,
      registered: 487,
      thumbnail: "/api/placeholder/400/200",
      isVirtual: false,
      speakers: ["Vitalik Buterin", "Gavin Wood", "Silvio Micali"]
    }
  ],
  past: [
    {
      id: "4",
      title: "React Performance Optimization",
      description: "Deep dive into React performance optimization techniques.",
      brief: "Advanced React performance workshop",
      date: "2024-11-28",
      time: "15:00",
      location: "Tech Hub - Room B",
      type: "workshop",
      capacity: 30,
      registered: 28,
      thumbnail: "/api/placeholder/400/200",
      isVirtual: false,
      recordingUrl: "https://example.com/recording",
      mediaLinks: ["https://slides.com/react-perf", "https://github.com/react-perf"],
      rating: 4.8,
      speakers: ["Dan Abramov", "Sophie Alpert"]
    },
    {
      id: "5",
      title: "Startup Pitch Competition",
      description: "Annual startup pitch competition with investor panel.",
      brief: "Startup founders pitch to investors",
      date: "2024-11-20",
      time: "18:00",
      location: "Innovation Hall",
      type: "talk",
      capacity: 100,
      registered: 95,
      thumbnail: "/api/placeholder/400/200",
      isVirtual: false,
      recordingUrl: "https://example.com/recording",
      rating: 4.5
    }
  ]
}

const eventTypes = [
  { value: "all", label: "All Types" },
  { value: "workshop", label: "Workshop" },
  { value: "hackathon", label: "Hackathon" },
  { value: "talk", label: "Talk" }
]

export default function EventsSection() {
  const [activeTab, setActiveTab] = useState("upcoming")
  const [viewMode, setViewMode] = useState<"list" | "timeline">("list")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState("all")
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [rsvpStates, setRsvpStates] = useState<Record<string, boolean>>({})
  const [rating, setRating] = useState(0)
  const [feedback, setFeedback] = useState("")

  const filteredEvents = mockEvents[activeTab]?.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = selectedType === "all" || event.type === selectedType
    return matchesSearch && matchesType
  }) || []

  const handleRSVP = (eventId: string) => {
    const newState = !rsvpStates[eventId]
    setRsvpStates(prev => ({ ...prev, [eventId]: newState }))
    toast.success(newState ? "RSVP confirmed!" : "RSVP cancelled")
  }

  const handleShare = (event: Event) => {
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator.share({
        title: event.title,
        text: event.brief,
        url: window.location.href
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      toast.success("Event link copied to clipboard!")
    }
  }

  const handleFeedbackSubmit = () => {
    if (rating === 0) {
      toast.error("Please provide a rating")
      return
    }
    toast.success("Thank you for your feedback!")
    setRating(0)
    setFeedback("")
  }

  const EventCard = ({ event }: { event: Event }) => (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ y: -4 }}
      className="bg-card rounded-lg border border-border overflow-hidden group cursor-pointer transition-all duration-200 hover:shadow-lg hover:shadow-primary/5"
      onClick={() => setSelectedEvent(event)}
    >
      <div className="aspect-video bg-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
        <div className="absolute top-4 left-4">
          <Badge variant={event.type === "workshop" ? "default" : event.type === "hackathon" ? "secondary" : "outline"}>
            {event.type}
          </Badge>
        </div>
        {activeTab === "past" && event.recordingUrl && (
          <div className="absolute top-4 right-4">
            <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
              <Play className="h-3 w-3 mr-1" />
              Recording
            </Badge>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {event.title}
          </h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => {
              e.stopPropagation()
              handleShare(event)
            }}
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Share className="h-4 w-4" />
          </Button>
        </div>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {event.brief}
        </p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2" />
            {event.date} at {event.time}
            {event.endDate && ` - ${event.endDate}`}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2" />
            {event.location}
            {event.isVirtual && (
              <Badge variant="outline" className="ml-2 text-xs">Virtual</Badge>
            )}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="h-4 w-4 mr-2" />
            {event.registered}/{event.capacity} registered
          </div>
        </div>
        
        {activeTab === "past" ? (
          <div className="flex items-center justify-between">
            {event.rating && (
              <div className="flex items-center text-sm text-muted-foreground">
                <Star className="h-4 w-4 mr-1 fill-accent text-accent" />
                {event.rating}
              </div>
            )}
            <div className="flex gap-2">
              {event.recordingUrl && (
                <Button variant="outline" size="sm">
                  <Play className="h-4 w-4 mr-1" />
                  Watch
                </Button>
              )}
              {event.mediaLinks && (
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-1" />
                  Resources
                </Button>
              )}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <Button
                variant={rsvpStates[event.id] ? "default" : "outline"}
                size="sm"
                onClick={(e) => {
                  e.stopPropagation()
                  handleRSVP(event.id)
                }}
              >
                {rsvpStates[event.id] ? (
                  <>
                    <Heart className="h-4 w-4 mr-1 fill-current" />
                    RSVP'd
                  </>
                ) : (
                  <>
                    <HeartOff className="h-4 w-4 mr-1" />
                    RSVP
                  </>
                )}
              </Button>
            </div>
            <div className="w-full max-w-24 bg-muted rounded-full h-2 ml-4">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${(event.registered / event.capacity) * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )

  const TimelineView = () => (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border" />
      <div className="space-y-8">
        {filteredEvents.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative flex items-center ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
              <EventCard event={event} />
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background" />
          </motion.div>
        ))}
      </div>
    </div>
  )

  return (
    <section className="bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl font-bold mb-4">Events</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join our community events, workshops, and hackathons to learn, network, and build together.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <TabsList className="bg-muted p-1 rounded-lg">
              <TabsTrigger value="upcoming" className="data-[state=active]:bg-background data-[state=active]:text-foreground">
                Upcoming
              </TabsTrigger>
              <TabsTrigger value="ongoing" className="data-[state=active]:bg-background data-[state=active]:text-foreground">
                Ongoing
              </TabsTrigger>
              <TabsTrigger value="past" className="data-[state=active]:bg-background data-[state=active]:text-foreground">
                Past
              </TabsTrigger>
            </TabsList>

            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "timeline" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("timeline")}
              >
                <BarChart3 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <TabsContent value="upcoming" className="mt-0">
              <motion.div
                key="upcoming"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                {viewMode === "list" ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <AnimatePresence>
                      {filteredEvents.map((event) => (
                        <EventCard key={event.id} event={event} />
                      ))}
                    </AnimatePresence>
                  </div>
                ) : (
                  <TimelineView />
                )}
              </motion.div>
            </TabsContent>

            <TabsContent value="ongoing" className="mt-0">
              <motion.div
                key="ongoing"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                {viewMode === "list" ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <AnimatePresence>
                      {filteredEvents.map((event) => (
                        <EventCard key={event.id} event={event} />
                      ))}
                    </AnimatePresence>
                  </div>
                ) : (
                  <TimelineView />
                )}
              </motion.div>
            </TabsContent>

            <TabsContent value="past" className="mt-0">
              <motion.div
                key="past"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                {viewMode === "list" ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <AnimatePresence>
                      {filteredEvents.map((event) => (
                        <EventCard key={event.id} event={event} />
                      ))}
                    </AnimatePresence>
                  </div>
                ) : (
                  <TimelineView />
                )}
              </motion.div>
            </TabsContent>
          </AnimatePresence>
        </Tabs>

        {/* Event Detail Modal */}
        <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
          <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
            {selectedEvent && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-heading">
                    {selectedEvent.title}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  <div className="aspect-video bg-muted rounded-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                    <div className="absolute top-4 left-4">
                      <Badge variant={selectedEvent.type === "workshop" ? "default" : selectedEvent.type === "hackathon" ? "secondary" : "outline"}>
                        {selectedEvent.type}
                      </Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">Description</h3>
                        <p className="text-muted-foreground">{selectedEvent.description}</p>
                      </div>

                      {selectedEvent.agenda && (
                        <div>
                          <h3 className="font-semibold mb-2">Agenda</h3>
                          <ul className="space-y-1">
                            {selectedEvent.agenda.map((item, index) => (
                              <li key={index} className="flex items-center text-sm text-muted-foreground">
                                <Clock className="h-3 w-3 mr-2" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {selectedEvent.speakers && (
                        <div>
                          <h3 className="font-semibold mb-2">Speakers</h3>
                          <div className="flex flex-wrap gap-2">
                            {selectedEvent.speakers.map((speaker, index) => (
                              <Badge key={index} variant="outline">{speaker}</Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {activeTab === "past" && (
                        <div className="border-t pt-4">
                          <h3 className="font-semibold mb-4">Rate this event</h3>
                          <div className="space-y-4">
                            <div className="flex gap-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                  key={star}
                                  onClick={() => setRating(star)}
                                  className="p-1"
                                >
                                  <Star 
                                    className={`h-5 w-5 ${
                                      star <= rating 
                                        ? "fill-accent text-accent" 
                                        : "text-muted-foreground"
                                    }`} 
                                  />
                                </button>
                              ))}
                            </div>
                            <Textarea
                              placeholder="Share your feedback..."
                              value={feedback}
                              onChange={(e) => setFeedback(e.target.value)}
                            />
                            <Button onClick={handleFeedbackSubmit}>Submit Feedback</Button>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="space-y-4">
                      <div className="bg-muted p-4 rounded-lg space-y-3">
                        <div className="flex items-center text-sm">
                          <Calendar className="h-4 w-4 mr-2" />
                          {selectedEvent.date} at {selectedEvent.time}
                        </div>
                        <div className="flex items-center text-sm">
                          <MapPin className="h-4 w-4 mr-2" />
                          {selectedEvent.location}
                        </div>
                        <div className="flex items-center text-sm">
                          <Users className="h-4 w-4 mr-2" />
                          {selectedEvent.registered}/{selectedEvent.capacity}
                        </div>
                      </div>

                      {activeTab === "past" ? (
                        <div className="space-y-2">
                          {selectedEvent.recordingUrl && (
                            <Button className="w-full" asChild>
                              <a href={selectedEvent.recordingUrl} target="_blank" rel="noopener noreferrer">
                                <Play className="h-4 w-4 mr-2" />
                                Watch Recording
                              </a>
                            </Button>
                          )}
                          {selectedEvent.mediaLinks && (
                            <Button variant="outline" className="w-full">
                              <Download className="h-4 w-4 mr-2" />
                              Download Resources
                            </Button>
                          )}
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <Button 
                            className="w-full" 
                            variant={rsvpStates[selectedEvent.id] ? "default" : "outline"}
                            onClick={() => handleRSVP(selectedEvent.id)}
                          >
                            {rsvpStates[selectedEvent.id] ? "RSVP'd" : "RSVP"}
                          </Button>
                          <Button variant="outline" className="w-full">
                            <Calendar className="h-4 w-4 mr-2" />
                            Add to Calendar
                          </Button>
                        </div>
                      )}

                      {selectedEvent.sponsors && (
                        <div>
                          <h4 className="font-semibold mb-2 text-sm">Sponsors</h4>
                          <div className="space-y-1">
                            {selectedEvent.sponsors.map((sponsor, index) => (
                              <div key={index} className="text-sm text-muted-foreground">
                                {sponsor}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}