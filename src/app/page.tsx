"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    quote: "An absolute masterclass in restraint and flavor. Every dish felt like a personal invitation to the coast.",
    author: "Julianne Sterling, Condé Nast"
  },
  {
    quote: "Lumira redefines what it means to experience Mediterranean dining. The execution is flawless.",
    author: "Marcus Chen, Culinary Digest"
  },
  {
    quote: "The quiet luxury of the space is perfectly matched by the bold, intentional flavors of the menu.",
    author: "Elena Rossi, The Epicurean"
  }
];

export default function Home() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
    
    return () => revealElements.forEach((el) => revealObserver.unobserve(el));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center scale-105" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=2560')" }}
            title="A cinematic, wide-angle photograph of a luxury Mediterranean restaurant interior at dusk."
          ></div>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 overlay-dark pointer-events-none"></div>
        </div>
        <div className="relative z-10 text-center container-custom max-w-4xl pt-24">
          <h1 className="text-on-primary font-display-lg text-display-lg-mobile md:text-display-lg mb-6 reveal">
            The Art of Modern Mediterranean
          </h1>
          <p className="text-on-primary/90 font-body-lg text-body-lg mb-10 max-w-2xl mx-auto reveal" style={{ transitionDelay: "200ms" }}>
            A culinary journey through the flavors of the coast, reimagined for the discerning palate.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 reveal" style={{ transitionDelay: "400ms" }}>
            <Link href="/reservations" className="btn-primary w-full md:w-auto">
              Reserve a Table
            </Link>
            <Link href="/menu" className="btn-outline-white w-full md:w-auto">
              Explore the Menu
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-on-primary text-4xl">expand_more</span>
        </div>
      </section>

      {/* About Teaser */}
      <section className="section-padding container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
          <div className="reveal">
            <span className="text-label-caps text-outline block mb-4">Our Philosophy</span>
            <h2 className="text-headline-md font-headline-md mb-8">Crafting Memories Through Culinary Excellence</h2>
            <div className="space-y-6 text-on-surface-variant font-body-md">
              <p>At Lumira, we believe that dining is a form of artistry. Our philosophy is rooted in the deep-seated traditions of Mediterranean hospitality, updated with contemporary techniques and a minimalist aesthetic.</p>
              <p>We source only the finest seasonal ingredients, working directly with local artisans and fishermen to ensure every plate tells a story of the soil and the sea. Chef Marcelle Vance’s vision transforms these raw elements into an immersive sensory experience.</p>
            </div>
            <div className="mt-12">
              <Link href="/story" className="inline-flex items-center gap-2 group">
                <span className="text-label-caps border-b border-primary pb-1 group-hover:opacity-70 transition-opacity">Read Our Story</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="relative reveal" style={{ transitionDelay: "200ms" }}>
            <div 
              className="aspect-[4/5] bg-cover bg-center shadow-lg" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=2560')" }}
              title="A minimalist close-up shot of hand-selected seasonal ingredients on a rustic stone countertop."
            ></div>
            <div 
              className="absolute -bottom-8 -left-8 hidden md:block w-64 aspect-square bg-cover bg-center border-8 border-background" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=2560')" }}
              title="A macro photograph of fresh Mediterranean herbs being prepared."
            ></div>
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="bg-surface-container-low section-padding">
        <div className="container-custom">
          <div className="text-center mb-20 reveal">
            <span className="text-label-caps text-outline block mb-4">The Collection</span>
            <h2 className="text-headline-md font-headline-md">Signature Creations</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Dish 1 */}
            <div className="reveal group" style={{ transitionDelay: "100ms" }}>
              <div className="overflow-hidden mb-6 aspect-square bg-surface">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  alt="Seared Scallops" 
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2560" 
                />
              </div>
              <div className="flex items-baseline">
                <h3 className="font-headline-sm text-headline-sm">Seared Scallops</h3>
                <div className="dot-leader"></div>
                <span className="text-label-caps">38</span>
              </div>
              <p className="mt-4 text-on-surface-variant font-body-md italic">Saffron reduction, heritage carrots, puffed wild rice.</p>
            </div>
            
            {/* Dish 2 */}
            <div className="reveal group" style={{ transitionDelay: "200ms" }}>
              <div className="overflow-hidden mb-6 aspect-square bg-surface">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  alt="Iberico Pork Pressé" 
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=2560" 
                />
              </div>
              <div className="flex items-baseline">
                <h3 className="font-headline-sm text-headline-sm">Iberico Pork Pressé</h3>
                <div className="dot-leader"></div>
                <span className="text-label-caps">42</span>
              </div>
              <p className="mt-4 text-on-surface-variant font-body-md italic">Cured ham jus, truffle pomme purée, charred leeks.</p>
            </div>

            {/* Dish 3 */}
            <div className="reveal group" style={{ transitionDelay: "300ms" }}>
              <div className="overflow-hidden mb-6 aspect-square bg-surface">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  alt="Wild Mushroom Risotto" 
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2560" 
                />
              </div>
              <div className="flex items-baseline">
                <h3 className="font-headline-sm text-headline-sm">Wild Mushroom Risotto</h3>
                <div className="dot-leader"></div>
                <span className="text-label-caps">34</span>
              </div>
              <p className="mt-4 text-on-surface-variant font-body-md italic">Forest fungi, 24-month aged parmesan, herb oil.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row-reverse items-center gap-16 md:gap-32">
            <div className="w-full md:w-1/2 reveal">
              <span className="text-label-caps text-outline block mb-4">Culinary Vision</span>
              <h2 className="text-headline-md font-headline-md mb-8">Chef de Cuisine, Marcelle Vance</h2>
              <p className="text-body-lg text-on-surface-variant mb-6 leading-relaxed">
                With over two decades of experience in Michelin-starred kitchens across the Mediterranean coast, Marcelle Vance brings a rare blend of technical precision and poetic intuition to Lumira. 
              </p>
              <p className="text-body-md text-on-surface-variant mb-10 leading-relaxed">
                &quot;The ingredient is the master; I am merely the translator,&quot; says Vance. Her approach is reductive—stripping away the unnecessary to reveal the soul of each flavor. Every dish at Lumira is a testament to this pursuit of purity and elegance.
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-px bg-outline-variant"></div>
                <span className="italic font-headline-sm">M. Vance</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 reveal" style={{ transitionDelay: "200ms" }}>
              <div className="relative">
                <img 
                  className="w-full shadow-2xl" 
                  alt="Chef Marcelle Vance" 
                  src="https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&q=80&w=2560" 
                />
                <div className="absolute inset-0 border border-primary/10 translate-x-4 translate-y-4 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dining Experience */}
      <section className="section-padding bg-primary-container text-on-primary">
        <div className="container-custom">
          <div className="text-center mb-20 reveal">
            <span className="text-label-caps text-on-primary-container block mb-4">The Atmosphere</span>
            <h2 className="text-headline-md font-headline-md text-white">Curated Spaces</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative aspect-video overflow-hidden reveal">
              <img 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 group-hover:opacity-100" 
                alt="The Coastal Terrace" 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2560" 
              />
              <div className="absolute inset-0 overlay-dark pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                <h4 className="text-headline-sm text-white mb-2">The Coastal Terrace</h4>
                <p className="text-sm opacity-80">Al fresco dining with a breeze of the Mediterranean.</p>
              </div>
            </div>
            <div className="group relative aspect-video overflow-hidden reveal" style={{ transitionDelay: "200ms" }}>
              <img 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 group-hover:opacity-100" 
                alt="The Private Lounge" 
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=2560" 
              />
              <div className="absolute inset-0 overlay-dark pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                <h4 className="text-headline-sm text-white mb-2">The Private Lounge</h4>
                <p className="text-sm opacity-80">An intimate retreat for discerning conversations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white text-center">
        <div className="container-custom max-w-3xl mx-auto reveal-section">
          <span className="material-symbols-outlined text-outline text-4xl mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
          <div className="relative overflow-hidden h-48" id="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentTestimonialIndex ? 'opacity-100' : 'opacity-0'}`}
              >
                <p className="text-headline-sm font-headline-sm italic mb-6">&quot;{testimonial.quote}&quot;</p>
                <span className="text-label-caps text-outline">— {testimonial.author}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${index === currentTestimonialIndex ? 'bg-primary' : 'bg-outline-variant'}`}
                onClick={() => setCurrentTestimonialIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="section-padding-bottom container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 reveal">
          <div className="md:col-span-8 h-[400px] bg-surface relative">
            <img 
              className="w-full h-full object-cover" 
              alt="Monaco Location Map" 
              src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=2560" 
            />
          </div>
          <div className="md:col-span-4 bg-surface-container p-12 flex flex-col justify-between">
            <div>
              <h3 className="text-headline-sm font-headline-sm mb-6">Contact Us</h3>
              <p className="font-body-md text-on-surface-variant mb-2">12 Quai Antoine 1er</p>
              <p className="font-body-md text-on-surface-variant mb-8">98000 Monaco</p>
              <p className="font-body-md text-on-surface-variant mb-2">T: +377 98 06 20 00</p>
              <p className="font-body-md text-on-surface-variant">E: reservations@lumira.com</p>
            </div>
            <div className="mt-12">
              <h4 className="text-label-caps text-outline mb-4">Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span>Mon – Thu</span><span>18:00 – 23:00</span></div>
                <div className="flex justify-between"><span>Fri – Sat</span><span>18:00 – 00:00</span></div>
                <div className="flex justify-between"><span>Sunday</span><span>Closed</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
