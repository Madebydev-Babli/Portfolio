'use client'

import { motion } from 'framer-motion'

export default function TestimonialsSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-600 dark:text-cyan-400">Testimonials</p>
          <h2 className="mt-3 text-4xl font-semibold text-slate-900 sm:text-5xl dark:text-white">Trusted by teams and stakeholders</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
            Feedback that underscores my ability to deliver polished frontend work, clean project handoff, and a strong focus on launch-ready results.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75 }}
          className="section-surface rounded-[2rem] border border-slate-200/80 bg-white/70 p-10 dark:border-slate-700/40 dark:bg-slate-950/75"
        >
          <p className="text-xl font-semibold text-slate-900 dark:text-white">“A dependable frontend partner with strong React experience and a real eye for polished UI.”</p>
          <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
            Delivered work on schedule, preserved brand direction, and helped shape the product experience from wireframe to launch.
          </p>
          <div className="mt-8 flex flex-col gap-3 border-t border-slate-200/70 pt-6 sm:flex-row sm:items-center sm:justify-between dark:border-slate-700/40">
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">Production Team Lead</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Client work for enterprise brand launch</p>
            </div>
            <div className="rounded-full bg-white/70 px-4 py-2 text-sm text-slate-600 dark:bg-slate-900/80 dark:text-slate-300">Verified frontend contribution</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
