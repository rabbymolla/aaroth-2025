"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import CartIcon from "@/public/SVG/cart";
import Logo from "@/public/SVG/Logo";
import LoveIcon from "@/public/SVG/love";
import SearchIcon from "@/public/SVG/search";
import UserIcon from "@/public/SVG/usrIcon";
import Navbar from "../navbar/page";
import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import NavNoScroll from "@/helper/NavNoScroll";

const Header = () => {
  const [navShow, setNavShow] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        if (window.scrollY >= 200) {
          setNavShow(true);
        } else {
          setNavShow(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const handleToggle = () => {
    setShow((prev) => {
      const newShow = !prev;
      NavNoScroll(newShow); // Lock/Unlock scroll based on newShow
      return newShow;
    });
  };

  useEffect(() => {
    //setShow(false);
    const widthScroll = () => {
      if (typeof window !== "undefined" && window.innerWidth < 991) {
        setShow(false);
      } else {
        setShow(true);
      }
    };

    widthScroll();

    if (typeof window !== "undefined") {
      window.addEventListener("resize", widthScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", widthScroll);
      }
    };
  }, []);
  return (
    <header
      className={`${
        navShow ? "nav-scroll fixed top-0 left-0 w-full  z-50 shadow-md" : ""
      } bg-white_color  ${navShow ? "p-1" : "py-4"}`}
    >
      <div className="container px-1 lg:px-0">
        <div className=" lg:flex lg:items-center lg:justify-between  lg:gap-x-4">
          <div className="w-full lg:w-1/5 flex items-center justify-between lg:block">
            <Link href="#">
              <Logo />
            </Link>
            <div
              onClick={handleToggle}
              className="block lg:hidden text-gray_color text-lg cursor-pointer transition-transform duration-300"
            >
              <div
                className={`transition-transform duration-500 ease-in-out text-2xl text-button_color ${
                  show ? "rotate-180" : "rotate-0"
                }`}
              >
                {show ? <ImCross /> : <FaBars />}
              </div>
            </div>
          </div>

          <div className="w-full mt-4 lg:mt-0 lg:w-[80%] flex items-center justify-between gap-x-4">
            <div className="w-[55%] lg:w-[70%]">
              <div className="relative bg-white_smoke shadow-sm rounded-md">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="w-full bg-transparent py-2 pl-3 lg:pl-7 pr-10 lg:pr-14  font-Roboto font-medium placeholder:text-gray_color placeholder:text-sm md:placeholder:text-base outline-none text-base md:text-lg text-black_color"
                />
                <div className="absolute top-1/2 right-2 lg:right-7 -translate-y-1/2 cursor-pointer">
                  <SearchIcon />
                </div>
              </div>
            </div>

            <div className="w-[45%] lg:w-[30%] flex items-center justify-between lg:gap-x-4">
              <div className="ml-2 cursor-pointer">
                <LoveIcon />
              </div>

              <div className="relative cursor-pointer">
                <CartIcon />
                <span className="absolute -top-2 -right-2 font-Roboto font-normal bg-button_color text-white_color text-xs rounded-full px-1.5 py-0.5">
                  4
                </span>
              </div>

              <div className="flex items-center gap-x-3 bg-button_color p-1  xl:py-2 xl:px-5 2xl:px-8 2xl:py-5 shadow-md rounded-sm xl:rounded-xl 2xl:rounded-2xl cursor-pointer">
                <UserIcon />
                <button className="hidden xl:block font-Roboto font-bold text-white_color text-xs 2xl:text-lg uppercase">
                  My Account
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${navShow ? "my-2 " : "mt-5 "} ${
            show
              ? "opacity-100 translate-x-0 visible "
              : "opacity-0 translate-x-full invisible "
          } fixed top-[80px] right-0 lg:static w-10/12 lg:w-full h-screen lg:h-auto bg-white_color lg:bg-transparent overflow-y-auto lg:overflow-auto transition-all duration-500 ease-in-out shadow-md lg:shadow-none z-20 `}
        >
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
