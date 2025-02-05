import React from "react";

const HoursLocation = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 font-din2014">
            <div className="m-5 sm:ml-80">
                <h2 className="mb-5 text-4xl font-bold">Hours and Location</h2>
                <p className="font-extralight">
                    <div>
                        <p className="mb-10">
                            <ol>
                                <li>Some orders may need 48 hours notice. </li>
                                <li>24 hours notice is preferred on all orders, we will do our best to accommodate your "last-minute" orders </li>
                                <li>The delivery charge is based on location. </li>
                            </ol>
                        </p>
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
                            Since our humble beginnings in 1947, we have grown into a local
                            business that also does catering. Despite the changing times, our
                            owner Phil Park remains committed to our core values of providing
                            affordable, quality food to the community.
                        </p>
                    </div>
                </p>
            </div>
        </div>
    );
};

export default HoursLocation;
