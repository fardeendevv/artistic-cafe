import React, { useState } from 'react';
import { Play, Pause, RotateCw, Sparkles } from 'lucide-react';

interface RotatingCupProps {
  imageSrc: string;
  altText: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showControls?: boolean;
  showSteam?: boolean;
  initialSpeed?: 'slow' | 'normal' | 'fast';
  className?: string;
  borderedPlate?: boolean;
  interactive?: boolean;
}

export const RotatingCup: React.FC<RotatingCupProps> = ({
  imageSrc,
  altText,
  size = 'md',
  showControls = false,
  showSteam = true,
  initialSpeed = 'normal',
  className = '',
  borderedPlate = true,
  interactive = true,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [speed, setSpeed] = useState<'slow' | 'normal' | 'fast'>(initialSpeed);
  const [manualRotation, setManualRotation] = useState<number>(0);
  const [isManual, setIsManual] = useState<boolean>(false);

  // Determine size classes
  const sizeClasses = {
    sm: 'w-28 h-28 sm:w-32 sm:h-32',
    md: 'w-36 h-36 sm:w-40 sm:h-40',
    lg: 'w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96',
    hero: 'w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px]',
  }[size];

  // Animation duration
  const getDuration = () => {
    switch (speed) {
      case 'fast':
        return '12s';
      case 'slow':
        return '35s';
      case 'normal':
      default:
        return '22s';
    }
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsManual(true);
    setIsPlaying(false);
    setManualRotation(Number(e.target.value));
  };

  const handleResumeAuto = () => {
    setIsManual(false);
    setIsPlaying(true);
  };

  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      {/* Steam Effect (Rising particles above the cup) */}
      {showSteam && (
        <div className="absolute -top-12 z-30 pointer-events-none flex justify-center items-end gap-3 w-32 h-16 overflow-hidden">
          <div className="w-2 h-10 bg-gradient-to-t from-white/40 via-white/20 to-transparent rounded-full blur-[1px] animate-steam-1" />
          <div className="w-2.5 h-12 bg-gradient-to-t from-amber-100/50 via-white/25 to-transparent rounded-full blur-[1px] animate-steam-2" />
          <div className="w-1.5 h-9 bg-gradient-to-t from-white/40 via-white/20 to-transparent rounded-full blur-[1px] animate-steam-3" />
        </div>
      )}

      {/* Ambient Saucer Glow */}
      <div className="absolute inset-0 rounded-full bg-[#C88A58]/20 filter blur-2xl scale-95 pointer-events-none transition-all duration-500 group-hover:scale-105" />

      {/* Main Rotating Cup & Plate Container */}
      <div
        className={`relative ${sizeClasses} rounded-full flex items-center justify-center transition-all duration-300 ${
          borderedPlate ? 'p-2 sm:p-2.5 bg-gradient-to-br from-amber-800/40 via-[#22110C] to-black/90 shadow-2xl border border-white/15' : ''
        }`}
      >
        {/* Rotating Core (360 degree continuous CSS rotation or manual degree) */}
        <div
          id={`rotating-cup-${altText.replace(/\s+/g, '-').toLowerCase()}`}
          className="w-full h-full rounded-full overflow-hidden flex items-center justify-center select-none cursor-pointer"
          style={{
            animation: !isManual && isPlaying ? `spin360 ${getDuration()} linear infinite` : 'none',
            transform: isManual ? `rotate(${manualRotation}deg)` : undefined,
            transformOrigin: 'center center',
          }}
          onClick={() => {
            if (interactive && !isManual) {
              setIsPlaying(!isPlaying);
            }
          }}
          title="Click to pause/play 360° spin"
        >
          <img
            src={imageSrc}
            alt={altText}
            loading="eager"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover rounded-full pointer-events-none drop-shadow-lg"
          />
        </div>
      </div>

      {/* Optional Interactive 360 Degree Controls Widget */}
      {showControls && (
        <div className="mt-4 flex flex-col items-center gap-2 bg-[#1A0C08]/85 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10 shadow-xl z-20">
          <div className="flex items-center gap-3 text-xs text-[#FAF7F2]/90">
            <button
              onClick={() => {
                if (isManual) {
                  handleResumeAuto();
                } else {
                  setIsPlaying(!isPlaying);
                }
              }}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-[#C88A58] text-white transition flex items-center gap-1 font-medium"
              title={isPlaying ? 'Pause 360° Rotation' : 'Play 360° Rotation'}
            >
              {isPlaying && !isManual ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying && !isManual ? 'Pause' : 'Rotate 360°'}</span>
            </button>

            <div className="h-4 w-px bg-white/20" />

            {/* Speed Options */}
            <div className="flex items-center gap-1 bg-white/5 p-0.5 rounded-lg">
              {(['slow', 'normal', 'fast'] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => {
                    setSpeed(s);
                    if (!isPlaying) setIsPlaying(true);
                    setIsManual(false);
                  }}
                  className={`px-2 py-0.5 rounded text-[11px] capitalize transition ${
                    speed === s && !isManual
                      ? 'bg-[#C88A58] text-white font-semibold shadow-sm'
                      : 'text-[#FAF7F2]/70 hover:text-white'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            <div className="h-4 w-px bg-white/20" />

            <button
              onClick={handleResumeAuto}
              className="p-1.5 rounded-lg hover:bg-white/10 text-[#C88A58] hover:text-white transition flex items-center gap-1"
              title="Reset continuous 360° rotation"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span className="text-[11px]">Auto Spin</span>
            </button>
          </div>

          {/* Interactive 360 Degree Dial Slider */}
          <div className="w-full flex items-center gap-2 pt-1 border-t border-white/10">
            <span className="text-[10px] text-[#FAF7F2]/60 font-mono">0°</span>
            <input
              type="range"
              min="0"
              max="360"
              value={manualRotation}
              onChange={handleSliderChange}
              className="w-36 sm:w-48 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#C88A58]"
              title="Drag to manually rotate cup 360°"
            />
            <span className="text-[10px] text-[#FAF7F2]/60 font-mono">360°</span>
            {isManual && (
              <span className="text-[10px] text-[#C88A58] font-bold font-mono ml-1">
                {manualRotation}°
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
