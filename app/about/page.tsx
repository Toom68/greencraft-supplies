import React from 'react';

export default function AboutPage() {
  return (
    <main style={{ minHeight: '60vh' }}>
      <section style={{
        maxWidth: 700,
        margin: '3.5rem auto 2.5rem auto',
        background: 'var(--brand-white)',
        borderRadius: 'var(--radius)',
        boxShadow: 'var(--brand-shadow)',
        padding: '2.5rem 1.5rem 2rem 1.5rem',
        border: '1.5px solid #e3e6e1',
        color: 'var(--brand-black)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.7em', marginBottom: '1.2rem' }}>
          <span style={{ fontSize: '2.1rem' }}>🌱</span>
          <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--brand-green)' }}>GreenCraft Supplies</span>
        </div>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--brand-green-dark)', marginBottom: '1.1rem', letterSpacing: '0.01em' }}>
          Our Story
        </h1>
        <p style={{ fontSize: '1.13rem', color: '#4d5a4a', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          GreenCraft Supplies was founded by artists and makers who believe creativity shouldn't cost the earth. Our mission is to empower conscious creators with premium, sustainable art materials—so you can make beautiful things while protecting our planet.
        </p>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--brand-brown)', marginBottom: '0.7rem' }}>
          Why Choose Us?
        </h2>
        <ul style={{ fontSize: '1.07rem', color: '#4d5a4a', lineHeight: 1.6, paddingLeft: '1.1em', marginBottom: '1.5rem' }}>
          <li style={{ marginBottom: '0.5em' }}>🌿 100% sustainable, biodegradable, or recycled materials</li>
          <li style={{ marginBottom: '0.5em' }}>🎨 Artist-grade quality with vibrant pigments and textures</li>
          <li style={{ marginBottom: '0.5em' }}>♻️ Zero-waste, compostable or recyclable packaging</li>
          <li style={{ marginBottom: '0.5em' }}>🌏 Every purchase supports reforestation and eco-initiatives</li>
        </ul>
        <p style={{ fontSize: '1.07rem', color: '#4d5a4a', lineHeight: 1.6 }}>
          Join us in crafting a greener tomorrow—one creation at a time.
        </p>
      </section>
    </main>
  );
}
