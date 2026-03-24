import PageHero from '../components/PageHero'
import ProductGrid from '../components/ProductGrid'
import SolicitudCTA from '../components/SolicitudCTA'

const products = [
  { image: '/images/0000021009IM01.jpg', name: 'Conjunto de Piñones', description: 'Variedad de tamaños y modelos' },
  { image: '/images/0000021150IM01.jpg', name: 'Piñones Simple ASA-BS', description: 'Acero SAE 1045' },
  { image: '/images/0000021151IM01.jpg', name: 'Piñones Doble ASA-BS', description: 'Doble hilera de transmisión' },
  { image: '/images/0000021152IM01.jpg', name: 'Piñones Triple ASA-BS', description: 'Triple hilera — alta potencia' },
  { image: '/images/0000021153IM01.jpg', name: 'Piñón de Poliuretano', description: 'Silencioso y sin lubricación' },
  { image: '/images/0000021154IM01.jpg', name: 'Piñones para Cadena Transportadora', description: 'Acero inoxidable y nylon' },
  { image: '/images/0000021155IM01.jpg', name: 'Piñones Varios', description: 'Fierro fundido y acero inox' },
]

const materiales = [
  { mat: 'Acero SAE 1045', desc: 'Con dientes endurecidos. Alta resistencia al desgaste.' },
  { mat: 'Acero Inoxidable', desc: 'Para ambientes con humedad o agentes corrosivos.' },
  { mat: 'Fierro Fundido', desc: 'Excelente absorción de vibraciones. Alta durabilidad.' },
  { mat: 'Poliuretano', desc: 'Operación silenciosa. No requiere lubricación.' },
]

export default function Pinones() {
  return (
    <>
      <PageHero
        label="Productos"
        title="PIÑONES"
        titleAccent="(ENGRANAJES)"
        description="Fabricados en acero SAE 1045 con dientes endurecidos, acero inoxidable, fierro fundido o poliuretano para todo tipo de cadena. Suministrados con agujero mínimo o acabado de canal chavetero según necesidad."
        image="/images/0000021148IM01.jpg"
      />

      {/* Materiales */}
      <section style={{ background: '#496ebc', padding: '56px 0' }}>
        <div className="m-pad" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
          <p className="label" style={{ marginBottom: 24 }}>Materiales disponibles</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 2 }}>
            {materiales.map((m, i) => (
              <div key={i} style={{
                background: '#FFFFFF',
                padding: '28px 24px',
                border: '1px solid rgba(73,110,188,0.12)',
                borderLeft: '3px solid #E82828',
              }}>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16, textTransform: 'uppercase', color: '#111111', marginBottom: 8 }}>{m.mat}</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.625, color: '#111111', lineHeight: 1.6 }}>{m.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 24, background: '#FFFFFF', padding: '20px 24px', border: '1px solid rgba(73,110,188,0.12)', borderTop: '2px solid #E82828' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15.75, color: '#111111' }}>
              <strong style={{ color: '#111111' }}>Acabado estándar:</strong> Se suministran con agujero mínimo o acabado de canal chavetero y roscado para prisionero según necesidad del cliente.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <p className="label" style={{ marginBottom: 12 }}>Catálogo</p>
          <h2 className="heading-lg" style={{ marginBottom: 8 }}>MODELOS<br /><span style={{ color: '#E82828' }}>DISPONIBLES</span></h2>
          <div className="accent-line" style={{ marginBottom: 48 }}/>
          <ProductGrid products={products} />
        </div>
      </section>

      <SolicitudCTA />
    </>
  )
}
