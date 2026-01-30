import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50 text-gray-900 flex flex-col">
      <header className="p-4 md:p-6 flex flex-col md:flex-row justify-between items-center shadow bg-white">
        <h1 className="text-2xl font-bold mb-2 md:mb-0">
          Hacienda Tequilera
        </h1>
        <nav className="flex gap-4 text-sm md:text-base">
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <main className="flex-1 p-6 md:p-12 text-center flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Authentic Mexican Flavors
        </h2>
        <p className="mb-6 max-w-xl">
          Fresh tacos, premium tequila, and family tradition.
        </p>

        <Link
          href="/menu"
          className="bg-amber-600 text-white px-6 py-3 rounded-xl shadow hover:bg-amber-700 transition"
        >
          View Menu
        </Link>
      </main>

      <footer className="p-4 text-center text-sm bg-white shadow-inner">
        © {new Date().getFullYear()} Hacienda Tequilera
      </footer>
    </div>
  );
}
