interface LogoProps {
  variant?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ size = 'md' }: LogoProps) {
  const circles = { sm: 56, md: 140, lg: 198 }
  const imgScale = { sm: 1.4, md: 1, lg: 1 }

  const h = circles[size]
  const scale = imgScale[size]

  return (
    <div style={{
      width: h,
      height: h,
      borderRadius: '50%',
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      overflow: 'visible',
    }}>
      <img
        src="/images/EMSALogo.png"
        alt="EMSAC — Equipos Mecánicos S.A."
        style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', transform: `scale(${scale})` }}
      />
    </div>
  )
}
