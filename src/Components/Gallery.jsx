import React, { useState, useEffect } from 'react';
import bdCake from "../assets/customCake.jpg";
import cupCake from "../assets/cupCake.jpg";
import decoration from "../assets/Room.jpeg";
import chinchin from "../assets/Chinchin.jpeg";
import Cake1 from "../assets/Elegant-Cake.jpg";
import heartCake from "../assets/heartcake.jpg";
import pkg2 from "../assets/pkg2.jpg";
import pkg from "../assets/pkg.jpg";
import Bento from "../assets/bento.jpg";

const gallery = [
  { image: bdCake, title: "Custom Cakes", category: "Occasions" },
  { image: cupCake, title: "Gourmet Cupcakes", category: "Treats" },
  { image: decoration, title: "Event Styling", category: "Decor" },
  { image: chinchin, title: "Crunchy Chin-Chin", category: "Snacks" },
  { image: pkg, title: "Valentine Gift Pack", category: "Snacks" },
  { image: pkg2, title: "Surprise Birthday Package", category: "Snacks" },
  { image: Bento, title: "Bento Cakes", category: "Treats" },
  { image: heartCake, title: "Strawberry Cake", category: "Occasions" },
  { image: Cake1, title: "Birthday Cakes", category: "Occasions" },
];

// --- ADD THIS LINE BACK IN ---
const categories = ["All", "Occasions", "Treats", "Snacks", "Decor"];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? 'hidden' : 'unset';
  }, [selectedImage]);

  const filteredItems = activeFilter === "All"
    ? gallery
    : gallery.filter(item => item.category === activeFilter);

  return (
    <section className="py-24 px-6 bg-light min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* Header & Filter Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-accent uppercase tracking-[0.2em] text-xs font-bold mb-3">Our Offerings</h2>
            <h1 className="text-5xl md:text-6xl font-serif italic text-dark">The Sweet Gallery</h1>
          </div>

          <div className="flex flex-wrap gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1 text-sm transition-all duration-300 border-b-2 ${activeFilter === cat
                    ? "border-accent text-dark font-bold"
                    : "border-transparent text-gray-400 hover:text-dark"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(item)}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-sm aspect-[4/5] cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 sm:translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <span className="text-accent text-xs uppercase tracking-widest font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  {item.category}
                </span>
                <h3 className="text-white text-2xl font-serif italic mb-2">{item.title}</h3>
                <div className="w-12 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 delay-200" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- RESPONSIVE MODAL --- */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-10"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-4xl font-light hover:text-accent transition-colors z-50"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>

          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-auto max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />

            <div className="mt-6 text-center text-white">
              <p className="text-accent text-xs uppercase tracking-[0.3em] font-bold mb-1">
                {selectedImage.category}
              </p>
              <h2 className="text-3xl font-serif italic">
                {selectedImage.title}
              </h2>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;