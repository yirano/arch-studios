import Navigation from '@/components/blocks/Navigation';
import './globals.css';
import type { Metadata } from 'next';
import { League_Spartan } from 'next/font/google';
import Footer from '@/components/blocks/Footer';

const leagueSpartan = League_Spartan({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-leagueSpartan'
});

export const metadata: Metadata = {
  title: 'Arch Studio',
  description: 'Arch Studio challenge from Frontend Mentor',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${leagueSpartan.variable} font-sans max-w-[1110px] mx-auto`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
