import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer style={{ background: '#111111', borderTop: '1px solid rgba(196,30,30,0.2)' }}>
      {/* Main footer */}
      <div className="footer-inner" style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 40px 48px' }}>
        <div className="footer-main-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 48 }}>

          {/* Brand column */}
          <div>
            <Logo variant="light" size="sm" />
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 15.75,
              color: '#C0C0C0',
              lineHeight: 1.7,
              marginTop: 20,
              maxWidth: 280,
            }}>
              Empresa líder en ingeniería de transmisión de potencia, con más de 65 años de experiencia en la industria peruana.
            </p>
            <div style={{ marginTop: 24, display: 'flex', gap: 12 }}>
              <a
                href="https://wa.me/51998378016"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: '#1B3A6B',
                  color: '#fff',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 12,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  padding: '10px 18px',
                  borderRadius: 2,
                  textDecoration: 'none',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = '#111111'}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = '#1B3A6B'}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Cadenas */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 14,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#C41E1E',
              marginBottom: 20,
            }}>
              Cadenas
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'Transportadoras',  to: '/cadenas/transportadoras' },
                { label: 'De Transmisión',   to: '/cadenas/transmision'     },
                { label: 'Para Agricultura', to: '/cadenas/agricultura'     },
                { label: 'De Balanza',       to: '/cadenas/balanza'         },
                { label: 'Eslabonadas',      to: '/cadenas/eslabonadas'     },
              ].map(l => (
                <li key={l.to}>
                  <Link to={l.to} style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 15.75,
                    color: '#C0C0C0',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#C41E1E'}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = '#C0C0C0'}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Productos */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 14,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#C41E1E',
              marginBottom: 20,
            }}>
              Productos
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'Poleas',           to: '/poleas'          },
                { label: 'Piñones',         to: '/pinones'         },
                { label: 'Acoplamientos',   to: '/acoplamientos'   },
                { label: 'Otros Productos', to: '/otros-productos' },
              ].map(l => (
                <li key={l.to}>
                  <Link to={l.to} style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 15.75,
                    color: '#C0C0C0',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#C41E1E'}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = '#C0C0C0'}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 14,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#C41E1E',
              marginBottom: 20,
            }}>
              Contacto
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: '📍', text: 'Av. Colonial 2078-2082\nCercado de Lima' },
                { icon: '📞', text: '+511 336-6593\n+511 336-6630\n+511 336-7778' },
                { icon: '✉️', text: 'formulario@emsa.com.pe' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 14, marginTop: 1 }}>{item.icon}</span>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 14.625,
                    color: '#C0C0C0',
                    lineHeight: 1.7,
                    whiteSpace: 'pre-line',
                  }}>{item.text}</p>
                </div>
              ))}
              <div style={{ marginTop: 4 }}>
                <Link to="/nosotros" style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 14,
                  color: '#C0C0C0',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#C41E1E'}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = '#C0C0C0'}
                >
                  Nosotros →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom" style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '20px 40px',
        maxWidth: 1200,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 12,
      }}>
        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: 11,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: '#C0C0C0',
        }}>
          © {new Date().getFullYear()} Equipos Mecánicos S.A. — Todos los derechos reservados
        </p>
        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: 11,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: '#C0C0C0',
        }}>
          Lima, Perú
        </p>
      </div>
    </footer>
  )
}
