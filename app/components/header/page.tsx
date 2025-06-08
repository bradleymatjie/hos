'use client'
import { useMenu } from '@/app/Context/MenuContext';
import './header.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const { toggleMenu, isMenuOpen } = useMenu();
    

 return (
  <header className='header ' data-aos="fade-down">
    <Link href="/">
      H.O.S
    </Link>

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
              href="/testimonials"
              className={pathname === '/testimonials' ? 'active' : ''}
              
            >
                testimonials
            </Link>
          </li>
        <li>
          <Link 
          href="/consult"
            className={pathname === '/consult' ? 'active' : ''}
          >
            Consultation
          </Link>
        </li>
        <li>
          <Link 
          href="/team"
            className={pathname === '/team' ? 'active' : ''}
          >
            Our Team
          </Link>
        </li>
      </ul>
    </nav>

    <div 
      className={`toggle ${isMenuOpen ? "toggled" : ""}`}
      onClick={toggleMenu}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  </header>
 ) 
}