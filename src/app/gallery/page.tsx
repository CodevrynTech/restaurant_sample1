"use client";

import { useState } from "react";
import Image from "next/image";

type Category = "all" | "food" | "ambiance" | "process";

const galleryItems = [
  {
    id: 1,
    category: "food",
    title: "Culinary Art",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcS2CREFsRvhhcTB2H1nIEu1gMiorfaOrqO9m-cDO06VFIAUq7Ro5D2zwM3B_ILjQ_3yW_k05x5DU0pqNL7BPlEZ7TGzpP13SO-eVPvkfVEjlfibpfdV6YP3ABYVD5f6AGb07eOUpsGNml3FnHZmHv5YkZ2JxgP2L4TOhmRjf-8y17_NVa8qHUkYZzvF4-ylQOyHynb_KIo3JqZlePA5lcLVpvjdlDOqlrDOkbGvAdVp9F_1XB30GEX-ARFKTlHlscBE2mMrDnDMIb"
  },
  {
    id: 2,
    category: "ambiance",
    title: "The Terrace",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsKAqRMK1q41ta4Usn4ANKlqcQbMzHCe96aIXgpGQN8XlT9oZIbyKy5s2VlOredH2UdswwuEZuRh7jhoKz26VrTSJFJnTRJyBqI63YRp_XKUSDxv6b9kICJNydw0DK6FiGkDNFY_3QDnvXZZR8ayR7WpmXit89wVYNy1W1gUWTg9jB_6SCM0FpHSLueLBkD43jFXrCPSoj0GbP61vSKW9ppv-N_Q-CDr-yBoP-YwMXxeTFlppO8t2rG7_d6g7-TDD3ekuG3TALU92y"
  },
  {
    id: 3,
    category: "process",
    title: "The Garnish",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEYEsbxjsNISH_xlx1oDjjTHzgM_kW9UUWjQuJUBBdMp3z6wtbXGnxGnjSCgg41kx-uHRRWJ9K8pCm5bkoy4oWFyO_awNw43tSnfh8AquwTT7CmV3vt1mOVce5SgIaT_bV6reP0r6tdAmJCOvrEVpIjdLf5eVyCLE8mh50-ILsWUQBcO_O3uzCY5lJG-UOEsYpcPzkn4YUfog91HpawuAhtBFvcoy7wGdSpP4TeBURIMVDIBhlOvISKTI2AnK8n6_EPSJD5mwuTwb0"
  },
  {
    id: 4,
    category: "food",
    title: "Pure Elements",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFoVzwPEElueRalf82AlOHez6dSTt6wCd00Hyb2fqGtV5VaQYv7U4ZZIk-0BcHfQK5FDKSIwTqFUQw015ku4sUIdHICypqfBvtxSEoeMSiVf2zHu6l_CGs6HrCDpeUltciwt8w2TmQ4z-HOsSk7_rdYuQV_U8NVLWQrCcXB7b1bSRmmxQkJ5LpFA11LFhDOPGBUYWJIWCE8-y46UHQYrWmsrIloBkA_WnT-5e8aF61T0EcG7ZfFt8cdPJQ7YNUZAoarE3VXVZwHRkt"
  },
  {
    id: 5,
    category: "ambiance",
    title: "Private Dining",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBe27ZbArOWIOW7g14Wt_UEGhntzlfGe1dWyoF_6B3KaedLsu1LPFRm42IvVsm-HKx7a8QYtpX3wrYtY_vsBM9PhZLOjGI2SNVL4FyJrWDqPMoHHr23vglGkTC9CKQvrm2ZcO_YC83BXY0ahDnBQtIKOREl1zfjfIC3YIRD8XW5wR6cf5hQFPuVxBx576mURwXRulxiPBki0EDTBdkfVXPcitEZHOnW-VSMrmxNTfhFMcMY9E1U6jj6p9k2oCoepVlHWWrjTOFwoNeC"
  },
  {
    id: 6,
    category: "process",
    title: "The Pour",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuskV-xl26SUFycPeOcuDEimpwymLK65RaKfReBFocVXJp7wYbfX6ilsHxEix1sqj9_1TagZWjQC2dOqNFnfuelKdvcgtabQgiFliRVXZzjJOsg8Aj4F3sbmb5oPSucI2H8OKRDzT1U3MHKbth63oS3Wld-PQgRm8_c2fbj669ejvxYJoXvml35lMXnONUyklOLwxtZYKslRl6G9nY9w_UHUKJk1fOaZ-XS4YBhffvcBTuGnyarmYg5wWewxXvYQyOCDRUbXWm5CPd"
  }
];

export default function Gallery() {
  const [filter, setFilter] = useState<Category>("all");
  const [lightbox, setLightbox] = useState<{ src: string, title: string } | null>(null);

  const filteredItems = filter === "all" ? galleryItems : galleryItems.filter(item => item.category === filter);

  return (
    <div className="pt-24 md:pt-32 pb-24 md:pb-40">
      {/* Hero Header */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-16 md:mb-20 fade-in">
        <div className="max-w-3xl">
          <p className="text-label-caps font-label-caps text-secondary mb-4 uppercase tracking-[0.2em]">Visual Narrative</p>
          <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg mb-8">A Glimpse into Lumira</h1>
          <p className="text-body-lg text-on-surface-variant leading-relaxed">
            Explore the meticulous artistry and serene atmosphere of Lumira through a curated collection of moments captured in time.
          </p>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12 md:mb-16 border-b border-outline-variant pb-6">
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
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
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
