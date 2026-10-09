import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={assets.logo_light}
          alt=""
          className="footer-logo dark:hidden"
        />
        <Image
          src={assets.logo_dark}
          alt=""
          className="footer-logo hidden dark:block"
        />
        <div className="footer-gmail-box">
          <Image src={assets.mail_icon} alt="" className="w-6 dark:hidden" />
          <Image
            src={assets.mail_icon_dark}
            alt=""
            className="w-6 hidden dark:block"
          />
          yacineaaddi@gmail.com
        </div>
      </div>
      <div className="footer-box">
        <p>2026 Yacine Aaddi. All rights reserved</p>
        <ul className="footer-links">
          <li className="footer-link">
            <a href="https://instagram.com/yacineaaddi">Github</a>
          </li>
          <li className="footer-link">
            <a href="https://instagram.com/yacineaaddi">Linkedin</a>
          </li>
          <li className="footer-link">
            <a href="https://instagram.com/yacineaaddi">Github</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
