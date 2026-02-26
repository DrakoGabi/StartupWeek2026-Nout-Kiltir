'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { NAV_LINKS, SOCIAL_LINKS, BRAND_SLOGAN } from '@/lib/constants'
import { useStore } from '@/lib/store'
import styles from './MenuOverlay.module.css'

export default function MenuOverlay() {
  const { isMenuOpen, closeMenu } = useStore()
  const pathname = usePathname()

  useEffect(() => { closeMenu() }, [pathname])
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
  }, [isMenuOpen])

  return (
    <div className={[styles.overlay, isMenuOpen ? styles.open : ''].join(' ')}>
      {/* Bande tricolore gauche */}
      <div className={styles.colorBar}>
        <span /><span /><span />
      </div>

      <nav className={styles.nav}>
        {NAV_LINKS.map((link, i) => (
          <div key={link.href} className={styles.linkWrap}>
            <Link
              href={link.href}
              className={styles.link}
              style={{ transitionDelay: isMenuOpen ? `${0.25 + i * 0.07}s` : '0s' }}
            >
              <span className={styles.linkNum}>0{i + 1}</span>
              {link.label}
            </Link>
          </div>
        ))}
      </nav>

      <div className={styles.footer}>
        <span className={styles.slogan}>{BRAND_SLOGAN}</span>
        <div className={styles.socials}>
          {SOCIAL_LINKS.map(s => (
            <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className={styles.social}>
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
