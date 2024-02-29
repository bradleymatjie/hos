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
              href="/TheProblem"
              className={pathname === '/TheProblem' ? 'active' : ''}
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