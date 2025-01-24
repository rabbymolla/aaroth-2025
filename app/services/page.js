import CarIcon from "@/public/SVG/carIcon";
import MassageIcon from "@/public/SVG/massageIcon";
import PaymentIcon from "@/public/SVG/paymentIcom";
import ReturnIcon from "@/public/SVG/returnIcon";
import StarIcon from "@/public/SVG/starIcopn";
import React from "react";

const ServicesPart = () => {
  return (
    <div className="py-7">
      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:w-[90%] lg:mx-auto gap-x-4 gap-y-10">
          <div className="relative">
            <div className="border border-border_color border-solid text-center py-9 rounded-lg shadow-sm bg-white_color">
              <p className="font-Roboto font-bold text-lg text-black_color pb-2">
                Free delivery
              </p>
              <span className="font-Roboto font-normal text-border_color ">
                from $40
              </span>
            </div>
            <div className="absolute -top-10 left-1/2 -translate-x-1/2">
              <CarIcon />
            </div>
          </div>
          <div className="relative">
            <div className="border border-border_color border-solid text-center py-9 rounded-lg shadow-sm bg-white_color">
              <p className="font-Roboto font-bold text-lg text-black_color pb-2">
                Best Quality
              </p>
              <span className="font-Roboto font-normal text-border_color ">
                Brand
              </span>
            </div>
            <div className="absolute -top-10 left-1/2 -translate-x-1/2">
              <StarIcon />
            </div>
          </div>
          <div className="relative">
            <div className="border border-border_color border-solid text-center py-9 rounded-lg shadow-sm bg-white_color">
              <p className="font-Roboto font-bold text-lg text-black_color pb-2">
                1 Year
              </p>
              <span className="font-Roboto font-normal text-border_color ">
                for free Return
              </span>
            </div>
            <div className="absolute -top-10 left-1/2 -translate-x-1/2">
              <ReturnIcon />
            </div>
          </div>

          <div className=" relative">
            <div className="border border-border_color border-solid text-center py-9 rounded-lg shadow-sm bg-white_color">
              <p className="font-Roboto font-bold text-lg text-black_color pb-2">
                Feedback
              </p>
              <span className="font-Roboto font-normal text-border_color ">
                99% Real Data
              </span>
            </div>
            <div className="absolute -top-10 left-1/2 -translate-x-1/2">
              <MassageIcon />
            </div>
          </div>
          <div className=" relative">
            <div className="border border-border_color border-solid text-center py-9 rounded-lg shadow-sm bg-white_color">
              <p className="font-Roboto font-bold text-lg text-black_color pb-2">
                Payment
              </p>
              <span className="font-Roboto font-normal text-border_color ">
                Secuer
              </span>
            </div>
            <div className="absolute -top-10 left-1/2 -translate-x-1/2">
              <PaymentIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPart;
