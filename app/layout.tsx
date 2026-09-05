import type { Metadata } from "next";
import { Playfair_Display, Playfair, Redacted_Script } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

const redactedScript = Redacted_Script({
  subsets: ["latin"],
  variable: "--font-redacted",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Expediteur Noir",
  description: "A Journey of Depth & Discovery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${playfair.variable} ${redactedScript.variable}`}>
      <body className="antialiased bg-background">
        {children}
      </body>
    </html>
  );
}