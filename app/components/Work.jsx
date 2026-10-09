import { workData, assets } from "@/assets/assets";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <motion.div
      id="work"
      className="work-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="section-subtitle"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Featured Projects
      </motion.h4>
      <motion.h2
        className="section-title"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        My works
      </motion.h2>
      <motion.p
        className="section-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        Here are some of my featured projects, showcasing my experience building
        modern, scalable web and mobile applications using React, React Native,
        Next.js, and Node.js
      </motion.p>
      <motion.div
        className="work-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {workData.map((project, index) => (
          <div key={index} className="work-box group box-transform">
            <Image
              src={project.bgImage}
              alt={project.title}
              fill
              className="object-cover object-center"
            />
            <div className="work-project">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="work-icon">
                <Image src={assets.send_icon} alt="send icon" className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      <motion.a
        href="https://github.com/yacineaaddi"
        target="_blank"
        className="work-showMore box-transform"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        Show more
        <Image
          src={assets.right_arrow_bold}
          alt="Right arrow"
          className="w-4 dark:hidden"
        />
        <Image
          src={assets.right_arrow_bold_dark}
          alt="Right arrow"
          className="w-4 hidden dark:block"
        />
      </motion.a>
    </motion.div>
  );
};

export default Work;
