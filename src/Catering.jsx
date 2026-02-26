import React, { useState, useEffect } from "react";
import { RiPhoneFill, RiArrowDownSLine, RiMailFill } from "react-icons/ri";
import CateringImage from "../assets/Images/catering/fish-platter.jpg";
import CateringMenu from "./CateringMenu";

const Catering = () => {
  const [hideBubble, setHideBubble] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const cateringMenu = document.querySelector("#catering-menu");
      if (cateringMenu) {
        const rect = cateringMenu.getBoundingClientRect();
        // Hide bubble when menu is within view (e.g. top is less than 300px from top of viewport)
        // Since we have scroll-mt-28 (112px), when scrolled to, rect.top is ~112px.
        // So we should hide if rect.top < 200.
        const isMenuInView = rect.top < 200;
        setHideBubble(isMenuInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCateringMenu = () => {
    const cateringMenu = document.querySelector("#catering-menu");
    if (cateringMenu) {
      cateringMenu.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="catering" className="pt-20 pb-10 bg-light min-h-screen">
      {!hideBubble && (
        <div
          onClick={scrollToCateringMenu}
          className="fixed z-50 flex items-center gap-2 px-5 py-2.5 text-white transition-all duration-300 transform -translate-x-1/2 rounded-full shadow-lg cursor-pointer top-[90px] left-1/2 bg-gradient-to-r from-primary to-secondary hover:scale-105 hover:shadow-xl opacity-90 hover:opacity-100"
        >
          <span className="text-sm font-bold font-din2014 tracking-wide">
            View Catering Menu
          </span>
          <RiArrowDownSLine className="text-lg animate-bounce" />
        </div>
      )}

      <div className="container mx-auto max-w-7xl px-4">
        {/* Header Image Section */}
        <div className="relative mb-24 rounded-3xl overflow-hidden shadow-2xl group">
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500"></div>
          <img
            src={CateringImage}
            alt="Catering"
            className="object-cover w-full h-[400px] sm:h-[500px] transform group-hover:scale-105 transition-transform duration-700"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6">
            <h1 className="text-5xl sm:text-7xl font-bold font-cubano mb-6 drop-shadow-lg">
              Catering for Every Occasion
            </h1>
            <p className="text-xl sm:text-2xl font-din2014 max-w-2xl mb-8 drop-shadow-md">
              From corporate lunches to family gatherings, we bring the deli to
              you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:3019726812"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-white hover:text-primary text-white rounded-full font-bold font-din2014 text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <RiPhoneFill className="text-2xl" /> Call (301) 972-6812
              </a>
              <a
                href="mailto:woodsidedeli@hotmail.com"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-md hover:bg-white hover:text-primary text-white rounded-full font-bold font-din2014 text-lg transition-all duration-300 border-2 border-white hover:shadow-xl transform hover:-translate-y-1"
              >
                <RiMailFill className="text-2xl" /> Email Us
              </a>
            </div>
          </div>
        </div>

        {/* Services and Requirements Section */}
        <div className="grid grid-cols-1 gap-8 lg:gap-12 pt-4 md:grid-cols-2 mb-20">
          {/* Catering Services */}
          <div
            className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
            data-aos="fade-right"
          >
            <div className="p-6 bg-gradient-to-r from-primary to-secondary text-white">
              <h3 className="text-2xl font-bold font-cubano tracking-wide">
                Catering Services
              </h3>
            </div>
            <div className="p-8">
              <p className="text-lg text-gray-600 font-din2014 leading-relaxed">
                At Woodside Deli, we pride ourselves on offering a diverse menu
                that caters to all tastes. From our traditional deli sandwiches
                to Italian specialties and hearty soul food, we have something
                for everyone. Our catering services are flexible and can
                accommodate any budget and culinary imagination. Let us make
                your next event unforgettable with our delicious offerings.
              </p>
            </div>
          </div>

          {/* Order Requirements */}
          <div
            className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
            data-aos="fade-left"
          >
            <div className="p-6 bg-gradient-to-r from-secondary to-primary text-white">
              <h3 className="text-2xl font-bold font-cubano tracking-wide">
                Order Requirements
              </h3>
            </div>
            <div className="p-8">
              <ul className="space-y-4">
                {[
                  "Some orders may need 48 hours notice.",
                  "24 hours notice is preferred on all orders, and we will do our best to accommodate your 'last-minute' orders.",
                  "The delivery charge is based on location.",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-lg text-gray-600 font-din2014"
                  >
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Catering Menu Section */}
        <div
          id="catering-menu"
          className="py-12 px-4 sm:px-8 rounded-3xl bg-white shadow-2xl border border-gray-100 scroll-mt-28"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary font-cubano mb-2">
              Full Catering Menu
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          <CateringMenu />
        </div>

        {/* Ready to Order Section */}
        <div className="mt-20 bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/food.png')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold font-cubano mb-6">
              Ready to Place Your Order?
            </h2>
            <p className="text-xl font-din2014 mb-10 max-w-2xl mx-auto text-white/90">
              Give us a call or send us an email to discuss your catering needs.
              We're here to make your event delicious and stress-free!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="tel:3019726812"
                className="flex items-center justify-center gap-3 px-10 py-4 bg-white text-primary rounded-full font-bold font-din2014 text-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
              >
                <RiPhoneFill className="text-2xl" /> Call Now
              </a>
              <a
                href="mailto:woodsidedeli@hotmail.com"
                className="flex items-center justify-center gap-3 px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold font-din2014 text-xl transition-all duration-300 hover:bg-white hover:text-primary hover:shadow-2xl hover:scale-105"
              >
                <RiMailFill className="text-2xl" /> Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catering;
