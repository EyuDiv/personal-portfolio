import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Eyu | Full Stack Developer Portfolio',
  description: 'Software Engineering student and aspiring Full Stack Web Developer. Building modern, interactive, and responsive web applications using Next.js and Laravel.',
  keywords: ['Eyu', 'Software Engineering', 'Full Stack Developer', 'Next.js', 'React', 'Laravel', 'Portfolio'],
  authors: [{ name: 'Eyu' }],
  openGraph: {
    title: 'Eyu | Full Stack Developer Portfolio',
    description: 'Software Engineering student and aspiring Full Stack Web Developer. Building modern web applications.',
    type: 'website',
    locale: 'en_US',
    url: 'https://eyu-portfolio.vercel.app',
    siteName: "Eyu's Portfolio",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eyu | Full Stack Developer Portfolio',
    description: 'Software Engineering student and aspiring Full Stack Web Developer.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground antialiased font-sans min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
