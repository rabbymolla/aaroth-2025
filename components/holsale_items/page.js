"use client";
import React, { useRef } from "react";
import flash1 from "@/public/PNG/moreSale2.png";
import flash2 from "@/public/PNG/moreSale1.png";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import PrevArrow from "@/components/SliderArrows/prevArrow";
import NextArrow from "@/components/SliderArrows/nextArrow";
import Hadding from "@/components/hadding/Hadding";

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
  };

  return (
    <div className="py-10 lg:py-20 relative">
      <div className="container">
        <div className="relative">
          <Hadding title="Most Populer HolSale Items" />
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
                  href={item.limk || "/holsale_items"}
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
