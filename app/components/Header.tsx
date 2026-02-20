"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LEFT: Logo / Name */}
        <h1 className="text-2xl font-bold">
          Hacienda Tequilera
        </h1>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-6 text-base">
          <Link href="/" className="hover:text-red-700 transition">Home</Link>
          <Link href="/menu" className="hover:text-red-700 transition">Menu</Link>
          <Link href="/about" className="hover:text-red-700 transition">About</Link>
          <Link href="/contact" className="hover:text-red-700 transition">Contact</Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-4 text-base shadow">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/menu" onClick={() => setOpen(false)}>Menu</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
