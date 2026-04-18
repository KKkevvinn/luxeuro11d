import { motion } from 'motion/react';
import { Plane, Calendar, Clock, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-[100svh] min-h-[800px] flex flex-col justify-between overflow-hidden bg-black text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2500&auto=format&fit=crop"
          alt="Matterhorn Golden Sunrise"
          className="w-full h-full object-cover object-center scale-105 animate-[slow-pan_30s_ease-in-out_infinite_alternate]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
      </div>

      {/* Top Navigation / Logo Area */}
      <header className="relative z-10 p-8 md:p-12 flex justify-between items-center">
        <div className="text-sm tracking-[0.2em] uppercase font-sans font-light text-white/80">
          Exclusive Journeys
        </div>
        <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm">
          <span className="font-serif italic text-xl">E</span>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 px-8 md:px-16 lg:px-24 pb-24 flex flex-col lg:flex-row justify-between items-end gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[1px] w-12 bg-luxury-gold"></span>
            <span className="text-luxury-gold uppercase tracking-[0.2em] text-xs font-semibold">
              Premium European Tour
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[100px] leading-[0.9] font-light tracking-tight mb-6">
            巔峰奢華 <br />
            <span className="italic text-white/90">德瑞義</span> 11 日
          </h1>
          <p className="text-lg md:text-xl font-sans font-light text-white/80 max-w-2xl leading-relaxed">
            山王馬特洪峰、山后瑞吉山與三大經典鐵道（一等艙）之旅。搭乘長榮航空，慕尼黑進、米蘭出，不走回頭路，帶您穿梭童話城堡與阿爾卑斯小鎮，為您保留最多時間沉浸在歐洲的湖光山色中。
          </p>
        </motion.div>

        {/* Flight Info Card */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-full lg:w-[400px] shrink-0 backdrop-blur-md bg-black/40 border border-white/10 rounded-3xl p-8"
        >
          <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
            <h3 className="font-serif text-2xl italic">Flight Information</h3>
            <Plane className="w-5 h-5 text-luxury-gold" />
          </div>
          
          <div className="space-y-6">
            {/* Outbound */}
            <div className="relative">
              <div className="absolute left-[11px] top-8 bottom-0 w-[1px] bg-white/20"></div>
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-luxury-gold/20 flex items-center justify-center shrink-0 z-10">
                  <div className="w-2 h-2 rounded-full bg-luxury-gold"></div>
                </div>
                <div>
                  <div className="text-xs text-white/50 uppercase tracking-wider mb-1">Outbound • 04/24 (Fri)</div>
                  <div className="font-medium text-lg">TPE <span className="text-white/40 mx-2">➔</span> MUC</div>
                  <div className="text-sm text-white/70 mt-1">EVA Air BR71 • 23:25 Departure</div>
                  <div className="text-xs text-luxury-gold mt-2 bg-luxury-gold/10 inline-block px-2 py-1 rounded">Arrives 04/25 07:35</div>
                </div>
              </div>
            </div>

            {/* Inbound */}
            <div className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-luxury-gold/20 flex items-center justify-center shrink-0 z-10">
                <div className="w-2 h-2 rounded-full bg-luxury-gold"></div>
              </div>
              <div>
                <div className="text-xs text-white/50 uppercase tracking-wider mb-1">Inbound • 05/03 (Sun)</div>
                <div className="font-medium text-lg">MXP <span className="text-white/40 mx-2">➔</span> TPE</div>
                <div className="text-sm text-white/70 mt-1">EVA Air BR96 • 11:15 Departure</div>
                <div className="text-xs text-luxury-gold mt-2 bg-luxury-gold/10 inline-block px-2 py-1 rounded">Arrives 05/04 05:55</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
