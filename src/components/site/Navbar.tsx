import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-28 md:h-32 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="TOP3 VA Visibility Agency" className="h-24 md:h-28 w-auto" />
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#process" className="hover:text-primary transition-colors">Process</a>
          <a href="#why" className="hover:text-primary transition-colors">Why us</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
        <Button variant="hero" size="sm" asChild>
          <a href="#contact">Get Audit</a>
        </Button>
      </nav>
    </header>
  );
}