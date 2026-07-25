"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Reservations() {
  const [formState, setFormState] = useState<"idle" | "sent">("idle");
  const [focusedInputs, setFocusedInputs] = useState<Record<string, boolean>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sent");
    // In a real app, scroll to top of container
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetForm = () => {
    setFormState("idle");
    setFocusedInputs({});
  };

  const handleFocus = (name: string) => {
    setFocusedInputs(prev => ({ ...prev, [name]: true }));
  };

  const handleBlur = (name: string) => {
    setFocusedInputs(prev => ({ ...prev, [name]: false }));
  };

  return (
    <div className="pt-24 min-h-screen">
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-96px)]">
        {/* Form Section */}
        <section className="w-full lg:w-1/2 px-margin-mobile md:px-margin-desktop py-12 flex flex-col justify-center">
          <div className="max-w-xl mx-auto w-full" id="booking-container">
            {formState === "idle" ? (
              <div className="fade-in transition-all duration-500">
                <header className="mb-12">
                  <span className="text-label-caps font-label-caps uppercase text-on-surface-variant tracking-widest block mb-4">Availability</span>
                  <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-4">Reserve Your Table</h1>
                  <p className="text-on-surface-variant max-w-md">Experience culinary excellence in a setting defined by quiet luxury and intentional design.</p>
                </header>

                <form className="space-y-10" id="reservation-form" onSubmit={handleSubmit}>
                  {/* Step 1: Experience */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col space-y-2">
                      <label className={`text-label-caps font-label-caps uppercase transition-colors ${focusedInputs['date'] ? 'text-primary' : 'text-on-surface-variant'}`}>Date</label>
                      <input 
                        className="underline-input text-body-md font-body-md py-2" 
                        required 
                        type="date"
                        onFocus={() => handleFocus('date')}
                        onBlur={() => handleBlur('date')}
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label className={`text-label-caps font-label-caps uppercase transition-colors ${focusedInputs['time'] ? 'text-primary' : 'text-on-surface-variant'}`}>Time</label>
                      <select 
                        className="underline-input text-body-md font-body-md py-2 appearance-none" 
                        required
                        defaultValue=""
                        onFocus={() => handleFocus('time')}
                        onBlur={() => handleBlur('time')}
                      >
                        <option disabled value="">Select Time</option>
                        <option>18:00</option>
                        <option>18:30</option>
                        <option>19:00</option>
                        <option>19:30</option>
                        <option>20:00</option>
                        <option>20:30</option>
                        <option>21:00</option>
                      </select>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label className={`text-label-caps font-label-caps uppercase transition-colors ${focusedInputs['size'] ? 'text-primary' : 'text-on-surface-variant'}`}>Party Size</label>
                      <select 
                        className="underline-input text-body-md font-body-md py-2 appearance-none" 
                        required
                        defaultValue="2"
                        onFocus={() => handleFocus('size')}
                        onBlur={() => handleBlur('size')}
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                        <option value="3">3 People</option>
                        <option value="4">4 People</option>
                        <option value="5">5 People</option>
                        <option value="6+">6+ (Group)</option>
                      </select>
                    </div>
                  </div>

                  {/* Step 2: Contact */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col space-y-2">
                      <label className={`text-label-caps font-label-caps uppercase transition-colors ${focusedInputs['name'] ? 'text-primary' : 'text-on-surface-variant'}`}>Full Name</label>
                      <input 
                        className="underline-input text-body-md font-body-md py-2" 
                        placeholder="John Doe" 
                        required 
                        type="text"
                        onFocus={() => handleFocus('name')}
                        onBlur={() => handleBlur('name')}
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label className={`text-label-caps font-label-caps uppercase transition-colors ${focusedInputs['email'] ? 'text-primary' : 'text-on-surface-variant'}`}>Email Address</label>
                      <input 
                        className="underline-input text-body-md font-body-md py-2" 
                        placeholder="john@example.com" 
                        required 
                        type="email"
                        onFocus={() => handleFocus('email')}
                        onBlur={() => handleBlur('email')}
                      />
                    </div>
                    <div className="flex flex-col space-y-2 lg:col-span-2">
                      <label className={`text-label-caps font-label-caps uppercase transition-colors ${focusedInputs['phone'] ? 'text-primary' : 'text-on-surface-variant'}`}>Phone Number</label>
                      <input 
                        className="underline-input text-body-md font-body-md py-2" 
                        placeholder="+1 (555) 000-0000" 
                        required 
                        type="tel"
                        onFocus={() => handleFocus('phone')}
                        onBlur={() => handleBlur('phone')}
                      />
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div className="flex flex-col space-y-2">
                    <label className={`text-label-caps font-label-caps uppercase transition-colors ${focusedInputs['requests'] ? 'text-primary' : 'text-on-surface-variant'}`}>Special Requests</label>
                    <textarea 
                      className="underline-input text-body-md font-body-md py-2 resize-none" 
                      placeholder="Allergies, celebrations, or table preferences..." 
                      rows={2}
                      onFocus={() => handleFocus('requests')}
                      onBlur={() => handleBlur('requests')}
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button className="w-full btn-primary" type="submit">
                      Confirm Reservation Request
                    </button>
                  </div>
                </form>

                {/* Policies & Dress Code */}
                <div className="mt-20 border-t border-outline-variant pt-10 grid grid-cols-1 md:grid-cols-2 gap-8 opacity-60">
                  <div>
                    <h4 className="text-label-caps font-label-caps uppercase text-on-surface mb-3 tracking-widest">Booking Policy</h4>
                    <ul className="text-body-md space-y-2 text-on-surface-variant">
                      <li>15-minute grace period for arrivals</li>
                      <li>Cancellations required 24h in advance</li>
                      <li>Parties of 6+ require credit card hold</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-label-caps font-label-caps uppercase text-on-surface mb-3 tracking-widest">Dress Code</h4>
                    <p className="text-body-md text-on-surface-variant leading-relaxed">
                      Elegant smart-casual. We kindly ask our guests to refrain from wearing sportswear or beachwear.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              /* Success State */
              <div className="text-center py-12 fade-in transition-all duration-700" id="success-state">
                <span className="material-symbols-outlined text-6xl text-primary mb-6 block">check_circle</span>
                <h2 className="font-headline-md text-headline-md mb-4">Request Sent</h2>
                <p className="text-on-surface-variant mb-8 max-w-sm mx-auto">Thank you for choosing Lumira. Our concierge will review your request and confirm via email within the hour.</p>
                <button 
                  className="btn-secondary" 
                  onClick={resetForm}
                >
                  Back to Booking
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Image/Visual Section */}
        <section className="hidden lg:block w-1/2 relative min-h-full overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] hover:scale-110" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB84WCjiVHlIek2h7T910zOVhQeJ2PqK2-iqnN0Q45T9s1LplT-DelEqMOzv5lUpPXG3IXs1QjOEoyxkJz4dbs6kDUm50KDEU4MtDfbTdWrFnyMzdLqNUWjDY35che8iVV3fLxzpwhPKXIlTp4qPp12CwBmlbQxv8nVp0x9pmHo5e23QFWVnjWtwvWF9CaF3hbGBM8dZJNFthTHiH7a0ulKkCVr54Xn-bdUI4xBkzhu2jsr7Ibf1SwjrzkeCY5f_ocZoYSFgOfGSG3B')" }}
            title="Private corner table"
          ></div>
          <div className="absolute inset-0 overlay-dark pointer-events-none"></div>
          <div className="absolute bottom-16 left-16 right-16">
            <p className="font-headline-md text-white text-3xl italic opacity-90 leading-snug">
              "The art of hospitality is not just in the service, but in the silence between the moments."
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
