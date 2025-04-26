import React from "react";
import "./Testimonials.scss";
import {Card, CardContent, CardTitle} from "@/components/ui/card";
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
    const testimonials = [
        {
            quote: "The lovely team at DesignMe has provided our startup with significant leverage. Their work is exceptionally professional, and Adrian is always attentive to our needs, taking the time to understand our briefs and offer valuable direction. Additionally, their turnaround times are impressively fast!",
            author: "Patrick Mawrock",
            position: "UX Manager at Superhabits",
            image: '/hero.jpg',
        },
        {
            quote: "DesignMe has greatly exceeded our expectations. The communication is always excellent, the turnaround is extremely quick, and the designs are fresh, innovative, and spot on!",
            author: "Pw Pxt",
            position: "Product Designer at Lighthash",
            image: '/hero.jpg',
        },
        {
            quote: "DesignMe's solutions transformed our business operations completely.",
            author: "Rt Wxt",
            position: "CEO of Kingdom Advisors",
            image: '/hero.jpg',
        },
        {
            quote: "DesignMe's solutions transformed our business operations completely.",
            author: "Rt Wxt",
            position: "CEO of Kingdom Advisors",
            image: '/hero.jpg',
        },
        {
            quote: "DesignMe's solutions transformed our business operations completely.",
            author: "Rt Wxt",
            position: "CEO of Kingdom Advisors",
            image: '/hero.jpg',
        },
        {
            quote: "DesignMe's solutions transformed our business operations completely.",
            author: "Rt Wxt",
            position: "CEO of Kingdom Advisors",
            image: '/hero.jpg',
        },{
            quote: "DesignMe's solutions transformed our business operations completely.",
            author: "Rt Wxt",
            position: "CEO of Kingdom Advisors",
            image: '/hero.jpg',
        },

    ];

    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="testimonials-text-wrapper">
                    <h2>TESTIMONIALS</h2>
                    <h3 className="subheading">
                        Don&apos;t take our word for it!
                        <br />
                        Hear it from our partners.
                    </h3>
                </div>

                <div className="relative courasel" style={{backgroundColor: `transparent`}}>
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-1">
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card className="testimonial-card h-full">
                                            <CardContent className="p-6 flex flex-col h-full">
                                                <div className="flex justify-center mb-4">
                                                    <Avatar className="h-16 w-16">
                                                        <AvatarImage src={testimonial.image} />
                                                        <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                                                    </Avatar>
                                                </div>
                                                <p className="msg italic text-gray-700 mb-6">
                                                    {`"${testimonial.quote}"`}
                                                </p>
                                                <div className="mt-auto">
                                                    <p className="author-name font-semibold text-center">
                                                        {testimonial.author}
                                                    </p>
                                                    <p className="author-position text-sm text-gray-600 text-center">
                                                        {testimonial.position}
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