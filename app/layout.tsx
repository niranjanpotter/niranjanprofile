import type { Metadata, Viewport } from 'next';
import '@fontsource/bebas-neue/400.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/jetbrains-mono/400.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Niranjan Potter · Senior MuleSoft Developer & Technical Lead',
  description: 'Senior MuleSoft Developer and Technical Lead specializing in API-led connectivity, CloudHub 2.0, and enterprise integration.',
  openGraph: {
    title: 'Niranjan Potter · MuleSoft Tech Lead',
    description: 'API-led integration, DataWeave 2.0, CloudHub 2.0, and AWS.',
    images: ['/stills/face.jpg'],
  },
};

export const viewport: Viewport = { themeColor: '#000000', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
