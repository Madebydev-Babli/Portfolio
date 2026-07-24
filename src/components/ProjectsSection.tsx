'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'

type BusinessLandingProject = {
  name: string
  description: string
  image: string | StaticImageData
  live: string
}

type ProjectData = {
  title: string
  description: string
  stack: string[]
  features: string[]
  gallery: Array<string | StaticImageData>
  live?: string
  github?: string
  inProgress?: boolean
}

type ProfessionalProject = ProjectData & {
  responsibilities: string[]
  challenges: string[]
  confidential: boolean
  projects?: BusinessLandingProject[]
}

const professionalProjects: ProfessionalProject[] = [
  {
    title: 'Real Estate Website',
    description:
      'A modern real estate website developed for a client, featuring a responsive design, smooth user experience, and high-performance frontend.',

    responsibilities: [
      'Built responsive pages with Next.js',
      'Implemented smooth GSAP animations',
      'Optimized performance and loading speed',
      'Created a premium user experience',
    ],

    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP'],

    features: [
      'Responsive UI',
      'Modern Animations',
      'Performance Optimized',
      'SEO Friendly',
    ],

    challenges: [
      'Maintained smooth animations across devices',
      'Optimized loading performance',
    ],

    gallery: ['/real-estate1.png', '/real-estate2.png', '/real-estate3.png'],

    confidential: false,

    live: 'https://ck-teal.vercel.app/',
  },

  {
    title: 'Business Landing Pages',

    description:
      'A collection of premium single-page business websites designed for clients with modern layouts, engaging animations, and responsive user experiences.',

    responsibilities: [
      'Designed responsive business landing pages',
      'Built reusable React components',
      'Implemented smooth GSAP animations',
      'Optimized performance and accessibility',
    ],

    stack: ['React', 'TypeScript', 'Tailwind CSS', 'GSAP'],

    features: [
      'Responsive Design',
      'Modern UI',
      'Smooth Animations',
      'Performance Optimized',
    ],

    challenges: [
      'Created unique branding for each client',
      'Maintained fast loading with rich animations',
    ],

    gallery: [],

    confidential: true,

    projects: [
      {
        name: 'Jala Dryfruits',

        description:
          'Premium dry fruits landing page featuring elegant product presentation, smooth scrolling animations, and a modern responsive design.',

        image: '/jala.png',

        live: 'https://jala-dryfruits-3l7e.vercel.app',
      },

      {
        name: 'Cupcake Home',

        description:
          'Modern bakery landing page with attractive visuals, responsive sections, and delightful user interactions.',

        image: '/cup-cake.png',

        live: 'https://cup-cake-homes.vercel.app',
      },
    ],
  },

  {
    title: 'Agricultural Manufacturing Website',

    description:
      'Designed and developed a premium corporate website for Genuine Agro Shade Net to showcase agricultural protection products, company expertise, and manufacturing capabilities with a modern, responsive user experience.',

    responsibilities: [
      'Developed responsive pages using Next.js and TypeScript',
      'Built reusable UI components with Tailwind CSS',
      'Implemented smooth animations using GSAP',
      'Optimized performance, accessibility, and SEO',
    ],

    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP'],

    features: ['Premium landing experience', 'Product showcase', 'Responsive design', 'SEO optimized'],

    challenges: [
      'Created a premium brand identity for a manufacturing company',
      'Balanced modern animations with fast loading performance',
    ],

    gallery: ['/genuine1.png', '/genuine2.png', '/genuine3.png'],

    confidential: true,

    live: 'https://genuine-agro.vercel.app',
  },
]

function ProjectCard({
  project,
  professional = false,
}: {
  project: ProjectData | ProfessionalProject
  professional?: boolean
}) {
  const businessProjects = 'projects' in project ? project.projects : undefined

  return (
    <article className="section-surface group overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/70 p-6 shadow-xl shadow-slate-200/70 dark:border-slate-700/40 dark:bg-slate-950/75 dark:shadow-slate-950/20">
      <div className="flex flex-wrap items-center gap-3">
        <p className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-cyan-600 dark:text-cyan-300">
          {professional ? 'Professional Client Work' : project.inProgress ? 'In Progress' : 'Project'}
        </p>

        {professional ? (
          <p className="text-xs text-slate-500 dark:text-slate-400">Source code is private due to client confidentiality.</p>
        ) : project.inProgress ? (
          <p className="text-xs text-slate-500 dark:text-slate-400">Building advanced full-stack products now.</p>
        ) : null}
      </div>

      <div className="mt-6 flex flex-col gap-6 lg:flex-row">
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>

          <p className="mt-4 text-slate-600 dark:text-slate-300">{project.description}</p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {professional && 'responsibilities' in project && (
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Responsibilities</p>

                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
                  {project.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">Technologies</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-slate-200/80 bg-white/80 px-3 py-1 text-xs text-slate-700 dark:border-slate-700/40 dark:bg-slate-900/80 dark:text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {professional && (
          <div className="rounded-[1.75rem] border border-slate-200/80 bg-white/80 p-5 text-sm text-slate-600 dark:border-slate-700/40 dark:bg-slate-900/90 dark:text-slate-300 lg:w-72">
            <p className="font-semibold text-slate-900 dark:text-white">Project Details</p>

            <ul className="mt-4 space-y-2">
              <li>• Responsive across all devices</li>
              <li>• Modern UI/UX</li>
              <li>• Performance optimized</li>
              <li>• Production-ready frontend</li>
            </ul>
          </div>
        )}
      </div>

      {businessProjects ? (
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {businessProjects.map((item) => (
            <div key={item.name} className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 dark:border-slate-700/40 dark:bg-slate-900">
              <Image src={item.image} alt={item.name} width={700} height={450} className="h-60 w-full object-cover" />

              <div className="p-5">
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white">{item.name}</h4>

                <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{item.description}</p>

                <a href={item.live} target="_blank" rel="noreferrer" className="mt-5 inline-flex rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {project.gallery.map((image, index) => (
              <div key={`${project.title}-${index}`} className="overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-100/80 dark:border-slate-700/40 dark:bg-slate-950/70">
                <Image src={image} alt={`${project.title}-${index}`} width={400} height={260} className="h-40 w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300">
                Live Demo
              </a>
            )}

            {!project.inProgress && !professional && project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700/60 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:bg-slate-800">
                View Code
              </a>
            )}
          </div>
        </>
      )}
    </article>
  )
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-slate-200/70 px-6 py-24 dark:border-slate-700/50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-600 dark:text-cyan-400">Featured work</p>

            <h2 className="mt-3 text-4xl font-semibold text-slate-900 sm:text-5xl dark:text-white">Professional client projects & personal products.</h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-400">
            Three professional client builds followed by polished personal applications that showcase UX, architecture, and deployment readiness.
          </p>
        </div>

        <div className="space-y-10">
          {professionalProjects.map((project) => (
            <ProjectCard key={project.title} project={project} professional />
          ))}
        </div>
      </div>
    </section>
  )
}