import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b bg-background">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-extrabold">
          Hacienda Tequila
        </Link>

        <div className="flex gap-6 font-semibold">
          <Link href="/menu">Menu</Link>
          <Link href="/#events">Events</Link>
          <Link href="/#location">Location</Link>
        </div>
      </nav>
    </header>
  );
}

