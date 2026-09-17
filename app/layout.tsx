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
  title: "Cozy Architecture | Premier Architectural Design in Sri Lanka",
  description:
    "Cozy Architecture — crafting timeless spaces across Sri Lanka. Specializing in Architecture Design, Interior Design, Landscaping, and Vastu Shastra. Experience design excellence.",
  keywords: "architecture, interior design, landscaping, vastu shastra, Sri Lanka, Colombo",
  openGraph: {
    title: "Cozy Architecture | Premier Architectural Design in Sri Lanka",
    description:
      "Crafting spaces that blend elegance, functionality, and timeless beauty. Your dream architecture, realized.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
