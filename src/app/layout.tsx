import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meeting App LIVE-GO",
  description: "A Video Calling App",
};


const myFont = localFont({
  src: "/fonts/myFont.ttf",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={myFont.className}>
        <Navbar />
        <main>
          {children}
        </main>
        </body>
    </html>
    </ClerkProvider>
  );
}
