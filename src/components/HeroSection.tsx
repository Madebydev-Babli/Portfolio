'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const techBadges = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Framer Motion',
  'Node.js',
]

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden px-6 pb-24 pt-16 md:pb-32">
      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-white/80 px-4 py-2 text-sm text-cyan-700 shadow-lg shadow-cyan-400/10 dark:bg-slate-900/80 dark:text-cyan-200"
          >
            Full Stack Developer · React & Next.js Developer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="mt-8 text-4xl font-semibold leading-tight tracking-[-0.04em] text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            Building modern React applications while growing into a Full Stack Engineer.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 max-w-xl text-base text-slate-600 sm:text-lg dark:text-slate-300"
          >
            React Developer at Proactii Media LLP. I build production-ready client websites and pursue scalable full-stack, AI-powered applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-400/60 hover:bg-white dark:border-slate-700 dark:bg-slate-900/85 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-400/60 hover:bg-white dark:border-slate-700 dark:bg-slate-900/85 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              Contact
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="mt-12 grid max-w-md grid-cols-2 gap-3 sm:grid-cols-3"
          >
            {techBadges.map((badge) => (
              <div key={badge} className="rounded-2xl border border-slate-200/80 bg-white/70 px-4 py-3 text-center text-sm text-slate-700 dark:border-slate-700/60 dark:bg-slate-900/80 dark:text-slate-200">
                {badge}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="absolute inset-0 rounded-[2rem] border border-cyan-400/10 bg-white/70 shadow-2xl shadow-cyan-500/10 dark:bg-slate-950/80" />
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_25px_70px_rgba(15,23,42,0.08)] dark:border-slate-700/60 dark:bg-slate-900/95">
            <div className="relative h-[420px] w-full rounded-[1.75rem] bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950">
              <Image
                src="/BABLI.jpeg"
                alt="Profile image"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 420px"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
