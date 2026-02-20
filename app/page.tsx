import Link from "next/link";
import MenuSection from "@/app/components/MenuSection";
import Header from "@/app/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50 text-gray-900 flex flex-col">
    <main>
      {/* HERO */}
  <section className="relative h-[60vh] sm:h-[60vh] lg:h-[70vh] flex items-center justify-center text-white overflow-hidden">
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
      El Sabor De Mexico
    </h1>

    <p className="mt-6 text-lg sm:text-xl text-gray-800 dark:text-gray-200 max-w-2xl mx-auto">
      Fire-grilled meats, fresh seafood, and premium tequila —
      built for big appetites and good times.
    </p>

    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
      <button className="bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-lg font-semibold">
        View Menu
      </button>
      <button className="border border-foreground px-8 py-3 rounded-lg font-semibold">
        Book an Event
      </button>
    </div>
  </div>
</section>
</main>

<section className="py-16">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-3xl sm:text-4xl font-extrabold">
      Crowd Favorites
    </h2>

    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
      From sizzling plates to seafood classics.
    </p>

    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div className="border rounded-xl p-6">
        <h3 className="font-bold text-xl">Grilled Carne Asada</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Marinated steak, charred to perfection.
        </p>
      </div>

      <div className="border rounded-xl p-6">
        <h3 className="font-bold text-xl">Shrimp & Garlic Butter</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Fresh shrimp sautéed with herbs and spice.
        </p>
      </div>

      <div className="border rounded-xl p-6">
        <h3 className="font-bold text-xl">House Margarita</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Fresh lime, premium tequila, no shortcuts.
        </p>
      </div>
    </div>

    <div className="mt-12">
      <button className="bg-red-700 hover:bg-red-800 text-white px-10 py-3 rounded-lg font-semibold">
        Full Menu
      </button>
    </div>
  </div>
</section>



<section className="bg-gray-100 dark:bg-gray-900 py-16">
  <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-3 text-center">
    <div>
      <h3 className="text-2xl font-bold">Fire-Grilled Meats</h3>
      <p className="mt-3 text-gray-600 dark:text-gray-400">
        Steaks, chicken, and specialties grilled over open flame.
      </p>
    </div>

    <div>
      <h3 className="text-2xl font-bold">Fresh Seafood</h3>
      <p className="mt-3 text-gray-600 dark:text-gray-400">
        Shrimp, fish, and coastal favorites prepared daily.
      </p>
    </div>

    <div>
      <h3 className="text-2xl font-bold">Full Bar & Tequila</h3>
      <p className="mt-3 text-gray-600 dark:text-gray-400">
        Handcrafted cocktails, margaritas, and top-shelf tequila.
      </p>
    </div>
  </div>
  
</section>


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
