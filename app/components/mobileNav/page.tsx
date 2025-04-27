'use client'
import './mobilenav.scss';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useMenu } from '@/app/Context/MenuContext';

export default function MobileMenu() {
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
            href="/testimonials"
            className={pathname === '/testimonials' ? 'active' : ''}
          >
            testimonials
          </Link>
        </li>
        {/*<li>*/}
        {/*  <Link*/}
        {/*    href="/team"*/}
        {/*    className={pathname === '/team' ? 'active' : ''}*/}
        {/*  >*/}
        {/*    Team*/}
        {/*  </Link>*/}
        {/*</li>*/}
        <li>
          <Link
            href="/consult"
            className={pathname === '/consult' ? 'active' : ''}
          >
            Consultation
          </Link>
        </li>
      </ul>
    </div>
  );
};
