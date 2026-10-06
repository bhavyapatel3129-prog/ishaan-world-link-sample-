import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark' | 'color';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  showText = true,
  size = 'md',
  variant = 'color'
}) => {
  const sizeMap = {
    sm: { h: 36, markW: 32 },
    md: { h: 46, markW: 42 },
    lg: { h: 64, markW: 56 },
    xl: { h: 84, markW: 76 }
  };

  const { h } = sizeMap[size];

  // Colors based on variant
  const sunColor = variant === 'dark' ? '#E5A922' : '#F2B328';
  const centerTreeColor = variant === 'dark' ? '#46BE63' : '#3EAD56';
  const sideTreeColor = variant === 'dark' ? '#27754A' : '#226942';
  const groundColor = variant === 'dark' ? '#328854' : '#2C7D4D';
  const textColor = variant === 'dark' ? '#F7F4EE' : '#32954F';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Brand Icon SVG */}
      <svg
        viewBox="0 0 280 260"
        style={{ height: `${h}px`, width: 'auto' }}
        className="shrink-0 drop-shadow-xs"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Sun in background to upper right of center */}
        <circle cx="178" cy="88" r="46" fill={sunColor} />

        {/* Left Evergreen Tree */}
        <g fill={sideTreeColor}>
          {/* Top cone */}
          <path d="M85 78 L97 96 L91 97 L105 118 L98 119 L114 142 L106 143 L124 168 L46 168 L64 143 L56 142 L72 119 L65 118 L79 97 L73 96 Z" />
          {/* Left Trunk */}
          <path d="M78 168 L76 200 C80 200 86 199 92 199 L92 168 Z" />
        </g>

        {/* Right Evergreen Tree */}
        <g fill={sideTreeColor}>
          {/* Top cone */}
          <path d="M195 78 L207 96 L201 97 L215 118 L208 119 L224 142 L216 143 L234 168 L156 168 L174 143 L166 142 L182 119 L175 118 L189 97 L183 96 Z" />
          {/* Right Trunk */}
          <path d="M188 168 L188 199 C194 199 200 200 204 200 L202 168 Z" />
        </g>

        {/* Center Prominent Pine Tree (Taller, brighter green) */}
        <g fill={centerTreeColor}>
          {/* Foliage */}
          <path d="M140 42 L154 65 L146 66 L164 92 L155 93 L175 122 L165 123 L188 155 L176 156 L198 188 L82 188 L104 156 L92 155 L115 123 L105 122 L125 93 L116 92 L134 66 L126 65 Z" />
          {/* Center Trunk */}
          <path d="M133 188 L130 201 C136 201 144 201 150 201 L147 188 Z" />
        </g>

        {/* Ground arch base */}
        <path
          d="M38 200 C100 196 180 196 242 201 C180 198 100 198 38 200 Z"
          fill={groundColor}
          stroke={groundColor}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Brand Typographic Wordmark */}
      {showText && (
        <div className="flex flex-col justify-center">
          <div className="flex items-start">
            <span
              className="font-bold tracking-[0.16em] leading-none"
              style={{
                color: textColor,
                fontSize: size === 'sm' ? '1.05rem' : size === 'md' ? '1.25rem' : size === 'lg' ? '1.75rem' : '2.25rem',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
            >
              IS<span className="font-light tracking-[0.12em]">H</span>
              {/* Chevron A's matching official logo */}
              <span className="inline-block px-[1.5px] scale-y-[1.02]">Λ</span>
              <span className="inline-block px-[1.5px] scale-y-[1.02]">Λ</span>
              N
            </span>
            <span
              className="text-[0.45em] font-semibold ml-0.5 relative top-[-0.2em]"
              style={{ color: textColor }}
            >
              TM
            </span>
          </div>
          <span
            className="tracking-[0.26em] font-medium uppercase mt-0.5"
            style={{
              color: textColor,
              fontSize: size === 'sm' ? '0.52rem' : size === 'md' ? '0.62rem' : size === 'lg' ? '0.85rem' : '1.05rem',
              letterSpacing: '0.28em'
            }}
          >
            WORLDLINK LLP
          </span>
        </div>
      )}
    </div>
  );
};
