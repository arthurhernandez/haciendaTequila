import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
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
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased"> 
        <Header/>
        {children}
        </body>
    </html>
  );
}
