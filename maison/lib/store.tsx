'use client'

import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

interface StoreContextType {
  isMenuOpen: boolean
  toggleMenu: () => void
  closeMenu: () => void
}

const StoreContext = createContext<StoreContextType | null>(null)

export function StoreProvider({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(prev => !prev)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <StoreContext.Provider value={{ isMenuOpen, toggleMenu, closeMenu }}>
      {children}
    </StoreContext.Provider>
  )
}

export function useStore() {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('useStore must be used inside StoreProvider')
  return ctx
}
