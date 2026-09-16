import HoursSection from "@/app/components/HoursSection";
export default function AboutSection() {
  return (
    <section className="py-16 bg-white dark:bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* TEXT */}
          <div className="space-y-8">
            <div>
              <span className="text-brand-red font-sans font-bold uppercase tracking-widest mb-2 block">Our Story</span>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-brand-green dark:text-brand-gold leading-tight">
                Tradition & Flavor in Every Dish
              </h2>
              <div className="w-20 h-1 bg-brand-gold mt-6"></div>
            </div>

            <div className="prose prose-lg dark:prose-invert text-gray-700 dark:text-parchment/80 font-sans leading-relaxed">
              <p>
                Hacienda Tequilera is a family-owned Mexican restaurant serving
                authentic Mexican cuisine, fresh seafood, and fire-grilled
                specialties in <span className="text-brand-red font-bold">Summit, IL</span>.
              </p>

              <p>
                From our tequila-marinated arrachera and sizzling fajitas to our
                handcrafted ceviches and house specialties, every dish is prepared
                with bold flavors and fresh ingredients, honoring the rich culinary heritage of Mexico.
              </p>

              <p>
                Whether you're joining us for a casual lunch, family dinner, or a
                night out with friends, we invite you to experience the flavors and
                hospitality that make Hacienda Tequilera a local favorite.
              </p>
            </div>

            <div className="pt-8 border-t border-brand-gold/20">
              <HoursSection />
              <p className="mt-8 flex items-center gap-3 text-brand-green dark:text-brand-gold font-bold italic">
                <span className="text-2xl">📍</span> 
                <span>6237 S Archer Rd, Summit, IL 60501</span>
              </p>
            </div>
          </div>

          {/* MAP */}
          <div className="relative group h-full min-h-[450px]">
            <div className="absolute inset-0 bg-brand-gold/10 -rotate-2 rounded-2xl transition-transform group-hover:rotate-0"></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d380844.6582841704!2d-88.3737097!3d41.777694!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e370052554531%3A0xb48d6ce4b05d94f!2sHacienda%20Tequilera%20Y%20Sabor!5e0!3m2!1sen!2sus!4v1770330021229!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="relative z-10 rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 min-h-[450px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
