'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { HEADER_SECONDARY } from '@/lib/constants'
import { useStore } from '@/lib/store'
import styles from './Header.module.css'
import Image from 'next/image'


export default function Header() {
  const { isMenuOpen, toggleMenu } = useStore()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={[
      styles.header,
      scrolled ? styles.scrolled : '',
      isMenuOpen ? styles.menuOpen : '',
    ].join(' ')}>

      {/* Logo Nout' Kiltir */}
      <Link href="/" className={styles.logo}>
          <Image
            src="/images/logo/logo.png"
            alt="Nout' Kiltir"
            width={120}
            height={60}
            priority   // ← charge en priorité car c'est dans le header
          />
        </Link>

      <div className={styles.right}>
        {HEADER_SECONDARY.map(link => (
          <Link key={link.href} href={link.href} className={styles.navCta}>
            {link.label}
          </Link>
        ))}

        <button className={styles.menuBtn} onClick={toggleMenu} aria-label="Menu">
          <div className={styles.burger}>
            <span /><span /><span />
          </div>
          Menu
        </button>
      </div>
    </header>
  )
}
