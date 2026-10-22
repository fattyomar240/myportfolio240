import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Email", href: "mailto:hello@example.com" },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-ink-600/30 py-10 px-6 bg-ink-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link
              to="/"
              className="text-base font-bold tracking-tight text-white hover:text-accent-400 transition-colors"
            >
              Portfolio<span className="text-accent-500">.</span>
            </Link>
            <p className="text-ink-400 text-xs">
              &copy; {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-ink-300 hover:text-accent-400 transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={scrollTop}
            className="group flex items-center gap-2 text-ink-200 hover:text-accent-400 transition-colors text-sm font-medium"
          >
            Back to top
            <span className="w-8 h-8 rounded-lg border border-ink-500 flex items-center justify-center group-hover:border-accent-400 group-hover:bg-accent-500/5 transition-all">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
