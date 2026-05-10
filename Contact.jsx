/* eslint-disable no-undef */
const Contact = ({ onNavigate }) => {
  const { Button, CTATrio, PhoneIcon, InstagramIcon, FacebookIcon, YelpIcon, PHONE, EMAIL, ADDRESS_1, ADDRESS_2, SCHEDULE, SOCIALS } = window.TLC;
  const SOCIAL_ICON = { ig: InstagramIcon, fb: FacebookIcon, yp: YelpIcon };
  const [sent, setSent] = React.useState(false);

  return (
    <main>
      <section style={{ padding: 'clamp(40px, 8vw, 64px) clamp(16px, 4vw, 32px) 24px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ fontFamily: 'var(--font-script)', fontSize: 36, color: 'var(--chile-pink)', transform: 'rotate(-2deg)', display: 'inline-block' }}>say hi.</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(60px,8vw,116px)', lineHeight: 0.9, letterSpacing: '0.06em', textTransform: 'uppercase', margin: '4px 0 0', color: 'var(--adobe-brown)' }}>
          Contact <span style={{ color: 'var(--cilantro-green)' }}>us.</span>
        </h1>
      </section>

      <section style={{ padding: '32px clamp(16px, 4vw, 32px) clamp(48px, 8vw, 80px)', maxWidth: 1100, margin: '0 auto' }}>
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 'clamp(18px, 3vw, 32px)' }}>
          {/* Left — info + map */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <Block tone="orange">
              <h3 style={{ fontFamily: 'var(--font-subhead)', fontSize: 22, margin: '0 0 8px', color: 'var(--adobe-brown)' }}>Call us</h3>
              <a href={`tel:${PHONE.replace(/[^0-9+]/g,'')}`} style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 32, letterSpacing: '0.04em', color: 'var(--chile-pink)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10, lineHeight: 1.1 }}>
                <PhoneIcon size={26} />{PHONE}
              </a>
              <div style={{ fontSize: 13, color: 'var(--terracotta)', marginTop: 6 }}>Pickup orders + catering · while we&rsquo;re open.</div>
              <a href={`mailto:${EMAIL}`} style={{ display: 'inline-block', marginTop: 10, fontSize: 14, color: 'var(--cilantro-green-dark)', fontWeight: 700, textDecoration: 'none' }}>{EMAIL}</a>
            </Block>

            <Block tone="teal">
              <h3 style={{ fontFamily: 'var(--font-subhead)', fontSize: 22, margin: '0 0 8px', color: 'var(--adobe-brown)' }}>Visit</h3>
              <div style={{ fontSize: 16, lineHeight: 1.55, color: 'var(--adobe-brown)' }}>
                {ADDRESS_1}<br/>{ADDRESS_2}<br/>
                <span style={{ color: 'var(--terracotta)' }}>We&rsquo;re just a few steps from QFC. Look for the sugar skull door and our big colorful sign!</span>
              </div>
            </Block>

            <Block tone="orange">
              <h3 style={{ fontFamily: 'var(--font-subhead)', fontSize: 22, margin: '0 0 8px', color: 'var(--adobe-brown)' }}>Hours</h3>
              <table style={{ width: '100%', fontSize: 14, borderCollapse: 'collapse' }}>
                <tbody>
                  {SCHEDULE.map(s => (
                    <tr key={s.day}>
                      <td style={{ padding: '4px 0', fontWeight: 700, fontFamily: 'var(--font-body)' }}>{s.day}</td>
                      <td style={{ padding: '4px 0', textAlign: 'right', color: 'var(--terracotta)', fontWeight: 700 }}>{s.hrs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Block>

            <Block tone="teal">
              <h3 style={{ fontFamily: 'var(--font-subhead)', fontSize: 22, margin: '0 0 12px', color: 'var(--adobe-brown)' }}>Find us online</h3>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {SOCIALS.map(s => {
                  const Icon = SOCIAL_ICON[s.id];
                  return (
                    <a key={s.id} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      padding: '12px 16px', minHeight: 44,
                      background: 'var(--chile-pink)', color: 'var(--masa-cream)',
                      borderRadius: 999, textDecoration: 'none',
                      fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: 13,
                      letterSpacing: '0.04em', textTransform: 'uppercase',
                    }}>
                      <Icon size={18} /> {s.label}
                    </a>
                  );
                })}
              </div>
            </Block>

            <div style={{ position: 'relative', background: 'var(--sand-light)', border: '3px solid var(--adobe-brown)', borderRadius: 14, height: 240, overflow: 'hidden' }}>
              <svg viewBox="0 0 600 240" style={{ width: '100%', height: '100%', display: 'block' }}>
                <rect width="600" height="240" fill="var(--sand-light)" />
                <rect x="80" y="30" width="180" height="80" fill="var(--cilantro-green)" opacity="0.25" />
                <path d="M-20,120 L620,130" stroke="var(--masa-cream)" strokeWidth="22" />
                <path d="M-20,120 L620,130" stroke="var(--terracotta)" strokeWidth="2" strokeDasharray="6 8" />
                <path d="M280,-20 L320,260" stroke="var(--masa-cream)" strokeWidth="22" />
                <path d="M280,-20 L320,260" stroke="var(--terracotta)" strokeWidth="2" strokeDasharray="6 8" />
                <text x="100" y="80" fontFamily="var(--font-script)" fontSize="20" fill="var(--cilantro-green-dark)">Kent</text>
                <text x="20" y="115" fontFamily="var(--font-body)" fontSize="11" fontWeight="700" fill="var(--terracotta)">RUSSELL RD.</text>
                <circle cx="360" cy="150" r="20" fill="var(--chile-pink)" stroke="var(--adobe-brown)" strokeWidth="3" />
                <circle cx="360" cy="150" r="6" fill="var(--masa-cream)" />
                <text x="395" y="155" fontFamily="var(--font-subhead)" fontSize="18" fill="var(--adobe-brown)">TacosLand</text>
              </svg>
            </div>
          </div>

          {/* Right — message form */}
          <div style={{ background: 'var(--guac-dark)', color: 'var(--masa-cream)', borderRadius: 14, padding: 28, border: '3px solid var(--corn-gold)', alignSelf: 'flex-start' }}>
            {!sent ? (
              <>
                <h3 style={{ fontFamily: 'var(--font-subhead)', fontSize: 26, margin: '0 0 4px', color: 'var(--corn-gold)' }}>Drop us a line.</h3>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--sand-light)', margin: '0 0 18px' }}>Catering question, lost-and-found, or just a hello — we read every one.</p>
                <Field label="Your name" />
                <Field label="Email" type="email" />
                <Field label="Topic" select options={['General hello', 'Catering question', 'Reservation', 'Feedback', 'Press / partnership']} />
                <div style={{ marginBottom: 14 }}>
                  <div style={{ fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--corn-gold)', marginBottom: 6 }}>Message</div>
                  <textarea rows="5" defaultValue="hola!" style={{ ...inputStyle, fontFamily: 'var(--font-body)', resize: 'vertical' }} />
                </div>
                <Button variant="primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setSent(true)}>SEND IT →</Button>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '28px 0' }}>
                <div style={{ fontFamily: 'var(--font-script)', fontSize: 44, color: 'var(--corn-gold)', transform: 'rotate(-3deg)', display: 'inline-block' }}>got it!</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 44, lineHeight: 1, letterSpacing: '0.04em', textTransform: 'uppercase', margin: '8px 0 12px' }}>We&rsquo;ll write back.</h3>
                <p style={{ fontSize: 15, color: 'var(--sand-light)', margin: '0 0 20px' }}>Usually within a day. If it&rsquo;s urgent, just call.</p>
                <Button variant="secondary" onClick={() => onNavigate('home')}>Back to home</Button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--salsa-orange)', color: 'var(--masa-cream)', padding: 'clamp(40px, 8vw, 64px) clamp(16px, 4vw, 32px)', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(40px,5vw,64px)', lineHeight: 0.95, letterSpacing: '0.06em', textTransform: 'uppercase', margin: '0 0 24px' }}>Hungry already?</h2>
        <div style={{ display: 'inline-block' }}>
          <CTATrio onNavigate={onNavigate} dark={true} align="center" />
        </div>
      </section>
    </main>
  );
};

const inputStyle = {
  fontFamily: 'var(--font-body)', fontSize: 16, padding: '14px 14px',
  background: 'var(--masa-cream)', color: 'var(--adobe-brown)',
  border: '2px solid var(--corn-gold)', borderRadius: 6, outline: 'none', width: '100%', boxSizing: 'border-box',
  minHeight: 48,
};

const Field = ({ label, type = 'text', select = false, options = [] }) => (
  <div style={{ marginBottom: 14 }}>
    <div style={{ fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--corn-gold)', marginBottom: 6 }}>{label}</div>
    {select ? (
      <select style={inputStyle}>{options.map(o => <option key={o}>{o}</option>)}</select>
    ) : (
      <input type={type} style={inputStyle} />
    )}
  </div>
);

const Block = ({ tone = 'orange', children }) => (
  <div style={{
    background: 'var(--masa-cream)',
    border: `3px solid ${tone === 'teal' ? 'var(--teal-squeeze)' : 'var(--salsa-orange)'}`,
    borderRadius: 12, padding: 18,
  }}>{children}</div>
);

window.TLContact = Contact;
