import '../styles/globals.css';

import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Barlow_Semi_Condensed } from 'next/font/google';

const barlow = Barlow_Semi_Condensed({
  subsets: ['latin'],
  display: 'swap',
  weight: ['600', '700'],
});

export const metadata: Metadata = {
  title: 'Rock Paper Scissors',
  description: 'Rock Paper Scissors game built with Next.js',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang='en'
      className='dark overflow-hidden'
      style={{ colorScheme: 'dark' }}
    >
      <body className={`${barlow.className} min min-h-dvh overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}
