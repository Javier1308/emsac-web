import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  {
    image: '/images/0000021048IM01.jpg',
    label: 'Desde 1957',
    title: 'INGENIERÍA EN',
    accent: 'TRANSMISIÓN DE POTENCIA',
    sub: 'Empresa líder en metalmecánica peruana con más de 65 años de experiencia y calidad certificada ISO 9001.',
  },
  {
    image: '/images/0000021087IM01.jpg',
    label: 'Industria & Minería',
    title: 'SOLUCIONES PARA',
    accent: 'TODA LA INDUSTRIA',
    sub: 'Cadenas, poleas, piñones y acoplamientos para los sectores minero, pesquero, agroindustrial y más.',
  },
  {
    image: '/images/0000021071IM01.jpg',
    label: 'Calidad certificada',
    title: 'PRODUCTOS QUE',
    accent: 'NO FALLAN',
    sub: 'Fabricados bajo estrictos controles de calidad con los mejores proveedores internacionales.',
  },
]

const categories = [
  {
    label: 'Categoría 01',
    title: 'Cadenas',
    desc: 'Cadenas transportadoras, de transmisión, para agricultura, de balanza y eslabonadas.',
    image: '/images/0000021007IM01.jpg',
    to: '/cadenas/transportadoras',
  },
  {
    label: 'Categoría 02',
    title: 'Poleas',
    desc: 'Fabricadas en fierro fundido, acero SAE 1020 y aluminio para fajas en "V".',
    image: '/images/0000021008IM01.jpg',
    to: '/poleas',
  },
  {
    label: 'Categoría 03',
    title: 'Piñones',
    desc: 'Fabricados en acero SAE 1045, acero inoxidable, fierro fundido o poliuretano.',
    image: '/images/0000021009IM01.jpg',
    to: '/pinones',
  },
  {
    label: 'Categoría 04',
    title: 'Acoplamientos',
    desc: 'Parte fundamental de toda máquina. Amortigua el movimiento de entrada y salida.',
    image: '/images/0000021010IM01.jpg',
    to: '/acoplamientos',
  },
]

const stats = [
  { value: '65+',  label: 'Años de experiencia' },
  { value: 'ISO',  label: '9001 Certificado'    },
  { value: '6',    label: 'Marcas internacionales' },
  { value: '100%', label: 'Calidad garantizada' },
]

const sectors = [
  { name: 'Minería',        icon: '⛏️' },
  { name: 'Pesquería',      icon: '🐟' },
  { name: 'Agroindustria',  icon: '🌾' },
  { name: 'Embotelladoras', icon: '🏭' },
  { name: 'Metal Mecánica', icon: '⚙️' },
  { name: 'Forestal',       icon: '🪵' },
]

export default function Home() {
  const [current, setCurrent] = useState(0)
  const [manual, setManual] = useState(false)

  useEffect(() => {
    if (manual) return
    const t = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5000)
    return () => clearInterval(t)
  }, [manual])

  const goTo = (index: number) => {
    setManual(true)
    setCurrent((index + slides.length) % slides.length)
  }

  const slide = slides[current]

  return (
    <>
      {/* ── HERO SLIDER ── */}
      <section style={{ position: 'relative', height: 'calc(100vh - var(--nav-height))', minHeight: 560, overflow: 'hidden' }}>
        {slides.map((s, i) => (
          <div key={i} style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${s.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)',
            opacity: i === current ? 1 : 0,
            transition: 'opacity 1s ease',
          }}/>
        ))}

        {/* Pattern */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'repeating-linear-gradient(-45deg,transparent,transparent 40px,rgba(255,255,255,0.018) 40px,rgba(255,255,255,0.018) 41px)',
        }}/>

        {/* Gradient left */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(17,17,17,0.7) 40%, transparent)',
        }}/>

        {/* Orange bottom line */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 4,
          background: 'linear-gradient(to right, #E85D04, #1B3A5C)',
        }}/>

        {/* Content */}
        <div className="home-hero-content" style={{
          position: 'relative',
          maxWidth: 1200, margin: '0 auto', padding: '0 40px',
          height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center',
        }}>
          <p className="label" key={`label-${current}`} style={{ marginBottom: 16, animationName: 'fadeUp' }}>
            {slide.label}
          </p>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 'clamp(48px, 8vw, 96px)',
            textTransform: 'uppercase',
            lineHeight: 0.95,
            color: '#fff',
            maxWidth: 700,
          }}>
            {slide.title}<br />
            <span style={{ color: '#E85D04' }}>{slide.accent}</span>
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            fontSize: 19.125,
            color: '#fff',
            marginTop: 24,
            maxWidth: 520,
            lineHeight: 1.7,
          }}>
            {slide.sub}
          </p>
          <div style={{ display: 'flex', gap: 16, marginTop: 40, flexWrap: 'wrap' }}>
            <Link to="/cadenas/transportadoras" className="btn-primary">Ver Productos</Link>
            <Link to="/contactenos" className="btn-ghost">Solicitar Cotización</Link>
          </div>
        </div>

        {/* Arrow — prev */}
        <button
          onClick={() => goTo(current - 1)}
          aria-label="Anterior"
          style={{
            position: 'absolute', left: 24, top: '50%', transform: 'translateY(-50%)',
            width: 52, height: 52,
            background: 'rgba(17,17,17,0.6)',
            border: '1.5px solid rgba(255,255,255,0.2)',
            borderRadius: 2,
            color: '#fff',
            cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.2s, border-color 0.2s',
            backdropFilter: 'blur(4px)',
            zIndex: 10,
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLButtonElement
            el.style.background = '#E85D04'
            el.style.borderColor = '#E85D04'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLButtonElement
            el.style.background = 'rgba(17,17,17,0.6)'
            el.style.borderColor = 'rgba(255,255,255,0.2)'
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>

        {/* Arrow — next */}
        <button
          onClick={() => goTo(current + 1)}
          aria-label="Siguiente"
          style={{
            position: 'absolute', right: 24, top: '50%', transform: 'translateY(-50%)',
            width: 52, height: 52,
            background: 'rgba(17,17,17,0.6)',
            border: '1.5px solid rgba(255,255,255,0.2)',
            borderRadius: 2,
            color: '#fff',
            cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.2s, border-color 0.2s',
            backdropFilter: 'blur(4px)',
            zIndex: 10,
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLButtonElement
            el.style.background = '#E85D04'
            el.style.borderColor = '#E85D04'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLButtonElement
            el.style.background = 'rgba(17,17,17,0.6)'
            el.style.borderColor = 'rgba(255,255,255,0.2)'
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>

        {/* Slide dots */}
        <div style={{
          position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          {slides.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} style={{
              width: i === current ? 32 : 8,
              height: 8,
              borderRadius: 4,
              background: i === current ? '#E85D04' : 'rgba(255,255,255,0.3)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: 0,
            }}/>
          ))}
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: '#1B3A5C', borderBottom: '3px solid #E85D04' }}>
        <div className="home-stats-grid" style={{
          maxWidth: 1200, margin: '0 auto', padding: '0 40px',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              padding: '28px 24px',
              borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
              textAlign: 'center',
            }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: 36,
                color: '#E85D04',
                lineHeight: 1,
              }}>{s.value}</div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: 11,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.6)',
                marginTop: 6,
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="section" style={{ background: '#F0EEE9' }}>
        <div className="container">
          <p className="label" style={{ marginBottom: 12 }}>Nuestros Productos</p>
          <h2 className="heading-lg" style={{ marginBottom: 4 }}>
            LÍNEA DE<br />
            <span style={{ color: '#E85D04' }}>PRODUCTOS</span>
          </h2>
          <div className="accent-line"/>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 18,
            color: '#3A3A3A',
            maxWidth: 560,
            lineHeight: 1.7,
            marginBottom: 56,
          }}>
            Equipos Mecánicos S.A. ofrece una amplia gama de productos para la industria,
            fabricados bajo estrictos estándares internacionales de calidad.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 2,
          }}>
            {categories.map((cat, i) => (
              <Link
                key={i}
                to={cat.to}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <div style={{
                  position: 'relative',
                  overflow: 'hidden',
                  aspectRatio: '0.85',
                  background: '#111',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  const img = e.currentTarget.querySelector('img') as HTMLImageElement
                  if (img) img.style.transform = 'scale(1.08)'
                  const overlay = e.currentTarget.querySelector('.cat-overlay') as HTMLDivElement
                  if (overlay) overlay.style.background = 'rgba(17,17,17,0.65)'
                  const arrow = e.currentTarget.querySelector('.cat-arrow') as HTMLSpanElement
                  if (arrow) arrow.style.transform = 'translateX(6px)'
                }}
                onMouseLeave={e => {
                  const img = e.currentTarget.querySelector('img') as HTMLImageElement
                  if (img) img.style.transform = 'scale(1)'
                  const overlay = e.currentTarget.querySelector('.cat-overlay') as HTMLDivElement
                  if (overlay) overlay.style.background = 'rgba(17,17,17,0.5)'
                  const arrow = e.currentTarget.querySelector('.cat-arrow') as HTMLSpanElement
                  if (arrow) arrow.style.transform = 'translateX(0)'
                }}
                >
                  <img
                    src={cat.image}
                    alt={cat.title}
                    style={{
                      width: '100%', height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                      filter: 'grayscale(20%)',
                    }}
                  />
                  <div className="cat-overlay" style={{
                    position: 'absolute', inset: 0,
                    background: 'rgba(17,17,17,0.5)',
                    transition: 'background 0.3s',
                  }}/>
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(17,17,17,0.95) 30%, transparent)',
                  }}/>
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    padding: '24px 28px',
                    borderTop: '2px solid #E85D04',
                  }}>
                    <p style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 10,
                      letterSpacing: '4px',
                      textTransform: 'uppercase',
                      color: '#E85D04',
                      marginBottom: 6,
                    }}>{cat.label}</p>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 800,
                      fontSize: 28,
                      textTransform: 'uppercase',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                    }}>
                      {cat.title}
                      <span className="cat-arrow" style={{ transition: 'transform 0.2s', fontSize: 20 }}>→</span>
                    </h3>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 14.625,
                      color: '#8D9BAB',
                      marginTop: 6,
                      lineHeight: 1.5,
                    }}>{cat.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: 16, textAlign: 'center' }}>
            <Link to="/otros-productos" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#111',
              textDecoration: 'none',
              padding: '14px 28px',
              border: '2px solid #111',
              borderRadius: 2,
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.background = '#111'
              el.style.color = '#fff'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.background = 'transparent'
              el.style.color = '#111'
            }}
            >
              Ver Otros Productos →
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section style={{
        background: '#111',
        backgroundImage: 'repeating-linear-gradient(-45deg,transparent,transparent 40px,rgba(255,255,255,0.018) 40px,rgba(255,255,255,0.018) 41px)',
      }}>
        <div className="home-about-wrap" style={{
          maxWidth: 1200, margin: '0 auto', padding: '80px 40px',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center',
        }}>
          <div>
            <p className="label" style={{ marginBottom: 12 }}>Sobre Nosotros</p>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(36px, 4vw, 56px)',
              textTransform: 'uppercase',
              color: '#fff',
              lineHeight: 1,
            }}>
              MÁS DE 65 AÑOS<br />
              <span style={{ color: '#E85D04' }}>HACIENDO QUE<br />TODO FUNCIONE</span>
            </h2>
            <div style={{ width: 48, height: 3, background: '#E85D04', margin: '20px 0 24px' }}/>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 16.875,
              color: '#8D9BAB',
              lineHeight: 1.8,
              marginBottom: 16,
            }}>
              Equipos Mecánicos S.A. inició sus actividades en 1957. Con el correr de los años,
              basándose en la calidad total y una atención personalizada, logró abrirse paso entre
              la competencia y ubicarse en la primera posición del mercado.
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 16.875,
              color: '#8D9BAB',
              lineHeight: 1.8,
              marginBottom: 32,
            }}>
              Trabajamos bajo normas internacionales de calidad <strong style={{ color: '#C8CDD3' }}>ISO 9001</strong>, representando
              a las mejores compañías del mundo en el rubro.
            </p>
            <Link to="/nosotros" className="btn-primary">Conocer Más</Link>
          </div>

          <div className="home-about-images" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
            {[
              '/images/0000021206IM01.jpg',
              '/images/noso_chico.jpg',
              '/images/0000021209IM01.jpg',
              '/images/0000021210IM01.jpg',
            ].map((src, i) => (
              <div key={i} style={{
                aspectRatio: '1',
                overflow: 'hidden',
                filter: i % 2 === 0 ? 'none' : 'brightness(0.85)',
              }}>
                <img src={src} alt="EMSAC manufactura" style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  filter: 'grayscale(20%)',
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

      {/* ── SECTORS ── */}
      <section className="section" style={{ background: '#F0EEE9' }}>
        <div className="container">
          <p className="label" style={{ marginBottom: 12 }}>Industrias que servimos</p>
          <h2 className="heading-lg" style={{ marginBottom: 48 }}>SECTORES</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 2,
          }}>
            {sectors.map((s, i) => (
              <div key={i} style={{
                background: '#fff',
                padding: '40px 24px',
                textAlign: 'center',
                borderBottom: '3px solid transparent',
                transition: 'all 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.borderBottomColor = '#E85D04'
                el.style.background = '#111'
                const txt = el.querySelector('p') as HTMLParagraphElement
                if (txt) txt.style.color = '#fff'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.borderBottomColor = 'transparent'
                el.style.background = '#fff'
                const txt = el.querySelector('p') as HTMLParagraphElement
                if (txt) txt.style.color = '#111'
              }}
              >
                <div style={{ fontSize: 36, marginBottom: 12 }}>{s.icon}</div>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 14,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: '#111',
                  transition: 'color 0.2s',
                }}>{s.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRANDS ── */}
      <section style={{ background: '#1B3A5C', padding: '48px 0' }}>
        <div className="container">
          <p style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: 11,
            letterSpacing: '5px',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.4)',
            textAlign: 'center',
            marginBottom: 32,
          }}>
            Marcas que distribuimos
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src="/images/0000021242IM01.jpg"
              alt="Marcas: HC, WROL, DELTA, MAX DYNAMIC, HECORAD, Ewart Chain"
              style={{
                maxWidth: 600,
                width: '100%',
                filter: 'brightness(1.4) contrast(1.1)',
              }}
            />
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section style={{
        background: '#111',
        backgroundImage: 'repeating-linear-gradient(-45deg,transparent,transparent 40px,rgba(255,255,255,0.018) 40px,rgba(255,255,255,0.018) 41px)',
        padding: '80px 0',
        textAlign: 'center',
      }}>
        <div className="container">
          <p className="label" style={{ marginBottom: 12 }}>¿Listo para trabajar con nosotros?</p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 'clamp(36px, 5vw, 64px)',
            textTransform: 'uppercase',
            color: '#fff',
            lineHeight: 1,
            marginBottom: 24,
          }}>
            CONTÁCTENOS HOY
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 18,
            color: '#8D9BAB',
            maxWidth: 480,
            margin: '0 auto 40px',
            lineHeight: 1.7,
          }}>
            Nuestros ingenieros están listos para desarrollar la solución que su empresa necesita.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contactenos" className="btn-primary">Ir a Contacto</Link>
            <a href="tel:+5113366593" className="btn-ghost">📞 +511 336-6593</a>
          </div>
        </div>
      </section>
    </>
  )
}
