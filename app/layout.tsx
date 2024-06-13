import { Inter } from 'next/font/google';

import type { Metadata } from 'next';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'naoki',
  description:
    "Naoki's goal is to be a front-end developer who creates designs that fulfill and surpass user expectations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-slate-900 leading-relaxed text-slate-400 antialiased ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
