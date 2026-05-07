import Link from 'next/link'
import { navLinks } from './_data/site'

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        background: 'var(--bg-primary)',
        padding: '32px 24px 40px',
      }}
    >
      <div className="site-container footer-grid">
        <div>
          <Link
            href="/"
            transitionTypes={['nav-back']}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.6rem',
              color: 'var(--gold)',
              viewTransitionName: 'site-wordmark',
            }}
          >
            Regal Weaves
          </Link>
          <p style={{ marginTop: '12px', maxWidth: '420px', color: 'var(--text-muted)', lineHeight: 1.8 }}>
            Premium polyester and woven greige fabric storytelling, now structured into dedicated pages for buyers,
            partners, and procurement teams.
          </p>
        </div>

        <div>
          <p className="eyebrow">Navigate</p>
          <div className="footer-links">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} transitionTypes={link.href === '/' ? ['nav-back'] : ['nav-forward']}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
