import React from "react";
import customCake from "../assets/customCake.jpg";
import cupCake from "../assets/cupCake.jpg";
import decoration from "../assets/Room.jpeg";
import snacks from "../assets/Chinchin.jpeg";

const highlights = [
  { name: "Custom Cakes", description: "We bake cakes to match whatever theme the specific occasion calls for", image: `${customCake}` },
  { name: "Cupcakes", description: "We also provide the best cupcakes in Lagos", image: `${cupCake}` },
  { name: "Event Decoration", description: "Decorated room for your girlfriend? We're available", image: `${decoration}` },
  { name: "Snacks", description: "We also make different snacks ", image: `${snacks}` },
];

const Highlights = () => {
  return (
    <section className="p-10">
      <h1 className="text-light font-semibold italic pb-5">Our highlights</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 justify-center align-center gap-5">
        {highlights.map((highlight) => (
          <div
            key={highlight.id}
                className="group shadow-xl hover:scale-105 transition ease-in-out rounded  cursor-pointer overflow-hidden h-90"
          >
            <img
              src={highlight.image}
              className="pb-3 w-full h-4/5 transition ease-in-out group-hover:scale-105"
              alt={highlight.name}
            />

              <h2 className="pl-2 font-medium italic">{highlight.name}</h2>
              <p className="px-2 pb-3 text-sm">{highlight.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
