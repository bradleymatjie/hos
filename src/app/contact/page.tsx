'use client'
import Link from 'next/link'
import './contact.scss'
import Header from '../Components/Header/Header'
import { MobileMenu } from '../Components/MobileMenu/MobileMenu'
import { useState } from 'react';

export default function Contact() {
    const [menuToggler, setMenuToggler] = useState(false);
    
    return (
        <>
           <Header 
          menuTogglerFunction={setMenuToggler} 
          menuTogglerValue={menuToggler} 
      />
      <MobileMenu menuToggler={menuToggler} />
        <section className='contact'>
            <h1>Contact</h1>
            <div className="back">
                <Link href='/' style={{textDecoration: 'none', color: 'whitesmoke'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="whitesmoke" className="bi bi-arrow-up-left-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-5.904 2.803a.5.5 0 1 0 .707-.707L6.707 6h2.768a.5.5 0 1 0 0-1H5.5a.5.5 0 0 0-.5.5v3.975a.5.5 0 0 0 1 0V6.707z"/>
                </svg>
                </Link>
            </div>
            <div>
                <div className='contact_left'>
                    <button><span>.</span>Services Enquiries</button>
                    <button className='mail'><span>.</span>Join Mailing List</button>
                    <div>
                        <p>
                            South Africa,<br/>Johannesburg.<b/>
                        </p>
                    </div>
                </div>
                <div className='contact_right'>
                    <form action="">
                        <input type="text" placeholder='Name' />
                        <input type="text" placeholder='Company' />
                        <input type="email" placeholder='Email' />
                        <input type="tel" placeholder='Phone'/>
                        <textarea placeholder='Say Something'></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </section>
        </>
    )
}