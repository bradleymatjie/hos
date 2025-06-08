'use client'
import React, { useState } from "react";
import "./LandingPage.scss"; // SCSS file for additional styling
import ServicesSection  from "../services/page";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
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
import Link from "next/link";
import Testimonials from "@/app/components/testimonials/page";

const LandingPage = () => {
  const { toast } = useToast()
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const bookingData = {
      fullName,
      email,
      message,
    };

    console.log("Booking Submitted:", bookingData);
    setIsDrawerOpen(false)
    // You can now send this data to an API or email service!
    toast({
      title: "Message Sent",
      description: `We will get back to you soon!`,
    })

    setFullName("");
    setEmail("");
    setMessage("");
  };


  return (
    <>
    <div className="min-h-screen flex justify-center items-center hero" data-aos="fade-up">
      <div className="rounded-3xl max-w-5xl w-full h-100" >
        {/* Header */}
        <Image
              src="/hos-logo.png"
              alt="Logo"
              width={350}
              height={300}
              className="mx-auto"
            />
        <div className="text-center">
          <p className="hero-desc">
          Unleashing Digital Brilliance: Welcome to House of Saint, Your Gateway to Innovation
          </p>
        </div>

        {/* Call-to-action buttons */}
        <div className="flex justify-center mt-6 gap-4 hero-buttons-container">
        <Link href={'/consult'} className="bg-gray-800 text-white py-3 px-6 rounded-lg font-medium" >
                  Book A consultation
        </Link>
        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <DrawerTrigger asChild>
            <button  className="border border-white-300 py-3 px-6 rounded-lg font-medium" onClick={() => setIsDrawerOpen(true)}>
            Contact Us
          </button>
            </DrawerTrigger>
            <DrawerContent>
        <div className="mx-auto w-full max-w-sm p-4">
          <DrawerHeader>
            <DrawerTitle>Contact Us</DrawerTitle>
            <DrawerDescription>Fill in your details and we will get back to you.</DrawerDescription>
          </DrawerHeader>

          <form className="space-y-4" onSubmit={handleSubmit}>
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
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="0729509295"
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
                placeholder="Send us a message..."
                className="mt-1 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
              ></textarea>
            </div>
            <DrawerFooter className="mt-4">
            <Button type="submit">Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
          </form>
          </div>
          
            </DrawerContent>
          </Drawer>
        </div>

        {/* Features section */}
      </div>
    </div>
    <ServicesSection />
      <Testimonials />
    <section className="py-12 px-4 md:px-16 bg-muted/50 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us</h2>
      <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
      We combine strategy, design, and development to deliver exceptional results. From startups to established brands, we craft digital experiences that not only captivate but also convert. Our approach is tailored to meet your unique goals, ensuring your brand stands out and thrives in the digital landscape.      </p>
    </section>
    <section className="py-16 px-4 md:px-16 text-white text-center p-2 mb-none" style={{backgroundColor: "teal", padding:"150px 0"}}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to elevate your brand?</h2>
      <p className="mb-6">Let’s build something amazing together. Get in touch today.</p>
      <Button variant="secondary" className="text-lg font-semibold" onClick={() => setIsDrawerOpen(true)}>Contact Us</Button>
    </section>
    </>
  );
};

export default LandingPage;
