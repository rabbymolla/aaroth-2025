"use client";
import React, { useRef } from "react";
import flash1 from "@/public/PNG/arrivale1.png";
import deafultImg from "@/public/PNG/arrivale1.png";
import flash2 from "@/public/PNG/arrivale2.png";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import NextArrow from "@/components/SliderArrows/nextArrow";
import PrevArrow from "@/components/SliderArrows/prevArrow";

const sliderImg = [
  {
    id: 1,
    img: flash1,
    title: "Name Product",
    waight: "4.3m",
  },
  {
    id: 2,
    img: flash2,
    title: "Fitness and activity tracker",
    waight: "2.3m",
  },
  {
    id: 3,
    img: flash1,
    title: "Name Product",
    waight: "5.3m",
  },
  {
    id: 4,
    img: flash2,
    title: "Name Product",
    waight: "5.3m",
  },
  {
    id: 5,
    img: flash1,
    title: "Name Product",
    waight: "6.3m",
  },
  {
    id: 6,
    img: flash2,
    title: "Name Product",
    waight: "4.3m",
  },
  {
    id: 7,
    img: flash1,
    title: "Name Product",
    waight: "4.3m",
  },
];

const NewArrivals = () => {
  const clickRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
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
        },
      },
    ],
  };

  return (
    <div className="py-10 bg-arrival_color">
      <div className="container">
        <div className="flex items-center gap-x-4">
          <div className="w-[30%] md:w-1/5">
            <h1 className="font-Roboto font-bold text-lg xl:text-2xl text-black_color mb-5 w-[168px] xl:leading-10">
              New Arrivales Products
            </h1>

            {/* arrows area for slider arrows */}
            <div className="flex items-center gap-x-4">
              <PrevArrow
                clickRef={clickRef}
                className="rounded-full w-10 h-10 flex items-center justify-center cursor-pointer text-gray_color hover:text-white_color duration-100 ease-linear border border-border_color hover:bg-button_color "
              />

              <NextArrow
                clickRef={clickRef}
                className="rounded-full w-10 h-10 flex items-center justify-center cursor-pointer text-gray_color hover:text-white_color  duration-100 ease-linear border border-border_color hover:bg-button_color "
              />
            </div>
            {/* arrows area for slider arrows */}
          </div>
          <div className="w-[69%] md:w-[80%]">
            <Slider ref={clickRef} {...settings}>
              {sliderImg.map((item) => (
                <div key={item.id} className="px-2 lg:px-3 ">
                  <div className="shadow-md rounded-2xl bg-white_color border-border_color border">
                    <Link
                      href={item.limk || "/new_arrivals"}
                      className="block rounded-2xl h-auto w-auto overflow-hidden "
                    >
                      <div>
                        <Image
                          src={item.img || deafultImg}
                          alt={item.title || "Product Image"}
                          width={349}
                          height={314}
                          priority={false}
                          placeholder="blur"
                          className="w-full h-auto"
                        />
                      </div>
                    </Link>

                    <div className="p-4">
                      <h1 className="font-Roboto font-bold text-lg text-black_color">
                        {item.title}
                      </h1>
                      <span className="font-Roboto font-normal text-sm text-gray_color">
                        {item.waight} sold
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
