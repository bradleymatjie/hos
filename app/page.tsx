'use client'
import { useEffect} from "react";
import LandingPage from "./components/landing/page";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Customize the animation duration (optional)
      once: true,      // Animation happens only once
    });
  }, []);
  return (
    <div className="">
      <LandingPage />
    </div>
  );
}
