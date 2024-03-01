import React, { useState, useEffect } from "react";
import "./NavigationBar.css";
import Logo from "../.././assets/Images/woodside-logo.png";
import { FaCoffee } from "react-icons/fa";

const Menus = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    link: "/#services",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
];

/**
 * NavigationBar component.
 * Renders a navigation bar based on the screen size.
 */
const NavigationBar = () => {
  return (
    <div className="text-white bg-gradient-to-r from-secondary to-secondary/90">
      <div className="container py-2">
        <div className="flex">
          {/* Logo section */}
          <div className="">
            <a
              href="#"
              className="flex items-center justify-center gap-2 text-2xl font-bold tracking-wider sm:text-3xl font-cubano"
            >
              {/* can be added back in when I find a better logo image*/}
              {/* <img src={Logo} alt="Woodside Deli Logo" className="w-14" />*/}
              Woodside Deli
            </a>
          </div>
          {/* Links section */}
          <div className="flex items-center justify-between gap-4">
            <ul className="items-center hidden gap-4 sm:flex">
              {Menus.map((data, index) => (
                <li key={index}>
                  <a href={data.link} className="">
                    {data.name}
                  </a>
                </li>
              ))}
              <ul>
                <button className="px-4 py-2 duration-200 rounded-full bg-primary/70 hover:scale-105">
                  Order
                  <FaCoffee />
                </button>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
