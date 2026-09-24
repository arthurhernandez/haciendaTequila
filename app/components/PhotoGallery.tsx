"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Photo } from "@/app/types/photos";
import { FaTimes, FaChevronLeft, FaChevronRight, FaChevronDown } from "react-icons/fa";

interface PhotoGalleryProps {
  photos: Photo[];
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [filter, setFilter] = useState("all");

  const filteredPhotos = useMemo(() => {
    if (filter === "all") return photos;
    return photos.filter(p => p.category?.toLowerCase() === filter.toLowerCase());
  }, [photos, filter]);

  const selectedPhoto = filteredPhotos.find((p) => p.id === selectedId);
  const selectedIndex = filteredPhotos.findIndex((p) => p.id === selectedId);

  const nextPhoto = () => {
    if (selectedIndex < filteredPhotos.length - 1) {
      setSelectedId(filteredPhotos[selectedIndex + 1].id);
    } else {
      setSelectedId(filteredPhotos[0].id);
    }
  };

  const prevPhoto = () => {
    if (selectedIndex > 0) {
      setSelectedId(filteredPhotos[selectedIndex - 1].id);
    } else {
      setSelectedId(filteredPhotos[filteredPhotos.length - 1].id);
    }
  };

  return (
    <div className="relative">
      {/* FILTER DROPDOWN */}
      <div className="flex justify-center mb-10">
        <div className="relative group min-w-[200px]">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full appearance-none bg-white dark:bg-charcoal text-brand-green dark:text-brand-gold border-2 border-brand-gold/30 rounded-full px-8 py-3 font-bold uppercase tracking-widest focus:outline-none focus:border-brand-gold transition-all cursor-pointer shadow-md hover:shadow-lg"
          >
            <option value="all">All</option>
            <option value="food">Food</option>
            <option value="drinks">Drinks</option>
            <option value="atmosphere">Atmosphere</option>
          </select>
          <FaChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-brand-gold pointer-events-none group-hover:scale-110 transition-transform" />
        </div>
      </div>

      {/* GALLERY GRID */}
      <motion.div 
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"
      >
        <AnimatePresence mode="popLayout">
          {filteredPhotos.map((photo) => (
            <motion.div
              key={photo.id}
              layout
              layoutId={`photo-${photo.id}`}
              onClick={() => setSelectedId(photo.id)}
              className="relative aspect-[3/4] cursor-pointer overflow-hidden group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 0.98 }}
            >
            <Image
              src={photo.url}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white text-xs font-bold uppercase tracking-widest">{photo.category}</p>
            </div>
          </motion.div>
        ))}
        </AnimatePresence>
      </motion.div>

      {filteredPhotos.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <p className="text-xl text-gray-500 italic">No photos found in this category.</p>
        </motion.div>
      )}

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedId && selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedId(null)}
          >
            <motion.button
              className="absolute top-6 right-6 text-white text-3xl z-[110] hover:text-brand-gold transition-colors"
              onClick={() => setSelectedId(null)}
            >
              <FaTimes />
            </motion.button>

            <button
              className="absolute left-4 md:left-10 text-white/50 hover:text-white text-4xl z-[110] transition-all"
              onClick={(e) => {
                e.stopPropagation();
                prevPhoto();
              }}
            >
              <FaChevronLeft />
            </button>

            <button
              className="absolute right-4 md:right-10 text-white/50 hover:text-white text-4xl z-[110] transition-all"
              onClick={(e) => {
                e.stopPropagation();
                nextPhoto();
              }}
            >
              <FaChevronRight />
            </button>

            <motion.div
              layoutId={`photo-${selectedId}`}
              className="relative w-full max-w-5xl aspect-auto max-h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedPhoto.url}
                alt={selectedPhoto.alt}
                width={selectedPhoto.width}
                height={selectedPhoto.height}
                className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-sm"
              />
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute -bottom-12 left-0 right-0 text-center"
              >
                <h3 className="text-white font-serif text-xl md:text-2xl">{selectedPhoto.alt}</h3>
                <p className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold mt-1">{selectedPhoto.category}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
