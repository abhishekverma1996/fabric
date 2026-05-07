'use client'

import { motion } from 'framer-motion'
import CountUp from './CountUp'
import { useReveal } from './useReveal'

const facts = [
  { val: '4.8 Cr', key: 'Production (Mtrs/yr)' },
  { val: '500+', key: 'Skilled Workers' },
  { val: '400', key: 'Machines' },
  { val: 'INR 130 Cr', key: 'Annual Turnover' },
]

const warpColors = [
  'var(--sienna)',
  'var(--gold)',
  'var(--bg-tertiary)',
  'var(--gold)',
  'var(--sienna)',
  'var(--gold-light)',
  'var(--sienna-light)',
  'var(--gold)',
  'var(--sienna)',
  'var(--bg-tertiary)',
  'var(--gold)',
  'var(--gold-light)',
]

export default function About() {
  const { ref, visible } = useReveal()

  return (
    <section id="about" className="page-section" style={{ background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
      <div ref={ref} className="site-container two-column-panel" style={{ alignItems: 'center' }}>
        <motion.div
          className="about-visual"
          initial={{ opacity: 0, x: -40, clipPath: 'inset(0% 100% 0% 0%)' }}
          animate={visible ? { opacity: 1, x: 0, clipPath: 'inset(0% 0% 0% 0%)' } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: 'relative' }}
        >
          <div
            style={{
              width: '100%',
              aspectRatio: '3/4',
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <motion.div
              className="about-shimmer"
              animate={{ left: ['-35%', '115%'] }}
              transition={{ duration: 4.4, repeat: Infinity, ease: 'linear' }}
            />
            <div style={{ position: 'absolute', inset: 0, display: 'flex', gap: '6px', padding: '20px', alignItems: 'stretch' }}>
              {warpColors.map((color, i) => (
                <motion.div
                  key={i}
                  style={{ flex: 1, borderRadius: '3px', background: color }}
                  animate={{ scaleY: [1, 0.58 + (i % 4) * 0.08, 1], opacity: [0.9, 0.4, 0.9] }}
                  transition={{ duration: 1.8 + i * 0.15, delay: i * 0.12, repeat: Infinity, ease: 'easeInOut' }}
                />
              ))}
            </div>

            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.5rem', color: 'color-mix(in srgb, var(--gold) 25%, transparent)' }}>
                ✦
              </span>
              <span style={{ fontSize: '0.6rem', letterSpacing: '4px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Add Factory Photo
              </span>
            </div>
          </div>

          <motion.div
            className="about-badge"
            animate={{ y: [0, -6, 0], rotate: [0, 1.2, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              bottom: '-24px',
              right: '-24px',
              width: '110px',
              height: '110px',
              background: 'var(--sienna)',
              border: '1px solid var(--sienna-light)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.4rem', fontWeight: 300, color: 'var(--cream)', lineHeight: 1 }}>
              20+
            </span>
            <span style={{ fontSize: '0.6rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(245,237,216,0.7)' }}>
              Years
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '28px', height: '1px', background: 'var(--gold)' }} />
            <span style={{ fontSize: '0.62rem', letterSpacing: '5px', textTransform: 'uppercase', color: 'var(--gold)' }}>Our Story</span>
          </div>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
              fontWeight: 300,
              lineHeight: 1.15,
              color: 'var(--text-primary)',
              marginBottom: '24px',
            }}
          >
            Rooted in Surat,
            <br />
            Trusted <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Worldwide</em>
          </h2>

          <p style={{ fontSize: '0.92rem', lineHeight: 1.9, color: 'var(--text-muted)', marginBottom: '16px' }}>
            Founded in 2003 in the heart of Surat&apos;s fabric district, the business has grown through consistent quality,
            buyer trust, and a willingness to keep evolving with market needs.
          </p>
          <p style={{ fontSize: '0.92rem', lineHeight: 1.9, color: 'var(--text-muted)', marginBottom: '36px' }}>
            From greige polyester to digital-print-ready bases, the manufacturing setup is positioned to support repeatable
            output and practical sampling for modern garment programs.
          </p>

          <div className="facts-grid">
            {facts.map((fact) => (
              <div key={fact.key} className="fact-card">
                <CountUp value={fact.val} className="fact-card-value" />
                <span>{fact.key}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
