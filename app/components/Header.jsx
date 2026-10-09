import { assets } from "@/assets/assets";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="header-section flex-style">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        >
          <Image
            src={assets.profile_img}
            alt=""
            className="rounded-full w-32"
          />
        </motion.div>
        <motion.h3
          className="header-name"
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {`Hi! I'm Yacine Aaddi`}
          <Image src={assets.hand_icon} alt="" className="w-6" />
        </motion.h3>
        <motion.h1
          className="header-title"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          full stack web developer
        </motion.h1>
        <motion.p
          className="header-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
        >
          I build modern web and mobile applications with React, React Native,
          and Node.js
        </motion.p>
        <div className="header-buttons">
          <div className="box-transform">
            <motion.a
              href="#work"
              className="header-button bg-white dark:text-black"
              initial={{ y: 0, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.7 }}
            >
              my projects
              <Image src={assets.github_logo} alt="" className="w-4" />
            </motion.a>
          </div>
          <div className="box-transform">
            <motion.a
              href="#degrees"
              className="header-button justify-center dark:bg-transparent "
              initial={{ y: 0, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.2,
                delay: 0.8,
              }}
            >
              Academic degrees
              <Image src={assets.graduate_logo} alt="" className="w-4" />
            </motion.a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
