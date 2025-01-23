"use client";
import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import slider1 from "@/public/PNG/slider1.png";
import slider2 from "@/public/PNG/slider2.jpg";
import slider3 from "@/public/PNG/slider3.jpg";
import slider4 from "@/public/PNG/slider4.jpg";
import slider5 from "@/public/PNG/slider5.jpg";
import Link from "next/link";
import SampleNextArrow from "@/components/bannerSliderArrow/SampleNextArrow";
import SamplePrevArrow from "@/components/bannerSliderArrow/SamplePrevArrow";

const sliderImg = [
  {
    id: 1,
    img: slider2,
  },
  {
    id: 2,
    img: slider3,
  },
  {
    id: 3,
    img: slider4,
  },
  {
    id: 4,
    img: slider5,
  },
];

const Banner = () => {
  const [active, setActive] = useState("");
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    dots: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerPadding: "40px", // Keep the same padding for large screens
        },
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          centerPadding: "80px", // Adjust padding for tablets
        },
      },
      {
        breakpoint: 480, // Mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          centerPadding: "30px", // Adjust padding for small screens
        },
      },
    ],
    beforeChange: (prev, next) => {
      setActive(next);
    },
    appendDots: (dots) => (
      <div>
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
            ? "bg-button_color p-1 rounded-full"
            : "w-2 h-2 rounded-full bg-border_color"
        }`}
      >
        <span className="w-1 h-1 rounded-full bg-border_color"></span>
      </div>
    ),
  };

  return (
    <div className="slider-container group relative py-5">
      <Slider {...settings}>
        {sliderImg.map((data) => (
          <div className="slider-item px-2 " key={data.id}>
            <Link href="#">
              <Image
                src={data.img || slider1}
                alt={data.alt || "Banner Image"}
                priority={false}
                placeholder="blur"
              />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
