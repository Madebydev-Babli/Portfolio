'use client'

import { motion } from 'framer-motion'

const coreValues = [
  {
    title: 'Building, Not Just Designing',
    description: 'Turning designs and requirements into working products.'
  },
  {
    title: 'Learning Through Real Projects',
    description: 'Improving by solving actual development problems and working through real-world challenges.'
  },
  {
    title: 'Clean User Experiences',
    description: 'Building applications that are functional, intuitive, responsive, and easy to use.'
  },
  {
    title: 'Continuous Improvement',
    description: 'Refining existing projects, improving features, fixing issues, and learning better ways to build software.'
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] border border-slate-200/80 bg-white/70 p-10 shadow-[0_20px_70px_rgba(15,23,42,0.08)] dark:border-slate-700/40 dark:bg-slate-950/75">
          <span className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-600 dark:text-cyan-400">About</span>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">
            About Me
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
            I'm a Full-Stack Developer who enjoys building applications that solve real problems.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
            My experience ranges from developing complete full-stack applications to working on client-facing business websites and landing pages. I work across both frontend and backend, including UI development, API integration, database design, authentication, dashboards, and deployment.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
            I started with frontend development and gradually moved toward full-stack development because I wanted to understand how an application works beyond what users see.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
            Today, I work with technologies such as React, Next.js, Node.js, Express.js, MongoDB, and TypeScript to build scalable and user-focused web experiences.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
            I'm particularly interested in working on products where I can take ownership of a feature or application from idea → interface → backend → database → deployment.
          </p>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">What I Care About</h3>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-2xl border border-slate-200/80 bg-white/70 p-6 dark:border-slate-700/40 dark:bg-slate-900/75"
                >
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {value.title}
                  </h4>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
