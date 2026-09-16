"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Events", path: "/events" },
    { name: "Photos", path: "/photos" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-charcoal/80 border-b border-brand-gold/20 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* LEFT: Logo */}
        <Link href="/" className="group">
          <h1 className="text-2xl font-serif font-bold text-brand-red group-hover:text-brand-gold transition-colors">
            Hacienda Tequilera
          </h1>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`relative py-1 text-sm font-semibold uppercase tracking-widest transition-colors ${
                pathname === item.path
                  ? "text-brand-red after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-brand-red"
                  : "text-charcoal hover:text-brand-red dark:text-parchment dark:hover:text-brand-gold"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link 
            href="/menu" 
            className="bg-brand-red hover:bg-brand-red/90 text-white px-5 py-2 rounded text-xs font-bold uppercase tracking-tighter transition shadow-md"
          >
            Order Now
          </Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <span
            className={`block h-0.5 w-6 bg-brand-red transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-brand-red transition-all duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-brand-red transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-parchment dark:bg-charcoal shadow-2xl overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 py-12">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setOpen(false)}
              className={`text-xl font-serif font-bold tracking-wide transition-colors ${
                pathname === item.path ? "text-brand-red" : "text-charcoal dark:text-parchment"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}