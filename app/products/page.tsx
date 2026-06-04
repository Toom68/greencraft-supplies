import React from 'react';

const products = [
  {
    name: 'Biodegradable Glitter',
    price: '$12.00',
    img: 'https://source.unsplash.com/500x500/?biodegradable,glitter,eco-friendly,crafts',
    alt: 'Biodegradable Glitter',
    badge: 'Best Seller',
  },
  {
    name: 'Recycled Paper Sketchbooks',
    price: '$18.00',
    img: 'https://source.unsplash.com/500x500/?recycled,paper,sketchbook,eco-friendly',
    alt: 'Recycled Paper Sketchbooks',
    badge: '',
  },
  {
    name: 'Plant-Based Paint Sets',
    price: '$29.00',
    img: 'https://source.unsplash.com/500x500/?plant-based,paint,eco-friendly,art',
    alt: 'Plant-Based Paint Sets',
    badge: '',
  },
];

export default function ProductsPage() {
  const [cartStates, setCartStates] = React.useState([false, false, false]);
  const cartTimeouts = React.useRef<(NodeJS.Timeout | null)[]>([null, null, null]);

  const handleAddToCart = (idx: number) => {
    setCartStates(states => states.map((v, i) => (i === idx ? true : v)));
    if (cartTimeouts.current[idx]) clearTimeout(cartTimeouts.current[idx]!);
    cartTimeouts.current[idx] = setTimeout(() => {
      setCartStates(states => states.map((v, i) => (i === idx ? false : v)));
    }, 1100);
  };

  return (
    <main style={{ minHeight: '60vh' }}>
      <section className="products-section" id="products">
        <h1 style={{
          fontSize: '2.1rem',
          fontWeight: 700,
          color: 'var(--brand-green-dark)',
          textAlign: 'center',
          marginBottom: '2.2rem',
          letterSpacing: '0.01em',
        }}>
          All Products
        </h1>
        <div className="products-grid">
          {products.map((product, idx) => (
            <div className="product-card" key={product.name}>
              {product.badge && (
                <div className="product-card__badge">{product.badge}</div>
              )}
              <div className="product-card__img-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="product-card__img"
                  src={product.img}
                  alt={product.alt}
                />
              </div>
              <div className="product-card__name">{product.name}</div>
              <div className="product-card__price">{product.price}</div>
              <button
                className="product-card__btn"
                type="button"
                disabled={cartStates[idx]}
                onClick={() => handleAddToCart(idx)}
              >
                {cartStates[idx] ? 'Added!' : 'Add to Cart'}
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
