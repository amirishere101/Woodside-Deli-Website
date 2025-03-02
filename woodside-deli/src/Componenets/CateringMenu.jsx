import React from "react";

const platters = [
  {
    id: 1,
    name: "Sandwich Platter",
    description: "An assortment of our famous deli sandwiches.",
    price: "$50",
  },
  {
    id: 2,
    name: "Italian Platter",
    description: "A selection of Italian specialties.",
    price: "$60",
  },
  {
    id: 3,
    name: "Soul Food Platter",
    description: "Hearty soul food to satisfy your cravings.",
    price: "$70",
  },
  {
    id: 4,
    name: "Vegetarian Platter",
    description: "A variety of fresh and delicious vegetarian options.",
    price: "$55",
  },
];

const CateringMenu = () => {
  return (
    <div className="px-4 py-10 bg-transparent md:px-10">
      <h2 className="mb-10 text-4xl font-bold text-center text-white font-cubano">
        Catering Menu
      </h2>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {platters.map((platter) => (
          <div
            key={platter.id}
            className="p-6 rounded-lg shadow-lg bg-white/90"
          >
            <h3 className="mt-4 mb-2 text-2xl font-semibold text-black font-din2014">
              {platter.name}
            </h3>
            <p className="text-lg text-black font-din2014">
              {platter.description}
            </p>
            <p className="mt-4 text-lg font-bold text-black font-din2014">
              {platter.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CateringMenu;
