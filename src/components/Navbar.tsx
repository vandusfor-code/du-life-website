import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [past, setPast] = useState(false);
  useEffect(() => {
    const fn = () => setPast(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'background 0.4s, border-color 0.4s',
        background: past ? 'rgba(7,7,7,0.85)' : 'transparent',
        backdropFilter: past ? 'blur(20px)' : 'none',
        borderBottom: past ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
    >
      <div style={{
        maxWidth: 1120, margin: '0 auto', padding: '0 32px',
        height: 52, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="#" style={{ fontSize: 15, fontWeight: 500, color: '#f0f0f0', textDecoration: 'none', letterSpacing: '-0.01em' }}>
          Du Life
        </a>
        <button
          onClick={() => window.open('https://wa.me/your_number_here', '_blank')}
          style={{
            fontSize: 13, fontWeight: 500, color: '#f0f0f0',
            background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)',
            padding: '7px 18px', borderRadius: 99, cursor: 'pointer',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.07)')}
        >
          Open WhatsApp
        </button>
      </div>
    </header>
  );
};
