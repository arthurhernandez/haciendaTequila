import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/app/components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://haciendatequilera.com"),
  title: { default: "Hacienda Tequilera | Authentic Mexican Bar, Restaurant, & Private Events",
           template:"%s | Hacienda Tequilera",
  },
  description: "Hacienda Tequilera serves authentic Mexican food, handcrafted margaritas and cocktails, and a vibrant dining atmosphere. We also offer private event spaces with catering, music, lighting, and dance floor options for unforgettable celebrations.",
  keywords: [
    "Mexican restaurant",
    "Hacienda Tequila",
    "Hacienda Tequilera",
    "Tacos",
    "Margaritas",
    "tequila bar",
    "Mexican food",
    "Private Events",
    "Caldo",
    "Marisco",
    "Platillos",
    "Charolas",
    "Pasta",
    "Botana"
  ],
    openGraph: {
    title: "Hacienda Tequilera",
    description:
      "Authentic Mexican Bar, Restaurant, & Private Events.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans"> 
        <Header/>
        {children}
        </body>
    </html>
  );
}
