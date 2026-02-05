import Link from "next/link";

export default function Header() {
  return (

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

  );
}

