import { Link } from "react-router-dom";
import { Home as HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 page-enter">
      <div className="text-center">
        <p className="text-8xl md:text-9xl font-extrabold text-gradient mb-4">
          404
        </p>
        <h1 className="text-2xl font-bold text-white mb-3">Page not found</h1>
        <p className="text-ink-200 mb-8 max-w-sm mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild>
          <Link to="/">
            <HomeIcon size={16} />
            Back to Home
          </Link>
        </Button>
      </div>
    </section>
  );
}
