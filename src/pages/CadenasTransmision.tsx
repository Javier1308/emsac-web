import PageHero from '../components/PageHero'
import ProductGrid from '../components/ProductGrid'
import SolicitudCTA from '../components/SolicitudCTA'

const products = [
  { image: '/images/0000021089IM01.jpg', name: 'Norma ASA-BS', description: 'Cadena estándar industrial' },
  { image: '/images/0000021090IM01.jpg', name: 'Doble Hilera', description: 'Mayor capacidad de carga' },
  { image: '/images/0000021091IM01.jpg', name: 'Placas AL-BL', description: 'Diseño especial de placas' },
  { image: '/images/0000021092IM01.jpg', name: 'Reforzada', description: 'Resistencia superior' },
  { image: '/images/0000021093IM01.jpg', name: 'Triple Hilera', description: 'Máxima transmisión de potencia' },
  { image: '/images/0000021094IM01.jpg', name: 'Con Aditamentos Especiales', description: 'Configuración personalizada' },
  { image: '/images/0000021105IM01.jpg', name: 'Inoxidable ASA-BS', description: 'Resistente a la corrosión' },
  { image: '/images/0000021106IM01.jpg', name: 'Acodada API', description: 'Configuración angulada' },
]

const tipos = [
  'Cadenas de Transmisión NORMA ASA-BS',
  'Cadenas de Transmisión PIN HUECO',
  'Cadenas de Transmisión DE PLACAS AL-BL',
  'Cadenas de Transmisión REFORZADA',
  'Cadenas INOXIDABLE ASA-BS',
  'Cadenas de Transmisión ACODADA-API',
  'Cadenas CON ADITAMENTOS ESPECIALES',
  'Cadenas CON PLACAS ESPECIALES',
]

export default function CadenasTransmision() {
  return (
    <>
      <PageHero
        label="Cadenas"
        title="CADENAS DE"
        titleAccent="TRANSMISIÓN"
        description="Suministradas bajo nuestras marcas 'WROL' y 'HECORAD', fabricadas bajo estrictas normas de control de calidad. Incluimos la colocación de aditamentos especiales según la necesidad del cliente."
        image="/images/0000021136IM01.jpg"
      />

      {/* Tipos */}
      <section style={{ background: '#496ebc', padding: '56px 0' }}>
        <div className="m-pad" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
          <p className="label" style={{ marginBottom: 16, fontSize: 22 }}>Tipos disponibles</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 460px))', gap: 2, justifyContent: 'center' }}>
            {tipos.map((t, i) => (
              <div key={i} style={{
                padding: '16px 20px',
                background: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                border: '1px solid rgba(73,110,188,0.12)',
                borderLeft: '3px solid #E67E22',
              }}>
                <div style={{ width: 6, height: 6, background: '#E67E22', borderRadius: '50%', flexShrink: 0 }}/>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: 17,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  color: '#111111',
                }}>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <p className="label" style={{ marginBottom: 12 }}>Catálogo</p>
          <h2 className="heading-lg" style={{ marginBottom: 8 }}>MODELOS<br /><span style={{ color: '#E67E22' }}>DISPONIBLES</span></h2>
          <div className="accent-line" style={{ marginBottom: 48 }}/>
          <ProductGrid products={products} />
        </div>
      </section>

      <SolicitudCTA />
    </>
  )
}
