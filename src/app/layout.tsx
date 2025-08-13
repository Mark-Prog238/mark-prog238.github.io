import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../contexts/ThemeContext'
import ParticleBackground from '../components/ParticleBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mark Dev | Full Stack Developer',
  description: 'Personal portfolio showcasing my projects and skills as a Full Stack Developer',
  authors: [{ name: 'Mark Dev', url: 'https://github.com/Mark-Prog238' }],
  keywords: ['portfolio', 'developer', 'full stack', 'react', 'next.js'],
  openGraph: {
    title: 'Mark Dev | Full Stack Developer',
    description: 'Personal portfolio showcasing my projects and skills as a Full Stack Developer',
    url: 'https://mark-prog238.github.io/',
    siteName: 'Mark Dev Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Mark Dev | Full Stack Developer',
    description: 'Personal portfolio showcasing my projects and skills as a Full Stack Developer',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen flex flex-col`}>
        <ThemeProvider>
          <ParticleBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
