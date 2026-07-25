"use client";

import { useEffect, useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");

  useEffect(() => {
    // Smooth reveal on scroll
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
      section.classList.add("opacity-0");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");

    setTimeout(() => {
      setFormState("sent");
      const form = e.target as HTMLFormElement;
      form.reset();
      
      setTimeout(() => {
        setFormState("idle");
      }, 3000);
    }, 1500);
  };

  const toggleFAQ = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const content = btn.nextElementSibling;
    const arrow = btn.querySelector('.arrow');
    
    if (content) content.classList.toggle('hidden');
    if (arrow) arrow.classList.toggle('rotate-180');
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[614px] flex items-center justify-center overflow-hidden reveal-section">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 overlay-dark z-10 pointer-events-none"></div>
          <img 
            className="w-full h-full object-cover" 
            alt="Lumira restaurant exterior at dusk" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAG8bLS3RAaGrkRJipZDpZ6_4lRUGPWkuOYYXC4PlroOKcM4IO7FRi0HdWJQUU95V4oqjMYHR6EdIcy4A0s07lop-pv6YHvwFZxxtUDFDK5fFITNQmyR6kgMBZ-gdM53kWNj30Y2o9z1o4wrZ3IfMLya9O1PjrEeGvWpOSxL3W3cGdA8Ti-vdjGvucvqbIpFTmLZTb5h2n_q50sFRdN0eqtrq-ZvaxLRTcYu_dUYVt3CIikIBtDfsz0LqYFezoUWrpeY_EvQZgpzlb0" 
          />
        </div>
        <div className="relative z-20 text-center text-white px-margin-mobile">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-4">Get in Touch</h1>
          <p className="font-label-caps text-label-caps tracking-widest uppercase opacity-80">Refined Hospitality in the Heart of Monaco</p>
        </div>
      </section>

      {/* Main Content: 2-Column Layout */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop section-padding reveal-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Left Column: Form & Map */}
          <div className="lg:col-span-7 space-y-20">
            <div>
              <h2 className="font-headline-md text-headline-md mb-12">Inquiry Form</h2>
              <form className="space-y-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="flex flex-col">
                    <label className="text-label-caps font-label-caps uppercase mb-2">Name</label>
                    <input className="luxury-input font-body-md" placeholder="Your full name" type="text" required />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-label-caps font-label-caps uppercase mb-2">Email</label>
                    <input className="luxury-input font-body-md" placeholder="email@example.com" type="email" required />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="text-label-caps font-label-caps uppercase mb-2">Subject</label>
                  <input className="luxury-input font-body-md" placeholder="Reservation, Event Inquiry, or Feedback" type="text" required />
                </div>
                <div className="flex flex-col">
                  <label className="text-label-caps font-label-caps uppercase mb-2">Message</label>
                  <textarea className="luxury-input font-body-md resize-none" placeholder="How can we assist you today?" rows={4} required></textarea>
                </div>
                <button 
                  className={`btn-primary w-full md:w-auto ${
                    formState === "sent" ? "!bg-green-600 !text-white" : ""
                  }`} 
                  type="submit"
                  disabled={formState !== "idle"}
                >
                  {formState === "idle" ? "Send Message" : formState === "sending" ? "Sending..." : "Message Sent"}
                </button>
              </form>
            </div>
            
            {/* Map Container */}
            <div className="space-y-6">
              <h3 className="font-headline-sm text-headline-sm">Location</h3>
              <div className="aspect-video w-full bg-surface-container grayscale contrast-125 border border-outline-variant overflow-hidden">
                <div className="w-full h-full flex items-center justify-center relative">
                  <img 
                    className="w-full h-full object-cover opacity-60" 
                    alt="Map of Monaco" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo2ChglOr2x6KYZsKyQ_-7snYGy7zLSZUgkUMYwuhMrf59zPb2p0zXIZcIp8xtRnwzASe-_lHpio2dNyrXekv9DRyXyujeT-aX6oLnyXlZOU_bv8BP4ZxHU_nVCkZhfdFGuxiYH6tchUA2yiVsw0AifzER5xd4Xsi8Jn2W7jESAxnK7in0uy4Xi93QoEyw5yoavFxv3kIrsLKkXxxvIBebyYVvCp8eolJPHs2EF_o5ucMgiGvpycNdrKbbdhRE-KD28pBzUCkA_WXA" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <span className="material-symbols-outlined text-primary text-4xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                    <p className="font-label-caps text-label-caps bg-white/90 px-3 py-1 text-primary shadow-sm">LUMIRA MONACO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: Info & Hours */}
          <div className="lg:col-span-5 space-y-16">
            {/* Contact Details */}
            <div className="space-y-10">
              <h2 className="font-headline-md text-headline-md">Contact Info</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <span className="material-symbols-outlined text-outline">location_on</span>
                  <div>
                    <p className="text-label-caps font-label-caps uppercase text-outline mb-1">Address</p>
                    <p className="font-body-lg text-body-lg">12 Quai Antoine 1er<br/>98000 Monaco</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <span className="material-symbols-outlined text-outline">call</span>
                  <div>
                    <p className="text-label-caps font-label-caps uppercase text-outline mb-1">Phone</p>
                    <p className="font-body-lg text-body-lg">+377 90 00 00 00</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <span className="material-symbols-outlined text-outline">mail</span>
                  <div>
                    <p className="text-label-caps font-label-caps uppercase text-outline mb-1">Email</p>
                    <p className="font-body-lg text-body-lg">reservations@lumira-monaco.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Opening Hours */}
            <div className="pt-16 border-t border-outline-variant">
              <h2 className="font-headline-md text-headline-md mb-10">Opening Hours</h2>
              <div className="space-y-6">
                <div className="flex justify-between items-baseline">
                  <span className="font-label-caps text-label-caps uppercase">Monday — Thursday</span>
                  <span className="dot-leader"></span>
                  <span className="font-body-md">18:00 — 23:30</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="font-label-caps text-label-caps uppercase">Friday — Saturday</span>
                  <span className="dot-leader"></span>
                  <span className="font-body-md">18:00 — 01:00</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="font-label-caps text-label-caps uppercase">Sunday</span>
                  <span className="dot-leader"></span>
                  <span className="font-body-md">12:00 — 22:00</span>
                </div>
              </div>
              <p className="mt-10 text-body-md italic text-on-surface-variant">
                * Kitchen closes one hour before departure times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-surface-container section-padding reveal-section">
        <div className="max-w-[800px] mx-auto px-margin-mobile">
          <div className="text-center mb-16">
            <h2 className="font-headline-md text-headline-md mb-4">Frequently Asked Questions</h2>
            <p className="text-on-surface-variant">Common inquiries to assist your journey to Lumira.</p>
          </div>
          <div className="space-y-8">
            {/* FAQ Item */}
            <div className="border-b border-outline-variant pb-8">
              <button 
                className="w-full flex justify-between items-center text-left group" 
                onClick={toggleFAQ}
              >
                <h3 className="font-headline-sm text-headline-sm group-hover:text-primary transition-colors">Is valet parking available?</h3>
                <span className="material-symbols-outlined arrow transition-transform duration-300">expand_more</span>
              </button>
              <div className="hidden mt-6 text-body-md text-on-surface-variant">
                Yes, Lumira offers complimentary valet parking services for all guests at the main entrance of Quai Antoine 1er.
              </div>
            </div>
            
            {/* FAQ Item */}
            <div className="border-b border-outline-variant pb-8">
              <button 
                className="w-full flex justify-between items-center text-left group" 
                onClick={toggleFAQ}
              >
                <h3 className="font-headline-sm text-headline-sm group-hover:text-primary transition-colors">How do you handle dietary restrictions?</h3>
                <span className="material-symbols-outlined arrow transition-transform duration-300">expand_more</span>
              </button>
              <div className="hidden mt-6 text-body-md text-on-surface-variant">
                Our culinary team is highly experienced in accommodating various dietary needs, including gluten-free, vegan, and nut allergies. We recommend noting any restrictions when making your reservation.
              </div>
            </div>
            
            {/* FAQ Item */}
            <div className="border-b border-outline-variant pb-8">
              <button 
                className="w-full flex justify-between items-center text-left group" 
                onClick={toggleFAQ}
              >
                <h3 className="font-headline-sm text-headline-sm group-hover:text-primary transition-colors">What is your child policy?</h3>
                <span className="material-symbols-outlined arrow transition-transform duration-300">expand_more</span>
              </button>
              <div className="hidden mt-6 text-body-md text-on-surface-variant">
                While we welcome guests of all ages, Lumira maintains an atmosphere of sophisticated fine dining. We request that young children remain seated and supervised at all times.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
