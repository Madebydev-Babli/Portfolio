import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

const themeScript = `
  (function () {
    try {
      const storedTheme = localStorage.getItem('portfolio-theme')
      const theme = storedTheme === 'light' ? 'light' : 'dark'
      const root = document.documentElement
      root.classList.remove('light', 'dark')
      root.classList.add(theme)
      root.style.colorScheme = theme
    } catch (error) {
      console.error(error)
    }
  })()
`

export const metadata: Metadata = {
  title: 'Babli Chauhan | React Developer at Proactii Media LLP',
  description:
    'Recruiter-focused React portfolio presenting production-ready client projects, full-stack growth, and polished modern interfaces.',
  openGraph: {
    title: 'Babli Chauhan | React Developer at Proactii Media LLP',
    description:
      'React developer at Proactii Media LLP building client websites and growing into full-stack product engineering.',
    url: 'https://builtbybabli.dev',
    siteName: 'Babli Chauhan Portfolio',
    type: 'website',
  },
  metadataBase: new URL('https://builtbybabli.dev'),
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen bg-white text-slate-900 antialiased transition-colors duration-300 selection:bg-cyan-400 selection:text-slate-950 dark:bg-slate-950 dark:text-slate-100">
        {children}
      </body>
    </html>
  )
}
