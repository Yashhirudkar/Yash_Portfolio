import type { Metadata } from "next";
import { Inter, Space_Grotesk, Oswald } from "next/font/google";
import "./globals.css";
import { DynamicTitle } from "@/components/DynamicTitle";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk" });
const oswald = Oswald({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-oswald" });
const url = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yashhirudkar.dev";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: "Yash Hirudkar — Full Stack Developer",
  description: "Full Stack Developer building enterprise CRM/ERP, real-time and payment systems with Node.js, PostgreSQL, React and Next.js.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: { title: "Yash Hirudkar — Full Stack Developer", description: "Enterprise-grade SaaS, CRM/ERP and payment platforms.", url, type: "website", siteName: "Yash Hirudkar" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable} ${oswald.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body>
        <DynamicTitle />
        {children}
      </body>
    </html>
  );
}
