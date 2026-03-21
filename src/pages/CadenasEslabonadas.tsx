import PageHero from '../components/PageHero'
import ProductGrid from '../components/ProductGrid'
import SolicitudCTA from '../components/SolicitudCTA'

const products = [
  { image: '/images/0000021138IM01.jpg', name: 'Eslabonada Galvanizada', description: 'Múltiples calibres disponibles' },
  { image: '/images/0000021139IM01.jpg', name: 'Eslabonada Acero Inoxidable', description: 'AISI 304 — Norma DIN 766' },
]

const specs = [
  { label: 'Materiales', value: 'Acero galvanizado y acero inoxidable AISI 304' },
  { label: 'Norma', value: 'DIN 766' },
  { label: 'Rango de tamaños', value: 'Desde 5/64" (2.00mm) hasta 5/8" (16.00mm) de diámetro de alambre' },
]

export default function CadenasEslabonadas() {
  return (
    <>
      <PageHero
        label="Cadenas"
        title="CADENAS"
        titleAccent="ESLABONADAS"
        description={'Fabricadas en acero galvanizado y en acero inoxidable (AISI 304) bajo la norma DIN 766. Las medidas del eslabón varían desde 5/64" hasta 5/8" de diámetro del alambre.'}
        image="/images/0000021164IM01.jpg"
      />

      {/* Specs */}
      <section style={{ background: '#1B3A6B', padding: '56px 0' }}>
        <div className="m-pad" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
          <p className="label" style={{ marginBottom: 24 }}>Especificaciones Técnicas</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 2 }}>
            {specs.map((s, i) => (
              <div key={i} style={{
                background: '#FFFFFF',
                padding: '28px 24px',
                borderTop: '2px solid #C41E1E',
                border: '1px solid rgba(27,58,107,0.12)',
                borderTop: '2px solid #C41E1E',
              }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 10, letterSpacing: '3px', textTransform: 'uppercase', color: '#C41E1E', marginBottom: 8 }}>{s.label}</p>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: '#111111', lineHeight: 1.4 }}>{s.value}</p>
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
          <div style={{ maxWidth: 600 }}>
            <ProductGrid products={products} />
          </div>
        </div>
      </section>

      <SolicitudCTA />
    </>
  )
}
