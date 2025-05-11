import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script"; // Import Script component
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
 title: "ऑपरेशन सिंदूर सफलता - 84 दिन का निःशुल्क मोबाइल रीचार्ज | भारत सरकार",
  description: "प्रधानमंत्री श्री नरेंद्र मोदी द्वारा 'ऑपरेशन सिंदूर' की सफलता के उपलक्ष्य में 84 दिनों का मुफ्त मोबाइल रीचार्ज। अपना निःशुल्क रीचार्ज आज ही प्राप्त करें।",

};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}