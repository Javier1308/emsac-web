import PageHero from '../components/PageHero'
import ProductGrid from '../components/ProductGrid'
import SolicitudCTA from '../components/SolicitudCTA'

const products = [
  { image: '/images/0000021073IM01.jpg', name: 'Cadena con Eslabón Plano' },
  { image: '/images/0000021074IM01.jpg', name: 'Cadena con Bracket Lateral' },
  { image: '/images/0000021080IM01.jpg', name: 'Cadena con Plataforma' },
  { image: '/images/0000021081IM01.jpg', name: 'Cadena con Brackets Articulados' },
  { image: '/images/0000021082IM01.jpg', name: 'Cadena Flat Top Metálica' },
  { image: '/images/0000021083IM01.jpg', name: 'Cadena con Rodillos Laterales' },
  { image: '/images/0000021117IM01.jpg', name: 'Flat Top Acero Inoxidable' },
  { image: '/images/0000021118IM01.jpg', name: 'Flat Top Plástica' },
  { image: '/images/0000021119IM01.jpg', name: 'Cadena con Aletas Anguladas' },
  { image: '/images/0000021120IM01.jpg', name: 'Cadena con Spikes' },
  { image: '/images/0000021200IM01.jpg', name: 'Flat Top Curva Inoxidable' },
  { image: '/images/0000021007IM01.jpg', name: 'Cadena Roller Clásica' },
]

export default function CadenasTransportadoras() {
  return (
    <>
      <PageHero
        label="Cadenas"
        title="CADENAS"
        titleAccent="TRANSPORTADORAS"
        description="Suministradas bajo nuestra marca 'WROL' y fabricadas bajo estrictas normas de control de calidad. Incluimos la colocación de aditamentos especiales según la necesidad del cliente."
        image="/images/0000021087IM01.jpg"
      />

      {/* Info strip */}
      <section style={{ background: '#496ebc', padding: '32px 0', borderBottom: '3px solid #E67E22' }}>
        <div className="m-pad" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', display: 'flex', gap: 48, flexWrap: 'wrap' }}>
          {[
            { label: 'Marca', value: 'WROL' },
            { label: 'Sectores', value: 'Pesquería · Minería · Agroindustria · Embotelladoras · Metalmecánica' },
            { label: 'Personalización', value: 'Aditamentos especiales disponibles' },
          ].map((item, i) => (
            <div key={i}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 14, letterSpacing: '3px', textTransform: 'uppercase', color: '#E67E22', marginBottom: 4 }}>{item.label}</p>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: '#fff', letterSpacing: '1px' }}>{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <p className="label" style={{ marginBottom: 12 }}>Catálogo</p>
          <h2 className="heading-lg" style={{ marginBottom: 8 }}>MODELOS<br /><span style={{ color: '#E67E22' }}>DISPONIBLES</span></h2>
          <div className="accent-line"/>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: '#111111', maxWidth: 560, lineHeight: 1.7, marginBottom: 48 }}>
            Nuestra línea de cadenas transportadoras incluye múltiples configuraciones para adaptarse
            a cualquier proceso industrial. Todos los modelos pueden incorporar aditamentos especiales
            según los requerimientos del cliente.
          </p>
          <ProductGrid products={products} />
        </div>
      </section>

      <SolicitudCTA />
    </>
  )
}
