import React from "react";
import Map from "./Map";

const HoursLocation = () => {
  return (
    <div className="py-10">
      <div className="container mx-auto max-w-7xl">
        <h2 className="mb-10 text-4xl font-bold text-center font-cubano">
          Hours and Location
        </h2>
        <div className="flex flex-col text-center lg:flex-row">
          <div className="flex-1 space-y-6">
            <div>
              <h3 className="mb-2 text-2xl font-semibold font-din2014">
                Open Hours
              </h3>
              <p className="text-lg font-din2014">
                Monday - Sunday: 8 am to 8 pm
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-2xl font-semibold font-din2014">
                Location
              </h3>
              <p className="text-lg font-din2014">
                13048 Middlebrook Rd
                <br />
                Germantown, MD 20874
                <br />
                (301) 972-6812
              </p>
            </div>
            <div>
              <a
                href="https://www.google.com/maps/place/13048+Middlebrook+Road,+Germantown,+MD+20874"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-6 py-3 text-lg text-white duration-200 border-2 rounded-full bg-gradient-to-r from-primary to-secondary border-primary hover:scale-105 font-din2014">
                  Get Directions
                </button>
              </a>
            </div>
          </div>
          <div className="flex-1 mt-10 lg:mt-0">
            <h3 className="mb-4 text-2xl font-semibold text-center font-din2014">
              Our Location
            </h3>
            <div className="w-full h-full">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoursLocation;
