'use client'
import './services.scss'
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import {servicesList} from './../../data'


export default function ServicesSection() {
  return (
    <section className="py-12 px-4 md:px-16 bg-background">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        What We Offer
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {servicesList.slice(0,3).map((service, index) => {
          const Icon = service.icon

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="bg-white dark:bg-zinc-900 border border-muted dark:border-zinc-700 rounded-2xl hover:scale-105 hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <CardTitle className="flex items-center gap-2 text-xl font-semibold mb-2">
                    <Icon className="w-5 h-5 text-primary" />
                    {service.title}
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>

                  <Button
                    variant="link"
                    className="px-0 mt-4 text-primary"
                  >
                    Learn more →
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
        {/* <Badge className="view-more-button mx-auto text-center w-full span-3">View more</Badge> */}
      </div>
    </section>
  )
}
