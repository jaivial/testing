import { HeroUIProvider } from '@heroui/react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PowerLift App',
  description: 'Training planner for powerlifting trainers and athletes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeroUIProvider>
          {children}
        </HeroUIProvider>
      </body>
    </html>
  )
}
