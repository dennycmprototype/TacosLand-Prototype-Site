/* eslint-disable no-undef */
const Catering = ({ onNavigate }) => {
  const { Button, Stamp, Pill, WaveDivider, PHONE, EMAIL, FOOD_PHOTOS, Reveal } = window.TLC;
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({
    firstName: '', lastName: '', email: '', phone: '',
    occasion: '', services: [], cateringType: 'Drop-off',
    budget: 18, partySize: 40, date: '',
  });
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const toggle = (k, v) => setForm(f => ({ ...f, [k]: f[k].includes(v) ? f[k].filter(x => x !== v) : [...f[k], v] }));

  const valid = form.firstName && form.lastName && form.email && form.occasion && form.date;

  return (
    <main>
      {/* HERO */}
      <section style={{ background: 'var(--chile-pink)', color: 'var(--masa-cream)', padding: 'clamp(40px, 8vw, 72px) clamp(16px, 4vw, 24px) clamp(48px, 10vw, 88px)', position: 'relative', overflow: 'hidden' }}>
        <svg viewBox="0 0 800 400" style={{ position: 'absolute', top: -80, right: -120, width: 700, height: 350, opacity: 0.18, pointerEvents: 'none' }}>
          {Array.from({ length: 30 }).map((_, i) => {
            const angle = (i / 30) * Math.PI;
            const x2 = 400 + Math.cos(angle - Math.PI) * 360;
            const y2 = 380 + Math.sin(angle - Math.PI) * 360;
            return <line key={i} x1="400" y1="380" x2={x2} y2={y2} stroke="var(--corn-gold)" strokeWidth="3" strokeLinecap="round" />;
          })}
        </svg>
        <div className="cater-hero" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'center', position: 'relative' }}>
          <Reveal>
            <div>
              <div style={{ fontFamily: 'var(--font-script)', fontSize: 'clamp(34px,4vw,46px)', color: 'var(--corn-gold)', transform: 'rotate(-3deg)', display: 'inline-block' }}>feed your people.</div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(56px,8vw,116px)', lineHeight: 0.9, letterSpacing: '0.06em', textTransform: 'uppercase', margin: '4px 0 18px' }}>
                Catering.
              </h1>
              <p style={{ fontSize: 'clamp(15px,1.4vw,19px)', lineHeight: 1.6, maxWidth: 540, margin: '0 0 22px' }}>
                Office lunch, backyard wedding, Friday block party. We&rsquo;ll bring the plancha, set up the bar, and press tortillas in front of your guests. <b>Min 20 people · 48 hours notice.</b>
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Button variant="dark" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ block: 'start', behavior: 'smooth' })}>Request a quote ↓</Button>
                <a href={`tel:${PHONE.replace(/[^0-9+]/g,'')}`} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: 14,
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                  padding: '14px 24px', borderRadius: 6,
                  background: 'var(--corn-gold)', color: 'var(--adobe-brown)',
                  textDecoration: 'none', minHeight: 48,
                }}>Call · {PHONE}</a>
              </div>
            </div>
          </Reveal>
          <Reveal y={40}>
            <div style={{ position: 'relative' }}>
              <div style={{ height: 'clamp(220px, 50vw, 320px)', borderRadius: 14, overflow: 'hidden', border: '4px solid var(--corn-gold)', transform: 'rotate(3deg)', boxShadow: '0 18px 30px -12px rgba(0,0,0,0.45)' }}>
                <img src={FOOD_PHOTOS[2].src} alt="catering quesabirria" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ position: 'absolute', top: -22, left: -22 }}>
                <Stamp color="gold" rotate={-8}>20+<br/>PEOPLE</Stamp>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY */}
      <section style={{ padding: 'clamp(40px, 8vw, 72px) clamp(16px, 4vw, 24px) 32px', maxWidth: 1100, margin: '0 auto' }}>
        <div className="why-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
          {[
            { h: 'On-site tortilla press', p: 'We make them in front of your guests. The smell alone closes the deal.' },
            { h: 'No reheated trays',     p: 'Plancha goes hot. Meats off the heat to the plate. The way it should be.' },
            { h: 'Custom packages',       p: 'Vegetarian, kid-friendly, late-night, dessert-only — say the word.' },
          ].map((b, i) => (
            <Reveal key={i} delay={i*120}>
              <div style={{
                background: i === 1 ? 'var(--sand-light)' : 'var(--masa-cream)',
                border: `3px solid ${i === 1 ? 'var(--teal-squeeze)' : 'var(--salsa-orange)'}`,
                borderRadius: 12, padding: 22, height: '100%', boxSizing: 'border-box',
              }}>
                <h3 style={{ fontFamily: 'var(--font-subhead)', fontSize: 22, color: 'var(--adobe-brown)', margin: '0 0 8px' }}>{b.h}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--terracotta)', margin: 0 }}>{b.p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <WaveDivider color="var(--teal-squeeze)" />

      {/* QUOTE FORM */}
      <section id="quote-form" style={{ background: 'var(--guac-dark)', color: 'var(--masa-cream)', padding: 'clamp(40px, 8vw, 72px) clamp(16px, 4vw, 24px)' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <Reveal>
            <div style={{ fontFamily: 'var(--font-script)', fontSize: 36, color: 'var(--corn-gold)', transform: 'rotate(-2deg)', display: 'inline-block' }}>let&rsquo;s talk.</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(40px,5.5vw,72px)', lineHeight: 0.95, letterSpacing: '0.04em', textTransform: 'uppercase', margin: '4px 0 8px', color: 'var(--masa-cream)' }}>
              Catering <span style={{ color: 'var(--corn-gold)' }}>request.</span>
            </h2>
            <p style={{ fontSize: 16, color: 'var(--sand-light)', maxWidth: 560, margin: '0 0 32px' }}>
              Fill it in, hit send. We&rsquo;ll write back within a day with a tailored quote.
            </p>
          </Reveal>

          {!sent ? (
            <div style={{ background: 'var(--masa-cream)', color: 'var(--adobe-brown)', borderRadius: 14, padding: 28, border: '3px solid var(--corn-gold)' }}>
              <div className="form-row">
                <Field label="First name" required value={form.firstName} onChange={v => set('firstName', v)} />
                <Field label="Last name" required value={form.lastName} onChange={v => set('lastName', v)} />
              </div>
              <div className="form-row">
                <Field label="Email" type="email" required value={form.email} onChange={v => set('email', v)} />
                <Field label="Phone" type="tel" value={form.phone} onChange={v => set('phone', v)} />
              </div>
              <Field label="Occasion" required value={form.occasion} onChange={v => set('occasion', v)} placeholder="Wedding, corporate lunch, birthday…" />

              <FieldGroup label="What services are you interested in?">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {['Full service','Drop-off','Taco bar','On-site tortilla press','Servers','Drinks add-on','Dessert add-on'].map(s => (
                    <Chip key={s} active={form.services.includes(s)} onClick={() => toggle('services', s)}>{s}</Chip>
                  ))}
                </div>
              </FieldGroup>

              <FieldGroup label="Catering type">
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {['Drop-off','Buffet on-site','Plated','Taco bar live'].map(s => (
                    <Chip key={s} active={form.cateringType === s} onClick={() => set('cateringType', s)}>{s}</Chip>
                  ))}
                </div>
              </FieldGroup>

              <FieldGroup label={`Budget — $${form.budget} per person`}>
                <input type="range" min="12" max="40" step="1" value={form.budget} onChange={e => set('budget', Number(e.target.value))} style={{ width: '100%', accentColor: 'var(--chile-pink)' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--terracotta)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  <span>$12</span><span>$40+</span>
                </div>
              </FieldGroup>

              <div className="form-row">
                <FieldGroup label={`Party size — ${form.partySize} people`}>
                  <input type="range" min="20" max="200" step="5" value={form.partySize} onChange={e => set('partySize', Number(e.target.value))} style={{ width: '100%', accentColor: 'var(--chile-pink)' }} />
                </FieldGroup>
                <Field label="Date of event" type="date" required value={form.date} onChange={v => set('date', v)} />
              </div>

              <div style={{ marginTop: 22, padding: 18, background: 'var(--sand-light)', borderRadius: 10, border: '2px dashed var(--corn-gold)', display: 'grid', gridTemplateColumns: '1fr auto', gap: 12, alignItems: 'center' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--terracotta)' }}>Estimate</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 38, lineHeight: 1, color: 'var(--chile-pink)', letterSpacing: '0.04em' }}>
                    ${(form.budget * form.partySize).toLocaleString()}
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--terracotta)', marginTop: 2 }}>{form.partySize} ppl × ${form.budget}/head</div>
                </div>
                <Button variant="primary" onClick={() => valid && setSent(true)} style={{ opacity: valid ? 1 : 0.5, cursor: valid ? 'pointer' : 'not-allowed' }}>SEND IT →</Button>
              </div>
              {!valid && <div style={{ marginTop: 12, fontSize: 12, color: 'var(--terracotta)', fontWeight: 700 }}>Fill in the required fields above (★) to send.</div>}

              <div style={{ marginTop: 18, fontSize: 13, color: 'var(--terracotta)', textAlign: 'center' }}>
                or email <a href={`mailto:${EMAIL}`} style={{ color: 'var(--chile-pink)', fontWeight: 800, textDecoration: 'none' }}>{EMAIL}</a> · call <a href={`tel:${PHONE.replace(/[^0-9+]/g,'')}`} style={{ color: 'var(--chile-pink)', fontWeight: 800, textDecoration: 'none' }}>{PHONE}</a>
              </div>
            </div>
          ) : (
            <div style={{ background: 'var(--masa-cream)', color: 'var(--adobe-brown)', borderRadius: 14, padding: '40px 28px', border: '3px solid var(--corn-gold)', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-script)', fontSize: 48, color: 'var(--chile-pink)', transform: 'rotate(-3deg)', display: 'inline-block' }}>got it!</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 44, lineHeight: 1, letterSpacing: '0.04em', textTransform: 'uppercase', margin: '8px 0 12px', color: 'var(--adobe-brown)' }}>We&rsquo;ll write back.</h3>
              <p style={{ fontSize: 15, color: 'var(--terracotta)', margin: '0 0 22px' }}>Usually within a day. If it&rsquo;s urgent, just call.</p>
              <Button variant="primary" onClick={() => onNavigate('home')}>Back to home</Button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

const inputBase = {
  fontFamily: 'var(--font-body)', fontSize: 16, padding: '14px 14px',
  background: 'var(--masa-cream)', color: 'var(--adobe-brown)',
  border: '2px solid var(--corn-gold)', borderRadius: 6, outline: 'none', width: '100%', boxSizing: 'border-box',
  minHeight: 48,
};
const Field = ({ label, type='text', value, onChange, required, placeholder }) => (
  <div style={{ marginBottom: 14 }}>
    <div style={{ fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--terracotta)', marginBottom: 6 }}>{label}{required && <span style={{ color: 'var(--chile-pink)' }}> ★</span>}</div>
    <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} style={inputBase} />
  </div>
);
const FieldGroup = ({ label, children }) => (
  <div style={{ marginBottom: 14 }}>
    <div style={{ fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--terracotta)', marginBottom: 6 }}>{label}</div>
    {children}
  </div>
);
const Chip = ({ active, onClick, children }) => (
  <button type="button" onClick={onClick} style={{
    fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13,
    padding: '12px 16px', borderRadius: 999, cursor: 'pointer', minHeight: 44,
    border: `2px solid ${active ? 'var(--chile-pink)' : 'var(--corn-gold)'}`,
    background: active ? 'var(--chile-pink)' : 'transparent',
    color: active ? 'var(--masa-cream)' : 'var(--adobe-brown)',
    transition: 'all 150ms var(--ease-warm)',
  }}>{children}</button>
);

window.TLCatering = Catering;
