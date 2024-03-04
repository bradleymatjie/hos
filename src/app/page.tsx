'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Header from "./Components/Header/Header";
import { MobileMenu } from "./Components/MobileMenu/MobileMenu";
// import Caraousel from "./Components/Caraousel/Caraousel";
import './main.scss'
import Hero from "./Components/Hero/Hero";

export default function Home() {
  const [menuToggler, setMenuToggler] = useState(false);

  return (
    <>
    <Header 
          menuTogglerFunction={setMenuToggler} 
          menuTogglerValue={menuToggler} 
      />
      <MobileMenu menuToggler={menuToggler} />
    <main className="main">
      <Hero />
    </main>
    </>
  );
}
