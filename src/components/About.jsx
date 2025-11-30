import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt glareEnable={false} className="w-full sm:w-[260px]">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.3, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-8 px-6 min-h-[230px] sm:min-h-[250px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt={title}
          className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
        />

        <h3 className="text-white text-[18px] sm:text-[20px] font-bold text-center mt-3">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[14px] sm:text-[16px] max-w-3xl leading-[24px] sm:leading-[30px]"
      >
        Software developer skilled in React, Next.js, and Spring Boot,
        passionate about AI and Data Science. I build smart, efficient, and
        scalable solutions to real-world challenges.
      </motion.p>

      <div className="mt-10 sm:mt-16 flex flex-wrap gap-6 sm:gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
