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
    <section className="py-8 sm:py-16 bg-amber-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">

        {/* Title */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
          <FaClock className="text-yellow-600 text-2xl sm:text-3xl" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Our Hours
          </h2>
        </div>

        {/* Open Now Indicator */}
        <div className="mb-6 sm:mb-10">
          <span
            className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition ${
              isOpen
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {isOpen ? "Open Now" : "Closed"}
          </span>
        </div>

        {/* Hours Card */}
        <div className="bg-white shadow-2xl rounded-3xl p-4 sm:p-8 grid gap-3 sm:gap-5 text-sm sm:text-lg transition transform hover:scale-[1.02] hover:shadow-amber-200 w-full">

          <div className="flex flex-col sm:flex-row justify-between border-b pb-2 sm:pb-3">
            <span className="font-semibold">Monday - Thursday</span>
            <span>11:00 AM – 9:00 PM</span>
          </div>

          <div className="flex flex-col sm:flex-row justify-between border-b pb-2 sm:pb-3">
            <span className="font-semibold">Friday</span>
            <span>11:00 AM – 2:00 AM</span>
          </div>

          <div className="flex flex-col sm:flex-row justify-between border-b pb-2 sm:pb-3">
            <span className="font-semibold">Saturday</span>
            <span>11:00 AM – 2:00 AM</span>
          </div>

          <div className="flex flex-col sm:flex-row justify-between">
            <span className="font-semibold">Sunday</span>
            <span>11:00 AM – 10:00 PM</span>
          </div>

        </div>

      </div>
    </section>
  );
}