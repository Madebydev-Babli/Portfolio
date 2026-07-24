'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

const contactLinks = [
  { label: 'Email', value: 'madebybabli@gmail.com', href: 'mailto:madebybabli@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/babli-chauhan', href: 'https://linkedin.com/in/babli-chauhan' },
  { label: 'GitHub', value: 'github.com/Madebydev-Babli', href: 'https://github.com/Madebydev-Babli' },
]

export default function ContactSection() {
  return (
    <section id="contact" className="border-t border-slate-200/70 px-6 py-24 dark:border-slate-700/50">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-600 dark:text-cyan-400">Contact</p>
            <h2 className="mt-3 text-4xl font-semibold text-slate-900 sm:text-5xl dark:text-white">Ready to hire a React engineer with product focus?</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
              I partner with product teams and agencies to ship polished React/Next.js experiences. Contact me for roles, freelance collaboration, or product builds that need fast, maintainable UI.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="section-surface flex items-center justify-between rounded-[1.75rem] border border-slate-200/80 bg-white/70 px-6 py-5 text-slate-700 transition hover:bg-white/90 dark:border-slate-700/40 dark:bg-slate-950/75 dark:text-slate-200 dark:hover:bg-slate-900/95"
                >
                  <span>
                    <span className="block text-sm text-slate-500 dark:text-slate-400">{link.label}</span>
                    <span className="font-medium text-slate-900 dark:text-white">{link.value}</span>
                  </span>
                  {link.label === 'Email' ? <Mail size={20} /> : link.label === 'LinkedIn' ? <Linkedin size={20} /> : <Github size={20} />}
                </a>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="/Babli-Chauhan.pdf" download className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700/40 dark:bg-slate-900/95 dark:text-white dark:hover:bg-slate-800">
                Download resume
              </a>
              <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                Browse projects
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75 }}
            className="section-surface rounded-[2rem] border border-slate-200/80 bg-white/70 p-8 dark:border-slate-700/40 dark:bg-slate-950/75"
          >
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-600 dark:text-cyan-400">Send a message</p>
            <form action="https://formsubmit.co/madebybabli@gmail.com" method="POST" className="mt-8 space-y-6">
              <input type="hidden" name="_next" value="/" />
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Name</span>
                  <input type="text" name="name" required className="mt-3 w-full rounded-3xl border border-slate-300 bg-white/80 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 dark:border-slate-700/60 dark:bg-slate-900/80 dark:text-slate-100 dark:placeholder:text-slate-500" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Email</span>
                  <input type="email" name="email" required className="mt-3 w-full rounded-3xl border border-slate-300 bg-white/80 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 dark:border-slate-700/60 dark:bg-slate-900/80 dark:text-slate-100 dark:placeholder:text-slate-500" />
                </label>
              </div>

              <label className="block">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Message</span>
                <textarea name="message" rows={5} required className="mt-3 w-full rounded-[1.75rem] border border-slate-300 bg-white/80 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 dark:border-slate-700/60 dark:bg-slate-900/80 dark:text-slate-100 dark:placeholder:text-slate-500" />
              </label>

              <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300">
                Send message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
