import { ViewTransition } from 'react'

export default function SiteTemplate({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition
      enter={{
        'nav-forward': 'nav-forward',
        'nav-back': 'nav-back',
        default: 'page-fade',
      }}
      exit={{
        'nav-forward': 'nav-forward',
        'nav-back': 'nav-back',
        default: 'page-fade-out',
      }}
      default="none"
    >
      <div className="page-stage">{children}</div>
    </ViewTransition>
  )
}
