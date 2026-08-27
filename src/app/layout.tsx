import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://jujutsuinfinite.robloxwikihub.com'),
  alternates: {
    canonical: '/',
  },
  title: 'Jujutsu Infinite Codes & Tier List (August 2026 Update 1) - Roblox Wiki',
  description: 'Find active Jujutsu Infinite codes, Innate Technique tier lists, Domain Expansion guides, and secret tips for Roblox Jujutsu Infinite.',
  keywords: ['Jujutsu Infinite codes', 'Jujutsu Infinite tier list', 'Roblox Jujutsu Infinite', 'JJI codes 2026', 'Limitless Six Eyes Jujutsu Infinite'],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Jujutsu Infinite Codes & Tier List (August 2026)',
    description: 'Get free Demon Fingers, Clan Spins, and Yen in Roblox Jujutsu Infinite with daily updated codes.',
    type: 'website',
    url: 'https://jujutsuinfinite.robloxwikihub.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0b0d14] text-gray-100 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
