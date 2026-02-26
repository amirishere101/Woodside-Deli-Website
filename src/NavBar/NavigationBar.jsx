import React, { useState, useEffect, useRef, useCallback } from "react";
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
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 1024);
  const location = useLocation();
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Track viewport width to toggle mobile / desktop layout via JS
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = useCallback(() => setIsOpen(false), []);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  const isActive = (link) => {
    if (link === "/") return location.pathname === "/";
    return location.pathname.startsWith(link);
  };

  return (
    <>
      <div
        className={`fixed top-0 z-50 w-full transition-[background-color,padding,box-shadow,backdrop-filter] duration-300 ${
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
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="flex items-center gap-2 text-2xl font-bold tracking-wider sm:text-3xl font-cubano hover:text-primary transition-colors duration-200"
              >
                Woodside Deli
              </Link>
            </div>

            {/* Mobile Hamburger — controlled by JS, not CSS media queries */}
            {isMobile && (
              <button
                ref={hamburgerRef}
                onClick={toggleMenu}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                className="p-2 text-white transition-colors rounded-lg bg-white/10 hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none"
              >
                {isOpen ? (
                  <RiCloseLine className="text-3xl" />
                ) : (
                  <RiMenu3Line className="text-3xl" />
                )}
              </button>
            )}

            {/* Desktop Menu — controlled by JS, not CSS media queries */}
            {!isMobile && (
              <div className="flex items-center gap-8 font-din2014">
                <ul className="flex items-center gap-8">
                  {Menus.map((data) => (
                    <li key={data.id}>
                      <Link
                        to={data.link}
                        className={`relative inline-block text-lg font-medium duration-200 hover:text-white group ${
                          isActive(data.link) ? "text-white" : "text-white/70"
                        }`}
                      >
                        {data.name}
                        <span
                          className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                            isActive(data.link)
                              ? "w-full"
                              : "w-0 group-hover:w-full"
                          }`}
                        ></span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/menu"
                  className={`flex items-center gap-2 px-6 py-2.5 font-semibold duration-200 rounded-full transition-all shadow-md hover:shadow-lg ${
                    isActive("/menu")
                      ? "bg-white text-primary"
                      : "bg-primary hover:bg-white hover:text-primary"
                  }`}
                >
                  Menu <RiRestaurantFill className="text-xl" />
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobile && (
            <div
              ref={menuRef}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0"
              }`}
            >
              <ul className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
                {Menus.map((data) => (
                  <li key={data.id} className="w-full text-center">
                    <Link
                      to={data.link}
                      onClick={closeMenu}
                      className={`block w-full py-3 text-xl font-medium duration-200 rounded-lg hover:bg-white/10 hover:text-white ${
                        isActive(data.link)
                          ? "text-white bg-white/10"
                          : "text-white/80"
                      }`}
                    >
                      {data.name}
                    </Link>
                  </li>
                ))}
                <li className="w-full pt-2 border-t border-white/10">
                  <Link
                    to="/menu"
                    onClick={closeMenu}
                    className="flex items-center justify-center w-full gap-3 py-3 font-bold text-white duration-200 rounded-lg bg-primary hover:bg-primary/90"
                  >
                    Menu <RiRestaurantFill className="text-xl" />
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
