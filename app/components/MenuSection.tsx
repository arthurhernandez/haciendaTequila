"use client";

import { useState } from "react";
import type { MenuSection as MenuSectionType, MenuItem as MenuItemType } from "@/app/types/menu";
import { menu } from "@/app/data/menu";
import Link from "next/link";
import { FaFilePdf, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

type MenuSectionProps = {
  title?: string;
  showButton?: boolean;
};
const typedMenu: MenuSectionType[] = menu;

export default function MenuSection({
  title = "Our Menu",
  showButton = true,
}: MenuSectionProps) {
  const [openCategories, setOpenCategories] = useState<string[]>(
    typedMenu.map((s) => s.category)
  );

  const toggleCategory = (category: string) => {
    setOpenCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <section className="bg-parchment dark:bg-charcoal py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-brand-green dark:text-brand-gold">
            {title}
          </h2>
          <div className="w-20 h-1 bg-brand-red mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-parchment/70 max-w-2xl mx-auto font-sans italic">
            Fire-grilled classics, fresh seafood, and handcrafted drinks.
          </p>

          <div className="flex justify-center mt-6">
            <a
              href="/menu-pdf.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-brand-red text-brand-red px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-brand-red hover:text-white transition-all shadow-sm"
            >
              <FaFilePdf className="text-lg" />
              View PDF Menu
            </a>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {typedMenu.map((section) => (
            <div key={section.category} className="group">
              <button
                onClick={() => toggleCategory(section.category)}
                className="w-full flex justify-between items-center text-left md:pointer-events-none group/btn"
              >
                <h3 className="text-2xl font-serif font-bold text-brand-red border-b-2 border-brand-gold/30 pb-3 mb-8 uppercase tracking-widest flex-1">
                  {section.category}
                </h3>
                <span className="md:hidden text-brand-red mb-8 border-b-2 border-brand-gold/30 pb-3 px-2">
                  {openCategories.includes(section.category) ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openCategories.includes(section.category) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden md:hidden"
                  >
                    <ul className="space-y-8 pb-8">
                      {section.items.map((item) => (
                        <MenuItem key={item.id ?? item.name} item={item} />
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Desktop view fallback (always visible) */}
              <div className="hidden md:block">
                <ul className="space-y-8">
                  {section.items.map((item) => (
                    <MenuItem key={item.id ?? item.name} item={item} />
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {showButton && (
          <div className="mt-20 text-center">
            <Link
              href="/menu"
              className="inline-block bg-brand-red hover:bg-brand-red/90 text-white px-12 py-4 rounded font-bold uppercase tracking-widest transition-all shadow-lg"
            >
              View Full Menu
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

function MenuItem({ item }: { item: MenuItemType }) {
  return (
    <li className="group/item">
      <div className="flex justify-between items-baseline gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <p className="font-serif font-bold text-lg text-brand-green dark:text-parchment group-hover/item:text-brand-red transition-colors">
              {item.name}
            </p>
            {item.badges?.includes("spicy") && (
              <img
                src="/icons/chile.ico"
                alt="Spicy"
                title="Spicy – picante al gusto"
                className="w-4 h-4"
              />
            )}
          </div>
          {item.description && (
            <p className="text-sm text-gray-600 dark:text-gray-400 font-sans leading-relaxed">
              {item.description}
            </p>
          )}
        </div>
        <div className="text-right font-serif font-bold text-brand-red">
          {item.prices?.map((p, i) => (
            <div key={i} className="whitespace-nowrap">
              {p.size && (
                <span className="text-[10px] uppercase tracking-tighter text-gray-500 mr-1">
                  {p.size}
                </span>
              )}
              ${p.price.toFixed(2)}
            </div>
          ))}
        </div>
      </div>
    </li>
  );
}
