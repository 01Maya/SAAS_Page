'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface SectionObserverProps {
  children: React.ReactNode
  id: string
}

export function SectionObserver({ children, id }: SectionObserverProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" })

  useEffect(() => {
    if (isInView) {
      const navLinks = document.querySelectorAll('nav a')
      navLinks.forEach((link) => {
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('text-primary')
        } else {
          link.classList.remove('text-primary')
        }
      })
    }
  }, [isInView, id])

  return (
    <motion.section
      ref={ref}
      id={id}
      className="scroll-mt-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  )
}

