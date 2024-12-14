import React from "react";
import "./LandingPage.scss"; // SCSS file for additional styling
import ServicesSection from "../services/page";
import Contact from "../contact.tsx/page";
import { Subscribe } from "../newsletter/page";

const LandingPage = () => {
  return (
    <>
    <div className="min-h-screen flex justify-center items-center hero">
      <div className="rounded-3xl p-8 max-w-5xl w-full h-100">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            All accounting in one application
          </h1>
          <p className="mt-4">
            Is online accounting software that manages your finances, automates
            business workflows, and helps you work collectively across
            departments.
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
    {/* <Contact /> */}
    <Subscribe />
    </>
  );
};

export default LandingPage;
