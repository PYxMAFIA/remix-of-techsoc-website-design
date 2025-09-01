"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { toast } from 'sonner'
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  Send,
  Star,
  Upload,
  X,
  ExternalLink,
  Users,
  MessageCircle,
  ChevronRight,
  Sparkles,
  Zap,
  Heart,
  Globe
} from 'lucide-react'

interface FormErrors {
  [key: string]: string
}

const GUILDS = [
  { value: 'developers', label: 'DSA Guild' },
  { value: 'designers', label: 'Web Development Guild' },
  { value: 'researchers', label: 'Finance Guild' },
  { value: 'community', label: 'Design Guild' },
]

const CONTACT_SUBJECTS = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'sponsorship', label: 'Sponsorship' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'media', label: 'Media & Press' },
  { value: 'feedback', label: 'Feedback' }
]

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const validateRequired = (value: string): boolean => {
  return value.trim().length > 0
}

export default function FooterJoinContact() {
  // Form states
  const [joinForm, setJoinForm] = useState({ name: '', email: '', guild: '' })
  const [joinErrors, setJoinErrors] = useState<FormErrors>({})
  const [joinSubmitting, setJoinSubmitting] = useState(false)

  const [showApplyModal, setShowApplyModal] = useState(false)
  const [applyForm, setApplyForm] = useState({
    name: '', email: '', guild: '', experience: '', motivation: '', portfolio: ''
  })
  const [applyErrors, setApplyErrors] = useState<FormErrors>({})
  const [applySubmitting, setApplySubmitting] = useState(false)


  const [contactForm, setContactForm] = useState({ subject: '', message: '' })
  const [contactErrors, setContactErrors] = useState<FormErrors>({})
  const [contactSubmitting, setContactSubmitting] = useState(false)

  // Animation states
  const [clickedButtons, setClickedButtons] = useState<string[]>([])
  const [sparklePositions, setSparklePositions] = useState<{ [key: string]: { x: number, y: number }[] }>({})


  const handleButtonClick = (buttonId: string, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const sparkles = Array.from({ length: 6 }, (_, i) => ({
      x: Math.random() * rect.width,
      y: Math.random() * rect.height
    }))

    setSparklePositions(prev => ({ ...prev, [buttonId]: sparkles }))
    setClickedButtons(prev => [...prev, buttonId])

    setTimeout(() => {
      setClickedButtons(prev => prev.filter(id => id !== buttonId))
      setSparklePositions(prev => {
        const newPos = { ...prev }
        delete newPos[buttonId]
        return newPos
      })
    }, 1000)
  }

  // Join Us Form Handlers
  const validateJoinForm = () => {
    const errors: FormErrors = {}

    if (!validateRequired(joinForm.name)) {
      errors.name = 'Name is required'
    }

    if (!validateRequired(joinForm.email)) {
      errors.email = 'Email is required'
    } else if (!validateEmail(joinForm.email)) {
      errors.email = 'Please enter a valid email address'
    }

    if (!joinForm.guild) {
      errors.guild = 'Please select a guild'
    }

    setJoinErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleJoinSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateJoinForm()) return

    setJoinSubmitting(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 1500))

      toast.success('Welcome to the guild!', {
        description: 'We\'ll be in touch soon with next steps.'
      })

      // Build WhatsApp message dynamically
      const { name, email, guild } = joinForm
      const message = `Hello, my name is ${name}.
I would like to join the ${guild} guild.
Please guide me through the next steps.`

      // Encode message for URL (preserves spaces & line breaks)
      const encodedMessage = encodeURIComponent(message)

      // WhatsApp link (⚠️ remove + sign, wa.me does not support it)
      const whatsappLink = `https://wa.me/918441867211/?text=${encodedMessage}`

      // Reset form
      setJoinForm({ name: '', email: '', guild: '' })
      setJoinErrors({})

      // Redirect to WhatsApp
      window.location.href = whatsappLink

    } catch (error) {
      toast.error('Something went wrong', {
        description: 'Please try again later.'
      })
    } finally {
      setJoinSubmitting(false)
    }
  }



  // Apply Modal Handlers
  const validateApplyForm = () => {
    const errors: FormErrors = {}

    if (!validateRequired(applyForm.name)) {
      errors.name = 'Name is required'
    }

    if (!validateRequired(applyForm.email)) {
      errors.email = 'Email is required'
    } else if (!validateEmail(applyForm.email)) {
      errors.email = 'Please enter a valid email address'
    }

    if (!applyForm.guild) {
      errors.guild = 'Please select a guild'
    }

    if (!validateRequired(applyForm.experience)) {
      errors.experience = 'Please describe your experience'
    }

    if (!validateRequired(applyForm.motivation)) {
      errors.motivation = 'Please tell us your motivation'
    }

    setApplyErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateApplyForm()) return

    setApplySubmitting(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))

      toast.success('Application submitted!', {
        description: 'We\'ll review your application and get back to you within 3-5 business days.'
      })

      setApplyForm({
        name: '', email: '', guild: '', experience: '', motivation: '', portfolio: ''
      })
      setApplyErrors({})
      setShowApplyModal(false)
    } catch (error) {
      toast.error('Failed to submit application', {
        description: 'Please try again later.'
      })
    } finally {
      setApplySubmitting(false)
    }
  }

  // Contact Form Handlers
  const validateContactForm = () => {
    const errors: FormErrors = {}

    if (!contactForm.subject) {
      errors.subject = 'Please select a subject'
    }

    if (!validateRequired(contactForm.message)) {
      errors.message = 'Please enter your message'
    }

    setContactErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateContactForm()) return

    setContactSubmitting(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 1500))

      toast.success('Message sent!', {
        description: 'We\'ll get back to you as soon as possible.'
      })

      // Build WhatsApp message dynamically
      const { subject, message } = contactForm

      const whatsappMessage = `New Inquiry Received\n\nCategory: ${subject}\n\nMessage:\n${message}\n`

      const encodedMessage = encodeURIComponent(whatsappMessage)

      const whatsappLink = `https://wa.me/918130939274?text=${encodedMessage}`


      // Reset form
      setContactForm({ subject: '', message: '' })
      setContactErrors({})

      // Redirect to WhatsApp
      window.location.href = whatsappLink

    } catch (error) {
      toast.error('Failed to send message', {
        description: 'Please try again later.'
      })
    } finally {
      setContactSubmitting(false)
    }
  }


  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 justify-center max-w-6xl mx-auto lg:items-start">
          {/* Join Us Column */}
          <div className="space-y-6 flex">
            <Card className="bg-card border-border flex-1 flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Users className="h-5 w-5 text-primary" />
                  Join Us
                </CardTitle>
                <CardDescription>
                  Become part of our community and contribute to the future
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 flex-1">
                <form onSubmit={handleJoinSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="join-name">Name</Label>
                    <Input
                      id="join-name"
                      type="text"
                      value={joinForm.name}
                      onChange={(e) => setJoinForm(prev => ({ ...prev, name: e.target.value }))}
                      className={`bg-input border-border focus:border-primary ${joinErrors.name ? 'border-destructive' : ''}`}
                      placeholder="Your full name"
                      aria-describedby={joinErrors.name ? 'join-name-error' : undefined}
                    />
                    {joinErrors.name && (
                      <p id="join-name-error" className="text-sm text-destructive" role="alert">
                        {joinErrors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="join-email">Email</Label>
                    <Input
                      id="join-email"
                      type="email"
                      value={joinForm.email}
                      onChange={(e) => setJoinForm(prev => ({ ...prev, email: e.target.value }))}
                      className={`bg-input border-border focus:border-primary ${joinErrors.email ? 'border-destructive' : ''}`}
                      placeholder="your@email.com"
                      aria-describedby={joinErrors.email ? 'join-email-error' : undefined}
                    />
                    {joinErrors.email && (
                      <p id="join-email-error" className="text-sm text-destructive" role="alert">
                        {joinErrors.email}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="join-guild">Guild Interest</Label>
                    <Select
                      value={joinForm.guild}
                      onValueChange={(value) => setJoinForm(prev => ({ ...prev, guild: value }))}
                    >
                      <SelectTrigger
                        id="join-guild"
                        className={`bg-input border-border focus:border-primary ${joinErrors.guild ? 'border-destructive' : ''}`}
                        aria-describedby={joinErrors.guild ? 'join-guild-error' : undefined}
                      >
                        <SelectValue placeholder="Choose a guild" />
                      </SelectTrigger>
                      <SelectContent>
                        {GUILDS.map((guild) => (
                          <SelectItem key={guild.value} value={guild.value}>
                            {guild.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {joinErrors.guild && (
                      <p id="join-guild-error" className="text-sm text-destructive" role="alert">
                        {joinErrors.guild}
                      </p>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <motion.div
                      className="flex-1 relative"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        disabled={joinSubmitting}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground relative overflow-hidden"
                        onClick={(e) => handleButtonClick('join-quick', e)}
                      >
                        <motion.span
                          animate={clickedButtons.includes('join-quick') ? { scale: [1, 1.2, 1] } : {}}
                          transition={{ duration: 0.3 }}
                        >
                          {joinSubmitting ? 'Joining...' : 'Quick Join'}
                        </motion.span>

                        {/* Sparkle effects */}
                        <AnimatePresence>
                          {sparklePositions['join-quick'] && (
                            <>
                              {sparklePositions['join-quick'].map((pos, i) => (
                                <motion.div
                                  key={i}
                                  className="absolute w-1 h-1 bg-white rounded-full pointer-events-none"
                                  style={{ left: pos.x, top: pos.y }}
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{
                                    opacity: [0, 1, 0],
                                    scale: [0, 1, 0],
                                    y: [0, -20],
                                    rotate: 360
                                  }}
                                  exit={{ opacity: 0 }}
                                  transition={{ duration: 0.8, delay: i * 0.1 }}
                                />
                              ))}
                            </>
                          )}
                        </AnimatePresence>
                      </Button>
                    </motion.div>

                    <Dialog open={showApplyModal} onOpenChange={setShowApplyModal}>
                      <DialogTrigger asChild>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="relative"
                        >
                          <Button
                            variant="outline"
                            className="border-border hover:bg-muted relative overflow-hidden"
                            onClick={(e) => handleButtonClick('join-apply', e)}
                          >
                            <motion.span
                              className="flex items-center gap-1"
                              animate={clickedButtons.includes('join-apply') ? { scale: [1, 1.1, 1] } : {}}
                              transition={{ duration: 0.3 }}
                            >
                              Apply
                              <ChevronRight className="h-4 w-4" />
                            </motion.span>

                            {/* Sparkle effects */}
                            <AnimatePresence>
                              {sparklePositions['join-apply'] && (
                                <>
                                  {sparklePositions['join-apply'].map((pos, i) => (
                                    <motion.div
                                      key={i}
                                      className="absolute pointer-events-none"
                                      style={{ left: pos.x, top: pos.y }}
                                      initial={{ opacity: 0, scale: 0 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      exit={{ opacity: 0 }}
                                      transition={{ delay: i * 0.1, duration: 0.6 }}
                                    >
                                      <Sparkles className="w-3 h-3 text-primary" />
                                    </motion.div>
                                  ))}
                                </>
                              )}
                            </AnimatePresence>
                          </Button>
                        </motion.div>
                      </DialogTrigger>
                      <DialogContent className="bg-popover border-border max-w-2xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>Apply to Join</DialogTitle>
                          <DialogDescription>
                            Tell us more about yourself and why you'd like to join our community
                          </DialogDescription>
                        </DialogHeader>

                        <form onSubmit={handleApplySubmit} className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="apply-name">Name *</Label>
                              <Input
                                id="apply-name"
                                type="text"
                                value={applyForm.name}
                                onChange={(e) => setApplyForm(prev => ({ ...prev, name: e.target.value }))}
                                className={`bg-input border-border focus:border-primary ${applyErrors.name ? 'border-destructive' : ''}`}
                                placeholder="Your full name"
                                aria-describedby={applyErrors.name ? 'apply-name-error' : undefined}
                              />
                              {applyErrors.name && (
                                <p id="apply-name-error" className="text-sm text-destructive" role="alert">
                                  {applyErrors.name}
                                </p>
                              )}
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="apply-email">Email *</Label>
                              <Input
                                id="apply-email"
                                type="email"
                                value={applyForm.email}
                                onChange={(e) => setApplyForm(prev => ({ ...prev, email: e.target.value }))}
                                className={`bg-input border-border focus:border-primary ${applyErrors.email ? 'border-destructive' : ''}`}
                                placeholder="your@email.com"
                                aria-describedby={applyErrors.email ? 'apply-email-error' : undefined}
                              />
                              {applyErrors.email && (
                                <p id="apply-email-error" className="text-sm text-destructive" role="alert">
                                  {applyErrors.email}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="apply-guild">Guild Interest *</Label>
                            <Select
                              value={applyForm.guild}
                              onValueChange={(value) => setApplyForm(prev => ({ ...prev, guild: value }))}
                            >
                              <SelectTrigger
                                id="apply-guild"
                                className={`bg-input border-border focus:border-primary ${applyErrors.guild ? 'border-destructive' : ''}`}
                                aria-describedby={applyErrors.guild ? 'apply-guild-error' : undefined}
                              >
                                <SelectValue placeholder="Choose a guild" />
                              </SelectTrigger>
                              <SelectContent>
                                {GUILDS.map((guild) => (
                                  <SelectItem key={guild.value} value={guild.value}>
                                    {guild.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            {applyErrors.guild && (
                              <p id="apply-guild-error" className="text-sm text-destructive" role="alert">
                                {applyErrors.guild}
                              </p>
                            )}
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="apply-experience">Experience & Skills *</Label>
                            <Textarea
                              id="apply-experience"
                              value={applyForm.experience}
                              onChange={(e) => setApplyForm(prev => ({ ...prev, experience: e.target.value }))}
                              className={`bg-input border-border focus:border-primary ${applyErrors.experience ? 'border-destructive' : ''}`}
                              placeholder="Tell us about your relevant experience and skills..."
                              rows={4}
                              aria-describedby={applyErrors.experience ? 'apply-experience-error' : undefined}
                            />
                            {applyErrors.experience && (
                              <p id="apply-experience-error" className="text-sm text-destructive" role="alert">
                                {applyErrors.experience}
                              </p>
                            )}
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="apply-motivation">Why do you want to join? *</Label>
                            <Textarea
                              id="apply-motivation"
                              value={applyForm.motivation}
                              onChange={(e) => setApplyForm(prev => ({ ...prev, motivation: e.target.value }))}
                              className={`bg-input border-border focus:border-primary ${applyErrors.motivation ? 'border-destructive' : ''}`}
                              placeholder="What motivates you to be part of our community?"
                              rows={4}
                              aria-describedby={applyErrors.motivation ? 'apply-motivation-error' : undefined}
                            />
                            {applyErrors.motivation && (
                              <p id="apply-motivation-error" className="text-sm text-destructive" role="alert">
                                {applyErrors.motivation}
                              </p>
                            )}
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="apply-portfolio">Portfolio/GitHub (Optional)</Label>
                            <Input
                              id="apply-portfolio"
                              type="url"
                              value={applyForm.portfolio}
                              onChange={(e) => setApplyForm(prev => ({ ...prev, portfolio: e.target.value }))}
                              className="bg-input border-border focus:border-primary"
                              placeholder="https://..."
                            />
                          </div>

                          <div className="flex justify-end gap-3">
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => setShowApplyModal(false)}
                              className="border-border hover:bg-muted"
                            >
                              Cancel
                            </Button>
                            <motion.div
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <Button
                                type="submit"
                                disabled={applySubmitting}
                                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                              >
                                {applySubmitting ? 'Submitting...' : 'Submit Application'}
                              </Button>
                            </motion.div>
                          </div>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Column */}
          <div className="space-y-6 flex">
            <Card className="bg-card border-border flex-1 flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Mail className="h-5 w-5 text-primary" />
                  Contact
                </CardTitle>
                <CardDescription>
                  Get in touch with our team
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 flex-1 flex flex-col">
                {/* Contact Info */}
                <div className="space-y-4">
                  <motion.div
                    className="flex items-start gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MapPin className="h-4 w-4 text-muted-foreground mt-1 shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Address</p>
                      <p className="text-sm text-muted-foreground">
                        123 Innovation Drive<br />
                        San Francisco, CA 94107
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Mail className="h-4 w-4 text-muted-foreground shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <a href="mailto:hello@example.com" className="text-sm text-primary hover:underline">
                        hello@example.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Phone className="h-4 w-4 text-muted-foreground shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <a href="tel:+91-8441867211" className="text-sm text-primary hover:underline">
                        +91 8441867211
                      </a>
                    </div>
                  </motion.div>

                  {/* Social Links */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <motion.a
                        href="https://github.com"
                        className="p-2 rounded-md bg-muted hover:bg-muted/80 transition-colors"
                        aria-label="GitHub"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="h-4 w-4" />
                      </motion.a>
                      <motion.a
                        href="https://twitter.com"
                        className="p-2 rounded-md bg-muted hover:bg-muted/80 transition-colors"
                        aria-label="Twitter"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Twitter className="h-4 w-4" />
                      </motion.a>
                      <motion.a
                        href="https://linkedin.com"
                        className="p-2 rounded-md bg-muted hover:bg-muted/80 transition-colors"
                        aria-label="LinkedIn"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Linkedin className="h-4 w-4" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                <Separator className="bg-border" />

                {/* Contact Form */}
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-subject">Subject</Label>
                    <Select
                      value={contactForm.subject}
                      onValueChange={(value) => setContactForm(prev => ({ ...prev, subject: value }))}
                    >
                      <SelectTrigger
                        id="contact-subject"
                        className={`bg-input border-border focus:border-primary ${contactErrors.subject ? 'border-destructive' : ''}`}
                        aria-describedby={contactErrors.subject ? 'contact-subject-error' : undefined}
                      >
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        {CONTACT_SUBJECTS.map((subject) => (
                          <SelectItem key={subject.value} value={subject.value}>
                            {subject.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {contactErrors.subject && (
                      <p id="contact-subject-error" className="text-sm text-destructive" role="alert">
                        {contactErrors.subject}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-message">Message</Label>
                    <Textarea
                      id="contact-message"
                      value={contactForm.message}
                      onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                      className={`bg-input border-border focus:border-primary ${contactErrors.message ? 'border-destructive' : ''}`}
                      placeholder="How can we help you?"
                      rows={4}
                      aria-describedby={contactErrors.message ? 'contact-message-error' : undefined}
                    />
                    {contactErrors.message && (
                      <p id="contact-message-error" className="text-sm text-destructive" role="alert">
                        {contactErrors.message}
                      </p>
                    )}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative"
                  >
                    <Button
                      type="submit"
                      disabled={contactSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground relative overflow-hidden"
                      onClick={(e) => handleButtonClick('contact-send', e)}
                    >
                      <motion.div
                        className="flex items-center gap-2"
                        animate={clickedButtons.includes('contact-send') ? { scale: [1, 1.05, 1] } : {}}
                        transition={{ duration: 0.3 }}
                      >
                        <Send className="h-4 w-4" />
                        {contactSubmitting ? 'Sending...' : 'Send Message'}
                      </motion.div>

                      {/* Lightning effect */}
                      <AnimatePresence>
                        {sparklePositions['contact-send'] && (
                          <>
                            {sparklePositions['contact-send'].map((pos, i) => (
                              <motion.div
                                key={i}
                                className="absolute pointer-events-none"
                                style={{ left: pos.x, top: pos.y }}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: i * 0.1 }}
                              >
                                <Zap className="w-3 h-3 text-yellow-400" />
                              </motion.div>
                            ))}
                          </>
                        )}
                      </AnimatePresence>
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer Links */}
        <Separator className="bg-border mb-8" />

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          {/* Legal Links */}
          <div className="flex flex-wrap items-center gap-6">
            <motion.p
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Privacy Policy
            </motion.p>
            <motion.p
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Terms of Service
            </motion.p>
            <motion.p
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Cookie Policy
            </motion.p>
            <motion.p
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Accessibility
            </motion.p>
          </div>

          {/* Sitemap Links */}
          <div className="flex flex-wrap items-center gap-6">
            <motion.a
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Home
            </motion.a>
            <motion.a
              href="#members"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              About
            </motion.a>
            <motion.a
              href="#events"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Events
            </motion.a>
            <motion.a
              href="#guilds"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Guilds
            </motion.a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © 2025 Community Platform. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}