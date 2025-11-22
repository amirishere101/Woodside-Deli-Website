import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiRestaurantFill, RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menus = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Hours & Location", link: "/hours-location" },
  { id: 3, name: "About", link: "/about" },
  { id: 4, name: "Catering", link: "/catering" },
];

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-secondary/95 backdrop-blur-md shadow-lg py-2"
            : location.pathname === "/"
            ? "bg-transparent py-4"
            : "bg-secondary py-4"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between text-white">
            {/* Logo */}
            <div>
              <Link
                to="/"
                className="flex items-center gap-2 text-2xl font-bold tracking-wider sm:text-3xl font-cubano hover:text-primary transition-colors duration-200"
              >
                Woodside Deli
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="flex items-center gap-8 font-din2014">
              <ul className="items-center hidden gap-8 sm:flex">
                {Menus.map((data) => (
                  <li key={data.id}>
                    <Link
                      to={data.link}
                      className="relative inline-block text-lg font-medium duration-200 text-white/80 hover:text-white group"
                    >
                      {data.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to="/menu"
                className="items-center hidden gap-2 px-6 py-2.5 font-semibold duration-200 rounded-full sm:flex bg-primary hover:bg-white hover:text-primary transition-all shadow-md hover:shadow-lg"
              >
                Menu <RiRestaurantFill className="text-xl" />
              </Link>

              {/* Mobile Hamburger */}
              <div className="sm:hidden">
                <button
                  onClick={toggleMenu}
                  className="p-2 transition-colors rounded-lg hover:bg-white/10"
                >
                  {isOpen ? (
                    <RiCloseLine className="text-3xl" />
                  ) : (
                    <RiMenu3Line className="text-3xl" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <div
            className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="flex flex-col items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
              {Menus.map((data) => (
                <li key={data.id} className="w-full text-center">
                  <Link
                    to={data.link}
                    onClick={toggleMenu}
                    className="block w-full py-3 text-xl font-medium duration-200 rounded-lg text-white/90 hover:bg-white/10 hover:text-white"
                  >
                    {data.name}
                  </Link>
                </li>
              ))}
              <li className="w-full">
                <Link
                  to="/menu"
                  onClick={toggleMenu}
                  className="flex items-center justify-center w-full gap-3 py-3 font-bold text-white duration-200 rounded-lg bg-primary hover:bg-primary/90"
                >
                  Menu <RiRestaurantFill className="text-xl" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
