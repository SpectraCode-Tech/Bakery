import React from 'react';
import bdCake from "../assets/customCake.jpg";
import cupCake from "../assets/cupCake.jpg";
import decoration from "../assets/Room.jpeg";
import chinchin from "../assets/Chinchin.jpeg";
import Cake1 from "../assets/Elegant-Cake.jpg";
import heartCake from "../assets/heartcake.jpg";
import pkg2 from "../assets/pkg2.jpg";
import pkg from "../assets/pkg.jpg";
import Bento from "../assets/bento.jpg";

const highlights = [
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

const Highlights = () => {
    return (
        <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-12">
                    <h2 className="text-accent uppercase tracking-widest text-sm font-bold">Our Offerings</h2>
                    <h1 className="text-4xl md:text-5xl font-serif italic mt-2 text-dark">The Sweet Gallery</h1>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {highlights.map((item, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl bg-light/10 aspect-3/4 cursor-pointer"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-linear-to-t from-dark/90 via-transparent to-transparent sm:opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                                <p className="text-accent text-xs uppercase tracking-widest mb-1 sm:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    {item.category}
                                </p>
                                <h3 className="text-white text-xl font-medium sm:translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Highlights;