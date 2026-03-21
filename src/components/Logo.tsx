interface LogoProps {
  variant?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ variant = 'light', size = 'md' }: LogoProps) {
  const scales = { sm: 0.6, md: 0.85, lg: 1.2 }
  const s = scales[size]
  const textColor = variant === 'light' ? '#FFFFFF' : '#111111'
  const subColor = variant === 'light' ? '#C0C0C0' : '#C0C0C0'

  return (
    <svg
      width={Math.round(310 * s)}
      height={Math.round(72 * s)}
      viewBox="0 0 310 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gear icon */}
      <g transform={`translate(0, 4) scale(0.85)`}>
        <polygon points="36,0 62,15 62,45 36,60 10,45 10,15" fill="none" stroke="#C41E1E" strokeWidth="2.5"/>
        <polygon points="36,12 52,21 52,39 36,48 20,39 20,21" fill="#C41E1E" fillOpacity="0.12"/>
        <rect x="32.5" y="17" width="7" height="26" rx="1.5" fill="#C41E1E"/>
        <rect x="18" y="26.5" width="36" height="7" rx="1.5" fill="#C41E1E"/>
        <circle cx="36" cy="30" r="6" fill="transparent"/>
        <circle cx="36" cy="30" r="3" fill="#C41E1E"/>
        {/* Gear teeth */}
        <rect x="33" y="3"  width="6" height="8" rx="1" fill="#C41E1E"/>
        <rect x="33" y="49" width="6" height="8" rx="1" fill="#C41E1E"/>
        <rect x="4"  y="27" width="8" height="6" rx="1" fill="#C41E1E"/>
        <rect x="60" y="27" width="8" height="6" rx="1" fill="#C41E1E"/>
      </g>

      {/* Wordmark */}
      <text
        x="72"
        y="48"
        fontFamily="'Barlow Condensed', sans-serif"
        fontWeight="900"
        fontSize="52"
        fill={textColor}
        letterSpacing="-1"
      >
        EMSAC
      </text>

      {/* Orange underline */}
      <rect x="72" y="54" width="236" height="2.5" fill="#C41E1E"/>

      {/* Subtitle */}
      <text
        x="73"
        y="68"
        fontFamily="'Barlow Condensed', sans-serif"
        fontWeight="400"
        fontSize="9.5"
        fill={subColor}
        letterSpacing="2.5"
      >
        EQUIPOS MECÁNICOS S.A. — DESDE 1957
      </text>
    </svg>
  )
}
