import React, { useState, useEffect } from 'react';

// 1. 內建原生 SVG 圖標 (免安裝任何套件，絕對不會報錯)
const Icons = {
  Home: (props: any) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  Map: (props: any) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
      <line x1="9" x2="9" y1="3" y2="18" />
      <line x1="15" x2="15" y1="6" y2="21" />
    </svg>
  ),
  MessageSquare: (props: any) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  MoreHorizontal: (props: any) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  ),
  Train: (props: any) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="16" height="16" x="4" y="3" rx="2" />
      <path d="M4 11h16" />
      <path d="M12 3v8" />
      <path d="m8 19-2 3" />
      <path d="m18 22-2-3" />
      <path d="M8 15h0" />
      <path d="M16 15h0" />
    </svg>
  ),
  Bed: (props: any) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 4v16" />
      <path d="M2 8h18a2 2 0 0 1 2 2v10" />
      <path d="M2 17h20" />
      <path d="M6 8v9" />
    </svg>
  ),
  Ticket: (props: any) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2" />
      <path d="M13 17v2" />
      <path d="M13 11v2" />
    </svg>
  ),
  Play: (props: any) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  ),
  Navigation: (props: any) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  ),
};

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    // 2. 強制清除 Vite 的預設白底干擾，並動態載入 Tailwind CSS
    document.body.style.backgroundColor = '#0a0a0c';
    document.body.style.margin = '0';
    document.body.style.padding = '0';

    if (!document.getElementById('tailwind-cdn')) {
      const script = document.createElement('script');
      script.id = 'tailwind-cdn';
      script.src = 'https://cdn.tailwindcss.com';
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white font-sans max-w-md mx-auto relative overflow-hidden shadow-2xl flex flex-col">
      {/* 頂部背景圖與漸層 */}
      <div
        className="absolute top-0 left-0 right-0 h-96 bg-cover bg-center opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1516483638261-f4085ee6bd0f?auto=format&fit=crop&q=80")',
        }}
      ></div>
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-transparent to-[#0a0a0c] pointer-events-none"></div>

      {/* 主要可滾動內容區 */}
      <div
        className="relative z-10 flex-1 overflow-y-auto pb-28"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="px-6 pt-12 flex justify-between items-center mb-6">
          <span className="text-xs tracking-widest text-gray-300 font-semibold">
            LA DOLCE VITA
          </span>
          <div className="flex bg-white/20 backdrop-blur-md rounded-full p-1 text-xs font-bold">
            <span className="bg-white text-black px-3 py-1 rounded-full cursor-pointer">
              中文
            </span>
            <span className="px-3 py-1 text-white cursor-pointer">EN</span>
          </div>
        </div>

        {activeTab === 'home' && <HomeView />}
        {activeTab === 'itinerary' && <ItineraryView />}
        {activeTab === 'phrases' && <PhrasesView />}
        {activeTab === 'more' && (
          <div className="px-6 mt-8">
            <p className="text-gray-400">更多功能開發中...</p>
          </div>
        )}
      </div>

      {/* 底部導航列 */}
      <div className="absolute bottom-0 w-full bg-[#16161a]/95 backdrop-blur-xl border-t border-white/10 rounded-t-3xl pb-6 pt-4 px-6 z-50">
        <div className="flex justify-between items-center">
          <NavItem
            Icon={Icons.Home}
            label="首頁"
            isActive={activeTab === 'home'}
            onClick={() => setActiveTab('home')}
          />
          <NavItem
            Icon={Icons.Map}
            label="行程"
            isActive={activeTab === 'itinerary'}
            onClick={() => setActiveTab('itinerary')}
          />
          <NavItem
            Icon={Icons.MessageSquare}
            label="常用語"
            isActive={activeTab === 'phrases'}
            onClick={() => setActiveTab('phrases')}
          />
          <NavItem
            Icon={Icons.MoreHorizontal}
            label="更多"
            isActive={activeTab === 'more'}
            onClick={() => setActiveTab('more')}
          />
        </div>
      </div>
    </div>
  );
}

// --- 分頁組件 ---

function HomeView() {
  return (
    <div className="px-6 flex-1">
      <h1 className="text-5xl font-bold mb-2">Italy Trip</h1>
      <p className="text-gray-400 mb-2">意大利之旅</p>
      <p className="text-sm font-semibold mb-6">Sep 30 – Oct 14</p>
      <p className="text-xs text-gray-400 tracking-wide mb-10">
        Milano · Venezia · Dolomiti · Firenze · Roma
      </p>

      <div className="flex justify-between items-end mb-4">
        <h2 className="text-xl font-bold">每一站 · Stops</h2>
        <button className="text-[10px] font-bold bg-white/10 px-3 py-1.5 rounded-full flex items-center hover:bg-white/20 transition">
          TRAVEL <Icons.Navigation className="w-3 h-3 ml-1" />
        </button>
      </div>

      <div className="bg-[#1c1c21] rounded-3xl p-5 mb-4 border border-white/5">
        <div className="flex justify-between text-[10px] text-gray-500 mb-6 px-1">
          <span>高鐵2h15m</span>
          <span>自駕2h30m</span>
          <span>高鐵2h03m</span>
          <span>高鐵1h30m</span>
        </div>
        <div className="relative flex justify-between items-center px-2 mb-2">
          <div className="absolute left-4 right-4 top-1.5 h-0.5 bg-gray-700"></div>
          <StopDot active label="Milan" sub="米蘭" />
          <StopDot label="Venice" sub="威尼斯" />
          <StopDot label="Dolomites" sub="多洛米蒂" />
          <StopDot label="Florence" sub="佛羅倫薩" />
          <StopDot label="Rome" sub="羅馬" />
        </div>
      </div>

      <div className="bg-[#1c1c21] rounded-3xl p-5 mb-4 border border-white/5 flex justify-between items-center">
        <div>
          <p className="text-[10px] text-gray-400 mb-1">
            下一項預約 · 10月3日 12:45
          </p>
          <div className="flex items-center mt-1">
            <div className="w-2 h-2 rounded-full bg-orange-400 mr-2"></div>
            <p className="font-bold text-sm">Frecciarossa 9727 高鐵</p>
          </div>
          <p className="text-[10px] text-gray-500 mt-1 ml-4">米蘭中央車站</p>
        </div>
        <div className="bg-white/10 px-3 py-1.5 rounded-full flex-shrink-0">
          <span className="text-[10px] text-orange-200">還有 13天 7小時</span>
        </div>
      </div>

      <div className="relative rounded-3xl overflow-hidden h-64 border border-white/10 mt-6">
        <img
          src="https://images.unsplash.com/photo-1582232971219-09439f0e1c25?auto=format&fit=crop&q=80"
          alt="Duomo"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-black/40 to-transparent"></div>
        <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center">
          <span className="text-[10px] bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-gray-300">
            當前選擇
          </span>
        </div>
      </div>
    </div>
  );
}

function ItineraryView() {
  return (
    <div className="px-6 flex-1">
      <div className="relative rounded-3xl overflow-hidden h-48 mb-6 border border-white/10">
        <img
          src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80"
          alt="Rome"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
          <span className="text-[10px] bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full mb-2">
            當前選擇
          </span>
          <h1 className="text-4xl font-bold mb-1">Rome</h1>
          <p className="text-sm text-gray-300">羅馬</p>
          <p className="text-xs text-gray-400 mt-2">10月10日 – 10月14日</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-8">
        <CategoryCard
          Icon={Icons.Ticket}
          title="門票"
          desc="Firenze SMN → Roma Termini · 梵蒂岡博物館 · 羅馬鬥獸場"
        />
        <CategoryCard
          Icon={Icons.Bed}
          title="酒店"
          desc="House of Allora - 已訂 · 奢華套房 (帶廚房)"
        />
        <CategoryCard
          Icon={Icons.Train}
          title="交通"
          desc="Italo 9927 · Firenze SMN 12:43 → Roma Termini 14:19"
        />
      </div>

      <div className="flex justify-between items-end mb-4">
        <h2 className="text-xl font-bold">羅馬 · 票券</h2>
        <span className="text-xs text-gray-400 cursor-pointer hover:text-white">
          查看票夾 &gt;
        </span>
      </div>

      <div
        className="flex space-x-3 overflow-x-auto pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <TicketCard
          tag="ITALOR"
          title="Firenze SMN → Roma Termini"
          sub="10月10日 · 12:43"
          img="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80"
        />
        <TicketCard
          tag="VAT"
          title="梵蒂岡博物館"
          sub="點按直接打開"
          img="https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&q=80"
        />
        <TicketCard
          tag="ROM"
          title="羅馬鬥獸場"
          sub="點按直接打開"
          img="https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80"
        />
      </div>
    </div>
  );
}

function PhrasesView() {
  return (
    <div className="px-6 flex-1">
      <div
        className="flex space-x-2 mb-6 overflow-x-auto pb-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <span className="px-4 py-1.5 bg-white/20 rounded-full text-xs font-bold whitespace-nowrap cursor-pointer">
          全部
        </span>
        <span className="px-4 py-1.5 bg-[#1c1c21] rounded-full text-xs text-gray-400 whitespace-nowrap border border-white/5 cursor-pointer">
          禮貌與日常
        </span>
        <span className="px-4 py-1.5 bg-[#1c1c21] rounded-full text-xs text-gray-400 whitespace-nowrap border border-white/5 cursor-pointer">
          餐廳
        </span>
        <span className="px-4 py-1.5 bg-[#1c1c21] rounded-full text-xs text-gray-400 whitespace-nowrap border border-white/5 cursor-pointer">
          交通與問路
        </span>
      </div>

      <div className="bg-[#1c1c21] rounded-3xl p-2 border border-white/5">
        <PhraseItem it="Grazie" cn="謝謝" pron="格拉茨耶" />
        <PhraseItem it="Prego" cn="不客氣 / 請" pron="普雷戈" />
        <PhraseItem it="Per favore" cn="請" pron="佩爾 法沃雷" />
        <PhraseItem it="Mi scusi" cn="勞駕 / 對不起" pron="米 斯庫西" />
        <PhraseItem it="Buongiorno" cn="早上好 / 日安" pron="布翁焦爾諾" />
        <PhraseItem it="Buonasera" cn="晚上好" pron="布翁納塞拉" />
        <PhraseItem it="Arrivederci" cn="再見" pron="阿里維代爾奇" />
      </div>
    </div>
  );
}

// --- 3. 加上 Type Any 的共用小元件 (解決 TypeScript 報錯) ---

function NavItem({ Icon, label, isActive, onClick }: any) {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-14 cursor-pointer transition-colors duration-200 ${
        isActive ? 'text-white' : 'text-gray-500 hover:text-gray-300'
      }`}
    >
      <div
        className={`mb-1 p-2 rounded-2xl transition-all duration-200 ${
          isActive ? 'bg-white/10' : ''
        }`}
      >
        <Icon className="w-5 h-5" />
      </div>
      <span className="text-[10px] font-semibold">{label}</span>
    </div>
  );
}

function StopDot({ active, label, sub }: any) {
  return (
    <div className="flex flex-col items-center z-10 w-12">
      <div
        className={`w-3 h-3 rounded-full mb-2 ${
          active
            ? 'bg-orange-300 shadow-[0_0_10px_rgba(253,186,116,0.8)]'
            : 'bg-gray-600'
        }`}
      ></div>
      <span
        className={`text-[10px] font-bold ${
          active ? 'text-orange-200' : 'text-gray-300'
        }`}
      >
        {label}
      </span>
      <span className="text-[9px] text-gray-500 whitespace-nowrap">{sub}</span>
    </div>
  );
}

function CategoryCard({ Icon, title, desc }: any) {
  return (
    <div className="bg-[#1c1c21] rounded-2xl p-3 border border-white/5 flex flex-col h-32 hover:bg-[#25252b] transition-colors cursor-pointer">
      <div className="text-orange-200 mb-3">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="font-bold text-xs mb-1">{title}</h3>
      <p className="text-[10px] text-gray-400 leading-snug line-clamp-3">
        {desc}
      </p>
    </div>
  );
}

function TicketCard({ tag, title, sub, img }: any) {
  return (
    <div className="w-36 bg-[#1c1c21] rounded-2xl border border-white/5 overflow-hidden flex-shrink-0 cursor-pointer hover:bg-[#25252b] transition-colors">
      <div className="h-20 relative">
        <img src={img} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30"></div>
        <span className="absolute bottom-2 left-2 text-[9px] font-bold tracking-widest bg-black/60 px-2 py-0.5 rounded text-white">
          {tag}
        </span>
      </div>
      <div className="p-3">
        <h4 className="text-xs font-bold mb-3 leading-tight h-8 line-clamp-2">
          {title}
        </h4>
        <div className="flex justify-between items-center text-[9px] text-gray-500">
          <span className="truncate mr-1">{sub}</span>
          <span className="font-mono flex-shrink-0">#</span>
        </div>
      </div>
    </div>
  );
}

function PhraseItem({ it, cn, pron }: any) {
  return (
    <div className="flex items-center p-3 border-b border-white/5 last:border-0 hover:bg-white/5 rounded-2xl transition cursor-pointer">
      <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-4 text-gray-300 flex-shrink-0">
        <Icons.Play className="w-3 h-3" fill="currentColor" />
      </button>
      <div className="flex-1">
        <h4 className="font-bold text-base leading-none mb-1">{it}</h4>
        <p className="text-xs text-gray-300 mb-0.5">{cn}</p>
        <p className="text-[10px] text-gray-500">讀音：{pron}</p>
      </div>
    </div>
  );
}
