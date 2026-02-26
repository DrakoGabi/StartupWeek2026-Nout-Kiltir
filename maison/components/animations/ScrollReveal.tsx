'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number       // délai en secondes (ex: 0.2)
  className?: string
  direction?: 'up' | 'left' | 'right'
}

/**
 * Enveloppez n'importe quel élément avec <ScrollReveal>
 * pour qu'il apparaisse en scrollant
 * 
 * Exemples:
 *   <ScrollReveal><h2>Mon titre</h2></ScrollReveal>
 *   <ScrollReveal delay={0.2}><p>Mon texte</p></ScrollReveal>
 */
export default function ScrollReveal({
  children,
  delay = 0,
  className,
  direction = 'up',
}: ScrollRevealProps) {
  const initialY = direction === 'up' ? 50 : 0
  const initialX = direction === 'left' ? -50 : direction === 'right' ? 50 : 0

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: initialY, x: initialX }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
