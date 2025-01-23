import React from "react";
import Image from "next/image";
import Link from "next/link";
import flash1 from "@/public/PNG/flash1.png";
import flash2 from "@/public/PNG/flash2.png";

const sliderImg = [
  {
    id: 1,
    img: flash1,
    title: "Fitness and activity tracker",
    price: "$400",
    stock: "60",
  },
  {
    id: 2,
    img: flash2,
    title: "Fitness and activity tracker",
    price: "$200",
    stock: "50",
  },
  {
    id: 3,
    img: flash1,
    title: "Fitness and activity tracker",
    price: "$300",
    stock: "20",
  },
  {
    id: 4,
    img: flash2,
    title: "Fitness and activity tracker",
    price: "$500",
    stock: "100",
  },
  {
    id: 5,
    img: flash2,
    title: "Fitness and activity tracker",
    price: "$500",
    stock: "100",
  },
  {
    id: 6,
    img: flash2,
    title: "Fitness and activity tracker",
    price: "$500",
    stock: "100",
  },
  {
    id: 7,
    img: flash2,
    title: "Fitness and activity tracker",
    price: "$500",
    stock: "100",
  },
];

const SelectPikar = () => {
  return (
    <div className="py-10 lg:py-20 ">
      <div className="container">
        <h1 className="font-Roboto font-bold text-lg xl:text-2xl text-black_color mb-5 lg:mb-10">
          Our Selected Pikar
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-2 md:gap-x-5 gap-y-5 xl:gap-y-10">
          {sliderImg.map((data) => (
            <div
              key={data.id}
              className="flex flex-col xl:flex-row items-center gap-x-2 bg-white_color rounded-lg shadow-md p-4"
            >
              <Link href={data.link || "/selectPikar"}>
                <div className=" w-[117px] h-[139px] rounded-lg overflow-hidden ">
                  <Image
                    src={data.img || flash1}
                    alt={data.alt || "Product Image"}
                    width={117}
                    height={139}
                    priority={false}
                    placeholder="blur"
                  />
                </div>
              </Link>
              <div className="text-center mt-3 xl:text-start xl:mt-0">
                <h2 className="text-sm md:text-base 2xl:text-lg font-Roboto font-medium text-black_color mb-3">
                  {data.title || "Product Title"}
                </h2>
                <p className="text-gray_color font-Roboto font-bold text-sm md:text-base">
                  {data.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectPikar;
