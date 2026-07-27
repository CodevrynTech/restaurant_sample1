"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Menu", href: "/menu" },
    { name: "Our Story", href: "/story" },
    { name: "Gallery", href: "/gallery" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contact" },
  ];

  const isHomePage = pathname === "/";
  const isTransparent = isHomePage && !isScrolled;

  return (
    <>
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isTransparent ? "bg-transparent py-6" : "bg-background/95 backdrop-blur-lg border-b border-outline-variant/30 py-4"
    }`}>
      <div className="flex justify-between items-center w-full container-custom">
        {/* Logo */}
        <Link href="/" className={`text-xl md:text-2xl font-bold tracking-[0.15em] uppercase transition-colors z-50 ${isTransparent && !mobileMenuOpen ? 'text-white' : 'text-primary'}`}>
          Lumira
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-label-caps text-xs transition-colors ${
                  isActive
                    ? (isTransparent ? "text-white border-b border-white pb-1" : "text-primary border-b border-primary pb-1")
                    : (isTransparent ? "text-white/80 hover:text-white" : "text-on-surface-variant hover:text-primary")
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <Link 
          href="/reservations" 
          className={`font-label-caps text-xs px-6 py-3 transition-colors hidden md:inline-flex ${
            isTransparent 
              ? "bg-white text-primary hover:bg-gray-100"
              : "btn-primary" 
          }`}
        >
          Reserve a Table
        </Link>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden z-50 flex items-center justify-center p-2 transition-colors ${isTransparent && !mobileMenuOpen ? 'text-white' : 'text-primary'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>
    </header>
    
    {/* Mobile Nav Overlay (Moved outside header to escape backdrop-filter containing block) */}
    <div 
      className={`fixed inset-0 bg-background z-40 flex flex-col justify-center items-center gap-8 transition-transform duration-500 ease-in-out md:hidden ${
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {navLinks.map((link) => (
        <Link 
          key={link.name} 
          href={link.href}
          onClick={() => setMobileMenuOpen(false)}
          className={`text-3xl font-headline-md tracking-wide ${
            pathname === link.href ? "text-outline" : "text-on-surface"
          }`}
        >
          {link.name}
        </Link>
      ))}
      <Link 
        href="/reservations" 
        onClick={() => setMobileMenuOpen(false)}
        className="btn-primary mt-8 w-64 text-center text-sm tracking-[0.15em] py-4"
      >
        Reserve a Table
      </Link>
    </div>
    </>
  );
}
