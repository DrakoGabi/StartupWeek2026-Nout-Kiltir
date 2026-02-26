'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

/**
 * Enveloppe chaque page avec une animation d'entrée/sortie
 * Le voile noir monte et descend à chaque changement de route
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}

        {/* Voile de transition (entre les pages) */}
        <motion.div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'var(--color-text)',
            zIndex: 1000,
            originY: 0,
            pointerEvents: 'none',
          }}
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
          exit={{ scaleY: 1, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }}
        />
      </motion.div>
    </AnimatePresence>
  )
}
