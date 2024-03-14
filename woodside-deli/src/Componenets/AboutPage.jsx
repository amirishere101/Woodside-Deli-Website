import React from "react";
import img1 from "../assets/Images/reuben-card.jpg";

const AboutPage = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 font-din2014">
        <div className="m-5 sm:ml-80">
          <h2 className="mb-5 text-4xl font-bold">About Us</h2>
          <p className="font-extralight">
            <div>
              <p className="mb-10">
                The Woodside Deli is not just a restaurant, it's a culinary
                experience. With over 60 years of history, we have mastered the
                art of delivering consistent, high-quality, and affordable food.
                Our loyal customers have made us a household name, and we take
                pride in providing them with a sense of nostalgia and comfort.
              </p>
              <p className="mb-10">
                At Woodside Deli, we offer a diverse menu that caters to all
                tastes. From traditional deli sandwiches to Italian specialties
                and hearty soul food, we have something for everyone. Our
                catering services are flexible and can accommodate any budget
                and culinary imagination.
              </p>
              <p className="mb-10">
                Since our humble beginnings in 1947, we have grown into a local
                business that also does catering. Despite the changing times,
                our owner Phil Park remains committed to our core values of
                providing affordable, quality food to the community.
              </p>
            </div>
          </p>
        </div>
        <img src={img1} alt="img1" className="my-5 sm:m-10 max-h-96" />
      </div>
    </div>
  );
};

export default AboutPage;
