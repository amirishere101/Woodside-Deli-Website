import React from "react";
import FooterBg from "../assets/Images/coffee-footer.jpg";
import { Link } from "react-router-dom";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Menu",
    link: "/menu",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Hours & Location",
    link: "/hours-location",
  },
  {
    title: "Catering",
    link: "/catering",
  },
];

const bgImage = {
  backgroundImage: `url(${FooterBg})`,
  backgroundPosition: "center", // Align the bottom of the image
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "200px", // Reduced height
  width: "100%",
};
const Footer = () => {
  return (
    <div style={bgImage} className="text-white font-din2014 relative">
      <div className="absolute inset-0 bg-black/60"></div>{" "}
      {/* Darker overlay */}
      <div className="relative z-10 container grid pt-16 pb-10 md:grid-cols-3 gap-8">
        {/* company details */}
        <div className="px-4 py-4">
          <a
            href="#"
            className="text-3xl font-bold tracking-widest sm:text-4xl font-cubano text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300"
          >
            Woodside Deli
          </a>
          <p className="pt-6 text-gray-300 leading-relaxed text-lg">
            Serving Fresh Sandwiches, Homemade Soups, and Local Favorites – Your
            Neighborhood Deli since 1947.
          </p>
        </div>

        {/* Footer links */}
        <div className="grid grid-cols-1 col-span-2 sm:grid-cols-2 md:pl-10 gap-8">
          {/* Quick Links */}
          <div className="py-4">
            <h1 className="mb-6 text-xl font-bold uppercase tracking-wider text-primary">
              Quick Links
            </h1>
            <ul className="space-y-4">
              {FooterLinks.map((data, index) => (
                <li key={index}>
                  <Link
                    to={data.link}
                    className="inline-block text-gray-300 duration-200 hover:text-white hover:translate-x-1"
                  >
                    {data.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Address */}
          <div className="col-span-2 py-4 sm:col-auto">
            <h1 className="mb-6 text-xl font-bold uppercase tracking-wider text-primary">
              Visit Us
            </h1>
            <div className="text-gray-300 space-y-4">
              <p className="flex flex-col">
                <span className="font-bold text-white">Address:</span>
                13048 Middlebrook Road,
                <br /> Germantown, MD 20874
              </p>
              <p className="flex flex-col">
                <span className="font-bold text-white">Phone:</span>
                <a
                  href="tel:3019726812"
                  className="hover:text-primary transition-colors"
                >
                  (301) 972-6812
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="relative z-10 border-t border-white/10 py-6 text-center text-gray-400 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Woodside Deli. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
