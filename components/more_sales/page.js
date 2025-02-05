"use client";
import React, { useRef, useState } from "react";
import flash1 from "@/public/PNG/moreSale2.png";
import flash2 from "@/public/PNG/moreSale1.png";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import { Line } from "rc-progress";
import PrevArrow from "@/components/SliderArrows/prevArrow";
import NextArrow from "@/components/SliderArrows/nextArrow";
import Hadding from "@/components/hadding/Hadding";

const sliderImg = [
  {
    id: 1,
    img: flash1,
    title: "Fitness and activity tracker",
    price: "$400",
    stock: "60",
    order: "sale",
  },
  {
    id: 2,
    img: flash2,
    title: "Fitness and activity tracker",
    price: "$200",
    stock: "50",
    order: "sold",
  },
  {
    id: 3,
    img: flash1,
    title: "Fitness and activity tracker",
    price: "$300",
    stock: "20",
    order: "sale",
  },
  {
    id: 4,
    img: flash2,
    title: "Fitness and activity tracker",
    price: "$500",
    stock: "30",
    order: "50% off",
  },
  {
    id: 5,
    img: flash1,
    title: "Fitness and activity tracker",
    price: "$500",
    stock: "90",
    order: "sale",
  },
  {
    id: 6,
    img: flash2,
    title: "Fitness and activity tracker",
    price: "$500",
    stock: "80",
    order: "sold",
  },
  {
    id: 7,
    img: flash1,
    title: "Fitness and activity tracker",
    price: "$500",
    stock: "100",
    order: "sale",
  },
];

const MoreSales = () => {
  const [active, setActive] = useState(0);
  const clickRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
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
    beforeChange: (prev, next) => setActive(next),
    appendDots: (dots) => (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul style={{ display: "flex", gap: "8px" }}>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-3 h-3 rounded-full ${
          i === active ? "bg-primary_color" : "bg-gray-300"
        }`}
      />
    ),
  };

  return (
    <div className="py-10 lg:py-20 relative">
      <div className="container">
        <div className="relative">
          <Hadding title="More Sales" />
          <PrevArrow
            clickRef={clickRef}
            className="absolute top-1/2 right-14  -translate-y-1/2  p-2 cursor-pointer text-gray_color hover:text-button_color duration-100 ease-linear "
          />
          <NextArrow
            clickRef={clickRef}
            className="absolute top-1/2 right-0  -translate-y-1/2  z-10 p-2 cursor-pointer text-gray_color hover:text-button_color duration-100 ease-linear"
          />
        </div>
        <Slider ref={clickRef} {...settings}>
          {sliderImg.map((item) => (
            <div key={item.id} className="px-1">
              <div className="shadow-md bg-white_color rounded-3xl">
                <Link
                  href={item.limk || "/more_sales"}
                  className="block rounded-2xl h-auto w-auto overflow-hidden "
                >
                  <div className="relative ">
                    <Image
                      src={item.img}
                      alt={item.title || "Product Image"}
                      width={272}
                      height={265}
                      priority={false}
                      placeholder="blur"
                      className="w-full h-auto"
                    />

                    <span className="absolute top-3 right-3 bg-button_color text-white_color font-Roboto font-bold tex-xs p-2 rounded-md uppercase">
                      {item.order || "sale"}
                    </span>
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
                  <Line
                    percent={item.stock || 50}
                    trailWidth={5}
                    strokeWidth={5}
                    strokeColor="#17479E"
                  />
                  <span className="block font-Roboto font-normal text-xs md:text-base text-border_color mt-4">
                    {item.stock || "50"} left
                  </span>

                  <button className="w-full border border-button_color border-solid rounded-md shadow-sm py-2 cursor-pointer mt-5 text-button_color text-lg font-Roboto font-semibold">
                    Add Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MoreSales;
