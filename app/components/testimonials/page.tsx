'use client';

import { useState } from 'react';
import './testimony.scss';
import {Button} from "@/components/ui/button";
import {testimonialsArray} from '../../data'
import Link from "next/link";


export default function Testimonials() {
    const [selectedUser, setSelectedUser] = useState(testimonialsArray[0]);

    return (
        <section className="testimonials">
            <div className="testimonials-container">
                <div className="image-Overlay" style={{ backgroundImage: `url(${selectedUser.image})` }} />

                <div className="testimonials-content">
                    <div className="testimonials-container-images">
                        {testimonialsArray.map((user, index) => (
                            <img
                                key={index}
                                src={user.image}
                                alt={user.name}
                                className={`w-20 h-20 object-cover rounded-2xl cursor-pointer transition-transform hover:scale-110 ${selectedUser.name === user.name ? 'active' : ''}`}
                                onClick={() => setSelectedUser(user)}
                            />
                        ))}
                    </div>

                    <div className="container-content-text text-center flex flex-col items-center justify-center space-y-4 z-10">
                        <span className="px-4 py-1 bg-white text-gray-700 rounded-full text-sm font-semibold shadow-md">
                            Testimonials
                        </span>
                        <h2 className="text-3xl font-bold text-white drop-shadow-md">{selectedUser.name}</h2>
                        <p className="text-gray-300">{selectedUser.company}</p>
                        <p className="text-lg font-medium text-white max-w-2xl">{`“${selectedUser.testimonial}”`}</p>
                    </div>
                    <Button variant="secondary"><Link href="/testimonials">View More</Link></Button>
                </div>
            </div>
        </section>
    );
}
