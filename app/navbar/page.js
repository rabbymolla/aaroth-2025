import Link from "next/link";
import React from "react";
const manuItems = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "All Category",
    link: "/category",
  },
  {
    id: 3,
    title: "All Product",
    link: "/product",
  },
  {
    id: 4,
    title: "Brand",
    link: "/brand",
  },
  {
    id: 5,
    title: "Champaigns",
    link: "/champaigns",
  },
  {
    id: 5,
    title: "Blog",
    link: "/blog",
  },
  {
    id: 6,
    title: "About Us",
    link: "/about",
  },
  {
    id: 7,
    title: "Contact Us",
    link: "/contact",
  },
];
const Navbar = () => {
  return (
    <nav className="p-5 lg:p-0">
      <ul className="  lg:flex lg:items-center lg:gap-x-16">
        {manuItems.map((data, i) => (
          <li
            className="font-Roboto font-normal text-sm text-gray_color mb-5 lg:mb-0"
            key={i}
          >
            <Link href={data.link}>{data.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
