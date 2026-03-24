interface LogoProps {
  variant?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ size = 'md' }: LogoProps) {
  const heights = { sm: 99, md: 140, lg: 198 }

  return (
    <img
      src="/images/LogoEMSAC_SinFondo.png"
      alt="EMSAC — Equipos Mecánicos S.A."
      style={{ height: heights[size], width: 'auto', display: 'block' }}
    />
  )
}
