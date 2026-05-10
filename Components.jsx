/* eslint-disable no-undef */
/* TacosLand shared UI — atomic components for the website. */

const PHONE = '(206) 247-5781';
const EMAIL = 'info@TacosLandKent.com';
const ADDRESS_1 = '13302 SE 240th St';
const ADDRESS_2 = 'Kent, WA 98031';
const FOOD_PHOTOS = [
  { src: 'assets/food-1.jpg', alt: 'Enchiladas plate with rice, beans and pico' },
  { src: 'assets/food-2.jpg', alt: 'Crispy fish tacos with rice and refried beans' },
  { src: 'assets/food-3.jpg', alt: 'Quesabirria tacos plate' },
  { src: 'assets/food-4.jpg', alt: 'Wet burrito with crema and onions' },
  { src: 'assets/food-5.jpg', alt: 'Fajita bowl with steak and chips' },
  { src: 'assets/food-6.jpg', alt: 'Wet burrito with guacamole on the side' },
];

/* ==========  REVEAL — fade-up on scroll ========== */
const Reveal = ({ children, delay = 0, y = 28, as = 'div', style = {}, ...rest }) => {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((es) => {
      es.forEach(e => { if (e.isIntersecting) { setShown(true); io.disconnect(); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const Tag = as;
  return (
    <Tag ref={ref} style={{
      transform: shown ? 'translateY(0)' : `translateY(${y}px)`,
      opacity: shown ? 1 : 0,
      transition: `transform 720ms var(--ease-warm) ${delay}ms, opacity 720ms var(--ease-warm) ${delay}ms`,
      willChange: 'transform, opacity',
      ...style,
    }} {...rest}>{children}</Tag>
  );
};

const SCHEDULE = [
  { day: 'Monday',    hrs: '10 AM – 8 PM' },
  { day: 'Tuesday',   hrs: '10 AM – 9 PM' },
  { day: 'Wednesday', hrs: '10 AM – 9 PM' },
  { day: 'Thursday',  hrs: '10 AM – 9 PM' },
  { day: 'Friday',    hrs: '10 AM – 9:30 PM' },
  { day: 'Saturday',  hrs: '9 AM – 9:30 PM' },
  { day: 'Sunday',    hrs: '9 AM – 9 PM' },
];

const SOCIALS = [
  { id: 'ig', label: 'Instagram', href: 'http://instagram.com/tacosland.kent' },
  { id: 'fb', label: 'Facebook',  href: 'http://facebook.com/profile.php?id=100086651417026' },
  { id: 'yp', label: 'Yelp',      href: 'https://www.yelp.com/biz/tacosland-kent-2' },
];

const Button = ({ variant = 'primary', children, onClick, style, ...rest }) => {
  const base = {
    fontFamily: 'var(--font-body)',
    fontWeight: 800,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    fontSize: 14,
    padding: '14px 28px',
    borderRadius: 6,
    border: 'none',
    cursor: 'pointer',
    minHeight: 48,
    transition: 'transform 150ms var(--ease-warm), background 150ms, color 150ms',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    textDecoration: 'none',
  };
  const variants = {
    primary:   { background: 'var(--chile-pink)',     color: 'var(--masa-cream)' },
    secondary: { background: 'var(--masa-cream)',     color: 'var(--chile-pink)', border: '2px solid var(--chile-pink)' },
    orange:    { background: 'var(--salsa-orange)',   color: 'var(--masa-cream)' },
    ghost:     { background: 'transparent',           color: 'var(--adobe-brown)', padding: '14px 8px', minHeight: 0 },
    dark:      { background: 'var(--guac-dark)',      color: 'var(--masa-cream)' },
    green:     { background: 'var(--cilantro-green)', color: 'var(--masa-cream)' },
  };
  return (
    <button
      onClick={onClick}
      onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.98)'; }}
      onMouseUp={e => { e.currentTarget.style.transform = 'scale(1.03)'; }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.03)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1.0)'; }}
      style={{ ...base, ...variants[variant], ...style }}
      {...rest}
    >{children}</button>
  );
};

const Stamp = ({ color = 'pink', rotate = -6, children, size = 110 }) => {
  const colors = {
    pink:  { bg: 'var(--chile-pink)',     fg: 'var(--masa-cream)' },
    green: { bg: 'var(--cilantro-green)', fg: 'var(--masa-cream)' },
    gold:  { bg: 'var(--corn-gold)',      fg: 'var(--adobe-brown)' },
  };
  const c = colors[color];
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: c.bg, color: c.fg,
      display: 'grid', placeItems: 'center', textAlign: 'center',
      fontFamily: 'var(--font-subhead)', fontSize: size * 0.16, lineHeight: 1.05,
      boxShadow: '4px 4px 0 0 var(--adobe-brown)',
      transform: `rotate(${rotate}deg)`,
      padding: 8,
    }}>{children}</div>
  );
};

const Pill = ({ tone = 'spicy', children }) => {
  const tones = {
    spicy: { bg: 'var(--chile-pink)',     fg: 'var(--masa-cream)' },
    veg:   { bg: 'var(--cilantro-green)', fg: 'var(--masa-cream)' },
    new:   { bg: 'var(--corn-gold)',      fg: 'var(--adobe-brown)' },
    cool:  { bg: 'var(--teal-squeeze)',   fg: 'var(--masa-cream)' },
  };
  const t = tones[tone];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '4px 12px', borderRadius: 999,
      fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: 11,
      letterSpacing: '0.06em', textTransform: 'uppercase',
      background: t.bg, color: t.fg,
    }}>{children}</span>
  );
};

/* ==========  NAV ========== */
const Nav = ({ active, onNavigate, cartCount = 0 }) => {
  const links = [
    { id: 'home',     label: 'Home' },
    { id: 'menu',     label: 'Menu' },
    { id: 'catering', label: 'Catering' },
    { id: 'story',    label: 'Our story' },
    { id: 'contact',  label: 'Contact' },
  ];
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleNav = (id) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <nav style={{
      background: 'var(--guac-dark)', color: 'var(--masa-cream)',
      padding: '14px 28px',
      display: 'flex', alignItems: 'center', gap: 18,
      position: 'sticky', top: 0, zIndex: 50,
      boxShadow: '0 4px 18px -8px rgba(0,0,0,0.4)',
      flexWrap: 'wrap',
    }}>
      <div onClick={() => handleNav('home')}
           style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}>
        <div style={{ width: 52, height: 52, display: 'grid', placeItems: 'center' }}>
          <img src="assets/logo.png" alt="TacosLand" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, letterSpacing: '0.06em', lineHeight: 1 }}>
          <span style={{ color: 'var(--cilantro-green)' }}>TACOS</span>
          <span style={{ color: 'var(--chile-pink)' }}>LAND</span>
        </div>
      </div>

      <div className="nav-links" style={{ display: 'flex', gap: 22, marginLeft: 14, flex: 1 }}>
        {links.map(l => (
          <a key={l.id} onClick={() => handleNav(l.id)} style={{
            color: active === l.id ? 'var(--corn-gold)' : 'var(--masa-cream)',
            textDecoration: 'none',
            fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13,
            letterSpacing: '0.06em', textTransform: 'uppercase',
            cursor: 'pointer', paddingBottom: 4,
            borderBottom: active === l.id ? '3px solid var(--corn-gold)' : '3px solid transparent',
          }}>{l.label}</a>
        ))}
      </div>

      <a href={`tel:${PHONE.replace(/[^0-9+]/g, '')}`} className="nav-phone" style={{
        color: 'var(--corn-gold)', fontFamily: 'var(--font-body)', fontWeight: 800,
        fontSize: 13, letterSpacing: '0.04em', textDecoration: 'none',
        display: 'inline-flex', alignItems: 'center', gap: 6,
      }}>
        <PhoneIcon size={14} />{PHONE}
      </a>
      <Button variant="green" onClick={() => handleNav('catering')} className="nav-cater" style={{ padding: '12px 18px', fontSize: 12 }}>
        Catering →
      </Button>
      <Button variant="primary" onClick={() => handleNav('order')} className="nav-cart-btn" style={{ padding: '12px 22px', fontSize: 13 }}>
        {cartCount > 0 ? `Cart · ${cartCount}` : 'Order online'}
      </Button>

      {/* Hamburger button — visible only on mobile via CSS */}
      <button className="nav-hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu" style={{
        display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8,
        flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 5,
      }}>
        <span style={{ display: 'block', width: 24, height: 3, borderRadius: 2, background: 'var(--masa-cream)', transition: 'transform 300ms, opacity 200ms', transform: mobileOpen ? 'translateY(8px) rotate(45deg)' : 'none' }} />
        <span style={{ display: 'block', width: 24, height: 3, borderRadius: 2, background: 'var(--masa-cream)', transition: 'opacity 200ms', opacity: mobileOpen ? 0 : 1 }} />
        <span style={{ display: 'block', width: 24, height: 3, borderRadius: 2, background: 'var(--masa-cream)', transition: 'transform 300ms, opacity 200ms', transform: mobileOpen ? 'translateY(-8px) rotate(-45deg)' : 'none' }} />
      </button>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="nav-mobile-menu" style={{
          flexBasis: '100%', display: 'flex', flexDirection: 'column', gap: 4,
          padding: '14px 0 10px', borderTop: '1px solid rgba(255,255,255,0.12)', marginTop: 8,
        }}>
          {links.map(l => (
            <a key={l.id} onClick={() => handleNav(l.id)} style={{
              color: active === l.id ? 'var(--corn-gold)' : 'var(--masa-cream)',
              textDecoration: 'none',
              fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 15,
              letterSpacing: '0.06em', textTransform: 'uppercase',
              cursor: 'pointer', padding: '14px 14px',
              borderLeft: active === l.id ? '3px solid var(--corn-gold)' : '3px solid transparent',
              minHeight: 44, display: 'flex', alignItems: 'center',
            }}>{l.label}</a>
          ))}
          <a href={`tel:${PHONE.replace(/[^0-9+]/g, '')}`} style={{
            color: 'var(--corn-gold)', fontFamily: 'var(--font-body)', fontWeight: 800,
            fontSize: 14, letterSpacing: '0.04em', textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: 6, padding: '14px 14px',
            minHeight: 44,
          }}>
            <PhoneIcon size={14} />{PHONE}
          </a>
        </div>
      )}
    </nav>
  );
};

/* ==========  CTA TRIO  ========== */
const CTATrio = ({ onNavigate, dark = false, align = 'flex-start' }) => {
  const tel = `tel:${PHONE.replace(/[^0-9+]/g, '')}`;
  const stackAlign = align === 'center' ? 'center' : 'flex-start';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: stackAlign }}>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: align }}>
        <Button variant="primary" onClick={() => onNavigate('order')}>Order online →</Button>
        <Button variant={dark ? 'secondary' : 'orange'} onClick={() => onNavigate('menu')}>See the menu</Button>
      </div>
      <a href={tel} style={{ textDecoration: 'none' }}
         onMouseEnter={e => { e.currentTarget.firstChild.style.transform = 'scale(1.03)'; }}
         onMouseLeave={e => { e.currentTarget.firstChild.style.transform = 'scale(1.0)'; }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: 14,
          letterSpacing: '0.06em', textTransform: 'uppercase',
          padding: '14px 28px', borderRadius: 6, minHeight: 48,
          background: 'var(--cilantro-green)', color: 'var(--masa-cream)',
          boxShadow: '0 4px 0 0 var(--cilantro-green-dark)',
          transition: 'transform 150ms var(--ease-warm)',
        }}>
          <PhoneIcon size={18} />
          Call to order · {PHONE}
        </span>
      </a>
    </div>
  );
};

/* ==========  WAVE DIVIDER  ========== */
const WaveDivider = ({ color = 'var(--teal-squeeze)', flip = false }) => (
  <svg viewBox="0 0 1200 24" preserveAspectRatio="none" style={{ width: '100%', height: 22, display: 'block', transform: flip ? 'scaleY(-1)' : 'none' }}>
    <path d="M0,12 Q60,0 120,12 T240,12 T360,12 T480,12 T600,12 T720,12 T840,12 T960,12 T1080,12 T1200,12"
      stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" />
  </svg>
);

/* ==========  ICONS  ========== */
const PhoneIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const InstagramIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true">
    <path d="M22 12a10 10 0 1 0-11.55 9.88v-6.99H7.9V12h2.55V9.79c0-2.52 1.5-3.92 3.8-3.92 1.1 0 2.25.2 2.25.2v2.47h-1.27c-1.25 0-1.64.78-1.64 1.57V12h2.79l-.45 2.9h-2.34v6.98A10 10 0 0 0 22 12z"/>
  </svg>
);

const YelpIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true">
    <path d="M13.4 2.06c.6-.13 1.13.18 1.36.74.38 1.04 1.27 5.42 1.27 5.94 0 .51-.27.84-.74.99-.46.14-3.95.79-4.66.79-.62 0-1.05-.49-1.05-1.16 0-.32.13-.62.33-.86.6-.74 3.36-5.36 3.49-6.44zm-3.8 17.06c-.16.52-.66.83-1.21.7-.6-.13-3.51-1.79-3.92-2.13-.36-.31-.43-.79-.16-1.23.27-.45 2.36-2.94 2.7-3.18.39-.27.92-.18 1.27.27.21.27 1.55 4.97 1.32 5.57zm-1.86-7.1c-.08.55-.49.93-1.05.92-.62-.01-3.71-.97-4.18-1.21-.4-.21-.55-.66-.39-1.13.16-.47 1.7-3.59 2-3.99.34-.45.84-.5 1.27-.13.27.23 2.42 4.83 2.35 5.54zm6.82.96c-.39.39-.39.99-.05 1.4.34.41 3.04 2.97 3.49 3.21.43.23.92.04 1.18-.36.27-.39 1.18-3.51 1.27-4.04.09-.55-.27-1.01-.83-1.04-.32-.02-4.66.41-5.06.83zm-.64-1.92c.36.43.96.46 1.39.13.43-.34 3.18-2.94 3.45-3.39.27-.45.16-.94-.27-1.27-.39-.31-3.29-1.61-3.85-1.79-.5-.16-.97.16-1.05.71-.05.31-.04 5.16.33 5.61z"/>
  </svg>
);

const SOCIAL_ICON = { ig: InstagramIcon, fb: FacebookIcon, yp: YelpIcon };

/* ==========  FOOTER  ========== */
const Footer = ({ onNavigate }) => (
  <footer style={{ background: 'var(--guac-dark)', color: 'var(--sand-light)', padding: 'clamp(32px, 8vw, 64px) clamp(16px, 4vw, 32px) 32px', marginTop: 0, position: 'relative' }}>
    {/* decorative rays */}
    <svg viewBox="0 0 600 200" style={{ position: 'absolute', top: -1, left: '50%', transform: 'translateX(-50%)', width: 600, height: 60, opacity: 0.15, pointerEvents: 'none' }}>
      {Array.from({ length: 18 }).map((_, i) => {
        const angle = (i / 17) * Math.PI;
        const x2 = 300 + Math.cos(angle - Math.PI) * 320;
        const y2 = 200 + Math.sin(angle - Math.PI) * 320;
        return <line key={i} x1="300" y1="200" x2={x2} y2={y2} stroke="var(--corn-gold)" strokeWidth="2" strokeLinecap="round" />;
      })}
    </svg>

    <div className="footer-grid" style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.4fr 1.4fr 1fr 1fr', gap: 36, position: 'relative' }}>
      {/* Brand */}
      <div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 48, lineHeight: 1, letterSpacing: '0.06em' }}>
          <span style={{ color: 'var(--cilantro-green)' }}>TACOS</span>
          <span style={{ color: 'var(--chile-pink)' }}>LAND</span>
        </div>
        <div style={{ fontFamily: 'var(--font-script)', color: 'var(--corn-gold)', fontSize: 30, lineHeight: 1, marginTop: 8, transform: 'rotate(-2deg)', display: 'inline-block' }}>
          your usual spot.
        </div>
        <p style={{ marginTop: 14, fontSize: 14, lineHeight: 1.6, maxWidth: 280, color: 'var(--sand-light)' }}>
          {ADDRESS_1}<br/>{ADDRESS_2}
        </p>
        <a href={`tel:${PHONE.replace(/[^0-9+]/g,'')}`} style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          marginTop: 10, color: 'var(--corn-gold)', fontFamily: 'var(--font-body)',
          fontWeight: 800, fontSize: 16, letterSpacing: '0.04em', textDecoration: 'none',
        }}>
          <PhoneIcon size={16} />{PHONE}
        </a>
        <a href={`mailto:${EMAIL}`} style={{
          display: 'block', marginTop: 6, color: 'var(--sand-light)', fontSize: 13,
          textDecoration: 'none',
        }}>{EMAIL}</a>

        {/* Socials */}
        <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
          {SOCIALS.map(s => {
            const Icon = SOCIAL_ICON[s.id];
            return (
              <a key={s.id} href={s.href} target="_blank" rel="noopener noreferrer"
                 aria-label={s.label}
                 style={{
                   width: 40, height: 40, borderRadius: 999,
                   background: 'var(--chile-pink)', color: 'var(--masa-cream)',
                   display: 'grid', placeItems: 'center', textDecoration: 'none',
                   transition: 'transform 150ms var(--ease-warm), background 150ms',
                 }}
                 onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1) rotate(-4deg)'; e.currentTarget.style.background = 'var(--chile-pink-dark)'; }}
                 onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.background = 'var(--chile-pink)'; }}>
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </div>

      {/* Hours */}
      <div>
        <h4 style={{ fontFamily: 'var(--font-subhead)', color: 'var(--corn-gold)', fontSize: 20, margin: '0 0 14px' }}>Open this week</h4>
        <div style={{ display: 'grid', rowGap: 4, fontSize: 13, color: 'var(--sand-light)' }}>
          {SCHEDULE.map(s => (
            <div key={s.day} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 12, alignItems: 'baseline' }}>
              <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: 11 }}>{s.day.slice(0,3)}</span>
              <span style={{ color: 'var(--corn-gold)', fontFamily: 'var(--font-body)', fontWeight: 700, whiteSpace: 'nowrap' }}>{s.hrs}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Site links */}
      <div>
        <h4 style={{ fontFamily: 'var(--font-subhead)', color: 'var(--corn-gold)', fontSize: 20, margin: '0 0 14px' }}>The site</h4>
        {[['home','Home'],['menu','Menu'],['catering','Catering'],['story','Our story'],['contact','Contact'],['order','Order online']].map(([id, l]) => (
          <a key={id} onClick={() => onNavigate(id)} style={{ display: 'block', color: 'var(--sand-light)', textDecoration: 'none', fontSize: 14, padding: '5px 0', cursor: 'pointer' }}>{l}</a>
        ))}
      </div>

      {/* Hello */}
      <div>
        <h4 style={{ fontFamily: 'var(--font-subhead)', color: 'var(--corn-gold)', fontSize: 20, margin: '0 0 14px' }}>Say hi</h4>
        <p style={{ fontSize: 14, lineHeight: 1.7, margin: 0, color: 'var(--sand-light)' }}>
          Tag us <b style={{ color: 'var(--masa-cream)' }}>@tacosland.kent</b><br/>
          See you Saturday.<br/>
          <span style={{ color: 'var(--corn-gold)' }}>We love you back.</span>
        </p>
      </div>
    </div>

    <div style={{
      maxWidth: 1200, margin: '40px auto 0', paddingTop: 18,
      borderTop: '1px dashed rgba(245,200,66,0.3)',
      display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
      fontSize: 12, color: 'var(--sand-light)', opacity: 0.75,
    }}>
      <span>© TacosLand · Family-run · Kent, WA</span>
      <span>This website is designed and maintained by Denmark Melchor.</span>
    </div>
  </footer>
);

/* ==========  PAPER GRAIN  ========== */
const PaperGrain = () => (
  <div aria-hidden="true" style={{
    position: 'fixed', inset: 0, pointerEvents: 'none',
    backgroundImage: 'radial-gradient(rgba(196,97,58,0.08) 1px, transparent 1px), radial-gradient(rgba(59,35,20,0.05) 1px, transparent 1px)',
    backgroundSize: '6px 6px, 13px 13px',
    backgroundPosition: '0 0, 3px 7px',
    opacity: 0.6, zIndex: 1,
  }} />
);

/* ==========  FOOD PLACEHOLDER  ========== */
const FoodPlaceholder = ({ palette = 0, label = '', height = 200, rotate = 0, style = {} }) => {
  const palettes = [
    'radial-gradient(circle at 30% 35%, #F5C842 0%, transparent 40%), radial-gradient(circle at 70% 65%, var(--chile-pink) 0%, transparent 40%), linear-gradient(135deg, var(--salsa-orange), var(--terracotta))',
    'radial-gradient(circle at 65% 40%, var(--corn-gold) 0%, transparent 35%), linear-gradient(135deg, var(--cilantro-green), var(--guac-dark))',
    'radial-gradient(circle at 25% 25%, var(--corn-gold) 0%, transparent 30%), radial-gradient(circle at 75% 75%, var(--salsa-orange) 0%, transparent 35%), linear-gradient(135deg, var(--terracotta), #8B3A1E)',
    'radial-gradient(circle at 50% 50%, #FFE9B5 0%, transparent 40%), linear-gradient(135deg, var(--corn-gold), var(--salsa-orange))',
  ];
  return (
    <div style={{
      height,
      background: palettes[palette % palettes.length],
      border: '3px solid var(--adobe-brown)',
      borderRadius: 10,
      transform: `rotate(${rotate}deg)`,
      position: 'relative',
      overflow: 'hidden',
      ...style,
    }}>
      <span style={{
        position: 'absolute', bottom: 8, left: 10,
        fontFamily: 'var(--font-script)', color: 'rgba(255,245,230,0.85)',
        fontSize: 18, lineHeight: 1, transform: 'rotate(-2deg)',
      }}>{label}</span>
    </div>
  );
};

/* ==========  STAR RATING  ========== */
const Stars = ({ value = 5, size = 18, color = 'var(--corn-gold)' }) => {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  return (
    <span style={{ display: 'inline-flex', gap: 2, alignItems: 'center', color }}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < full ? 1 : (i === full && half ? 0.5 : 0);
        return (
          <svg key={i} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
            <defs>
              <linearGradient id={`star-${i}-${size}`}>
                <stop offset={`${filled * 100}%`} stopColor={color} />
                <stop offset={`${filled * 100}%`} stopColor="rgba(59,35,20,0.18)" />
              </linearGradient>
            </defs>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              fill={`url(#star-${i}-${size})`} stroke="var(--adobe-brown)" strokeWidth="0.8" strokeLinejoin="round" />
          </svg>
        );
      })}
    </span>
  );
};

window.TLC = {
  Button, Stamp, Pill, Nav, Footer, WaveDivider, PaperGrain, FoodPlaceholder,
  CTATrio, Stars, PhoneIcon, InstagramIcon, FacebookIcon, YelpIcon,
  PHONE, EMAIL, ADDRESS_1, ADDRESS_2, SCHEDULE, SOCIALS, FOOD_PHOTOS, Reveal,
};
