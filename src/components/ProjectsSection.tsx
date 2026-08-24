"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import {
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  Building2,
  CircleDashed,
  CreditCard,
  Database,
  ExternalLink,
  Github,
  Globe,
  ImageIcon,
  Layers3,
  LockKeyhole,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

type BusinessLandingProject = {
  name: string;
  description: string;
  image: string | StaticImageData;
  live: string;
};

type ProjectData = {
  title: string;
  description: string;
  stack: string[];
  features: string[];
  gallery: Array<string | StaticImageData>;
  live?: string;
  github?: string;
  inProgress?: boolean;
};

type ProfessionalProject = ProjectData & {
  responsibilities: string[];
  challenges: string[];
  confidential: boolean;
  projects?: BusinessLandingProject[];
};

const churnList = [
  "Performance improvements",
  "Responsive design",
  "SEO",
  "Animations",
];

const professionalProjects: ProfessionalProject[] = [
  {
    title: "Genuine Agro Manufacturing Website",
    description:
      "Premium corporate website designed to showcase manufacturing expertise, product categories, and brand credibility with a luxury B2B presentation layered across responsive pages and fast front-end delivery.",
    responsibilities: [
      "Built the premium brand-led experience in Next.js",
      "Crafted reusable UI sections with a professional visual system",
      "Optimized content structure for speed, clarity, and conversion",
      "Enabled polished motion and a refined mobile presentation",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "SEO"],
    features: [
      "Product showcase experience",
      "Responsive design",
      "Performance improvements",
      "SEO-ready structure",
      "Smooth animations",
    ],
    challenges: [
      "Created a premium manufacturing identity without visual clutter",
      "Balanced rich motion with performance and accessibility goals",
    ],
    gallery: ["/genuine1.png", "/genuine2.png", "/genuine3.png"],
    confidential: true,
    live: "https://genuine-agro.vercel.app",
  },
  {
    title: "Real Estate Website",
    description:
      "Client-facing real estate landing experience with a polished conversion funnel, premium listing presentation, and responsive layouts engineered to feel trustworthy and high-end.",
    responsibilities: [
      "Built a high-end responsive real estate flow",
      "Implemented modern motion for better storytelling",
      "Focused on SEO, responsiveness, and high visual clarity",
      "Delivered a clean production-ready frontend foundation",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "SEO"],
    features: [
      "Luxury visual UI",
      "Responsive design",
      "Performance improvements",
      "Improved SEO structure",
      "Smooth animations",
    ],
    challenges: [
      "Maintained cinematic motion while preserving fast load times",
      "Structured content so premium visual storytelling remained clear on mobile",
    ],
    gallery: ["/real-estate1.png", "/real-estate2.png", "/real-estate3.png"],
    confidential: false,
    live: "https://ck-teal.vercel.app/",
    github: "https://github.com/Madebydev-Babli/real-estate",
  },
  {
    title: "Business Landing Pages",
    description:
      "A curated lineup of premium single-page business websites built for branded storytelling, conversion-focused sections, smooth motion, and a highly responsive presentation across devices.",
    responsibilities: [
      "Designed and built reusable landing page sections",
      "Created a polished client-ready visual style",
      "Prioritized fast loading and refined experience quality",
      "Shipped beautiful interactions that stay lightweight",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "GSAP", "Responsive UI"],
    features: [
      "Responsive design",
      "Modern UI",
      "Smooth animations",
      "Performance improvements",
      "SEO-friendly structure",
    ],
    challenges: [
      "Created unique brand expression for each client",
      "Maintained premium visuals without sacrificing page speed",
    ],
    gallery: [],
    confidential: true,
    projects: [
      {
        name: "Jala Dryfruits",
        description:
          "Premium dry fruits experience featuring elegant product presentation, smooth scrolling interactions, and a clean conversion-first structure.",
        image: "/jala.png",
        live: "https://jala-dryfruits-3l7e.vercel.app",
      },
      {
        name: "Cupcake Home",
        description:
          "Delightful bakery landing page with polished visuals, a responsive layout, and a playful story-driven user experience.",
        image: "/cup-cake.png",
        live: "https://cup-cake-homes.vercel.app",
      },
    ],
  },
];

const featuredProjectMetrics = [
  { label: "Products Managed", value: "250+", icon: Layers3 },
  { label: "Orders", value: "1.8K", icon: BarChart3 },
  { label: "Authentication", value: "Secure", icon: LockKeyhole },
  { label: "Payments", value: "Razorpay", icon: CreditCard },
  { label: "AI Integration", value: "OpenAI", icon: BrainCircuit },
  { label: "REST APIs", value: "Scalable", icon: Database },
  { label: "Image Upload", value: "Cloudinary", icon: ImageIcon },
  { label: "Database", value: "MongoDB", icon: Database },
];

const engineeringHighlights = [
  { value: "10+", label: "Projects Built" },
  { value: "5+", label: "Professional Client Projects" },
  { value: "3", label: "Major Full Stack Products" },
  { value: "8+", label: "Core Engineering Stacks" },
];

const featureBadges = ["AI", "Featured", "Production Ready"];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-600 dark:text-cyan-400">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          {title}
        </h2>
      </div>
      <p className="max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400">
        {description}
      </p>
    </div>
  );
}

function ProjectCard({
  project,
  professional = false,
}: {
  project: ProjectData | ProfessionalProject;
  professional?: boolean;
}) {
  const businessProjects = "projects" in project ? project.projects : undefined;
  const isProfessionalProject = professional && "confidential" in project;
  const clientConfidential = isProfessionalProject
    ? project.confidential
    : false;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="section-surface group relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/70 p-6 shadow-[0_20px_90px_-30px_rgba(34,211,238,0.25)] backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-950/75"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_30%)] opacity-80" />
      <div className="relative">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-700 dark:text-cyan-300">
            {professional
              ? "Professional Client Work"
              : project.inProgress
                ? "Building"
                : "Feature Project"}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {professional
              ? clientConfidential
                ? "Developed professionally for a client."
                : "Source code available on GitHub."
              : project.inProgress
                ? "Enterprise product engineering in motion."
                : "Production-ready execution."}
          </span>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
              {project.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {project.description}
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {professional && "responsibilities" in project && (
                <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 dark:border-slate-700/40 dark:bg-slate-900/70">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    Responsibilities
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
                    {project.responsibilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 dark:border-slate-700/40 dark:bg-slate-900/70">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  Tech Stack
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1 text-xs text-slate-700 dark:border-slate-700/50 dark:bg-slate-950 dark:text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 dark:border-slate-700/40 dark:bg-slate-900/70">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  Challenges
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
                  {("challenges" in project ? project.challenges : []).map(
                    (item) => (
                      <li key={item}>{item}</li>
                    ),
                  )}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 dark:border-slate-700/40 dark:bg-slate-900/70">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  Highlights
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
                  {project.features.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200/70 bg-slate-950/90 p-4 text-sm text-slate-300 shadow-[0_20px_70px_-30px_rgba(56,189,248,0.45)] dark:border-slate-700/50">
            <div className="flex items-center gap-2 text-cyan-300">
              <Sparkles size={16} />
              <span className="font-semibold">Engineering Summary</span>
            </div>
            <ul className="mt-4 space-y-3">
              {churnList.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3">
              <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-300">
                Delivery Quality
              </p>
              <p className="mt-1 text-sm text-white">
                Responsive design, SEO-friendly structure, polished
                interactions, and production-focused performance discipline.
              </p>
            </div>
          </div>
        </div>

        {businessProjects ? (
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {businessProjects.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -6, scale: 1.01 }}
                className="overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white/85 dark:border-slate-700/50 dark:bg-slate-900"
              >
                <div className="overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={700}
                    height={450}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {item.name}
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                  <a
                    href={item.live}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                  >
                    Live Demo
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="mt-8">
            <div className="grid gap-3 sm:grid-cols-3">
              {project.gallery.map((image, index) => (
                <div
                  key={`${project.title}-${index}`}
                  className="overflow-hidden rounded-[1.4rem] border border-slate-200/80 bg-slate-100/80 dark:border-slate-700/40 dark:bg-slate-950/80"
                >
                  <Image
                    src={image}
                    alt={`${project.title}-${index}`}
                    width={400}
                    height={260}
                    className="h-40 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.25)] transition hover:-translate-y-0.5 hover:bg-cyan-300"
                >
                  Live Demo
                  <ExternalLink size={16} />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700/60 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  GitHub
                  <Github size={16} />
                </a>
              )}
              {professional && clientConfidential && (
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-700 dark:border-slate-700/60 dark:bg-slate-900/80 dark:text-slate-200">
                  Source Code Private
                  <ShieldCheck size={16} />
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </motion.article>
  );
}

function FeatureStatsCard({ title, value }: { title: string; value: string }) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 shadow-[0_15px_50px_-30px_rgba(34,211,238,0.45)] backdrop-blur-sm"
    >
      <p className="text-2xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-xs uppercase tracking-[0.24em] text-slate-300">
        {title}
      </p>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="border-t border-slate-200/70 px-6 py-24 dark:border-slate-700/50"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected work"
          title="A premium three-part portfolio story built for agencies, recruiters, and modern product teams."
          description="The section is intentionally structured to establish trust fast: approved client delivery, a flagship AI product, and enterprise application work that signals production readiness."
        />

        <div className="space-y-12">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Section 1"
              title="Professional Client Work"
              description="Real client outcomes, premium execution, and polished delivery across responsive web experiences that were designed to perform in production environments."
            />
            <div className="space-y-6">
              {professionalProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  professional
                />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <SectionHeading
              eyebrow="Section 2"
              title="⭐ Featured Product"
              description="WishCart is positioned as the flagship AI-powered MERN ecommerce platform, engineered to feel like a modern SaaS product rather than a demo."
            />

            <motion.article
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              whileHover={{ y: -5 }}
              className="section-surface relative overflow-hidden rounded-[2.2rem] border border-cyan-400/30 bg-slate-950/90 p-6 shadow-[0_0_80px_rgba(34,211,238,0.15)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.36),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.28),transparent_26%),linear-gradient(135deg,rgba(15,23,42,0.92),rgba(3,7,18,0.98))]" />
              <div className="relative">
                <div className="flex flex-wrap items-center gap-3">
                  {featureBadges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-200"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                  <div>
                    <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                      WishCart
                    </h3>
                    <p className="mt-3 text-lg text-cyan-100">
                      AI Powered MERN Ecommerce Platform
                    </p>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
                      A production-ready AI-powered ecommerce platform built
                      using the MERN stack featuring secure authentication,
                      admin dashboard, intelligent AI product description
                      generation, payment integration, Cloudinary media
                      management, responsive UI, and scalable REST APIs.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {[
                        "React",
                        "Node.js",
                        "Express.js",
                        "MongoDB",
                        "JWT Authentication",
                        "Cloudinary",
                        "Razorpay",
                        "OpenAI / Gemini AI",
                        "Tailwind CSS",
                        "REST API",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-sm font-semibold text-white">
                          Features
                        </p>
                        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
                          <li>AI Product Description Generator</li>
                          <li>Admin Dashboard</li>
                          <li>Customer Dashboard</li>
                          <li>Authentication</li>
                          <li>Product Management</li>
                          <li>Categories</li>
                          <li>Shopping Cart</li>
                          <li>Wishlist</li>
                        </ul>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-sm font-semibold text-white">
                          Product Lifecycle
                        </p>
                        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
                          <li>Checkout</li>
                          <li>Razorpay Payments</li>
                          <li>Cloudinary Upload</li>
                          <li>Order Tracking</li>
                          <li>Responsive Design</li>
                          <li>REST APIs</li>
                          <li>Performance Optimized</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href="https://ecommerce-website-mern-frontend-vc2w.onrender.com"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
                      >
                        Live Demo
                        <ExternalLink size={16} />
                      </a>
                      <a
                        href="https://github.com/madebydev-babli/Ecommerce-Website-MERN"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                      >
                        View Source Code
                        <Github size={16} />
                      </a>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-[1.8rem] border border-cyan-400/25 bg-[linear-gradient(135deg,rgba(34,211,238,0.18),rgba(15,23,42,0.55))] p-4">
                      <div className="flex items-center gap-2 text-cyan-200">
                        <Sparkles size={16} />
                        <span className="text-sm font-semibold">Metrics</span>
                      </div>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {featuredProjectMetrics.map(
                          ({ icon: Icon, label, value }) => (
                            <motion.div
                              key={label}
                              whileHover={{ scale: 1.03, y: -3 }}
                              className="rounded-2xl border border-white/10 bg-slate-900/70 p-4"
                            >
                              <div className="flex items-center justify-between text-cyan-200">
                                <Icon size={16} />
                                <span className="text-[10px] uppercase tracking-[0.24em] text-slate-300">
                                  {label}
                                </span>
                              </div>
                              <p className="mt-3 text-xl font-semibold text-white">
                                {value}
                              </p>
                            </motion.div>
                          ),
                        )}
                      </div>
                    </div>

                    <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-5">
                      <p className="text-sm font-semibold text-white">
                        What makes the product feel premium
                      </p>
                      <div className="mt-4 grid gap-3">
                        {[
                          "Glowing card surfaces and premium depth",
                          "Responsive architecture for all screen sizes",
                          "AI-assisted product description generation",
                          "Scalable admin and customer dashboards",
                        ].map((point) => (
                          <div
                            key={point}
                            className="flex items-center gap-2 text-sm text-slate-300"
                          >
                            <span className="h-2 w-2 rounded-full bg-cyan-300" />
                            {point}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>

          <div className="space-y-6">
            <SectionHeading
              eyebrow="Section 3"
              title="Building Enterprise Applications"
              description="These builds position the portfolio as enterprise-oriented work with strong architecture, secure flows, and clear roadmap execution."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              {[
                {
                  title: "Clinic Management System",
                  progress: "50%",
                  description:
                    "Enterprise healthcare platform with secure authentication, appointment scheduling, doctor dashboard, patient management, admin analytics, protected routes, and scalable backend architecture.",
                  completed: [
                    "Authentication",
                    "Admin Dashboard",
                    "Doctor Dashboard",
                    "Patient Dashboard",
                    "Appointment Booking",
                    "Protected Routes",
                  ],
                  upcoming: [
                    "Medical Records",
                    "Notifications",
                    "Reports",
                    "Billing",
                    "UI design",
                  ],
                  expectedCompletion: "September 2026",
                  badge: "Building",
                },
                {
                  title: "AI Job Platform",
                  progress: "15%",
                  description:
                    "AI-powered recruitment platform designed for recruiters and job seekers featuring intelligent resume analysis, ATS scoring, AI job matching, recruiter dashboard, candidate dashboard, interview preparation, and resume generation.",
                  completed: [
                    "Authentication",
                    "Database Design",
                    "Landing Page",
                  ],
                  upcoming: [
                    "User System",
                    "AI Resume Analyzer",
                    "ATS Score",
                    "Resume Builder",
                    "Interview AI",
                    "Recruiter Dashboard",
                    "Candidate Dashboard",
                    "Job Recommendation Engine",
                  ],
                  expectedCompletion: "October 2026",
                  badge: "Building",
                },
              ].map((item) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, ease: "easeOut" }}
                  whileHover={{ y: -4 }}
                  className="section-surface overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/70 p-6 shadow-[0_18px_70px_-30px_rgba(34,211,238,0.32)] dark:border-slate-700/50 dark:bg-slate-950/75"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-700 dark:text-cyan-300">
                        {item.badge}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-300">
                        {item.progress}
                      </span>
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      Expected completion {item.expectedCompletion}
                    </span>
                  </div>

                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: item.progress }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full bg-[linear-gradient(90deg,#22d3ee,#60a5fa,#a855f7)]"
                    />
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 dark:border-slate-700/50 dark:bg-slate-900/80">
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        Completed
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.completed.map((feature) => (
                          <span
                            key={feature}
                            className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-600 dark:text-emerald-300"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 dark:border-slate-700/50 dark:bg-slate-900/80">
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        Upcoming
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.upcoming.map((feature) => (
                          <span
                            key={feature}
                            className="rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1 text-xs text-violet-600 dark:text-violet-300"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="https://github.com/madebydev-babli/Healthcare"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700/60 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:bg-slate-800"
                    >
                      GitHub
                      <Github size={16} />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <SectionHeading
              eyebrow="Engineering Highlights"
              title="A now-credible signal for scalable product delivery"
              description="These highlight indicators are designed to support the recruiter mental model: modern systems thinking, AI capability, payments, authentication, and production-grade full stack execution."
            />

            <div className="grid gap-4 md:grid-cols-4">
              {engineeringHighlights.map(({ label, value }) => (
                <FeatureStatsCard key={label} title={label} value={value} />
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "AI Integration",
                "Payment Gateway",
                "Authentication",
                "REST APIs",
                "MongoDB",
                "Cloudinary",
                "Responsive Design",
                "Performance Optimization",
                "SEO",
                "Modern UI",
                "Animations",
              ].map((skill) => (
                <div
                  key={skill}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
