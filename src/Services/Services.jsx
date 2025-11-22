import React from "react";
import Img1 from "../../assets/Images/Reuben-Sandwiches-Side.jpg";
import Img2 from "../../assets/Images/hero-sandwich.png";
import Img3 from "../../assets/Images/matzo-ball-soup-meat-2122297-hero-01-e583939fbd55487daa6bf371e5b60942.jpg";
import { Link } from "react-router-dom";

const ServicesData = [
  {
    id: 1,
    img: Img1,
    name: "The Woodside Reuben",
    description:
      "Our Famous Reuben Sandwich with Corned Beef, Swiss Cheese, Sauerkraut, and Russian Dressing on Grilled Rye Bread.",
    aosDelay: "100",
    link: "/menu#lunch",
  },
  {
    id: 2,
    img: Img2,
    name: "The Cyrano De Bergerac",
    description:
      "Our famous hot pastrami, corned beef, and russian dressing, topped with creamy slaw and melted swiss cheese on grilled rye bread.",
    aosDelay: "100",
    link: "/menu#lunch",
  },
  {
    id: 3,
    img: Img3,
    name: "Matzoh Ball Soup",
    description: "A comforting bowl of our homemade matzoh ball soup.",
    aosDelay: "100",
    link: "/menu#lunch",
  },
];

const Services = ({ setPage }) => {
  return (
    <>
      <span id="services"></span>
      <div className="py-12 bg-gray-50">
        <div className="container">
          {/* Catering Advertisement Section */}
          <div
            data-aos="zoom-in"
            className="relative p-8 mb-20 overflow-hidden text-center rounded-3xl shadow-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10"
          >
            <div className="relative z-10">
              <h1 className="text-3xl sm:text-5xl font-bold text-primary font-cubano mb-4">
                Catering Services Available!
              </h1>
              <p className="max-w-2xl mx-auto text-lg text-gray-700 font-din2014 mb-8 leading-relaxed">
                Let us cater your next event with our delicious platters, wraps,
                and more. Perfect for parties, corporate events, and family
                gatherings.
              </p>
              <Link
                to={"/catering"}
                className="inline-block px-8 py-3 text-white transition-all duration-300 rounded-full shadow-lg bg-primary hover:bg-secondary hover:shadow-xl hover:-translate-y-1 font-din2014 font-semibold"
              >
                Learn More About Catering
              </Link>
            </div>
            {/* Decorative circle */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-secondary/5 blur-3xl"></div>
          </div>

          {/* header title */}
          <div className="mb-24 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 font-cubano relative inline-block">
              Our Most Popular Choices
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></div>
            </h1>
          </div>

          {/* services card section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-8 place-items-center">
            {ServicesData.map((data, index) => {
              return (
                <Link
                  to={data.link}
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  key={index}
                  className="bg-white rounded-2xl hover:bg-primary hover:text-white shadow-xl duration-300 max-w-[350px] group relative mt-12 w-full h-full flex flex-col"
                >
                  {/* image section */}
                  <div className="h-[140px] relative">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="w-[200px] h-[160px] object-cover block mx-auto transform -translate-y-12 group-hover:scale-105 group-hover:rotate-1 duration-300 rounded-2xl shadow-lg border-4 border-white group-hover:border-primary/20"
                    />
                  </div>
                  {/* text content */}
                  <div className="p-6 text-center font-din2014 flex-grow flex flex-col justify-between">
                    <div>
                      <h1 className="text-2xl font-bold mb-3 group-hover:text-white text-gray-800">
                        {data.name}
                      </h1>
                      <p className="text-gray-500 duration-300 group-hover:text-white/90 text-sm leading-relaxed">
                        {data.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Link to="/menu">
              <button className="px-8 py-3 text-primary border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 font-bold font-din2014 uppercase tracking-wider">
                View Full Menu
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
