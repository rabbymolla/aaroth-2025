"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import slider1 from "@/public/PNG/slider1.png";
import slider2 from "@/public/PNG/slider2.jpg";
import slider3 from "@/public/PNG/slider3.jpg";
import slider4 from "@/public/PNG/slider4.jpg";
import slider5 from "@/public/PNG/slider5.jpg";
import Link from "next/link";
import PrevArrow from "@/components/SliderArrows/prevArrow";
import NextArrow from "@/components/SliderArrows/nextArrow";

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
  const clickRef = useRef(null);

  const settings = {
    centerMode: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    dots: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 1400, // Large screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerPadding: "60px",
          className: "center",
          centerMode: true,
        },
      },
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerPadding: "40px",
          className: "center",
          centerMode: true,
        },
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          centerPadding: "30px",
          className: "center",
          centerMode: true,
        },
      },
      {
        breakpoint: 480, // Mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          centerPadding: "20px",
          className: "center",
          centerMode: true,
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
    <div className="slider-container group relative py-5 md:py-10">
      <Slider ref={clickRef} {...settings}>
        {sliderImg.map((data) => (
          <div className="slider-item px-2 flex justify-center" key={data.id}>
            <Link href="#">
              <div className="overflow-hidden w-auto h-auto">
                <Image
                  src={data.img || slider1}
                  alt={data.alt || "Banner Image"}
                  priority={false}
                  placeholder="blur"
                  width={1620} // Matches container width
                  height={634} // Matches image aspect ratio
                />
              </div>
            </Link>
          </div>
        ))}
      </Slider>
      <PrevArrow
        clickRef={clickRef}
        className="absolute top-1/2 left-0 md:left-2 -translate-y-1/2 bg-gray_color rounded-full z-10 p-2 cursor-pointer text-white_color opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      <NextArrow
        clickRef={clickRef}
        className="absolute top-1/2 right-0 md:right-2 -translate-y-1/2 bg-gray_color rounded-full p-2 cursor-pointer z-10 text-white_color opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
    </div>
  );
};

export default Banner;
