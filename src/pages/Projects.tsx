import { useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  demoUrl: string;
  codeUrl: string;
  featured?: boolean;
}

const PROJECTS: Project[] = [
  {
    title: "Analytics Dashboard",
    description:
      "A real-time analytics platform with interactive charts, customizable widgets, and dark mode support. Built for speed and clarity.",
    image:
      "https://images.pexels.com/photos/12969403/pexels-photo-12969403.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    tags: ["React", "TypeScript", "Charts", "Tailwind"],
    category: "web",
    demoUrl: "https://example.com",
    codeUrl: "https://github.com",
    featured: true,
  },
  {
    title: "E-Commerce Store",
    description:
      "A full-featured online store with cart, checkout, product filtering, and a clean, conversion-focused design.",
    image:
      "https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    tags: ["Next.js", "Stripe", "Supabase"],
    category: "web",
    demoUrl: "https://example.com",
    codeUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Task Manager App",
    description:
      "A drag-and-drop task management tool with boards, labels, and real-time collaboration. Minimal and fast.",
    image:
      "https://images.pexels.com/photos/139387/pexels-photo-139387.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    tags: ["React", "DnD", "WebSocket"],
    category: "web",
    demoUrl: "https://example.com",
    codeUrl: "https://github.com",
  },
  {
    title: "Developer Portfolio",
    description:
      "A sleek, animated portfolio template with multi-page routing, smooth transitions, and a contact form.",
    image:
      "https://images.pexels.com/photos/360591/pexels-photo-360591.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    tags: ["React", "Router", "Tailwind"],
    category: "design",
    demoUrl: "https://example.com",
    codeUrl: "https://github.com",
  },
  {
    title: "Code Editor UI",
    description:
      "A browser-based code editor with syntax highlighting, split panes, and a customizable theme system.",
    image:
      "https://images.pexels.com/photos/3888149/pexels-photo-3888149.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    tags: ["React", "Monaco", "CSS"],
    category: "web",
    demoUrl: "https://example.com",
    codeUrl: "https://github.com",
  },
  {
    title: "Debug Toolkit",
    description:
      "A debugging and profiling tool for web apps, featuring network inspection and performance timelines.",
    image:
      "https://images.pexels.com/photos/34803990/pexels-photo-34803990.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    tags: ["TypeScript", "DevTools", "UI"],
    category: "design",
    demoUrl: "https://example.com",
    codeUrl: "https://github.com",
  },
];

const FILTERS = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Apps" },
  { id: "design", label: "Design" },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <section className="min-h-screen pt-28 pb-20 px-6 page-enter">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="reveal mb-10">
          <p className="text-accent-400 text-sm font-mono mb-3">
            03. Projects
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Things I've Built
          </h1>
          <p className="text-ink-200 text-lg max-w-xl">
            A selection of projects I've worked on — from web apps to design
            systems. Each one taught me something new.
          </p>
        </div>

        {/* Filters */}
        <div className="reveal flex gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                filter === f.id
                  ? "bg-accent-500/15 text-accent-400 border border-accent-500/30"
                  : "text-ink-200 hover:text-white border border-ink-600 hover:border-ink-500"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Featured projects */}
        {filter === "all" && (
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {PROJECTS.filter((p) => p.featured).map((project, i) => (
              <ProjectCardLarge key={project.title} project={project} index={i} />
            ))}
          </div>
        )}

        {/* All other projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {(filter === "all"
            ? PROJECTS.filter((p) => !p.featured)
            : filtered
          ).map((project, i) => (
            <ProjectCardSmall key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="reveal text-center mt-16">
          <p className="text-ink-200 mb-5">
            Want to see more or discuss a collaboration?
          </p>
          <Button asChild size="lg" className="glow-sm">
            <Link to="/contact">
              Get In Touch
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ProjectCardLarge({ project, index }: { project: Project; index: number }) {
  return (
    <Card
      className="reveal group overflow-hidden hover:border-accent-500/30 transition-all duration-400"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <a
        href={project.demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative overflow-hidden aspect-[16/10]"
      >
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/20 to-transparent" />
        <div className="absolute top-4 left-4">
          <Badge className="bg-accent-500/20 text-accent-400 border-accent-500/30">
            Featured
          </Badge>
        </div>
      </a>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-ink-200 text-[15px] leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex gap-3">
          <Button asChild variant="outline" size="sm">
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={14} />
              Live Demo
            </a>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
              <Github size={14} />
              Code
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function ProjectCardSmall({ project, index }: { project: Project; index: number }) {
  return (
    <Card
      className="reveal group overflow-hidden hover:border-accent-500/30 hover:-translate-y-1 transition-all duration-400"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <a
        href={project.demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative overflow-hidden aspect-[16/10]"
      >
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </a>
      <CardContent className="p-5">
        <h3 className="text-base font-semibold text-white mb-1.5">
          {project.title}
        </h3>
        <p className="text-ink-200 text-sm leading-relaxed mb-3 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 h-9 rounded-lg border border-ink-600 text-ink-100 hover:border-accent-500/40 hover:text-accent-400 text-xs font-medium transition-all duration-200"
          >
            <ExternalLink size={13} />
            Demo
          </a>
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 h-9 rounded-lg border border-ink-600 text-ink-100 hover:border-accent-500/40 hover:text-accent-400 text-xs font-medium transition-all duration-200"
          >
            <Github size={13} />
            Code
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
