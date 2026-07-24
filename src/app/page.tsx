"use client"

import { AnimatePresence, motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import SkillsSection from '@/components/SkillsSection'
import ExperienceSection from '@/components/ExperienceSection'
import ProjectsSection from '@/components/ProjectsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactSection from '@/components/ContactSection'

export default function HomePage() {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key="portfolio"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -24 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
        className="relative overflow-x-hidden"
      >
        <Navigation />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </motion.main>
    </AnimatePresence>
  )
}
