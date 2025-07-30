import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Media Website - Independent Journalism & News",
  description: "Your trusted source for independent journalism, in-depth analysis, and compelling stories. Quality content across articles, videos, and podcasts.",
  keywords: "news, journalism, articles, videos, podcasts, media, independent news",
  authors: [{ name: "Media Website Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Media Website - Independent Journalism & News",
    description: "Your trusted source for independent journalism, in-depth analysis, and compelling stories.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Media Website - Independent Journalism & News",
    description: "Your trusted source for independent journalism, in-depth analysis, and compelling stories.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}