'use client'

import { motion } from 'framer-motion'

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion', 'GSAP'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Authentication', 'Server-side development'],
  },
  {
    title: 'Database',
    skills: ['MongoDB', 'MongoDB Atlas'],
  },
  {
    title: 'Tools & Services',
    skills: ['Git', 'GitHub', 'Postman', 'Cloudinary', 'Razorpay', 'Vercel', 'Render', 'Netlify'],
  },
  {
    title: 'Development',
    skills: ['Responsive Web Development', 'API Integration', 'Database Integration', 'Authentication & Authorization', 'Dashboard Development', 'CRUD Operations', 'Third-Party API Integration', 'Deployment & Debugging'],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="border-t border-slate-200/70 px-6 py-24 dark:border-slate-700/50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-600 dark:text-cyan-400">Skills</p>
            <h2 className="mt-3 text-4xl font-semibold text-slate-900 sm:text-5xl dark:text-white">Full-Stack Technology Stack</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-400">
            Organized by specialization: frontend interfaces, backend systems, databases, tools, and core development practices.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="section-surface rounded-[1.75rem] border border-slate-200/80 bg-white/70 p-6 shadow-sm dark:border-slate-700/40 dark:bg-slate-950/75"
            >
              <p className="text-sm uppercase tracking-[0.32em] text-cyan-600 dark:text-cyan-300">{group.title}</p>
              <ul className="mt-5 space-y-3 text-slate-700 dark:text-slate-200">
                {group.skills.map((skill) => (
                  <li key={skill} className="rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-sm text-slate-700 dark:border-slate-700/50 dark:bg-slate-900/80 dark:text-slate-200">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
