"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-primary via-primary/95 to-secondary py-16 md:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6"
          >
            <Image
              src="/images/logo-prefeitura.jpeg"
              alt="Logo Prefeitura Municipal de Presidente Figueiredo"
              width={280}
              height={120}
              className="w-auto h-24 md:h-32 object-contain"
              priority
            />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-3 text-balance"
          >
            Prefeitura Municipal de
            <br />
            <span className="text-accent">Presidente Figueiredo</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-primary-foreground/90 text-lg md:text-xl font-medium mb-8"
          >
            Por Nossa Terra, Por Nossa Gente
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#servicos"
              className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl"
            >
              Nossos Serviços
            </a>
            <a
              href="#contato"
              className="px-8 py-3 bg-primary-foreground/10 text-primary-foreground font-semibold rounded-lg border border-primary-foreground/30 hover:bg-primary-foreground/20 transition-all"
            >
              Entre em Contato
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
