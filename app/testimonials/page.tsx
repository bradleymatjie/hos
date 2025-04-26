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

                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card className="testimonial-card">
                                        <CardTitle>
                                            <Avatar>
                                                <AvatarImage src={testimonial.image} alt="@shadcn" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                        </CardTitle>
                                        <CardContent className="p-6 flex flex-col h-full">
                                            <p className="msg italic text-gray-700">
                                                {`"${testimonial.quote}"`}
                                            </p>
                                            <div className="mt-auto">
                                                <p className="author-name font-semibold">
                                                    {testimonial.author}
                                                </p>
                                                <p className="author-position text-sm text-gray-600">
                                                    {testimonial.position}
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" />
                </Carousel>
            </div>
        </section>
    );
};

export default Testimonials;