import React from "react";
import img1 from "../assets/Images/reuben-card.jpg";

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-10 bg-light">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl font-bold text-primary font-cubano mb-4">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex justify-center lg:order-2" data-aos="fade-left">
            <div className="relative">
              <div className="absolute inset-0 bg-primary rounded-2xl transform rotate-3 translate-x-2 translate-y-2"></div>
              <img
                src={img1}
                alt="Woodside Deli"
                className="relative z-10 object-cover w-full max-w-md rounded-2xl shadow-2xl transform transition-transform duration-500 hover:-translate-y-2"
              />
            </div>
          </div>

          <div
            className="flex flex-col justify-center space-y-8 lg:order-1"
            data-aos="fade-right"
          >
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <p className="text-lg text-gray-700 font-din2014 leading-relaxed mb-6">
                The Woodside Deli is not just a restaurant, it's a culinary
                experience. With over 60 years of history, we have mastered the
                art of delivering consistent, high-quality, and affordable food.
                Our loyal customers have made us a household name, and we take
                pride in providing them with a sense of nostalgia and comfort.
              </p>
              <p className="text-lg text-gray-700 font-din2014 leading-relaxed mb-6">
                At Woodside Deli, we offer a diverse menu that caters to all
                tastes. From traditional deli sandwiches to Italian specialties
                and hearty soul food, we have something for everyone. Our
                catering services are flexible and can accommodate any budget
                and culinary imagination.
              </p>
              <p className="text-lg text-gray-700 font-din2014 leading-relaxed">
                Since our humble beginnings in 1947, we have grown into a local
                business that also does catering. Despite the changing times,
                our owner Phil Park remains committed to our core values of
                providing affordable, quality food to the community.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-white rounded-xl shadow-md">
                <h3 className="text-3xl font-bold text-primary font-cubano">
                  1947
                </h3>
                <p className="text-sm text-gray-500">Established</p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-md">
                <h3 className="text-3xl font-bold text-primary font-cubano">
                  60+
                </h3>
                <p className="text-sm text-gray-500">Years Served</p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-md">
                <h3 className="text-3xl font-bold text-primary font-cubano">
                  100%
                </h3>
                <p className="text-sm text-gray-500">Quality</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
