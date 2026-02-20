import Link from "next/link";
import MenuSection from "@/app/components/MenuSection";
import Header from "@/app/components/Header";
import InstagramEmbed from "@/app/components/InstagramEmbed";
import Image from "next/image";


export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50 text-gray-900 flex flex-col">
      <main className="pt-16">
        {/* HERO */}
        <section className="relative h-[65vh] sm:h-[60vh] lg:h-[70vh] flex items-center justify-center text-white overflow-hidden">
          <Image
            src="/images/mariscos.png"
            alt="Hacienda Tequilera authentic Mexican food and seafood in Summit Illinois"
            fill
            priority
            className="object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Hacienda Tequilera<br />
            </h1>
            <h2 className="pt-2 text-3xl sm:text-3xl lg:text-5xl font-extrabold tracking-tight">
              El Sabor de México<br />
            </h2>

            <p className="mt-6 text-lg sm:text-xl text-gray-800 dark:text-gray-200 max-w-2xl mx-auto">
              Fire-grilled meats, fresh seafood, and premium tequila —
              built for big appetites and good times.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/menu"
                className="bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-lg font-semibold"
                >
                Menú
              </Link>

              <button className="border border-foreground px-8 py-3 rounded-lg font-semibold">
                Private Events
              </button>
            </div>
          </div>
        </section>
      </main>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Favoritos
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            From sizzling steaks to seafood classics.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border rounded-xl p-6">
              <h3 className="font-bold text-xl">Quesabirrias</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Tres tacos de Birria de res y costra de queso sumergidas en consommé.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="font-bold text-xl">Piña Rellena</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Camarón, pulpo, jaiba, y 3 mejillones con queso fundido.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="font-bold text-xl">Arrachera Tequilera</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                (Carne, camarones a la plancha con nopales, jalapeno, guacamole y tortillas
              </p>
            </div>
          </div>

          <div className="mt-12">

            <Link
              href="/menu"
              className="inline-block bg-red-700 hover:bg-red-800 text-white px-10 py-3 rounded-lg font-semibold transition"
            >
              Menú
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="bg-brown/70 backdrop-blur-md">
        <InstagramEmbed
          postUrls={[
            "https://www.instagram.com/reel/DU9av4lj2k5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
            "https://www.instagram.com/p/DU9znb1jOka/",
            "https://www.instagram.com/p/DUj-iAEjMe6/",
          ]}
        />
      </section>
      {/* Instagram Section */}



      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Private Events & Celebrations
          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            Birthdays, corporate events, and celebrations —
            hosted with bold food, full bar service, and space to gather.
          </p>

          <div className="mt-10">
            <button className="bg-red-700 hover:bg-red-800 text-white px-10 py-3 rounded-lg font-semibold">
              Plan Your Event
            </button>
          </div>
        </div>
      </section>

      <footer className="p-4 text-center text-sm bg-white shadow-inner">
        © {new Date().getFullYear()} Hacienda Tequilera
      </footer>
    </div>
  );
}
