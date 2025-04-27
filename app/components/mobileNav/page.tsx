'use client'
import './mobilenav.scss';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useMenu } from '@/app/Context/MenuContext';

export default function MobileMenu() {
  const pathname = usePathname();
  const { isMenuOpen, closeMenu } = useMenu();

  function closeMenuFunc() {
    if (isMenuOpen) {
      closeMenu();
    }
  }

  return (
    <div className={`mobileMenu ${isMenuOpen ? 'open' : ''}`}>
      <ul className={`${isMenuOpen ? 'open' : ''}`}>
        <li>
          <Link
            href="/"
            onClick={closeMenuFunc}
            className={pathname === '/' ? 'active' : ''}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/testimonials"
            onClick={closeMenuFunc}
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
            onClick={closeMenuFunc}
            className={pathname === '/consult' ? 'active' : ''}
          >
            Consultation
          </Link>
        </li>
      </ul>
    </div>
  );
};
