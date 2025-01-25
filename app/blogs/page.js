"use client";
import React, { useEffect, useState } from "react";
import blog1 from "@/public/PNG/blog1.png";
import deafultImg from "@/public/PNG/blog1.png";
import blog2 from "@/public/PNG/blog2.png";
import Image from "next/image";
import Link from "next/link";

const sliderImg = [
  {
    id: 1,
    img: blog1,
    discription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium veritatis facere doloremque laborum iusto",
  },
  {
    id: 2,
    img: blog2,
    discription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium veritatis facere doloremque laborum iusto",
  },
  {
    id: 3,
    img: blog1,
    discription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium veritatis facere doloremque laborum iusto",
  },
  {
    id: 4,
    img: blog2,
    discription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium veritatis facere doloremque laborum iusto",
  },
  {
    id: 5,
    img: blog1,
    discription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium veritatis facere doloremque laborum iusto",
  },
  {
    id: 6,
    img: blog2,
    discription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium veritatis facere doloremque laborum iusto",
  },
];
const BlogPart = () => {
  const [visibleCount, setVisibleCount] = useState(4); // Default for larger screens
  const [incrementCount, setIncrementCount] = useState(4); // Default increment

  // Adjust visible items based on screen size
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth <= 767) {
        // Small screens (e.g., mobile)
        setVisibleCount(2);
        setIncrementCount(2);
      } else if (window.innerWidth <= 990) {
        // Medium screens (e.g., tablets)
        setVisibleCount(3);
        setIncrementCount(3);
      } else {
        // Extra large screens (e.g., desktops)
        setVisibleCount(4);
        setIncrementCount(4);
      }
    };

    // Run on initial render
    updateVisibleCount();

    // Add event listener for resizing
    window.addEventListener("resize", updateVisibleCount);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const loadMore = () => {
    setVisibleCount((prev) => prev + incrementCount);
  };
  return (
    <div className="pt-5 pb-14">
      <div className="container">
        <h1 className="font-Roboto font-bold text-lg xl:text-2xl text-black_color mb-5 lg:mb-10">
          News Blogs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-7">
          {sliderImg.slice(0, visibleCount).map((item) => (
            <div key={item.id}>
              <div className="shadow-md rounded-2xl bg-white_color border-border_color border">
                <Link
                  href={item.limk || "/blogs"}
                  className="block rounded-2xl h-auto w-auto overflow-hidden "
                >
                  <div className="relative group">
                    <Image
                      src={item.img || deafultImg}
                      alt={item.title || "Product Image"}
                      width={349}
                      height={314}
                      priority={false}
                      placeholder="blur"
                      className="w-full h-auto"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#17479E] to-[#000] opacity-50 translate-y-full invisible group-hover:visible group-hover:translate-y-0 duration-300 ease-in-out"></div>
                  </div>
                </Link>

                <div className="p-4">
                  <p className="font-Roboto font-normal text-base text-black_color leading-7 pb-5">
                    {item.discription ||
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, illo?"}
                  </p>
                  <button className="font-Roboto font-bold text-lg text-gray_color hover:text-button_color group-hover:text-button_color duration-100 ease-in-out">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={loadMore}
            className="bg-button_color text-white_color font-Roboto font-bold text-lg py-5 px-16 rounded-xl"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPart;
