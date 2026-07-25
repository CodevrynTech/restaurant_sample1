"use client";

import { useState } from "react";
import Image from "next/image";

type Category = "all" | "food" | "ambiance" | "process";

const galleryItems = [
  {
    id: 1,
    category: "food",
    title: "Culinary Art",
    src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2560"
  },
  {
    id: 2,
    category: "ambiance",
    title: "The Terrace",
    src: "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&q=80&w=2560"
  },
  {
    id: 3,
    category: "process",
    title: "The Garnish",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2560"
  },
  {
    id: 4,
    category: "food",
    title: "Pure Elements",
    src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=2560"
  },
  {
    id: 5,
    category: "ambiance",
    title: "Private Dining",
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=2560"
  },
  {
    id: 6,
    category: "process",
    title: "The Pour",
    src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=2560"
  }
];

export default function Gallery() {
  const [filter, setFilter] = useState<Category>("all");
  const [lightbox, setLightbox] = useState<{ src: string, title: string } | null>(null);

  const filteredItems = filter === "all" ? galleryItems : galleryItems.filter(item => item.category === filter);

  return (
    <div className="pt-24 md:pt-32 pb-24 md:pb-40">
      {/* Hero Header */}
      <section className="container-custom mb-16 md:mb-20 fade-in">
        <div className="max-w-3xl">
          <p className="text-label-caps font-label-caps text-secondary mb-4 uppercase tracking-[0.2em]">Visual Narrative</p>
          <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg mb-8">A Glimpse into Lumira</h1>
          <p className="text-body-lg text-on-surface-variant leading-relaxed">
            Explore the meticulous artistry and serene atmosphere of Lumira through a curated collection of moments captured in time.
          </p>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="container-custom mb-12 md:mb-16 border-b border-outline-variant pb-6">
        <div className="flex flex-wrap gap-8 items-center justify-center md:justify-start">
          {(["all", "food", "ambiance", "process"] as Category[]).map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-label-caps font-label-caps uppercase tracking-widest pb-2 transition-all ${
                filter === cat
                  ? "text-primary border-b-2 border-primary"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="container-custom">
        <div className="masonry-grid">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="masonry-item group cursor-zoom-in fade-in"
              onClick={() => setLightbox({ src: item.src, title: item.title })}
            >
              <div className="overflow-hidden relative">
                <img
                  className="w-full h-auto grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                  alt={item.title}
                  src={item.src}
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-4xl">add</span>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-end border-b border-outline-variant pb-2">
                <span className="text-label-caps font-label-caps uppercase">0{item.id}. {item.title}</span>
                <span className="text-label-caps font-label-caps text-secondary uppercase">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-24 md:mt-40 bg-surface-container section-padding text-center">
        <div className="max-w-2xl mx-auto px-margin-mobile">
          <h2 className="text-headline-md font-headline-md mb-8">Experience it for yourself.</h2>
          <button className="btn-primary">
            Reserve a Table
          </button>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightbox && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-8 bg-background/98 backdrop-blur-sm">
          <button
            className="absolute top-8 right-8 text-primary"
            onClick={() => setLightbox(null)}
          >
            <span className="material-symbols-outlined text-4xl">close</span>
          </button>
          <div className="max-w-5xl w-full h-full flex flex-col items-center justify-center">
            <img className="max-h-[80vh] w-auto shadow-2xl" src={lightbox.src} alt={lightbox.title} />
            <div className="mt-8 text-center">
              <span className="text-label-caps font-label-caps uppercase tracking-[0.3em] block mb-2 text-secondary">Gallery Detail</span>
              <h3 className="text-headline-sm font-headline-sm">{lightbox.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
