"use client"

import { motion } from "framer-motion"
import { MapPin, Mail, Instagram, Globe, MessageCircle } from "lucide-react"
import { links } from "@/lib/data"

const contactLinks = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Tire suas dúvidas",
    href: links.whatsapp,
    color: "bg-green-500 hover:bg-green-600",
  },
  {
    icon: Mail,
    title: "E-mail",
    value: links.email,
    href: `mailto:${links.email}`,
    color: "bg-blue-600 hover:bg-blue-700",
  },
  {
    icon: Instagram,
    title: "Instagram",
    value: "@prefikiredo",
    href: links.instagram,
    color: "bg-pink-500 hover:bg-pink-600",
  },
  {
    icon: Globe,
    title: "Website",
    value: "Portal Oficial",
    href: links.website,
    color: "bg-sky-600 hover:bg-sky-700",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
}

export function Contact() {
  return (
    <section
      id="contato"
      className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-500"
    >
      <div className="container mx-auto px-4">
        {/* TÍTULO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Entre em Contato
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
            Escolha a melhor forma de falar conosco
          </p>
        </motion.div>

        {/* CARDS DE CONTATO */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12"
        >
          {contactLinks.map((contact) => (
            <motion.a
              key={contact.title}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`
                ${contact.color}
                text-white
                rounded-2xl
                p-5
                flex flex-col
                items-center
                text-center
                shadow-lg
                hover:shadow-xl
                transition-all duration-300
                dark:shadow-black/40
              `}
            >
              <contact.icon className="w-8 h-8 mb-3" />
              <h3 className="font-semibold mb-1">{contact.title}</h3>
              <p className="text-sm text-white/80 truncate max-w-full">
                {contact.value}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* MAPA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-lg dark:shadow-black/40 transition-colors duration-500">
            
            {/* CABEÇALHO DO MAPA */}
            <div className="p-6 flex items-center gap-4 border-b border-neutral-200 dark:border-neutral-800">
              <div className="w-12 h-12 bg-blue-600 dark:bg-blue-700 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                  Como Chegar
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Prefeitura Municipal de Presidente Figueiredo
                </p>
              </div>

              <motion.a
                href={links.maps}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  ml-auto px-6 py-2.5
                  bg-blue-600 hover:bg-blue-700
                  text-white
                  rounded-lg font-semibold
                  transition-all duration-300
                  hidden sm:block
                "
              >
                Abrir no Maps
              </motion.a>
            </div>

            {/* IFRAME */}
            <div className="relative aspect-video md:aspect-21/9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.26249168046!2d-60.031292628178534!3d-2.0509266323422177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x927205876015efab%3A0x65041c77de64902!2sPrefeitura%20Municipal%20de%20Presidente%20Figueiredo%20-%20AM%20-%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1769698372157!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Prefeitura Municipal de Presidente Figueiredo"
                className="absolute inset-0"
              />
            </div>

            {/* BOTÃO MOBILE */}
            <a
              href={links.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="block sm:hidden p-4 bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold transition-colors"
            >
              Abrir no Google Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
