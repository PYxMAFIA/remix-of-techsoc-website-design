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
  techStack: string[];
  category: 'Web Apps' | 'Mobile Apps' | 'AI/ML' | 'Finance';
  author: {
    name: string;
    avatar: string;
  };
  image: string;
  githubUrl: string;
  liveUrl: string;
}

const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Chat App',
    techStack: ['ReactJs', 'Node.js', 'Mongo-DB', 'Tailwind CSS'],
    category: 'Web Apps',
    author: {
      name: 'Piyus Kumar',
      avatar: './Members/piyush.jpg'
    },
    image: 'https://picsum.photos/200',
    githubUrl: 'https://github.com/PYxMAFIA/chat-app',
    liveUrl: 'https://chat-app-s7hd.onrender.com/',
  },
  {
    id: '2',
    title: 'Spotify-designed local music player',
    techStack: ['Html', 'VanillaCSS', 'Vanilla Js'],
    category: 'Web Apps',
    author: {
      name: 'Bibhu Kumar Singh',
      avatar: './Members/bibhu.jpg'
    },
    image: 'https://picsum.photos/200',
    githubUrl: 'https://github.com/bib58/Spotify_cloned',
    liveUrl: 'https://bib58.github.io/Spotify_cloned/'
  },
  {
    id: '3',
    title: 'Budget Bee',
    techStack: ['ReactJs`'],
    category: 'Web Apps',
    author: {
      name: 'Gautam Swami',
      avatar: './Members/gautam.jpg',
    },
    image: 'https://picsum.photos/200',
    githubUrl: 'https://gautam2401.github.io/BudgetBee/',
    liveUrl: 'https://gautam2401.github.io/BudgetBee/',
  },
  {
    id: '4',
    title: 'Notes',
    techStack: ['ReactJs', 'Node.js', 'Mongo-DB', 'Tailwind CSS'],
    category: 'Web Apps',
    author: {
      name: 'Piyus Kumar',
      avatar: './Members/piyush.jpg',
    },
    image: 'https://picsum.photos/200',
    githubUrl: 'https://github.com/PYxMAFIA/mern-Keeper',
    liveUrl: 'https://mern-keeper-y2l2.onrender.com/',
  },
  {
    id: '5',
    title: 'Dsa instructor',
    techStack: ['Html', 'Vanilla CSS', 'Vanilla JS', "API's"],
    category: 'Web Apps',
    author: {
      name: 'Bibhu Kumar Singh',
      avatar: './Members/bibhu.jpg',
    },
    image: 'https://picsum.photos/200',
    githubUrl: 'https://github.com/bib58/dsa_guru',
    liveUrl: 'https://bib58.github.io/dsa_guru/',
  },
  {
    id: '6',
    title: 'To-do list',
    techStack: ['ReactJs', 'Node.js', 'Mongo-DB', 'Tailwind CSS'],
    category: 'Web Apps',
    author: {
      name: 'Piyus Kumar',
      avatar: './Members/piyush.jpg',
    },
    image: 'https://picsum.photos/200',
    githubUrl: 'https://github.com/PYxMAFIA/todolist.ai',
    liveUrl: 'https://todolist-ai.onrender.com/login',
  },
  {
    id: '7',
    title: 'Food Lens',
    techStack: ['ReactsJS', 'Teachable Machines'],
    category: 'Web Apps',
    author: {
      name: 'Gautam Swami',
      avatar: './Members/gautam.jpg',
    },
    image: 'https://picsum.photos/200',
    githubUrl: 'https://gautam2401.github.io/FoodLens/',
    liveUrl: 'https://gautam2401.github.io/FoodLens/',
  },
  {
    id: '8',
    title: 'Cloned Bookmyshow Landing Page',
    techStack: ['Html', 'Vanilla CSS', 'Vanilla JS'],
    category: 'Web Apps',
    author: {
      name: 'Bibhu Kumar Singh',
      avatar: './Members/bibhu.jpg',
    },
    image: 'https://picsum.photos/200',
    githubUrl: 'https://github.com/bib58/bookmyshow',
    liveUrl: 'https://bib58.github.io/bookmyshow/',
  },
  {
    id: '9',
    title: 'Used react-redux to create BillDesk at Swiggy Clone',
    techStack: ['ReactJs', 'Tailwind CSS'],
    category: 'Web Apps',
    author: {
      name: 'Bibhu Kumar Singh',
      avatar: './Members/bibhu.jpg',
    },
    image: 'https://picsum.photos/200',
    githubUrl: 'https://github.com/bib58/Proj_using_comp_react',
    liveUrl: '..........................',
  },
];

const categories = [
  { id: 'all', label: 'All Projects', icon: Package },
  { id: 'Web Apps', label: 'Web Apps', icon: Globe },
  { id: 'Mobile Apps', label: 'Mobile Apps', icon: Smartphone },
  { id: 'AI/ML', label: 'AI/ML', icon: Brain },
  { id: 'Open Source', label: 'Open Source', icon: Code2 },
  { id: 'Finance', label: 'Finance', icon: Package },
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
            Member <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover amazing projects built by our community members. From web applications to AI models, 
            our developers are creating innovative solutions and sharing them with the world.
          </p>
          
        </motion.div>

        {/* Category Filters */}
        {/* <motion.div
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
        </motion.div> */}

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
        boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="bg-card rounded-2xl border border-border overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-2xl"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-lg text-xs font-semibold shadow">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col gap-4">
        {/* Project Title & Description */}
        <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-2">
          {project.techStack.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs font-semibold shadow"
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
        <div className="flex items-center gap-3 mb-2">
          <img
            src={project.author.avatar}
            alt={project.author.name}
            className="w-8 h-8 rounded-full border-2 border-primary shadow"
          />
          <span className="text-base font-medium text-muted-foreground">{project.author.name}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-2">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={prefersReducedMotion ? {} : { scale: 1.08 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.96 }}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-3 py-2 rounded-lg text-sm font-semibold hover:bg-secondary/80 transition-colors shadow"
          >
            <Github className="w-4 h-4" />
            Code
          </motion.a>
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={prefersReducedMotion ? {} : { scale: 1.08 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.96 }}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors shadow"
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


