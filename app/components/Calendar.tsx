"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import { Event } from "@/app/types/events";
import { motion, AnimatePresence } from "framer-motion";

interface CalendarProps {
  events: Event[];
}

export default function Calendar({ events }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 8, 1)); // September 2026
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  const selectedEvent = events.find(e => e.id === selectedEventId);

  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const monthName = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const calendarDays = useMemo(() => {
    const totalDays = daysInMonth(year, month);
    const offset = firstDayOfMonth(year, month);
    const days = [];

    // Padding for previous month
    for (let i = 0; i < offset; i++) {
      days.push(null);
    }

    // Actual days
    for (let i = 1; i <= totalDays; i++) {
      days.push(i);
    }

    return days;
  }, [year, month]);

  const getEventsForDay = (day: number | null) => {
    if (!day) return [];
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return events.filter((e) => e.date === dateStr);
  };

  return (
    <div className="bg-white dark:bg-charcoal rounded-2xl shadow-2xl border border-brand-gold/20 overflow-hidden">
      {/* HEADER */}
      <div className="bg-brand-green text-parchment px-6 py-4 flex justify-between items-center">
        <h2 className="text-3xl font-serif font-bold">
          {monthName} <span className="text-brand-gold">{year}</span>
        </h2>
        <div className="flex gap-4">
          <button
            onClick={prevMonth}
            className="p-2 rounded-full hover:bg-white/10 transition-colors border border-brand-gold/30"
          >
            <FaChevronLeft className="text-brand-gold" />
          </button>
          <button
            onClick={nextMonth}
            className="p-2 rounded-full hover:bg-white/10 transition-colors border border-brand-gold/30"
          >
            <FaChevronRight className="text-brand-gold" />
          </button>
        </div>
      </div>

      {/* DAY HEADERS */}
      <div className="grid grid-cols-7 border-b border-brand-gold/10">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d} className="py-4 text-center text-sm font-bold uppercase tracking-widest text-brand-red border-r border-brand-gold/10 last:border-r-0">
            {d}
          </div>
        ))}
      </div>

      {/* GRID (Desktop) */}
      <div className="hidden md:grid grid-cols-7 auto-rows-[minmax(150px,auto)]">
        {calendarDays.map((day, idx) => {
          const dayEvents = getEventsForDay(day);
          const isToday = day === 15 && month === 8 && year === 2026;

          return (
            <div
              key={idx}
              className={`border-r border-b border-brand-gold/10 p-2 transition-colors last:border-r-0 ${
                !day ? "bg-parchment/30" : "bg-white dark:bg-charcoal hover:bg-brand-gold/5"
              } ${isToday ? "ring-2 ring-brand-gold inset-0 z-10" : ""}`}
            >
              {day && (
                <>
                  <div className="flex justify-between items-start mb-2">
                    <div className={`text-lg font-serif font-bold ${isToday ? "text-brand-red" : "text-charcoal/50 dark:text-parchment/50"}`}>
                      {day}
                    </div>
                    {dayEvents.length > 0 && (
                      <div className="w-2 h-2 rounded-full bg-brand-gold mt-2 animate-pulse" />
                    )}
                  </div>
                  <div className="space-y-3">
                    {dayEvents.map((event) => (
                      <div
                        key={event.id}
                        onClick={() => setSelectedEventId(event.id)}
                        className="group cursor-pointer rounded-lg overflow-hidden border border-brand-gold/10 bg-parchment dark:bg-black/20 hover:shadow-lg transition-all"
                      >
                        <div className="relative h-20 w-full">
                          <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        </div>
                        <div className="p-2">
                          <h4 className="text-xs font-bold text-brand-red uppercase tracking-tighter truncate">
                            {event.title}
                          </h4>
                          <p className="text-[10px] text-gray-600 dark:text-gray-400 leading-tight line-clamp-2">
                            {event.subheading}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* LIST (Mobile) */}
      <div className="md:hidden divide-y divide-brand-gold/10">
        {calendarDays
          .filter((d) => d !== null)
          .map((day) => {
            const dayEvents = getEventsForDay(day);
            if (dayEvents.length === 0) return null;

            return (
              <div key={day} className="p-6 bg-white dark:bg-charcoal">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-brand-red text-white w-12 h-12 rounded-lg flex flex-col items-center justify-center font-serif font-bold">
                    <span className="text-xs uppercase tracking-tighter leading-none">{monthName.slice(0, 3)}</span>
                    <span className="text-xl leading-none">{day}</span>
                  </div>
                  <div className="h-px flex-1 bg-brand-gold/20" />
                </div>

                <div className="space-y-6">
                  {dayEvents.map((event) => (
                    <div 
                      key={event.id} 
                      onClick={() => setSelectedEventId(event.id)}
                      className="flex gap-4 group cursor-pointer"
                    >
                      <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden border border-brand-gold/20">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex-1 py-1">
                        <span className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em] mb-1 block">
                          {event.category || "Event"}
                        </span>
                        <h4 className="text-lg font-serif font-bold text-brand-green dark:text-brand-gold group-hover:text-brand-red transition-colors mb-1">
                          {event.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {event.subheading}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        {calendarDays.filter((d) => d !== null && getEventsForDay(d).length > 0).length === 0 && (
          <div className="p-12 text-center italic text-gray-500">
            No events scheduled for this month.
          </div>
        )}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedEventId && selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedEventId(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="bg-parchment dark:bg-charcoal w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedEventId(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors"
              >
                <FaTimes />
              </button>

              <div className="relative h-56 md:h-72 w-full">
                <Image
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-parchment dark:from-charcoal via-transparent to-transparent" />
              </div>

              <div className="p-6 md:p-10 -mt-10 relative z-10">
                <div className="inline-block bg-brand-red text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                  {selectedEvent.category || "Event"}
                </div>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-green dark:text-brand-gold mb-2">
                  {selectedEvent.title}
                </h3>
                <p className="text-lg text-brand-red font-serif italic mb-6">
                  {selectedEvent.subheading}
                </p>
                <div className="h-px w-full bg-brand-gold/20 mb-6" />
                <div className="text-gray-700 dark:text-parchment/80 font-sans leading-relaxed">
                  {selectedEvent.description || "Join us for this special event at Hacienda Tequilera!"}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <div className="flex items-center gap-2 text-brand-green dark:text-brand-gold font-bold">
                    <span className="text-xl">📅</span>
                    {(() => {
                      const [y, m, d] = selectedEvent.date.split("-").map(Number);
                      return new Date(y, m - 1, d).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      });
                    })()}
                  </div>
                  <button 
                    onClick={() => setSelectedEventId(null)}
                    className="bg-brand-green hover:bg-brand-green/90 text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest transition-all shadow-lg"
                  >
                    Close Details
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
