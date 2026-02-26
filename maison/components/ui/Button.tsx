import Link from 'next/link'
import styles from './Button.module.css'

interface ButtonProps {
  href?: string
  onClick?: () => void
  children: React.ReactNode
  variant?: 'primary' | 'ghost' | 'yellow'
  className?: string
}

export default function Button({ href, onClick, children, variant = 'primary', className }: ButtonProps) {
  const cls = [styles.btn, styles[variant], className].filter(Boolean).join(' ')

  if (href) {
    return <Link href={href} className={cls}>{children}</Link>
  }
  return <button onClick={onClick} className={cls}>{children}</button>
}
