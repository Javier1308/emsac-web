import { Link } from 'react-router-dom'
import SolicitudCTA from '../components/SolicitudCTA'

const valores = [
  { icon: '🎯', title: 'Calidad Total',    desc: 'Trabajamos bajo normas ISO 9001 y solo con proveedores que cumplan los mismos estándares.' },
  { icon: '🤝', title: 'Atención Personalizada', desc: 'Cada cliente recibe soluciones adaptadas a sus necesidades específicas de ingeniería.' },
  { icon: '🔧', title: 'Innovación',       desc: 'Tecnología de punta e innovación continua en todos nuestros procesos productivos.' },
  { icon: '🏆', title: 'Liderazgo',        desc: 'Más de 65 años posicionados como la primera compañía en el rubro metalmecánico peruano.' },
]

const galeria = [
  '/images/0000021206IM01.jpg',
  '/images/0000021209IM01.jpg',
  '/images/noso_chico.jpg',
  '/images/0000021210IM01.jpg',
]

export default function Nosotros() {
  return (
    <>
      {/* Hero */}
      <section style={{
        position: 'relative',
        minHeight: 480,
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
        background: '#1B3A6B',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/images/noso_chico.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          filter: 'brightness(0.25)',
        }}/>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'repeating-linear-gradient(-45deg,transparent,transparent 40px,rgba(255,255,255,0.018) 40px,rgba(255,255,255,0.018) 41px)',
        }}/>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(to right, #C41E1E, #1B3A6B)' }}/>

        <div className="page-hero-content" style={{ position: 'relative', maxWidth: 1200, width: '100%', margin: '0 auto', padding: '80px 40px 64px' }}>
          <p className="label" style={{ marginBottom: 12 }}>La empresa</p>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 'clamp(48px, 7vw, 80px)',
            textTransform: 'uppercase',
            lineHeight: 0.95,
            color: '#fff',
          }}>
            SOBRE<br /><span style={{ color: '#C41E1E' }}>NOSOTROS</span>
          </h1>
        </div>
      </section>

      {/* Historia */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="nos-historia-grid" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <p className="label" style={{ marginBottom: 12 }}>Historia</p>
            <h2 className="heading-lg" style={{ marginBottom: 16, fontSize: 'clamp(32px,4vw,52px)' }}>
              65+ AÑOS<br />
              <span style={{ color: '#C41E1E' }}>DE EXPERIENCIA</span>
            </h2>
            <div className="accent-line"/>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16.875, color: '#111111', lineHeight: 1.8, marginBottom: 20 }}>
              Equipos Mecánicos S.A. inició sus actividades en el año 1957, siendo hoy una de las primeras
              compañías en el rubro de la metalmecánica. Empezó como una pequeña empresa, con un personal mínimo
              y una pequeña superficie. Con el correr de los años, basándose en la calidad total y una atención
              personalizada, logró abrirse paso entre la competencia y ubicarse en la primera posición en el mercado.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16.875, color: '#111111', lineHeight: 1.8, marginBottom: 20 }}>
              Desde entonces la calidad y respeto hacia los clientes ha sido inigualable.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16.875, color: '#111111', lineHeight: 1.8, marginBottom: 32 }}>
              Equipos Mecánicos S.A., desde su comienzo, con un claro espíritu de desarrollo, buscó expandirse
              diversificando sus productos. Es por esto que sólo ofrece productos de excelente calidad, líderes
              y rentables; logrando satisfacer todas las necesidades del mercado y las especificaciones de los
              clientes, basándose en normas internacionales de calidad <strong>(ISO 9001)</strong>.
            </p>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              {[
                { value: '1957', label: 'Año de fundación' },
                { value: '65+',  label: 'Años en el mercado' },
                { value: 'ISO',  label: '9001 Certificado' },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 40, color: '#C41E1E', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 11, letterSpacing: '2px', textTransform: 'uppercase', color: '#444444', marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Galería */}
          <div className="nos-historia-gallery" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
            {galeria.map((src, i) => (
              <div key={i} style={{ aspectRatio: '1', overflow: 'hidden' }}>
                <img src={src} alt="EMSAC planta" style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  filter: 'grayscale(15%)',
                  transition: 'transform 0.4s',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.06)'}
                onMouseLeave={e => (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Misión */}
      <section style={{
        background: '#1B3A6B',
        backgroundImage: 'repeating-linear-gradient(-45deg,transparent,transparent 40px,rgba(255,255,255,0.018) 40px,rgba(255,255,255,0.018) 41px)',
        padding: '80px 0',
      }}>
        <div className="m-pad" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
          <div className="nos-mision-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
            <div>
              <p className="label" style={{ marginBottom: 12 }}>Nuestra misión</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(28px,3.5vw,44px)', textTransform: 'uppercase', color: '#fff', lineHeight: 1.1, marginBottom: 20 }}>
                EN TODO ESTE TIEMPO DE PERMANENCIA<br /><span style={{ color: '#C41E1E' }}>EN EL MERCADO NACIONAL</span>
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16.875, color: '#C0C0C0', lineHeight: 1.8 }}>
                Se han aplicado correctas políticas de comercialización. La calidad, el respeto, la tecnología
                de punta, la innovación de los procesos productivos y la gran variedad de productos convierten
                a Equipos Mecánicos S.A. en la mejor solución para los requerimientos de nuestros clientes.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16.875, color: '#C0C0C0', lineHeight: 1.8, marginTop: 16 }}>
                Equipos Mecánicos S.A. posee más de cuatro décadas de experiencia y permanencia, lo que nos
                hace ser una empresa líder en el abastecimiento hacia las principales áreas productivas del
                país: <strong style={{ color: '#FFFFFF' }}>minera, forestal, pesquería, agricultura e industria en general.</strong>
              </p>
            </div>
            <div>
              <p className="label" style={{ marginBottom: 12 }}>Manufactura</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(28px,3.5vw,44px)', textTransform: 'uppercase', color: '#fff', lineHeight: 1.1, marginBottom: 20 }}>
                ESTÁNDARES<br /><span style={{ color: '#C41E1E' }}>INTERNACIONALES</span>
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16.875, color: '#C0C0C0', lineHeight: 1.8 }}>
                Teniendo en cuenta la calidad de sus productos, EMSAC trabaja sólo bajo los más estrictos
                estándares internacionales. Nos aseguramos que nuestros proveedores cumplan con las mismas
                normas de calidad.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16.875, color: '#C0C0C0', lineHeight: 1.8, marginTop: 16 }}>
                EMSAC brinda un servicio de mantenimiento, reparación y distribución tanto en la industria
                como en el hogar. Para este propósito contamos con una <strong style={{ color: '#FFFFFF' }}>flota de vehículos y técnicos
                altamente calificados</strong>. Si requiere de algún trabajo especial, nuestros ingenieros le
                ayudarán a desarrollarlo en planta de acuerdo a sus necesidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <p className="label" style={{ marginBottom: 12 }}>Nuestros pilares</p>
          <h2 className="heading-lg" style={{ marginBottom: 48 }}>VALORES</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            {valores.map((v, i) => (
              <div key={i} style={{
                background: '#fff',
                padding: '40px 32px',
                borderTop: '3px solid #C41E1E',
                border: '1px solid rgba(27,58,107,0.15)',
                borderTop: '3px solid #C41E1E',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.background = '#1B3A6B'
                el.style.transform = 'translateY(-4px)'
                el.style.boxShadow = '0 8px 24px rgba(27,58,107,0.18)'
                const title = el.querySelector('.val-title') as HTMLParagraphElement
                const desc = el.querySelector('.val-desc') as HTMLParagraphElement
                if (title) title.style.color = '#fff'
                if (desc) desc.style.color = '#C0C0C0'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.background = '#fff'
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = 'none'
                const title = el.querySelector('.val-title') as HTMLParagraphElement
                const desc = el.querySelector('.val-desc') as HTMLParagraphElement
                if (title) title.style.color = '#111111'
                if (desc) desc.style.color = '#444444'
              }}
              >
                <div style={{ fontSize: 40, marginBottom: 16 }}>{v.icon}</div>
                <p className="val-title" style={{
                  fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18,
                  textTransform: 'uppercase', color: '#111111', marginBottom: 12,
                  transition: 'color 0.2s',
                }}>{v.title}</p>
                <p className="val-desc" style={{
                  fontFamily: 'var(--font-body)', fontSize: 15.75, color: '#444444',
                  lineHeight: 1.6, transition: 'color 0.2s',
                }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marcas */}
      <section style={{ background: '#1B3A6B', padding: '48px 0', borderBottom: '3px solid #C41E1E' }}>
        <div className="container">
          <p style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: 11,
            letterSpacing: '5px',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.4)',
            textAlign: 'center',
            marginBottom: 40,
          }}>
            Marcas que distribuimos
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 60, flexWrap: 'wrap' }}>
            <img
              src="/images/HC_logo.png"
              alt="HC"
              style={{ height: 120, width: 'auto', borderRadius: 8 }}
            />
            <img
              src="/images/WROL_sin_logo.jpeg"
              alt="WROL"
              style={{ height: 120, width: 'auto', borderRadius: 4 }}
            />
          </div>
        </div>
      </section>

      <SolicitudCTA />

      {/* Contact strip */}
      <section style={{ background: '#FFFFFF', padding: '56px 0', borderTop: '1px solid #C0C0C0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: '#111111', marginBottom: 24 }}>
            No dude en contar con nosotros para sus próximos proyectos de ingeniería.
          </p>
          <Link to="/contactenos" className="btn-dark">Contáctenos</Link>
        </div>
      </section>
    </>
  )
}
