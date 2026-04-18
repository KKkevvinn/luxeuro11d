import { motion } from 'motion/react';
import { Train } from 'lucide-react';

const trains = [
  {
    name: "黃金列車景觀火車",
    subtitle: "GoldenPass Line",
    desc: "坐擁寬闊觀景窗，穿梭於翠綠山谷與清澈湖泊之間，享受 VIP 級的移動風景線。",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "冰河景觀列車",
    subtitle: "Glacier Express",
    desc: "全世界最慢的特快車！透過全景玻璃天窗，沿途飽覽雪峰、冰河與深谷的極致美景。",
    image: "https://images.unsplash.com/photo-1517644493876-7864565e3bf9?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "伯連納區域火車",
    subtitle: "Bernina Regional Train",
    desc: "行駛於世界遺產鐵道上。搭乘區域列車最大的魅力在於可開窗設計，讓您能毫無玻璃反光地捕捉環形大橋與沿途冰川的絕美瞬間。",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function TrainHighlights() {
  return (
    <section className="py-24 bg-[#1a1a1a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Train className="w-5 h-5 text-[#c5a059]" />
              <h2 className="text-sm tracking-[0.2em] uppercase font-sans font-semibold text-[#c5a059]">First Class Experience</h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-serif font-light leading-tight">
              瑞士三大經典鐵道的 <br/><span className="italic text-white/80">一等艙極致體驗</span>
            </h3>
          </div>
          <p className="text-white/60 max-w-sm text-sm leading-relaxed">
            為您特別安排一等艙專屬禮遇。無論是透過全景玻璃窗飽覽雪峰，或是拉下車窗親臨冰川，都能以最舒適的姿態，將阿爾卑斯山的壯麗風光盡收眼底。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trains.map((train, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group relative h-[500px] rounded-3xl overflow-hidden"
            >
              <img 
                src={train.image} 
                alt={train.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-80"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-[#c5a059] text-xs uppercase tracking-widest font-semibold mb-2">{train.subtitle}</div>
                  <h4 className="text-2xl font-serif mb-4">{train.name}</h4>
                  <p className="text-white/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {train.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
