import CartIcon from "@/public/SVG/cart";
import Logo from "@/public/SVG/Logo";
import LoveIcon from "@/public/SVG/love";
import SearchIcon from "@/public/SVG/search";
import UserIcon from "@/public/SVG/usrIcon";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-white_color py-4 lg:py-8 2xl:py-11">
      <div className="container px-2 lg:px-0 lg:flex lg:items-center lg:justify-between  gap-x-4">
        <div className="w-full lg:w-1/5">
          <Link href="#">
            <Logo />
          </Link>
        </div>

        <div className="w-full mt-4 lg:mt-0 lg:w-[80%] flex items-center justify-between gap-x-4">
          <div className="w-[55%] lg:w-[70%]">
            <div className="relative bg-white_smoke shadow-sm rounded-md">
              <input
                type="text"
                placeholder="Search here..."
                className="w-full bg-transparent py-3 md:py-5 px-4 font-Roboto font-medium placeholder:text-gray_color placeholder:text-sm md:placeholder:text-base outline-none text-base md:text-lg text-black_color"
              />
              <div className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer">
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

            <div className="flex items-center gap-x-3 bg-button_color p-1  xl:py-3 xl:px-5 2xl:px-8 2xl:py-5 shadow-md rounded-md xl:rounded-xl 2xl:rounded-2xl cursor-pointer">
              <UserIcon />
              <button className="hidden xl:block font-Roboto font-bold text-white_color text-xs 2xl:text-lg uppercase">
                My Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
