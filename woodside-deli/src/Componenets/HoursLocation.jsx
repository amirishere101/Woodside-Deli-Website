import React from "react";

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
                        <p>
                            13048 Middlebrook Rd
                            <br />
                            Germantown, MD 20874
                            <br />
                            (301) 972-6812
                        </p>
                    </div>


                </p>
            </div>
        </div>
    );
};

export default HoursLocation;
