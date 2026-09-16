import Calendar from "@/app/components/Calendar";
import { events } from "@/app/data/events";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events Calendar | Hacienda Tequilera",
  description: "Check out our upcoming events, live music, and special promotions at Hacienda Tequilera.",
};

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-parchment pt-20 pb-12">
      <main className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-brand-red font-sans font-bold uppercase tracking-widest mb-2 block">Join the Fiesta</span>
          <h1 className="text-5xl font-serif font-bold text-brand-green dark:text-brand-gold">Upcoming Events</h1>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-6"></div>
        </div>

        <Calendar events={events} />
      </main>
    </div>
  );
}
