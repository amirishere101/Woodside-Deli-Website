import React, { useState } from "react";
import platter from "../assets/Images/meat-cheese-platter.jpg";

const platters = [
  {
    id: 1,
    name: "Sandwich Platter",
    description: "An assortment of our famous deli sandwiches.",
    price: "$50",
    photo: platter,
  },
  {
    id: 2,
    name: "Italian Platter",
    description: "A selection of Italian specialties.",
    price: "$60",
    photo: platter,
  },
  {
    id: 3,
    name: "Soul Food Platter",
    description: "Hearty soul food to satisfy your cravings.",
    price: "$70",
    photo: platter,
  },
  {
    id: 4,
    name: "Vegetarian Platter",
    description: "A variety of fresh and delicious vegetarian options.",
    price: "$55",
    photo: platter,
  },
  {
    id: 5,
    name: "Custom Platter",
    description: "Create your own custom platter.",
    price: "$65",
    photo: null,
  },
];

const CateringMenu = () => {
  const [focusedPlatter, setFocusedPlatter] = useState(null);

  const handleFocus = (platter) => {
    setFocusedPlatter(platter);
  };

  const handleClose = () => {
    setFocusedPlatter(null);
  };

  return (
    <div className="px-4 py-10 bg-transparent md:px-10">
      <h2 className="mb-10 text-4xl font-bold text-center text-white font-cubano">
        Catering Menu
      </h2>
      <div
        className={`grid gap-10 ${
          platters.length === 1
            ? "grid-cols-1 place-items-center"
            : "md:grid-cols-2"
        }`}
      >
        {platters.map((platter) => (
          <div
            key={platter.id}
            className="p-6 rounded-lg shadow-lg cursor-pointer bg-white/90"
            onClick={() => handleFocus(platter)}
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
            {platter.photo && (
              <img
                src={platter.photo}
                alt={platter.name}
                className="object-cover w-full h-40 mt-4 rounded-lg"
              />
            )}
          </div>
        ))}
      </div>

      {focusedPlatter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="relative w-full max-w-lg p-6 bg-white rounded-lg shadow-2xl">
            <button
              className="absolute text-2xl font-bold text-gray-600 top-2 right-2 hover:text-black"
              onClick={handleClose}
            >
              &times;
            </button>
            <h3 className="mb-4 text-3xl font-bold text-center text-primary font-din2014">
              {focusedPlatter.name}
            </h3>
            <p className="text-lg text-center text-gray-700 font-din2014">
              {focusedPlatter.description}
            </p>
            <p className="mt-4 text-lg font-bold text-center text-secondary font-din2014">
              {focusedPlatter.price}
            </p>
            {focusedPlatter.photo && (
              <img
                src={focusedPlatter.photo}
                alt={focusedPlatter.name}
                className="object-cover w-full mt-6 rounded-lg shadow-lg"
              />
            )}
            <button
              className="block px-6 py-2 mx-auto mt-6 text-white rounded-full bg-primary hover:bg-secondary font-din2014"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CateringMenu;
