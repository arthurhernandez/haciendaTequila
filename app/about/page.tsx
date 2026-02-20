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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "Taqueria Hacienda Sabor",
            "description":
              "Taqueria Hacienda Sabor offers authentic Mexican cuisine and fresh seafood in Summit, IL.",
            "image": "/path/to/your-restaurant-photo.jpg", // optional but recommended
            "telephone": "(708) 929-4378",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "6237 S Archer Rd",
              "addressLocality": "Summit",
              "addressRegion": "IL",
              "postalCode": "60501",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 41.7875,
              "longitude": -87.8104
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "11:00",
                "closes": "22:00"
              }
            ],
            "servesCuisine": [
              "Mexican",
              "Seafood",
              "Grill"
            ],
            "priceRange": "$$",
            "url": "https://yourwebsite.com",
            "hasMap": "https://www.google.com/maps/place/6237+S+Archer+Rd,+Summit,+IL+60501"
          }),
        }}
      />
      <main>
        <AboutSection />
      </main>
    </>
  );
}