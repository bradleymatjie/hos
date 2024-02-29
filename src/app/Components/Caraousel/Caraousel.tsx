'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import './Caraousel.scss';

import img0 from "https://images.hdqwalls.com/wallpapers/colorful-sunset-minimal-4k-0q.jpg";
import img1 from "https://images.hdqwalls.com/wallpapers/colorful-sunset-minimal-4k-0q.jpg";
import img2 from "https://images.hdqwalls.com/wallpapers/colorful-sunset-minimal-4k-0q.jpg";
import yellowstripe from "../../localAssets/yellow-strip-1.svg";
import wave1 from "../../localAssets/wave_lines_1.svg";
import Link from 'next/link';

const data = [
  {
    image: img0,
    title: "1.WEB DEVELOPMENT",
    description: "Whether you are looking for a simple landing page to showcase your business or you are looking for a full functioning web store. we got you covered"
  },
  {
    image: img1,
    title: "2.GRAPHIC DESIGN",
    description: "From logos, posters, flyers to UX/UI design we've got it all. at H.O.S we design solutions tailored for each client."
  },
  {
    image: img2,
    title: "3.SOFTWARE SOLUTIONS",
    description: "At H.O.S we have experts ready for any problems that require software solutions."
  },
]

export default function Carsl() {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const [activNav, setActivNav] = useState(0);
  const [nextNav, setNextNav] = useState(1); 
  const [showSecondDiv, setShowSecondDiv] = useState(true);
  const [showThirdDiv, setShowThirdDiv] = useState(true);
  const [showFourthDiv, setShowFourthDiv] = useState(true);

  const handleButtonClick = (index: any) => {
    setActiveButtonIndex(index);
    setActivNav(index);

    setNextNav((index + 1) % data.length);

    if (index >= data.length - 3) {
      setShowFourthDiv(false);
    } else {
      setShowFourthDiv(true);
    }

  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <>
    <div id="back" style={{margin: '5px 0 0 5px'}}>
      <Link href='/' style={{ textDecoration: 'none', color: 'whitesmoke' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#252525" className="bi bi-arrow-up-left-circle" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-5.904 2.803a.5.5 0 1 0 .707-.707L6.707 6h2.768a.5.5 0 1 0 0-1H5.5a.5.5 0 0 0-.5.5v3.975a.5.5 0 0 0 1 0V6.707z" />
        </svg>
      </Link>
      <h2>Our Services</h2>
    </div>
    <div className="home" id="home">
        <div className="main-area">
          <div
            className="image-section">
            <Image
              key={activNav}
              src={data[activNav].image}
              alt={`${data[activNav].title}`} />

            {showSecondDiv && (<motion.div
              key={nextNav}
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="image-section-div second"
              style={{ backgroundImage: `url(${data[nextNav].image})` }}
            ></motion.div>)}

            {showThirdDiv && (<div className="image-section-div third"></div>)}

            {showFourthDiv && (<div className="image-section-div fourth"></div>)}
          </div>
          
          <div className="info-section">
            <motion.div
              key={data[activNav].title}
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              <h2>{data[activNav].title}</h2>
            </motion.div>
            
            <motion.div
              key={data[activNav].description}
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              <p>{data[activNav].description}</p>
            </motion.div>
            <a>
              Get Started
            </a>
          </div>
        </div>
        <nav className="nav-buttons">
          {data.map((v: any, i: any) => (
            <button
              className={i === activeButtonIndex ? 'active' : ''}
              key={i}
              onClick={() => handleButtonClick(i)} />
          ))}
        </nav>

        {/* <Image src={yellowstripe} alt='yellow stripe' className="yellowstripe" /> */}
      </div>
        <img
        src={'/assets/waves/wave1.svg'} id='wave1' alt="wave 1" />
      </>
  );
};
