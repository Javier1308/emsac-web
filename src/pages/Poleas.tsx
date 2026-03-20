import PageHero from '../components/PageHero'
import ProductGrid from '../components/ProductGrid'
import SolicitudCTA from '../components/SolicitudCTA'

const products = [
  { image: '/images/0000021008IM01.jpg', name: 'Polea Multi-Canal', description: 'Fierro fundido — Múltiples secciones' },
  { image: '/images/0000021066IM01.jpg', name: 'Polea 3 Canales', description: 'Sección B — Acero SAE 1020' },
  { image: '/images/0000021067IM01.jpg', name: 'Polea Multi-Canal', description: 'Aluminio — Alta velocidad' },
  { image: '/images/0000021243IM01.jpg', name: 'Polea 5 Canales QD', description: 'Con flanges de montaje' },
]

const specs = [
  { label: 'Materiales', value: 'Fierro fundido, acero SAE 1020 y aluminio' },
  { label: 'Aplicación', value: 'Fajas en "V"' },
  { label: 'Canales', value: 'Desde 1 canal hasta 15 canales' },
  { label: 'Secciones', value: 'A, B, C, D, E u otra norma requerida' },
  { label: 'Montaje', value: 'Compatible con manguitos QD y TB' },
]

export default function Poleas() {
  return (
    <>
      <PageHero
        label="Productos"
        title="POLEAS"
        titleAccent="INDUSTRIALES"
        description="Fabricadas en fierro fundido, acero SAE 1020 y aluminio para fajas en 'V', desde un canal hasta 15 canales en secciones A, B, C, D, E. Fáciles de montar con manguitos QD y TB."
        image="/images/0000021148IM01.jpg"
      />

      {/* Specs */}
      <section style={{ background: '#111', padding: '56px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
          <p className="label" style={{ marginBottom: 24 }}>Especificaciones Técnicas</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 2 }}>
            {specs.map((s, i) => (
              <div key={i} style={{
                background: '#1C1C1C',
                padding: '24px 20px',
                borderTop: '2px solid #E85D04',
              }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 10, letterSpacing: '3px', textTransform: 'uppercase', color: '#E85D04', marginBottom: 6 }}>{s.label}</p>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: '#fff', lineHeight: 1.4 }}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section" style={{ background: '#F0EEE9' }}>
        <div className="container">
          <p className="label" style={{ marginBottom: 12 }}>Catálogo</p>
          <h2 className="heading-lg" style={{ marginBottom: 8 }}>MODELOS<br /><span style={{ color: '#E85D04' }}>DISPONIBLES</span></h2>
          <div className="accent-line" style={{ marginBottom: 48 }}/>
          <ProductGrid products={products} />
        </div>
      </section>

      <SolicitudCTA />
    </>
  )
}
