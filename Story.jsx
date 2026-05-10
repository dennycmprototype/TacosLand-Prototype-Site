/* eslint-disable no-undef */
const Story = ({ onNavigate }) => {
  const { Button, CTATrio, Stamp, WaveDivider, FOOD_PHOTOS, Reveal } = window.TLC;
  return (
    <main>
      {/* HERO */}
      <section style={{ background: 'var(--masa-cream)', padding: 'clamp(40px, 8vw, 64px) clamp(16px, 4vw, 24px) 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <Reveal>
            <div style={{ fontFamily: 'var(--font-script)', fontSize: 36, color: 'var(--chile-pink)', transform: 'rotate(-2deg)', display: 'inline-block' }}>since 2023.</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(48px,8vw,112px)', lineHeight: 0.9, letterSpacing: '0.06em', textTransform: 'uppercase', margin: '4px 0 22px', color: 'var(--adobe-brown)' }}>
              Our <span style={{ color: 'var(--cilantro-green)' }}>story.</span>
            </h1>
            <p style={{ fontSize: 19, lineHeight: 1.65, maxWidth: 720, color: 'var(--adobe-brown)' }}>
              TacosLand is a family-run taqueria. The owner started it in <b>2023</b> with his son, with a simple idea: do a few things, do them right, and treat every guest like they&rsquo;ve been coming in for years.
            </p>
          </Reveal>
        </div>
      </section>

      {/* THE OWNER */}
      <section style={{ padding: '24px clamp(16px, 4vw, 24px) clamp(40px, 8vw, 64px)', maxWidth: 1100, margin: '0 auto' }}>
        <div className="story-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(24px, 5vw, 48px)', alignItems: 'center' }}>
          <Reveal y={40}>
            <div style={{ position: 'relative' }}>
              <div style={{ height: 'clamp(280px, 60vw, 420px)', border: '4px solid var(--salsa-orange)', borderRadius: 14, overflow: 'hidden', transform: 'rotate(-2deg)' }}>
                <img src={FOOD_PHOTOS[0].src} alt="TacosLand plate" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ position: 'absolute', bottom: -18, right: -18 }}>
                <Stamp color="gold" rotate={6} size={90}>FAMILY<br/>RUN</Stamp>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <div style={{ fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--terracotta)', marginBottom: 8 }}>
                Meet the owner
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(36px,5vw,60px)', lineHeight: 0.95, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--adobe-brown)', margin: '0 0 14px' }}>
                He&rsquo;s the<br/><span style={{ color: 'var(--chile-pink)' }}>one cooking.</span>
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--adobe-brown)' }}>
                The owner is regularly here. Behind the counter, on the plancha, walking out a plate. He started TacosLand with his son in 2023, and the two of them still run it together. Stop in often enough and you&rsquo;ll meet him.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--adobe-brown)' }}>
                He remembers his regulars — and what they usually order. That&rsquo;s not a gimmick; it&rsquo;s just how he runs the place.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--adobe-brown)' }}>
                Honest, hardworking, takes pride in every plate that goes out. The kind of owner who shakes your hand on the way out.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <WaveDivider color="var(--cilantro-green)" />

      {/* WHAT WE BELIEVE */}
      <section style={{ background: 'var(--guac-dark)', color: 'var(--masa-cream)', padding: 'clamp(48px, 10vw, 88px) clamp(16px, 4vw, 24px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <Reveal>
            <div style={{ fontFamily: 'var(--font-script)', fontSize: 32, color: 'var(--corn-gold)', transform: 'rotate(-2deg)', display: 'inline-block' }}>
              the house rules.
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(36px,5vw,60px)', lineHeight: 0.95, letterSpacing: '0.04em', textTransform: 'uppercase', margin: '4px 0 32px' }}>What we<br/>believe.</h2>
          </Reveal>
          <div className="believe-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
            {[
              { h: 'Fresh, every morning.', p: 'Salsa pressed at 7. Masa at 8. Carnitas in by 9. We don\u2019t cut corners on the things that matter.' },
              { h: 'Recipes from home.', p: 'Birria, salsa verde, horchata — the proportions live in our heads, not a binder.' },
              { h: 'Take care of the team.', p: 'Same crew, day in, day out. Treat the people who feed your neighbors well, and they\u2019ll treat your neighbors well.' },
            ].map((b, i) => (
              <Reveal key={i} delay={i * 120}>
                <div style={{ background: 'rgba(255,245,230,0.08)', border: '2px solid var(--corn-gold)', borderRadius: 12, padding: 24, height: '100%', boxSizing: 'border-box' }}>
                  <h3 style={{ fontFamily: 'var(--font-subhead)', fontSize: 22, color: 'var(--corn-gold)', margin: '0 0 10px' }}>{b.h}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--sand-light)', margin: 0 }}>{b.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* THE TEAM + REGULARS */}
      <section style={{ padding: 'clamp(48px, 10vw, 88px) clamp(16px, 4vw, 24px)', background: 'var(--masa-cream)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="story-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 'clamp(24px, 5vw, 48px)', alignItems: 'center' }}>
            <Reveal>
              <div>
                <div style={{ fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--cilantro-green-dark)', marginBottom: 8 }}>
                  the room
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(36px,5vw,60px)', lineHeight: 0.95, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--adobe-brown)', margin: '0 0 14px' }}>
                  A real <span style={{ color: 'var(--chile-pink)' }}>spot.</span>
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--adobe-brown)' }}>
                  There&rsquo;s something you notice when you sit down here. The team back there knows each other. They joke between tickets, cover for each other, hand off plates without looking up. It&rsquo;s a kitchen that runs on real camaraderie, not coffee and stress.
                </p>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--adobe-brown)' }}>
                  And the room out front fills with regulars who say hi to each other across booths. Construction crews on lunch. Parents with kids on Saturdays. The folks who&rsquo;ve been coming since week one.
                </p>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--adobe-brown)' }}>
                  It&rsquo;s a community. Pull up a stool.
                </p>
              </div>
            </Reveal>
            <Reveal y={40}>
              <div className="story-photos" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <div style={{ aspectRatio: '4/3', border: '3px solid var(--teal-squeeze)', borderRadius: 12, overflow: 'hidden', transform: 'rotate(-2deg)' }}>
                  <img src={FOOD_PHOTOS[2].src} alt="" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ aspectRatio: '4/3', border: '3px solid var(--salsa-orange)', borderRadius: 12, overflow: 'hidden', transform: 'rotate(2deg)', marginTop: 24 }}>
                  <img src={FOOD_PHOTOS[3].src} alt="" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ aspectRatio: '4/3', border: '3px solid var(--salsa-orange)', borderRadius: 12, overflow: 'hidden', transform: 'rotate(2deg)' }}>
                  <img src={FOOD_PHOTOS[4].src} alt="" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ aspectRatio: '4/3', border: '3px solid var(--corn-gold)', borderRadius: 12, overflow: 'hidden', transform: 'rotate(-2deg)', marginTop: 24 }}>
                  <img src={FOOD_PHOTOS[1].src} alt="" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ padding: 'clamp(48px, 8vw, 80px) clamp(16px, 4vw, 24px)', maxWidth: 1100, margin: '0 auto' }}>
        <Reveal>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(36px,5vw,60px)', lineHeight: 0.95, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--adobe-brown)', margin: '0 0 32px' }}>The short<br/>version.</h2>
        </Reveal>
        <div style={{ position: 'relative', paddingLeft: 'clamp(24px, 4vw, 32px)', borderLeft: '3px dashed var(--salsa-orange)' }}>
          {[
            { y: '2023', t: 'Doors open on SE 240th in Kent. Father and son, sleeves rolled up.' },
            { y: '2024', t: 'First catering gig — a 60-person backyard wedding. The compliments did not stop.' },
            { y: '2025', t: 'Crossed 200 five-star Google reviews. Same owner, same hours, same hands on the food.' },
            { y: 'Today', t: 'Pressing the masa fresh. Same crew. Same regulars. Same orange door.' },
          ].map((e, i) => (
            <Reveal key={i} delay={i * 90}>
              <div style={{ position: 'relative', marginBottom: 28, paddingLeft: 18 }}>
                <span style={{ position: 'absolute', left: -42, top: 4, width: 22, height: 22, borderRadius: 999, background: 'var(--chile-pink)', border: '3px solid var(--masa-cream)', boxShadow: '0 0 0 3px var(--salsa-orange)' }} />
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 28, color: 'var(--cilantro-green-dark)', letterSpacing: '0.04em', lineHeight: 1 }}>{e.y}</div>
                <div style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--adobe-brown)', marginTop: 4 }}>{e.t}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'clamp(40px, 8vw, 64px) clamp(16px, 4vw, 24px)', textAlign: 'center', background: 'var(--sand-light)' }}>
        <div style={{ fontFamily: 'var(--font-script)', fontSize: 32, color: 'var(--chile-pink)', transform: 'rotate(-2deg)', display: 'inline-block' }}>come hungry.</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(36px,5vw,60px)', lineHeight: 0.95, letterSpacing: '0.06em', textTransform: 'uppercase', margin: '4px 0 24px', color: 'var(--adobe-brown)' }}>Pull up a stool.</h2>
        <div style={{ display: 'inline-block' }}>
          <CTATrio onNavigate={onNavigate} align="center" />
        </div>
      </section>
    </main>
  );
};

window.TLStory = Story;
