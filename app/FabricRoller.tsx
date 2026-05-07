'use client'

import { motion } from 'framer-motion'

export default function FabricRoller() {
  const floatingPieces = [
    { width: 32, height: 6, color: 'var(--gold)', rotate: 15, left: 260, top: '55%', delay: 0, duration: 4 },
    { width: 22, height: 4, color: 'var(--sienna)', rotate: -20, left: 60, top: '65%', delay: 1.2, duration: 5 },
    { width: 26, height: 5, color: 'var(--sienna-light)', rotate: 10, left: 280, top: '45%', delay: 2.5, duration: 3.5 },
    { width: 18, height: 3, color: 'var(--gold-light)', rotate: -8, left: 50, top: '50%', delay: 0.8, duration: 4.5 },
  ]

  return (
    <div className="fabric-roller" style={{ position: 'relative', width: '320px', height: '420px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      {/* Axle rod */}
      <div style={{
        width: '220px', height: '14px',
        background: 'linear-gradient(to bottom, var(--bg-tertiary), var(--bg-secondary), var(--bg-tertiary))',
        borderRadius: '7px', position: 'relative', zIndex: 3,
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        border: '1px solid var(--border)',
      }}>
        {/* End caps */}
        {['left', 'right'].map(side => (
          <div key={side} style={{
            position: 'absolute', top: '50%', transform: 'translateY(-50%)',
            [side]: '-7px', width: '18px', height: '18px',
            background: 'var(--bg-tertiary)', borderRadius: '50%',
            border: '1px solid var(--border)',
          }} />
        ))}
      </div>

      {/* Fabric Roll (spinning) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        style={{
          width: '110px', height: '110px', borderRadius: '50%',
          marginTop: '-62px', zIndex: 2,
          background: `repeating-conic-gradient(
            var(--sienna) 0deg 18deg,
            var(--gold) 18deg 36deg,
            var(--bg-tertiary) 36deg 54deg,
            var(--gold) 54deg 72deg
          )`,
          boxShadow: 'inset -10px -10px 24px rgba(0,0,0,0.35), 0 8px 28px rgba(0,0,0,0.3)',
        }}
      />

      {/* Unrolling Fabric Strip */}
      <motion.div
        animate={{ height: ['80px', '220px', '80px'] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          width: '82px', zIndex: 1, marginTop: '0',
          background: `repeating-linear-gradient(
            0deg,
            var(--sienna) 0px,
            var(--gold-dim) 6px,
            var(--bg-tertiary) 12px,
            var(--gold-dim) 18px,
            var(--sienna) 24px
          )`,
          borderRadius: '0 0 4px 4px',
          boxShadow: '4px 8px 24px rgba(0,0,0,0.3)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Shimmer effect */}
        <motion.div
          animate={{ left: ['-60%', '140%'] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute', top: 0, width: '50%', height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
          }}
        />

        {/* Draping bottom edge */}
        <motion.div
          animate={{
            clipPath: [
              'polygon(0 90%, 15% 78%, 30% 92%, 50% 75%, 70% 90%, 85% 76%, 100% 88%, 100% 100%, 0 100%)',
              'polygon(0 75%, 15% 90%, 30% 77%, 50% 92%, 70% 78%, 85% 92%, 100% 80%, 100% 100%, 0 100%)',
              'polygon(0 90%, 15% 78%, 30% 92%, 50% 75%, 70% 90%, 85% 76%, 100% 88%, 100% 100%, 0 100%)',
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '30px',
            background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.3))',
          }}
        />
      </motion.div>

      {/* Floating fabric bits */}
      {floatingPieces.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 0.7, 0], y: [0, -100] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            width: `${p.width}px`, height: `${p.height}px`,
            background: p.color,
            borderRadius: '3px',
            left: `${p.left}px`, top: p.top,
            rotate: `${p.rotate}deg`,
          }}
        />
      ))}
    </div>
  )
}
