import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Clock,
  Send,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SOCIALS = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
    external: false,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@yourusername",
    href: "https://github.com",
    external: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Your Name",
    href: "https://linkedin.com",
    external: true,
  },
];

const INFO_ITEMS = [
  { icon: MapPin, label: "Location", value: "Your City, Country" },
  { icon: Clock, label: "Response Time", value: "Within 24 hours" },
  { icon: Mail, label: "Email", value: "hello@example.com" },
];

export default function Contact() {
  return (
    <section className="min-h-screen flex items-center pt-28 pb-20 px-6 page-enter">
      <div className="max-w-5xl mx-auto w-full">
        {/* Header */}
        <div className="reveal text-center mb-14">
          <p className="text-accent-400 text-sm font-mono mb-3">03. Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Work Together
          </h1>
          <p className="text-ink-200 text-lg max-w-xl mx-auto">
            Have a project in mind or just want to say hi? My inbox is always
            open. I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6 md:gap-8">
          {/* Left: Info + socials */}
          <div className="md:col-span-2 space-y-4 reveal">
            {/* Info card */}
            <Card>
              <CardContent className="p-6 space-y-5">
                <h3 className="text-white font-semibold text-lg">Get in touch</h3>
                {INFO_ITEMS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 pb-4 border-b border-ink-600/50 last:border-0 last:pb-0"
                    >
                      <div className="w-9 h-9 flex items-center justify-center bg-accent-500/10 rounded-lg flex-shrink-0">
                        <Icon size={16} className="text-accent-400" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-ink-400 text-xs font-medium uppercase tracking-wide">
                          {item.label}
                        </p>
                        <p className="text-white text-sm font-medium truncate">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Socials */}
            <div className="space-y-3">
              <p className="text-ink-300 text-sm font-medium pl-1">
                Find me on
              </p>
              <div className="grid grid-cols-3 gap-3">
                {SOCIALS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.external ? "_blank" : undefined}
                      rel={social.external ? "noopener noreferrer" : undefined}
                      className="group flex flex-col items-center gap-2 p-4 rounded-xl border border-ink-600 hover:border-accent-500/40 hover:bg-accent-500/5 transition-all duration-300"
                    >
                      <Icon
                        size={22}
                        className="text-ink-200 group-hover:text-accent-400 transition-colors"
                      />
                      <span className="text-xs text-ink-300 group-hover:text-white transition-colors font-medium">
                        {social.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Contact form card */}
          <div className="md:col-span-3 reveal">
            <Card className="h-full">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-white font-semibold text-lg mb-1">
                  Send a message
                </h3>
                <p className="text-ink-300 text-sm mb-6">
                  Fill out the form below and I'll get back to you soon.
                </p>

                <form
                  action="mailto:hello@example.com"
                  method="post"
                  encType="text/plain"
                  className="space-y-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-ink-200 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        className="w-full h-11 px-4 rounded-lg bg-ink-800 border border-ink-600 text-white placeholder:text-ink-400 focus:outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/15 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink-200 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        className="w-full h-11 px-4 rounded-lg bg-ink-800 border border-ink-600 text-white placeholder:text-ink-400 focus:outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/15 transition-all text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink-200 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Project inquiry"
                      className="w-full h-11 px-4 rounded-lg bg-ink-800 border border-ink-600 text-white placeholder:text-ink-400 focus:outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/15 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink-200 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 rounded-lg bg-ink-800 border border-ink-600 text-white placeholder:text-ink-400 focus:outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/15 transition-all text-sm resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full glow-sm">
                    <Send size={16} />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
