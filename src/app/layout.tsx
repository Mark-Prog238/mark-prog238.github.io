import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'

// Load Inter font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Load Poppins font for headings
const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Mark Dev | Full Stack Developer',
  description: 'Personal portfolio showcasing my projects and skills as a Full Stack Developer',
  authors: [{ name: 'Mark Dev', url: 'https://github.com/Mark-Prog238' }],
  keywords: ['portfolio', 'developer', 'full stack', 'react', 'next.js'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mark-prog238.github.io',
    title: 'Mark Dev | Full Stack Developer',
    description: 'Personal portfolio showcasing my projects and skills as a Full Stack Developer',
    siteName: 'Mark Dev Portfolio',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Add a base tag to ensure relative paths work correctly */}
        <base href="/" />
        {/* Add these meta tags to ensure proper rendering */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased bg-white text-gray-800 min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  )
}
