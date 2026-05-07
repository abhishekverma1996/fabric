'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

type CountUpProps = {
  value: string
  className?: string
}

function parseValue(value: string) {
  const match = value.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/)
  if (!match) {
    return null
  }

  const [, prefix, rawNumber, suffix] = match
  const decimals = rawNumber.includes('.') ? rawNumber.split('.')[1].length : 0

  return {
    prefix,
    suffix,
    target: Number(rawNumber),
    decimals,
  }
}

export default function CountUp({ value, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const parsed = useMemo(() => parseValue(value), [value])
  const [displayValue, setDisplayValue] = useState(() => (parsed ? `${parsed.prefix}0${parsed.suffix}` : value))

  useEffect(() => {
    if (!parsed) {
      return
    }

    const element = ref.current
    if (!element) {
      return
    }

    let frame = 0
    let started = false

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) {
          return
        }

        started = true
        const start = performance.now()
        const duration = 1200

        const step = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          const current = parsed.target * eased
          setDisplayValue(`${parsed.prefix}${current.toFixed(parsed.decimals)}${parsed.suffix}`)

          if (progress < 1) {
            frame = window.requestAnimationFrame(step)
          }
        }

        frame = window.requestAnimationFrame(step)
        observer.disconnect()
      },
      { threshold: 0.4 }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
      if (frame) {
        window.cancelAnimationFrame(frame)
      }
    }
  }, [parsed, value])

  return (
    <span ref={ref} className={className}>
      {parsed ? displayValue : value}
    </span>
  )
}
