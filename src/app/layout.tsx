import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GA_MEASUREMENT_ID = "G-GM5PX1L2JX";

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
  icons: {
    icon: [
      { url: "/aoc-favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/aoc-favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "The Art of Construction",
    description: "The #1 Construction Industry Podcast & Community",
    type: "website",
    locale: "en_US",
    siteName: "The Art of Construction",
    images: ["/images/podcast-cover.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Art of Construction",
    description: "The #1 Construction Industry Podcast & Community",
    images: ["/images/podcast-cover.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
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
