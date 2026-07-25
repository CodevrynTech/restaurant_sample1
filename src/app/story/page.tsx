"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Story() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax effect for hero
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.4}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal-section").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[870px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            ref={heroRef}
            className="w-full h-[120%] -top-[10%] relative bg-cover bg-center" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuASMUPJ0DW0DznfyNjpRKZSt75LnhbBNKlMB69ZLP3mueJPHtrJsiAKbxq5fsbScZGOAMMI6XDaSA4IyK092xWKIkmVBZTL2OfMtlufi1aD8Ym4eAL5oUDmGeURRvbFmuN38Rl6mGE4Hqy6AWlzjqAKV5wHIHCpZCU5ldLw2orNmCc0DU7zDUB_9caHeIkEnuFlt0DAy2TAxntou0XkGjm3skPthK5m56Y47XE9rpBUu-oqJIhAClnFdlTCDkDWLighD1TqelUbFgnp')" }}
            title="Kitchen team in motion"
          ></div>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 overlay-dark"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-margin-mobile">
          <span className="text-white text-label-caps font-label-caps tracking-widest mb-4 fade-in">Our Philosophy</span>
          <h1 className="text-white font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg italic fade-in" style={{ animationDelay: "0.2s" }}>
            Crafted with Passion
          </h1>
        </div>
      </section>

      {/* The Lumira Story */}
      <section className="section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden reveal-section opacity-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-5 mb-12 md:mb-0">
            <h2 className="font-headline-md text-headline-md mb-8">The Lumira Story</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
              Born on the rugged cliffs of a forgotten coastal village, Lumira began as a modest hearth for local fishermen. It was here that we learned the language of the seasons—how the salt air flavors the wild thyme and how the morning catch dictates the evening menu.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Our evolution from a seaside sanctuary to a culinary destination has been guided by a single principle: reverence. We honor the heritage of Mediterranean technique while embracing the clarity of modern minimalism, creating a space where time slows down and every flavor tells a story of the land and sea.
            </p>
          </div>
          <div className="md:col-start-7 md:col-span-6 relative">
            <div 
              className="aspect-[4/5] w-full bg-cover bg-center shadow-sm" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCNCNg5-B-B5G6UfNVILaATCPrSKpr9Bt1gjdRqAbOTMaW-wRAo1FZwjryQ8sbhW5_JXT_IZJRzXShnk8j54khZzkjZ_pd3ES77XOdsAgnCQxC1MUFFfhEEgCl0s7IzxUkOuYx6DI8yykNbCxaUJyj1NQ1OgBnptMLmH1bcznMG0Zqdrr7B_zxjGsFcC5N25DoW6bqT-YR8JizTHsSBl_3VTFfYHEGoqjQwcOWODJxcq1M2cuJcUiIKgPLAPmAQAks2YeFs6MJ7h-g8')" }}
              title="Mediterranean coastal village"
            ></div>
            <div className="absolute -bottom-8 -left-8 md:-left-16 w-1/2 hidden md:block">
              <div 
                className="aspect-square bg-cover bg-center border-[8px] border-background" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCBioMZ0ltuMb5otylequBS18CusTFo1fAuHwph4YoNMWT2gLijDF0fajf_OYv9vmprCr_cajTE7P5jIPRgsWXcB-pmIwi2jUfC8QAwvwpmeJ_WyEoV7sw95zJtIpMCC1qrv12QHv1gB8CUTS0PwpetICKIJCaIRGLzTmBRQxlM-V5lOIKwOZnUwve--LIedBeDR1C1xXKy8HNGknnUhTsj-Y9bonc7DsDR9ndAXcbaTOn0xEu5OSDMb7xEvquZTwYEb1hlp-Vcc0by')" }}
                title="Heritage tomato"
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Sourcing (Asymmetric Bento) */}
      <section className="bg-surface-container section-padding reveal-section opacity-0">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-headline-md text-headline-md mb-4">Our Sourcing</h2>
            <div className="w-12 h-px bg-outline mx-auto mb-6"></div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Sustainability isn't a trend; it's our foundation. We partner with eighteen local family farms to ensure every ingredient is harvested at its peak.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="flex flex-col space-y-4">
              <div 
                className="h-64 bg-cover bg-center" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDxue7es6XQIjSHbXfgv3akAnx6CnPyGGyEZRSIihQ73I0dUpPvCT-iGe0ZRo9ohybw9CLZxlISXMcPr1a33HZoYcOn3e0ntqE1CmVI9ImZu6HgKzn-B3kraQOCVN8Kh_Uq6Wm-nlRPTgu2aQ2JliZhe97Xt-7xJV3GrqXNRD8yS3zK8tN21P6VoR1LklIKmM6-YTsdasWOVaueuhIYqkN_aXRuStWbd47UGdPIoVp1X3pTytooazrXNRr9jcvtfiVcEL2BmaROeGTB')" }}
                title="Root vegetables"
              ></div>
              <h3 className="font-headline-sm text-headline-sm">The Soil</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Regenerative practices that nourish the earth that feeds us.</p>
            </div>
            <div className="flex flex-col space-y-4 md:translate-y-12">
              <div 
                className="h-64 bg-cover bg-center" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCkD6SmnLrRAB_tLpIitWf4vaHZIV9Xq_OpUzY8ziLR1yy3RjVvWg0o9TRYCrfVoQVj_wnZ99H1qVPNLuSKSFyYOkF2xcGp-tu_snbb1qp1Kfp7aCVtUVMQ3MLUU-q_FrbI3bFximVDM0AxeIsVYaOth1nzGh71VoqvgNOA4uEn_QjgW0gglxw5WHcfMl4Uo5gX_DigYkVOXYwEarln8KCQdUAywOs6XcPLd6SQxoF-h9Z-jOftJ0yQ-FHdSKirDrQAq-JofCSMf2Fo')" }}
                title="Fresh honeycomb"
              ></div>
              <h3 className="font-headline-sm text-headline-sm">The Hive</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Supporting local biodiversity through our on-site apiary and wild forage programs.</p>
            </div>
            <div className="flex flex-col space-y-4">
              <div 
                className="h-64 bg-cover bg-center" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBozWiANOpHS5ACsU9UHePLnAN4rkh_JYl3xFjAEuvRfQ24n3PJhEXQRZ0Sy0ounT3tP6YePHwidykMWQKDtVF4UtD2FCZNwx-PmG3gWDL56XAOTNIcGKHqkhHE_4zSvFmxVeYCRAQYoBg_wrh5KKSQ04zaPTnzYZbU9ZiT6kQMpgvQOJZuOZAsalUgE4PdwQ7o-ynngEmav7NsfTXyBIo5_l3esJsEXES8y3-XcmHq5CAvYSKnbG9tYzQ0vMAoHs8m9Wk1nZKRcYOR')" }}
                title="Fresh sea bass"
              ></div>
              <h3 className="font-headline-sm text-headline-sm">The Sea</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Traceable, small-scale fishing that respects maritime ecosystems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Space */}
      <section className="section-padding reveal-section opacity-0">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div 
                className="aspect-square bg-cover bg-center" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAINj_tYKqvCj4xKJKfg-pVws3uaGLoJJpBElIUToZ-15LNiLWFxg2-x3urDoYaoVueJeJwwwNN-7yKz7exnulc4soJ6pZip5gy3pQ-C6l1Xng5U5PzdmshkOR5d4iRUILt0T0FkO6xfZFoQxbKXol9Us6v3Q5j7nUpNK2Pnn6WTj6S29Enbg4aMUJg_jNJbuoJUsoExuSEWeDgDoe7TGN04Tr5U-ZD6KSckRZzrNP3aAnU_cLAEQ9Hqdp4TUYnjBc2a3ivNcrkg3i5')" }}
                title="Luxury restaurant dining room"
              ></div>
            </div>
            <div className="order-1 md:order-2">
              <span className="text-label-caps font-label-caps text-on-surface-variant tracking-[0.2em] block mb-6">Environment</span>
              <h2 className="font-display-lg-mobile md:font-headline-md text-display-lg-mobile md:text-headline-md mb-8">The Space</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                Designed by atelier MIRA, our interior is a dialogue between raw stone and refined light. We’ve stripped away the noise of traditional fine dining to reveal the essential beauty of the materials.
              </p>
              <div className="space-y-6">
                <div className="flex items-end">
                  <span className="font-label-caps text-label-caps uppercase">Architectural Concept</span>
                  <div className="dot-leader"></div>
                  <span className="font-label-caps text-label-caps">Elemental</span>
                </div>
                <div className="flex items-end">
                  <span className="font-label-caps text-label-caps uppercase">Materials</span>
                  <div className="dot-leader"></div>
                  <span className="font-label-caps text-label-caps">Travertine & Oak</span>
                </div>
                <div className="flex items-end">
                  <span className="font-label-caps text-label-caps uppercase">Atmosphere</span>
                  <div className="dot-leader"></div>
                  <span className="font-label-caps text-label-caps">Quiet Luxury</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-primary text-on-primary section-padding reveal-section opacity-0">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="mb-20">
            <h2 className="font-headline-md text-headline-md">The Curators</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {/* Sommelier */}
            <div className="group">
              <div className="overflow-hidden mb-8">
                <div 
                  className="aspect-[3/4] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA8lmJRgefqlio8R2FwW8Jfcc-Vt2RJYsfek_u2adRqX1lZS_uX8OBOh8iVuBxyFr4LGaYgBxqYex-AoJzB-abjxJEcnuaoZXaIhwLbkZhH4b8EaIP4qi8ZWocmMO2xH42dfX4pBijEY30NR2fSTZALl2UFu49lohXShjxoFyja9x1Km01F1XyScv1h_3v5R-FHr4QyP9SvOdTJI6bweoOOHDIAtZ7Vkhnx-Ic2xCgay1y3pVf4H4LEbq8P-7RG2U8o5Vcm8pOdmbix')" }}
                  title="Head sommelier"
                ></div>
              </div>
              <h3 className="font-headline-sm text-headline-sm mb-2">Elena Vasseur</h3>
              <p className="text-on-primary-container font-label-caps text-label-caps uppercase mb-4">Head Sommelier</p>
              <p className="font-body-md text-body-md opacity-80 max-w-sm">
                With a decade spent in the vineyards of Bordeaux and Piedmont, Elena curates our cellar with a focus on biodynamic producers and rare vintages that speak of their terroir.
              </p>
            </div>
            {/* Pastry Chef */}
            <div className="group md:mt-24">
              <div className="overflow-hidden mb-8">
                <div 
                  className="aspect-[3/4] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCshNLVR0GerJEIaxVY0ALX4uiP7zlGoyYxzeHu9hT4l1zs44J7pdcHp_xPqy0ms2AfnydvPRZXCiqz2fG35bsw_pGZa2kTJaprVYJJKWJx8a0QS4zM6aJoP3gjRNoNSYuMQT8hMuZestnbYOFc8E0qd7Zw2HSEZobqXwHHu5ZsbIBC4rYqRN5QQgUOyGTh07BBTL_Bv5flKyd6Bc_O2Wn3HGQnJ5bea0ynyuqmQsKALV2snr1eekuIhUI4R9wiVPL9gjQlqYFM4Uy-')" }}
                  title="Master Patissier"
                ></div>
              </div>
              <h3 className="font-headline-sm text-headline-sm mb-2">Julian Marc</h3>
              <p className="text-on-primary-container font-label-caps text-label-caps uppercase mb-4">Master Patissier</p>
              <p className="font-body-md text-body-md opacity-80 max-w-sm">
                Julian’s creations are studies in balance—texture, temperature, and sweetness. He draws inspiration from modernist architecture to build desserts that are as visual as they are visceral.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
