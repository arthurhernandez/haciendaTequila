"use client";

import { useEffect, useState } from "react";

interface InstagramEmbedProps {
  postUrls: string[];
}

export default function InstagramEmbed({ postUrls }: InstagramEmbedProps) {
  const [visiblePosts, setVisiblePosts] = useState(1);

  // Decide how many posts fit
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1200) {
        setVisiblePosts(3);
      } else if (width >= 800) {
        setVisiblePosts(2);
      } else {
        setVisiblePosts(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Load Instagram script
  useEffect(() => {
    const scriptId = "instagram-embed-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.async = true;
      script.src = "https://www.instagram.com/embed.js";
      document.body.appendChild(script);
    } else if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  }, [visiblePosts]);

  return (
    <section className="py-16 bg-white/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Follow Us on Instagram
        </h2>

        <div className="flex justify-center gap-8">
          {postUrls.slice(0, visiblePosts).map((url, index) => (
            <blockquote
              key={index}
              className="instagram-media"
              data-instgrm-permalink={url}
              data-instgrm-version="14"
              style={{
                width: "350px",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}