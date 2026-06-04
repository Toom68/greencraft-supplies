import Image from 'next/image';
import React, { useRef } from 'react';

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

export default function HomePage() {
  // For "Add to Cart" micro-interaction
  const cartTimeouts = useRef<(NodeJS.Timeout | null)[]>([null, null, null]);
  const [cartStates, setCartStates] = React.useState([false, false, false]);

  const handleAddToCart = (idx: number) => {
    setCartStates(states => states.map((v, i) => (i === idx ? true : v)));
    if (cartTimeouts.current[idx]) clearTimeout(cartTimeouts.current[idx]!);
    cartTimeouts.current[idx] = setTimeout(() => {
      setCartStates(states => states.map((v, i) => (i === idx ? false : v)));
    }, 1100);
  };

  return (
    <>
      {/* HERO */}
      <section className="hero" id="home">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero__bg"
          src="https://source.unsplash.com/1920x900/?eco-friendly,arts,crafts,supplies"
          alt="Eco-friendly arts and crafts supplies"
        />
        <div className="hero__overlay"></div>
        <div className="hero__content">
          <div className="hero__headline">Eco-Friendly Art Supplies</div>
          <div className="hero__subtext">Sustainable materials for conscious creators.</div>
          <div className="hero__actions">
            <button
              className="hero__btn"
              type="button"
              onClick={() => {
                const el = document.getElementById('products');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Shop Eco Collection
            </button>
            <button
              className="hero__btn secondary"
              type="button"
              onClick={() => {
                const el = document.getElementById('features');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Why GreenCraft?
            </button>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust-bar">
        <div className="trust-bar__item">🚚 Free Shipping</div>
        <div className="trust-bar__item">🔄 Easy Returns</div>
        <div className="trust-bar__item">🔒 Secure Checkout</div>
        <div className="trust-bar__tagline">Crafting a Greener Tomorrow</div>
      </div>

      {/* FEATURES */}
      <section className="features" id="features">
        <div className="feature-card">
          <div className="feature-card__icon">🌿</div>
          <div className="feature-card__title">100% Sustainable</div>
          <div className="feature-card__desc">
            All our supplies are sourced from renewable, biodegradable, or recycled materials—good for your art and the planet.
          </div>
        </div>
        <div className="feature-card">
          <div className="feature-card__icon">🎨</div>
          <div className="feature-card__title">Artist-Grade Quality</div>
          <div className="feature-card__desc">
            Premium textures, vibrant pigments, and eco-friendly innovation. Create without compromise on quality or sustainability.
          </div>
        </div>
        <div className="feature-card">
          <div className="feature-card__icon">♻️</div>
          <div className="feature-card__title">Zero-Waste Packaging</div>
          <div className="feature-card__desc">
            Every order is shipped in compostable or recyclable packaging, minimizing waste from studio to doorstep.
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="products-section" id="products">
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

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="cta-banner__headline">
          Join the GreenCraft Movement<br />
          <span style={{ fontSize: '1.1em', fontWeight: 400 }}>Make every creation eco-positive.</span>
        </div>
        <button
          className="cta-banner__btn"
          type="button"
          onClick={() => {
            const el = document.getElementById('products');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Shop Sustainable Supplies
        </button>
      </section>
    </>
  );
}
