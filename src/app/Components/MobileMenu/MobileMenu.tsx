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
              href="/TheProblem"
              className={pathname === 'TheProblem' ? 'active' : ''}
            >
              The Problem
            </Link>
          </li>

          <li>
            <Link
              href="/solution"
              className={pathname === '/solution' ? 'active' : ''}
            >
              Our Solution
            </Link>
          </li>

        <li>
          <Link 
            href="/features"
            className={pathname === '/features' ? 'active' : ''}
          >
            Features
          </Link>
        </li>
        <li>
          <Link 
            href="/technology"
            className={pathname === '/technology' ? 'active' : ''}
          >
            Technology
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