import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SWRegister from "./sw-register";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  applicationName: "IdeaCards",
  title: "IdeaCards",
  description: "A doomscrolling alternative: concise idea cards.",
  manifest: "/manifest.json",
  themeColor: "#0b0f1a",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "IdeaCards",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport = {
  themeColor: "#0b0f1a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SWRegister />
        {children}
      </body>
    </html>
  );
}
