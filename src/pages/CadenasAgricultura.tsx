import PageHero from '../components/PageHero'
import ProductGrid from '../components/ProductGrid'
import SolicitudCTA from '../components/SolicitudCTA'

const products = [
  { image: '/images/0000021107IM01.jpg', name: 'Cadena Open Pin', description: 'Para cosechadoras y elevadores' },
  { image: '/images/0000021108IM01.jpg', name: 'Cadena con Aletas', description: 'Para clasificadoras de vegetales' },
  { image: '/images/0000021109IM01.jpg', name: 'Cadena Pines Largos', description: 'Para empacadoras industriales' },
  { image: '/images/0000021110IM01.jpg', name: 'Cadena Escalonada', description: 'Para elevadores de granos' },
]

const aplicaciones = [
  { icon: '🌾', label: 'Cosechadoras' },
  { icon: '🥬', label: 'Clasificadora de Vegetales' },
  { icon: '🌽', label: 'Elevadores de Granos' },
  { icon: '📦', label: 'Empacadoras' },
]

export default function CadenasAgricultura() {
  return (
    <>
      <PageHero
        label="Cadenas"
        title="CADENAS PARA"
        titleAccent="AGRICULTURA"
        description="Suministradas con nuestra marca 'WROL', fabricadas bajo estrictas normas de control. Incluimos la colocación de aditamentos especiales según la necesidad del cliente."
        image="/images/0000021103IM01.jpg"
      />

      {/* Aplicaciones */}
      <section style={{ background: '#1B3A6B', padding: '56px 0' }}>
        <div className="m-pad" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
          <p className="label" style={{ marginBottom: 24 }}>Aplicaciones</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 2 }}>
            {aplicaciones.map((a, i) => (
              <div key={i} style={{
                background: '#FFFFFF',
                padding: '32px 24px',
                textAlign: 'center',
                borderBottom: '3px solid #C41E1E',
                border: '1px solid rgba(27,58,107,0.12)',
                borderBottom: '3px solid #C41E1E',
              }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>{a.icon}</div>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 14,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: '#111111',
                }}>{a.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <p className="label" style={{ marginBottom: 12 }}>Catálogo</p>
          <h2 className="heading-lg" style={{ marginBottom: 8 }}>MODELOS<br /><span style={{ color: '#C41E1E' }}>DISPONIBLES</span></h2>
          <div className="accent-line" style={{ marginBottom: 48 }}/>
          <ProductGrid products={products} />
        </div>
      </section>

      <SolicitudCTA />
    </>
  )
}
