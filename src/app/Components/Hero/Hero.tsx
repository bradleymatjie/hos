import { motion } from 'framer-motion'
import React from 'react'
import './Hero.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className='landing'>
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }} 
      className='landing-left'>
        <div className='landing-left_first' style={{backgroundImage: 'linear-gradient(to bottom right, #1b262a, #1E2025)', WebkitBackdropFilter: 'blur(18.5px)', backdropFilter: 'blur(18.5px)', boxShadow: '-1px 1px 15px 1px #252525'}}>
          <h1>WE ARE A<br/>  CREATIVE DIGITAL AGENCY</h1>
          <p>Unleashing Digital Brilliance: Welcome to House of Saint, Your Gateway to Innovation</p>
          <Link href='/about'>ABout Us<i className="bi bi-arrow-right-short"></i></Link>
        </div>
        <div className='small-cards-container'>
        <div 
          className='small-cards-container-item' 
          style={{ backgroundImage: 'url(/assets/aboutus.jpg)', boxShadow: '-1px 1px 15px 1px #252525'}}
        >
          <div>
            <Link href='/services' style={{ color: '#f5f5f5', fontSize: '2em',}}>Our Products</Link>
            <i className="bi bi-arrow-up-right-circle-fill"></i>
          </div>
        </div>
        <div className='small-cards-container-item' style={{ backgroundImage: 'url(https://www.linearity.io/blog/content/images/2022/03/610963083219da6a0a00ccb6_Cover-Dark-2.png)', color: '#f5f5f5', boxShadow: '1px -1px 15px 1px #252525'}}>
          <div >
          <Link href={'/contact'} style={{color:'#f5f5f5', fontSize:'2em'}}>Our Work</Link>
          <i className="bi bi-arrow-up-right-circle-fill"></i>
          </div>
        </div>
        </div>
      </motion.div>
      <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }} 
      className='landing-right' style={{backgroundImage: 'url(/assets/LogoBackground.jpg)'}}>
        <div className="logo">
            <Image src={'/logo.png'} alt='logo' className='logoImage' width={350} height={250} />
        </div>
        <div className='blackBlocks'>
        <div className='firstPerson'>
        <div className='larger'></div>
        </div>
        <div className='firstPerson'>
            <div className='larger'></div>
        </div>
        <div className='firstPerson'>
         <div className='larger'></div>
        </div>
        </div>
      </motion.div>
      </section> 
  )
}
