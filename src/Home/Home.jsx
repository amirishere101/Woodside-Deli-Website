import React from "react";
import HeroImg from "../../assets/Images/spinning-breakfast.png";
import { Link } from "react-router-dom";
import { BsLink } from "react-icons/bs";

const Home = ({}) => {
  return (
    <div className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/*text content*/}
          <div className="flex flex-col justify-center order-2 gap-6 pt-0 text-center sm:text-left sm:order-1">
            <h1 className="text-5xl font-bold sm:text-6xl lg:text-7xl font-din2014">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/90 font-cubano">
                The Woodside Deli
              </span>{" "}
              <br />
              The best deli in MD that is guaranteed to satisfy.
            </h1>
            <Link to="/menu">
              <button className="px-4 py-2 text-white duration-200 border-2 rounded-full bg-gradient-to-r from-primary to-secondary border-primary hover:scale-105 font-din2014">
                Check Out Our Famous Sandwich Specialties
              </button>
            </Link>
          </div>

          {/*image content*/}
          <div className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
            <img
              src={HeroImg}
              alt="spinning food"
              className="w-[300px] sm:w-[450px] sm:scale-125 mx-auto spin"
            />
            <div className="absolute p-3 bg-gradient-to-r from-primary to-secondary rounded-xl top-10 left-10 font-din2014">
              <h1 className="text-white">Takeout</h1>
            </div>
            <div className="absolute p-3 bg-gradient-to-r from-primary to-secondary rounded-xl bottom-10 right-10 font-din2014">
              <h1 className="text-white">Dine-in</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
