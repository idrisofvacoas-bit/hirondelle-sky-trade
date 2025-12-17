import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "Sustainability", path: "/sustainability" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="relative">
              <svg
                viewBox="0 0 40 40"
                className="w-10 h-10"
                fill="currentColor"
              >
                {/* Cloud behind */}
                <path 
                  d="M8 24 Q6 24 6 22 Q6 20 8 20 Q8 18 10 18 Q12 16 15 16 Q18 14 22 14 Q26 14 28 16 Q30 16 32 18 Q34 18 34 20 Q36 20 36 22 Q36 24 34 24 Z" 
                  className="text-primary/20"
                />
                {/* Swallow bird silhouette */}
                <path 
                  d="M8 22 Q12 20 16 21 L18 18 Q20 16 22 18 L24 21 Q28 20 32 22 Q28 21 24 22 L26 26 Q24 24 22 22 Q20 24 18 22 Q16 24 14 26 L16 22 Q12 21 8 22 Z M20 20 Q19 19 20 18 Q21 19 20 20 Z" 
                  className="text-primary"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-foreground leading-tight">
                Hirondelle
              </span>
              <span className="text-xs text-muted-foreground leading-tight">
                Trading Limited
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="hero" size="default" asChild>
              <Link to="/products">Shop Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="hero" className="mt-2" asChild>
                <Link to="/products" onClick={() => setIsOpen(false)}>
                  Shop Now
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
