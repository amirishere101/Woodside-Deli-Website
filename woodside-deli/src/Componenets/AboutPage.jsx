import React from "react";
import img1 from "../assets/Images/reuben-card.jpg";

const AboutPage = () => {
  return (
    <div className="py-10 bg-gray-100">
      <div className="container mx-auto max-w-7xl">
        <h2 className="mb-10 text-4xl font-bold text-center font-cubano">
          About Us
        </h2>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div className="flex flex-col justify-center p-5 space-y-6 sm:ml-10">
            <p className="text-lg font-din2014">
              The Woodside Deli is not just a restaurant, it's a culinary
              experience. With over 60 years of history, we have mastered the
              art of delivering consistent, high-quality, and affordable food.
              Our loyal customers have made us a household name, and we take
              pride in providing them with a sense of nostalgia and comfort.
            </p>
            <p className="text-lg font-din2014">
              At Woodside Deli, we offer a diverse menu that caters to all
              tastes. From traditional deli sandwiches to Italian specialties
              and hearty soul food, we have something for everyone. Our catering
              services are flexible and can accommodate any budget and culinary
              imagination.
            </p>
            <p className="text-lg font-din2014">
              Since our humble beginnings in 1947, we have grown into a local
              business that also does catering. Despite the changing times, our
              owner Phil Park remains committed to our core values of providing
              affordable, quality food to the community.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={img1}
              alt="Woodside Deli"
              className="object-cover w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
