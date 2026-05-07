'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const items = [
  'Home Furnishing',
  "Men's Wear",
  'Garmenting Fabric',
  'Digital Printing',
  'Warp Knitting',
  'Raschel Fabric',
  'Polyester Greige',
  'New Developments',
]

export default function Marquee() {
  const doubled = [...items, ...items]
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: '16px 0',
        overflow: 'hidden',
        background: 'var(--bg-secondary)',
      }}
    >
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: isHovering ? 38 : 22, repeat: Infinity, ease: 'linear' }}
        style={{ display: 'flex', whiteSpace: 'nowrap', gap: 0 }}
      >
        {doubled.map((item, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0 36px' }}>
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '0.85rem',
                fontStyle: 'italic',
                letterSpacing: '2px',
                color: 'var(--gold-dim)',
              }}
            >
              {item}
            </span>
            <span style={{ color: 'var(--sienna-light)', fontSize: '0.5rem' }}>◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
