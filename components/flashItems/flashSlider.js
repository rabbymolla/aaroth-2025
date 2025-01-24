"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import flash1 from "@/public/PNG/flash1.png";
import flash2 from "@/public/PNG/flash2.png";
import Image from "next/image";
import Link from "next/link";
import { Line } from "rc-progress";

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
];

const FlashSlider = () => {
  const [active, setActive] = useState("");

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
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
    <div className="slider-container">
      <Slider {...settings}>
        {sliderImg.map((data) => (
          <div key={data.id} className=" md:p-4">
            {/* Outer container with padding for gaps */}
            <Link
              href="#"
              className="flex items-center gap-x-2 bg-white_color rounded-lg shadow-md py-2 px-2 sm:py-4 sm:px-3"
            >
              {/* Inner content */}
              <div>
                <Image
                  src={data.img || flash1}
                  alt={data.alt || "Flash Image"}
                  priority={false}
                  placeholder="blur"
                />
              </div>
              <div>
                <h1 className="text-xs sm:text-sm md:text-lg font-Roboto font-medium text-black_color mb-2 lg:mb-5">
                  {data.title || "This product title"}
                </h1>
                <p className="text-gray_color font-Roboto font-bold text-base sm:text-lg flex items-center justify-between mb-2  md:mb-3">
                  {data.price || "$100"}
                  <span className="font-Roboto font-normal text-xs md:text-base text-border_color">
                    {data.stock || "50"} left
                  </span>
                </p>
                <Line
                  percent={data.stock || 50}
                  trailWidth={5}
                  strokeWidth={5}
                  strokeColor="#17479E"
                />
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FlashSlider;
