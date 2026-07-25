"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Events() {
  useEffect(() => {
    // Smooth reveal on scroll for elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    const fadeElements = document.querySelectorAll(".reveal-fade");
    fadeElements.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[870px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDGU_ogx9oI3wFiznRZsUfJF1QysJtG3gEhCurfp8mq3FZGbh_JJaWOvITlH6x486a7ywsPvBs6eFAyUly6Ut2ergWs1NcYTPwZbIhdokX08ykHqVGxaeI0k_3YdxR7U12NLQgaXEWNwCcD0ufOJ6BIxFH2Ac3a5kBSsMPhpFLjBJfcWqVHGkrttA--vdWrnoZLkoZp-PWjU6n1HIzfnb7QGBCOQD0BfUPDA6nyCltaUbAfxCjIg2VhIZHdJd_67upRAF3eh4EzRk7Q')" }}
            title="Dining table set for an evening celebration"
          ></div>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 overlay-dark"></div>
        </div>
        <div className="relative z-10 text-center text-on-primary px-margin-mobile">
          <span className="text-label-caps font-label-caps mb-4 block tracking-[0.3em]">Exquisite Gatherings</span>
          <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg mb-8 italic">Memorable Moments</h1>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link 
              href="#inquiry" 
              className="inline-flex items-center justify-center bg-white text-black px-8 py-4 font-label-caps text-[12px] font-semibold uppercase tracking-[0.1em] transition-all hover:opacity-80 hover:scale-[1.02]"
            >
              Enquire Now
            </Link>
            <button className="btn-outline-white">
              Download Event Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Intro Narrative */}
      <section className="section-padding px-margin-mobile md:px-margin-desktop max-w-[800px] mx-auto text-center reveal-fade opacity-0 translate-y-10 transition-all duration-1000">
        <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
          At Lumira, we believe every gathering is a canvas for exceptional hospitality. From intimate dinners in our secluded library to grand celebrations in the garden, our dedicated events team orchestrates every detail with precision and grace, ensuring your occasion is as effortless as it is unforgettable.
        </p>
      </section>

      {/* Private Dining: The Spaces */}
      <section className="section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center mb-32 reveal-fade opacity-0 translate-y-10 transition-all duration-1000">
          <div className="order-2 md:order-1">
            <span className="text-label-caps font-label-caps text-outline mb-4 block">The Library</span>
            <h2 className="text-headline-md font-headline-md mb-6">An Intimate Sanctuary</h2>
            <p className="text-body-md font-body-md text-on-surface-variant mb-8 leading-relaxed">
              Surrounded by floor-to-ceiling mahogany shelves and curated vintage volumes, The Library offers a warm, secluded atmosphere for up to 14 guests. Ideal for confidential business dinners or cherished family celebrations where privacy and conversation take center stage.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-baseline text-label-caps font-label-caps text-on-surface">
                Seated Capacity <div className="dot-leader"></div> <span>14 Guests</span>
              </li>
              <li className="flex items-baseline text-label-caps font-label-caps text-on-surface">
                Service <div className="dot-leader"></div> <span>Dedicated Sommelier</span>
              </li>
              <li className="flex items-baseline text-label-caps font-label-caps text-on-surface">
                Ambiance <div className="dot-leader"></div> <span>Soft Jazz & Hearth</span>
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2 h-[400px] md:h-[600px] hover-lift overflow-hidden">
            <img 
              className="w-full h-full object-cover" 
              alt="The Library" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeTIdNl85vWn-Tcp-KOh0YT-OUEvNcbUACVbE2BJUWwKOR_y6Wmf-9YhM0FlWRFOMGL_A9xPZAt3HEUb3AWZEzjGTm9fqL2Zm6673dTn_KqBMb8OfHmuTNgsivStBByB4CIoIpym-ND1bBKp55EkBJbCnhJc9c-DpAy6KGQWCRdBPokmdGDMWUdDIp3OXPqp6imWcAe65skud2qY9ZrvpknK8zNgMATxtQq9mc3gghfR5Um2Lq7utbaF0mKvSmIUzCHG0hqUJHoaxs" 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center reveal-fade opacity-0 translate-y-10 transition-all duration-1000">
          <div className="h-[400px] md:h-[600px] hover-lift overflow-hidden">
            <img 
              className="w-full h-full object-cover" 
              alt="The Garden Room" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpti5Jadn9oAllJR3y_5mu-5NNs9XjZGGylg-FEBACNtFOObHWUl8Tz6-wwIH2kvmahNl9gWzbRpSfHP2B-vtGaqAdWpi7-RruGXkfTkaLqGH8q97ZqdGuLCifIxfrd_JQhkypHao6Ct-PWFjMKcY58Cxpwq926Z7BC3BVvXEbsdRxeqC1GMivnfZg_EXonoTdSTRbLn2R6RAgyAnAPhDpm9YTVCV1ZKt0WmhEshDoiPoSrX1TIwkSbIj6TAEuiMfIhRbCwgEE0IhQ" 
            />
          </div>
          <div>
            <span className="text-label-caps font-label-caps text-outline mb-4 block">The Garden Room</span>
            <h2 className="text-headline-md font-headline-md mb-6">Luminous Botanicals</h2>
            <p className="text-body-md font-body-md text-on-surface-variant mb-8 leading-relaxed">
              Blurring the lines between interior luxury and the natural world, The Garden Room is bathed in soft, filtered sunlight. With its own private terrace and botanical-inspired decor, it hosts up to 40 guests for vibrant brunches or sophisticated cocktail receptions.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-baseline text-label-caps font-label-caps text-on-surface">
                Seated Capacity <div className="dot-leader"></div> <span>40 Guests</span>
              </li>
              <li className="flex items-baseline text-label-caps font-label-caps text-on-surface">
                Standing Capacity <div className="dot-leader"></div> <span>60 Guests</span>
              </li>
              <li className="flex items-baseline text-label-caps font-label-caps text-on-surface">
                Access <div className="dot-leader"></div> <span>Private Outdoor Terrace</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Corporate Events */}
      <section className="section-padding bg-surface-container-low reveal-fade opacity-0 translate-y-10 transition-all duration-1000">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/3">
              <h2 className="text-headline-md font-headline-md mb-6">Corporate Excellence</h2>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                Elevate your professional gatherings with a venue that reflects your brand’s commitment to quality. Lumira provides a seamless blend of Michelin-level culinary expertise and modern technological infrastructure.
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-background p-10 border border-outline-variant hover-lift">
                <span className="material-symbols-outlined text-primary mb-6 text-3xl">cast</span>
                <h3 className="text-headline-sm font-headline-sm mb-4">AV Capabilities</h3>
                <p className="text-body-md font-body-md text-on-surface-variant">Hidden 4K projection, integrated surround sound, and high-speed enterprise Wi-Fi for seamless presentations.</p>
              </div>
              <div className="bg-background p-10 border border-outline-variant hover-lift">
                <span className="material-symbols-outlined text-primary mb-6 text-3xl">restaurant_menu</span>
                <h3 className="text-headline-sm font-headline-sm mb-4">Tailored Menus</h3>
                <p className="text-body-md font-body-md text-on-surface-variant">Bespoke multi-course menus or sophisticated working lunches designed by our executive chef to suit your schedule.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weddings & Celebrations */}
      <section className="section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto reveal-fade opacity-0 translate-y-10 transition-all duration-1000">
        <div className="text-center mb-20">
          <span className="text-label-caps font-label-caps text-outline mb-4 block">Weddings & Celebrations</span>
          <h2 className="text-headline-md font-headline-md">Bespoke Planning</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <div className="h-96 hover-lift overflow-hidden">
              <img 
                className="w-full h-full object-cover" 
                alt="Culinary Artistry" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcapoOsdjxaqV976_sP-EAeGBz4rFlRY49WwdEV-E8gkQwpeZ9e9he4iRAYOb_XcT4xqkFkpxe5OioHJSJlfvsbUrDpxMDgx80Ktw_tidhkkUWp7stV3oKrGS0juHhrK5VjfTQafTEN5FW_nZ1zM-uUcJyvKL9OeZ9cLYJhXM60zyo7ITQWX1YpTO19NglVgejrlf-w1Ol-tbwwtsy3oEXoLl4EfSIQrmTaa72xPcqoQGHBnFTiN_doGFadar_mtdvUV3qHMxuk4wI" 
              />
            </div>
            <h4 className="text-headline-sm font-headline-sm">Culinary Artistry</h4>
            <p className="text-body-md font-body-md text-on-surface-variant">Our chefs work directly with you to craft a menu that tells your unique story through seasonal, artisanal ingredients.</p>
          </div>
          <div className="space-y-6">
            <div className="h-96 hover-lift overflow-hidden">
              <img 
                className="w-full h-full object-cover" 
                alt="Floral Design" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKg0ofdn1z7UsM5vMOWkdPJeu9Y0DD3ipRif98742O7dcN4kFnTxKK6sPpKg8vk7v76c0ZJ56ngaggdXtk6Jl8Rd93ZwXYkSW59BlF-4fED2DSYomvq-2zB2Qartx42ntN5OnC3oTpHApIM7t-ekBCnM7xINzi8JwpdILLFZBYLJCi3yCr05r4iYfZWMDZLiUo7qrdBEYmmnTvu0bgYDtfH3GExAxi1krFQDNXkrGs87sP7C53X9Yo-Lc8xnB0v4UTqKtLXcTSCZKd" 
              />
            </div>
            <h4 className="text-headline-sm font-headline-sm">Floral Design</h4>
            <p className="text-body-md font-body-md text-on-surface-variant">In-house floral consultants collaborate with local artisans to transform our spaces into your personal vision.</p>
          </div>
          <div className="space-y-6">
            <div className="h-96 hover-lift overflow-hidden">
              <img 
                className="w-full h-full object-cover" 
                alt="Event Concierge" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuASehaZaS8ZV9-3tcI41lPrMC3H_qXHlg7NBSrVCp_mr46AzD0tdJwrTzJ6ono1tZRh0A9v27K8yMEBxyDncfzbnExdt1kglcFwgs3XZVwj6NrT7LirQJBdFRb37V8x_BtnxvbFYXcSkw1OpvUgjnCGTyH-lUovySOVKN8-rcIkN0ivBE4ApQmOx_IA7xgzv6xz-w5jALFpCi90Wf0Vi1LqX2O3Ktb7FsK5fSO9jU-nWedRAuN8i3Th-T8AGwGef4eZAth9DefKAKna" 
              />
            </div>
            <h4 className="text-headline-sm font-headline-sm">Event Concierge</h4>
            <p className="text-body-md font-body-md text-on-surface-variant">From stationary design to musical arrangements, our planning team handles every logistical detail with precision.</p>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="section-padding bg-primary text-on-primary reveal-fade opacity-0 translate-y-10 transition-all duration-1000" id="inquiry">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <div>
              <h2 className="text-display-lg-mobile md:text-display-lg font-display-lg mb-8 italic">Start Your Story</h2>
              <p className="text-body-lg font-body-lg text-on-primary-container leading-relaxed mb-12">
                Please provide us with a few details about your upcoming event. Our dedicated events manager will contact you within 24 hours to begin the journey.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-outline">call</span>
                  <span className="text-label-caps font-label-caps">+1 (555) 012-3456</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-outline">mail</span>
                  <span className="text-label-caps font-label-caps">events@lumiradining.com</span>
                </div>
              </div>
            </div>
            <form className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative group">
                  <input className="w-full bg-transparent border-b border-on-primary-container py-3 focus:outline-none focus:border-on-primary transition-colors peer placeholder-transparent" id="name" name="name" required type="text" placeholder="Full Name" />
                  <label className="absolute left-0 -top-6 text-label-caps font-label-caps text-on-primary-container peer-placeholder-shown:text-body-md peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-label-caps peer-focus:text-on-primary transition-all" htmlFor="name">Full Name</label>
                </div>
                <div className="relative group">
                  <select className="w-full bg-transparent border-b border-on-primary-container py-3 focus:outline-none focus:border-on-primary transition-colors appearance-none" id="event_type" name="event_type" defaultValue="">
                    <option className="text-primary" disabled value="">Event Type</option>
                    <option className="text-primary" value="private">Private Dinner</option>
                    <option className="text-primary" value="corporate">Corporate Event</option>
                    <option className="text-primary" value="wedding">Wedding / Celebration</option>
                  </select>
                  <span className="absolute right-0 bottom-3 material-symbols-outlined pointer-events-none">expand_more</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative group">
                  <input className="w-full bg-transparent border-b border-on-primary-container py-3 focus:outline-none focus:border-on-primary transition-colors text-on-primary" id="date" name="date" type="date" required />
                  <label className="absolute left-0 -top-6 text-label-caps font-label-caps text-on-primary-container" htmlFor="date">Preferred Date</label>
                </div>
                <div className="relative group">
                  <input className="w-full bg-transparent border-b border-on-primary-container py-3 focus:outline-none focus:border-on-primary transition-colors peer placeholder-transparent" id="guests" name="guests" required type="number" placeholder="Guest Count" />
                  <label className="absolute left-0 -top-6 text-label-caps font-label-caps text-on-primary-container peer-placeholder-shown:text-body-md peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-label-caps peer-focus:text-on-primary transition-all" htmlFor="guests">Guest Count</label>
                </div>
              </div>
              <div className="relative group">
                <textarea className="w-full bg-transparent border-b border-on-primary-container py-3 focus:outline-none focus:border-on-primary transition-colors peer placeholder-transparent" id="message" name="message" required rows={4} placeholder="Your Message"></textarea>
                <label className="absolute left-0 -top-6 text-label-caps font-label-caps text-on-primary-container peer-placeholder-shown:text-body-md peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-label-caps peer-focus:text-on-primary transition-all" htmlFor="message">Your Message</label>
              </div>
              <button className="w-full inline-flex items-center justify-center bg-white text-black px-8 py-6 font-label-caps text-[12px] font-semibold uppercase tracking-[0.1em] transition-all hover:opacity-80 hover:scale-[1.02]" type="submit">Submit Inquiry</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
