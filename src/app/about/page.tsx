import Link from 'next/link'
import Image from 'next/image'
import './about.scss'

export default function About() {
    return (
        <section className='about'>
            <Image src={'/assets/waves/yellow-strip-1.svg'} id='yellowStrip' width={300} height={300} alt='yelow strip'/>
            <img src={'/assets/waves/wave1.svg'} id='wave1' alt="wave 1" />
            <div className="back">
                <Link href='/' style={{textDecoration: 'none', color: 'whitesmoke'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#252525" className="bi bi-arrow-up-left-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-5.904 2.803a.5.5 0 1 0 .707-.707L6.707 6h2.768a.5.5 0 1 0 0-1H5.5a.5.5 0 0 0-.5.5v3.975a.5.5 0 0 0 1 0V6.707z"/>
                </svg>
                </Link>
            </div>
            <div className='about_left'>
                <h1>H.O.S</h1>
                <p className='main-text'>
                    {`"At House Of Saint, we craft cutting-edge solutions that redefine the boundaries of 
                    technological innovation. Our commitment to excellence is unwavering, and we take 
                    pride in delivering software solutions that empower businesses and individuals to 
                    thrive in the digital landscape.
                    Founded on the pillars of expertise, creativity, and reliability, We are 
                    dedicated to shaping the future of software development.
                    In an era where technology evolves at an unprecedented pace, House of Saint stands 
                    as a beacon of adaptability. Our commitment to staying at the forefront of technological 
                    advancements ensures that our clients benefit from solutions that are not just current 
                    but future-proof. At the heart of House of Saint is a customer-centric approach."`}
                </p>
                <span>Bradley Matjie, <strong>CEO</strong></span>
                <div className='linksContainer'>
                    <Link href='/services'>
                        Our Services 
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-up-right-circle" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"/>
                        </svg>
                    </Link>
                    <Link href='/contact'>
                        Contact us 
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-up-right-circle" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"/>
                        </svg>
                    </Link>
                    
                </div>
            </div>
            <div className='about_right'>
                <Image src={'/assets/aboutus.jpg'} alt={'About us image'} height={'500'} width={500} />
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
    )
}