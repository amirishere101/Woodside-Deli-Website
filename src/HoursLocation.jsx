import React from "react";
import Map from "./Map";
import {
  RiTimeFill,
  RiMapPin2Fill,
  RiPhoneFill,
  RiDirectionFill,
} from "react-icons/ri";

const HoursLocation = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-light">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl font-bold text-primary font-cubano mb-4">
            Visit Us
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-600 font-din2014 max-w-2xl mx-auto">
            Stop by for a delicious meal or pick up your order. We look forward
            to serving you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Info Cards Section */}
          <div className="lg:col-span-5 space-y-6">
            {/* Hours Card */}
            <div
              className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
              data-aos="fade-right"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                  <RiTimeFill className="text-3xl" />
                </div>
                <div className="w-full">
                  <h3 className="text-2xl font-bold text-secondary font-cubano mb-2">
                    Opening Hours
                  </h3>
                  <div className="space-y-2 font-din2014 text-lg text-gray-600">
                    <div className="flex flex-col w-full gap-2 sm:flex-row sm:justify-between">
                      <span className="font-bold">Monday - Sunday</span>
                      <span>8:00 AM - 8:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div
              className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                  <RiMapPin2Fill className="text-3xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary font-cubano mb-2">
                    Location
                  </h3>
                  <p className="font-din2014 text-lg text-gray-600 leading-relaxed">
                    13048 Middlebrook Rd
                    <br />
                    Germantown, MD 20874
                  </p>
                  <div className="mt-6">
                    <a
                      href="https://www.google.com/maps/place/13048+Middlebrook+Road,+Germantown,+MD+20874"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-bold font-din2014 hover:bg-secondary transition-colors duration-300 shadow-lg hover:shadow-primary/30"
                    >
                      <RiDirectionFill className="text-xl" /> Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div
              className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                  <RiPhoneFill className="text-3xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary font-cubano mb-2">
                    Contact
                  </h3>
                  <p className="font-din2014 text-lg text-gray-600 mb-4">
                    Have questions or want to place an order?
                  </p>
                  <a
                    href="tel:3019726812"
                    className="text-2xl font-bold text-primary hover:text-secondary transition-colors font-din2014"
                  >
                    (301) 972-6812
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div
            className="lg:col-span-7 h-full min-h-[400px]"
            data-aos="fade-left"
          >
            <div className="h-full w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoursLocation;
