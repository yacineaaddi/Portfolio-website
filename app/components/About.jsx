import { toolsData } from "@/assets/assets";
import { infoList } from "@/assets/assets";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <motion.div
      id="about"
      className="about-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.h4
        className="section-subtitle"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Introduction
      </motion.h4>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        About me
      </motion.h2>
      <motion.div
        className="about-container flex-style"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="about-image"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </motion.div>

        <motion.div
          className=""
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <p className="mb-10 max-w-2xl font-Ovo">
            {`I'm a Software Engineering graduate and Full-Stack Developer
            specialized in building modern web and mobile applications with
            React, React Native, and Node.js and enjoy working across the entire
            development lifecycle—from designing interfaces to building APIs,
            authentication, databases, and deployment`}
          </p>
          <motion.ul
            className="about-infoList"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                className="about-infoList-box dark:Hover:shadow-white"
                key={index}
                whileInView={{ scale: 1.05 }}
              >
                <Image
                  src={icon}
                  alt={title}
                  className="w-7 mt-3 dark:hidden"
                />
                <Image
                  src={iconDark}
                  alt={title}
                  className="w-7 mt-3 hidden dark:block"
                />
                <h3 className="about-infoList-title">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </motion.li>
            ))}
          </motion.ul>
          <motion.h4
            className="about-tools-title"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            Tools I use
          </motion.h4>
          <motion.ul
            className="about-tools-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            {toolsData.map((tool, index) => (
              <li className="about-tools-box" key={index}>
                <Image src={tool} alt="" className="w-5 sm:w-7" />
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
