'use client'
import React, { useEffect, useState } from "react";
import "./LandingPage.scss"; // SCSS file for additional styling
import ServicesSection  from "../services/page";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

const LandingPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [message, setMessage] = useState("");

  const [minDate, setMinDate] = useState("");
  const [minTime, setMinTime] = useState("");

  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    const formattedToday = `${yyyy}-${mm}-${dd}`;
    setMinDate(formattedToday);
  }, []);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    setSelectedDate(date);

    const today = new Date();
    const selected = new Date(date);
    if (selected.toDateString() === today.toDateString()) {
      const hours = String(today.getHours()).padStart(2, "0");
      const minutes = String(today.getMinutes()).padStart(2, "0");
      setMinTime(`${hours}:${minutes}`);
    } else {
      setMinTime("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const bookingData = {
      fullName,
      email,
      selectedDate,
      selectedTime,
      message,
    };

    console.log("Booking Submitted:", bookingData);
    // You can now send this data to an API or email service!
  };


  return (
    <>
    <div className="min-h-screen flex justify-center items-center hero" data-aos="fade-up">
      <div className="rounded-3xl max-w-5xl w-full h-100" >
        {/* Header */}
        <Image
              src="/hos-logo.png"
              alt="Logo"
              width={500}
              height={400}
              className="mx-auto"
            />
        <div className="text-center">
          <p className="hero-desc">
          Unleashing Digital Brilliance: Welcome to House of Saint, Your Gateway to Innovation
          </p>
        </div>

        {/* Call-to-action buttons */}
        <div className="flex justify-center mt-6 gap-4">
          <Drawer>
            <DrawerTrigger asChild>
            <button className="bg-gray-800 text-white py-3 px-6 rounded-lg font-medium">
                  Book A consultation
                </button>
            </DrawerTrigger>
            <DrawerContent>
        <div className="mx-auto w-full max-w-sm p-4">
          <DrawerHeader>
            <DrawerTitle>Book a Consultation</DrawerTitle>
            <DrawerDescription>Fill in your details and we'll get back to you.</DrawerDescription>
          </DrawerHeader>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Name Surname"
                  required
                  className="mt-1 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
                />
            </div>

            <div>
              <label className="block text-sm font-medium">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="mt-1 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Preferred Date</label>
              <input
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                min={minDate}
                required
                className="mt-1 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Preferred Time</label>
              <input
                type="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                min={minTime}
                required
                className="mt-1 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                placeholder="Tell us more about what you’re looking for..."
                className="mt-1 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
              ></textarea>
            </div>
          </form>

          <DrawerFooter className="mt-4">
            <Button type="submit">Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
            </DrawerContent>
          </Drawer>
          <button className="border border-white-300 py-3 px-6 rounded-lg font-medium">
            Contact Us
          </button>
        </div>

        {/* Features section */}
      </div>
    </div>
    <ServicesSection />
    <section className="py-12 px-4 md:px-16 bg-muted/50 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us</h2>
      <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
      We combine strategy, design, and development to deliver exceptional results. From startups to established brands, we craft digital experiences that not only captivate but also convert. Our approach is tailored to meet your unique goals, ensuring your brand stands out and thrives in the digital landscape.      </p>
    </section>
    <section className="py-16 px-4 md:px-16 bg-primary text-white text-center my-10 mb-none">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to elevate your brand?</h2>
      <p className="mb-6">Let’s build something amazing together. Get in touch today.</p>
      <Button variant="secondary" className="text-lg font-semibold">Contact Us</Button>
    </section>
    </>
  );
};

export default LandingPage;
