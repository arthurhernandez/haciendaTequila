import type { MenuSection as MenuSectionType } from "@/app/types/menu";
import { menu } from "@/app/data/menu";

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
    <section className="bg-orange-50 dark:bg-neutral-90 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            {title}
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Fire-grilled classics, fresh seafood, and handcrafted drinks.
          </p>
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-3">
          {typedMenu.map((section) => (
            <div key={section.category}>
              <h3 className="text-2xl font-bold border-b pb-2 mb-4">
                {section.category}
              </h3>

              <ul className="space-y-4">
                {section.items.map((item) => (
                  <li key={item.id ?? item.name}>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold flex items-center">
                          {item.name}

                          {item.badges?.includes("spicy") && (
                            <img
                              src="/icons/chile.ico"
                              alt="Spicy"
                              title="Spicy – picante al gusto"
                              className="inline-block ml-2 w-4 h-4 hover:scale-110 transition"
                            />
                          )}
                          {item.badges?.includes("popular") && (
                            <img
                              src="/favicon.ico"
                              alt="Popular"
                              title="Popular"
                              className="inline-block ml-2 w-4 h-4 hover:scale-110 transition"
                            />
                          )}
                        </p>

                        {item.description && (
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {item.description}
                          </p>
                        )}
                      </div>

                      <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        {item.prices?.map((p, i) => (
                          <div key={i}>
                            {p.size && <span>{p.size} </span>}
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
          <div className="mt-16 text-center">
            <a
              href="/menu"
              className="inline-block bg-red-700 hover:bg-red-800 text-white px-10 py-3 rounded-lg font-semibold"
            >
              View Full Menu
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
