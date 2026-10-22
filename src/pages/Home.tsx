import { Link } from "react-router-dom";
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Code,
  Layout,
  Smartphone,
  Sparkles,
  Zap,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PREVIEW_SERVICES = [
  {
    icon: Code,
    title: "Web Development",
    description: "Fast, scalable web apps with modern frameworks and clean code.",
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "Intuitive interfaces that balance beauty with real usability.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Flawless on every screen, from large desktops to small phones.",
  },
];

const STATS = [
  { value: "5+", label: "Years Experience" },
  { value: "40+", label: "Projects Completed" },
  { value: "20+", label: "Happy Clients" },
  { value: "100%", label: "Dedication" },
];

const FEATURED_PROJECTS = [
  {
    title: "Analytics Dashboard",
    description:
      "Real-time analytics platform with interactive charts and customizable widgets.",
    image:
      "https://images.pexels.com/photos/12969403/pexels-photo-12969403.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    tags: ["React", "TypeScript", "Charts"],
    demoUrl: "https://example.com",
  },
  {
    title: "E-Commerce Store",
    description:
      "Full-featured online store with cart, checkout, and conversion-focused design.",
    image:
      "https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    tags: ["Next.js", "Stripe", "Supabase"],
    demoUrl: "https://example.com",
  },
];

export default function Home() {
  return (
    <div className="page-enter">
      {/* ───── Hero ───── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-accent-500/8 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-600/6 rounded-full blur-[120px]" />
        </div>
        {/* Fade to background at edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/40 via-transparent to-ink-900 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full pt-20 pb-16">
          <div className="grid md:grid-cols-5 gap-10 md:gap-14 items-center">
            {/* Left: Text */}
            <div className="md:col-span-3 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-xs font-medium mb-6 animate-fade-in">
                <Sparkles size={13} />
                Available for new projects
              </div>

              <p className="text-accent-400 text-sm font-mono mb-4 animate-fade-in">
                Hi, my name is
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-3 animate-fade-up">
                Your Name
              </h1>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gradient-muted mb-6 animate-fade-up"
                style={{ animationDelay: "0.1s" }}
              >
                I build things for the web.
              </h2>
              <p
                className="max-w-md mx-auto md:mx-0 text-lg text-ink-200 leading-relaxed mb-8 animate-fade-up"
                style={{ animationDelay: "0.2s" }}
              >
                A passionate developer and designer focused on crafting clean,
                performant, and memorable digital experiences.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-up"
                style={{ animationDelay: "0.3s" }}
              >
                <Button asChild size="lg" className="glow-sm">
                  <Link to="/services">
                    View My Services
                    <ArrowRight size={18} />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </div>

              <div
                className="flex gap-3 justify-center md:justify-start mt-8 animate-fade-in"
                style={{ animationDelay: "0.5s" }}
              >
                {[
                  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
                  { icon: Github, href: "https://github.com", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="w-11 h-11 flex items-center justify-center rounded-xl border border-ink-500 text-ink-300 hover:text-accent-400 hover:border-accent-500/40 hover:bg-accent-500/5 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right: Profile photo */}
            <div
              className="md:col-span-2 flex justify-center animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="relative group">
                {/* Glow ring */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-accent-500/20 to-accent-600/5 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Frame */}
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden border-2 border-ink-600 group-hover:border-accent-500/40 transition-colors duration-500 glow-sm">
                  <img
                    src="https://images.pexels.com/photos/31428193/pexels-photo-31428193.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Your Name"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 to-transparent" />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-3 -right-3 px-4 py-2 rounded-xl bg-ink-800 border border-ink-600 shadow-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
                  <span className="text-xs text-ink-100 font-medium">Open to work</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <Link
          to="/about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-400 hover:text-accent-400 transition-colors group"
          aria-label="Learn more"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
          <span className="w-5 h-9 rounded-full border-2 border-ink-500 group-hover:border-accent-400 flex justify-center pt-1.5 transition-colors">
            <span className="w-1 h-1.5 rounded-full bg-ink-400 group-hover:bg-accent-400 animate-float" />
          </span>
        </Link>
      </section>

      {/* ───── Stats Strip ───── */}
      <section className="border-y border-ink-600/30 bg-ink-800/30 py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="reveal text-center"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <p className="text-3xl md:text-4xl font-extrabold text-gradient">
                {stat.value}
              </p>
              <p className="text-ink-300 text-sm mt-1 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ───── Services Preview ───── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="reveal flex flex-col items-center text-center mb-14">
            <p className="text-accent-400 text-sm font-mono mb-3">What I Do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Services I Offer
            </h2>
            <p className="text-ink-200 max-w-md">
              A glimpse of what I can help you with — from first line of code to
              final polish.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {PREVIEW_SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="reveal group hover:border-accent-500/30 hover:-translate-y-1 transition-all duration-400"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 flex items-center justify-center bg-accent-500/10 rounded-xl mb-5 group-hover:bg-accent-500/20 group-hover:scale-110 transition-all duration-300">
                      <Icon size={22} className="text-accent-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-ink-200 text-[15px] leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="reveal text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                See All Services
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ───── Featured Projects ───── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="reveal flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-accent-400 text-sm font-mono mb-3">
                Recent Work
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Featured Projects
              </h2>
            </div>
            <Button asChild variant="ghost" size="sm">
              <Link to="/projects">
                View All
                <ArrowRight size={14} />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {FEATURED_PROJECTS.map((project, i) => (
              <Card
                key={project.title}
                className="reveal group overflow-hidden hover:border-accent-500/30 transition-all duration-400"
                style={{ transitionDelay: `${i * 120}ms` }}
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
                  <div className="absolute bottom-4 right-4 w-10 h-10 rounded-xl bg-ink-900/80 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink size={16} className="text-accent-400" />
                  </div>
                </a>
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold text-white mb-1.5">
                    {project.title}
                  </h3>
                  <p className="text-ink-200 text-sm leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CTA Banner ───── */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="reveal relative overflow-hidden rounded-3xl border border-ink-600 bg-gradient-to-br from-ink-800 to-ink-900 p-10 md:p-16 text-center">
            <div className="absolute inset-0 bg-dots opacity-40" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/8 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3" />
            <div className="relative z-10">
              <Zap className="text-accent-400 mx-auto mb-4" size={32} />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Have a project in mind?
              </h2>
              <p className="text-ink-200 mb-8 max-w-md mx-auto">
                Let's turn your idea into a polished product. I'm just one
                message away.
              </p>
              <Button asChild size="lg" className="glow-sm">
                <Link to="/contact">
                  Start a Conversation
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
