"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative overflow-hidden py-14">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/bg-efooter.jpg"
          alt="Imagem institucional da Prefeitura"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center text-white"
        >
          <Image
            src="/images/brasao-prefeitura.jpeg"
            alt="Brasão da Prefeitura Municipal de Presidente Figueiredo"
            width={100}
            height={100}
            className="mb-4 h-20 w-20 object-contain"
          />

          <h3 className="mb-2 text-xl font-bold">
            Prefeitura Municipal de Presidente Figueiredo
          </h3>

          <p className="mb-6 text-white/80">
            Secretaria de Planejamento e Finanças - SEMPLAF
          </p>

          <div className="mb-6 h-px w-full max-w-md bg-white/20" />

          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} Prefeitura Municipal de Presidente Figueiredo.
            <br />
            Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
