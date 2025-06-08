'use client'

import './services.scss'
import { useEffect, useRef, useState } from 'react'
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { servicesList } from './../../data'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function ServicesSection() {
    const carouselRef = useRef<HTMLDivElement>(null)
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        if (!carouselRef.current) return

        let interval: NodeJS.Timeout

        if (!isHovered) {
            interval = setInterval(() => {
                const nextButton = carouselRef.current?.querySelector('[data-carousel-next]') as HTMLButtonElement
                nextButton?.click()
            }, 3000) // scroll every 3 seconds
        }

        return () => clearInterval(interval)
    }, [isHovered])

    return (
        <section className="py-12 px-4 md:px-16 bg-background w-100 overflow-hidden services">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                What We Offer
            </h2>

            <div
                ref={carouselRef}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full max-w-6xl mx-auto"
                    style={{ height: '250px',padding: '10px' }}
                >
                    <CarouselContent
                        style={{
                            height: '250px',
                            width: '100%',
                            display: 'flex',
                            alignItems: "center",

                        }}
                    >
                        {servicesList.map((service, index) => {
                            const Icon = service.icon

                            return (
                                <CarouselItem key={index} className="md:basis-1/3">
                                    <motion.div
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, delay: index * 0.15 }}
                                    >
                                        <Card className="cardItem dark:bg-zinc-900 border border-muted dark:border-zinc-700 rounded-2xl hover:scale-105 hover:shadow-xl transition-all duration-300 h-full">
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
                                </CarouselItem>
                            )
                        })}
                    </CarouselContent>

                    <CarouselPrevious data-carousel-previous />
                    <CarouselNext data-carousel-next />
                </Carousel>
            </div>
        </section>
    )
}
