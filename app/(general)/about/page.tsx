import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Page',
  description: 'About Page',
  keywords: ['nextjs', 'typescript', 'tailwind', 'react'],
};

export default function AboutPage() {
  return <span className='text-7xl'>About Page</span>;
}
