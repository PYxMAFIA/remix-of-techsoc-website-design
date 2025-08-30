"use client";

import { motion } from "framer-motion"
import { Card, CardContent } from '@/components/ui/card'

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  photo: string;
}

const mockTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Former President",
    quote: "Being part of this tech society was transformative. The projects we built, the hackathons we won, and the lifelong connections I made here shaped my entire career trajectory.",
    photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "2",
    name: "Marcus Rodriguez",
    role: "Alumni",
    quote: "The collaborative environment here taught me more about software engineering than any textbook could. From React to AI/ML, we explored cutting-edge technologies together.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",

  },
  {
    id: "3",
    name: "Emily Watson",
    role: "Former VP Engineering",
    quote: "Leading technical workshops and mentoring new members gave me invaluable leadership experience. This society is where I discovered my passion for developer advocacy.",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",

  },
  {
    id: "4",
    name: "David Park",
    role: "Alumni",
    quote: "The 24-hour hackathons were legendary! Nothing beats the rush of building something amazing with your friends. Those late nights debugging taught me perseverance.",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",

  },
  {
    id: "5",
    name: "Aisha Patel",
    role: "Former Secretary",
    quote: "From organizing tech talks to coordinating industry partnerships, this society gave me incredible project management skills that I use every day in my startup.",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",

  },
  {
    id: "6",
    name: "James Liu",
    role: "Alumni",
    quote: "The open-source projects we contributed to gave me real-world experience that made my resume stand out. Recruiters were impressed by our GitHub contributions.",
    photo: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",

  },
  {
    id: "7",
    name: "Sophie Anderson",
    role: "Former Treasurer",
    quote: "The mentorship I received here was incredible. Senior members genuinely cared about our growth and helped us navigate both technical challenges and career decisions.",
    photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "8",
    name: "Ryan Thompson",
    role: "Alumni",
    quote: "This society isn't just about coding - it's about building the future together. The entrepreneurial spirit here inspired me to start my own tech company.",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",

  }
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % mockTestimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + mockTestimonials.length) % mockTestimonials.length);
  }, []);

  const goToTestimonial = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || prefersReducedMotion) return;

    const interval = setInterval(nextTestimonial, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextTestimonial, prefersReducedMotion]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const currentTestimonial = mockTestimonials[currentIndex];

  return (
    <section className="py-24 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            What Our Member Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Hear from our graduates who have gone on to shape the tech industry
          </motion.p>
        </div>

        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Main testimonial card */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: prefersReducedMotion ? 0 : -50 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
                className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-2xl"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Quote icon */}
                  <div className="hidden md:block">
                    <Quote className="w-12 h-12 text-primary/20" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                      "{currentTestimonial.quote}"
                    </blockquote>
                    
                    <div className="flex flex-col md:flex-row items-center gap-4">
                      {/* Profile image */}
                      <img
                        src={currentTestimonial.photo}
                        alt={currentTestimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                      />
                      
                      {/* Author info */}
                      <div>
                        <div className="font-semibold text-lg">
                          {currentTestimonial.name}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <div className="absolute inset-y-0 -left-4 md:-left-12 flex items-center">
            <motion.button
              whileHover={{ scale: prefersReducedMotion ? 1 : 1.1 }}
              whileTap={{ scale: prefersReducedMotion ? 1 : 0.95 }}
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-card border border-border shadow-lg hover:bg-accent/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
          </div>

          <div className="absolute inset-y-0 -right-4 md:-right-12 flex items-center">
            <motion.button
              whileHover={{ scale: prefersReducedMotion ? 1 : 1.1 }}
              whileTap={{ scale: prefersReducedMotion ? 1 : 0.95 }}
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-card border border-border shadow-lg hover:bg-accent/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {mockTestimonials.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: prefersReducedMotion ? 1 : 1.2 }}
              whileTap={{ scale: prefersReducedMotion ? 1 : 0.9 }}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary scale-125"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        {!prefersReducedMotion && (
          <div className="text-center mt-6">
            <div className="text-sm text-muted-foreground">
              {isAutoPlaying ? "Auto-rotating • Hover to pause" : "Paused • Move away to resume"}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};