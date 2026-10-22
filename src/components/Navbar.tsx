import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-ink-900/80 backdrop-blur-xl border-b border-ink-600/40 h-14"
          : "bg-transparent h-16"
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        <Link
          to="/"
          className="group flex items-center gap-2 text-base font-bold tracking-tight text-white"
        >
          <span className="w-8 h-8 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center text-accent-400 text-sm group-hover:bg-accent-500/20 transition-all duration-300">
            Y
          </span>
          <span className="group-hover:text-accent-400 transition-colors">
            Portfolio<span className="text-accent-500">.</span>
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map((link, i) => {
            const isActive =
              link.to === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(link.to);
            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 group",
                    isActive ? "text-accent-400" : "text-ink-200 hover:text-white"
                  )}
                >
                  <span className="text-accent-500/50 text-[10px] mr-1.5 font-mono">
                    0{i + 1}
                  </span>
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-4 right-4 h-px bg-accent-400 origin-left transition-transform duration-300",
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    )}
                  />
                </Link>
              </li>
            );
          })}
          <li className="ml-3">
            <Button asChild size="sm" className="glow-sm">
              <Link to="/contact">Hire Me</Link>
            </Button>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-ink-100 p-2 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-ink-800/95 backdrop-blur-xl border-b border-ink-600/40 animate-slide-down">
          <ul className="px-6 py-4 space-y-1">
            {NAV_LINKS.map((link, i) => {
              const isActive =
                link.to === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(link.to);
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={cn(
                      "flex items-center py-3 px-3 text-base font-medium rounded-lg transition-colors",
                      isActive
                        ? "text-accent-400 bg-accent-500/5"
                        : "text-ink-100 hover:text-white hover:bg-ink-700/50"
                    )}
                  >
                    <span className="text-accent-500/50 text-xs mr-3 font-mono">
                      0{i + 1}.
                    </span>
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <Button asChild className="w-full">
                <Link to="/contact">Hire Me</Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
