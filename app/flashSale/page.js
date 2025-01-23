import React from "react";
import flashSaleBg from "@/public/PNG/flashSaleBg.png";
import Image from "next/image";
import FlashCountrPart from "@/components/flashItems/flashCountrPart";
import FlashSlider from "@/components/flashItems/flashSlider";

const FlashSale = () => {
  return (
    <div className="pt-5 lg:pt-12">
      <div className="lg:container ">
        <div className="relative">
          <div className="w-full h-[200px] sm:h-[337px] bg-border_color lg:rounded-[30px] ">
            <Image src={flashSaleBg} alt="flash" className="w-full h-full" />
          </div>
          <div className="absolute top-0 left-0 bg-opacity_bg w-full h-full lg:rounded-[30px] ">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full px-3 lg:px-5">
              <div className="grid grid-cols-12 gap-x-4 items-center justify-between">
                <div className="col-span-5">
                  {/* to check go to the flshItems of components file */}
                  <FlashCountrPart />
                </div>
                <div className="col-span-7">
                  {/* to check go to the flshItems of components file */}
                  <FlashSlider />
                  <button className="w-full text-end font-Roboto font-bold text-white_color text-base ">
                    view more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
