"use client";
import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import { Line } from "rc-progress";
import TestiIcon from "@/public/SVG/testi1";
import TestimProfiile1 from "@/public/SVG/testimProfiile1";
import defaultProfile from "@/public/PNG/testiDefaultProfile1.jpg";
import Hadding from "@/components/hadding/Hadding";

const sliderImg = [
  {
    id: 1,
    img: defaultProfile,
    icom: <TestiIcon />,
    name: "Michael Andrew",
    position: "CEO Apple Inc.",
    discription:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus asperiores nemo architecto optio vitae",
  },
  {
    id: 2,
    img: defaultProfile,
    icom: <TestiIcon />,
    name: "Michael Andrew",
    position: "CEO Apple Inc.",
    discription:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus asperiores nemo architecto optio vitae",
  },
  {
    id: 3,
    img: defaultProfile,
    icom: <TestiIcon />,
    name: "Michael Andrew",
    position: "CEO Apple Inc.",
    discription:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus asperiores nemo architecto optio vitae",
  },
  {
    id: 4,
    img: defaultProfile,
    icom: <TestiIcon />,
    name: "Michael Andrew",
    position: "CEO Apple Inc.",
    discription:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus asperiores nemo architecto optio vitae",
  },
  {
    id: 5,
    img: defaultProfile,
    icom: <TestiIcon />,
    name: "Michael Andrew",
    position: "CEO Apple Inc.",
    discription:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus asperiores nemo architecto optio vitae",
  },
  {
    id: 6,
    img: defaultProfile,
    icom: <TestiIcon />,
    name: "Michael Andrew",
    position: "CEO Apple Inc.",
    discription:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus asperiores nemo architecto optio vitae",
  },
  {
    id: 7,
    img: defaultProfile,
    icom: <TestiIcon />,
    name: "Michael Andrew",
    position: "CEO Apple Inc.",
    discription:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus asperiores nemo architecto optio vitae",
  },
];

const ClientTestimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1199, // Tablets
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
    <div className="py-10 lg:py-20">
      <div className="container">
        <Hadding title="Client Testimonials" />
        <p className="font-Roboto font-normal text-sm text-gray_color mb-10 text-center md:text-start md:w-[394px] leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          asperiores nemo architecto optio vitae.
        </p>

        <Slider {...settings}>
          {sliderImg.map((item) => (
            <div key={item.id} className="px-2 group">
              <div className="mx-auto text-center py-5 border-border_color border lg:py-10 shadow-md rounded-lg bg-white_color group-hover:bg-button_color duration-100 ease-in-out">
                {/* Icon Section */}
                <div className="flex justify-center w-full">
                  {item.icon || <TestiIcon />}
                </div>

                {/* Description Section */}
                <p className="text-gray_color font-Roboto font-normal text-sm my-10 leading-7 w-[210px] mx-auto group-hover:text-white_color duration-100 ease-in-out">
                  {item.discription}
                </p>

                {/* Profile Image Section */}
                <Link href={item.link || "#"}>
                  <div className="w-[96px] h-[96px] rounded-full overflow-hidden mx-auto bg-transparent">
                    <Image
                      src={item.img || defaultProfile}
                      alt={item.alt || "Default Image"}
                      width={96}
                      height={96}
                      priority={false}
                      placeholder="blur"
                      className="object-cover"
                    />
                  </div>
                </Link>

                {/* Name and Position Section */}
                <h5 className="text-lg font-medium font-Roboto text-black_color mt-4 group-hover:text-white_color duration-100 ease-in-out">
                  {item.name || "Add Your Name"}
                </h5>
                <span className="text-sm text-gray_color font-Roboto font-normal group-hover:text-white_color duration-100 ease-in-out">
                  {item.position}
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ClientTestimonials;
