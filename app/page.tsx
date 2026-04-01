"use client";

import React, { useState } from 'react';

export default function HomeServicesDemo() {
  const [chatMessage, setChatMessage] = useState("Hi! I'm your 24/7 assistant. What's the emergency today?");
  const [showBooking, setShowBooking] = useState(false);

  // Replace this with your actual Calendly link
  const CALENDLY_URL = "https://calendly.com/222dreamlap/emergency-home-service-booking";

  const handleServiceClick = (service: string) => {
    setChatMessage(`Got it. We have a technician nearby for ${service}. You can book a priority slot below:`);
    setShowBooking(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white border-b sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            HS
          </div>
          <span className="text-xl font-bold tracking-tight">HomeService AI</span>
        </div>
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition active:scale-95">
            Book Now
          </button>
        </a>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Sales Copy */}
          <div>
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              🇸🇬 Singapore's #1 AI Dispatcher
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Never miss a <span className="text-blue-600">service call</span> again.
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              While you're on a ladder or under a sink, our AI answers your customers instantly, 
              qualifies the emergency, and books them into your calendar. 
              <strong> 24/7. Zero missed leads.</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('demo-card')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition active:scale-95"
              >
                Try the Demo Below ↓
              </button>
              <div className="flex items-center gap-3 px-4 text-sm font-medium text-slate-500">
                <span>Trust by 50+ Local Pros</span>
              </div>
            </div>
          </div>

          {/* Right: Interactive Bot Demo */}
          <div id="demo-card" className="relative">
            <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-w-sm mx-auto transition-all duration-500 hover:shadow-blue-200/50">
              <div className="bg-slate-900 p-4 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="font-semibold text-sm">AI Dispatch Assistant</span>
                </div>
                <span className="text-lg">💬</span>
              </div>

              <div className="p-6 space-y-4 h-[420px] overflow-y-auto bg-slate-50">
                {/* Bot Message */}
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] text-white font-bold">AI</div>
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm border border-slate-100 text-slate-700">
                    {chatMessage}
                  </div>
                </div>

                {/* Interaction Logic */}
                {!showBooking ? (
                  <div className="grid grid-cols-2 gap-2 ml-10">
                    {['Aircon Leak', 'Strange smell', 'Not working', 'General Repair'].map(opt => (
                      <button 
                        key={opt} 
                        onClick={() => handleServiceClick(opt)}
                        className="text-xs bg-blue-50 border border-blue-200 text-blue-700 py-3 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition active:scale-95"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="ml-10 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="block">
                      <button className="w-full bg-green-600 text-white py-4 rounded-xl text-sm font-extrabold shadow-lg hover:bg-green-700 transition active:scale-95 flex items-center justify-center gap-2">
                        📅 Select Time Slot
                      </button>
                    </a>
                    <button 
                      onClick={() => {setShowBooking(false); setChatMessage("What else can I help with?");}}
                      className="w-full text-slate-400 text-xs py-2 hover:text-slate-600 transition"
                    >
                      ← Start Over
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Floating Notification Box */}
            <div className="absolute -bottom-6 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden lg:block animate-bounce">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-green-500 font-bold">✓</span>
                <span className="font-bold text-sm text-slate-800">Lead Captured!</span>
              </div>
              <p className="text-[10px] text-slate-500">Instant WhatsApp sent to owner</p>
            </div>
          </div>

        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-32">
          {[
            { emoji: "🛡️", title: "Instant Qualification", desc: "Our bot asks for photos and location so you don't waste time on non-serious callers." },
            { emoji: "✅", title: "Auto-Booking", desc: "No more phone tag. Customers book straight into your Google/Outlook calendar." },
            { emoji: "🔔", title: "Owner Alerts", desc: "Get an instant WhatsApp notification the second a job is confirmed." }
          ].map((feature, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:border-blue-200 transition">
              <div className="text-4xl mb-4">{feature.emoji}</div>
              <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Final Call to Action */}
      <footer className="bg-slate-900 text-white py-16 px-6 text-center mt-20">
        <h2 className="text-4xl font-bold mb-4 italic">"Stop losing $1,000s to missed calls."</h2>
        <p className="text-slate-400 mb-8 max-w-lg mx-auto text-lg">
          We set up your AI Dispatcher in 24 hours. Start your 7-day free trial today.
        </p>
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition active:scale-95 shadow-xl shadow-blue-900/20">
            Get My Free Demo →
          </button>
        </a>
      </footer>
    </div>
  );
}