export default function AboutSection() {
  return (
    <section  className="pt-20 bg-amber/70 dark:bg-amber/70-950 py-20 ">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* TEXT */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
            About Taqueria Hacienda y Sabor
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Taqueria Hacienda Sabor is a family-owned Mexican restaurant serving
            authentic Mexican cuisine, fresh seafood, and fire-grilled
            specialties in <strong>[Summit, IL]</strong>.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            From our tequila-marinated arrachera and sizzling fajitas to our
            handcrafted ceviches and house specialties, every dish is prepared
            with bold flavors and fresh ingredients.
          </p>

          <p className="text-gray-700 dark:text-gray-300">
            Whether you're joining us for a casual lunch, family dinner, or a
            night out with friends, we invite you to experience the flavors and
            hospitality that make Taqueria Hacienda Sabor a local favorite.
          </p>

          {/* Local SEO signal */}
          <p className="mt-6 text-sm text-gray-500">
            📍 Located at <strong>6237 S Archer Rd, Summit, IL 60501</strong>
          </p>
        </div>

        {/* MAP */}
        <div className="w-full h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d380844.6582841704!2d-88.3737097!3d41.777694!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e370052554531%3A0xb48d6ce4b05d94f!2sHacienda%20Tequilera%20Y%20Sabor!5e0!3m2!1sen!2sus!4v1770330021229!5m2!1sen!2sus"
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl shadow"
          />
        </div>

      </div>
    </section>
  );
}
