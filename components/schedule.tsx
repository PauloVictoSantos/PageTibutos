"use client"

import { motion } from "framer-motion"
import { Clock, Calendar } from "lucide-react"
import { schedule } from "@/lib/data"

export function Schedule() {
  return (
    <section id="horarios" className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-2xl p-8 shadow-lg border border-border max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="text-2xl font-bold text-card-foreground">
              Horário de Funcionamento
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-4 p-4 bg-muted rounded-xl"
            >
              <Calendar className="w-8 h-8 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Dias</p>
                <p className="text-lg font-semibold text-card-foreground">{schedule.days}</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-4 p-4 bg-muted rounded-xl"
            >
              <Clock className="w-8 h-8 text-accent" />
              <div>
                <p className="text-sm text-muted-foreground">Horário</p>
                <p className="text-lg font-semibold text-card-foreground">{schedule.hours}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
