"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import BusinessIcon1 from "@/public/SVG/business1";
import BusniessIcon2 from "@/public/SVG/business2";
import BusinessIcon3 from "@/public/SVG/business3";
import BusinessIcon4 from "@/public/SVG/business4";
import BusinessIcon5 from "@/public/SVG/business5";
import BusinessIcon6 from "@/public/SVG/business6";
import BusinessIcon7 from "@/public/SVG/business7";
import defaultLogo from "@/public/PNG/business1.png";
import PrevArrow from "@/components/SliderArrows/prevArrow";
import NextArrow from "@/components/SliderArrows/nextArrow";

const sliderImg = [
  {
    id: 1,
    img: defaultLogo,
    svg: <BusinessIcon1 />,
  },
  {
    id: 2,
    img: defaultLogo,
    svg: <BusniessIcon2 />,
  },
  {
    id: 3,
    svg: <BusinessIcon3 />,
  },
  {
    id: 4,
    svg: <BusinessIcon4 />,
  },
  {
    id: 5,
    svg: <BusinessIcon5 />,
  },
  {
    id: 6,
    svg: <BusinessIcon6 />,
  },
  {
    id: 7,
    svg: <BusinessIcon7 />,
  },
];

const BuisnessPartner = () => {
  const clickRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1199, // Large screens
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 3,
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-5">
      <div className="container ">
        <h1 className="font-Roboto font-bold text-lg xl:text-2xl text-black_color mb-5 lg:mb-10">
          Our Business Partners
        </h1>
        <div className="relative">
          <Slider ref={clickRef} {...settings}>
            {sliderImg.map((item) => (
              <div
                key={item.id}
                className="px-2 lg:px-5 overflow-hidden bg-transparent"
              >
                <div className="shadow-md w-full flex items-center justify-center ">
                  {item.svg || (
                    <div>
                      <Image
                        src={item.img || defaultLogo}
                        alt={item.title || "Product Image"}
                        width={200}
                        height={190}
                        priority={false}
                        placeholder="blur"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </Slider>
          <PrevArrow clickRef={clickRef} className=" absolute top-2 left-0" />
          <NextArrow clickRef={clickRef} className=" absolute top-2 right-0" />
        </div>
      </div>
    </div>
  );
};

export default BuisnessPartner;
