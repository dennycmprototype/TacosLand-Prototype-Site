/* eslint-disable no-undef */
const Order = ({ cart, onNavigate, onPlace }) => {
  const { Button } = window.TLC;
  const [placed, setPlaced] = React.useState(false);
  const [name, setName] = React.useState('Maria L.');
  const [phone, setPhone] = React.useState('(512) 555-0117');
  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const tax = total * 0.0825;
  const grand = total + tax;

  if (placed) {
    return (
      <main style={{ padding: 'clamp(48px, 8vw, 80px) clamp(16px, 4vw, 32px)', maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-script)', fontSize: 'clamp(36px, 6vw, 48px)', color: 'var(--chile-pink)', transform: 'rotate(-3deg)', display: 'inline-block' }}>order up!</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(48px, 10vw, 80px)', lineHeight: 0.9, letterSpacing: '0.06em', textTransform: 'uppercase', margin: '8px 0 16px', color: 'var(--adobe-brown)' }}>
          Ready in <span style={{ color: 'var(--cilantro-green)' }}>15.</span>
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--adobe-brown)', maxWidth: 480, margin: '0 auto 28px' }}>
          We&rsquo;ll text you, {name.split(' ')[0]}. Walk to the back counter when you arrive — say your name, grab your bag.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary" onClick={() => onNavigate('home')}>Back to home</Button>
          <Button variant="secondary" onClick={() => onNavigate('contact')}>How to find us</Button>
        </div>
      </main>
    );
  }

  return (
    <main style={{ padding: 'clamp(32px, 6vw, 56px) clamp(16px, 4vw, 32px) clamp(48px, 8vw, 80px)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(48px, 10vw, 80px)', lineHeight: 0.9, letterSpacing: '0.06em', textTransform: 'uppercase', margin: '0 0 28px', color: 'var(--adobe-brown)' }}>
          Check<span style={{ color: 'var(--chile-pink)' }}>out.</span>
        </h1>
        <div className="checkout-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 'clamp(18px, 3vw, 32px)' }}>
          <section style={{ background: 'var(--masa-cream)', border: '3px solid var(--salsa-orange)', borderRadius: 14, padding: 24 }}>
            <h3 style={{ fontFamily: 'var(--font-subhead)', fontSize: 22, margin: '0 0 16px' }}>Pickup details</h3>
            <Field label="Your name" value={name} onChange={setName} />
            <Field label="Phone (we'll text you)" value={phone} onChange={setPhone} />
            <div style={{ marginBottom: 14 }}>
              <div style={{ fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: 12, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--adobe-brown)', marginBottom: 6 }}>Pickup time</div>
              <select style={inputStyle}><option>In 15 min — soonest</option><option>In 30 min</option><option>In 45 min</option></select>
            </div>
            <label style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 14, minHeight: 44, cursor: 'pointer' }}>
              <input type="checkbox" defaultChecked style={{ width: 24, height: 24, accentColor: 'var(--chile-pink)', flexShrink: 0 }} />
              Text me when it&rsquo;s ready
            </label>
          </section>

          <aside style={{ background: 'var(--sand-light)', border: '3px solid var(--teal-squeeze)', borderRadius: 14, padding: 24 }}>
            <h3 style={{ fontFamily: 'var(--font-subhead)', fontSize: 22, margin: '0 0 12px' }}>Your order</h3>
            {cart.length === 0 && <p style={{ fontSize: 14, color: 'var(--terracotta)' }}>Cart&rsquo;s empty. <a onClick={() => onNavigate('menu')} style={{ cursor: 'pointer', color: 'var(--chile-pink)' }}>Pick something →</a></p>}
            {cart.map(c => (
              <div key={c.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px dashed rgba(59,35,20,0.2)', fontSize: 14 }}>
                <span><b style={{ fontWeight: 800 }}>{c.qty}×</b> {c.name}</span>
                <span style={{ fontWeight: 700 }}>${(c.price * c.qty).toFixed(2)}</span>
              </div>
            ))}
            {cart.length > 0 && (
              <>
                <Row label="Subtotal" val={`$${total.toFixed(2)}`} />
                <Row label="Tax (8.25%)" val={`$${tax.toFixed(2)}`} />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12, fontFamily: 'var(--font-display)', fontSize: 26, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  <span>Total</span>
                  <span style={{ color: 'var(--chile-pink)' }}>${grand.toFixed(2)}</span>
                </div>
                <div style={{ marginTop: 18 }}>
                  <Button variant="primary" onClick={() => { onPlace(); setPlaced(true); }} style={{ width: '100%', justifyContent: 'center' }}>SEND IT →</Button>
                </div>
              </>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
};

const inputStyle = {
  fontFamily: 'var(--font-body)', fontSize: 16, padding: '14px 14px',
  background: 'var(--masa-cream)', color: 'var(--adobe-brown)',
  border: '2px solid var(--adobe-brown)', borderRadius: 6, outline: 'none', width: '100%',
  boxSizing: 'border-box', minHeight: 48,
};

const Field = ({ label, value, onChange }) => (
  <div style={{ marginBottom: 14 }}>
    <div style={{ fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: 12, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--adobe-brown)', marginBottom: 6 }}>{label}</div>
    <input style={inputStyle} value={value} onChange={e => onChange(e.target.value)} />
  </div>
);

const Row = ({ label, val }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, padding: '6px 0', color: 'var(--adobe-brown)' }}>
    <span>{label}</span><span>{val}</span>
  </div>
);

window.TLOrder = Order;
