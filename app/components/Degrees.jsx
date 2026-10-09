import { Splide, SplideSlide } from "@splidejs/react-splide";
import { academic_degrees } from "@/assets/assets";
import splideOptions from "../utils/splidOptions";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

const Degrees = () => {
  const splideOptionWithDirection = { ...splideOptions, direction: "rtl" };

  return (
    <div id="degrees" className="degrees-section">
      <motion.h4
        className="section-subtitle"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        What I Can Build
      </motion.h4>
      <motion.h2
        className="section-title"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        My degrees
      </motion.h2>
      <motion.p
        className="section-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        My academic background in Software Engineering has given me a strong
        foundation in programming, software development, databases, and
        application architecture
      </motion.p>
      <div>
        <Splide options={splideOptionWithDirection}>
          {academic_degrees.map(({ title, bgImage }, index) => (
            <SplideSlide key={index}>
              <div className="degrees-box">
                <Image
                  src={bgImage}
                  alt={title}
                  fill
                  className="object-contain"
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Degrees;
