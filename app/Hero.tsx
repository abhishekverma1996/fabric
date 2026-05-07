'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import CountUp from './CountUp'
import FabricRoller from './FabricRoller'

const stats = [
  { num: '4.8 Cr', label: 'Metres / Year' },
  { num: 'INR 130 Cr', label: 'Annual Turnover' },
  { num: '20+', label: 'Years Legacy' },
]

export default function Hero() {
  const { scrollY } = useScroll()
  const leftMist = useTransform(scrollY, [0, 700], [0, -40])
  const rightMist = useTransform(scrollY, [0, 700], [0, 55])

  return (
    <section
      id="hero"
      className="hero-shell"
      style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--bg-primary)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(ellipse at 68% 50%, color-mix(in srgb, var(--sienna) 12%, transparent) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, color-mix(in srgb, var(--gold) 6%, transparent) 0%, transparent 50%)',
        }}
      />
      <motion.div className="hero-mist hero-mist-left" style={{ y: leftMist }} />
      <motion.div className="hero-mist hero-mist-right" style={{ y: rightMist }} />

      <div className="site-container hero-grid">
        <div className="hero-copy" style={{ zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}
          >
            <div style={{ width: '36px', height: '1px', background: 'var(--gold)' }} />
            <span
              style={{
                fontSize: '0.65rem',
                letterSpacing: '4px',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                fontFamily: "'Jost', sans-serif",
              }}
            >
              Est. 2003 · Surat, Gujarat
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(3rem, 6.5vw, 5.5rem)',
              fontWeight: 300,
              lineHeight: 1.06,
              color: 'var(--text-primary)',
              marginBottom: '24px',
            }}
          >
            Fabric Woven
            <br />
            with <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Precision</em>
            <br />
            &amp; Pride
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            style={{
              fontSize: '0.9rem',
              lineHeight: 1.9,
              color: 'var(--text-muted)',
              maxWidth: '440px',
              marginBottom: '44px',
            }}
          >
            Premium polyester and woven greige fabrics crafted in the heart of Surat for garment houses, sourcing
            teams, and product development partners.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}
          >
            <Link href="/products" className="primary-link" transitionTypes={['nav-forward']}>
              <span>Explore Products</span>
            </Link>
            <Link href="/contact" className="secondary-link" transitionTypes={['nav-forward']}>
              <span>Request Sample</span>
              <span className="link-arrow">-&gt;</span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          style={{ zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <FabricRoller />
        </motion.div>

        <div className="hero-stats">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="hero-stat-card"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + i * 0.1 }}
              style={{ textAlign: 'right' }}
            >
              <CountUp value={stat.num} className="hero-stat-value" />
              <div style={{ width: '28px', height: '1px', background: 'var(--gold-dim)', margin: '6px 0 6px auto' }} />
              <span style={{ fontSize: '0.6rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
