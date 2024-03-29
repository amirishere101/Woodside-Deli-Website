import React, { useState, useEffect } from "react";
import Logo from "../.././assets/Images/woodside-logo.png";
import { RiRestaurantFill } from "react-icons/ri";

const Menus = [
  {
    id: 1,
    name: "Home",
    link: "/#",
    pageName: "home",
  },
  {
    id: 2,
    name: "Hours & Location",
    link: "/#hours-location",
    pageName: "hours-location",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
    pageName: "about",
  },
  {
    id: 4,
    name: "Catering",
    link: "/#catering",
    pageName: "catering",
  },
];

/**
 * NavigationBar component.
 * Renders a navigation bar based on the screen size.
 */
const NavigationBar = ({ setPage }) => {
  return (
    <div className="text-white bg-gray-900 shadow-md bg-gradient-to-r from-secondary to-secondary/90">
      <div className="container py-2">
        <div className="flex items-center justify-between">
          {/* Logo section */}
          <div className="">
            <a
              href="#"
              className="flex items-center justify-center gap-2 text-2xl font-bold tracking-wider sm:text-3xl font-cubano"
              onClick={() => setPage("home")}
            >
              {/* can be added back in when I find a better logo image*/}
              {/* <img src={Logo} alt="Woodside Deli Logo" className="w-14" />*/}
              Woodside Deli
            </a>
          </div>
          {/* Links section */}
          <div className="flex items-center justify-between gap-4 font-din2014">
            <ul className="items-center hidden gap-4 sm:flex">
              {Menus.map((data, index) => (
                <li key={index}>
                  <a
                    href={data.link}
                    onClick={() => setPage(data.pageName)}
                    className="inline-block px-4 py-4 text-xl duration-200 text-white/70 hover:text-white "
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              className="flex items-center gap-3 px-4 py-2 duration-200 rounded-full bg-primary/70 hover:scale-105"
              href="/#"
              onClick={() => setPage("menu")}
            >
              Menu <RiRestaurantFill className="text-xl cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
