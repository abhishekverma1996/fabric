'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'
type FontSize = 'xxs' | 'xs' | 'md' | 'lg' | 'xl'

interface SiteContextType {
  theme: Theme
  toggleTheme: () => void
  fontSize: FontSize
  setFontSize: (s: FontSize) => void
  hydrated: boolean
}

const SiteContext = createContext<SiteContextType>({
  theme: 'dark',
  toggleTheme: () => {},
  fontSize: 'md',
  setFontSize: () => {},
  hydrated: false,
})

const FONT_SIZES: FontSize[] = ['xxs', 'xs', 'md', 'lg', 'xl']

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [fontSize, setFontSizeState] = useState<FontSize>('md')
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const savedTheme = localStorage.getItem('rw-theme') as Theme | null
      const savedFont = localStorage.getItem('rw-font') as FontSize | null

      if (savedTheme === 'light' || savedTheme === 'dark') {
        setTheme(savedTheme)
      }

      if (savedFont && FONT_SIZES.includes(savedFont)) {
        setFontSizeState(savedFont)
      }

      setHydrated(true)
    })

    return () => window.cancelAnimationFrame(frame)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('rw-theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.setAttribute('data-fontsize', fontSize)
    localStorage.setItem('rw-font', fontSize)
  }, [fontSize])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  const setFontSize = (s: FontSize) => setFontSizeState(s)

  return (
    <SiteContext.Provider value={{ theme, toggleTheme, fontSize, setFontSize, hydrated }}>
      {children}
    </SiteContext.Provider>
  )
}

export const useSite = () => useContext(SiteContext)
export { FONT_SIZES }
export type { FontSize }
