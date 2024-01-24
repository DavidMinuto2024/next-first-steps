'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';

import style from './ActiveLink.module.css';

interface Props {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: Props) => {
  const pathname = usePathname();
  return (
    <Link
      key={path}
      className={`mr-2
      ${pathname === path ? style['active-link'] : style.link}
    `}
      href={path}
    >
      {' '}
      {text}
    </Link>
  );
};
