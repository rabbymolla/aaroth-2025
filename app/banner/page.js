"use client";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import slider1 from "@/public/PNG/slider1.png";
import slider2 from "@/public/PNG/slider2.jpg";
import slider3 from "@/public/PNG/slider3.jpg";
import slider4 from "@/public/PNG/slider4.jpg";
import slider5 from "@/public/PNG/slider5.jpg";
import Link from "next/link";

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
    autoplay: true,
    centerPadding: "120px", // Increases the space around the center slide
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    dots: true,
    beforeChange: (prev, next) => {
      setActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            listStyle: "none", // Remove default list bullet points
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className={` flex ${i == active ? " scale-90" : ""}`}>{i}</div>
    ),
  };

  return (
    <div className="slider-container bg-white_color py-10">
      <Slider {...settings}>
        {sliderImg.map((data) => (
          <div className="slider-item px-5" key={data.id}>
            <Link href="#">
              <Image
                src={data.img || slider1}
                alt={data.alt || "Banner Image"}
                width={1200} // Adjust width to make images larger
                height={800} // Adjust height proportionally
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
