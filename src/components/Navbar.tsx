"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Menu", href: "/menu" },
    { name: "Our Story", href: "/story" },
    { name: "Gallery", href: "/gallery" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-lg border-b border-outline-variant/30 transition-all duration-300">
      <div className="flex justify-between items-center w-full container-custom py-6">
        <Link href="/" className="text-headline-sm font-headline-sm tracking-[0.15em] uppercase text-primary">
          Lumira
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-label-caps text-label-caps transition-colors ${
                  isActive
                    ? "text-primary border-b border-primary pb-1"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <Link 
          href="/reservations" 
          className="btn-primary hidden md:inline-flex"
        >
          Reserve a Table
        </Link>
        <button className="md:hidden text-primary flex items-center">
          <span className="material-symbols-outlined text-2xl">menu</span>
        </button>
      </div>
    </header>
  );
}
