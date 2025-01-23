"use client";
import React, { useState } from "react";
import flash1 from "@/public/PNG/flash1.png";
import flash2 from "@/public/PNG/flash2.png";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import SampleNextArrow from "@/components/recentlySliderArrow/SampleNextArrow";
import SamplePrevArrow from "@/components/recentlySliderArrow/SamplePrevArrow";

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
const RecentlySale = () => {
  const [active, setActive] = useState("");

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
        breakpoint: 1400, // Large screens
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1199, // Large screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 574, // Mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480, // Mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
    beforeChange: (prev, next) => {
      setActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          //justify-content: space-between;
        }}
      >
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`${
          i === active
            ? "bg-white_color p-1 rounded-full"
            : "w-2 h-2 rounded-full bg-border_color"
        }`}
      >
        <span className="w-1 h-1 rounded-full bg-border_color"></span>
      </div>
    ),
  };
  return (
    <div className="py-10 lg:py-20 relative">
      <div className="container">
        <h1 className="font-Roboto font-bold text-lg xl:text-2xl text-black_color mb-5 lg:mb-10">
          Recently view
        </h1>

        <Slider {...settings}>
          {sliderImg.map((data) => (
            <div key={data.id} className="px-2">
              <div className="flex items-center gap-x-2 bg-white_color rounded-lg shadow-md py-2 px-2 sm:px-3 ">
                {/* Inner content */}
                <Link href={data.link || "/pikatItrms"}>
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
                <div>
                  <h1 className="text-lg sm:text-sm md:text-lg font-Roboto font-medium text-black_color mb-2 2xl:mb-5">
                    {data.title || "This product title"}
                  </h1>
                  <p className="text-gray_color font-Roboto font-bold text-base sm:text-lg ">
                    {data.price || "$100"}
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

export default RecentlySale;
