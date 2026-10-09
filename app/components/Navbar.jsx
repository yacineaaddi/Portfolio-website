"use client";

import { useEffect, useRef, useState } from "react";
import { assets } from "@/assets/assets";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(0)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(20rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  });
  return (
    <>
      <nav className={`navbar-style ${isScroll ? "navbar-scroll" : ""} `}>
        <a href="#top">
          <Image src={assets.logo_light} alt="" className="logo dark:hidden" />
          <Image
            src={assets.logo_dark}
            alt=""
            className="logo hidden dark:block"
          />
        </a>
        <ul className={`menu ${isScroll ? "" : "menu-scroll"}`}>
          <li className="menu-list">
            <a className="font-Ovo" href="#top">
              Home
            </a>
          </li>
          <li className="menu-list">
            <a className="font-Ovo" href="#about">
              About
            </a>
          </li>
          <li className="menu-list">
            <a className="font-Ovo" href="#work">
              Work
            </a>
          </li>
          <li className="menu-list">
            <a className="font-Ovo" href="#services">
              Services
            </a>
          </li>

          <li className="menu-list">
            <a className="font-Ovo" href="#degrees">
              Degrees
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            <Image src={assets.moon_icon} alt="" className="w-6 dark:hidden" />
            <Image
              src={assets.sun_icon}
              alt=""
              className="w-6 hidden dark:block"
            />
          </button>
          <div className="box-hover">
            <a href="#contact" className="contact-button">
              Contact
              {/*<Image
                src={assets.arrow_icon}
                alt=""
                className="w-3 dark:hidden"
              />
              <Image
                src={assets.arrow_icon_dark}
                alt=""
                className="w-3 hidden dark:block"
              />*/}
            </a>
          </div>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="" className="w-6 dark:hidden" />
            <Image
              src={assets.menu_white}
              alt=""
              className="w-6 hidden dark:block"
            />
          </button>
        </div>

        {/*-----------Mobile menu-------------*/}

        <div ref={sideMenuRef} className="mobile-menu">
          <div onClick={closeMenu} className="absolute right-7 top-7 ">
            <Image
              src={assets.close_black}
              alt=""
              className="close-menu dark:hidden"
            />
            <Image
              src={assets.close_white}
              alt=""
              className="close-menu hidden dark:block"
            />
          </div>
          <ul className="mobile-menu-list">
            <li>
              <a onClick={closeMenu} className="font-Ovo " href="#top">
                Home
              </a>
            </li>
            <li>
              <a onClick={closeMenu} className="font-Ovo" href="#about">
                About
              </a>
            </li>
            <li>
              <a onClick={closeMenu} className="font-Ovo" href="#services">
                Services
              </a>
            </li>
            <li>
              <a onClick={closeMenu} className="font-Ovo" href="#work">
                My Work
              </a>
            </li>
            <li>
              <a onClick={closeMenu} className="font-Ovo" href="#degrees">
                Degrees
              </a>
            </li>
            <li>
              <a onClick={closeMenu} className="font-Ovo" href="#contact">
                Contact me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
