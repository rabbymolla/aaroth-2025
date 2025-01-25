"use client";
import React, { useState } from "react";
import flash1 from "@/public/PNG/moreSale2.png";
import flash2 from "@/public/PNG/moreSale1.png";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import SampleNextArrow from "@/components/recentlySliderArrow/SampleNextArrow";
import SamplePrevArrow from "@/components/recentlySliderArrow/SamplePrevArrow";
import { Line } from "rc-progress";

const sliderImg = [
  {
    id: 1,
    img: flash1,
    title: "Fitness and activity tracker",
    price: "$400",
  },
  {
    id: 2,
    img: flash2,
    title: "Fitness and activity tracker",
    price: "$200",
  },
  {
    id: 3,
    img: flash1,
    title: "Fitness and activity tracker",
    price: "$300",
  },
  {
    id: 4,
    img: flash2,
    title: "Fitness and activity tracker",
    price: "$500",
  },
  {
    id: 5,
    img: flash1,
    title: "Fitness and activity tracker",
    price: "$500",
  },
  {
    id: 6,
    img: flash2,
    title: "Fitness and activity tracker",
    price: "$500",
  },
  {
    id: 7,
    img: flash1,
    title: "Fitness and activity tracker",
    price: "$500",
  },
];

const HolSalesItems = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200, // Large screens
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000, // Large screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 574, // Mobile screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480, // Mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 lg:py-20 relative">
      <div className="container">
        <h1 className="font-Roboto font-bold text-lg xl:text-2xl text-black_color mb-5 lg:mb-10">
          Most Populer HolSale Items
        </h1>
        <Slider {...settings}>
          {sliderImg.map((item) => (
            <div key={item.id} className="px-1">
              <div className="shadow-md bg-white_color rounded-3xl">
                <Link
                  href={item.limk || "/more_sales"}
                  className="block rounded-2xl h-auto w-auto overflow-hidden "
                >
                  <div>
                    <Image
                      src={item.img}
                      alt={item.title || "Product Image"}
                      width={272}
                      height={265}
                      priority={false}
                      placeholder="blur"
                      className="w-full h-auto"
                    />
                  </div>
                </Link>
                <div className="p-4 text-center">
                  <h2 className="font-Roboto text-lg font-bold text-black_color mb-2">
                    {item.title || "No title available"}
                  </h2>
                  <p className="text-gray_color font-Roboto font-bold text-base mb-3 flex items-center gap-x-4 justify-around">
                    <span className="line-through text-red_color font-Roboto font-medium text-lg">
                      {item.price || "$200"}
                    </span>
                    {item.price || "$100"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HolSalesItems;
