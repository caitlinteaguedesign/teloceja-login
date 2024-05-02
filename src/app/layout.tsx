import type { Metadata } from 'next';
import { Barlow, Grenze_Gotisch } from 'next/font/google';
import './globals.css';

const barlow = Barlow({
  weight: ['400', '600', '800'], // normal semibold extrabold
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-barlow',
  display: 'swap',
});

const grenzeGotisch = Grenze_Gotisch({
  subsets: ['latin'],
  variable: '--font-gg',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'The Road to Teloceja',
  description:
    'A choose-your-own-adventure text-based browser game, a companion to the Treasure of Teloceja module from the Legacy of Maela table-top role playing game campaign setting.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${grenzeGotisch.variable} ${barlow.variable} flex justify-center bg-parchment-500 bg-[url('/art/halls-of-teloceja.jpg')] bg-right bg-no-repeat font-default text-parchment-900 xl:bg-left`}
      >
        <div className="flex w-full max-w-7xl flex-initial flex-row justify-end">
          <div
            className={`flex min-h-screen w-full max-w-lg flex-col items-center bg-white p-8`}
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
