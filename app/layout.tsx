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

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: {
    default: 'Portal de Tributos | Prefeitura de Presidente Figueiredo',
    template: '%s | Tributos Presidente Figueiredo'
  },
  description: 'Portal oficial da Secretaria de Finanças. Emissão de IPTU, Alvará, ISS, Certidões Negativas e orientações tributárias de Presidente Figueiredo - AM.',
  generator: 'Paulo Victor',
  keywords: ['Tributos', 'Presidente Figueiredo', 'IPTU', 'ISSQN', 'Alvará', 'SEMPLAF'],
  authors: [{ name: 'Paulo Victor' }],
  icons: {
    icon: [
      {
        url: 'https://www.presidentefigueiredo.am.gov.br/wp-content/uploads/2021/01/cropped-LOGO-COLORIDA-PREFEITURA_-sem-fundo-150x150.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: [
      { 
        url: 'https://www.presidentefigueiredo.am.gov.br/wp-content/uploads/2021/01/cropped-LOGO-COLORIDA-PREFEITURA_-sem-fundo-150x150.png', 
        sizes: '180x180' 
      }
    ],
  },
  openGraph: {
    title: 'Portal de Tributos - Presidente Figueiredo',
    description: 'Regularize seus impostos, emita guias de IPTU e certidões online.',
    images: ['https://www.presidentefigueiredo.am.gov.br/wp-content/uploads/2021/01/cropped-LOGO-COLORIDA-PREFEITURA_-sem-fundo-150x150.png'],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
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