"use client"

import { motion } from "framer-motion"
import { ClipboardList } from "lucide-react"
import { instructions } from "@/lib/data"

export function Instructions() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
              <ClipboardList className="w-6 h-6 text-accent-foreground" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Instruções ao Contribuinte
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Siga o passo a passo para um atendimento mais ágil
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
            
            <div className="space-y-6">
              {instructions.map((instruction, index) => (
                <motion.div
                  key={instruction.step}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative flex items-start gap-6"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shrink-0 z-10"
                  >
                    {instruction.step}
                  </motion.div>
                  <div className="flex-1 bg-card rounded-xl p-6 border border-border shadow-sm">
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">
                      {instruction.title}
                    </h3>
                    <p className="text-muted-foreground">{instruction.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
