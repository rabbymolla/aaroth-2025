import CartIcon from "@/public/SVG/cart";
import Logo from "@/public/SVG/Logo";
import LoveIcon from "@/public/SVG/love";
import SearchIcon from "@/public/SVG/search";
import UserIcon from "@/public/SVG/usrIcon";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-white_color py-6 md:py-11">
      <div className="container mx-auto px-4">
        <div className="md:flex items-center justify-between flex-wrap md:flex-nowrap md:gap-x-4">
          <div className="w-2/5 sm:w-1/3 md:w-1/5">
            <Link href="#">
              <Logo />
            </Link>
          </div>

          <div className="w-full mt-4 md:mt-0 md:w-[80%] flex items-center justify-between gap-x-2 md:gap-x-4">
            <div className="flex-1 md:flex-[0.7]">
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

            <div className="flex-1 md:flex-[0.3] flex items-center justify-between md:gap-x-4">
              <div className="cursor-pointer">
                <LoveIcon />
              </div>

              <div className="relative cursor-pointer">
                <CartIcon />
                <span className="absolute -top-2 -right-2 font-Roboto font-normal bg-button_color text-white_color text-xs rounded-full px-1.5 py-0.5">
                  4
                </span>
              </div>

              <div className="flex items-center gap-x-3 bg-button_color py-2 px-4 md:py-5 md:px-8 shadow-md rounded-2xl cursor-pointer">
                <UserIcon />
                <button className="hidden lg:block font-Roboto font-bold text-white_color text-sm lg:text-base uppercase">
                  My Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
