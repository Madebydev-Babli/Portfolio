'use client'

import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] border border-slate-200/80 bg-white/70 p-10 shadow-[0_20px_70px_rgba(15,23,42,0.08)] dark:border-slate-700/40 dark:bg-slate-950/75">
          <span className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-600 dark:text-cyan-400">About</span>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">
            Real client projects. Scalable software. AI-ready systems.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
            React Developer at Proactii Media LLP. I build real client websites with React and Next.js. I’m learning backend architecture and AI while solving real-world problems with scalable software.
          </p>
        </div>
      </div>
    </section>
  )
}
