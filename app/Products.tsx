'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useReveal } from './useReveal'
import { productLines } from './_data/site'

export default function Products() {
  const { ref, visible } = useReveal()
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="products" className="page-section" style={{ background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
      <div className="site-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-heading"
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <div style={{ width: '28px', height: '1px', background: 'var(--gold)' }} />
              <span style={{ fontSize: '0.62rem', letterSpacing: '5px', textTransform: 'uppercase', color: 'var(--gold)' }}>What We Make</span>
            </div>
            <h2 className="section-title">
              Our <em>Products</em>
            </h2>
          </div>
          <Link href="/contact" className="secondary-link" transitionTypes={['nav-forward']}>
            Request Catalogue <span className="link-arrow">-&gt;</span>
          </Link>
        </motion.div>

        <div className="card-grid card-grid-3" style={{ gap: '2px', background: 'var(--border)' }}>
          {productLines.map((product, i) => (
            <motion.article
              key={product.number}
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="feature-card premium-card"
              whileHover={{ y: -6 }}
              style={{
                padding: '40px 32px',
                position: 'relative',
                overflow: 'hidden',
                background: hovered === i ? 'var(--bg-secondary)' : 'var(--bg-primary)',
                transition: 'background 0.35s ease',
              }}
            >
              <div className="card-weave" />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, var(--sienna) 0%, transparent 60%)',
                  opacity: hovered === i ? 0.1 : 0,
                  transition: 'opacity 0.35s',
                  pointerEvents: 'none',
                }}
              />

              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '3.5rem',
                  fontWeight: 300,
                  color:
                    hovered === i
                      ? 'color-mix(in srgb, var(--gold) 22%, transparent)'
                      : 'color-mix(in srgb, var(--gold) 10%, transparent)',
                  position: 'absolute',
                  top: '14px',
                  right: '18px',
                  lineHeight: 1,
                  transition: 'color 0.35s',
                }}
              >
                {product.number}
              </div>

              <div
                style={{
                  width: '44px',
                  height: '3px',
                  background: 'var(--gold)',
                  marginBottom: '26px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <motion.div
                  animate={{ left: ['-100%', '200%'] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', delay: i * 0.3 }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    width: '100%',
                    height: '100%',
                    background: 'var(--cream)',
                  }}
                />
              </div>

              <h3>{product.name}</h3>
              <p>{product.description}</p>

              <Link href="/contact" className="secondary-link card-inline-link" transitionTypes={['nav-forward']} style={{ marginTop: '22px', display: 'inline-flex' }}>
                Enquire <span className="link-arrow">-&gt;</span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
