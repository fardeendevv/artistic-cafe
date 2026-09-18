import React, { useState } from 'react';
import { Lock, Coffee, Sparkles, Sliders, Timer, Play, RotateCcw } from 'lucide-react';
import { COFFEE_IMAGES } from '../data/coffeeData';
import { RotatingCup } from './RotatingCup';

export const PremiumBlendSection: React.FC = () => {
  const [showBrewGuide, setShowBrewGuide] = useState(false);
  const [coffeeGrams, setCoffeeGrams] = useState<number>(18);
  const [ratio, setRatio] = useState<number>(16);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);

  // Water calculated from coffeeGrams * ratio
  const waterMl = Math.round(coffeeGrams * ratio);

  // Timer simulation
  React.useEffect(() => {
    let interval: any;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins}:${remainingSecs < 10 ? '0' : ''}${remainingSecs}`;
  };

  return (
    <section
      id="about"
      className="py-20 sm:py-28 bg-[#F5EFEB] border-t border-b border-[#F4ECE4] overflow-hidden relative"
    >
      {/* Curved decorative wireframe stroke reminiscent of art in screenshot 2 */}
      <svg
        className="absolute -left-20 top-0 h-full w-96 text-[#3D2017]/5 pointer-events-none"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 400 800"
      >
        <path d="M-50,100 C150,200 250,500 50,750" />
        <path d="M-20,150 C180,250 220,550 20,700" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Visual: Large Top-Down Ceramic Cup & Saucer with 360-Degree Rotation */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-start">
            <div className="relative group">
              {/* Saucer Glow Shadow */}
              <div className="absolute inset-0 rounded-full bg-[#22110C]/10 filter blur-2xl transform translate-y-4" />

              {/* Ceramic Large Saucer Plate with 360° Rotating Cup */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-[#D6DCE0] via-[#ECEFF2] to-white p-5 sm:p-6 shadow-2xl flex items-center justify-center border border-white/60">
                {/* 360-degree rotating image */}
                <div
                  className="w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white/90 select-none cursor-pointer"
                  style={{
                    animation: 'spin360 26s linear infinite',
                    transformOrigin: 'center center',
                  }}
                  title="360° Rotating Premium Blend"
                >
                  <img
                    src={COFFEE_IMAGES.cappuccinoCup}
                    alt="Premium Blend Cappuccino with heart latte art"
                    referrerPolicy="no-referrer"
                    className="w-full h-full rounded-full object-cover select-none pointer-events-none drop-shadow-md"
                  />
                </div>
              </div>

              {/* 360 Degree Spinning badge */}
              <div className="absolute -bottom-2 right-4 bg-[#22110C] text-[#FAF7F2] text-xs px-3.5 py-1.5 rounded-full shadow-lg border border-white/10 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#C88A58] animate-ping" />
                <span>360° Continuous Roast View</span>
              </div>
            </div>
          </div>

          {/* Right Content Block: Premium Blend Headline + Tea Lover Callout (Screenshot 2) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-[#D59A78]/30 text-xs font-semibold text-[#8C5035] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#C88A58]" />
                <span>Direct Trade Sourced</span>
              </div>

              {/* Exact cursive title from screenshot 2 */}
              <h2 className="font-handwritten text-4xl sm:text-5xl lg:text-6xl text-[#22110C] leading-tight">
                Premium Blen Coffee
              </h2>

              <p className="text-[#532C20]/80 text-sm sm:text-base leading-relaxed max-w-xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste
                ratione ex alias quis magni at optio necessitatibus illum voluptatibus corporis dolorem.
              </p>
            </div>

            {/* Feature Item 1: Premium Coffee Badge (Screenshot 2 with Lock Icon) */}
            <div className="flex items-center gap-4 pt-1">
              <div className="w-12 h-12 rounded-2xl bg-[#FFEFEA] border border-[#FFD8CC] flex items-center justify-center text-[#3D2017] shadow-sm shrink-0">
                <Lock className="w-5 h-5 text-[#A3683A]" />
              </div>
              <div>
                <h4 className="font-bold text-[#22110C] text-base">Premium Coffee</h4>
                <p className="text-xs sm:text-sm text-[#532C20]/75">
                  Hand-selected grade 1 micro-lots roasted in small 12kg drums.
                </p>
              </div>
            </div>

            {/* Feature Item 2: Tea Lover Callout Box (Screenshot 2 right side) */}
            <div className="pl-6 border-l-4 border-[#A3683A] py-2 bg-white/50 rounded-r-2xl pr-6 backdrop-blur-xs shadow-sm">
              <h3 className="font-handwritten text-2xl sm:text-3xl text-[#22110C] mb-1">
                Tea Lover
              </h3>
              <p className="text-[#532C20]/85 text-xs sm:text-sm leading-relaxed max-w-lg">
                Brewing the finest artisanal tea requires patience, temperature precision, and a
                dash of passion to create a deeply comforting blend of restorative aromas and botanical flavors.
              </p>
            </div>

            {/* Interactive Brew Calculator Trigger */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setShowBrewGuide(!showBrewGuide)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2C1710] hover:bg-[#C88A58] text-[#FAF7F2] text-xs font-semibold shadow-md transition-all cursor-pointer"
              >
                <Sliders className="w-3.5 h-3.5 text-[#E4A877]" />
                <span>{showBrewGuide ? 'Hide Brew Ratio Calculator' : 'Interactive Brew Ratio Calculator'}</span>
              </button>
            </div>

            {/* Interactive Brew Calculator Widget */}
            {showBrewGuide && (
              <div className="bg-white p-6 rounded-2xl border border-[#F4ECE4] shadow-lg space-y-4 animate-in fade-in duration-300">
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <h4 className="font-bold text-sm text-[#22110C] flex items-center gap-2">
                    <Coffee className="w-4 h-4 text-[#C88A58]" />
                    <span>Barista Brew Ratio Dial</span>
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold bg-[#FAF6F0] px-2.5 py-1 rounded-md text-[#8C5035]">
                      Ratio 1:{ratio}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Coffee Grams Slider */}
                  <div>
                    <label className="text-xs text-[#532C20] font-medium flex justify-between">
                      <span>Coffee Dose:</span>
                      <span className="font-bold text-[#22110C]">{coffeeGrams} grams</span>
                    </label>
                    <input
                      type="range"
                      min="12"
                      max="35"
                      value={coffeeGrams}
                      onChange={(e) => setCoffeeGrams(Number(e.target.value))}
                      className="w-full mt-1.5 accent-[#C88A58] cursor-pointer"
                    />
                  </div>

                  {/* Ratio Slider */}
                  <div>
                    <label className="text-xs text-[#532C20] font-medium flex justify-between">
                      <span>Strength Ratio:</span>
                      <span className="font-bold text-[#22110C]">1:{ratio}</span>
                    </label>
                    <input
                      type="range"
                      min="13"
                      max="18"
                      value={ratio}
                      onChange={(e) => setRatio(Number(e.target.value))}
                      className="w-full mt-1.5 accent-[#C88A58] cursor-pointer"
                    />
                  </div>
                </div>

                {/* Calculation summary */}
                <div className="flex flex-wrap items-center justify-between bg-[#FAF6F0] p-3 rounded-xl text-xs gap-3">
                  <div>
                    <span className="text-[#8C5035] block text-[11px]">Recommended Water Yield:</span>
                    <span className="text-base font-bold text-[#22110C]">{waterMl} ml (g)</span>
                  </div>

                  {/* Brew Timer */}
                  <div className="flex items-center gap-2">
                    <div className="text-right">
                      <span className="text-[10px] text-[#8C5035] block">Brew Timer:</span>
                      <span className="font-mono font-bold text-sm text-[#22110C]">
                        {formatTime(timerSeconds)}
                      </span>
                    </div>
                    <button
                      onClick={() => setIsTimerRunning(!isTimerRunning)}
                      className={`p-2 rounded-lg text-white text-xs ${
                        isTimerRunning ? 'bg-amber-600' : 'bg-[#2C1710] hover:bg-[#C88A58]'
                      }`}
                    >
                      {isTimerRunning ? 'Pause' : <Play className="w-3.5 h-3.5" />}
                    </button>
                    <button
                      onClick={() => {
                        setIsTimerRunning(false);
                        setTimerSeconds(0);
                      }}
                      className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
