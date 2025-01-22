import React from "react";
import flashSaleBg from "@/public/PNG/flashSaleBg.png";
import Image from "next/image";
import FlashCountrPart from "@/components/flashItems/flashCountrPart";

const FlashSale = () => {
  return (
    <div className="pt-12">
      <div className="container ">
        <div className="relative">
          <div className="w-full h-[200px] lg:h-[337px] bg-border_color rounded-[30px] ">
            <Image src={flashSaleBg} alt="flash" className="w-full h-full" />
          </div>
          <div className="absolute top-0 left-0 bg-opacity_bg w-full h-full rounded-[30px] ">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full px-5">
              <div className="grid grid-cols-12 gap-x-4">
                <div className="col-span-5">
                  {/* to check go to the components file */}
                  <FlashCountrPart />
                </div>
                <div className="col-span-7">1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
