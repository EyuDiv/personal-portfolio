import type { Metadata, Viewport } from 'next';
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

export const metadata: Metadata = {
  title: 'Eyoual Yimer (Eyu) | Full Stack Developer Portfolio',
  description:
    'Software Engineering student at Woldia University and aspiring Full Stack Web Developer. Building modern, interactive, and responsive web applications using Next.js and Laravel.',
  keywords: [
    'Eyoual Yimer',
    'Eyu',
    'Software Engineering',
    'Full Stack Developer',
    'Next.js',
    'React',
    'Laravel',
    'Portfolio',
  ],
  authors: [{ name: 'Eyoual Yimer' }],
  openGraph: {
    title: 'Eyoual Yimer (Eyu) | Full Stack Developer Portfolio',
    description:
      'Software Engineering student and aspiring Full Stack Web Developer. Building modern web applications using Next.js and Laravel.',
    type: 'website',
    locale: 'en_US',
    url: 'https://personal-portfolio-sage-alpha-43.vercel.app',
    siteName: "Eyoual Yimer's Portfolio",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eyoual Yimer (Eyu) | Full Stack Developer Portfolio',
    description:
      'Software Engineering student and aspiring Full Stack Web Developer.',
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
      <body className="bg-background text-foreground antialiased font-sans min-h-screen overflow-x-hidden selection:bg-primary/20 selection:text-primary">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
