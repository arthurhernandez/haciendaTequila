import type { Metadata } from "next";
import AboutSection from "@/app/components/AboutSection";

export const metadata: Metadata = {
  title: "About Hacienda Tequilera & Sabor | Authentic Mexican & Seafood",
  description:
    "Taqueria Hacienda Sabor offers authentic Mexican food, fresh seafood, and grilled specialties in Summit, IL. Family-owned, bold flavors, and handcrafted recipes.",
  keywords: [
    "Mexican restaurant",
    "seafood restaurant",
    "taqueria",
    "Mexican food near me",
    "grilled meats",
    "ceviche",
    "fajitas",
    "Hacienda Tequilera & Sabor",
    "Hacienda",
    "Tequilera",
    "Chicago",
    "Mexican Resturant in Summit"
  ],
};
export default function AboutPage() {
  return (
    <main>
      <AboutSection />
    </main>
  );
}