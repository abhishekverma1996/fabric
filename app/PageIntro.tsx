'use client'

import { motion } from 'framer-motion'

type PageIntroProps = {
  eyebrow: string
  title: string
  accent: string
  description: string
}

export default function PageIntro({ eyebrow, title, accent, description }: PageIntroProps) {
  return (
    <section className="page-intro">
      <div className="site-container page-intro-shell">
        <motion.div
          className="page-intro-orbit orbit-left"
          animate={{ y: [0, -18, 0], opacity: [0.22, 0.38, 0.22] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="page-intro-orbit orbit-right"
          animate={{ y: [0, 16, 0], opacity: [0.16, 0.3, 0.16] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        />
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}
        >
          <div style={{ width: '30px', height: '1px', background: 'var(--gold)' }} />
          <span className="eyebrow">{eyebrow}</span>
        </motion.div>
        <motion.h1
          className="page-title"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          {title} <em>{accent}</em>
        </motion.h1>
        <motion.p
          className="page-copy"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
        >
          {description}
        </motion.p>
      </div>
    </section>
  )
}
