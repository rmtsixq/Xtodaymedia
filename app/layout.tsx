import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "X times - The Middle East's largest student-led academic journal",
  description: "Delivering trustworthy journalism through articles, videos, and podcasts with a focus on user experience and accessibility.",
  keywords: "journalism, academic journal, Middle East, student-led, articles, videos, podcasts, STEM, politics, philosophy, women rights",
  authors: [{ name: "X times Editorial Team" }],
  openGraph: {
    title: "X times",
    description: "The Middle East's largest student-led academic journal",
    type: "website",
    locale: "en_US",
    siteName: "X times",
  },
  twitter: {
    card: "summary_large_image",
    title: "X times",
    description: "The Middle East's largest student-led academic journal",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
