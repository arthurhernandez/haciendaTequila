"use client";

import { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa";

export default function HoursSection() {
  const [isOpen, setIsOpen] = useState(false);

  // Simple open logic (adjust times as needed)
  useEffect(() => {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday
    const hour = now.getHours();

    let open = false;

    if (day >= 1 && day <= 4) {
      // Mon–Thu 11am–9pm
      open = hour >= 11 && hour < 21;
    } else if (day === 5) {
      // Friday 11am–2am
      open = hour >= 11 || hour < 2;
    } else if (day === 6) {
      // Saturday 11am–2am
      open = hour >= 11 || hour < 2;
    } else if (day === 0) {
      // Sunday 11am–10pm
      open = hour >= 11 && hour < 22;
    }

    setIsOpen(open);
  }, []);

  return (
    <section className="py-8">
      <div className="text-left">

        {/* Title */}
        <div className="flex items-center gap-3 mb-6">
          <FaClock className="text-brand-gold text-2xl" />
          <h3 className="text-2xl font-serif font-bold text-brand-green dark:text-brand-gold">
            Hours of Operation
          </h3>
          <span
            className={`ml-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition ${
              isOpen
                ? "bg-green-100 text-green-700"
                : "bg-brand-red/10 text-brand-red"
            }`}
          >
            {isOpen ? "Open Now" : "Closed"}
          </span>
        </div>

        {/* Hours Card */}
        <div className="grid gap-4 text-base font-sans">

          <div className="flex justify-between border-b border-brand-gold/10 pb-2">
            <span className="font-bold text-charcoal/70 dark:text-parchment/70">Mon - Thu</span>
            <span className="text-brand-red font-semibold">11:00 AM – 9:00 PM</span>
          </div>

          <div className="flex justify-between border-b border-brand-gold/10 pb-2">
            <span className="font-bold text-charcoal/70 dark:text-parchment/70">Friday</span>
            <span className="text-brand-red font-semibold">11:00 AM – 2:00 AM</span>
          </div>

          <div className="flex justify-between border-b border-brand-gold/10 pb-2">
            <span className="font-bold text-charcoal/70 dark:text-parchment/70">Saturday</span>
            <span className="text-brand-red font-semibold">11:00 AM – 2:00 AM</span>
          </div>

          <div className="flex justify-between">
            <span className="font-bold text-charcoal/70 dark:text-parchment/70">Sunday</span>
            <span className="text-brand-red font-semibold">11:00 AM – 10:00 PM</span>
          </div>

        </div>

      </div>
    </section>
  );
}