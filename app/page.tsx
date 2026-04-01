"use client";

import React from 'react';

export default function HomeServicesDemo() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white border-b sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
            HS
          </div>
          <span className="text-xl font-bold tracking-tight">HomeService AI</span>
        </div>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition">
          Book Now
        </button>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text */}
          <div>
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              🇸🇬 24/7 Singapore Dispatch
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Never miss a <span className="text-blue-600">service call</span> again.
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our AI receptionist answers your customers instantly, qualifies the emergency, 
              and books them directly into your calendar. While you work, we grow your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition">
                View Live Demo →
              </button>
              <div className="flex items-center gap-3 px-4">
                <span className="text-sm font-medium text-slate-500 underline">Joined by 50+ Local Pros</span>
              </div>
            </div>
          </div>

          {/* Right: The "Bot" Demo Card */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-w-sm mx-auto">
              <div className="bg-slate-900 p-4 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="font-semibold">AI Dispatch Assistant</span>
                </div>
                <span>💬</span>
              </div>

              <div className="p-6 space-y-4 h-[400px] overflow-y-auto bg-slate-50">
                {/* Bot Message */}
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] text-white">AI</div>
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm border border-slate-100">
                    Hi! I'm your 24/7 assistant. What's the emergency today?
                  </div>
                </div>

                {/* Options */}
                <div className="grid grid-cols-2 gap-2 ml-10">
                  {['Pipe Leak', 'Aircon Leak', 'No Power', 'Other'].map(opt => (
                    <button key={opt} className="text-xs bg-blue-50 border border-blue-200 text-blue-700 py-2 rounded-lg font-medium hover:bg-blue-100 transition">
                      {opt}
                    </button>
                  ))}
                </div>

                {/* User Simulated Reply */}
                <div className="flex justify-end">
                  <div className="bg-blue-600 text-white p-3 rounded-2xl rounded-tr-none text-sm shadow-md">
                    My aircon is leaking water!
                  </div>
                </div>

                {/* Bot Booking Prompt */}
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] text-white">AI</div>
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm border border-slate-100">
                    Got it. We have a technician nearby in <span className="font-bold text-blue-600">Jurong</span>. Pick a time for inspection:
                  </div>
                </div>

                {/* Dummy Booking Button */}
                <div className="ml-10">
                  <button className="w-full bg-slate-900 text-white py-3 rounded-xl text-sm font-bold shadow-lg">
                    📅 Select Time Slot
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-32">
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <div className="text-3xl mb-4">🛡️</div>
            <h3 className="font-bold text-xl mb-3">Instant Qualification</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Bot asks for address and urgency so you don't waste time on the phone.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <div className="text-3xl mb-4">✅</div>
            <h3 className="font-bold text-xl mb-3">Auto-Booking</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Connects to your Google Calendar. Customers book slots without calling you.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <div className="text-3xl mb-4">🔔</div>
            <h3 className="font-bold text-xl mb-3">Owner Alerts</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Get an instant WhatsApp notification every time a new job is booked.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-6 text-center mt-20">
        <h2 className="text-3xl font-bold mb-4">Ready to double your bookings?</h2>
        <p className="text-slate-400 mb-8">Setup takes less than 24 hours.</p>
        <button className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition">
          Get Started Now
        </button>
      </footer>
    </div>
  );
}; 