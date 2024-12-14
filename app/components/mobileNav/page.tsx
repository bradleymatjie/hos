'use client'
import './mobilenav.scss';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useMenu } from '@/app/Context/MenuContext';

export const MobileMenu: React.FC = () => {
  const pathname = usePathname();
  const { isMenuOpen } = useMenu();

  return (
    <div className={`mobileMenu ${isMenuOpen ? 'open' : ''}`}>
      <ul className={`${isMenuOpen ? 'open' : ''}`}>
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
            className={pathname === '/team' ? 'active' : ''}
          >
            Team
          </Link>
        </li>
        <li>
          <Link
            href="/contactus"
            className={pathname === '/contactus' ? 'active' : ''}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};
