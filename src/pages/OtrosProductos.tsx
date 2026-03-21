import PageHero from '../components/PageHero'
import SolicitudCTA from '../components/SolicitudCTA'

const products = [
  { image: '/images/0000021183IM01.jpg', name: 'Abrazaderas',        desc: 'Metálicas en múltiples tamaños y diámetros para fijación industrial.' },
  { image: '/images/0000021184IM01.jpg', name: 'Acero para Chaveta', desc: 'Barras rectangulares de acero al carbono para transmisión de torque.' },
  { image: '/images/0000021185IM01.jpg', name: 'Anillos Seeger',     desc: 'Interior y exterior. Múltiples tamaños para ejes y alojamientos.' },
  { image: '/images/0000021186IM01.jpg', name: 'Calibradores',       desc: 'Vernier digital y analógico de alta precisión STAINLESS.' },
  { image: '/images/0000021187IM01.jpg', name: 'Eje de Acero',       desc: 'Barras cilíndricas de acero al carbono en diferentes diámetros.' },
  { image: '/images/0000021188IM01.jpg', name: "O'Rings",            desc: 'Sellos tóricos en múltiples diámetros y materiales.' },
  { image: '/images/0000021190IM01.jpg', name: 'Pines de Expansión', desc: 'Pines tubulares ranurados para fijación y posicionamiento.' },
  { image: '/images/0000021191IM01.jpg', name: 'Retenes Radiales',   desc: 'Oil seals para protección de rodamientos y ejes rotativos.' },
  { image: '/images/0000021197IM01.jpg', name: 'Rodajes y Chumaceras', desc: 'Marcas SKF y FAG. Chumaceras de pared y cuadradas.' },
  { image: '/images/0000021198IM01.jpg', name: 'Soldadura',          desc: 'Electrodos EUSKO para soldadura industrial.' },
  { image: '/images/0000021199IM01.jpg', name: 'Taper Lock / Taper Bushing', desc: 'Manguitos cónicos para montaje rápido de poleas y piñones.' },
]

export default function OtrosProductos() {
  return (
    <>
      <PageHero
        label="Productos"
        title="OTROS"
        titleAccent="PRODUCTOS"
        description="EMSAC trabaja bajo los más estrictos estándares internacionales de calidad. Brindamos servicios de mantenimiento, reparación y distribución tanto en la industria como en el hogar."
        image="/images/0000021181IM01.jpg"
      />

      {/* Info */}
      <section style={{ background: '#1B3A6B', padding: '48px 0' }}>
        <div className="m-pad" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
          <div style={{
            background: '#FFFFFF',
            borderLeft: '4px solid #C41E1E',
            padding: '28px 32px',
            border: '1px solid rgba(27,58,107,0.12)',
            borderLeft: '4px solid #C41E1E',
          }}>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '2px', textTransform: 'uppercase', color: '#C41E1E', marginBottom: 8 }}>
              Servicio Integral
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16.875, color: '#111111', lineHeight: 1.7 }}>
              Contamos con una flota de vehículos y técnicos altamente calificados. Si requiere de algún
              trabajo especial, no dude en contactarnos — nuestros ingenieros le ayudarán a desarrollarlo
              en planta de acuerdo a sus necesidades.
            </p>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <p className="label" style={{ marginBottom: 12 }}>Catálogo</p>
          <h2 className="heading-lg" style={{ marginBottom: 8 }}>PRODUCTOS<br /><span style={{ color: '#C41E1E' }}>COMPLEMENTARIOS</span></h2>
          <div className="accent-line" style={{ marginBottom: 48 }}/>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 16,
          }}>
            {products.map((p, i) => (
              <div key={i} style={{
                background: '#fff',
                display: 'flex',
                overflow: 'hidden',
                border: '1px solid rgba(27,58,107,0.15)',
                borderLeft: '3px solid #C41E1E',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 6px 20px rgba(27,58,107,0.12)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
              }}
              >
                <div style={{ width: 110, flexShrink: 0, overflow: 'hidden', background: '#f5f5f5' }}>
                  <img
                    src={p.image}
                    alt={p.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                    onMouseEnter={e => (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.08)'}
                    onMouseLeave={e => (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'}
                  />
                </div>
                <div style={{
                  padding: '18px 20px',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                  <p style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: 13,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    color: '#111111',
                    marginBottom: 6,
                  }}>{p.name}</p>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 13,
                    color: '#444444',
                    lineHeight: 1.55,
                  }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SolicitudCTA />
    </>
  )
}
