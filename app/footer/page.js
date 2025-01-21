import React from "react";
import Logo from "@/public/SVG/Logo";
import Link from "next/link";
import InstagramIcon from "@/public/SVG/instagramIcon";
import FacebookIcon from "@/public/SVG/facebook";
import TwitterIcon from "@/public/SVG/twitterIcon";
import LinkdinIcon from "@/public/SVG/linkdinIcon";
import HeadPhonIcon from "@/public/SVG/headPhonIcon";
import AppleButton from "@/public/SVG/appleButton";
import GoogleButton from "@/public/SVG/googleButton";
import YoutubeIcon from "@/public/SVG/YoutubeIcon";

const socalMedia = [
  {
    id: 1,
    img: <YoutubeIcon />,
    link: "#",
  },
  {
    id: 2,
    img: <InstagramIcon />,
    link: "#",
  },
  {
    id: 3,
    img: <LinkdinIcon />,
    link: "#",
  },
  {
    id: 4,
    img: <TwitterIcon />,
    link: "#",
  },
  {
    id: 5,
    img: <FacebookIcon />,
    link: "#",
  },
];

const quickLink = [
  {
    id: 1,
    title: "About Us",
    link: "/about",
  },
  {
    id: 2,
    title: "Contact Us",
    link: "/contact",
  },
  {
    id: 3,
    title: "Product",
    link: "/product",
  },
  {
    id: 4,
    title: "Login",
    link: "/login",
  },
  {
    id: 4,
    title: "Sing Up",
    link: "/sing",
  },
];
const customerArea = [
  {
    id: 1,
    title: "My Account",
    link: "#",
  },
  {
    id: 2,
    title: "Orders",
    link: "#",
  },
  {
    id: 3,
    title: "Traking List",
    link: "#",
  },
  {
    id: 4,
    title: "Terms",
    link: "#",
  },
  {
    id: 5,
    title: "Privacy Policy",
    link: "#",
  },
  {
    id: 6,
    title: "My Cart",
    link: "#",
  },
];

const Footer = () => {
  return (
    <footer className="bg-white_color py-10 lg:pt-20 lg:pb-12">
      <div className="container grid grid-cols-12 gap-4">
        {/* Logo and Social Media Section */}
        <div className="text-center md:text-start col-span-12 md:col-span-6 lg:col-span-4 mb-8 lg:mb-0">
          <div className="flex justify-center md:block">
            <Logo />
          </div>
          <p className="font-Roboto font-normal text-sm text-black_opacity my-5 leading-5 w-[300px] mx-auto md:mx-0 lg:w-full xl:w-[382px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eos
            tempora velit a aliquid doloremque.
          </p>
          <div className="flex justify-center md:justify-start gap-x-4">
            {socalMedia.map((data, i) => (
              <Link
                href={data.link}
                className="bg-black_opacity p-3 w-10 h-10 flex items-center justify-center rounded-md hover:bg-button_opacity ease-linear duration-200 hover:fill-button_color"
                key={i}
              >
                {data.img}
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Link Section */}
        <div className="col-span-6 lg:col-span-2 text-center md:text-start">
          <h1 className="font-Roboto font-bold text-lg md:text-base xl:text-lg text-black_color uppercase mb-5 lg:mb-10">
            Quick Link
          </h1>
          <ul>
            {quickLink.map((data, i) => (
              <li
                key={i}
                className="font-Roboto font-normal text-sm text-black_opacity mb-3 last:mb-0"
              >
                <Link href={data.link}>{data.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Area Section */}
        <div className="col-span-6 lg:col-span-2 mb-8 md:mb-0 text-center md:text-start">
          <h1 className="font-Roboto font-bold text-lg md:text-base xl:text-lg text-black_color uppercase mb-5 lg:mb-10">
            Customer Area
          </h1>
          <ul>
            {customerArea.map((data, i) => (
              <li
                key={i}
                className="font-Roboto font-normal text-sm text-black_opacity mb-3 last:mb-0"
              >
                <Link href={data.link}>{data.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4 text-center md:text-start">
          <h1 className="font-Roboto font-bold text-lg md:text-base xl:text-lg text-black_color uppercase mb-5 lg:mb-10">
            Contact
          </h1>
          <p className="font-Roboto font-normal text-sm text-black_opacity my-5 leading-5 w-[300px] mx-auto md:mx-0 lg:w-full 2xl:w-[382px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eos
            tempora velit a aliquid doloremque.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-y-4 sm:gap-y-0 gap-x-3 xl:gap-x-4">
            <div className="flex items-center gap-x-4">
              <HeadPhonIcon />
              <div>
                <p className="font-Roboto font-normal text-sm text-black_opacity pb-1">
                  Have any Questions?
                </p>
                <Link
                  href="#"
                  className="font-Roboto font-bold text-sm text-button_color"
                >
                  +123 456 789
                </Link>
              </div>
            </div>
            <button className="py-2 xl:py-3 px-4 xl:px-7 border border-x-button_color border-solid bg-transparent rounded-md font-Roboto font-bold text-sm uppercase text-button_color">
              Live Chat
            </button>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-x-4 lg:gap-x-6 mt-9">
            <div className="cursor-pointer">
              <AppleButton />
            </div>
            <div className="cursor-pointer">
              <GoogleButton />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
