import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        glareEnable={false}
        className="bg-tertiary p-4 sm:p-5 rounded-2xl w-full sm:w-[320px] md:w-[360px]"
      >
        <div className="relative w-full h-[200px] sm:h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* GitHub icon */}
          <div className="absolute inset-0 flex justify-end m-2 sm:m-3 card-img_hover">
            <button
              type="button"
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-9 h-9 sm:w-10 sm:h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="mt-4">
          <h3 className="text-white font-bold text-[18px] sm:text-[20px]">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[13px] sm:text-[14px] leading-relaxed">
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={tag.name}
              className={`text-[12px] sm:text-[13px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

        {/* Live Demo */}
        {live_demo_link && (
          <div className="mt-4">
            <button
              type="button"
              onClick={() => window.open(live_demo_link, "_blank")}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm sm:text-base py-2.5 px-4 rounded-lg transition duration-200"
            >
              🌐 Live Demo
            </button>
          </div>
        )}
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[14px] sm:text-[16px] max-w-3xl leading-[24px] sm:leading-[30px]"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my ability to
          solve complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>
      </div>

      <div className="mt-10 sm:mt-16 flex flex-wrap gap-6 sm:gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
