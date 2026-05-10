/* eslint-disable no-undef */
const Home = ({ onNavigate, onAddSpecial }) => {
  const { Button, Stamp, Pill, WaveDivider, CTATrio, Stars, PHONE, FOOD_PHOTOS, Reveal } = window.TLC;

  /* HERO ROTATOR — swaps every 2s */
  const [heroIdx, setHeroIdx] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setHeroIdx(i => (i + 1) % FOOD_PHOTOS.length), 2000);
    return () => clearInterval(t);
  }, []);

  const previews = [
    { id: 'chila',       name: 'Chilaquiles Plate', price: '$13.50', desc: 'Fried tortilla in green or red house sauce, crema, queso fresco, eggs to order.', img: 0, rot: -1, tag: 'fav' },
    { id: 'birria-r',    name: 'Birria Ramen Bowl', price: '$12.50', desc: 'Birria consommé and protein over ramen, cilantro, pickled onion.',                img: 2, rot:  1, tag: 'fav' },
    { id: 'fries',       name: 'Loaded Fries',      price: '$13.00', desc: 'Fries topped with your protein, cheddar, guac, sour cream, pico.',                img: 5, rot: -1, tag: 'fav' },
    { id: 'fajita',      name: 'Fajita Bowl',       price: '$12.00', desc: 'Chicken, steak, or shrimp over rice, beans, pico, guac, sour cream.',             img: 4, rot:  1, tag: 'fav' },
  ];

  const reviews = [
    {
      stars: 5,
      text: "“The wife and I had date night. Always enjoy the friendly service. I ordered the Wet Burrito — wonderful! Added two chiles toreados. My wife had two fish tacos and they were delicious. Very generous portions.”",
      who: 'Jeff Anderson',
      meta: 'Google review',
      tone: 'pink',
    },
    {
      stars: 5,
      text: "“The quesabirria tacos are the best in town. Their salsa and chips so yummy and their beans and rice are perfect. The best place in town — I should know, I've gone to every Mexican restaurant in the Kent–Auburn–Renton area over the last 2 years. By far the best food around.”",
      who: 'Senida Cosic',
      meta: 'Google review',
      tone: 'cream',
    },
    {
      stars: 5,
      text: "“So excited TacosLand is finally open! My brother and I tried them for lunch on Saturday and breakfast on Sunday in order to give a full review. YUM 😋”",
      who: 'Elizabeth Evans',
      meta: 'Google review',
      tone: 'pink',
    },
  ];

  return (
    <main>
      {/* ============== HERO ============== */}
      <section style={{
        background: 'var(--salsa-orange)', color: 'var(--masa-cream)',
        position: 'relative', overflow: 'hidden', padding: 'clamp(40px, 8vw, 72px) clamp(16px, 4vw, 32px) clamp(48px, 10vw, 96px)',
      }}>
        <svg viewBox="0 0 800 400" style={{ position: 'absolute', top: -80, right: -160, width: 820, height: 420, opacity: 0.18, pointerEvents: 'none' }}>
          {Array.from({ length: 36 }).map((_, i) => {
            const angle = (i / 36) * Math.PI;
            const x2 = 400 + Math.cos(angle - Math.PI) * 380;
            const y2 = 380 + Math.sin(angle - Math.PI) * 380;
            return <line key={i} x1="400" y1="380" x2={x2} y2={y2} stroke="var(--teal-squeeze)" strokeWidth="3" strokeLinecap="round" />;
          })}
        </svg>

        <div className="hero-grid" style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.25fr 1fr', gridTemplateRows: 'auto auto', gap: 'clamp(24px, 5vw, 48px)', alignItems: 'center', position: 'relative' }}>
          {/* Headline — desktop col 1 row 1, mobile: first */}
          <div style={{ gridColumn: 1, gridRow: 1 }}>
            <div style={{ fontFamily: 'var(--font-script)', fontSize: 'clamp(32px,4vw,46px)', lineHeight: 1, color: 'var(--corn-gold)', transform: 'rotate(-3deg)', display: 'inline-block', marginBottom: 10 }}>
              you found us.
            </div>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontWeight: 900,
              fontSize: 'clamp(48px, 7.6vw, 116px)', lineHeight: 0.85,
              letterSpacing: '0.06em', textTransform: 'uppercase',
              color: 'var(--masa-cream)', margin: 0,
            }}>
              That first bite<br/>changes <span style={{ color: 'var(--corn-gold)' }}>everything.</span>
            </h1>
          </div>

          {/* Hero photo rotator — desktop col 2 spanning both rows, mobile: second */}
          <div className="hero-image" style={{ position: 'relative', maxWidth: 460, width: '100%', justifySelf: 'center', gridColumn: 2, gridRow: '1 / 3' }}>
            <div style={{
              position: 'relative',
              aspectRatio: '4/5',
              maxHeight: 480,
              border: '4px solid var(--corn-gold)',
              borderRadius: 14,
              overflow: 'hidden',
              transform: 'rotate(2deg)',
              boxShadow: '0 22px 40px -12px rgba(59,35,20,0.55)',
              background: 'var(--guac-dark)',
            }}>
              {FOOD_PHOTOS.map((p, i) => (
                <img key={p.src} src={p.src} alt={p.alt} loading={i===0?'eager':'lazy'} decoding="async" style={{
                  position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
                  opacity: i === heroIdx ? 1 : 0,
                  transform: i === heroIdx ? 'scale(1.0)' : 'scale(1.06)',
                  transition: 'opacity 700ms var(--ease-warm), transform 2400ms linear',
                }} />
              ))}
              {/* Dot indicator */}
              <div style={{ position: 'absolute', bottom: 12, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 6, padding: '6px 10px', background: 'rgba(26,58,42,0.55)', borderRadius: 999 }}>
                {FOOD_PHOTOS.map((_, i) => (
                  <span key={i} style={{
                    width: i === heroIdx ? 18 : 6, height: 6, borderRadius: 999,
                    background: i === heroIdx ? 'var(--corn-gold)' : 'rgba(255,245,230,0.5)',
                    transition: 'all 320ms var(--ease-warm)',
                  }} />
                ))}
              </div>
            </div>
            <div style={{ position: 'absolute', top: -22, right: -18, zIndex: 3 }}>
              <Stamp color="green" rotate={8}>FRESH<br/>DAILY</Stamp>
            </div>
            <div style={{ position: 'absolute', bottom: -22, left: -28, zIndex: 3 }}>
              <Stamp color="gold" rotate={-10} size={96}>SINCE<br/>2023</Stamp>
            </div>
          </div>

          {/* Body text + CTA — desktop col 1 row 2, mobile: third */}
          <div style={{ gridColumn: 1, gridRow: 2 }}>
            <p style={{ fontSize: 'clamp(15px,1.4vw,19px)', lineHeight: 1.65, maxWidth: 560, margin: '0 0 14px', color: 'var(--masa-cream)' }}>
              A tortilla still warm from the press, authentic flavors you can taste the tradition in, and the kind of from-scratch care you don&rsquo;t find often.
            </p>
            <p style={{ fontSize: 'clamp(15px,1.4vw,19px)', lineHeight: 1.65, maxWidth: 560, margin: '0 0 28px', color: 'var(--masa-cream)' }}>
              We get it right and serve it at prices that make coming back easy. <b style={{ color: 'var(--corn-gold)' }}>Just ask anyone sitting in their usual spot.</b>
            </p>
            <CTATrio onNavigate={onNavigate} dark={true} />
          </div>
        </div>
      </section>

      <WaveDivider color="var(--cilantro-green)" />

      {/* ============== FOOD PREVIEWS ============== */}
      <section style={{ padding: 'clamp(48px, 10vw, 88px) clamp(16px, 4vw, 24px) 32px', maxWidth: 1200, margin: '0 auto' }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 28 }}>
            <div>
              <div style={{ fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--terracotta)', marginBottom: 8 }}>
                The short list
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(40px,5.5vw,76px)', lineHeight: 0.95, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--adobe-brown)', margin: 0 }}>
                What we&rsquo;re known for.
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.6, maxWidth: 560, color: 'var(--adobe-brown)', marginTop: 14 }}>
                Tacos, burritos, bowls, breakfast all day, and three salsas pressed every morning. <b>That&rsquo;s the short list.</b> Full menu has a lot more.
              </p>
            </div>
            <div style={{ fontFamily: 'var(--font-script)', fontSize: 38, color: 'var(--chile-pink)', transform: 'rotate(-3deg)', display: 'inline-block', alignSelf: 'flex-end' }}>
              come hungry.
            </div>
          </div>
        </Reveal>

        <div className="preview-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
          {previews.map((s, i) => (
            <Reveal key={s.id} delay={i * 90}>
              <article onClick={() => onAddSpecial({ id: s.id, name: s.name, price: parseFloat(s.price.replace('$','')) })} style={{
                background: i % 2 === 0 ? 'var(--masa-cream)' : 'var(--sand-light)',
                border: `3px solid ${i % 2 === 0 ? 'var(--salsa-orange)' : 'var(--teal-squeeze)'}`,
                borderRadius: 12, padding: 14,
                transform: `rotate(${s.rot}deg)`,
                cursor: 'pointer',
                boxShadow: '0 10px 22px -10px rgba(196,97,58,0.45)',
                position: 'relative',
                transition: 'transform 280ms var(--ease-warm), box-shadow 280ms',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = `rotate(${s.rot}deg) translateY(-8px)`; e.currentTarget.style.boxShadow = '0 18px 32px -10px rgba(196,97,58,0.6)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = `rotate(${s.rot}deg)`; e.currentTarget.style.boxShadow = '0 10px 22px -10px rgba(196,97,58,0.45)'; }}>
                {s.tag === 'fav' && <div style={{ position: 'absolute', top: -10, right: -10, zIndex: 2 }}><Pill tone="new">★ Fan fav</Pill></div>}
                <div style={{ height: 160, borderRadius: 8, overflow: 'hidden', border: '2px solid var(--adobe-brown)' }}>
                  <img src={FOOD_PHOTOS[s.img].src} alt={s.name} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-subhead)', fontSize: 22, margin: '14px 0 4px', color: 'var(--adobe-brown)' }}>{s.name}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--terracotta)', margin: '0 0 12px' }}>{s.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 26, color: 'var(--chile-pink)', letterSpacing: '0.04em' }}>{s.price}</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--terracotta)' }}>Add +</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 56, gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
            <Button variant="primary" onClick={() => onNavigate('menu')} style={{ fontSize: 16, padding: '18px 36px' }}>
              See the full menu →
            </Button>
            <span style={{ fontFamily: 'var(--font-script)', fontSize: 30, color: 'var(--cilantro-green)', transform: 'rotate(-2deg)' }}>
              there&rsquo;s more.
            </span>
          </div>
        </Reveal>
      </section>

      {/* ============== REVIEWS ============== */}
      <section style={{ background: 'var(--guac-dark)', color: 'var(--masa-cream)', padding: 'clamp(48px, 10vw, 96px) clamp(16px, 4vw, 24px)', position: 'relative', overflow: 'hidden', marginTop: 'clamp(32px, 6vw, 64px)' }}>
        <svg viewBox="0 0 800 400" style={{ position: 'absolute', top: -120, left: -100, width: 600, height: 300, opacity: 0.10, pointerEvents: 'none' }}>
          {Array.from({ length: 28 }).map((_, i) => {
            const angle = (i / 28) * Math.PI;
            const x2 = 400 + Math.cos(angle - Math.PI) * 320;
            const y2 = 380 + Math.sin(angle - Math.PI) * 320;
            return <line key={i} x1="400" y1="380" x2={x2} y2={y2} stroke="var(--corn-gold)" strokeWidth="3" strokeLinecap="round" />;
          })}
        </svg>

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          <Reveal>
            <div className="reviews-header" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'center', marginBottom: 'clamp(24px, 5vw, 48px)' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-script)', fontSize: 38, color: 'var(--corn-gold)', transform: 'rotate(-2deg)', display: 'inline-block' }}>
                  the regulars say it best.
                </div>
                <h2 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 900,
                  fontSize: 'clamp(40px, 5.6vw, 80px)', lineHeight: 0.92,
                  letterSpacing: '0.05em', textTransform: 'uppercase',
                  margin: '8px 0 0',
                }}>
                  <span style={{ color: 'var(--corn-gold)' }}>4.6 ★</span> <span style={{ color: 'var(--masa-cream)' }}>on Google.</span><br/>
                  <span style={{ color: 'var(--cilantro-green)' }}>241</span> <span style={{ color: 'var(--masa-cream)' }}>reviews.</span>
                </h2>
              </div>
              <div style={{
                background: 'var(--masa-cream)', color: 'var(--adobe-brown)',
                border: '3px solid var(--corn-gold)', borderRadius: 16,
                padding: '20px 24px',
                boxShadow: '6px 6px 0 0 var(--chile-pink)',
                transform: 'rotate(-1deg)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 10 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 56, lineHeight: 1, letterSpacing: '0.04em', color: 'var(--chile-pink)' }}>4.6</div>
                  <div>
                    <Stars value={4.6} size={20} color="var(--corn-gold)" />
                    <div style={{ fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--terracotta)', marginTop: 4 }}>
                      241 Google reviews
                    </div>
                  </div>
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.5, color: 'var(--adobe-brown)' }}>
                  Built one regular at a time since <b>2023.</b>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="reviews-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
            {reviews.map((r, i) => {
              const isPink = r.tone === 'pink';
              return (
                <Reveal key={i} delay={i * 120}>
                  <article style={{
                    background: isPink ? 'var(--chile-pink)' : 'var(--masa-cream)',
                    color: isPink ? 'var(--masa-cream)' : 'var(--adobe-brown)',
                    border: `3px solid ${isPink ? 'var(--corn-gold)' : 'var(--salsa-orange)'}`,
                    borderRadius: 14, padding: 24,
                    transform: `rotate(${[-1.5, 1, -0.5][i]}deg)`,
                    boxShadow: '0 10px 22px -10px rgba(0,0,0,0.5)',
                    height: '100%', boxSizing: 'border-box',
                  }}>
                    <Stars value={r.stars} size={18} color="var(--corn-gold)" />
                    <p style={{ fontSize: 15, lineHeight: 1.55, margin: '14px 0 18px', fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                      {r.text}
                    </p>
                    <div style={{ fontFamily: 'var(--font-subhead)', fontSize: 18, color: isPink ? 'var(--corn-gold)' : 'var(--chile-pink)' }}>{r.who}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: isPink ? 'rgba(255,245,230,0.75)' : 'var(--terracotta)', marginTop: 2 }}>{r.meta}</div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============== CATERING PITCH ============== */}
      <section style={{ background: 'var(--masa-cream)', padding: 'clamp(48px, 10vw, 96px) clamp(16px, 4vw, 24px)', position: 'relative', overflow: 'hidden' }}>
        <div className="catering-grid" style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 'clamp(28px, 5vw, 56px)', alignItems: 'center', position: 'relative' }}>
          <Reveal y={40}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, position: 'relative' }}>
              <div style={{ border: '4px solid var(--salsa-orange)', borderRadius: 12, overflow: 'hidden', transform: 'rotate(-3deg)', aspectRatio: '4/3' }}>
                <img src="assets/food-3.jpg" alt="catering quesabirria" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ border: '4px solid var(--teal-squeeze)', borderRadius: 12, overflow: 'hidden', transform: 'rotate(4deg)', aspectRatio: '4/3', marginTop: 24 }}>
                <img src="assets/food-5.jpg" alt="catering bowl" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <div style={{ fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--cilantro-green-dark)', marginBottom: 8 }}>
                Catering · 20 to 200
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(44px,6vw,86px)', lineHeight: 0.92, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--adobe-brown)', margin: '0 0 22px' }}>
                Bring the<br/>
                <span style={{ color: 'var(--chile-pink)' }}>plancha</span> to your
                <br/>backyard.
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--adobe-brown)', maxWidth: 560, margin: '0 0 12px' }}>
                Office lunch with a line you actually want. Wedding rehearsal that ends with everyone hugging the cooks. Block party where the neighbors knock for the recipe.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--adobe-brown)', maxWidth: 560, margin: '0 0 22px' }}>
                We pull up, set up the taco bar, and make tortillas in front of your guests.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 18px' }}>
                {['Three signature meats','Salsas pressed that morning','Fresh tortillas, on-site','Drinks + churros add-on'].map(li => (
                  <li key={li} style={{ fontSize: 14, color: 'var(--adobe-brown)', display: 'flex', alignItems: 'center', gap: 10, fontWeight: 600 }}>
                    <span style={{ width: 10, height: 10, borderRadius: 999, background: 'var(--cilantro-green)', flexShrink: 0 }} />
                    {li}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
                <Button variant="primary" onClick={() => onNavigate('catering')}>Get a quote →</Button>
                <Button variant="secondary" onClick={() => onNavigate('catering')}>See packages</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============== LOCATION STRIP ============== */}
      <section style={{ background: 'var(--chile-pink)', color: 'var(--masa-cream)', padding: 'clamp(40px, 8vw, 64px) clamp(16px, 4vw, 24px)', position: 'relative' }}>
        <div className="loc-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-script)', fontSize: 38, color: 'var(--corn-gold)', transform: 'rotate(-2deg)', display: 'inline-block' }}>your usual spot.</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(36px, 5vw, 68px)', lineHeight: 0.95, letterSpacing: '0.05em', textTransform: 'uppercase', margin: '8px 0 14px' }}>
              13302 SE 240th St ·<br/>
              <span style={{ color: 'var(--corn-gold)' }}>Kent, WA.</span>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, maxWidth: 540, margin: 0 }}>Open seven days. Walk-ins welcome. Order ahead and skip the lunch rush.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Button variant="orange" onClick={() => onNavigate('contact')}>Get directions</Button>
            <Button variant="dark" onClick={() => onNavigate('order')}>Order ahead →</Button>
          </div>
        </div>
      </section>
    </main>
  );
};

window.TLHome = Home;
