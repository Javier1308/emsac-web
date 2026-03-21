interface PageHeroProps {
  label: string
  title: string
  titleAccent?: string
  description?: string
  image: string
}

export default function PageHero({ label, title, titleAccent, description, image }: PageHeroProps) {
  return (
    <section style={{
      position: 'relative',
      minHeight: 420,
      display: 'flex',
      alignItems: 'flex-end',
      overflow: 'hidden',
    }}>
      {/* Background image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.35)',
      }}/>

      {/* Diagonal pattern overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(255,255,255,0.015) 40px, rgba(255,255,255,0.015) 41px)',
      }}/>

      {/* Gradient bottom line */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: 4,
        background: 'linear-gradient(to right, #C41E1E, #1B3A6B)',
      }}/>

      {/* Content */}
      <div className="page-hero-content" style={{
        position: 'relative',
        maxWidth: 1200,
        width: '100%',
        margin: '0 auto',
        padding: '80px 40px 64px',
      }}>
        <p className="label" style={{ marginBottom: 12 }}>{label}</p>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 900,
          fontSize: 'clamp(48px, 7vw, 80px)',
          textTransform: 'uppercase',
          lineHeight: 0.95,
          color: '#fff',
        }}>
          {title}
          {titleAccent && <><br /><span style={{ color: '#C41E1E' }}>{titleAccent}</span></>}
        </h1>
        {description && (
          <p style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            fontSize: 18,
            color: '#fff',
            marginTop: 20,
            maxWidth: 560,
            lineHeight: 1.7,
          }}>
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
