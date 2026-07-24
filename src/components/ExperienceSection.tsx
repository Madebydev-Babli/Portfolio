'use client'

import { motion } from 'framer-motion'

const responsibilities = [
  'Built responsive client websites.',
  'Developed reusable React & Next.js components.',
  'Worked with TypeScript and Tailwind CSS.',
  'Optimized UI performance.',
  'Collaborated with design and development teams.',
  'Delivered production-ready solutions.',
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start"
        >
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-600 dark:text-cyan-400">Experience</span>
            <h2 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl dark:text-white">React Developer</h2>
            <p className="mt-2 text-base font-medium text-slate-500 dark:text-slate-400">Proactii Media LLP</p>
          </div>

          <div className="space-y-4 rounded-[2rem] border border-slate-200/80 bg-white/70 p-8 shadow-lg shadow-slate-200/70 dark:border-slate-700/40 dark:bg-slate-950/75 dark:shadow-slate-950/20">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.32em] text-cyan-600 dark:text-cyan-400">Role highlights</p>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">What I deliver</h3>
            </div>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              {responsibilities.map((item) => (
                <li key={item} className="flex gap-3 leading-7">
                  <span className="mt-1 block h-2.5 w-2.5 rounded-full bg-cyan-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
