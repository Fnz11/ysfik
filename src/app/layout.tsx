import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import BaseProvider from "@/components/Provider/BaseProvider";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ysfik's Portfolio",
  description:
    "Hello, I'm Fikri Nurdiansyah, but you can call me Ysfik. As a Fullstack Web Developer, I'm dedicated to turning visions into reality. Let's collaborate and unleash the full potential of your ideas.",
  authors: { name: "Fikri Nurdiansyah", url: "https://ysfik.my.id" },
  keywords: [
    "Ysfik",
    "Fikri",
    "Nurdiansyah",
    "Fikri Nurdiansyah",
    "Portfolio",
    "web developer",
    "frontend",
    "backend",
    "fullstack",
    "blockchain",
    "frontend developer",
    "backend developer",
    "fullstack developer",
    "blockchain developer",
    "freelancer",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/android-chrome-512x512.png",
  },
  manifest: "/site.webmanifest",
  publisher: "Fikri Nurdiansyah",
  category: "Portfolio",
  creator: "Fikri Nurdiansyah",
  alternates: {
    canonical: "https://ysfik.my.id",
  },
  applicationName: "Ysfik Portfolio",
  metadataBase: new URL("https://ysfik.my.id"),
  twitter: {
    card: "summary_large_image",
    title: "Ysfik's Portfolio",
    description:
      "Hello, I'm Fikri Nurdiansyah, but you can call me Ysfik. As a Fullstack Web Developer, I'm dedicated to turning visions into reality. Let's collaborate and unleash the full potential of your ideas.",
    creator: "Ysfik's Portfolio",
    images: ["https://ysfik.my.id/Banner.png"],
  },
  openGraph: {
    title: "Ysfik's Portfolio",
    description:
      "Hello, I'm Fikri Nurdiansyah, but you can call me Ysfik. As a Fullstack Web Developer, I'm dedicated to turning visions into reality. Let's collaborate and unleash the full potential of your ideas.",
    url: "https://ysfik.my.id/",
    siteName: "Ysfik's Portfolio",
    images: [
      {
        url: "https://ysfik.my.id/Banner.png",
        width: 1200,
        height: 1200,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"" + mulish.className}>
        <BaseProvider>{children}</BaseProvider>
      </body>
    </html>
  );
}
