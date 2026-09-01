"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";

type Project = {
  number: string;
  category: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  technologies: string[];
  features?: string[];
  status?: string;
  images: string | string[];
  imageLabels?: string | string[];
  links: {
    label: string;
    href: string;
    icon?: React.ComponentType<{ size: number }>;
  }[];
};

const projects: Project[] = [
  {
    number: "01",
    category: "Full-Stack Application",
    title: "Clinic Management System",
    shortDescription:
      "A full-stack clinic management system designed to connect patients, doctors, and administrators through a centralized platform.",
    detailedDescription:
      "The application includes appointment booking, doctor profiles, doctor verification, patient management, administrative controls, authentication, and role-based dashboards.",
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "NextAuth"],
    features: [
      "Patient, Doctor, and Admin workflows",
      "Appointment booking and management",
      "Doctor profile and verification workflow",
      "Admin dashboard and management",
      "Authentication and protected routes",
      "Patient appointment history",
      "Database-driven application",
      "Responsive interface",
    ],
    status:
      "Actively being refined with ongoing improvements to the UI, responsive experience, system workflows, and existing functionality.",
    images: "/clinic.png",
    links: [
      {
        label: "Live Demo",
        href: "https://healthcare-jet-sigma.vercel.app/",
        icon: ExternalLink,
      },
      {
        label: "GitHub",
        href: "https://github.com/Madebydev-babli/HealthCare",
        icon: Github,
      },
    ],
  },

  {
    number: "02",
    category: "Full-Stack Application",
    title: "MERN E-Commerce Platform",
    shortDescription:
      "A complete e-commerce platform built with the MERN stack, featuring a customer-facing storefront and a dedicated administration system.",
    detailedDescription:
      "The application handles product management, user interactions, orders, payments, cloud-based media, and administrative operations through separate interfaces.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Razorpay",
      "Cloudinary",
    ],
    features: [
      "Customer shopping experience",
      "Product browsing and management",
      "Admin dashboard",
      "Product CRUD operations",
      "Order management",
      "Razorpay payment integration",
      "Cloudinary image management",
      "Authentication",
      "AI-assisted product description generation",
      "Responsive UI",
    ],
    images: ["/ecommerce.png", "/admin.png"],
    imageLabels: ["User Store", "Admin Panel"],
    links: [
      {
        label: "User Store",
        href: "https://ecommerce-website-mern-frontend-vc2w.onrender.com/",
        icon: ExternalLink,
      },
      {
        label: "Admin Panel",
        href: "https://ecommerce-website-mern-1-admin.onrender.com/",
        icon: ExternalLink,
      },
      {
        label: "GitHub",
        href: "https://github.com/Madebydev-babli/Ecommerce-Website-MERN",
        icon: Github,
      },
    ],
  },
  {
    number: "03",
    category: "Client Projects",
    title: "Client Web Projects",
    shortDescription:
      "A selection of client projects including business websites and dedicated landing pages built for real-world business requirements.",
    detailedDescription:
      "A collection of client-focused web projects developed for different business requirements. These projects include complete business websites and dedicated landing pages, with a focus on responsive design, modern user interfaces, and practical business needs.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Business website development",
      "Dedicated landing page development",
      "Responsive layouts",
      "Reusable UI sections",
      "Modern visual presentation",
      "Real client requirements",
      "Cross-device optimization",
      "Client-focused development",
    ],

    images: ["/real-estate1.png", "/jala.png", "/enviro.png", "/genuine.png"],

    imageLabels: [
      "Business Website",
      "Landing Page",
      "Client Website",
      "Client Website",
    ],

    links: [
      {
        label: "Business Website",
        href: "https://ck-teal.vercel.app/",
        icon: ExternalLink,
      },
      {
        label: "Landing Page",
        href: "https://jala-dryfruits-3l7e.vercel.app/",
        icon: ExternalLink,
      },
      {
        label: "Client Website",
        href: "https://enviro-polymers.vercel.app/",
        icon: ExternalLink,
      },
      {
        label: "Client Website",
        href: "https://genuine-agro.vercel.app/",
        icon: ExternalLink,
      },
    ],
  },
  {
    number: "04",
    category: "Personal Product",
    title: "Private Vault",
    shortDescription:
      "A private digital vault designed to provide a personal space for securely organizing meaningful memories, notes, media, and personal content.",
    detailedDescription:
      "The project combines a modern interactive interface with backend functionality and protected access, focusing on privacy, usability, and a memorable user experience.",
    technologies: ["Next.js", "Node.js", "MongoDB", "GSAP"],
    features: [
      "Protected private access",
      "Personal content management",
      "Database-backed content",
      "Media handling",
      "Interactive animations",
      "Responsive design",
      "Modern full-stack architecture",
    ],
    images: "/private.png",
    links: [],
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="border-t border-slate-200/70 px-6 py-24 dark:border-slate-700/50"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-600 dark:text-cyan-400">
            Portfolio
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
            A selection of full-stack applications, client work, and personal
            products that demonstrate real-world development across different
            domains.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => {
            const isMultiImage = Array.isArray(project.images);
            const images: string[] = isMultiImage
              ? (project.images as string[])
              : [project.images as string];
            const labels: string[] =
              isMultiImage && project.imageLabels
                ? Array.isArray(project.imageLabels)
                  ? (project.imageLabels as string[])
                  : [project.imageLabels as string]
                : [];

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="section-surface group relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/70 shadow-[0_20px_90px_-30px_rgba(34,211,238,0.25)] backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-950/75"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_30%)] opacity-80" />

                <div className="relative overflow-hidden">
                  {/* Project Images Gallery */}
                  <div
                    className={`grid gap-4 ${isMultiImage ? "md:grid-cols-2" : "grid-cols-1"}`}
                  >
                    {images.map((image, idx) => (
                      <div
                        key={`${project.title}-img-${idx}`}
                        className="relative overflow-hidden"
                      >
                        <div className="relative h-64 w-full overflow-hidden rounded-t-[2rem] bg-slate-200 dark:bg-slate-800">
                          <Image
                            src={image}
                            alt={
                              labels[idx] ||
                              `${project.title} screenshot ${idx + 1}`
                            }
                            fill
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        {labels[idx] && (
                          <div className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
                            {labels[idx]}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    {/* Project Number and Category */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                      <div className="flex items-baseline gap-3">
                        <span className="text-4xl font-bold text-cyan-400/30 dark:text-cyan-500/25">
                          {project.number}
                        </span>
                        <div>
                          <span className="inline-block rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-700 dark:text-cyan-300">
                            {project.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Title and Descriptions */}
                    <div className="mt-6">
                      <h3 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-base font-medium text-cyan-600 dark:text-cyan-300">
                        {project.shortDescription}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                        {project.detailedDescription}
                      </p>
                      {project.status && (
                        <p className="mt-3 text-sm italic text-slate-500 dark:text-slate-400">
                          {project.status}
                        </p>
                      )}
                    </div>

                    {/* Technology Stack and Features */}
                    <div className="mt-6 grid gap-6 lg:grid-cols-2">
                      {/* Tech Stack */}
                      <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 dark:border-slate-700/40 dark:bg-slate-900/70">
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">
                          Technology
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1 text-xs text-slate-700 dark:border-slate-700/50 dark:bg-slate-950 dark:text-slate-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Features - All visible, no truncation */}
                      {project.features && project.features.length > 0 && (
                        <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 dark:border-slate-700/40 dark:bg-slate-900/70">
                          <p className="text-sm font-semibold text-slate-900 dark:text-white">
                            Key Features
                          </p>
                          <ul className="mt-3 grid gap-2 sm:grid-cols-2 text-xs text-slate-600 dark:text-slate-300">
                            {project.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-start gap-2"
                              >
                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Links */}
                    {project.links.length > 0 && (
                      <div className="mt-6 flex flex-wrap gap-3">
                        {project.links.map((link) => {
                          const Icon = link.icon;
                          return (
                            <a
                              key={link.label}
                              href={link.href}
                              target={
                                link.href.startsWith("http")
                                  ? "_blank"
                                  : undefined
                              }
                              rel={
                                link.href.startsWith("http")
                                  ? "noreferrer"
                                  : undefined
                              }
                              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-400 hover:bg-slate-100 dark:border-slate-700/60 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:bg-slate-800"
                            >
                              {link.label}
                              {Icon && <Icon size={16} />}
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-[2rem] border border-slate-200/80 bg-white/70 p-10 text-center dark:border-slate-700/40 dark:bg-slate-950/75"
        >
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Ready to work together?
          </h3>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Let's discuss your project needs and how I can help bring your ideas
            to life.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-8 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300"
          >
            Get in Touch
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
