import type { MenuSection as MenuSectionType } from "@/app/types/menu";
import { menu } from "@/app/data/menu";
import Link from "next/link";

type MenuSectionProps = {
  title?: string;
  showButton?: boolean;
};
const typedMenu: MenuSectionType[] = menu;

export default function MenuSection({
  title = "Our Menu",
  showButton = true,
}: MenuSectionProps) {
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
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {typedMenu.map((section) => (
            <div key={section.category} className="group">
              <h3 className="text-2xl font-serif font-bold text-brand-red border-b-2 border-brand-gold/30 pb-3 mb-8 uppercase tracking-widest">
                {section.category}
              </h3>

              <ul className="space-y-8">
                {section.items.map((item) => (
                  <li key={item.id ?? item.name} className="group/item">
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
                            {p.size && <span className="text-[10px] uppercase tracking-tighter text-gray-500 mr-1">{p.size}</span>}
                            ${p.price.toFixed(2)}
                          </div>
                        ))}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
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
