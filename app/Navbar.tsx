'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useSite, FONT_SIZES, type FontSize } from './SiteContext'
import { navLinks } from './_data/site'

const FONT_LABELS: Record<FontSize, string> = {
  xxs: 'A--',
  xs: 'A-',
  md: 'A',
  lg: 'A+',
  xl: 'A++',
}

export default function Navbar() {
  const { theme, toggleTheme, fontSize, setFontSize, hydrated } = useSite()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        className="site-navbar"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: scrolled ? '14px 24px' : '24px 24px',
          background: 'var(--nav-bg)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--border)',
          transition: 'padding 0.4s ease, background 0.3s ease',
          gap: '20px',
        }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link
          href="/"
          transitionTypes={pathname === '/' ? undefined : ['nav-back']}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.3rem',
            fontWeight: 300,
            color: 'var(--gold)',
            letterSpacing: '2px',
            whiteSpace: 'nowrap',
            viewTransitionName: 'site-wordmark',
          }}
        >
          Regal <em style={{ color: 'var(--text-primary)', fontStyle: 'italic' }}>Weaves</em>
        </Link>

        <ul className="navbar-links" style={{ listStyle: 'none', margin: 0 }}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                transitionTypes={link.href === '/' ? ['nav-back'] : ['nav-forward']}
                style={{
                  fontSize: '0.68rem',
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  fontFamily: "'Jost', sans-serif",
                  position: 'relative',
                  paddingBottom: '4px',
                }}
                className={`nav-link${pathname === link.href ? ' nav-link-active' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar-controls" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
              background: 'var(--bg-secondary)',
              borderRadius: '6px',
              padding: '4px',
              border: '1px solid var(--border)',
            }}
          >
            {FONT_SIZES.map((size) => (
              <button
                key={size}
                onClick={() => setFontSize(size)}
                title={`Font size: ${FONT_LABELS[size]}`}
                style={{
                  padding: '4px 8px',
                  borderRadius: '4px',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: "'Jost', sans-serif",
                  fontSize:
                    size === 'xxs'
                      ? '0.6rem'
                      : size === 'xs'
                        ? '0.65rem'
                        : size === 'md'
                          ? '0.7rem'
                          : size === 'lg'
                            ? '0.75rem'
                            : '0.82rem',
                  fontWeight: 400,
                  letterSpacing: '0.5px',
                  background: fontSize === size ? 'var(--gold)' : 'transparent',
                  color: fontSize === size ? 'var(--bg-primary)' : 'var(--text-muted)',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                }}
              >
                {FONT_LABELS[size]}
              </button>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            title="Toggle theme"
            style={{
              minWidth: '58px',
              height: '40px',
              borderRadius: '999px',
              border: '1px solid var(--border)',
              background: 'var(--bg-secondary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.7rem',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              color: 'var(--text-primary)',
              transition: 'all 0.3s',
            }}
          >
            {hydrated ? (theme === 'dark' ? 'Light' : 'Dark') : 'Theme'}
          </button>

          <Link
            href="/contact"
            transitionTypes={['nav-forward']}
            style={{
              padding: '10px 22px',
              border: '1px solid var(--gold)',
              color: 'var(--gold)',
              fontSize: '0.65rem',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              fontFamily: "'Jost', sans-serif",
              transition: 'all 0.3s',
              background: 'transparent',
            }}
            className="nav-cta"
          >
            Enquire
          </Link>
        </div>

        <button
          type="button"
          className="navbar-menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </motion.nav>

      {menuOpen && (
        <div className="mobile-nav-panel">
          <div className="mobile-nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                transitionTypes={link.href === '/' ? ['nav-back'] : ['nav-forward']}
                className={`mobile-nav-link${pathname === link.href ? ' mobile-nav-link-active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mobile-nav-actions">
            <div className="mobile-font-switcher">
              {FONT_SIZES.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setFontSize(size)}
                  className={fontSize === size ? 'mobile-font-button is-active' : 'mobile-font-button'}
                >
                  {FONT_LABELS[size]}
                </button>
              ))}
            </div>

            <button type="button" onClick={toggleTheme} className="mobile-theme-button">
              {hydrated ? (theme === 'dark' ? 'Light Mode' : 'Dark Mode') : 'Theme'}
            </button>
          </div>
        </div>
      )}

      <style>{`
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--gold);
          transition: width 0.3s;
        }
        .nav-link:hover { color: var(--gold) !important; }
        .nav-link:hover::after { width: 100%; }
        .nav-link-active { color: var(--gold) !important; }
        .nav-link-active::after { width: 100%; }
        .nav-cta:hover { background: var(--gold) !important; color: var(--bg-primary) !important; }
        .mobile-nav-link-active { color: var(--gold) !important; border-color: var(--gold); }
      `}</style>
    </>
  )
}
