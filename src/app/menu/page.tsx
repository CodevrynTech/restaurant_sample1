"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Menu() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Reveal on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible", "active"); // Added active for the global class too
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal, .reveal-on-scroll").forEach((el) => observer.observe(el));

    // Smooth nav tracking
    const handleScroll = () => {
      const sections = ["starters", "mains", "desserts", "wine"];
      let current = "";
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const sectionTop = element.offsetTop;
          if (window.scrollY >= sectionTop - 150) {
            current = section;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.querySelectorAll(".reveal, .reveal-on-scroll").forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="container-custom mb-16 md:mb-24 reveal-section">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <span className="text-label-caps font-label-caps text-on-surface-variant mb-6 block tracking-[0.2em]">SEASONAL CURATION</span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-8 italic">The Menu</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            A sensory journey through the Mediterranean coast, where ancestral techniques meet modern refinement. Our autumn selection prioritizes harvest-fresh ingredients and the delicate interplay of sea and soil.
          </p>
        </div>
      </section>

      {/* Quick Navigation - Sticky & Editorial */}
      <nav className="sticky top-[89px] z-40 bg-background/95 backdrop-blur-md border-y border-outline-variant/30 py-6 mb-16 md:mb-24 shadow-sm">
        <div className="container-custom flex justify-center gap-8 md:gap-16 overflow-x-auto whitespace-nowrap hide-scrollbar">
          {['starters', 'mains', 'desserts', 'wine'].map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              className={`text-label-caps font-label-caps uppercase tracking-widest transition-all ${
                activeSection === section ? "text-primary border-b border-primary pb-1" : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {section === 'wine' ? 'Wine List' : section}
            </Link>
          ))}
        </div>
      </nav>

      {/* Starters Section */}
      <section className="container-custom mb-24 md:mb-32 reveal-section" id="starters">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky top-48">
            <h2 className="font-headline-md text-headline-md mb-6 italic">Starters</h2>
            <p className="text-on-surface-variant font-body-md leading-relaxed mb-10 max-w-md">Delicate bites to awaken the palate, inspired by the sun-drenched gardens of Provence.</p>
            <div className="w-full aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-[2000ms]">
              <img 
                className="w-full h-full object-cover" 
                alt="Burrata with Heirloom Tomatoes" 
                src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&q=80&w=2560" 
              />
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-16 mt-8 lg:mt-0">
            {[
              { name: "Burrata with Heirloom Tomatoes", price: "18", desc: "Creamy Puglia burrata, balsamic reduction, basil oil, and fleur de sel." },
              { name: "Beef Carpaccio", price: "22", desc: "Paper-thin wagyu beef, aged parmesan shavings, wild arugula, and truffle emulsion." },
              { name: "Crispy Artichokes", price: "16", desc: "Flash-fried Roman artichokes served with a zesty lemon-garlic aioli." },
              { name: "Tuna Tartare", price: "24", desc: "Yellowfin tuna, avocado mousse, micro-cilantro, and a light citrus ponzu dressing." }
            ].map((item, i) => (
              <div className="group border-b border-outline-variant/30 pb-10" key={item.name}>
                <div className="flex justify-between items-baseline mb-4">
                  <span className="font-headline-sm text-headline-sm tracking-wide">{item.name}</span>
                  <span className="font-label-caps text-label-caps tracking-widest text-on-surface-variant ml-4">${item.price}</span>
                </div>
                <p className="text-on-surface-variant font-body-md leading-relaxed italic max-w-md">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Courses Section */}
      <section className="container-custom mb-24 md:mb-32 reveal-section" id="mains">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-6 space-y-16 order-2 lg:order-1 mt-8 lg:mt-0">
            {[
              { name: "Pan-Seared Sea Bass", price: "42", desc: "Wild-caught bass, braised fennel, saffron reduction, and herb-crushed potatoes." },
              { name: "Aged Ribeye with Truffle Butter", price: "58", desc: "45-day dry-aged beef, black truffle compound butter, and charred asparagus." },
              { name: "Handmade Saffron Tagliatelle", price: "34", desc: "Fresh egg pasta, hand-picked saffron filaments, lobster medallions, and chive blossoms." },
              { name: "Roasted Duck Breast", price: "46", desc: "Crispy skin duck, cherry gastrique, parsnip purée, and butter-braised endives." }
            ].map((item, i) => (
              <div className="group border-b border-outline-variant/30 pb-10" key={item.name}>
                <div className="flex justify-between items-baseline mb-4">
                  <span className="font-headline-sm text-headline-sm tracking-wide">{item.name}</span>
                  <span className="font-label-caps text-label-caps tracking-widest text-on-surface-variant ml-4">${item.price}</span>
                </div>
                <p className="text-on-surface-variant font-body-md leading-relaxed italic max-w-md">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="lg:col-span-5 lg:col-start-8 lg:sticky top-48 order-1 lg:order-2">
            <h2 className="font-headline-md text-headline-md mb-6 italic">Main Courses</h2>
            <p className="text-on-surface-variant font-body-md leading-relaxed mb-10 max-w-md">The heart of our kitchen. Sustenance reimagined through the lens of coastal elegance.</p>
            <div className="w-full aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-[2000ms]">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-[10000ms] hover:scale-110" 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2560')" }}
                title="Aged ribeye steak"
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Desserts Section */}
      <section className="container-custom mb-24 md:mb-32 reveal-section" id="desserts">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-headline-md text-headline-md mb-6 italic">Desserts</h2>
          <p className="text-on-surface-variant font-body-md leading-relaxed">A final, lingering note of sweetness to conclude the Lumira experience.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div className="text-center group">
            <div className="w-full aspect-square overflow-hidden mb-8">
              <img 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2000ms]" 
                alt="Dark Chocolate Fondant" 
                src="https://images.unsplash.com/photo-1414235077428-338988a2e8c0?auto=format&fit=crop&q=80&w=2560" 
              />
            </div>
            <div className="flex justify-between items-baseline mb-4 w-full max-w-sm mx-auto border-b border-outline-variant/30 pb-4">
              <span className="font-headline-sm text-headline-sm tracking-wide">Dark Chocolate Fondant</span>
              <span className="font-label-caps text-label-caps tracking-widest text-on-surface-variant">14</span>
            </div>
            <p className="text-on-surface-variant font-body-md italic mt-4 max-w-sm mx-auto">70% single-origin cocoa, Madagascar vanilla bean gelato.</p>
          </div>
          <div className="text-center group">
            <div className="w-full aspect-square overflow-hidden mb-8">
              <img 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2000ms]" 
                alt="Lemon Verbena Sorbet" 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=2560" 
              />
            </div>
            <div className="flex justify-between items-baseline mb-4 w-full max-w-sm mx-auto border-b border-outline-variant/30 pb-4">
              <span className="font-headline-sm text-headline-sm tracking-wide">Lemon Verbena Sorbet</span>
              <span className="font-label-caps text-label-caps tracking-widest text-on-surface-variant">12</span>
            </div>
            <p className="text-on-surface-variant font-body-md italic mt-4 max-w-sm mx-auto">Zesty local lemons, infused verbena, and citrus lace.</p>
          </div>
        </div>
      </section>

      {/* Wine List CTA */}
      <section className="bg-surface-container section-padding reveal-section" id="wine">
        <div className="container-custom text-center">
          <span className="text-label-caps font-label-caps tracking-widest text-on-surface-variant mb-6 block uppercase">Sommelier's Selection</span>
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-8 italic">The Wine List</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-2xl mx-auto mb-12">
            Pair your meal with a selection from our cellar. From rare vintages to contemporary biodynamic discoveries, our collection is curated to elevate every flavor profile.
          </p>
          <Link href="/reservations" className="btn-secondary">
            Reserve a Table
          </Link>
        </div>
      </section>
    </div>
  );
}
