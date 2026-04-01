import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from 'next/script';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
} );

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HVAC Emergency AI Dispatcher Demo",
  description: "Experience the future of HVAC emergency services with our AI dispatcher demo. Instantly qualify leads and book priority slots, ensuring you never miss a service call again.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        
        {/* Tawk.to Chat Widget */}
        <Script
          src="https://embed.tawk.to/69cd1703b2f8a31c44a27ec5/1jl4i3q9k"
          strategy="lazyOnload"
        />
      </body>
    </html>
   );
}