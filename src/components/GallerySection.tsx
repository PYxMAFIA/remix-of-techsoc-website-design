"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { X, ZoomIn } from 'lucide-react'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Image, Play, FileImage, Download, Share2, ChevronLeft, ChevronRight, Upload, PlayCircle, PauseCircle, Eye, EyeOff, Plus, Zap, Sparkles } from "lucide-react"
import { toast } from "sonner"

interface MediaItem {
  id: string
  type: 'photo' | 'poster' | 'video'
  url: string
  thumbnail: string
  title: string
  caption?: string
  category: string
  aspectRatio: number
}

interface GallerySectionProps {
  className?: string
}

const MOCK_MEDIA: MediaItem[] = [
  {
    id: '1',
    type: 'photo',
    url: '/glimpses/1-min.jpg',
    thumbnail: '/glimpses/1-min.jpg',
    title: 'Campus Event 2024',
    caption: 'Students gathering at the main quad for orientation week',
    category: 'Events',
    aspectRatio: 4/3
  },
  {
    id: '2',
    type: 'poster',
    url: '/glimpses/2-min.jpg',
    thumbnail: '/glimpses/2-min.jpg',
    title: 'Speaker Spotlight',
    caption: 'Spotlight on our keynote speaker',
    category: 'Marketing',
    aspectRatio: 3/4
  },
  {
    id: '3',
    type: 'photo',
    url: '/glimpses/3-min.jpg',
    thumbnail: '/glimpses/3-min.jpg',
    title: 'Photo session',
    caption: 'Exclusive photo session for rt members',
    category: 'Portraits',
    aspectRatio: 2/3
  },
  {
    id: '4',
    type: 'photo',
    url: '/glimpses/4-min.jpg',
    thumbnail: '/glimpses/4-min.jpg',
    title: 'Workshop Day',
    caption: 'Hands-on learning session in the project',
    category: 'Events',
    aspectRatio: 4/3
  },
  {
    id: '5',
    type: 'poster',
    url: '/glimpses/5-min.jpg',
    thumbnail: '/glimpses/5-min.jpg',
    title: 'event',
    caption: 'event photo',
    category: 'Marketing',
    aspectRatio: 4/3
  },
  {
    id: '6',
    type: 'photo',
    url: '/glimpses/6-min.jpg',
    thumbnail: '/glimpses/6-min.jpg',
    title: 'Workshop Day',
    caption: 'Hands-on learning session in the project',
    category: 'Events',
    aspectRatio: 4/3
  },
    {
    id: '7',
    type: 'photo',
    url: '/glimpses/7-min.jpg',
    thumbnail: '/glimpses/7-min.jpg',
    title: 'Workshop Day',
    caption: 'Hands-on learning session in the project',
    category: 'Events',
    aspectRatio: 4/3
  },
    {
    id: '8',
    type: 'photo',
    url: '/glimpses/8-min.jpg',
    thumbnail: '/glimpses/8-min.jpg',
    title: 'Workshop Day',
    caption: 'Hands-on learning session in the project',
    category: 'Events',
    aspectRatio: 4/3
  },

    {
      id: '9',
      type: 'photo',
      url: '/glimpses/9-min.jpg',
      thumbnail: '/glimpses/9-min.jpg',
      title: 'Workshop Day',
      caption: 'Hands-on learning session in the project',
      category: 'Events',
      aspectRatio: 4/3
    }
    ,
    {
      id: '10',
      type: 'photo',
      url: '/glimpses/10-min.jpg',
      thumbnail: '/glimpses/10-min.jpg',
      title: 'Speaker',
      caption: 'Speaker at the event',
      category: 'Events',
      aspectRatio: 4/3
    },
    {
      id: '11',
      type: 'photo',
      url: '/glimpses/11-min.jpg',
      thumbnail: '/glimpses/11-min.jpg',
      title: 'Group photo',
      caption: 'Group photo of all member',
      category: 'photo',
      aspectRatio: 4/3
    },
    {
      id: '12',
      type: 'photo',
      url: '/glimpses/12-min.jpg',
      thumbnail: '/glimpses/12-min.jpg',
      title: 'Workshop Day',
      caption: 'Hands-on learning session in the project',
      category: 'Events',
      aspectRatio: 4/3
    },
    {
      id: '13',
      type: 'photo',
      url: '/glimpses/13-min.jpg',
      thumbnail: '/glimpses/13-min.jpg',
      title: 'Workshop Day',
      caption: 'Hands-on learning session in the project',
      category: 'Events',
      aspectRatio: 4/3
    },
    {
      id: '14',
      type: 'photo',
      url: '/glimpses/14-min.jpg',
      thumbnail: '/glimpses/14-min.jpg',
      title: 'Workshop Day',
      caption: 'Winning moment captured',
      category: 'Events',
      aspectRatio: 4/3
    },
    {
      id: '15',
      type: 'photo',
      url: '/glimpses/15-min.jpg',
      thumbnail: '/glimpses/15-min.jpg',
      title: 'Workshop Day',
      caption: 'Winning moment captured',
      category: 'Events',
      aspectRatio: 4/3
    },
    {
      id: '16',
      type: 'photo',
      url: '/glimpses/16-min.jpg',
      thumbnail: '/glimpses/16-min.jpg',
      title: 'Workshop Day',
      caption: 'hands-on learning session in the project',
      category: 'Events',
      aspectRatio: 4/3
    },
    {
      id: '17',
      type: 'photo',
      url: '/glimpses/17-min.jpg',
      thumbnail: '/glimpses/17-min.jpg',
      title: 'Workshop Day',
      caption: 'Winning moment captured',
      category: 'Events',
      aspectRatio: 4/3
    },
    {
      id: '18',
      type: 'photo',
      url: '/glimpses/18-min.jpg',
      thumbnail: '/glimpses/18-min.jpg',
      title: 'Workshop Day',
      caption: 'hands-on learning session in the project',
      category: 'Events',
      aspectRatio: 4/3
    }

]

const FILTER_OPTIONS = [
  { value: 'all', label: 'All', icon: Image },
  { value: 'photo', label: 'Photos', icon: Image },
  { value: 'poster', label: 'Posters', icon: FileImage },
  { value: 'video', label: 'Videos', icon: Play }
]

export default function GallerySection({ className = "" }: GallerySectionProps) {
  const [media, setMedia] = useState<MediaItem[]>(MOCK_MEDIA)
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showUploadDialog, setShowUploadDialog] = useState(false)
  const [isSlideshow, setIsSlideshow] = useState(false)
  const [showCaptions, setShowCaptions] = useState(true)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [uploadForm, setUploadForm] = useState({
    file: null as File | null,
    title: '',
    caption: '',
    category: 'Events',
  })

  // Check for reduced motion preference
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      setPrefersReducedMotion(mediaQuery.matches)
      
      const handleChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches)
      }
      
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  // Filter media based on active filter
  const filteredMedia = media.filter(item => 
    activeFilter === 'all' || item.type === activeFilter
  )

  // Slideshow functionality
  useEffect(() => {
    if (isSlideshow && selectedMedia && !prefersReducedMotion) {
      const interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % filteredMedia.length)
      }, 4000)
      
      return () => clearInterval(interval)
    }
  }, [isSlideshow, selectedMedia, filteredMedia.length, prefersReducedMotion])

  // Update selected media when index changes
  useEffect(() => {
    if (selectedMedia && filteredMedia[currentIndex]) {
      setSelectedMedia(filteredMedia[currentIndex])
    }
  }, [currentIndex, filteredMedia, selectedMedia])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedMedia) return
      
      switch (e.key) {
        case 'Escape':
          setSelectedMedia(null)
          setIsSlideshow(false)
          break
        case 'ArrowLeft':
          navigateMedia('prev')
          break
        case 'ArrowRight':
          navigateMedia('next')
          break
      }
    }

    if (selectedMedia) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedMedia, currentIndex, filteredMedia.length])

  const navigateMedia = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentIndex(prev => prev === 0 ? filteredMedia.length - 1 : prev - 1)
    } else {
      setCurrentIndex(prev => (prev + 1) % filteredMedia.length)
    }
    setIsSlideshow(false) // Stop slideshow when user navigates
  }

  const openLightbox = (item: MediaItem) => {
    const index = filteredMedia.findIndex(media => media.id === item.id)
    setCurrentIndex(index)
    setSelectedMedia(item)
  }

  const handleShare = async () => {
    if (!selectedMedia) return
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: selectedMedia.title,
          text: selectedMedia.caption,
          url: selectedMedia.url
        })
      } catch (err) {
        // User cancelled or error occurred
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(selectedMedia.url)
        toast.success('Link copied to clipboard')
      } catch (err) {
        toast.error('Failed to share')
      }
    }
  }

  const handleDownload = () => {
    if (!selectedMedia) return
    
    const link = document.createElement('a')
    link.href = selectedMedia.url
    link.download = `${selectedMedia.title}.jpg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    toast.success('Download started')
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setUploadForm(prev => ({ ...prev, file }))
    }
  }

  const handleUploadSubmit = () => {
    if (!uploadForm.file || !uploadForm.title) {
      toast.error('Please fill in all required fields')
      return
    }

    // Mock upload - in real app, this would upload to server
    const newMedia: MediaItem = {
      id: Date.now().toString(),
      type: uploadForm.file.type.startsWith('video/') ? 'video' : 'photo',
      url: URL.createObjectURL(uploadForm.file),
      thumbnail: URL.createObjectURL(uploadForm.file),
      title: uploadForm.title,
      caption: uploadForm.caption,
      category: uploadForm.category,
      aspectRatio: 4/3 // Default aspect ratio
    }

    setMedia(prev => [newMedia, ...prev])
    setUploadForm({
      file: null,
      title: '',
      caption: '',
      category: 'Events',
    })
    setShowUploadDialog(false)
    
    toast.success('Media uploaded successfully!')
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20, scale: prefersReducedMotion ? 1 : 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: prefersReducedMotion ? 0 : 0.5 }
    }
  }

  return (
    <div className={`bg-background ${className}`}>
      {/* Header with filters and upload button */}
      <motion.div
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8"
      >
        <div className="flex flex-wrap gap-2">
          {FILTER_OPTIONS.map((filter, index) => {
            const Icon = filter.icon
            return (
              <motion.div
                key={filter.value}
                initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Button
                  variant={activeFilter === filter.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(filter.value)}
                  className="h-9 relative overflow-hidden group"
                >
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                    whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4" />
                    {filter.label}
                  </motion.div>
                  {activeFilter === filter.value && !prefersReducedMotion && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"
                      layoutId="activeFilter"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Button>
              </motion.div>
            )
          })}
        </div>
        
        <motion.div
          initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Button
            onClick={() => setShowUploadDialog(true)}
            className="shrink-0 relative overflow-hidden group"
          >
            <motion.div 
              className="flex items-center gap-2"
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
            >
              <Upload className="w-4 h-4" />
              Upload Media
            </motion.div>
            {!prefersReducedMotion && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            )}
          </Button>
        </motion.div>
      </motion.div>

      {/* Masonry Grid with Enhanced Animations */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-4"
        style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gridAutoRows: '20px'
        }}
      >
        <AnimatePresence mode="popLayout">
          {filteredMedia.map((item, index) => {
            const gridRowEnd = Math.ceil((280 / item.aspectRatio + 40) / 20)
            
            return (
              <motion.div
                key={item.id}
                layout
                variants={itemVariants}
                className="relative group cursor-pointer"
                style={{ gridRowEnd: `span ${gridRowEnd}` }}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                whileHover={prefersReducedMotion ? {} : { 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                onClick={() => openLightbox(item)}
              >
                <Card className="h-full overflow-hidden border-2 border-white/10 hover:border-primary/30 transition-all duration-300 relative">
                  <CardContent className="p-0 relative h-full">
                    <motion.img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Enhanced Overlay with Sparkle Effects */}
                    <motion.div 
                      className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center"
                      animate={hoveredItem === item.id && !prefersReducedMotion ? {
                        background: [
                          'rgba(0,0,0,0)',
                          'rgba(0,0,0,0.4)',
                          'rgba(0,0,0,0.4)'
                        ]
                      } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Sparkle Animation on Hover */}
                      {hoveredItem === item.id && !prefersReducedMotion && (
                        <>
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 bg-white rounded-full"
                              initial={{ 
                                opacity: 0, 
                                scale: 0,
                                x: Math.random() * 200 - 100,
                                y: Math.random() * 200 - 100
                              }}
                              animate={{ 
                                opacity: [0, 1, 0], 
                                scale: [0, 1, 0],
                                rotate: 360
                              }}
                              transition={{ 
                                duration: 1.5, 
                                delay: i * 0.1,
                                repeat: Infinity,
                                repeatDelay: 2
                              }}
                            />
                          ))}
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex items-center justify-center"
                          >
                            <Sparkles className="w-12 h-12 text-white" />
                          </motion.div>
                        </>
                      )}
                      
                      {item.type === 'video' && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ 
                            opacity: hoveredItem === item.id ? 1 : 0,
                            scale: hoveredItem === item.id ? 1 : 0
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <Play className="w-12 h-12 text-white" />
                        </motion.div>
                      )}
                    </motion.div>
                    
                    {/* Type badge with animation */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Badge 
                        variant="secondary" 
                        className="absolute top-2 left-2 capitalize text-xs backdrop-blur-sm"
                      >
                        {item.type}
                      </Badge>
                    </motion.div>
                    
                    {/* Enhanced Title overlay with animations */}
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <motion.h3 
                        className="text-white font-medium text-sm line-clamp-1"
                        whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                      >
                        {item.title}
                      </motion.h3>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </motion.div>

      {/* Enhanced Lightbox Dialog */}
      <Dialog open={!!selectedMedia} onOpenChange={() => {
        setSelectedMedia(null)
        setIsSlideshow(false)
      }}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-white/10">
          <DialogHeader className="sr-only">
            <DialogTitle>{selectedMedia?.title}</DialogTitle>
          </DialogHeader>
          
          {selectedMedia && (
            <motion.div 
              className="relative w-full h-full flex flex-col"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
            >
              {/* Top controls with enhanced animations */}
              <motion.div 
                className="absolute top-4 left-4 right-4 z-10 flex justify-between items-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex gap-2">
                  <motion.div whileHover={prefersReducedMotion ? {} : { scale: 1.1 }} whileTap={prefersReducedMotion ? {} : { scale: 0.9 }}>
                    <Button
                      size="icon"
                      variant="secondary"
                      onClick={() => setIsSlideshow(!isSlideshow)}
                      disabled={prefersReducedMotion}
                      aria-label={isSlideshow ? "Stop slideshow" : "Start slideshow"}
                      className="backdrop-blur-sm"
                    >
                      {isSlideshow ? <PauseCircle className="w-4 h-4" /> : <PlayCircle className="w-4 h-4" />}
                    </Button>
                  </motion.div>
                  <motion.div whileHover={prefersReducedMotion ? {} : { scale: 1.1 }} whileTap={prefersReducedMotion ? {} : { scale: 0.9 }}>
                    <Button
                      size="icon"
                      variant="secondary"
                      onClick={() => setShowCaptions(!showCaptions)}
                      aria-label={showCaptions ? "Hide captions" : "Show captions"}
                      className="backdrop-blur-sm"
                    >
                      {showCaptions ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                    </Button>
                  </motion.div>
                </div>
                
                <div className="flex gap-2">
                  <motion.div whileHover={prefersReducedMotion ? {} : { scale: 1.1 }} whileTap={prefersReducedMotion ? {} : { scale: 0.9 }}>
                    <Button
                      size="icon"
                      variant="secondary"
                      onClick={handleDownload}
                      aria-label="Download image"
                      className="backdrop-blur-sm"
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                  </motion.div>
                  <motion.div whileHover={prefersReducedMotion ? {} : { scale: 1.1 }} whileTap={prefersReducedMotion ? {} : { scale: 0.9 }}>
                    <Button
                      size="icon"
                      variant="secondary"
                      onClick={handleShare}
                      aria-label="Share image"
                      className="backdrop-blur-sm"
                    >
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Navigation buttons with enhanced animations */}
              {filteredMedia.length > 1 && (
                <>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Button
                      size="icon"
                      variant="secondary"
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 backdrop-blur-sm"
                      onClick={() => navigateMedia('prev')}
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Button
                      size="icon"
                      variant="secondary"
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 backdrop-blur-sm"
                      onClick={() => navigateMedia('next')}
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </motion.div>
                </>
              )}

              {/* Main image with enhanced animations */}
              <div className="flex-1 flex items-center justify-center p-4 pt-16">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedMedia.id}
                    src={selectedMedia.url}
                    alt={selectedMedia.title}
                    className="max-w-full max-h-full object-contain"
                    initial={{ opacity: 0, scale: 0.8, rotateY: prefersReducedMotion ? 0 : 90 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotateY: prefersReducedMotion ? 0 : -90 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
                  />
                </AnimatePresence>
              </div>

              {/* Enhanced Caption */}
              {showCaptions && (selectedMedia.caption) && (
                <motion.div 
                  className="bg-black/80 p-4 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.h3 
                    className="text-white font-medium text-lg mb-1"
                    whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                  >
                    {selectedMedia.title}
                  </motion.h3>
                  {selectedMedia.caption && (
                    <motion.p 
                      className="text-white/80 text-sm mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {selectedMedia.caption}
                    </motion.p>
                  )}
                </motion.div>
              )}
            </motion.div>
          )}
        </DialogContent>
      </Dialog>

      {/* Upload Dialog */}
      <Dialog open={showUploadDialog} onOpenChange={setShowUploadDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Upload Media</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="file">File *</Label>
              <Input
                id="file"
                type="file"
                accept="image/*,video/*"
                onChange={handleFileSelect}
                className="mt-1"
              />
            </div>
            
            {uploadForm.file && (
              <div className="relative w-full h-32 bg-muted rounded-md overflow-hidden">
                <img
                  src={URL.createObjectURL(uploadForm.file)}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <div>
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                value={uploadForm.title}
                onChange={(e) => setUploadForm(prev => ({ ...prev, title: e.target.value }))}
                placeholder="Enter title"
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="caption">Caption</Label>
              <Textarea
                id="caption"
                value={uploadForm.caption}
                onChange={(e) => setUploadForm(prev => ({ ...prev, caption: e.target.value }))}
                placeholder="Add a caption..."
                className="mt-1"
                rows={3}
              />
            </div>
            
            <div>
              <Label htmlFor="category">Category</Label>
              <Select
                value={uploadForm.category}
                onValueChange={(value) => setUploadForm(prev => ({ ...prev, category: value }))}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Events">Events</SelectItem>
                  <SelectItem value="Portraits">Portraits</SelectItem>
                  <SelectItem value="Marketing">Marketing</SelectItem>
                  <SelectItem value="Videos">Videos</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex gap-2 pt-4">
              <Button
                variant="outline"
                onClick={() => setShowUploadDialog(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <motion.div
                whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                className="flex-1"
              >
                <Button
                  onClick={handleUploadSubmit}
                  className="w-full"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Upload
                </Button>
              </motion.div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}