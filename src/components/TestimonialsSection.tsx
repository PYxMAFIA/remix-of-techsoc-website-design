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
    id: "2",
    name: "Archit",
    role: "Co-head",
    quote: "This society is really very good. Seniors guided me so well during placements and even helped me in bagging my internship. The coding sessions here boosted my confidence a lot.",
    photo: "./Members/archit.jpg",
  },
  {
    id: "3",
    name: "Priya Sharma",
    role: "Data Analyst at Flipkart",
    quote: "Joining this society was one of my best decisions. I got real exposure to projects and the seniors were always ready to help. Their mentorship played a huge role in my career growth.",
    photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "4",
    name: "Rohan Gupta",
    role: "SDE at Amazon",
    quote: "The culture here is amazing. I learned teamwork, leadership and got guidance from seniors for internships. Society events and hackathons gave me the perfect industry exposure.",
    photo: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "5",
    name: "Ananya Singh",
    role: "Research Intern at IIT Bombay",
    quote: "This society really shaped my journey. From coding contests to mentorship, everything was so valuable. Seniors personally helped me prepare for interviews and research internships.",
    photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "6",
    name: "Vikram Nair",
    role: "Backend Developer at Zomato",
    quote: "I still remember how the seniors guided me step by step during internship season. The projects I worked on in this society were directly useful in my interviews. Very good platform!",
    photo: "https://images.unsplash.com/photo-1502767089025-6572583495b0?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "7",
    name: "Neha Verma",
    role: "Frontend Developer at Swiggy",
    quote: "This society is not just about coding but also about bonding. Seniors always encouraged us, reviewed our resumes, and helped us crack internships. Best decision to join here.",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "8",
    name: "Arjun Patel",
    role: "AI/ML Engineer at TCS",
    quote: "The projects, the culture, the guidance – everything was just perfect. Seniors helped me with interview prep and also connected me with industry people. Truly a life-changing society.",
    photo: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "9",
    name: "Kavya Iyer",
    role: "Product Designer at Paytm",
    quote: "This society gave me confidence to pursue my career. Seniors were very supportive and even helped me get design internship opportunities. A very good place to grow and learn.",
    photo: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=150&h=150&fit=crop&crop=face",
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