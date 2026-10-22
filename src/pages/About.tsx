import {
  Briefcase,
  MapPin,
  Sparkles,
  ArrowRight,
  Code,
  Coffee,
  Rocket,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const QUICK_FACTS = [
  { label: "Based in", value: "Your City, Country", icon: MapPin },
  { label: "Experience", value: "5+ years", icon: Briefcase },
  { label: "Focus", value: "Web & Product Design" },
  { label: "Availability", value: "Open to work" },
];

const SKILL_GROUPS = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "HTML5", "CSS3", "Python"],
  },
  {
    category: "Frameworks",
    items: ["React", "Next.js", "Node.js", "Express", "Vite"],
  },
  {
    category: "Design & Tools",
    items: ["Figma", "Tailwind CSS", "Git", "Docker", "Supabase"],
  },
];

const JOURNEY = [
  {
    year: "2019",
    title: "Started Coding Journey",
    description: "Dived into web development with HTML, CSS, and JavaScript. Built my first projects and fell in love with creating for the web.",
  },
  {
    year: "2021",
    title: "First Professional Role",
    description: "Joined a startup as a frontend developer. Shipped features used by thousands, learned the value of clean code and good design.",
  },
  {
    year: "2023",
    title: "Going Independent",
    description: "Started freelancing, working with clients across industries to build products from scratch — from concept to launch.",
  },
  {
    year: "Now",
    title: "Building & Sharing",
    description: "Crafting polished web experiences, contributing to open source, and sharing what I learn with the community.",
  },
];

export default function About() {
  return (
    <section className="min-h-screen pt-28 pb-20 px-6 page-enter">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="reveal mb-14">
          <p className="text-accent-400 text-sm font-mono mb-3">01. About Me</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Who I Am
          </h1>
          <p className="text-ink-200 text-lg max-w-xl">
            Developer, designer, and lifelong learner — turning ideas into
            thoughtful digital experiences.
          </p>
        </div>

        {/* Bio + Quick Facts */}
        <div className="grid md:grid-cols-5 gap-10 md:gap-14 mb-20">
          <div className="md:col-span-3 reveal">
            {/* Portrait */}
            <div className="relative group mb-8">
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-br from-accent-500/15 to-accent-600/5 blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="relative w-full max-w-sm aspect-[4/3] rounded-2xl overflow-hidden border border-ink-600 group-hover:border-accent-500/30 transition-colors duration-500">
                <img
                  src="https://images.pexels.com/photos/31428193/pexels-photo-31428193.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Your Name"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/50 to-transparent" />
              </div>
            </div>

            <div className="space-y-4 text-ink-200 leading-relaxed text-[17px]">
              <p>
                Hello! I'm{" "}
                <span className="text-white font-medium">Your Name</span>, a
                developer and designer with a love for building things that live
                on the internet. My journey started with a simple curiosity about
                how websites work, and it quickly turned into a passion for
                creating polished, user-focused experiences.
              </p>
              <p>
                I specialize in building modern web applications using React,
                TypeScript, and a range of tools that help me ship fast and
                clean. Beyond code, I care deeply about design — typography,
                spacing, motion, and all the small details that make a product
                feel intentional.
              </p>
              <p>
                When I'm not at my desk, you'll find me exploring new design
                trends, contributing to open source, or chasing the perfect cup
                of coffee.
              </p>
            </div>

            {/* Highlights row */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { icon: Code, label: "Clean Code" },
                { icon: Sparkles, label: "Pixel Perfect" },
                { icon: Coffee, label: "Coffee Driven" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl bg-ink-800/50 border border-ink-600/40"
                  >
                    <Icon size={20} className="text-accent-400" />
                    <span className="text-xs text-ink-200 font-medium text-center">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick facts card */}
          <div className="md:col-span-2 reveal">
            <Card className="overflow-hidden">
              <CardContent className="p-6 space-y-0">
                <div className="flex items-center gap-2 text-accent-400 mb-5">
                  <Sparkles size={16} />
                  <span className="text-sm font-mono">Quick Facts</span>
                </div>
                {QUICK_FACTS.map((fact, i) => {
                  const Icon = fact.icon;
                  return (
                    <div
                      key={fact.label}
                      className="flex items-center justify-between gap-4 py-4 border-b border-ink-600/50 last:border-0 last:pb-0 first:pt-0"
                      style={{ transitionDelay: `${i * 60}ms` }}
                    >
                      <span className="text-ink-300 text-sm font-medium flex items-center gap-2">
                        {Icon && <Icon size={14} />}
                        {fact.label}
                      </span>
                      <span className="text-white text-sm text-right font-medium">
                        {fact.value}
                      </span>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Skills */}
        <div className="reveal mb-20">
          <h2 className="text-2xl font-bold text-white mb-8">
            Skills &amp; Tools
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {SKILL_GROUPS.map((group) => (
              <div key={group.category}>
                <p className="text-accent-400 text-xs font-mono mb-4 uppercase tracking-wider">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Journey timeline */}
        <div className="reveal mb-16">
          <h2 className="text-2xl font-bold text-white mb-2">My Journey</h2>
          <p className="text-ink-300 mb-10">
            A few milestones along the way.
          </p>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-2 bottom-2 w-px bg-ink-600/60" />
            <div className="space-y-8">
              {JOURNEY.map((item, i) => (
                <div
                  key={item.year}
                  className="reveal relative pl-14"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-ink-700 border-2 border-accent-500/40 flex items-center justify-center">
                    {i === JOURNEY.length - 1 ? (
                      <Rocket size={14} className="text-accent-400" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-accent-400" />
                    )}
                  </div>
                  <p className="text-accent-400 text-xs font-mono mb-1">
                    {item.year}
                  </p>
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-ink-200 text-[15px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="reveal text-center">
          <Button asChild size="lg">
            <Link to="/services">
              What I Can Do For You
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
