/* eslint-disable no-undef */
const MENU_ITEMS = [
  // TACOS
  { id: 'pastor',    cat: 'Tacos',     name: 'Al Pastor',         price: 4.50,  desc: 'Marinated pork off the trompo, pineapple, cilantro, onion.', tags: ['fav'],  img: 1 },
  { id: 'asada',     cat: 'Tacos',     name: 'Carne Asada',        price: 4.50,  desc: 'Charred skirt steak, salsa verde, white onion.',              tags: [],       img: 2 },
  { id: 'carnitas',  cat: 'Tacos',     name: 'Carnitas',           price: 4.25,  desc: 'Slow-cooked pork shoulder, crisped on the edges.',            tags: [],       img: 0 },
  { id: 'fish',      cat: 'Tacos',     name: 'Fish Tacos',         price: 11.00, desc: 'Crispy panko fish, slaw, salsa verde. Plate of three.',       tags: ['fav'],  img: 1 },
  { id: 'quesa',     cat: 'Tacos',     name: 'Quesabirria',        price: 14.25, desc: 'Birria + melted Oaxaca on a crisped tortilla. With consommé.',tags: ['fav','spicy'], img: 2 },
  { id: 'flautas',   cat: 'Tacos',     name: 'Flautas',            price: 11.00, desc: '3 deep-fried chicken tacos. Crema, lettuce, salsa, pickled onion, guac.', tags: [], img: 0 },

  // BREAKFAST
  { id: 'bf-taco',   cat: 'Breakfast', name: 'Breakfast Taco',     price: 5.00,  desc: 'Scrambled eggs, your protein, monterey, queso fresco, pickled onion, pico.', tags: [], img: 0 },
  { id: 'machaca',   cat: 'Breakfast', name: 'Machaca BF Burrito', price: 13.50, desc: 'Machaca, bell peppers, scrambled eggs, refried beans, monterey.', tags: [], img: 3 },
  { id: 'carn-bf',   cat: 'Breakfast', name: 'Carnitas BF Burrito',price: 13.00, desc: 'Carnitas, eggs, refried beans, monterey, jack, pico.',        tags: [],       img: 5 },
  { id: 'jumbo-bf',  cat: 'Breakfast', name: 'Jumbo BF Burrito',   price: 13.50, desc: 'Eggs, refried beans, hashbrowns, monterey, caramelized onion, two proteins.', tags: ['fav'], img: 3 },
  { id: 'classic-bf',cat: 'Breakfast', name: 'Classic BF Burrito', price: 12.50, desc: 'Eggs, refried beans, hashbrowns, bacon, cheese — wrapped in foil.', tags: [], img: 5 },
  { id: 'chila',     cat: 'Breakfast', name: 'Chilaquiles Plate',  price: 13.50, desc: 'Fried tortilla, green or red house sauce, cilantro, onion, crema, queso fresco, beans, eggs to order, half birote.', tags: ['fav'], img: 0 },
  { id: 'omelette',  cat: 'Breakfast', name: 'Mexican Omelette',   price: 13.50, desc: 'Choice of protein in eggs, pico, guac, cheese. With hashbrowns + refried beans.', tags: [], img: 4 },

  // BOWLS
  { id: 'fajita',    cat: 'Bowls',     name: 'Fajita Bowl',        price: 12.00, desc: 'Chicken, steak (+$1) or shrimp (+$2) over rice, beans, chunky salsa, lettuce, pico, guac, sour cream.', tags: ['fav'], img: 4 },
  { id: 'mexi',      cat: 'Bowls',     name: 'Mexi-Bowl',          price: 11.00, desc: 'Protein over lettuce, chunky salsa, rice, beans, pico, guac, sour cream. Chips around.', tags: [], img: 4 },
  { id: 'ceviche',   cat: 'Bowls',     name: 'Ceviche Bowl',       price: 12.50, desc: 'Raw prawns cured in lime, tomato, onion, cilantro, avocado, pickled onion.', tags: [], img: 4 },
  { id: 'aguachile', cat: 'Bowls',     name: 'Aguachile Bowl',     price: 12.50, desc: 'Raw shrimp cured in spicy lime/cilantro/jalapeño juice, cucumber, avocado, chips.', tags: ['spicy'], img: 4 },
  { id: 'birria-r',  cat: 'Bowls',     name: 'Birria Ramen Bowl',  price: 12.50, desc: 'Birria consommé and protein over ramen, cilantro, white + pickled onion.', tags: ['fav','spicy'], img: 2 },
  { id: 'salad',     cat: 'Bowls',     name: 'Mexi Salad',         price: 13.00, desc: 'Asada or pollo over romaine, black beans, crispy tortilla strips, tomato, avocado, queso fresco. Cesar or ranch.', tags: ['veg'], img: 4 },

  // BITES
  { id: 'nachos',    cat: 'Bites',     name: 'Nachos',             price: 13.50, desc: 'Protein, refried + whole beans over tortilla chips, cheese blend, pico, pickled onion, guac, sour cream.', tags: [], img: 5 },
  { id: 'fries',     cat: 'Bites',     name: 'Loaded Fries',       price: 13.00, desc: 'Fries, your protein, cheddar, guac, sour cream, pico, pickled onion.', tags: ['fav'], img: 5 },
  { id: 'wings',     cat: 'Bites',     name: 'Diablito Wings',     price: 13.00, desc: 'Bone-in breaded wings in our spicy house sauce. (8)', tags: ['spicy'], img: 5 },
  { id: 'quesadilla',cat: 'Bites',     name: 'Quesadilla',         price: 11.00, desc: 'Flour tortilla and jack cheese over your protein, sour cream, guac, pico, lettuce. +$5 to add rice & beans.', tags: [], img: 0 },
  { id: 'sope',      cat: 'Bites',     name: 'Sope',               price: 4.75,  desc: 'Corn masa base, refried beans, protein, lettuce, salsa, pico, crema, queso fresco, pickled onion.', tags: [], img: 1 },
  { id: 'kids',      cat: 'Bites',     name: 'Kids Plate',         price: 9.00,  desc: 'Kids enchilada, burrito, plain street taco, or cheese quesadilla. Side of fries or rice & beans.', tags: [], img: 5 },
  { id: 'poppers',   cat: 'Bites',     name: 'Jalapeño Poppers',   price: 10.00, desc: 'Cream-cheese-filled panko-breaded jalapeños. (6)', tags: ['spicy','veg'], img: 5 },
];

const Menu = ({ cart, onAdd, onNavigate }) => {
  const { Button, Pill, PHONE, FOOD_PHOTOS, Reveal } = window.TLC;
  const [cat, setCat] = React.useState('All');
  const cats = ['All', 'Tacos', 'Breakfast', 'Bowls', 'Bites'];
  const items = cat === 'All' ? MENU_ITEMS : MENU_ITEMS.filter(i => i.cat === cat);
  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);

  return (
    <main>
      <section style={{ background: 'var(--masa-cream)', padding: 'clamp(40px, 8vw, 64px) clamp(16px, 4vw, 24px) 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ fontFamily: 'var(--font-script)', fontSize: 36, color: 'var(--chile-pink)', transform: 'rotate(-2deg)', display: 'inline-block' }}>
            come hungry.
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(48px,7vw,96px)', lineHeight: 0.9, letterSpacing: '0.06em', textTransform: 'uppercase', margin: '4px 0 12px', color: 'var(--adobe-brown)' }}>
            The <span style={{ color: 'var(--chile-pink)' }}>menu.</span>
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.6, maxWidth: 620, color: 'var(--adobe-brown)', margin: '0 0 22px' }}>
            <b>Breakfast all day.</b> Tap any item to add it to your order. Same prices in-store, online, and over the phone.
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {cats.map(c => (
              <button key={c} onClick={() => setCat(c)} style={{
                fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase',
                padding: '12px 20px', borderRadius: 999, minHeight: 44,
                border: '2px solid var(--adobe-brown)',
                background: cat === c ? 'var(--adobe-brown)' : 'transparent',
                color: cat === c ? 'var(--masa-cream)' : 'var(--adobe-brown)',
                cursor: 'pointer',
                transition: 'all 150ms var(--ease-warm)',
              }}>{c}</button>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '24px clamp(16px, 4vw, 24px) clamp(48px, 10vw, 88px)' }}>
        <div className="menu-layout" style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 320px', gap: 32, alignItems: 'flex-start' }}>
          <div className="menu-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
            {items.map((it, i) => (
              <Reveal key={it.id} delay={(i % 6) * 60}>
                <article style={{
                  background: i % 3 === 1 ? 'var(--sand-light)' : 'var(--masa-cream)',
                  border: `3px solid ${i % 3 === 2 ? 'var(--teal-squeeze)' : 'var(--salsa-orange)'}`,
                  borderRadius: 12, padding: 16,
                  position: 'relative',
                  boxShadow: '0 6px 18px -8px rgba(196,97,58,0.4)',
                  height: '100%', boxSizing: 'border-box',
                  transition: 'transform 220ms var(--ease-warm)',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px) rotate(-0.5deg)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
                  <div style={{ height: 140, borderRadius: 8, overflow: 'hidden', border: '2px solid var(--adobe-brown)' }}>
                    <img src={FOOD_PHOTOS[it.img].src} alt={it.name} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <div style={{ display: 'flex', gap: 6, marginTop: 10, flexWrap: 'wrap' }}>
                    {it.tags.includes('fav')   && <Pill tone="new">★ Fan fav</Pill>}
                    {it.tags.includes('veg')   && <Pill tone="veg">Veggie</Pill>}
                    {it.tags.includes('spicy') && <Pill tone="spicy">🌶 Spicy</Pill>}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-subhead)', fontSize: 22, margin: '8px 0 4px', color: 'var(--adobe-brown)', lineHeight: 1.1 }}>{it.name}</h3>
                  <p style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--terracotta)', margin: '0 0 14px' }}>{it.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 26, letterSpacing: '0.04em', color: 'var(--chile-pink)' }}>${it.price.toFixed(2)}</span>
                    <Button variant="primary" onClick={() => onAdd(it)} style={{ padding: '10px 16px', minHeight: 44, fontSize: 12 }}>Add +</Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <aside className="menu-cart" style={{
            background: 'var(--guac-dark)', color: 'var(--masa-cream)',
            border: '3px solid var(--corn-gold)',
            borderRadius: 14, padding: 22,
            position: 'sticky', top: 96,
          }}>
            <div style={{ fontFamily: 'var(--font-subhead)', fontSize: 22, color: 'var(--corn-gold)', marginBottom: 4 }}>Your order</div>
            <div style={{ fontFamily: 'var(--font-script)', fontSize: 22, color: 'var(--masa-cream)', transform: 'rotate(-1deg)', display: 'inline-block', marginBottom: 14 }}>
              keep the chips
            </div>
            {cart.length === 0 && <p style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--sand-light)', margin: 0 }}>Empty for now. Add a taco — they go fast.</p>}
            {cart.map(c => (
              <div key={c.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px dashed rgba(255,245,230,0.2)', fontSize: 14, gap: 10 }}>
                <span><b style={{ fontWeight: 800 }}>{c.qty}×</b> {c.name}</span>
                <span style={{ color: 'var(--corn-gold)', fontWeight: 700, whiteSpace: 'nowrap' }}>${(c.price * c.qty).toFixed(2)}</span>
              </div>
            ))}
            {cart.length > 0 && (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 14, fontFamily: 'var(--font-display)', fontSize: 22, letterSpacing: '0.04em' }}>
                  <span>TOTAL</span>
                  <span style={{ color: 'var(--corn-gold)' }}>${total.toFixed(2)}</span>
                </div>
                <div style={{ marginTop: 16 }}>
                  <Button variant="primary" onClick={() => onNavigate('order')} style={{ width: '100%', justifyContent: 'center' }}>Check out →</Button>
                </div>
              </>
            )}
            <div style={{ marginTop: 20, paddingTop: 14, borderTop: '1px dashed rgba(255,245,230,0.2)', fontSize: 13, color: 'var(--sand-light)' }}>
              Or call:<br/>
              <a href={`tel:${PHONE.replace(/[^0-9+]/g,'')}`} style={{ color: 'var(--corn-gold)', fontWeight: 800, textDecoration: 'none', fontSize: 16 }}>{PHONE}</a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

window.TLMenu = Menu;
window.TL_MENU_ITEMS = MENU_ITEMS;
