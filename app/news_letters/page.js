import NewsLetter from "@/public/SVG/newsLetter";
import React from "react";

const NewsLetters = () => {
  return (
    <div className="py-20 bg-button_color">
      <div className="px-5 lg:px-0 lg:container">
        <div className="grid grid-cols-1 gap-y-7 md:grid-cols-2 gap-x-4 md:items-center">
          {/* Left Content */}
          <div className="flex items-start gap-x-8">
            <div>
              <NewsLetter />
            </div>
            <div>
              <h1 className="font-Roboto font-bold text-lg lg:text-2xl text-white_color mb-5">
                Sign Up for Newsletter
              </h1>
              <p className="font-Roboto font-normal text-xs md:text-base text-white_color leading-7">
                Stay updated with our latest news and offers. Subscribe to our
                newsletter for regular updates and insights.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative bg-white_color w-full rounded-xl">
            <input
              type="email"
              placeholder="Enter your email here"
              className="block placeholder:font-Roboto placeholder:font-normal placeholder:text-border_color outline-none w-[70%] text-lg placeholder:text-base py-5 px-10 rounded-l-xl"
            />

            <button className="absolute top-1/2 right-2 -translate-y-1/2 font-Roboto font-bold text-xs lg:text-base uppercase bg-gray_color text-white_color py-4 px-4 lg:px-11 rounded-xl">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetters;
