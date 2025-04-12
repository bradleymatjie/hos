'use client'
import React from "react";
import "./LandingPage.scss"; // SCSS file for additional styling
import ServicesSection  from "../services/page";
import { Button } from "@/components/ui/button";
// import Contact from "../contact.tsx/page";

const LandingPage = () => {
  return (
    <>
    <div className="min-h-screen flex justify-center items-center hero " data-aos="fade-up">
      <div className="rounded-3xl p-8 max-w-5xl w-full h-100" >
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">
          WE ARE A
          CREATIVE DIGITAL AGENCY
          </h1>
          <p className="mt-4">
          Unleashing Digital Brilliance: Welcome to House of Saint, Your Gateway to Innovation
          </p>
        </div>

        {/* Call-to-action buttons */}
        <div className="flex justify-center mt-6 gap-4">
          <button className="bg-gray-800 text-white py-3 px-6 rounded-lg font-medium">
            Book A consultation
          </button>
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
