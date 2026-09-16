import Link from "next/link";
import MenuSection from "@/app/components/MenuSection";
import Header from "@/app/components/Header";
import InstagramEmbed from "@/app/components/InstagramEmbed";
import Image from "next/image";


export default function Home() {
  return (
    <div className="min-h-screen bg-parchment text-charcoal flex flex-col selection:bg-brand-gold/30">
      <main className="pt-16">
        {/* HERO */}
        <section className="relative h-[70vh] flex items-center justify-center text-white overflow-hidden">
          <Image
            src="/images/mariscos.png"
            alt="Hacienda Tequilera authentic Mexican food and seafood in Summit Illinois"
            fill
            priority
            className="object-cover scale-105"
          />

          {/* Elegant Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <span className="block text-brand-gold font-sans font-bold uppercase tracking-[0.3em] mb-4 animate-fade-in">
              Bienvenido a
            </span>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-bold tracking-tight leading-tight">
              Hacienda <span className="text-brand-gold">Tequilera</span>
            </h1>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-serif italic text-parchment/90">
              El Sabor de México
            </h2>

            <p className="mt-8 text-lg sm:text-xl text-parchment/80 max-w-2xl mx-auto font-sans leading-relaxed">
              Fire-grilled meats, fresh seafood, and premium tequila —
              crafted for big appetites and unforgettable moments.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/menu"
                className="bg-brand-red hover:bg-brand-red/90 text-white px-10 py-4 rounded font-bold uppercase tracking-widest transition-all hover:scale-105 shadow-xl"
              >
                View Menu
              </Link>

              <Link
                href="/contact"
                className="border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-green px-10 py-4 rounded font-bold uppercase tracking-widest transition-all"
              >
                Private Events
              </Link>
            </div>
          </div>
        </section>
      </main>

      <section className="py-16 bg-white dark:bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex flex-col items-center mb-10">
            <span className="text-brand-red font-sans font-bold uppercase tracking-widest mb-2">Our Specialties</span>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-brand-green dark:text-brand-gold">
              Favoritos de la Casa
            </h2>
            <div className="w-24 h-1 bg-brand-gold mt-4"></div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Quesabirrias",
                desc: "Tres tacos de Birria de res y costra de queso sumergidas en consommé.",
                image: "/images/birria.png" // Fallback to placeholder if not exists
              },
              {
                title: "Piña Rellena",
                desc: "Camarón, pulpo, jaiba, y 3 mejillones con queso fundido servido en piña.",
                image: "/images/pina.png"
              },
              {
                title: "Arrachera Tequilera",
                desc: "Carne asada premium, camarones a la plancha con nopales, jalapeño y guacamole.",
                image: "/images/arrachera.png"
              }
            ].map((dish, i) => (
              <div key={i} className="group bg-parchment dark:bg-black/20 rounded-2xl p-1 overflow-hidden transition-all hover:shadow-2xl">
                <div className="bg-white dark:bg-charcoal rounded-[calc(1rem-4px)] p-8 h-full border border-brand-gold/10">
                  <h3 className="font-serif font-bold text-2xl mb-4 text-brand-red group-hover:text-brand-gold transition-colors italic">
                    {dish.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-sans leading-relaxed">
                    {dish.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <Link
              href="/menu"
              className="inline-block bg-brand-green hover:bg-brand-green/90 text-white px-12 py-4 rounded font-bold uppercase tracking-widest transition-all shadow-lg"
            >
              Explore Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-16 bg-parchment/50 backdrop-blur-md border-y border-brand-gold/20">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <h2 className="text-3xl font-serif font-bold italic text-brand-green">Follow the Vibe</h2>
          <p className="text-brand-red font-bold">@HaciendaTequilera</p>
        </div>
        <InstagramEmbed
          postUrls={[
            "https://www.instagram.com/reel/DU9av4lj2k5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
            "https://www.instagram.com/p/DU9znb1jOka/",
            "https://www.instagram.com/p/DUj-iAEjMe6/",
          ]}
        />
      </section>

      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-red/5 -z-10"></div>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-6xl font-serif font-bold mb-8 text-brand-green dark:text-brand-gold">
            Private Events & Celebrations
          </h2>

          <p className="text-xl text-gray-700 dark:text-parchment/70 font-sans leading-relaxed max-w-3xl mx-auto">
            Birthdays, corporate events, and family gatherings —
            hosted with bold Mexican flavors, full bar service, and space to celebrate.
          </p>

          <div className="mt-12">
            <Link
              href="/contact"
              className="bg-brand-red hover:bg-brand-red/90 text-white px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] transition-all shadow-xl inline-block"
            >
              Plan Your Event
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center bg-brand-green text-parchment border-t border-brand-gold/30">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-serif font-bold text-brand-gold mb-6">Hacienda Tequilera</h3>
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} Hacienda Tequilera. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
