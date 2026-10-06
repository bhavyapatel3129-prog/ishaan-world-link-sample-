import React from 'react';

export type TimberSpeciesKey =
  | 'teak_hero'
  | 'teak_logs'
  | 'teak_squares'
  | 'teak_sawn'
  | 'teak_processing'
  | 'pine'
  | 'syp'
  | 'spruce'
  | 'meranti'
  | 'malaysian_sal'
  | 'wana'
  | 'heritage_timber'
  | 'contact_timber';

interface TimberVisualProps {
  species: TimberSpeciesKey;
  className?: string;
  aspectRatio?: '16/9' | '4/3' | '3/2' | '1/1' | 'auto';
  showBadge?: boolean;
  alt?: string;
}

export const TimberVisual: React.FC<TimberVisualProps> = ({
  species,
  className = '',
  aspectRatio = '4/3',
  showBadge = false,
  alt
}) => {
  const getSpeciesData = () => {
    switch (species) {
      case 'teak_hero':
        return {
          title: 'Premium Teak Logs & Sawn Timber',
          category: 'Tectona grandis',
          tone: 'Golden Amber & Honey Brown',
          bgBase: '#2B1E13',
          pattern: 'teak_deep',
          grainColors: ['#C38B4B', '#9D6631', '#78491E', '#DFAC6E', '#5A3414'],
          typeLabel: 'Golden Teak Collection'
        };
      case 'teak_logs':
        return {
          title: 'Teak Round Logs',
          category: 'Natural Round Form',
          tone: 'Warm Golden-Brown Heartwood',
          bgBase: '#342316',
          pattern: 'end_grain_rings',
          grainColors: ['#BE8648', '#8E5828', '#5E3816', '#E2B274'],
          typeLabel: 'Round Logs'
        };
      case 'teak_squares':
        return {
          title: 'Teak Rough Squares',
          category: 'Four-Side Sawn Block',
          tone: 'Rich Honey-Brown Grain',
          bgBase: '#302014',
          pattern: 'rough_square',
          grainColors: ['#C58F50', '#95602E', '#6B401B', '#DDB075'],
          typeLabel: 'Rough Squares'
        };
      case 'teak_sawn':
        return {
          title: 'Teak Sawn Sizes',
          category: 'Precision Cut Planks',
          tone: 'Uniform Golden Lustre',
          bgBase: '#2C1C11',
          pattern: 'sawn_planks',
          grainColors: ['#C89354', '#A16A34', '#784A20', '#E5BA82'],
          typeLabel: 'Sawn Sizes'
        };
      case 'teak_processing':
        return {
          title: 'Upcoming Teak Processing',
          category: 'Precision Processing',
          tone: 'Customized Dimensional Cutting',
          bgBase: '#1F1813',
          pattern: 'precision_cut',
          grainColors: ['#C79050', '#8D5626', '#4E2F13', '#F2C991'],
          typeLabel: 'Gandhidham Facility • Coming Soon'
        };
      case 'pine':
        return {
          title: 'Pine Timber',
          category: 'Softwood',
          tone: 'Pale Blonde & Natural Grain',
          bgBase: '#D8CBBA',
          pattern: 'pine_grain',
          grainColors: ['#F3E8D3', '#E5D4BA', '#CEBA9B', '#B49E7C', '#FFF6E5'],
          typeLabel: 'Pale Softwood'
        };
      case 'syp':
        return {
          title: 'Southern Yellow Pine (SYP)',
          category: 'Softwood',
          tone: 'Warm Yellow-Amber with Pronounced Grain',
          bgBase: '#C99E5C',
          pattern: 'syp_pronounced',
          grainColors: ['#E6BF7A', '#CFA055', '#A77530', '#875B20', '#F7D69B'],
          typeLabel: 'Southern Yellow Pine'
        };
      case 'spruce':
        return {
          title: 'Spruce Timber',
          category: 'Softwood',
          tone: 'Light Cream with Fine Straight Grain',
          bgBase: '#E2DBD0',
          pattern: 'spruce_fine',
          grainColors: ['#FAF6ED', '#EDE5D8', '#D7CCBC', '#BEB19F', '#FFFFFF'],
          typeLabel: 'Light-Coloured Softwood'
        };
      case 'meranti':
        return {
          title: 'Meranti Timber',
          category: 'Hardwood',
          tone: 'Reddish-Brown to Pinkish-Brown',
          bgBase: '#582B24',
          pattern: 'meranti_hardwood',
          grainColors: ['#9A5344', '#7D3E32', '#612D23', '#492018', '#B76F5E'],
          typeLabel: 'Reddish-Brown Hardwood'
        };
      case 'malaysian_sal':
        return {
          title: 'Malaysian Sal Timber',
          category: 'Hardwood',
          tone: 'Substantial Dark Warm Hardwood with Coarse Grain',
          bgBase: '#3A291E',
          pattern: 'sal_dense',
          grainColors: ['#65452F', '#4D3322', '#362316', '#26170E', '#825C40'],
          typeLabel: 'Dense Hardwood'
        };
      case 'wana':
        return {
          title: 'Wana Timber',
          category: 'Hardwood',
          tone: 'Authentic Round Logs & Commercial Sawn Cut',
          bgBase: '#46382E',
          pattern: 'wana_timber',
          grainColors: ['#7A6150', '#5F4A3C', '#46362A', '#30241B', '#967A66'],
          typeLabel: 'Hardwood'
        };
      case 'heritage_timber':
        return {
          title: 'Five Decades of Timber Heritage',
          category: 'Family Legacy',
          tone: 'Aged Natural Wood & Craft',
          bgBase: '#261C14',
          pattern: 'teak_deep',
          grainColors: ['#A8733E', '#784D24', '#4D2F13', '#CCA06C', '#321D0A'],
          typeLabel: 'Heritage & Experience'
        };
      case 'contact_timber':
      default:
        return {
          title: 'Ishaan Worldlink Timber Inquiries',
          category: 'Premium Selection',
          tone: 'Warm Architectural Wood',
          bgBase: '#221912',
          pattern: 'sawn_planks',
          grainColors: ['#BF8A4F', '#8C5A2B', '#5A3716', '#DCAB70', '#3E240D'],
          typeLabel: 'Direct Supply Desk'
        };
    }
  };

  const data = getSpeciesData();
  const ratioClasses = {
    '16/9': 'aspect-16/9',
    '4/3': 'aspect-4/3',
    '3/2': 'aspect-3/2',
    '1/1': 'aspect-square',
    'auto': ''
  }[aspectRatio];

  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-neutral-900 shadow-sm border border-[#EBE3D8]/80 group ${ratioClasses} ${className}`}
      role="img"
      aria-label={alt || `${data.title} - ${data.tone}`}
    >
      {/* SVG Canvas for Photorealistic Species Texture */}
      <svg
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle noise/texture overlay filter */}
          <filter id={`wood-grain-${species}`} x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency={
                species === 'spruce'
                  ? '0.008 0.08'
                  : species === 'malaysian_sal'
                  ? '0.02 0.05'
                  : '0.012 0.04'
              }
              numOctaves="4"
              result="noise"
            />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.14 0"
              result="coloredNoise"
            />
            <feComposite in="SourceGraphic" in2="coloredNoise" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
          </filter>

          {/* Gradients tailored to timber species */}
          <linearGradient id={`grad-base-${species}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={data.grainColors[0]} />
            <stop offset="35%" stopColor={data.grainColors[1]} />
            <stop offset="70%" stopColor={data.grainColors[2]} />
            <stop offset="100%" stopColor={data.grainColors[data.grainColors.length - 1]} />
          </linearGradient>

          <linearGradient id={`sheen-${species}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.18" />
            <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.32" />
          </linearGradient>
        </defs>

        {/* Base wood foundation */}
        <rect width="800" height="600" fill={data.bgBase} />
        <rect width="800" height="600" fill={`url(#grad-base-${species})`} opacity="0.95" />

        {/* Species-specific geometric rendering */}

        {/* 1. TEAK: Long undulating organic grain lines, rich golden honey heartwood with dark resin veins */}
        {(species === 'teak_hero' || species === 'heritage_timber') && (
          <g opacity="0.88">
            {/* Long parallel flowing grain waves */}
            {[...Array(26)].map((_, i) => {
              const y = i * 24;
              return (
                <path
                  key={i}
                  d={`M-20,${y + 10} Q200,${y - 18 + (i % 3) * 12} 420,${y + 14 - (i % 2) * 8} T820,${y + 6}`}
                  fill="none"
                  stroke={i % 2 === 0 ? data.grainColors[1] : data.grainColors[3]}
                  strokeWidth={i % 4 === 0 ? 3.5 : 1.8}
                  opacity={0.35 + (i % 5) * 0.12}
                />
              );
            })}
            {/* Medullary rays / deep teak cathedrals */}
            <path
              d="M180,620 C220,440 290,260 380,180 C470,260 540,440 580,620"
              fill="none"
              stroke={data.grainColors[2]}
              strokeWidth="5"
              opacity="0.45"
            />
            <path
              d="M230,620 C260,460 320,310 380,240 C440,310 500,460 530,620"
              fill="none"
              stroke={data.grainColors[3]}
              strokeWidth="3.2"
              opacity="0.55"
            />
            <path
              d="M280,620 C300,500 340,380 380,320 C420,380 460,500 480,620"
              fill="none"
              stroke={data.grainColors[1]}
              strokeWidth="2.5"
              opacity="0.6"
            />
          </g>
        )}

        {/* 2. TEAK ROUND LOGS: Cross-section end-grain annual growth rings and natural bark rim */}
        {species === 'teak_logs' && (
          <g>
            {/* Giant Round Log cross-section */}
            <ellipse cx="400" cy="300" rx="360" ry="260" fill="#2D1D13" />
            {/* Bark Ring */}
            <ellipse
              cx="400"
              cy="300"
              rx="355"
              ry="255"
              fill="none"
              stroke="#1C110A"
              strokeWidth="22"
              strokeDasharray="18 4 12 3"
            />
            <ellipse
              cx="400"
              cy="300"
              rx="340"
              ry="242"
              fill="none"
              stroke="#4A301E"
              strokeWidth="10"
              opacity="0.85"
            />
            {/* Sapwood boundary */}
            <ellipse
              cx="400"
              cy="300"
              rx="325"
              ry="230"
              fill="#986835"
              opacity="0.9"
            />
            {/* Heartwood fill */}
            <ellipse
              cx="405"
              cy="302"
              rx="290"
              ry="205"
              fill="#BE8648"
            />
            {/* Concentric Annual Rings */}
            {[260, 235, 210, 185, 160, 138, 115, 94, 75, 56, 40, 24, 12].map((r, idx) => (
              <ellipse
                key={idx}
                cx={405 + (idx % 3) * 2 - 1}
                cy={302 + (idx % 2) * 2}
                rx={r}
                ry={r * 0.71}
                fill="none"
                stroke={idx % 2 === 0 ? '#633B18' : '#885324'}
                strokeWidth={idx % 3 === 0 ? 3 : 1.8}
                opacity={0.65}
              />
            ))}
            {/* Radial drying fissures (authentic end grain) */}
            <line x1="405" y1="302" x2="680" y2="340" stroke="#381F0D" strokeWidth="3" opacity="0.8" />
            <line x1="405" y1="302" x2="160" y2="220" stroke="#381F0D" strokeWidth="2.5" opacity="0.75" />
            <line x1="405" y1="302" x2="480" y2="105" stroke="#381F0D" strokeWidth="2.8" opacity="0.7" />
            <line x1="405" y1="302" x2="310" y2="470" stroke="#381F0D" strokeWidth="2.2" opacity="0.65" />
          </g>
        )}

        {/* 3. TEAK ROUGH SQUARES: Four-side squared beam presentation with sawn texture */}
        {species === 'teak_squares' && (
          <g>
            {/* Stack of squared teak cant / rough square timber */}
            <g transform="translate(40, 50)">
              {/* Back blocks */}
              <rect x="360" y="40" width="360" height="220" fill="#754820" stroke="#3E240D" strokeWidth="3" />
              <rect x="40" y="40" width="340" height="220" fill="#8E5727" stroke="#3E240D" strokeWidth="3" />
              {/* Front main squared block */}
              <rect x="90" y="160" width="460" height="280" fill="#C58F50" stroke="#4F2D12" strokeWidth="4" />
              {/* Top face perspective */}
              <polygon points="90,160 170,90 630,90 550,160" fill="#DDB075" stroke="#4F2D12" strokeWidth="3" />
              {/* Side face */}
              <polygon points="550,160 630,90 630,370 550,440" fill="#885324" stroke="#4F2D12" strokeWidth="3" />

              {/* End grain rings on the front face of rough square */}
              {[210, 175, 140, 110, 80, 55, 30].map((rad, i) => (
                <circle
                  key={i}
                  cx="280"
                  cy="320"
                  r={rad}
                  fill="none"
                  stroke="#7A4B1F"
                  strokeWidth="2.5"
                  opacity="0.45"
                  clipPath="url(#front-square-clip)"
                />
              ))}
              {/* Saw-mark circular arced lines on sawn faces */}
              {[...Array(14)].map((_, i) => (
                <path
                  key={i}
                  d={`M${110 + i * 28},170 Q${150 + i * 28},300 ${110 + i * 28},430`}
                  fill="none"
                  stroke="#6B401B"
                  strokeWidth="1.6"
                  opacity="0.32"
                />
              ))}
            </g>
          </g>
        )}

        {/* 4. TEAK SAWN SIZES: Clean precision cut planks neatly stacked */}
        {species === 'teak_sawn' && (
          <g>
            {/* Multiple horizontal sawn planks stacked with stickering spacers */}
            {[...Array(8)].map((_, i) => {
              const y = 50 + i * 62;
              return (
                <g key={i}>
                  {/* Plank face */}
                  <rect
                    x="50"
                    y={y}
                    width="700"
                    height="50"
                    fill={i % 2 === 0 ? '#C89354' : '#BC8344'}
                    stroke="#4F2F14"
                    strokeWidth="2"
                  />
                  {/* Plank end grain edge */}
                  <rect x="700" y={y} width="50" height="50" fill="#8A5523" stroke="#4F2F14" strokeWidth="1.5" />
                  {/* Grain lines running horizontally */}
                  <line x1="60" y1={y + 14} x2="690" y2={y + 16} stroke="#E5BA82" strokeWidth="1.5" opacity="0.6" />
                  <line x1="60" y1={y + 28} x2="690" y2={y + 26} stroke="#784A20" strokeWidth="2.2" opacity="0.45" />
                  <line x1="60" y1={y + 38} x2="690" y2={y + 40} stroke="#9D6631" strokeWidth="1.8" opacity="0.5" />
                  {/* Sawn spacer sticker */}
                  <rect x="180" y={y + 50} width="30" height="12" fill="#5E3816" opacity="0.8" />
                  <rect x="420" y={y + 50} width="30" height="12" fill="#5E3816" opacity="0.8" />
                  <rect x="620" y={y + 50} width="30" height="12" fill="#5E3816" opacity="0.8" />
                </g>
              );
            })}
          </g>
        )}

        {/* 5. TEAK PROCESSING: Modern precision cut, dimensional lumber with guide laser line */}
        {species === 'teak_processing' && (
          <g>
            {/* Precision heavy teak beam being dimensionally sized */}
            <rect x="80" y="120" width="640" height="360" fill="#C79050" stroke="#503014" strokeWidth="4" />
            {/* Top sawn surface */}
            <polygon points="80,120 180,50 780,50 680,120" fill="#E8B878" stroke="#503014" strokeWidth="3" />
            <polygon points="720,120 780,50 780,410 720,480" fill="#825123" stroke="#503014" strokeWidth="3" />

            {/* Tight longitudinal grain on sawn face */}
            {[...Array(18)].map((_, i) => (
              <line
                key={i}
                x1="90"
                y1={135 + i * 19}
                x2="710"
                y2={138 + i * 19}
                stroke={i % 3 === 0 ? '#EFC287' : '#7D4C1F'}
                strokeWidth={i % 2 === 0 ? 2.2 : 1.4}
                opacity="0.5"
              />
            ))}

            {/* Precision dimension measurement markers (Length, Width, Thickness) */}
            <g opacity="0.85">
              {/* Length indicator arrow */}
              <line x1="100" y1="460" x2="700" y2="460" stroke="#1D150F" strokeWidth="3" strokeDasharray="6 4" />
              <polygon points="100,460 115,454 115,466" fill="#1D150F" />
              <polygon points="700,460 685,454 685,466" fill="#1D150F" />
              {/* Precision blade vertical kerf line */}
              <line x1="430" y1="40" x2="430" y2="520" stroke="#D93829" strokeWidth="3.5" opacity="0.9" />
              <circle cx="430" cy="280" r="14" fill="none" stroke="#D93829" strokeWidth="2.5" />
              <circle cx="430" cy="280" r="3" fill="#D93829" />
            </g>
          </g>
        )}

        {/* 6. SOFTWOOD - PINE: Pale blonde wood with natural straight grain and clean sawn plank structure */}
        {species === 'pine' && (
          <g>
            {/* Multiple Pale Blonde Pine Boards */}
            {[...Array(6)].map((_, i) => {
              const y = 40 + i * 88;
              return (
                <g key={i}>
                  <rect
                    x="40"
                    y={y}
                    width="720"
                    height="76"
                    fill={i % 2 === 0 ? '#F4EBDA' : '#EDE0CB'}
                    stroke="#BAA78C"
                    strokeWidth="1.8"
                  />
                  {/* Pale grain streaks */}
                  <line x1="45" y1={y + 18} x2="755" y2={y + 20} stroke="#E2D0B6" strokeWidth="2" opacity="0.8" />
                  <line x1="45" y1={y + 36} x2="755" y2={y + 34} stroke="#CFB998" strokeWidth="2.5" opacity="0.65" />
                  <line x1="45" y1={y + 54} x2="755" y2={y + 56} stroke="#E8DAC4" strokeWidth="1.8" opacity="0.85" />
                  {/* Natural pine small light oval knot */}
                  {i === 1 && (
                    <ellipse cx="260" cy={y + 38} rx="26" ry="14" fill="#BFA37E" stroke="#9A7B54" strokeWidth="2" />
                  )}
                  {i === 4 && (
                    <ellipse cx="560" cy={y + 42} rx="22" ry="12" fill="#BFA37E" stroke="#9A7B54" strokeWidth="2" />
                  )}
                </g>
              );
            })}
          </g>
        )}

        {/* 7. SOFTWOOD - SYP (Southern Yellow Pine): Warm yellow-amber tone with strong dense dark resin lines */}
        {species === 'syp' && (
          <g>
            {/* SYP Planks with bold alternating summerwood/springwood amber stripes */}
            {[...Array(5)].map((_, i) => {
              const y = 30 + i * 108;
              return (
                <g key={i}>
                  <rect
                    x="40"
                    y={y}
                    width="720"
                    height="96"
                    fill={i % 2 === 0 ? '#E8C37E' : '#DFC075'}
                    stroke="#946624"
                    strokeWidth="2.2"
                  />
                  {/* Distinctive thick amber grain bands characteristic of Southern Yellow Pine */}
                  <path
                    d={`M45,${y + 22} Q320,${y + 10} 480,${y + 32} T755,${y + 20}`}
                    fill="none"
                    stroke="#B47B2A"
                    strokeWidth="5"
                    opacity="0.85"
                  />
                  <path
                    d={`M45,${y + 44} Q240,${y + 56} 560,${y + 38} T755,${y + 48}`}
                    fill="none"
                    stroke="#9E671D"
                    strokeWidth="4"
                    opacity="0.8"
                  />
                  <path
                    d={`M45,${y + 68} Q380,${y + 80} 600,${y + 60} T755,${y + 72}`}
                    fill="none"
                    stroke="#B47B2A"
                    strokeWidth="4.5"
                    opacity="0.85"
                  />
                </g>
              );
            })}
          </g>
        )}

        {/* 8. SOFTWOOD - SPRUCE: Light-coloured, almost white-cream fine straight grain timber */}
        {species === 'spruce' && (
          <g>
            {/* Fine clean spruce sawn timber */}
            {[...Array(7)].map((_, i) => {
              const y = 35 + i * 76;
              return (
                <g key={i}>
                  <rect
                    x="40"
                    y={y}
                    width="720"
                    height="66"
                    fill={i % 2 === 0 ? '#F8F5EE' : '#EFECE2'}
                    stroke="#CCC4B5"
                    strokeWidth="1.5"
                  />
                  {/* Ultra-fine straight grain lines */}
                  {[...Array(5)].map((_, lineIdx) => (
                    <line
                      key={lineIdx}
                      x1="45"
                      y1={y + 10 + lineIdx * 11}
                      x2="755"
                      y2={y + 10 + lineIdx * 11}
                      stroke="#DDD4C4"
                      strokeWidth="1.2"
                      opacity="0.75"
                    />
                  ))}
                </g>
              );
            })}
          </g>
        )}

        {/* 9. HARDWOOD - MERANTI: Rich reddish-brown / pinkish-brown dense interlocking grain */}
        {species === 'meranti' && (
          <g>
            {/* Substantial reddish-brown Meranti hardwood boards */}
            {[...Array(5)].map((_, i) => {
              const y = 30 + i * 108;
              return (
                <g key={i}>
                  <rect
                    x="40"
                    y={y}
                    width="720"
                    height="96"
                    fill={i % 2 === 0 ? '#8E4A3B' : '#7D3D30'}
                    stroke="#4F1F17"
                    strokeWidth="2.5"
                  />
                  {/* Interlocking porous hardwood grain */}
                  {[...Array(7)].map((_, pIdx) => (
                    <path
                      key={pIdx}
                      d={`M45,${y + 12 + pIdx * 12} C220,${y + 8 + pIdx * 13} 450,${y + 16 + pIdx * 11} 755,${y + 12 + pIdx * 12}`}
                      fill="none"
                      stroke={pIdx % 2 === 0 ? '#AB5E4E' : '#612A20'}
                      strokeWidth={pIdx % 3 === 0 ? 3 : 1.8}
                      opacity="0.7"
                    />
                  ))}
                  {/* Subtle pale vessel pore flecks */}
                  {[120, 280, 440, 610].map((xPore, pI) => (
                    <line
                      key={pI}
                      x1={xPore + (i * 45) % 100}
                      y1={y + 25}
                      x2={xPore + (i * 45) % 100 + 40}
                      y2={y + 26}
                      stroke="#B86C5D"
                      strokeWidth="1.5"
                      opacity="0.55"
                    />
                  ))}
                </g>
              );
            })}
          </g>
        )}

        {/* 10. HARDWOOD - MALAYSIAN SAL: Substantial dark warm timber, coarse fibrous grain, heavy structure */}
        {species === 'malaysian_sal' && (
          <g>
            {/* Heavy dense structural timbers */}
            <g>
              {/* Lower heavy beam */}
              <rect x="60" y="240" width="680" height="280" fill="#4B3322" stroke="#24160E" strokeWidth="4" />
              {/* Upper beam */}
              <rect x="120" y="60" width="560" height="190" fill="#583D29" stroke="#24160E" strokeWidth="3.5" />
              {/* Dense fibrous coarse grain lines */}
              {[...Array(16)].map((_, i) => (
                <line
                  key={i}
                  x1="65"
                  y1={255 + i * 16}
                  x2="735"
                  y2={255 + i * 16}
                  stroke={i % 2 === 0 ? '#6D4C33' : '#332115'}
                  strokeWidth={i % 3 === 0 ? 3.5 : 2}
                  opacity="0.75"
                />
              ))}
              {/* End grain beam cut */}
              <polygon points="680,60 740,20 740,210 680,250" fill="#301F14" stroke="#24160E" strokeWidth="2.5" />
              <polygon points="120,60 180,20 740,20 680,60" fill="#714F35" stroke="#24160E" strokeWidth="2.5" />
            </g>
          </g>
        )}

        {/* 11. HARDWOOD - WANA: Heavy round timber logs arranged with natural bark and sawn face */}
        {species === 'wana' && (
          <g>
            {/* Natural log stack */}
            <g transform="translate(50, 40)">
              {/* Bottom log 1 */}
              <ellipse cx="180" cy="360" rx="150" ry="110" fill="#544335" stroke="#2B211A" strokeWidth="4" />
              <ellipse cx="180" cy="360" rx="140" ry="102" fill="#77604E" stroke="#3A2C22" strokeWidth="2" />
              {/* Rings on log 1 */}
              {[95, 75, 55, 35, 18].map((r, i) => (
                <ellipse key={i} cx="180" cy="360" rx={r} ry={r * 0.73} fill="none" stroke="#423328" strokeWidth="2" opacity="0.6" />
              ))}

              {/* Bottom log 2 */}
              <ellipse cx="500" cy="360" rx="160" ry="115" fill="#544335" stroke="#2B211A" strokeWidth="4" />
              <ellipse cx="500" cy="360" rx="150" ry="107" fill="#725B49" stroke="#3A2C22" strokeWidth="2" />
              {[105, 85, 60, 40, 20].map((r, i) => (
                <ellipse key={i} cx="500" cy="360" rx={r} ry={r * 0.71} fill="none" stroke="#423328" strokeWidth="2" opacity="0.6" />
              ))}

              {/* Top pyramid log */}
              <ellipse cx="340" cy="180" rx="170" ry="120" fill="#5A483A" stroke="#261C15" strokeWidth="5" />
              <ellipse cx="340" cy="180" rx="158" ry="110" fill="#7D6553" stroke="#382A20" strokeWidth="2.5" />
              {[115, 90, 70, 50, 30, 15].map((r, i) => (
                <ellipse key={i} cx="340" cy="180" rx={r} ry={r * 0.7} fill="none" stroke="#433428" strokeWidth="2.5" opacity="0.65" />
              ))}
            </g>
          </g>
        )}

        {/* Ambient Top Light Sheen */}
        <rect width="800" height="600" fill={`url(#sheen-${species})`} />

        {/* Editorial species watercraft seal */}
        <g opacity="0.22" transform="translate(670, 490)">
          <circle cx="50" cy="50" r="42" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
          <path d="M50 20 L50 80 M20 50 L80 50" stroke="#FFFFFF" strokeWidth="1" />
        </g>
      </svg>

      {/* Content overlay / gradient vignette for readable text */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

      {/* Species Label / Metadata at bottom of card */}
      <div className="absolute bottom-0 inset-x-0 p-5 text-white flex flex-col justify-end pointer-events-none">
        <div className="flex items-center justify-between gap-3 mb-1">
          <span className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#E5C9A4]">
            {data.category}
          </span>
          {showBadge && (
            <span className="text-[11px] tracking-wider text-neutral-300 font-normal">
              {data.typeLabel}
            </span>
          )}
        </div>
        <h4 className="text-xl font-semibold text-white tracking-tight font-serif drop-shadow-xs">
          {data.title}
        </h4>
        <p className="text-xs text-neutral-300 font-light mt-0.5 max-w-md line-clamp-1">
          {data.tone}
        </p>
      </div>
    </div>
  );
};
