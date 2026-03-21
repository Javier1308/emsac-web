import PageHero from '../components/PageHero'
import ProductGrid from '../components/ProductGrid'
import SolicitudCTA from '../components/SolicitudCTA'

const products = [
  { image: '/images/0000021126IM01.jpg', name: 'Cadena de Balanza Triple' },
  { image: '/images/0000021127IM01.jpg', name: 'Cadena de Balanza Doble' },
]

export default function CadenasBalanza() {
  return (
    <>
      <PageHero
        label="Cadenas"
        title="CADENAS DE"
        titleAccent="BALANZA"
        description="Cadenas de precisión para sistemas de balanza industrial. Fabricadas bajo los más estrictos controles de calidad para garantizar la exactitud en cada aplicación."
        image="/images/0000021124IM01.jpg"
      />

      {/* Info */}
      <section style={{ background: '#1B3A6B', padding: '48px 0' }}>
        <div className="m-pad" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
          <div style={{
            background: '#FFFFFF',
            padding: '28px 32px',
            borderRadius: '0 4px 4px 0',
            border: '1px solid rgba(27,58,107,0.12)',
            borderLeft: '4px solid #C41E1E',
          }}>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, letterSpacing: '3px', textTransform: 'uppercase', color: '#C41E1E', marginBottom: 8 }}>
              Información del Producto
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16.875, color: '#111111', lineHeight: 1.7 }}>
              Las cadenas de balanza son componentes de alta precisión diseñados para sistemas de
              pesaje industrial. EMSAC ofrece modelos dobles y triples para diferentes capacidades
              de carga. Consulte con nuestros asesores para encontrar el modelo ideal para su aplicación.
            </p>
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
