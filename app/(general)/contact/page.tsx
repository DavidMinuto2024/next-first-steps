import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contatc Page',
  description: 'Contact Page',
  keywords: ['nextjs', 'typescript', 'tailwind', 'react'],
};
export default function ContactPage() {
  return <span className='text-7xl'>Contact Page</span>;
}
