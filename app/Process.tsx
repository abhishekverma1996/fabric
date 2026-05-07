'use client'

import { motion } from 'framer-motion'
import { useReveal } from './useReveal'
import { processSteps } from './_data/site'

export default function Process() {
  const { ref, visible } = useReveal()

  return (
    <section id="process" className="page-section" style={{ background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
      <div className="site-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '60px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
            <div style={{ width: '28px', height: '1px', background: 'var(--gold)' }} />
            <span style={{ fontSize: '0.62rem', letterSpacing: '5px', textTransform: 'uppercase', color: 'var(--gold)' }}>How We Work</span>
          </div>
          <h2 className="section-title">
            From Yarn to <em>Fabric</em>
          </h2>
        </motion.div>

        <div className="two-column-panel" style={{ alignItems: 'start' }}>
          <div className="process-steps">
            <motion.div
              className="process-thread"
              animate={{ opacity: [0.35, 0.8, 0.35], scaleY: [0.96, 1, 0.96] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            />
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                className="process-step-card"
                initial={{ opacity: 0, x: -30 }}
                animate={visible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
                style={{
                  display: 'flex',
                  gap: '24px',
                  padding: '28px 0',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                <motion.div
                  className="process-pulse"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.45, 1, 0.45] }}
                  transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.2 }}
                />
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '3rem',
                    fontWeight: 300,
                    color: 'color-mix(in srgb, var(--gold) 18%, transparent)',
                    lineHeight: 1,
                    flexShrink: 0,
                    width: '52px',
                  }}
                >
                  {step.number}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1.25rem',
                      color: 'var(--text-primary)',
                      marginBottom: '8px',
                      fontWeight: 300,
                    }}
                  >
                    {step.title}
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="process-visual-panel"
            initial={{ opacity: 0, x: 30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: 'sticky', top: '120px' }}
          >
            <div
              style={{
                width: '100%',
                height: '400px',
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {[0, 1, 2].map((layer) => (
                <motion.div
                  key={layer}
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    background:
                      layer === 0
                        ? `repeating-linear-gradient(0deg, var(--sienna) 0px, var(--gold-dim) 8px, var(--bg-tertiary) 16px, var(--gold-dim) 24px, var(--sienna) 32px)`
                        : layer === 1
                          ? `repeating-linear-gradient(0deg, var(--gold) 0px, var(--sienna-light) 10px, var(--gold) 20px)`
                          : `repeating-linear-gradient(0deg, var(--bg-primary) 0px, var(--gold-dim) 12px, var(--bg-primary) 24px)`,
                    opacity: layer === 0 ? 1 : layer === 1 ? 0.5 : 0.25,
                  }}
                  animate={{
                    height: ['100%', '80%', '100%'],
                    clipPath: [
                      'polygon(0 0, 100% 0, 100% 62%, 88% 72%, 76% 60%, 62% 74%, 50% 62%, 38% 74%, 25% 62%, 12% 72%, 0 62%)',
                      'polygon(0 0, 100% 0, 100% 72%, 88% 62%, 76% 74%, 62% 62%, 50% 74%, 38% 62%, 25% 74%, 12% 62%, 0 72%)',
                      'polygon(0 0, 100% 0, 100% 62%, 88% 72%, 76% 60%, 62% 74%, 50% 62%, 38% 74%, 25% 62%, 12% 72%, 0 62%)',
                    ],
                  }}
                  transition={{ duration: 3 + layer, repeat: Infinity, ease: 'easeInOut', delay: layer * 0.5 }}
                />
              ))}

              <motion.div
                className="process-shimmer"
                animate={{ left: ['-60%', '140%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                style={{
                  position: 'absolute',
                  top: 0,
                  width: '40%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)',
                  pointerEvents: 'none',
                }}
              />

              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  pointerEvents: 'none',
                  background: 'linear-gradient(to bottom, var(--bg-secondary) 0%, transparent 18%, transparent 70%, rgba(0,0,0,0.25) 100%)',
                }}
              />

              <div style={{ position: 'absolute', bottom: '22px', left: '22px', right: '22px' }}>
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '0.85rem',
                    fontStyle: 'italic',
                    color: 'rgba(245,237,216,0.4)',
                    letterSpacing: '2px',
                  }}
                >
                  Precision in every thread
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
