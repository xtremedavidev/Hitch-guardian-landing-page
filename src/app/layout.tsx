"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script"; // Import Script from next/script
import "./globals.css";
import { Footer, Navbar } from "@/components";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hitch Guardian",
  description: "Empower your workflow with seamless crew management",
  icons: {
    icon: "/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {(
          <GoogleTagManager gtmId={'G-5MBQH4P43M'} />
        )}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16742497543"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16742497543');
          `}
        </Script>
        <Script id="conversion-event">
          {`
            gtag('event', 'conversion', {'send_to': 'AW-16742497543/ebxfCMzX8d0ZEIf6uK8-'});
          `}
        </Script>
      </head>

      <body className={`${inter.className} bg-[#010003] text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
