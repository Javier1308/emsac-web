import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'

const cadenasLinks = [
  { label: 'Cadenas Transportadoras', to: '/cadenas/transportadoras' },
  { label: 'Cadenas de Transmisión',  to: '/cadenas/transmision'     },
  { label: 'Cadenas para Agricultura',to: '/cadenas/agricultura'     },
  { label: 'Cadenas de Balanza',      to: '/cadenas/balanza'         },
  { label: 'Cadenas Eslabonadas',     to: '/cadenas/eslabonadas'     },
]

const navLinks = [
  { label: 'Poleas',           to: '/poleas'          },
  { label: 'Piñones',         to: '/pinones'         },
  { label: 'Acoplamientos',   to: '/acoplamientos'   },
  { label: 'Otros Productos', to: '/otros-productos' },
  { label: 'Nosotros',        to: '/nosotros'        },
]

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false)
  const [dropdownOpen,   setDropdownOpen]   = useState(false)
  const [mobileOpen,     setMobileOpen]     = useState(false)
  const [mobileDropdown, setMobileDropdown] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
  }, [location])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const isActive = (to: string) =>
    location.pathname === to || location.pathname.startsWith(to + '/')

  const isCadenasActive = location.pathname.startsWith('/cadenas')

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        height: 'var(--nav-height)',
        background: scrolled ? 'rgba(17,17,17,0.97)' : '#111111',
        borderBottom: `1px solid ${scrolled ? 'rgba(232,93,4,0.5)' : 'rgba(232,93,4,0.25)'}`,
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.3s ease',
      }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 32px',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 32,
        }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <Logo variant="light" size="sm" />
          </Link>

          {/* Desktop nav */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            flexWrap: 'nowrap',
          }} className="desktop-nav">

            {/* Cadenas dropdown */}
            <div ref={dropdownRef} style={{ position: 'relative' }}>
              <button
                onClick={() => setDropdownOpen(o => !o)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '8px 14px',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 13,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: isCadenasActive ? '#E85D04' : '#8D9BAB',
                  borderBottom: isCadenasActive ? '2px solid #E85D04' : '2px solid transparent',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => { if (!isCadenasActive) (e.currentTarget as HTMLButtonElement).style.color = '#fff' }}
                onMouseLeave={e => { if (!isCadenasActive) (e.currentTarget as HTMLButtonElement).style.color = '#8D9BAB' }}
              >
                Cadenas
                <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor"
                  style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                  <path d="M0 0l5 6 5-6H0z"/>
                </svg>
              </button>

              {dropdownOpen && (
                <div style={{
                  position: 'absolute',
                  top: 'calc(100% + 8px)',
                  left: 0,
                  background: '#1C1C1C',
                  border: '1px solid rgba(232,93,4,0.3)',
                  borderTop: '2px solid #E85D04',
                  borderRadius: '0 0 4px 4px',
                  minWidth: 240,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                  overflow: 'hidden',
                }}>
                  {cadenasLinks.map(l => (
                    <Link
                      key={l.to}
                      to={l.to}
                      style={{
                        display: 'block',
                        padding: '12px 20px',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 600,
                        fontSize: 13,
                        letterSpacing: '1.5px',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                        color: isActive(l.to) ? '#E85D04' : '#C8CDD3',
                        background: isActive(l.to) ? 'rgba(232,93,4,0.1)' : 'transparent',
                        borderLeft: isActive(l.to) ? '3px solid #E85D04' : '3px solid transparent',
                        transition: 'all 0.15s',
                      }}
                      onMouseEnter={e => {
                        const el = e.currentTarget as HTMLAnchorElement
                        el.style.background = 'rgba(232,93,4,0.12)'
                        el.style.color = '#E85D04'
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget as HTMLAnchorElement
                        el.style.background = isActive(l.to) ? 'rgba(232,93,4,0.1)' : 'transparent'
                        el.style.color = isActive(l.to) ? '#E85D04' : '#C8CDD3'
                      }}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Regular links */}
            {navLinks.map(l => (
              <Link
                key={l.to}
                to={l.to}
                style={{
                  padding: '8px 14px',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 13,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  color: isActive(l.to) ? '#E85D04' : '#8D9BAB',
                  borderBottom: isActive(l.to) ? '2px solid #E85D04' : '2px solid transparent',
                  transition: 'color 0.2s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => { if (!isActive(l.to)) (e.currentTarget as HTMLAnchorElement).style.color = '#fff' }}
                onMouseLeave={e => { if (!isActive(l.to)) (e.currentTarget as HTMLAnchorElement).style.color = '#8D9BAB' }}
              >
                {l.label}
              </Link>
            ))}

            {/* CTA */}
            <Link
              to="/contactenos"
              style={{
                marginLeft: 8,
                padding: '8px 20px',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: isActive('/contactenos') ? '#fff' : '#fff',
                background: isActive('/contactenos') ? '#c94d02' : '#E85D04',
                borderRadius: 2,
                transition: 'background 0.2s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = '#c94d02'}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = isActive('/contactenos') ? '#c94d02' : '#E85D04'}
            >
              Contáctenos
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(o => !o)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 8,
              color: '#fff',
            }}
            className="hamburger"
            aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen
                ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
              }
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          position: 'fixed',
          top: 'var(--nav-height)',
          left: 0, right: 0, bottom: 0,
          background: '#111111',
          zIndex: 999,
          overflowY: 'auto',
          padding: '24px 0',
        }}>
          {/* Cadenas */}
          <button
            onClick={() => setMobileDropdown(o => !o)}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 32px',
              background: 'none',
              border: 'none',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              cursor: 'pointer',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: isCadenasActive ? '#E85D04' : '#fff',
            }}
          >
            Cadenas
            <svg width="12" height="7" viewBox="0 0 10 6" fill="currentColor"
              style={{ transform: mobileDropdown ? 'rotate(180deg)' : 'none' }}>
              <path d="M0 0l5 6 5-6H0z"/>
            </svg>
          </button>

          {mobileDropdown && cadenasLinks.map(l => (
            <Link
              key={l.to}
              to={l.to}
              style={{
                display: 'block',
                padding: '12px 48px',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: 13,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: isActive(l.to) ? '#E85D04' : '#8D9BAB',
                borderBottom: '1px solid rgba(255,255,255,0.04)',
                background: isActive(l.to) ? 'rgba(232,93,4,0.08)' : 'transparent',
              }}
            >
              {l.label}
            </Link>
          ))}

          {[...navLinks, { label: 'Contáctenos', to: '/contactenos' }].map(l => (
            <Link
              key={l.to}
              to={l.to}
              style={{
                display: 'block',
                padding: '14px 32px',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 15,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: isActive(l.to) ? '#E85D04' : '#fff',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {l.label}
            </Link>
          ))}

          <div style={{ padding: '24px 32px' }}>
            <a href="tel:+5113366593" style={{
              display: 'block',
              fontFamily: 'var(--font-display)',
              fontSize: 18,
              fontWeight: 700,
              color: '#E85D04',
              textDecoration: 'none',
              marginBottom: 8,
            }}>
              +511 336-6593
            </a>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.625, color: '#8D9BAB' }}>
              Av. Colonial 2078-2082, Lima
            </p>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 960px) {
          .desktop-nav { display: none !important; }
          .hamburger   { display: flex !important; }
        }
      `}</style>
    </>
  )
}
