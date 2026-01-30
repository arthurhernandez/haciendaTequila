import { menu } from "@/app/data/menu";

type MenuSectionProps = {
  title?: string;
  showButton?: boolean;
};

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
          {menu.map((section) => (
            <div key={section.category}>
              <h3 className="text-2xl font-bold border-b pb-2 mb-4">
                {section.category}
              </h3>

              <ul className="space-y-4">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
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
