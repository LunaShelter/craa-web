import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'CRAA — Conciencia y Rescate Animal Ayacucho',
    template: '%s | CRAA Ayacucho',
  },
  description:
    'Rescatamos, rehabilitamos y reubicamos animales en situación de abandono o maltrato en la región de Ayacucho, Perú. Ayúdanos a darles una segunda oportunidad.',
  keywords: ['rescate animal', 'adopción perros', 'adopción gatos', 'Ayacucho', 'albergue animales', 'voluntariado', 'donaciones'],
  authors: [{ name: 'CRAA — Conciencia y Rescate Animal Ayacucho' }],
  openGraph: {
    title: 'CRAA — Conciencia y Rescate Animal Ayacucho',
    description: 'Rescatamos y reubicamos animales en Ayacucho. Ayúdanos con una donación o adoptando.',
    url: 'https://craa.pe',
    siteName: 'CRAA',
    locale: 'es_PE',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CRAA — Conciencia y Rescate Animal Ayacucho',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CRAA — Conciencia y Rescate Animal Ayacucho',
    description: 'Rescatamos y reubicamos animales en Ayacucho. Ayúdanos con una donación o adoptando.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.className}>
      <body className="min-h-screen flex flex-col bg-[#FFF5EC]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
