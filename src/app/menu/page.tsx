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
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-16 md:mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-label-caps font-label-caps text-on-surface-variant mb-4 block">SEASONAL CURATION</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6">The Menu</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              A sensory journey through the Mediterranean coast, where ancestral techniques meet modern refinement. Our autumn selection prioritizes harvest-fresh ingredients and the delicate interplay of sea and soil.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <nav className="sticky top-[72px] z-40 bg-background/90 backdrop-blur-md border-y border-outline-variant py-4 mb-16 md:mb-20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-center gap-6 md:gap-16 overflow-x-auto whitespace-nowrap hide-scrollbar">
          {['starters', 'mains', 'desserts', 'wine'].map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              className={`text-label-caps font-label-caps transition-all ${
                activeSection === section ? "text-primary font-bold" : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {section === 'wine' ? 'Wine List' : section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      </nav>

      {/* Starters Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-24 md:mb-32 reveal" id="starters">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
          <div className="md:col-span-4 sticky top-40">
            <h2 className="font-headline-md text-headline-md mb-4">Starters</h2>
            <p className="text-on-surface-variant font-body-md mb-8">Delicate bites to awaken the palate, inspired by the sun-drenched gardens of Provence.</p>
            <div className="hidden md:block w-full h-[400px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                className="w-full h-full object-cover" 
                alt="Burrata with Heirloom Tomatoes" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTs_nr1gWhwb7PPq0-M-TdHY65wDO9nRJOj1up_qQkUdywlBv3eZhqlp50izvGKy4CQl4bwl5k-rSUC1jXA-v3EVSzE89mUdvLq9fBxVtjILb16UWuq9SKwIWgwnt6fp84mZP3_X6iRFd9cgDHNNTuT0LHBOPet1g8Zvo_6a3fapp2MGhi0PfditGD9Dr5KgkX6qqolQMwvKEpWGeE1Ek7s51AG3sKkwedNVY6wUv1kPjgeLhyfINg5N0SZ6B5xN_TKOOLiT1yERin" 
              />
            </div>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-12">
            {[
              { name: "Burrata with Heirloom Tomatoes", price: "$18", desc: "Creamy Puglia burrata, balsamic reduction, basil oil, and fleur de sel." },
              { name: "Beef Carpaccio", price: "$22", desc: "Paper-thin wagyu beef, aged parmesan shavings, wild arugula, and truffle emulsion." },
              { name: "Crispy Artichokes", price: "$16", desc: "Flash-fried Roman artichokes served with a zesty lemon-garlic aioli." }
            ].map((item, i) => (
              <div className={`group ${i === 2 ? 'border-b border-outline-variant pb-12' : ''}`} key={item.name}>
                <div className="flex items-end mb-2">
                  <span className="font-headline-sm text-headline-sm">{item.name}</span>
                  <div className="dot-leader"></div>
                  <span className="font-body-md text-on-surface-variant">{item.price}</span>
                </div>
                <p className="text-on-surface-variant font-body-md max-w-md italic">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Courses Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-24 md:mb-32 reveal" id="mains">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
          <div className="md:col-span-7 space-y-12 order-2 md:order-1">
            {[
              { name: "Pan-Seared Sea Bass", price: "$42", desc: "Wild-caught bass, braised fennel, saffron reduction, and herb-crushed potatoes." },
              { name: "Aged Ribeye with Truffle Butter", price: "$58", desc: "45-day dry-aged beef, black truffle compound butter, and charred asparagus." },
              { name: "Handmade Saffron Tagliatelle", price: "$34", desc: "Fresh egg pasta, hand-picked saffron filaments, lobster medallions, and chive blossoms." }
            ].map((item, i) => (
              <div className={`group ${i === 2 ? 'border-b border-outline-variant pb-12' : ''}`} key={item.name}>
                <div className="flex items-end mb-2">
                  <span className="font-headline-sm text-headline-sm">{item.name}</span>
                  <div className="dot-leader"></div>
                  <span className="font-body-md text-on-surface-variant">{item.price}</span>
                </div>
                <p className="text-on-surface-variant font-body-md max-w-md italic">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="md:col-span-4 md:col-start-9 order-1 md:order-2 sticky top-40 mb-12 md:mb-0">
            <h2 className="font-headline-md text-headline-md mb-4">Main Courses</h2>
            <p className="text-on-surface-variant font-body-md mb-8">The heart of our kitchen. Sustenance reimagined through the lens of coastal elegance.</p>
            <div className="w-full h-[500px] overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-1000 hover:scale-105" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCGrUhdDKOQny1kFbIt1qYxfkmW2PvjXgcwWr7lexo50C6zOQUUtFt9BtBIlKohtwa0gSO7Fz2SBUZw31trBjksAgpm4cKwp8QQujppho2YMhWfBRcY1IeFNWWcPtevTru1mDywSV7lWAgALeLzC_SkPZFO63JXf3vKuCzJMd0cuzdg8fHivUWrk4N2kUez3WiprUGJMHOaVY_E-tD4qMRglEBAkJXMUPojsZOlb3KZlJczGfwG99iR7xMCr6kvV_5qBhKGJT6UgB0t')" }}
                title="Aged ribeye steak"
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Desserts Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-24 md:mb-32 reveal" id="desserts">
        <div className="text-center mb-20">
          <h2 className="font-headline-md text-headline-md mb-4">Desserts</h2>
          <p className="text-on-surface-variant font-body-md max-w-lg mx-auto">A final, lingering note of sweetness to conclude the Lumira experience.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="text-center group">
            <div className="w-full aspect-[4/3] overflow-hidden mb-8">
              <img 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                alt="Dark Chocolate Fondant" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEOBsUirC3xan1t2jdCPbtk-XL1dnBLVjwCydKDXsNdU_t1ANcdPC-_ScDTx6ZnxeKNzRwyZi1mA_ayP2MvIbpaNdeQss2AnHGOfMKiJLqG20DeVCRQzm8mvmfrDCOeU8eM9bEWy686Ald-pDEBsj21wYroOnAbrHJJhosbC55KTiIUAkukRBPFEmUnBY646jkwoeT7yL2tk9ZJrut-3CXTqtqofSnj8GkQvyAp4rrlU0vYB_OHpty_6_5938wv7XWLc08IWBS65UB" 
              />
            </div>
            <div className="flex items-end mb-2 w-full max-w-md mx-auto">
              <span className="font-headline-sm text-headline-sm">Dark Chocolate Fondant</span>
              <div className="dot-leader"></div>
              <span className="font-body-md text-on-surface-variant">$14</span>
            </div>
            <p className="text-on-surface-variant font-body-md italic mt-2">70% single-origin cocoa, Madagascar vanilla bean gelato.</p>
          </div>
          <div className="text-center group">
            <div className="w-full aspect-[4/3] overflow-hidden mb-8">
              <img 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                alt="Lemon Verbena Sorbet" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiKWm5VJdgipjVohhNozJHGaWLS9Z7JM7ZVszHovW5XosJ2JdiNmbSJFSieCWIHVylcro76cNVUmIgb4vJmaPoQ2PYGg4qyd1sqYvwda-HUOKLAtYa_YIXqJhnBPwAqGNap08NPguzFoE21BN7Hd4GfEYywQeIQQlAHgWXCqQl_jYRmTwZo43X2Sq9zBR2J3jUPU_m7XUcpAJgPQtsoF0LWJfyFqYhEZAdIohdsnamQ8HhnwptwMW0KQ0E7f1oldwHhnq3RKMdLtS5" 
              />
            </div>
            <div className="flex items-end mb-2 w-full max-w-md mx-auto">
              <span className="font-headline-sm text-headline-sm">Lemon Verbena Sorbet</span>
              <div className="dot-leader"></div>
              <span className="font-body-md text-on-surface-variant">$12</span>
            </div>
            <p className="text-on-surface-variant font-body-md italic mt-2">Zesty local lemons, infused verbena, and citrus lace.</p>
          </div>
        </div>
      </section>

      {/* Wine List CTA */}
      <section className="bg-surface-container section-padding reveal" id="wine">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <span className="text-label-caps font-label-caps text-on-surface-variant mb-6 block">SOMMELIER'S SELECTION</span>
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-8 italic">The Wine List</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
            Pair your meal with a selection from our cellar. From rare vintages to contemporary biodynamic discoveries, our collection is curated to elevate every flavor profile.
          </p>
          <button className="btn-secondary">
            Explore the Cellar
          </button>
        </div>
      </section>
    </div>
  );
}
