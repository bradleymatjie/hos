'use client'
import { useState } from 'react';
import './MobileMenu.scss';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
export const MobileMenu = ({ removeMenu, menuToggler }: any) => {
  const [activeMenuItem, setActiveMenuItem] = useState('home');
  const pathname = usePathname();

  const handleMenuItemClick = (menuItem: any) => {
    setActiveMenuItem(menuItem);
  };

  return (
    <div className={`mobileMenu ${menuToggler ? 'open':''}`}>
      <ul className={`${menuToggler ? 'open':''}`}>
      <li>
            <Link
              href="/"
              className={pathname === '/' ? 'active' : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={pathname === 'services' ? 'active' : ''}
            >
              Our Services
            </Link>
          </li>


        <li>
          <Link 
            href="/team"
            className={pathname === '/team' ? 'active' : ''}
          >
            Team
          </Link>
        </li>
        <li>
          <Link 
          href="/contactus"
            className={pathname === '/contact' ? 'active' : ''}
          >
            ContactUs
          </Link>
        </li>
      </ul>
    </div>
  )
}