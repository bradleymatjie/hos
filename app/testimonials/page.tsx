import React from "react";
import "./Testimonials.scss";
import {testimonialsArray} from '../data';
import {Card, CardContent} from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

const Testimonials = () => {

    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="testimonials-text-wrapper">
                    <h2>TESTIMONIALS</h2>
                    <h3 className="subheading">
                        Don&apos;t take our word for it!
                        <br />
                        Hear it from our clients.
                    </h3>
                </div>

                <div className="relative courasel">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-1">
                            {testimonialsArray.map((testimonial, index) => (
                                <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card className="testimonial-card h-full">
                                            <CardContent className="card-content p-6 flex flex-col h-full">
                                                <div className="flex justify-center mb-4">
                                                    <Avatar className="h-16 w-16">
                                                        <AvatarImage src={testimonial.image} />
                                                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                                    </Avatar>
                                                </div>
                                                <p className="msg italic text-gray-700 mb-6">
                                                    {`"${testimonial.testimonial}"`}
                                                </p>
                                                <div className="mt-auto">
                                                    <p className="author-name font-semibold text-center">
                                                        {testimonial.name}
                                                    </p>
                                                    <p className="author-position text-sm text-gray-600 text-center">
                                                        {testimonial.company}
                                                    </p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:flex" />
                        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:flex" />
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;