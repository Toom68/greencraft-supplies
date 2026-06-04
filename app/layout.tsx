'use client';
import './globals.css';
import React from 'react';

export const metadata = {
  title: 'GreenCraft Supplies – Eco-Friendly Art Supplies',
  description: 'GreenCraft Supplies – Eco-friendly arts and crafts supplies for conscious creators. Biodegradable glitter, recycled paper sketchbooks, and plant-based paint sets.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <title>GreenCraft Supplies – Eco-Friendly Art Supplies</title>
        <meta name="description" content="GreenCraft Supplies – Eco-friendly arts and crafts supplies for conscious creators. Biodegradable glitter, recycled paper sketchbooks, and plant-based paint sets." />
      </head>
      <body>
        {/* NAVBAR */}
        <header className="navbar">
          <div className="logo">
            <span style={{ fontSize: '1.3em' }}>🌱</span> GreenCraft
          </div>
          <nav>
            <a href="/#features">Features</a>
            <a href="/#products">Products</a>
            <a href="/about">About</a>
            <a href="#contact">Contact</a>
            <button
              className="shop-btn"
              type="button"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  const el = document.getElementById('products');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Shop Now
            </button>
          </nav>
        </header>
        {children}
        {/* FOOTER */}
        <footer className="footer" id="about">
          <div>
            <div className="footer__brand">
              <span style={{ fontSize: '1.2em' }}>🌱</span> GreenCraft Supplies
            </div>
            <div className="footer__desc">
              Eco-friendly arts & crafts supplies for conscious creators.<br />
              Biodegradable, recycled, and plant-based materials—because your art deserves a greener tomorrow.
            </div>
          </div>
          <div className="footer__links">
            <div className="footer__links-title">Shop</div>
            <a href="/#products">All Products</a>
            <a href="/#features">Features</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer__links" id="contact">
            <div className="footer__links-title">Company</div>
            <a href="/about">About Us</a>
            <a href="#">Sustainability</a>
            <a href="#">Returns & Shipping</a>
          </div>
          <div className="footer__copyright">
            &copy; 2024 GreenCraft Supplies. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
