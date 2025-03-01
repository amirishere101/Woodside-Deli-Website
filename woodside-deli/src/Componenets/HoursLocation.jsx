import React from "react";
  {/* maps section.. */}
const HoursLocation = () => {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 font-din2014">
            <div className="m-5 sm:ml-80">
                <h2 className="mb-5 text-4xl font-bold">Hours and Location</h2>
                <p className="font-extralight">
                    <div>
                        <p className="mb-10">
                            Open Hours
                            <br />
                            Monday 7 am to 8 pm
                            <br />
                            Tuesday to Saturday 7 am to 9 pm
                            <br />
                            Sunday 8 am to 8 pm
                        </p>
                        <p className="mb-10">
                            Location
                            <br />
                            13048 Middlebrook Rd
                            <br />
                            Germantown, MD 20874
                            <br />
                            (301) 972-6812
                        </p>
                        {/* will take you to maps with current location to woodside */}
                        <p className="mb-10">
                            <a href="https://goo.gl/maps/9rXqz1U4x4y" target="_blank" rel="noopener noreferrer">
                                <button className="px-4 py-2 text-white duration-200 border-2 rounded-full bg-gradient-to-r from-primary to-secondary border-primary hover:scale-105">
                                    Get Directions
                                </button>
                            </a>
                            {/* needs config */}
                            <p>
                            </p>
                        </p>
                    </div>
                </p>
            </div>
        </div>
    );
};

export default HoursLocation;
