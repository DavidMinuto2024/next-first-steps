import Link from 'next/link';

import { HomeIcon } from '@primer/octicons-react';

import { ActiveLink } from '..';

const navItems = [
  { path: '/about', text: 'About' },
  { path: '/contact', text: 'Contact' },
  { path: '/pricing', text: 'Pricing' },
];

export const Navbar = () => {
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
      <Link href={'/'} className='flex items-center'>
        <HomeIcon size={16} className='mr-2' />
        <span>Home</span>
      </Link>
      <div className='flex flex-1'></div>
      {navItems.map(({ path, text }) => (
        <ActiveLink key={path} path={path} text={text} />
      ))}
    </nav>
  );
};
