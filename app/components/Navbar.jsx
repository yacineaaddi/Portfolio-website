import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 right-0 w-full z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav className="w-full fixed px-5 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <a href="#top">
          <Image
            src={assets.logo}
            alt=""
            className="w-28 cursor-pointer mr-14"
          />
        </a>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
          <li>
            <a className="font-Ovo" href="top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="about">
              About
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="services">
              Serices
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="contact">
              Contact me
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button>
            <Image src={assets.moon_icon} alt="" className="w-6" />
          </button>
          <a
            href="contact"
            className="hidden lg:flex items-center gap-3 font-Ovo px-10 py-2.5 border border-gray-500 rounded-full ml-4"
          >
            Contact <Image src={assets.arrow_icon} alt="" className="w-3" />
          </a>

          <button className="block md:hidden ml-3">
            <Image src={assets.menu_black} alt="" className="w-6" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
