import Header from "@/app/components/Header";
import HoursSection from "@/app/components/HoursSection";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-parchment pt-14 pb-12">
      <main className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-brand-red font-sans font-bold uppercase tracking-widest mb-2 block">Get in Touch</span>
          <h1 className="text-5xl font-serif font-bold text-brand-green dark:text-brand-gold">Contact Us</h1>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 bg-white dark:bg-charcoal p-8 rounded-2xl shadow-xl border border-brand-gold/10">
            <div>
              <h2 className="text-2xl font-serif font-bold text-brand-red mb-4">Location</h2>
              <p className="text-gray-700 dark:text-parchment/70 font-sans">
                6237 S Archer Rd,<br />
                Summit, IL 60501
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-brand-red mb-4">Phone</h2>
              <a href="tel:7089294378" className="text-brand-green dark:text-brand-gold font-bold text-xl hover:underline transition">
                (708) 886-6800
              </a>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-brand-red mb-4">Email</h2>
              <p className="text-gray-700 dark:text-parchment/70 font-sans">
                haciendatequilera@icloud.com
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-charcoal p-8 rounded-2xl shadow-xl border border-brand-gold/10">
            <HoursSection />
          </div>
        </div>

        <div className="mt-16 bg-brand-green text-parchment p-12 rounded-3xl text-center shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full -mr-16 -mt-16"></div>
           <h2 className="text-3xl font-serif font-bold mb-4">Planning a Private Event?</h2>
           <p className="text-lg opacity-80 mb-8 font-sans">We'd love to help you celebrate your special occasion.</p>
           <a href="tel:7088866800" className="bg-brand-red hover:bg-brand-red/90 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-all inline-block shadow-lg">
             Call to Reserve
           </a>
        </div>
      </main>
    </div>
  );
}