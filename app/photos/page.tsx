import PhotoGallery from "@/app/components/PhotoGallery";
import { photos } from "@/app/data/photos";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Gallery | Hacienda Tequilera",
  description: "Experience the vibrant atmosphere and delicious dishes of Hacienda Tequilera through our photo gallery.",
};

export default function PhotosPage() {
  return (
    <div className="min-h-screen bg-parchment pt-18 pb-14">
      <main className="max-w-[1600px] mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-brand-red font-sans font-bold uppercase tracking-widest mb-2 block">Our Gallery</span>
          <h1 className="text-5xl font-serif font-bold text-brand-green dark:text-brand-gold">Hacienda in Photos</h1>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-6"></div>
        </div>

        <PhotoGallery photos={photos} />
      </main>
    </div>
  );
}
