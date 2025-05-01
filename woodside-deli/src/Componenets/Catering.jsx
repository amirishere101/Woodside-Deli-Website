import React from "react";
import { RiPhoneFill } from "react-icons/ri";
import CateringImage from "../assets/Images/Catering-Header-Image.jpg"; // Add your catering image here
import CateringMenu from "./CateringMenu";

const Catering = () => {
  return (
    <div className="py-10 bg-gradient-to-b from-gray-100 to-gray-300">
      <div className="container mx-auto max-w-7xl">
        {/* Header Image Section */}
        <div className="relative mb-20">
          <img
            src={CateringImage}
            alt="Catering"
            className="object-cover w-full h-64 rounded-lg shadow-lg"
          />
          <div className="absolute bottom-0 w-11/12 p-6 text-center transform -translate-x-1/2 translate-y-1/2 rounded-lg shadow-lg left-1/2 bg-white/90 sm:w-auto">
            <div className="relative inline-block px-8 py-2 rounded-full bg-primary">
              <a
                href="tel:+13019726812"
                className="flex items-center text-white"
              >
                <h3 className="text-2xl font-semibold font-din2014">
                  Contact Us
                </h3>
                <RiPhoneFill className="ml-2 text-xl" />
              </a>
            </div>
            <p className="mt-4 text-lg font-din2014">
              To place an order or ask a question, contact us at:
            </p>
            <p className="text-lg font-din2014">
              Phone: (301) 972-6812
              <br />
              Email: info@woodsidedeli.com
            </p>
          </div>
        </div>

        {/* Services and Requirements Section */}
        <div className="grid grid-cols-1 gap-10 pt-10 md:grid-cols-2">
          {/* Catering Services */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <div className="p-4 text-center rounded-full bg-gradient-to-r from-primary to-secondary">
              <h3 className="text-2xl font-semibold text-white font-din2014">
                Catering Services
              </h3>
            </div>
            <p className="px-4 mt-4 text-lg text-center text-gray-700 font-din2014">
              At Woodside Deli, we pride ourselves on offering a diverse menu
              that caters to all tastes. From our traditional deli sandwiches to
              Italian specialties and hearty soul food, we have something for
              everyone. Our catering services are flexible and can accommodate
              any budget and culinary imagination. Let us make your next event
              unforgettable with our delicious offerings.
            </p>
          </div>

          {/* Order Requirements */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <div className="p-4 text-center rounded-full bg-gradient-to-r from-secondary to-primary">
              <h3 className="text-2xl font-semibold text-white font-din2014">
                Order Requirements
              </h3>
            </div>
            <ul className="px-8 mt-4 space-y-4 text-lg text-gray-700 list-disc font-din2014">
              <li>Some orders may need 48 hours notice.</li>
              <li>
                24 hours notice is preferred on all orders, and we will do our
                best to accommodate your "last-minute" orders.
              </li>
              <li>The delivery charge is based on location.</li>
            </ul>
          </div>
        </div>

        {/* Catering Menu Section */}
        <div className="py-10 mt-10 text-white bg-gradient-to-r from-secondary to-secondary/90">
          <CateringMenu />
        </div>
      </div>
    </div>
  );
};

export default Catering;
