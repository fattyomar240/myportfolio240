import {
  Code,
  Layout,
  Smartphone,
  Zap,
  Palette,
  Search,
  ArrowRight,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SERVICES = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Building fast, accessible, and scalable web applications with modern frameworks and clean, maintainable code.",
    features: ["React & Next.js", "TypeScript", "API Integration", "Testing"],
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description:
      "Designing intuitive interfaces and seamless user journeys that balance aesthetics with real usability.",
    features: ["Wireframing", "Prototyping", "Design Systems", "User Flows"],
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Ensuring every product looks and works flawlessly across all devices, from large desktops to small phones.",
    features: ["Mobile First", "Cross-Browser", "Touch Optimized", "PWA"],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Speeding up slow sites with smart caching, code splitting, and asset optimization for a snappy experience.",
    features: ["Core Web Vitals", "Bundle Analysis", "Lazy Loading", "CDN Setup"],
  },
  {
    icon: Palette,
    title: "Brand & Visual Design",
    description:
      "Crafting cohesive visual identities — color systems, typography, and components that feel uniquely yours.",
    features: ["Color Systems", "Typography", "Logo & Identity", "Guidelines"],
  },
  {
    icon: Search,
    title: "SEO & Analytics",
    description:
      "Helping your site get found with proper meta tags, semantic markup, and clean, crawlable structure.",
    features: ["Meta Tags", "Sitemaps", "Schema Markup", "Analytics Setup"],
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Discover",
    description: "We talk about your goals, audience, and vision. I ask questions, listen, and map out the path forward.",
  },
  {
    step: "02",
    title: "Design",
    description: "I craft wireframes and mockups, iterating with your feedback until every screen feels right.",
  },
  {
    step: "03",
    title: "Build",
    description: "Clean, modern code brings the designs to life — fast, responsive, and accessible from day one.",
  },
  {
    step: "04",
    title: "Launch",
    description: "We deploy, test, and polish. Then your product goes live, ready for the world to see.",
  },
];

export default function Services() {
  return (
    <section className="min-h-screen pt-28 pb-20 px-6 page-enter">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="reveal mb-14">
          <p className="text-accent-400 text-sm font-mono mb-3">02. Services</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What I Can Do For You
          </h1>
          <p className="text-ink-200 text-lg max-w-lg">
            From concept to launch, I offer a full range of services to bring
            your digital product to life.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="reveal group hover:border-accent-500/30 hover:-translate-y-1 transition-all duration-400"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-accent-500/10 rounded-xl mb-5 group-hover:bg-accent-500/20 group-hover:scale-110 transition-all duration-300">
                    <Icon size={22} className="text-accent-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-ink-200 text-[15px] leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-1.5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-ink-300"
                      >
                        <Check size={14} className="text-accent-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Process section */}
        <div className="reveal mb-16">
          <div className="text-center mb-12">
            <p className="text-accent-400 text-sm font-mono mb-3">How It Works</p>
            <h2 className="text-3xl font-bold text-white">My Process</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROCESS.map((phase, i) => (
              <div
                key={phase.step}
                className="reveal relative"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="bg-ink-800/50 border border-ink-600/40 rounded-2xl p-6 h-full hover:border-accent-500/20 transition-colors duration-300">
                  <p className="text-4xl font-extrabold text-ink-600 mb-3">
                    {phase.step}
                  </p>
                  <h3 className="text-white font-semibold mb-2">{phase.title}</h3>
                  <p className="text-ink-200 text-sm leading-relaxed">
                    {phase.description}
                  </p>
                </div>
                {i < PROCESS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 text-ink-600 z-10">
                    <ArrowRight size={16} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="reveal text-center">
          <p className="text-ink-200 mb-5">Ready to start your next project?</p>
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
