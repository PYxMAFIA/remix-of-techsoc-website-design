"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Users, Calendar, Layers, Mail, ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { toast } from 'sonner'
import Image from 'next/image'

interface StatCardProps {
  icon: React.ReactNode
  value: string
  label: string
  index: number
}

interface EventPreview {
  id: string
  title: string
  image: string
  date: string
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, index }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
      className="perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className="relative w-full h-24 preserve-3d transition-transform duration-500" style={{
        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
      }}>
        {/* Front */}
        <Card className="absolute inset-0 backface-hidden bg-card border-border">
          <CardContent className="flex flex-col items-center justify-center h-full p-4">
            <div className="text-primary mb-1">{icon}</div>
            <div className="text-2xl font-bold font-heading text-foreground">{value}</div>
            <div className="text-xs text-muted-foreground text-center">{label}</div>
          </CardContent>
        </Card>
        
        {/* Back */}
        <Card className="absolute inset-0 backface-hidden bg-primary border-primary" style={{
          transform: 'rotateY(180deg)'
        }}>
          <CardContent className="flex items-center justify-center h-full p-4">
            <div className="text-primary-foreground text-sm font-medium text-center">
              {label === 'Active Guilds' && 'Web Dev, AI/ML, Cybersecurity'}
              {label === 'Live Events' && 'Workshops & Hackathons'}
              {label === 'Members' && 'Growing Community'}
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}

const EventCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const events: EventPreview[] = [
    { id: '1', title: 'React Workshop', image: '/api/placeholder/200/120', date: 'Dec 15' },
    { id: '2', title: 'AI Hackathon', image: '/api/placeholder/200/120', date: 'Dec 20' },
    { id: '3', title: 'Cybersec Talk', image: '/api/placeholder/200/120', date: 'Dec 22' }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="relative w-full max-w-sm"
    >
      <div className="relative overflow-hidden rounded-lg bg-card border border-border">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {events.map((event) => (
            <div key={event.id} className="w-full flex-shrink-0">
              <div className="aspect-video bg-muted flex items-center justify-center text-muted-foreground text-sm">
                {event.title}
              </div>
              <div className="p-3">
                <h4 className="font-medium text-foreground text-sm mb-1">{event.title}</h4>
                <p className="text-xs text-muted-foreground">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0 bg-background/80 hover:bg-background"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0 bg-background/80 hover:bg-background"
          onClick={nextSlide}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="flex justify-center mt-3 gap-2">
        {events.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary' : 'bg-muted'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default function HeroBanner() {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="w-full bg-background py-20 lg:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image src="/background.jpg" alt="Hero Image" fill className="object-cover opacity-35" />
      </div>
  <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ">
          {/* Main Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Headlines */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="overflow-hidden"
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight">
                  <motion.span
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="inline-block"
                  >
                    Round
                  </motion.span>{' '}
                  <motion.span
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="inline-block"
                  >
                    Table
                  </motion.span>{' '}
                  <motion.span
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="inline-block text-primary"
                  >
                    DTU
                  </motion.span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-xl md:text-2xl text-muted-foreground font-medium"
              >
                Build. Learn. Ship.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
              >
                Join our vibrant community of developers, designers, and innovators. 
                Collaborate on real projects, learn cutting-edge technologies, and build 
                your network with like-minded peers.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 font-medium px-8 py-6 text-lg border border-foreground"
                onClick={() => scrollToSection('events')}
              >
                Explore Events
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-foreground text-foreground hover:bg-foreground hover:text-background font-medium px-8 py-6 text-lg"
                onClick={() => scrollToSection('guilds')}
              >
                Join a Guild
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-4 pt-8"
            >
              <StatCard
                icon={<Layers className="h-5 w-5" />}
                value="4"
                label="Active Guilds"
                index={0}
              />
              <StatCard
                icon={<Calendar className="h-5 w-5" />}
                value="12"
                label="Live Events"
                index={1}
              />
              <StatCard
                icon={<Users className="h-5 w-5" />}
                value="150+"
                label="Members"
                index={2}
              />
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 space-y-8">
            {/* This column is now empty or could contain other content */}
          </div>
        </div>
      </div>
    </section>
  )
}