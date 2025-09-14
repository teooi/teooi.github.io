import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Teo Imoto-Tar | Home",
  description: "Portfolio of Teo Imoto-Tar, undergraduate at UC San Diego. Projects include AI research, fMRI-to-image reconstruction, user recommendation systems, and software development.",
  keywords: [
    "Teo Imoto-Tar",
    "UC San Diego",
    "AI research",
    "computer vision",
    "neuroscience",
    "software engineering",
    "fMRI-to-image",
    "user recommendation"
  ],
  authors: [{ name: "Teo Imoto-Tar", url: "https://teooi.github.io" }],
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
        {children}
      </body>
    </html>
  );
}
