import type { Metadata } from "next";
import { Bodoni_Moda, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const bodoniModa = Bodoni_Moda({
  variable: "--font-display-lg",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const dmSans = DM_Sans({
  variable: "--font-body-md",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Lumira Restaurant",
    default: "Lumira | The Art of Modern Mediterranean",
  },
  description: "A culinary journey through the flavors of the coast, reimagined for the discerning palate.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Lumira Restaurant",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${bodoniModa.variable} ${dmSans.variable} font-body-md bg-background text-on-background selection:bg-tertiary-fixed selection:text-on-tertiary-fixed antialiased`} suppressHydrationWarning>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
