"use client";
import React, { useState } from "react";
import flash1 from "@/public/PNG/cat1.png";
import flash2 from "@/public/PNG/cat2.png";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import SampleNextArrow from "@/components/catSliderArrow/SampleNextArrow";
import SamplePrevArrow from "@/components/catSliderArrow/SamplePrevArrow";

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
    img: flash1,
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
    img: flash1,
    title: "Fitness and activity tracker",
    price: "$500",
    stock: "100",
  },
];

const Categories = () => {
  const [active, setActive] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1199, // Large screens
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
        breakpoint: 480, // Mobile screens
        settings: {
          slidesToShow: 2,
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
    <div className="py-10 lg:py-20 bg-light_gray_color relative">
      <div className="container">
        <h1 className="font-Roboto font-bold text-xl lg:text-2xl text-black_color mb-3">
          Categories
        </h1>
        <p className="font-Roboto font-normal text-sm text-gray_color mb-6 text-center md:text-start md:w-[394px] leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          asperiores nemo architecto optio vitae.
        </p>
        <Slider {...settings}>
          {sliderImg.map((item) => (
            <div key={item.id} className="px-2 ">
              <Link
                href={item.limk || "/categories"}
                className="block bg-white_color shadow-md rounded-t-full  w-auto h-auto"
              >
                <div>
                  <Image
                    src={item.img}
                    alt={item.title || "Product Image"}
                    width={117}
                    height={139}
                    priority={false}
                    placeholder="blur"
                    className="w-full h-auto"
                  />
                </div>
              </Link>
              <div className="mt-4 text-center">
                <h2 className="text-lg font-medium text-black_color mb-2">
                  {item.title || "No title available"}
                </h2>
                <p className="text-gray_color font-bold text-base">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Categories;
