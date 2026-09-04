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

export const metadata = {
  title: "Abhishal KS Portfolio",
  description: "Abhishal KS - Professional Portfolio",
  metadataBase: new URL("https://rytshark-port.vercel.app"),
  openGraph: {
    title: "Abhishal KS Portfolio",
    description: "Abhishal KS - Professional Portfolio",
    url: "https://rytshark-port.vercel.app/",
    siteName: "Abhishal KS Portfolio",
    images: [
      {
        url: "/og-hero.png",
        width: 1920,
        height: 1080,
        alt: "Abhishal KS portfolio website hero section",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishal KS Portfolio",
    description: "Abhishal KS - Professional Portfolio",
    images: ["/og-hero.png"],
  },
};

export default function RootLayout({ children }) {
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
