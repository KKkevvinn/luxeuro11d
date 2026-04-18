import { motion } from "framer-motion";
import { ShieldAlert, BedDouble, Footprints, CreditCard, Plug } from "lucide-react";

const notices = [
  {
    icon: <ShieldAlert className="w-6 h-6 text-[#c5a059]" />,
    title: "1. 治安與防竊（最重要！）",
    desc: "歐洲各大觀光城市（如巴黎、羅馬、巴塞隆納等）的扒手與詐騙手法層出不窮，這是旅行社領隊最常提醒的重點。",
    points: [
      { subtitle: "財不露白", text: "避免攜帶名牌包或過度打扮，護照、大鈔與備用信用卡請貼身存放（建議使用防竊隱形腰包）。" },
      { subtitle: "隨身包包", text: "參觀景點、搭乘地鐵或在餐廳用餐時，包包務必背在胸前或放在視線可及之處，切勿掛在椅背上。" },
      { subtitle: "警覺陌生人", text: "遇到主動搭話、強塞手環、問路、假裝掉東西或持問卷靠近的人，請保持距離並迅速離開。" }
    ]
  },
  {
    icon: <BedDouble className="w-6 h-6 text-[#c5a059]" />,
    title: "2. 住宿習慣與環保規定",
    desc: "歐洲飯店的硬體設施與服務習慣與亞洲有顯著不同，尤其在環保政策的推動下更為明顯。",
    points: [
      { subtitle: "無一次性備品", text: "絕大多數歐洲飯店不提供牙刷、牙膏、刮鬍刀、梳子及室內拖鞋，務必自行攜帶。" },
      { subtitle: "空調與熱水壺", text: "歐洲許多歷史悠久的飯店或高緯度地區飯店沒有冷氣；且多數房間內不提供電熱水壺，若有喝熱水或泡麵的習慣，建議自備國際電壓旅行快煮壺或保溫瓶去餐廳裝水。" },
      { subtitle: "浴室乾濕分離", text: "若使用浴缸洗澡，請務必將浴簾放入浴缸內，以免水流到浴室地板造成淹水（歐洲多數浴室地板沒有排水孔，淹水可能面臨鉅額賠償）。" }
    ]
  },
  {
    icon: <Footprints className="w-6 h-6 text-[#c5a059]" />,
    title: "3. 穿著建議與鞋子選擇",
    desc: "歐洲氣候多變，且許多城市的保留了古老的城市風貌。",
    points: [
      { subtitle: "洋蔥式穿法", text: "歐洲日夜溫差大，室內與遊覽車上通常有暖氣，建議以「洋蔥式穿搭」（內層排汗、中層保暖、外層防風雨）為主，方便隨時穿脫。" },
      { subtitle: "好走防滑的鞋子", text: "歐洲老城區多為石板路如布拉格、羅馬），絕對要穿著一雙已經穿習慣、包覆性好且防滑的平底運動鞋或休閒鞋，切勿穿新鞋或高跟鞋。" }
    ]
  },
  {
    icon: <CreditCard className="w-6 h-6 text-[#c5a059]" />,
    title: "4. 貨幣、支付與小費文化",
    desc: "歐洲的支付習慣近年有較大轉變，但仍需準備適量現金。",
    points: [
      { subtitle: "信用卡為主", text: "歐洲行動支付與信用卡極度普及，建議攜帶支援感應支付的信用卡（Visa/Mastercard最通用）。重要提醒：出國前務必向銀行申請信用卡的「預借現金密碼」（4碼 PIN code），在歐洲的自動售票機（如買車票、退稅）常會要求輸入。" },
      { subtitle: "小額現金與零錢", text: "準備適量的小面額歐元（如10元、20元、50元紙鈔，避免帶500元大鈔）。在歐洲使用公共廁所通常需要付費（約 0.5 到 1 歐元），因此保留硬幣非常重要。" },
      { subtitle: "小費文化", text: "若是自由行或自行前往餐廳用餐，通常會留下餐費的 5%~10% 作為小費（有些帳單若已含服務費則可免）。床頭小費通常為每房每天 1 歐元。" }
    ]
  },
  {
    icon: <Plug className="w-6 h-6 text-[#c5a059]" />,
    title: "5. 電壓與轉接頭",
    desc: "",
    points: [
      { subtitle: "電壓與插座", text: "歐洲電壓為 220V。絕大多數地區使用雙圓孔插座，請務必準備符合當地的「歐洲規格轉接頭」。" },
      { subtitle: "變壓器", text: "手機、相機、筆電等現代3C產品的充電器通常自帶國際電壓（100V-240V），只需加上轉接頭即可使用。但若攜帶台灣的吹風機、直髮器等純110V電器，則必須使用變壓器，否則會燒毀（建議直接購買支援雙電壓的旅行用電器）。" }
    ]
  }
];

export default function TravelNotices() {
  return (
    <section className="py-24 bg-white text-[#1a1a1a] border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-sm tracking-[0.2em] uppercase font-sans font-semibold text-[#c5a059] mb-4">Travel Precautions</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-light">旅遊行程注意事項</h3>
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto">
            為了確保您的歐洲奢華旅程盡善盡美，我們為您整理了行前最關鍵的注意事項，幫助您以完美的準備迎接絕美風光。
          </p>
        </div>

        <div className="space-y-12">
          {notices.map((notice, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 md:p-10 rounded-3xl bg-[#f9f7f4] border border-gray-100 hover:shadow-xl transition-shadow flex flex-col md:flex-row gap-8"
            >
              {/* Icon & Title section */}
              <div className="w-full md:w-1/3 flex flex-col items-start gap-4 flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm">
                  {notice.icon}
                </div>
                <h4 className="text-2xl font-serif font-medium text-[#c5a059]">{notice.title}</h4>
              </div>
              
              {/* Content section */}
              <div className="w-full md:w-2/3">
                {notice.desc && (
                  <p className="text-gray-600 leading-relaxed mb-6 italic">
                    {notice.desc}
                  </p>
                )}
                
                <ul className="space-y-5">
                  {notice.points.map((point, i) => (
                    <li key={i} className="flex gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#c5a059] flex-shrink-0"></div>
                      <p className="text-gray-700 leading-relaxed">
                        <span className="font-semibold text-gray-900 mr-2">{point.subtitle}：</span>
                        {point.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
