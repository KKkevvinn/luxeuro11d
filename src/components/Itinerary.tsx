import { motion } from 'motion/react';
import { MapPin, Clock, Utensils, Bed, Train, Car, Mountain, Plane } from 'lucide-react';

const itineraryData = [
  {
    day: "01",
    date: "Apr 24",
    title: "迎向阿爾卑斯的呼喚",
    route: "台北 (Taipei) ➔ 慕尼黑 (Munich)",
    transport: "航班：長榮航空 BR71 (23:25 起飛 / 隔日 07:35 抵達，飛行時間約 14 小時10分)",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop",
    meals: { dinner: "機上" },
    accommodation: "夜宿豪華客機，準備迎接美好旅程",
    description: "搭乘長榮航空豪華客機，懷著期待的心情，飛往德國慕尼黑，展開這趟橫跨德、瑞、義的巔峰奢華之旅。"
  },
  {
    day: "02",
    date: "Apr 25",
    title: "巴伐利亞的古典與現代交響",
    route: "07:35抵達慕尼黑 (Munich) ➔ 慕尼黑市區 (Munich City) ➔ 福森 (Füssen)",
    transport: "行車距離(公里數)：慕尼黑機場 (Munich Airport) ➔ (約39公里) ➔ 瑪麗恩廣場 (Marienplatz) ➔ (約7公里) ➔ BMW Welt 寶馬世界 ➔ (約130公里) ➔ 福森 (Füssen)",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/BMW_Welt_Night.jpg",
    highlights: [
      { name: "瑪麗恩廣場 (Marienplatz)", desc: "慕尼黑的心臟地帶與歷史靈魂。漫步於此，您能深刻感受巴伐利亞的熱情與活力。新市政廳華麗的哥德式尖塔直指天際，每日定時的壁鐘（Glockenspiel）真人大小木偶表演，更是不可錯過的百年經典畫面。" },
      { name: "寶馬世界 (BMW Welt)", desc: "汽車愛好者的夢幻聖殿！這座極具未來感的雙圓錐形建築，由解構主義大師設計。館內不僅展示了 BMW 集團旗下最新車款與勞斯萊斯頂級座駕，更完美詮釋了德國百年汽車工藝的極致美學與創新科技。" }
    ],
    photoSpot: "在 BMW Welt 二樓懸空天橋俯拍一樓展示區，能拍出極具科技感與未來感的時尚大片。",
    meals: { breakfast: "機上", lunch: "敬請自理", dinner: <>19:00 <a href="https://ilpescatore-fuessen.de/" target="_blank" rel="noopener noreferrer" className="text-[#c5a059] hover:underline transition-colors hover:text-[#a07c39]">義式餐廳 Il Pescatore</a></> },
    accommodation: <>四星級 <a href="http://www.schlosskrone.de" target="_blank" rel="noopener noreferrer" className="text-[#c5a059] hover:underline transition-colors hover:text-[#a07c39]">Hotel Schlosskrone Füssen</a> (Double Room 29 平方米)</>
  },
  {
    day: "03",
    date: "Apr 26",
    title: "童話城堡與瑞士金融之都",
    route: "福森 (Füssen) ➔ 新天鵝堡 (Neuschwanstein Castle) ➔ 蘇黎世 (Zurich)",
    transport: "行車距離(公里數)：福森 (Füssen) ➔ (約5公里) ➔ 新天鵝堡 (Neuschwanstein Castle) ➔ (約230公里) ➔ 蘇黎世市區 (Zurich) (班霍夫大街 Bahnhofstrasse ➔ 聖彼得教堂 St. Peter's Church ➔ 林登霍夫山 Lindenhof)",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Schloss_Neuschwanstein_2013.jpg",
    highlights: [
      { name: "新天鵝堡 (Neuschwanstein Castle)", desc: "迪士尼睡美人城堡的原型，巴伐利亞國王路德維希二世傾盡一生打造的夢幻行宮。白牆藍頂的城堡傲然矗立於阿爾卑斯山脈的群峰與蒼鬱森林間，內部華麗的拜占庭與哥德式裝潢，帶您走入十九世紀最浪漫的童話世界。" },
      { name: "蘇黎世市區 (Zurich City)", desc: "漫步於世界最富有的街道之一「班霍夫大街」，兩側林立著國際頂級精品與瑞士名錶旗艦店。隨後探訪擁有歐洲最大鐘面的「聖彼得教堂」，並沿著石板路登上「林登霍夫山」，在此居高臨下，將利馬特河的波光粼粼與舊城區的紅磚屋頂盡收眼底。" }
    ],
    photoSpot: "傍晚時分在林登霍夫山（Lindenhof）的菩提樹下，以蘇黎世大教堂的雙塔為背景，捕捉逆光剪影。",
    meals: { breakfast: "旅館內西式", lunch: "敬請自理", dinner: <>19:00 (自訂) <a href="https://storchen.ch/en/restaurants/la-rotisserie/" target="_blank" rel="noopener noreferrer" className="text-[#c5a059] hover:underline transition-colors hover:text-[#a07c39]">LA TOTUSSERIE RESTAURANT</a></> },
    accommodation: <>五星奢華 <a href="https://www.bauraulac.ch/" target="_blank" rel="noopener noreferrer" className="text-[#c5a059] hover:underline transition-colors hover:text-[#a07c39]">BAUR AU LAC</a> (Deluxe Double 30 平方米)</>
  },
  {
    day: "04",
    date: "Apr 27",
    title: "山巒之后與湖畔珍珠",
    route: "蘇黎世 (Zurich) ➔ 盧森 (Lucerne) ➔ 菲茨瑙 (Vitznau) ➔ 瑞吉山 (Mt. Rigi) ➔ 韋吉斯 (Weggis)",
    transport: "行車距離(公里數)：蘇黎世 (Zurich) ➔ (約52公里) ➔ 盧森 (Lucerne) ➔ (搭船約26公里) ➔ 菲茨瑙 (Vitznau) ➔ (齒軌列車約7公里) ➔ 瑞吉山 (Mt. Rigi) ➔ (纜車約4公里) ➔ 韋吉斯 (Weggis) ➔ (搭船約20公里) ➔ 盧森 (Lucerne)",
    image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=2000&auto=format&fit=crop",
    highlights: [
      { name: "盧森市區 (Lucerne) (獅子紀念碑 (Lion Monument)、卡貝爾古橋 (Chapel Bridge))", desc: "尋訪被美國文豪馬克吐溫譽為「世界上最哀傷動人石雕」的獅子紀念碑，見證瑞士傭兵的忠誠與勇敢。接著漫步於歐洲最古老的木造廊橋「卡貝爾古橋」，欣賞橋樑上繪製的歷史畫作，感受這座中世紀水都的浪漫氛圍。" },
      { name: "盧森湖(Lucerne)遊船與菲茨瑙 (Vitznau)", desc: "從盧森搭乘優雅的觀光遊船前往湖畔小鎮菲茨瑙。蕩漾於波光粼粼的盧森湖上，微風輕拂，兩岸如詩如畫的瑞士傳統木屋與翠綠山坡交織成一幅絕美的動態風景畫。" },
      { name: "瑞吉山 (Mt. Rigi) 與韋吉斯 (Weggis)", desc: "從菲茨瑙搭乘歐洲歷史最悠久的紅色齒軌列車登頂「山巒之后」瑞吉山，在觀景台上360度零死角飽覽十三座湛藍湖泊與連綿雪峰。隨後搭乘全景纜車緩緩降落至充滿溫泉度假風情的韋吉斯小鎮，以截然不同的高空視角將湖光山色盡收眼底。" }
    ],
    photoSpot: "穿著鮮豔亮色的洋裝站在瑞吉山的齒軌列車旁，以復古紅色車廂對比背後廣闊的藍天綠地，是瑞士最具代表性的畫面。",
    meals: { breakfast: "旅館內西式", lunch: "敬請自理", dinner: <>19:00 飯店內用<a href="https://www.grandhotel-national.com/de/essen/brasserie-juliette/" target="_blank" rel="noopener noreferrer" className="text-[#c5a059] hover:underline transition-colors hover:text-[#a07c39]">法式現代料理 Sharing Brasserie Juliette</a></> },
    accommodation: <>奢華 <a href="https://www.grandhotel-national.com/en/" target="_blank" rel="noopener noreferrer" className="text-[#c5a059] hover:underline transition-colors hover:text-[#a07c39]">GRAND HOTEL NATIONAL</a> (Junior Suite 38 平方米)</>
  },
  {
    day: "05",
    date: "Apr 28",
    title: "黃金列車(一等艙) 穿越流金盛景的夢幻旅程",
    route: "盧森 (Lucerne) ➔ 茵特拉根 (Interlaken) ➔ 瀑布鎮 (Lauterbrunnen) ➔ 格林德瓦 (Grindelwald) ➔ 費斯特山 (First) ➔ 策馬特 (Zermatt)",
    transport: "行車距離(公里數)：盧森 (Lucerne) ➔ (黃金列車約68公里) ➔ 茵特拉根 (Interlaken) ➔ (約13公里) ➔ 瀑布鎮 (Lauterbrunnen) ➔ (約15公里) ➔ 格林德瓦 (Grindelwald) ➔ (纜車約4公里) ➔ 費斯特山 (First) ➔ (纜車約4公里) ➔ 格林德瓦 (Grindelwald) ➔ (約110公里，含洛書堡穿山火車) ➔ 策馬特 (Zermatt)",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2000&auto=format&fit=crop",
    highlights: [
      { name: "黃金列車景觀火車 (GoldenPass Express)", desc: "瑞士最著名的景觀列車之一。坐擁超大面積的寬闊觀景窗，列車宛如一條金色絲帶，優雅地穿梭於翠綠山谷、清澈湖泊與阿爾卑斯傳統牧場之間，為您帶來 VIP 級的沉浸式移動風景體驗。" },
      { name: "費斯特山 (First)", desc: "被譽為「冒險者的天堂」。搭乘纜車登頂後，您將直面艾格峰（Eiger）令人屏息的壯麗雄姿。漫步於懸崖天空步道（First Cliff Walk），在深淵之上感受腎上腺素飆升的刺激，同時將伯恩高地的冰川美景盡收眼底。" },
      { name: "瀑布鎮 (Lauterbrunnen)", desc: "隱藏在壯麗Ｕ型峽谷中的詩意秘境，據說是《魔戒》中精靈谷「瑞文戴爾」的靈感來源。鎮上共有72道瀑布從數百米高的垂直懸崖飛瀉而下，水霧迷漫中伴隨著牛鈴聲，宛如踏入不食人間煙火的精靈故鄉。" }
    ],
    photoSpot: "在瀑布鎮的主街上，利用長焦鏡頭將背後的巨大瀑布與瑞士傳統小木屋壓縮在同一個畫面中，視覺震撼力十足。",
    meals: { breakfast: "旅館內西式", lunch: "敬請自理", dinner: <>19:00 <a href="https://chinagarden-zermatt.ch/en/" target="_blank" rel="noopener noreferrer" className="text-[#c5a059] hover:underline transition-colors hover:text-[#a07c39]">中式料理</a></> },
    accommodation: <>四星級 <a href="https://www.schweizerhofzermatt.ch" target="_blank" rel="noopener noreferrer" className="text-[#c5a059] hover:underline transition-colors hover:text-[#a07c39]">HOTEL SCHWEIZERHOF ZERMATT</a> (Junior Suite with S Matterhorn View 43 平方米)</>
  },
  {
    day: "06",
    date: "Apr 29",
    title: "王者之峰與無煙山城漫遊",
    route: "策馬特全日漫遊 (Zermatt Full Day Tour)",
    transport: "馬特洪峰登山火車搭車貼心小提醒：建議避開上午尖峰人潮；上山請選右側座位、下山選左側以獲最佳視野；列車每24-36分鐘一班（車程約33分鐘）；中途必於 Rotenboden 站下車，步行至 Riffelsee 湖畔拍攝馬特洪峰絕美倒影！",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Matterhorn_and_Gornergratbahn.jpg",
    highlights: [
      { name: "馬特洪峰登山火車 (Gornergrat)", desc: "搭乘全瑞士第一條、也是歐洲最高的露天齒軌鐵路，一路攀升至海拔 3,089 公尺的觀景台。在此，您將以最完美的視角，近距離仰望瑞士三角巧克力原型——「王者之峰」馬特洪峰的孤傲錐體，以及周圍29座海拔四千公尺以上的群峰。" },
      { name: "策馬特無煙小鎮 (Zermatt)", desc: "全球知名的無煙環保聖地，全面禁止燃油車進入。漫步於純淨無污染的街道，呼吸著阿爾卑斯山最清新的空氣，兩旁是裝飾著鮮花的傳統深色木造建築，無論走到哪裡，雄偉的馬特洪峰始終如影隨形，宛如人間仙境。" }
    ],
    photoSpot: "帶著一條 Toblerone 瑞士三角巧克力，在觀景台將巧克力與真實的馬特洪峰完美重疊對齊，是必拍的趣味打卡照。",
    meals: { breakfast: "旅館內西式", lunch: "敬請自理", dinner: "客戶自理，不需訂餐" },
    accommodation: <>四星級 <a href="https://www.schweizerhofzermatt.ch" target="_blank" rel="noopener noreferrer" className="text-[#c5a059] hover:underline transition-colors hover:text-[#a07c39]">HOTEL SCHWEIZERHOF ZERMATT</a> (Junior Suite with S Matterhorn View 43 平方米)</>
  },
  {
    day: "07",
    date: "Apr 30",
    title: "冰河上的移動城堡",
    route: "策馬特 (Zermatt) ➔ 安德馬特 (Andermatt) ➔ 列支敦斯登 (Liechtenstein) ➔ 聖摩里茲 (St. Moritz)",
    transport: "行車距離(公里數)：策馬特 (Zermatt) 08:52 ➔ (冰河列車約115公里) ➔ 11:46 安德馬特 (Andermatt) ➔ (約130公里) ➔ 列支敦斯登 (Liechtenstein) ➔ (約130公里) ➔ 聖摩里茲 (St. Moritz)",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Blick_%C3%BCber_den_Sankt_Moritzersee_auf_Sankt_Moritz.jpg",
    highlights: [
      { name: "冰河景觀列車 (Glacier Express)", desc: "享有「全世界最慢的特快車」美名，是瑞士鐵道之旅的最高殿堂。坐在配備全景玻璃天窗的舒適車廂內，列車緩緩駛過高聳的石橋與深邃的峽谷，將隆河冰川的壯麗、萊茵河谷的奇岩與阿爾卑斯的雪峰毫無保留地呈現在您眼前。" },
      { name: "列支敦斯登 (Liechtenstein)", desc: "坐落於瑞士與奧地利之間的袖珍小國，以美麗的阿爾卑斯山景與精緻的郵票聞名於世，是歐洲最富裕的國家之一。" },
      { name: "聖摩里茲小鎮 (St. Moritz)", desc: "擁有每年300天陽光普照的獨特「香檳氣候」，這座隱匿於恩加丁山谷的度假勝地，不僅曾舉辦過兩次冬季奧運，更是全球富豪、名流與皇室最愛的頂級阿爾卑斯小鎮。波光粼粼的聖摩里茲湖與奢華的精品大道，散發著無與倫比的貴族氣息。" }
    ],
    photoSpot: "在冰河列車一等艙內，點一杯香檳或咖啡，以全景天窗外的雪山為背景，拍出極致奢華的旅行生活態度。",
    meals: { breakfast: "旅館內西式", lunch: "敬請自理", dinner: <>19:00 飯店晚餐 <a href="https://www.stmoritz.com/en/directory/restaurants/the-view" target="_blank" rel="noopener noreferrer" className="text-[#c5a059] hover:underline transition-colors hover:text-[#a07c39]">HOTEL GRACE LA MARGNA ST MORITZ The View</a></> },
    accommodation: <>奢華 <a href="https://www.gracestmoritz.ch" target="_blank" rel="noopener noreferrer" className="text-[#c5a059] hover:underline transition-colors hover:text-[#a07c39]">HOTEL GRACE LA MARGNA ST MORITZ</a> (Superior - Modern Grace Wing 35 平方米)</>
  },
  {
    day: "08",
    date: "May 01",
    title: "穿越國境的紅色巨龍與時尚之都",
    route: "聖摩里茲 (St. Moritz) ➔ 提拉諾(義大利) (Tirano, Italy) ➔ COMO湖 Bellagio (Lake Como Bellagio) ➔ 米蘭 (Milan)",
    transport: "行車距離(公里數)：聖摩里茲 (St. Moritz) 09:48 ➔ (伯連納列車約60公里) ➔ 12:43 提拉諾(義大利) (Tirano, Italy) ➔ (約100公里) ➔ COMO湖 Bellagio (Lake Como Bellagio) ➔ (約80公里) ➔ 米蘭 (Milan)",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/13/RhB_ABe_4-4_III_Kreisviadukt_Brusio.jpg",
    highlights: [
      { name: "伯連納區域火車 (Bernina Express)", desc: "行駛於被聯合國教科文組織列入世界遺產的鐵道路線上。有別於景觀列車的封閉式車廂，區域火車最大的優勢在於車窗可以拉下！讓您能毫無玻璃反光地呼吸阿爾卑斯山的新鮮空氣，並完美捕捉從白雪皚皚的冰川一路蜿蜒至充滿熱帶風情城鎮的極致美景。" },
      { name: "COMO湖 (Lake Como) 貝拉焦小鎮 (Bellagio) 漫遊", desc: "被譽為科莫湖上的珍珠，Bellagio 小鎮以其優雅的別墅、繁花盛開的階梯小巷與迷人的湖光山色聞名。漫步於此，感受義大利北部湖區獨有的浪漫與慵懶氛圍。" }
    ],
    photoSpot: "在伯連納區域火車駛過布魯西奧 360 度環形大橋（Brusio spiral viaduct）時，拉下車窗，從車廂內捕捉紅色列車與石橋交織的經典畫面，完全沒有玻璃反光！",
    meals: { breakfast: "旅館內西式", lunch: "敬請自理", dinner: "客戶自訂" },
    accommodation: <>米蘭威斯汀宮酒店 <a href="https://www.marriott.com/en-us/hotels/milwi-the-westin-palace-milan/overview/" target="_blank" rel="noopener noreferrer" className="text-[#c5a059] hover:underline transition-colors hover:text-[#a07c39]">THE WESTIN PALACE, MILAN</a> 1King Bed, Junior Suite (45平方米)</>
  },
  {
    day: "09",
    date: "May 02",
    title: "米蘭時尚自由時光",
    route: "全日米蘭市區自由活動 (Milan City Free Time)",
    transport: "不需要用車",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Casa_Milan_facciata.jpg",
    highlights: [
      { name: "米蘭自由活動 (Milan Free Time)", desc: "為您保留一整天的奢華餘裕。您可以親臨歷時六個世紀完工的「米蘭大教堂」，感受哥德式建築繁複雕花的視覺震撼；或漫步於有「米蘭客廳」之稱的「艾曼紐二世迴廊」，穿梭於蒙特拿破崙大街的國際頂級精品櫥窗間，盡情享受時尚之都的購物樂趣。" },
      { name: "聖西羅球場 (San Siro Stadium) (建議行程)", desc: "足球迷的終極朝聖地！這座義大利最大、歐洲最著名的足球場之一，是 AC 米蘭與國際米蘭兩大豪門的共用主場。您可以參加球場導覽，走進球員更衣室、穿越球員通道踏上神聖的綠茵草皮，並在博物館內回顧兩支米蘭球隊的百年輝煌歷史。" }
    ],
    photoSpot: "買一份義式冰淇淋 (Gelato)，在米蘭大教堂廣場前與滿天飛舞的鴿群合影（注意保管隨身財物喔！）。",
    meals: { breakfast: "旅館內西式", lunch: "敬請自理", dinner: "敬請自理" },
    accommodation: <>米蘭威斯汀宮酒店 <a href="https://www.marriott.com/en-us/hotels/milwi-the-westin-palace-milan/overview/" target="_blank" rel="noopener noreferrer" className="text-[#c5a059] hover:underline transition-colors hover:text-[#a07c39]">THE WESTIN PALACE, MILAN</a> 1King Bed, Junior Suite (45平方米)</>
  },
  {
    day: "10-11",
    date: "May 03 - May 04",
    title: "滿載美好回憶歸國",
    route: "米蘭機場搭機 (Milan Airport) ➔ 台北 (Taipei) (預計 5/4 05:55 抵達台北)",
    transport: "航班：長榮航空 BR96 (11:15 米蘭起飛 / 隔日 05:55 抵達台北)",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop",
    meals: { breakfast: "旅館內西式", lunch: "機上", dinner: "機上" },
    accommodation: "夜宿機上 ➔ 溫暖的家",
    description: "帶著滿滿的阿爾卑斯山回憶與戰利品，搭乘長榮航空返回台北，結束這趟難忘的奢華之旅。"
  }
];

export default function Itinerary() {
  return (
    <section className="py-24 md:py-32 bg-[#f5f2ed] text-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-24 text-center">
          <h2 className="text-sm tracking-[0.2em] uppercase font-sans font-semibold text-[#c5a059] mb-4">Daily Itinerary</h2>
          <h3 className="text-4xl md:text-6xl font-serif font-light">每日奢華行程總覽</h3>
        </div>

        <div className="space-y-32">
          {itineraryData.map((day, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col gap-12 lg:gap-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative">
                <div className="aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[40px]">
                  <img 
                    src={day.image} 
                    alt={day.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Floating Day Badge */}
                <div className={`absolute top-12 ${index % 2 !== 0 ? '-left-6 md:-left-12' : '-right-6 md:-right-12'} bg-white p-4 md:p-6 rounded-full shadow-xl flex flex-col items-center justify-center w-24 h-24 md:w-32 md:h-32 z-10`}>
                  <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 font-sans mb-1">Day</span>
                  <span className="text-2xl md:text-4xl font-serif font-light text-[#c5a059] leading-none">{day.day}</span>
                  {day.date && <span className="text-[10px] md:text-sm text-gray-400 font-sans mt-1 md:mt-2">{day.date}</span>}
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="mb-8">
                  <h4 className="text-3xl md:text-4xl font-serif mb-4 leading-tight">{day.title}</h4>
                  <div className="flex items-center gap-2 text-sm uppercase tracking-wider font-semibold text-gray-500 mb-6">
                    <MapPin className="w-4 h-4 text-[#c5a059]" />
                    {day.route}
                  </div>
                  {day.description && <p className="text-gray-600 leading-relaxed text-lg">{day.description}</p>}
                </div>

                {day.transport && (
                  <div className="flex items-start gap-3 mb-6 p-4 bg-white/50 rounded-2xl border border-gray-200/50">
                    {day.transport.includes('航班') || day.transport.includes('搭機') ? (
                      <Plane className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                    ) : day.transport.includes('火車') || day.transport.includes('列車') ? (
                      <Train className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                    ) : (
                      <Car className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                    )}
                    <p className="text-sm text-gray-600 leading-relaxed">{day.transport}</p>
                  </div>
                )}

                {day.highlights && (
                  <div className="space-y-6 mb-8">
                    {day.highlights.map((h, i) => (
                      <div key={i} className="border-l-2 border-[#c5a059] pl-4">
                        <h5 className="font-serif text-xl font-medium mb-2">{h.name}</h5>
                        <p className="text-gray-600 leading-relaxed">{h.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {day.photoSpot && (
                  <div className="mb-8 p-5 bg-[#1a1a1a] text-white rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#c5a059] to-transparent"></div>
                    <h6 className="text-xs uppercase tracking-widest text-[#c5a059] mb-2 font-semibold">📸 網紅打卡特色</h6>
                    <p className="text-sm text-white/80 leading-relaxed">{day.photoSpot}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-gray-200">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 font-semibold">
                      <Utensils className="w-4 h-4" /> Meals
                    </div>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {day.meals.breakfast && <li><span className="text-gray-400 mr-2">早</span> {day.meals.breakfast}</li>}
                      {day.meals.lunch && <li><span className="text-gray-400 mr-2">午</span> {day.meals.lunch}</li>}
                      {day.meals.dinner && <li><span className="text-gray-400 mr-2">晚</span> {day.meals.dinner}</li>}
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 font-semibold">
                      <Bed className="w-4 h-4" /> Accommodation
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed font-medium">
                      {day.accommodation}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
