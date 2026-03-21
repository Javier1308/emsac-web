interface Product {
  image: string
  name: string
  description?: string
}

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
      gap: 2,
    }}>
      {products.map((p, i) => (
        <div
          key={i}
          style={{
            background: '#fff',
            overflow: 'hidden',
            position: 'relative',
            cursor: 'default',
          }}
          onMouseEnter={e => {
            const img = e.currentTarget.querySelector('img') as HTMLImageElement
            if (img) img.style.transform = 'scale(1.06)'
            const overlay = e.currentTarget.querySelector('.overlay') as HTMLDivElement
            if (overlay) overlay.style.opacity = '1'
          }}
          onMouseLeave={e => {
            const img = e.currentTarget.querySelector('img') as HTMLImageElement
            if (img) img.style.transform = 'scale(1)'
            const overlay = e.currentTarget.querySelector('.overlay') as HTMLDivElement
            if (overlay) overlay.style.opacity = '0'
          }}
        >
          <div style={{ aspectRatio: '1', overflow: 'hidden', background: '#ffffff' }}>
            <img
              src={p.image}
              alt={p.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.4s ease',
              }}
            />
          </div>

          {/* Hover overlay */}
          <div
            className="overlay"
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(17,17,17,0.88)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 24,
              opacity: 0,
              transition: 'opacity 0.3s ease',
              textAlign: 'center',
            }}
          >
            <div style={{
              width: 32,
              height: 2,
              background: '#C41E1E',
              marginBottom: 12,
            }}/>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#fff',
              lineHeight: 1.3,
            }}>
              {p.name}
            </p>
            {p.description && (
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 13.5,
                color: '#C0C0C0',
                marginTop: 8,
                lineHeight: 1.6,
              }}>
                {p.description}
              </p>
            )}
          </div>

          {/* Name bar */}
          <div style={{
            padding: '12px 16px',
            background: '#1B3A6B',
            borderTop: '2px solid rgba(196,30,30,0.3)',
          }}>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#C0C0C0',
            }}>
              {p.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
