'use client'

import { useEffect, useRef } from 'react'

/**
 * Curseur custom avec follower fluide
 * Se désactive automatiquement sur mobile (touch devices)
 */
export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Pas de curseur custom sur touch
    if (window.matchMedia('(pointer: coarse)').matches) return

    document.body.style.cursor = 'none'

    let mouseX = 0, mouseY = 0
    let followerX = 0, followerY = 0
    let animId: number

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (cursorRef.current) {
        cursorRef.current.style.left = mouseX + 'px'
        cursorRef.current.style.top = mouseY + 'px'
      }
    }

    const animate = () => {
      followerX += (mouseX - followerX) * 0.12
      followerY += (mouseY - followerY) * 0.12
      if (followerRef.current) {
        followerRef.current.style.left = followerX + 'px'
        followerRef.current.style.top = followerY + 'px'
      }
      animId = requestAnimationFrame(animate)
    }

    // Agrandir le curseur sur les éléments cliquables
    const onEnter = () => cursorRef.current?.classList.add('is-hover')
    const onLeave = () => cursorRef.current?.classList.remove('is-hover')

    const addHoverListeners = () => {
      document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }

    document.addEventListener('mousemove', onMouseMove)
    animId = requestAnimationFrame(animate)
    addHoverListeners()

    return () => {
      document.body.style.cursor = ''
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  )
}
