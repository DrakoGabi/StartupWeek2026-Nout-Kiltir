import type { Metadata } from 'next'
import '@/styles/globals.css'
import Header from '@/components/layout/Header'
import MenuOverlay from '@/components/layout/MenuOverlay'
import PageTransition from '@/components/animations/PageTransition'
import CustomCursor from '@/components/ui/CustomCursor'
import { StoreProvider } from '@/lib/store'
import { Squada_One, Patrick_Hand } from 'next/font/google'

const squadaOne = Squada_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-display',
})

const patrickHand = Patrick_Hand({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-script',
})

export const metadata: Metadata = {
  title: "Nout' Kiltir — Parce que la Réunion se partage",
  description: "Découvrez et partagez la culture réunionnaise authentique.",
  openGraph: {
    title: "Nout' Kiltir",
    description: "Parce que la Réunion se partage",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${squadaOne.variable} ${patrickHand.variable}`}>
      <body>
        <StoreProvider>
          <CustomCursor />
          <MenuOverlay />
          <Header />
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
        </StoreProvider>
      </body>
    </html>
  )
}
