import React from 'react';

interface WowStoreLogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  showText?: boolean;
  textClassName?: string;
  subTextClassName?: string;
}

export const WowStoreLogo: React.FC<WowStoreLogoProps> = ({
  className = '',
  size = 'md',
  showText = false,
  textClassName = '',
  subTextClassName = '',
}) => {
  // Determine pixel size for icon container
  let dimension = 40;
  if (typeof size === 'number') {
    dimension = size;
  } else {
    switch (size) {
      case 'xs':
        dimension = 24;
        break;
      case 'sm':
        dimension = 32;
        break;
      case 'md':
        dimension = 42;
        break;
      case 'lg':
        dimension = 56;
        break;
      case 'xl':
        dimension = 72;
        break;
    }
  }

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* 3D Wow Store Bag & Letter Waw Icon */}
      <div 
        style={{ width: dimension, height: dimension }} 
        className="relative shrink-0 select-none transition-transform duration-200 hover:scale-105"
      >
        <svg
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-md"
        >
          <defs>
            {/* Bag Blue Gradient */}
            <linearGradient id="wowBagGradient" x1="60" y1="90" x2="450" y2="480" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00A2FF" />
              <stop offset="35%" stopColor="#0072FF" />
              <stop offset="75%" stopColor="#0051E8" />
              <stop offset="100%" stopColor="#0038C7" />
            </linearGradient>

            {/* Bag Wave Ambient Gradient */}
            <linearGradient id="wowWaveGradient" x1="200" y1="300" x2="460" y2="460" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0040D0" stopOpacity="0" />
              <stop offset="100%" stopColor="#002D9C" stopOpacity="0.85" />
            </linearGradient>

            {/* Glossy Top Sheen */}
            <linearGradient id="wowTopSheen" x1="120" y1="120" x2="380" y2="220" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>

            {/* Orange Handle Gradient */}
            <linearGradient id="wowHandleGradient" x1="160" y1="35" x2="350" y2="160" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFB300" />
              <stop offset="40%" stopColor="#FF7A00" />
              <stop offset="100%" stopColor="#E65100" />
            </linearGradient>

            {/* Orange Sparks Gradient */}
            <linearGradient id="wowSparkGradient" x1="140" y1="170" x2="230" y2="270" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFCA28" />
              <stop offset="100%" stopColor="#FF8F00" />
            </linearGradient>

            {/* Letter Waw 3D Gradient */}
            <linearGradient id="wowLetterGradient" x1="150" y1="200" x2="380" y2="430" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="70%" stopColor="#F4F8FF" />
              <stop offset="100%" stopColor="#D9E6FF" />
            </linearGradient>

            {/* Letter Shadow Filter */}
            <filter id="wowDropShadow" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="2" dy="8" stdDeviation="6" floodColor="#001859" floodOpacity="0.45" />
            </filter>

            {/* Spark Shadow */}
            <filter id="sparkShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="1" dy="3" stdDeviation="3" floodColor="#00247D" floodOpacity="0.3" />
            </filter>
          </defs>

          {/* 1. Orange Curved Bag Handle */}
          <path
            d="M 175 160 C 175 60, 337 60, 337 160"
            stroke="url(#wowHandleGradient)"
            strokeWidth="36"
            strokeLinecap="round"
            fill="none"
          />

          {/* 2. Main Blue Shopping Bag Body */}
          <rect
            x="72"
            y="118"
            width="368"
            height="348"
            rx="84"
            fill="url(#wowBagGradient)"
          />

          {/* Subtle Bottom-Right Wave Curve for 3D depth */}
          <path
            d="M 440 310 C 420 370, 370 420, 260 440 C 310 460, 390 460, 440 420 Z"
            fill="url(#wowWaveGradient)"
          />

          {/* Glossy Curved Highlight on Top Left */}
          <path
            d="M 72 200 C 72 150, 120 118, 200 118 C 130 140, 90 190, 72 260 Z"
            fill="url(#wowTopSheen)"
          />

          {/* 3. Handle White Eyelets / Grommets */}
          {/* Left Eyelet */}
          <circle cx="175" cy="155" r="22" fill="#FFFFFF" />
          <circle cx="175" cy="155" r="14" fill="#0066E0" />
          <circle cx="175" cy="155" r="9" fill="#003E99" />

          {/* Right Eyelet */}
          <circle cx="337" cy="155" r="22" fill="#FFFFFF" />
          <circle cx="337" cy="155" r="14" fill="#0066E0" />
          <circle cx="337" cy="155" r="9" fill="#003E99" />

          {/* 4. Orange "Wow" Energy / Spark Exclamation Rays */}
          {/* Top Ray */}
          <path
            d="M 188 180 L 222 170 C 228 172, 230 180, 226 245 C 220 252, 212 250, 196 235 L 188 180 Z"
            fill="url(#wowSparkGradient)"
            filter="url(#sparkShadow)"
          />
          {/* Bottom Ray */}
          <path
            d="M 148 214 L 180 230 C 185 236, 182 245, 172 270 C 165 274, 155 272, 142 254 L 148 214 Z"
            fill="url(#wowSparkGradient)"
            filter="url(#sparkShadow)"
          />

          {/* 5. Central 3D Arabic Letter "و" (Waw) */}
          <g filter="url(#wowDropShadow)">
            {/* Main sweeping letter body */}
            <path
              d="M 282 202 
                 C 328 202, 380 238, 380 292 
                 C 380 348, 340 382, 282 382 
                 C 252 382, 228 368, 228 335 
                 C 228 290, 280 248, 328 248 
                 C 342 248, 345 258, 340 270 
                 C 330 295, 290 324, 258 324 
                 C 248 324, 245 315, 250 300 
                 C 260 270, 305 240, 328 240 
                 C 305 240, 260 260, 245 295 
                 C 230 330, 250 365, 285 365 
                 C 310 365, 335 348, 345 328 
                 C 340 370, 280 405, 215 418 
                 C 170 427, 142 405, 142 390 
                 C 142 384, 155 385, 175 378 
                 C 225 360, 290 310, 290 270 
                 C 290 238, 265 224, 245 230 
                 C 235 220, 255 202, 282 202 Z"
              fill="url(#wowLetterGradient)"
            />

            {/* Authentic Arabic Waw Loop & Head Enhancement */}
            <path
              d="M 292 200
                 C 345 200, 382 238, 382 292
                 C 382 350, 340 385, 290 385
                 C 255 385, 230 368, 230 335
                 C 230 290, 275 242, 335 242
                 C 348 242, 352 254, 345 272
                 C 332 305, 285 338, 255 338
                 C 246 338, 244 326, 250 308
                 C 262 268, 305 235, 335 235
                 C 300 235, 262 265, 250 305
                 C 236 348, 260 380, 295 380
                 C 324 380, 350 358, 358 332
                 C 348 375, 285 412, 212 424
                 C 170 431, 140 405, 140 388
                 C 140 382, 160 384, 185 375
                 C 240 352, 295 305, 295 265
                 C 295 235, 270 218, 250 226
                 C 240 215, 265 200, 292 200 Z"
              fill="#FFFFFF"
            />

            {/* Inner Waw Loop Hole */}
            <path
              d="M 330 258
                 C 310 258, 280 282, 270 310
                 C 268 316, 274 320, 282 316
                 C 305 302, 338 280, 342 265
                 C 344 260, 338 258, 330 258 Z"
              fill="#005BE8"
              opacity="0.95"
            />
          </g>
        </svg>
      </div>

      {/* Optional Brand Text */}
      {showText && (
        <div className="flex flex-col text-right">
          <div className="flex items-center gap-1.5">
            <span className={`font-black text-white tracking-wide ${textClassName || 'text-xl'}`}>
              WOW STORE
            </span>
            <span className="text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-1.5 py-0.5 rounded font-bold">
              عراق 🇮🇶
            </span>
          </div>
          <span className={`text-slate-400 font-medium ${subTextClassName || 'text-[11px]'}`}>
            واو ستور — الجودة والضمان الحقيقي
          </span>
        </div>
      )}
    </div>
  );
};
