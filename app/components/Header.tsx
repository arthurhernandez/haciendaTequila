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
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-amber/50 shadow transition">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LEFT: Logo */}
        <h1 className="text-2xl font-bold">Hacienda Tequilera</h1>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-6 text-base">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`relative px-2 py-1 font-medium transition ${
                pathname === item.path
                  ? "text-red-700 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-red-700"
                  : "text-gray-700 hover:text-red-700"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1"
        >
          <span
            className={`block h-1 w-full bg-black transition-transform duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-1 w-full bg-black transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-1 w-full bg-black transition-transform duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* MOBILE DROPDOWN - Next Level Animation */}
      <div
        className={`md:hidden fixed top-full left-0 w-full bg-white shadow-lg overflow-hidden transform-gpu transition-all duration-500 ease-out ${
          open
            ? "max-h-[500px] opacity-100 scale-y-100"
            : "max-h-0 opacity-0 scale-y-95"
        }`}
        style={{ transformOrigin: "top" }}
      >
        <nav className="flex flex-col gap-4 px-6 py-4 text-base">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setOpen(false)}
              className={`py-2 font-medium transition ${
                pathname === item.path ? "text-red-700" : "text-gray-700 hover:text-red-700"
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