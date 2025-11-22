import React from "react";
import HeroImg from "../../assets/Images/hero-sandwich.png";
import { Link } from "react-router-dom";

const Home = ({}) => {
  return (
    <div className="min-h-[550px] sm:min-h-[650px] bg-brandDark flex justify-center items-center text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>

      <div className="container flex items-center h-full pb-10 pt-28 sm:pt-0">
        <div className="grid h-full grid-cols-1 gap-8 sm:grid-cols-2 place-items-center">
          {/*text content*/}
          <div className="z-10 flex flex-col order-2 gap-6 text-center sm:text-left sm:order-1">
            <h1
              data-aos="fade-up"
              data-aos-once="true"
              className="text-4xl font-bold leading-tight sm:text-6xl lg:text-7xl font-din2014"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400 font-cubano drop-shadow-sm">
                The Woodside Deli
              </span>{" "}
              <br />
              <span className="block mt-2 text-2xl italic text-gray-300 sm:text-4xl font-libre baskerville">
                Serving Legendary Breakfast & Sandwiches Since 1947.
              </span>
            </h1>
            <div data-aos="fade-up" data-aos-delay="200">
              <Link to="/menu">
                <button className="px-8 py-3 text-sm font-bold tracking-wider text-white uppercase transition-all duration-300 border-2 rounded-full sm:text-base bg-gradient-to-r from-primary to-secondary border-primary hover:scale-105 hover:shadow-lg hover:from-secondary hover:to-primary font-din2014">
                  View Our Menu
                </button>
              </Link>
            </div>
          </div>

          {/*image content*/}
          <div className="relative z-10 flex items-center justify-center order-1 sm:order-2">
            <img
              src={HeroImg}
              alt="Woodside Deli Sandwich"
              className="w-[280px] sm:w-[450px] lg:w-[550px] object-contain drop-shadow-2xl"
            />
            <div
              data-aos="fade-left"
              data-aos-delay="400"
              className="absolute left-0 hidden px-6 py-3 border shadow-xl bg-white/10 backdrop-blur-md border-white/20 rounded-xl top-10 font-din2014 sm:block"
            >
              <h1 className="font-bold text-white">Order Takeout</h1>
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="600"
              className="absolute right-0 hidden px-6 py-3 border shadow-xl bg-white/10 backdrop-blur-md border-white/20 rounded-xl bottom-10 font-din2014 sm:block"
            >
              <h1 className="font-bold text-white">Dine-in Available</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
