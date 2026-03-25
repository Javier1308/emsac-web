import { useState } from 'react'

const contactInfo = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Dirección',
    value: 'Av. Colonial 2078-2082\nCercado de Lima, Lima, Perú',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.28 16a2 2 0 0 1 .72.92z"/>
      </svg>
    ),
    label: 'Teléfonos',
    value: '+511 336-6593\n+511 336-6630\n+511 336-7778',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Correo',
    value: 'formulario@emsa.com.pe',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    label: 'WhatsApp',
    value: '+51 998 378 016\nLun–Vie: 10:00–19:00',
  },
]

export default function Contactenos() {
  const [form, setForm] = useState({ nombre: '', empresa: '', telefono: '', correo: '', comentarios: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      {/* Hero */}
      <section style={{
        background: '#496ebc',
        backgroundImage: 'repeating-linear-gradient(-45deg,transparent,transparent 40px,rgba(255,255,255,0.07) 40px,rgba(255,255,255,0.07) 41px)',
        padding: '80px 0 64px',
        borderBottom: '3px solid #E67E22',
      }}>
        <div className="m-pad" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
          <p className="label" style={{ marginBottom: 12 }}>Estamos para ayudarle</p>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 900,
            fontSize: 'clamp(48px, 7vw, 80px)', textTransform: 'uppercase',
            lineHeight: 0.95, color: '#fff',
          }}>
            CONTÁC-<br /><span style={{ color: '#E67E22' }}>TENOS</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: '#fff', marginTop: 20, maxWidth: 480, lineHeight: 1.7 }}>
            Nuestros ingenieros están disponibles para desarrollar la solución que su empresa necesita.
            Responderemos su consulta a la brevedad.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="cont-main-grid" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64 }}>

          {/* Form */}
          <div>
            <p className="label" style={{ marginBottom: 16 }}>Escríbanos</p>
            {sent ? (
              <div style={{
                background: '#496ebc', border: '1px solid rgba(196,30,30,0.4)', borderLeft: '4px solid #E67E22',
                padding: '40px 36px', borderRadius: 2,
              }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, textTransform: 'uppercase', color: '#fff', marginBottom: 12 }}>
                  ✓ Mensaje Enviado
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 16.875, color: '#E0E0E0', lineHeight: 1.7 }}>
                  Gracias por contactarnos. Un asesor de EMSAC se comunicará con usted a la brevedad posible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ fontFamily: 'var(--font-display)', fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase', color: '#E67E22', display: 'block', marginBottom: 8 }}>
                      * Nombre y Apellidos
                    </label>
                    <input
                      name="nombre" required value={form.nombre} onChange={handleChange}
                      style={{
                        width: '100%', padding: '12px 16px',
                        background: '#fff', border: '1.5px solid #E0E0E0',
                        borderRadius: 2, fontFamily: 'var(--font-body)', fontSize: 15.75, color: '#111111',
                        outline: 'none', transition: 'border-color 0.2s',
                      }}
                      onFocus={e => (e.currentTarget as HTMLInputElement).style.borderColor = '#E67E22'}
                      onBlur={e => (e.currentTarget as HTMLInputElement).style.borderColor = '#E0E0E0'}
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: 'var(--font-display)', fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase', color: '#E0E0E0', display: 'block', marginBottom: 8 }}>
                      Empresa
                    </label>
                    <input
                      name="empresa" value={form.empresa} onChange={handleChange}
                      style={{
                        width: '100%', padding: '12px 16px',
                        background: '#fff', border: '1.5px solid #E0E0E0',
                        borderRadius: 2, fontFamily: 'var(--font-body)', fontSize: 15.75, color: '#111111',
                        outline: 'none', transition: 'border-color 0.2s',
                      }}
                      onFocus={e => (e.currentTarget as HTMLInputElement).style.borderColor = '#E67E22'}
                      onBlur={e => (e.currentTarget as HTMLInputElement).style.borderColor = '#E0E0E0'}
                    />
                  </div>
                </div>
                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ fontFamily: 'var(--font-display)', fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase', color: '#E67E22', display: 'block', marginBottom: 8 }}>
                      * Teléfono
                    </label>
                    <input
                      name="telefono" required value={form.telefono} onChange={handleChange}
                      style={{
                        width: '100%', padding: '12px 16px',
                        background: '#fff', border: '1.5px solid #E0E0E0',
                        borderRadius: 2, fontFamily: 'var(--font-body)', fontSize: 15.75, color: '#111111',
                        outline: 'none', transition: 'border-color 0.2s',
                      }}
                      onFocus={e => (e.currentTarget as HTMLInputElement).style.borderColor = '#E67E22'}
                      onBlur={e => (e.currentTarget as HTMLInputElement).style.borderColor = '#E0E0E0'}
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: 'var(--font-display)', fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase', color: '#E67E22', display: 'block', marginBottom: 8 }}>
                      * Correo Electrónico
                    </label>
                    <input
                      name="correo" type="email" required value={form.correo} onChange={handleChange}
                      style={{
                        width: '100%', padding: '12px 16px',
                        background: '#fff', border: '1.5px solid #E0E0E0',
                        borderRadius: 2, fontFamily: 'var(--font-body)', fontSize: 15.75, color: '#111111',
                        outline: 'none', transition: 'border-color 0.2s',
                      }}
                      onFocus={e => (e.currentTarget as HTMLInputElement).style.borderColor = '#E67E22'}
                      onBlur={e => (e.currentTarget as HTMLInputElement).style.borderColor = '#E0E0E0'}
                    />
                  </div>
                </div>
                <div>
                  <label style={{ fontFamily: 'var(--font-display)', fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase', color: '#E0E0E0', display: 'block', marginBottom: 8 }}>
                    Comentarios
                  </label>
                  <textarea
                    name="comentarios" rows={5} value={form.comentarios} onChange={handleChange}
                    placeholder="Describa su consulta o requerimiento..."
                    style={{
                      width: '100%', padding: '12px 16px',
                      background: '#fff', border: '1.5px solid #E0E0E0',
                      borderRadius: 2, fontFamily: 'var(--font-body)', fontSize: 15.75, color: '#111111',
                      outline: 'none', transition: 'border-color 0.2s', resize: 'vertical',
                    }}
                    onFocus={e => (e.currentTarget as HTMLTextAreaElement).style.borderColor = '#E67E22'}
                    onBlur={e => (e.currentTarget as HTMLTextAreaElement).style.borderColor = '#E0E0E0'}
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', marginTop: 8 }}>
                  Enviar Mensaje →
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div>
            <p className="label" style={{ marginBottom: 24 }}>Datos de Contacto</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {contactInfo.map((c, i) => (
                <div key={i} style={{
                  background: '#FFFFFF',
                  padding: '24px',
                  display: 'flex',
                  gap: 16,
                  alignItems: 'flex-start',
                  border: '1px solid rgba(73,110,188,0.12)',
                  borderLeft: '3px solid #E67E22',
                }}>
                  <div style={{ color: '#E67E22', marginTop: 2, flexShrink: 0 }}>{c.icon}</div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: 10, letterSpacing: '3px', textTransform: 'uppercase', color: '#E67E22', marginBottom: 6 }}>{c.label}</p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 15.75, color: '#111111', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/51998378016?text=Hola,%20necesito%20más%20información%20sobre%20sus%20productos"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginTop: 16,
                background: '#496ebc',
                color: '#fff',
                textDecoration: 'none',
                padding: '16px 24px',
                borderRadius: 2,
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = '#496ebc'}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = '#496ebc'}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chatear por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section style={{ background: '#496ebc', borderTop: '3px solid #E67E22' }}>
        <div className="m-pad" style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 40px' }}>
          <p className="label" style={{ marginBottom: 12 }}>Cómo llegar</p>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 900,
            fontSize: 'clamp(28px, 3vw, 40px)', textTransform: 'uppercase',
            color: '#fff', lineHeight: 1, marginBottom: 32,
          }}>
            NUESTRA <span style={{ color: '#E67E22' }}>UBICACIÓN</span>
          </h2>
          <div style={{ position: 'relative', borderRadius: 2, overflow: 'hidden', border: '1px solid rgba(196,30,30,0.3)' }}>
            <iframe
              title="Ubicación EMSAC — Av. Colonial 2078-2082, Lima"
              src="https://www.google.com/maps?q=Av.+Colonial+2078,+Cercado+de+Lima,+Lima,+Peru&hl=es&z=17&output=embed"
              width="100%"
              height="420"
              style={{ display: 'block', border: 'none' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 15.75,
            color: '#E0E0E0', marginTop: 12,
          }}>
            📍 Av. Colonial 2078-2082, Cercado de Lima, Lima, Perú
          </p>
        </div>
      </section>
    </>
  )
}
