/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import TrainHighlights from './components/TrainHighlights';
import Itinerary from './components/Itinerary';
import FlightInformation from './components/FlightInformation';
import TravelNotices from './components/TravelNotices';

export default function App() {
  return (
    <main className="min-h-screen bg-[#f5f2ed] selection:bg-[#c5a059] selection:text-white">
      <Hero />
      <TrainHighlights />
      <Itinerary />
      <FlightInformation />
      <TravelNotices />
      
      {/* Premium Bespoke Footer */}
      <footer className="bg-[#1a1a1a] text-white/50 py-24 text-center relative overflow-hidden border-t border-white/5">
        {/* Subtle Gold Glow Top Border */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-[#c5a059]/60 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-10">
            <p className="text-[#c5a059] tracking-[0.3em] uppercase text-xs font-semibold mb-6">
              Exclusively Curated For
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-wide flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <span>Sander Su</span>
              <span className="text-[#c5a059] italic font-serif text-3xl md:text-5xl">&</span>
              <span>Winne Wang</span>
            </h2>
          </div>
          
          <div className="w-12 h-[1px] bg-[#c5a059]/30 mx-auto mb-10"></div>
          
          <p className="font-serif italic text-xl mb-12 text-white/70">The Premier Alpine Experience</p>
          
          <div className="flex flex-col items-center gap-6">
            <p className="tracking-[0.15em] text-xs uppercase text-white/40">
              © 2026 巔峰奢華 • All Rights Reserved @ Star Luxe 星芯旅遊
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
