import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "The Art of Construction | Podcast & Master Facilitators Community",
  description: "Join Devon Tilly and the tribe of Master Facilitators. We connect Systems Built Builders and affiliates to the right construction technologies and products. 600,000+ global listeners.",
  keywords: ["construction podcast", "master facilitators", "Devon Tilly", "construction technology", "offsite construction", "prefab", "building industry"],
  openGraph: {
    title: "The Art of Construction",
    description: "The #1 Construction Industry Podcast & Community",
    type: "website",
    locale: "en_US",
    siteName: "The Art of Construction",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Art of Construction",
    description: "The #1 Construction Industry Podcast & Community",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
