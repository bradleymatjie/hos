'use client'
import './Header.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header({ menuTogglerFunction, menuTogglerValue }: any) {
  const pathname = usePathname();

 return (
  <header className='header'>
    <a href="/">
      H.O.S
    </a>

    <nav>
      <ul className='header-navItems'>
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
              className={pathname === '/services' ? 'active' : ''}
              
            >
              Our Services
            </Link>
          </li>

        <li>
          <Link 
            href="/team"
            className={pathname === 'team' ? 'active' : ''}
            
          >
            Team
          </Link>
        </li>
        <li>
          <Link 
          href="/contact"
            className={pathname === '/contact' ? 'active' : ''}
          >
            ContactUs
          </Link>
        </li>
      </ul>
    </nav>

    <div 
      className={`toggle ${menuTogglerValue ? "toggled" : ""}`}
      onClick={() => {
        menuTogglerFunction((state: any) => (!state))
      }}
    >
      
      <span></span>
      <span></span>
      <span></span>
    </div>
  </header>
 ) 
}