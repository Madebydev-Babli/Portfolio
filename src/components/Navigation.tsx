'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Moon, SunMedium } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme') as 'dark' | 'light' | null
    const initialTheme = savedTheme === 'light' ? 'light' : 'dark'

    setTheme(initialTheme)
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(initialTheme)
    document.documentElement.style.colorScheme = initialTheme
  }, [])

  const applyTheme = (nextTheme: 'dark' | 'light') => {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(nextTheme)
    document.documentElement.style.colorScheme = nextTheme
    window.localStorage.setItem('portfolio-theme', nextTheme)
  }

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    applyTheme(next)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-slate-700/40 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-base font-semibold tracking-[0.24em] text-cyan-600 transition hover:text-cyan-500 dark:text-cyan-300 dark:hover:text-cyan-200">
          BuiltbyBabli
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-slate-700 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-slate-700 shadow-sm transition hover:border-cyan-400/40 hover:text-slate-950 dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:text-white"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <SunMedium size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-slate-700 shadow-sm transition hover:border-cyan-400/40 hover:text-slate-950 dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:text-white md:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Open menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-slate-200/70 bg-white/95 px-6 py-4 dark:border-slate-700/50 dark:bg-slate-950/95 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-slate-700 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      ) : null}
    </header>
  )
}
