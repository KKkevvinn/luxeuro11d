import { motion } from "framer-motion";
import { PlaneTakeoff, PlaneLanding, Clock, Calendar } from "lucide-react";

const flightData = [
  {
    type: "去程航班",
    airline: "長榮航空 EVA Air",
    flightNo: "BR 71",
    departure: {
      airport: "台北 (TPE)",
      time: "23:25",
      date: "04/24 (Thu)"
    },
    arrival: {
      airport: "慕尼黑 (MUC)",
      time: "07:35 (+1)",
      date: "04/25 (Fri)"
    },
    duration: "14h 10m"
  },
  {
    type: "回程航班",
    airline: "長榮航空 EVA Air",
    flightNo: "BR 96",
    departure: {
      airport: "米蘭 (MXP)",
      time: "11:15",
      date: "05/03 (Sat)"
    },
    arrival: {
      airport: "台北 (TPE)",
      time: "05:55 (+1)",
      date: "05/04 (Sun)"
    },
    duration: "12h 40m"
  }
];

export default function FlightInformation() {
  return (
    <section className="py-24 bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-sm tracking-[0.2em] uppercase font-sans font-semibold text-[#c5a059] mb-4">Flight Information</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-light">尊榮航班資訊</h3>
          <p className="mt-6 text-white/60 max-w-2xl mx-auto">
            精心為您安排長榮航空直飛歐洲進出點，以最舒適的飛行體驗銜接這趟奢華之旅。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {flightData.map((flight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:border-[#c5a059]/50 transition-colors"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
                <div>
                  <span className="bg-[#c5a059] text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                    {flight.type}
                  </span>
                </div>
                <div className="text-right">
                  <p className="font-serif text-lg font-medium tracking-wide">{flight.airline}</p>
                  <p className="text-[#c5a059] font-mono font-bold tracking-widest">{flight.flightNo}</p>
                </div>
              </div>

              <div className="flex items-center justify-between relative">
                {/* Departure */}
                <div className="flex flex-col items-center w-1/3">
                  <PlaneTakeoff className="w-8 h-8 text-[#c5a059] mb-4 opacity-80" />
                  <p className="text-3xl font-light font-sans tracking-tight mb-2">{flight.departure.time}</p>
                  <p className="text-sm text-white/50 mb-1">{flight.departure.date}</p>
                  <p className="font-serif font-medium text-lg">{flight.departure.airport}</p>
                </div>

                {/* Duration & Connector */}
                <div className="flex flex-col items-center w-1/3 px-2">
                  <div className="flex items-center gap-2 text-white/40 mb-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-widest">{flight.duration}</span>
                  </div>
                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#c5a059] shadow-[0_0_10px_#c5a059]"></div>
                  </div>
                  <div className="mt-2 text-[#c5a059] text-xs font-semibold tracking-widest uppercase">
                    Direct
                  </div>
                </div>

                {/* Arrival */}
                <div className="flex flex-col items-center w-1/3">
                  <PlaneLanding className="w-8 h-8 text-[#c5a059] mb-4 opacity-80" />
                  <p className="text-3xl font-light font-sans tracking-tight mb-2">{flight.arrival.time}</p>
                  <p className="text-sm text-white/50 mb-1">{flight.arrival.date}</p>
                  <p className="font-serif font-medium text-lg">{flight.arrival.airport}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
