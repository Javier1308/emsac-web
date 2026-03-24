import PageHero from '../components/PageHero'
import ProductGrid from '../components/ProductGrid'
import SolicitudCTA from '../components/SolicitudCTA'

const products = [
  { image: '/images/0000021166IM01.jpg', name: 'Acoplamiento de Cadena', description: '2 piñones + cadena doble hilera con tapa de aluminio' },
  { image: '/images/0000021167IM01.jpg', name: 'Acoplamiento Omega', description: 'Tipo flexible — absorbe vibraciones' },
  { image: '/images/0000021168IM01.jpg', name: 'Omega MAX DYNAMIC', description: 'Alta capacidad de desalineación' },
  { image: '/images/0000021169IM01.jpg', name: 'Omega STAR', description: 'Exterior: 107mm — Eje máx: 35mm' },
  { image: '/images/0000021170IM01.jpg', name: 'Acoplamiento JAW', description: 'Con araña elastomérica' },
  { image: '/images/0000021171IM01.jpg', name: 'Acoplamiento GRID', description: 'Para alta transmisión de par' },
  { image: '/images/0000021177IM01.jpg', name: 'Acoplamiento de Cadena', description: 'Con cubierta protectora amarilla' },
  { image: '/images/0000021010IM01.jpg', name: 'Acoplamiento Flexible', description: 'Rígidos y flexibles disponibles' },
]

const tipos = [
  { tipo: 'Rígidos', desc: 'Para ejes perfectamente alineados. Transmisión directa sin juego.' },
  { tipo: 'Flexibles', desc: 'Absorben desalineación angular, paralela y axial. Reducen vibraciones.' },
]

export default function Acoplamientos() {
  return (
    <>
      <PageHero
        label="Productos"
        title="ACOPLAMIENTOS"
        titleAccent="INDUSTRIALES"
        description="Es una parte fundamental de toda máquina ya que amortigua el movimiento de entrada y el de salida. Existen varios tipos: Rígidos y Flexibles."
        image="/images/0000021164IM01.jpg"
      />

      {/* Tipos */}
      <section style={{ background: '#496ebc', padding: '56px 0' }}>
        <div className="m-pad" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
          <p className="label" style={{ marginBottom: 24 }}>Clasificación</p>
          <div className="acopl-tipos-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
            {tipos.map((t, i) => (
              <div key={i} style={{
                background: '#FFFFFF',
                padding: '40px 36px',
                border: '1px solid rgba(73,110,188,0.12)',
                borderTop: '3px solid #E82828',
              }}>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 28, textTransform: 'uppercase', color: '#111111', marginBottom: 12 }}>{t.tipo}</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 16.875, color: '#111111', lineHeight: 1.7 }}>{t.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 24, background: '#FFFFFF', padding: '24px 28px', border: '1px solid rgba(73,110,188,0.12)', borderLeft: '4px solid #E82828' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '2px', textTransform: 'uppercase', color: '#E82828', marginBottom: 8 }}>
              Acoplamientos de Cadena — Detalles
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15.75, color: '#111111', lineHeight: 1.7 }}>
              Están compuestos por 2 piñones dentados de acero al carbono unidos por una cadena de doble hilera.
              Llevan una tapa que brinda protección y evita que la lubricación salga. La cubierta está fabricada
              en aluminio aleado, permite un fácil montaje y desmontaje, servicio prolongado y mantenimiento rápido.
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
