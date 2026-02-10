"use client"

import { motion } from "framer-motion"
import { Globe, FileText, Building2, ExternalLink } from "lucide-react"
import { links } from "@/lib/data"

const services = [
  {
    icon: Globe,
    title: "Portal da Prefeitura",
    description: "Acesse informações, notícias e serviços oficiais",
    href: links.website,
    color: "bg-primary",
  },
  {
    icon: Building2,
    title: "Portal de Gestão",
    description: "Transparência e gestão pública",
    href: links.portalGestao,
    color: "bg-secondary",
  },
  {
    icon: FileText,
    title: "NFS-e Contribuinte",
    description: "Emissão de Nota Fiscal de Serviço Eletrônica",
    href: links.nfse,
    color: "bg-chart-4",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Services() {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Portais e Serviços
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Acesse nossos portais oficiais para serviços e informações
          </p>
        </motion.div>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.a
              key={service.title}
              href={service.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow"
            >
              <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2 flex items-center gap-2">
                {service.title}
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
