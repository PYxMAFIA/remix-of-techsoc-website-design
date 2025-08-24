"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  ExternalLink, 
  Star, 
  GitFork, 
  Download, 
  Plus, 
  Filter, 
  X, 
  Upload,
  User,
  Calendar,
  Code2,
  Smartphone,
  Brain,
  Globe,
  Package
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  category: 'Web Apps' | 'Mobile Apps' | 'AI/ML' | 'Open Source' | 'Tools' | 'Games';
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  image: string;
  githubUrl: string;
  liveUrl?: string;
  metrics: {
    stars?: number;
    forks?: number;
    downloads?: number;
  };
  createdAt: string;
}

const mockProjects: Project[] = [
  {
    id: '1',
    title: 'TaskFlow Pro',
    description: 'A collaborative project management platform with real-time updates, Kanban boards, and team analytics.',
    techStack: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Tailwind CSS'],
    category: 'Web Apps',
    author: {
      name: 'Sarah Chen',
      avatar: '/api/placeholder/40/40',
      role: 'Full Stack Developer'
    },
    image: '/api/placeholder/400/250',
    githubUrl: 'https://github.com/sarahchen/taskflow-pro',
    liveUrl: 'https://taskflow-pro.vercel.app',
    metrics: { stars: 234, forks: 45 },
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'MindReader AI',
    description: 'An AI-powered sentiment analysis tool that processes text and provides emotional insights with visualization.',
    techStack: ['Python', 'TensorFlow', 'FastAPI', 'React', 'D3.js'],
    category: 'AI/ML',
    author: {
      name: 'Marcus Johnson',
      avatar: '/api/placeholder/40/40',
      role: 'ML Engineer'
    },
    image: '/api/placeholder/400/250',
    githubUrl: 'https://github.com/mjohnson/mindreader-ai',
    liveUrl: 'https://mindreader-ai.com',
    metrics: { stars: 567, forks: 89 },
    createdAt: '2024-02-03'
  },
  {
    id: '3',
    title: 'FitTracker Mobile',
    description: 'Cross-platform fitness tracking app with workout plans, progress analytics, and social features.',
    techStack: ['React Native', 'Expo', 'Firebase', 'Redux', 'TypeScript'],
    category: 'Mobile Apps',
    author: {
      name: 'Emma Rodriguez',
      avatar: '/api/placeholder/40/40',
      role: 'Mobile Developer'
    },
    image: '/api/placeholder/400/250',
    githubUrl: 'https://github.com/erodriguez/fittracker',
    metrics: { downloads: 12500 },
    createdAt: '2024-01-28'
  },
  {
    id: '4',
    title: 'DevTools CLI',
    description: 'A powerful command-line interface for developers with project scaffolding, code generation, and deployment tools.',
    techStack: ['Go', 'Cobra', 'Docker', 'GitHub Actions'],
    category: 'Tools',
    author: {
      name: 'Alex Kim',
      avatar: '/api/placeholder/40/40',
      role: 'DevOps Engineer'
    },
    image: '/api/placeholder/400/250',
    githubUrl: 'https://github.com/alexkim/devtools-cli',
    metrics: { stars: 891, forks: 156, downloads: 25000 },
    createdAt: '2024-02-10'
  },
  {
    id: '5',
    title: 'EcoSim Game',
    description: 'An educational ecosystem simulation game teaching environmental science through interactive gameplay.',
    techStack: ['Unity', 'C#', 'WebGL', 'Firebase'],
    category: 'Games',
    author: {
      name: 'Zoe Williams',
      avatar: '/api/placeholder/40/40',
      role: 'Game Developer'
    },
    image: '/api/placeholder/400/250',
    githubUrl: 'https://github.com/zoewilliams/ecosim',
    liveUrl: 'https://ecosim-game.netlify.app',
    metrics: { stars: 445, forks: 67 },
    createdAt: '2024-01-22'
  },
  {
    id: '6',
    title: 'OpenChat Protocol',
    description: 'An open-source, decentralized messaging protocol with end-to-end encryption and cross-platform support.',
    techStack: ['Rust', 'WebRTC', 'React', 'Electron', 'Cryptography'],
    category: 'Open Source',
    author: {
      name: 'David Park',
      avatar: '/api/placeholder/40/40',
      role: 'Systems Architect'
    },
    image: '/api/placeholder/400/250',
    githubUrl: 'https://github.com/dpark/openchat-protocol',
    metrics: { stars: 1250, forks: 203 },
    createdAt: '2024-02-01'
  }
];

const categories = [
  { id: 'all', label: 'All Projects', icon: Package },
  { id: 'Web Apps', label: 'Web Apps', icon: Globe },
  { id: 'Mobile Apps', label: 'Mobile Apps', icon: Smartphone },
  { id: 'AI/ML', label: 'AI/ML', icon: Brain },
  { id: 'Open Source', label: 'Open Source', icon: Code2 },
  { id: 'Tools', label: 'Tools', icon: Package },
  { id: 'Games', label: 'Games', icon: Package }
];

export const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>(mockProjects);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(mockProjects);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory, projects]);

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0 : 0.5 }
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Community <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover amazing projects built by our community members. From web applications to AI models, 
            our developers are creating innovative solutions and sharing them with the world.
          </p>
          
          <motion.button
            onClick={() => setIsSubmitModalOpen(true)}
            whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Submit Your Project
          </motion.button>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                onClick={() => handleCategoryFilter(category.id)}
                whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-card text-card-foreground hover:bg-card/80 border border-border'
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Loading State */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-card rounded-xl border border-border p-6 animate-pulse">
                <div className="w-full h-48 bg-muted rounded-lg mb-4" />
                <div className="h-6 bg-muted rounded mb-2" />
                <div className="h-4 bg-muted rounded w-2/3 mb-4" />
                <div className="flex gap-2 mb-4">
                  <div className="h-6 bg-muted rounded px-3" />
                  <div className="h-6 bg-muted rounded px-3" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-muted rounded-full" />
                  <div className="h-4 bg-muted rounded w-24" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 max-w-md mx-auto">
              <p className="text-destructive font-medium mb-2">Error loading projects</p>
              <p className="text-muted-foreground text-sm">{error}</p>
              <button
                onClick={() => {
                  setError(null);
                  setIsLoading(true);
                  // Simulate reload
                  setTimeout(() => setIsLoading(false), 1000);
                }}
                className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm hover:bg-primary/90 transition-colors"
              >
                Try Again
              </button>
            </div>
          </motion.div>
        )}

        {/* Projects Grid */}
        {!isLoading && !error && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  variants={itemVariants}
                  prefersReducedMotion={prefersReducedMotion}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Empty State */}
        {!isLoading && !error && filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Filter className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No projects found</h3>
            <p className="text-muted-foreground">
              No projects match the selected category. Try selecting a different filter.
            </p>
          </motion.div>
        )}

        {/* Submit Project Modal */}
        <SubmitProjectModal
          isOpen={isSubmitModalOpen}
          onClose={() => setIsSubmitModalOpen(false)}
          onSubmit={(projectData) => {
            // Handle project submission
            console.log('New project:', projectData);
            setIsSubmitModalOpen(false);
          }}
          prefersReducedMotion={prefersReducedMotion}
        />
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  variants: any;
  prefersReducedMotion: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, variants, prefersReducedMotion }) => {
  return (
    <motion.div
      layout
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      whileHover={prefersReducedMotion ? {} : { 
        y: -8,
        transition: { duration: 0.2 }
      }}
      className="bg-card rounded-xl border border-border overflow-hidden group shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-medium">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        {/* Project Title & Description */}
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="text-muted-foreground text-xs py-1">
              +{project.techStack.length - 3} more
            </span>
          )}
        </div>

        {/* Author */}
        <div className="flex items-center gap-3 mb-4">
          <img
            src={project.author.avatar}
            alt={project.author.name}
            className="w-8 h-8 rounded-full"
          />
          <div>
            <p className="text-sm font-medium">{project.author.name}</p>
            <p className="text-xs text-muted-foreground">{project.author.role}</p>
          </div>
        </div>

        {/* Metrics */}
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          {project.metrics.stars && (
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4" />
              {project.metrics.stars}
            </div>
          )}
          {project.metrics.forks && (
            <div className="flex items-center gap-1">
              <GitFork className="w-4 h-4" />
              {project.metrics.forks}
            </div>
          )}
          {project.metrics.downloads && (
            <div className="flex items-center gap-1">
              <Download className="w-4 h-4" />
              {project.metrics.downloads.toLocaleString()}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-3 py-2 rounded-lg text-sm font-medium hover:bg-secondary/80 transition-colors"
          >
            <Github className="w-4 h-4" />
            Code
          </motion.a>
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

interface SubmitProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  prefersReducedMotion: boolean;
}

const SubmitProjectModal: React.FC<SubmitProjectModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  prefersReducedMotion
}) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    techStack: '',
    category: 'Web Apps' as Project['category'],
    githubUrl: '',
    liveUrl: '',
    projectImage: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    onSubmit({
      ...formData,
      techStack: formData.techStack.split(',').map(tech => tech.trim()),
      author: {
        name: 'You',
        avatar: '/api/placeholder/40/40',
        role: 'Community Member'
      },
      metrics: {},
      createdAt: new Date().toISOString()
    });
    
    setIsSubmitting(false);
    setFormData({
      title: '',
      description: '',
      techStack: '',
      category: 'Web Apps',
      githubUrl: '',
      liveUrl: '',
      projectImage: ''
    });
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.9 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-card rounded-xl border border-border p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-heading font-bold">Submit Your Project</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-2">Project Title</label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent"
              placeholder="My Awesome Project"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              required
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
              placeholder="Describe what your project does and what makes it special..."
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value as Project['category'] })}
              className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent"
            >
              <option value="Web Apps">Web Apps</option>
              <option value="Mobile Apps">Mobile Apps</option>
              <option value="AI/ML">AI/ML</option>
              <option value="Open Source">Open Source</option>
              <option value="Tools">Tools</option>
              <option value="Games">Games</option>
            </select>
          </div>

          {/* Tech Stack */}
          <div>
            <label className="block text-sm font-medium mb-2">Tech Stack</label>
            <input
              type="text"
              required
              value={formData.techStack}
              onChange={(e) => setFormData({ ...formData, techStack: e.target.value })}
              className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent"
              placeholder="React, Node.js, MongoDB, Tailwind CSS"
            />
            <p className="text-xs text-muted-foreground mt-1">Separate technologies with commas</p>
          </div>

          {/* GitHub URL */}
          <div>
            <label className="block text-sm font-medium mb-2">GitHub Repository</label>
            <input
              type="url"
              required
              value={formData.githubUrl}
              onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
              className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent"
              placeholder="https://github.com/username/project"
            />
          </div>

          {/* Live Demo URL */}
          <div>
            <label className="block text-sm font-medium mb-2">Live Demo URL (Optional)</label>
            <input
              type="url"
              value={formData.liveUrl}
              onChange={(e) => setFormData({ ...formData, liveUrl: e.target.value })}
              className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent"
              placeholder="https://myproject.vercel.app"
            />
          </div>

          {/* Project Image */}
          <div>
            <label className="block text-sm font-medium mb-2">Project Image URL</label>
            <input
              type="url"
              value={formData.projectImage}
              onChange={(e) => setFormData({ ...formData, projectImage: e.target.value })}
              className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent"
              placeholder="https://example.com/screenshot.png"
            />
            <p className="text-xs text-muted-foreground mt-1">A screenshot or preview of your project</p>
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
            >
              Cancel
            </button>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Project'}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};