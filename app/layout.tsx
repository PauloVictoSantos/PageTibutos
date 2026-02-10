import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "next-themes";
import { Services } from "@/components/services"
import { Schedule } from "@/components/schedule"
import { Documents } from "@/components/documents"
import { Instructions } from "@/components/instructions"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Prefeitura Municipal de Presidente Figueiredo',
  description: 'Portal oficial da Prefeitura Municipal de Presidente Figueiredo - Por Nossa Terra, Por Nossa Gente. Serviços, informações e atendimento ao cidadão.',
  generator: 'Paulo victor',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}

          <Services />
          <Schedule />
          <Documents />
          <Instructions />
          <FAQ />
          <Contact />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
