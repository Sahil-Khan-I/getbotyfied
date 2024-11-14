import "./globals.css";
import { Inter } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';

// Initialize the Inter font
const inter = Inter({ subsets: ['latin'] });

// Metadata for the application
export const metadata = {
  title: "Getbotified - Seamless Chatbot Integration",
  description: "Getbotified offers easy chatbot integration for your website, empowering you to engage with your audience effortlessly.",
  keywords: "chatbot, integration, website engagement, Getbotified, AI, automation",
  openGraph: {
    title: "Getbotified - Integrate Your Chatbot Effortlessly",
    description: "Discover how Getbotified can help you enhance your website with powerful chatbot features.",
    url: "https://your-domain.com", // Replace with your domain
    type: "website",
    image: "https://your-domain.com/og-image.jpg", // Replace with your OG image URL
  },
  robots: "index, follow",
  canonical: "https://your-domain.com", // Replace with your site's URL
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content={metadata.robots} />
        <link rel="canonical" href={metadata.canonical} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.image} />

        <title>{metadata.title}</title>
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
