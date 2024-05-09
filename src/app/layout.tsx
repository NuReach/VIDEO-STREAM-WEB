import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import { ClerkProvider } from '@clerk/nextjs';
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import ClientProvider from "./ClientProvider";
import './globals.css';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meeting App LIVE-GO",
  description: "A Video Calling App",
  icons : {
    icon : ['./favicon.ico']
  }
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
        <ClientProvider>
          <Navbar />
          <main className="mx-auto max-w-5xl px-3 py-6">{children}</main>
        </ClientProvider>
        </body>
    </html>
    </ClerkProvider>
  );
}
