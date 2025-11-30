import { motion } from "framer-motion";
import { styles } from "../styles";
import { FaGithub, FaLinkedin, FaFilePdf, FaCertificate } from "react-icons/fa";

import linkdenProfile from "../assets/company/linkden profile.png";
import profilegit from "../assets/company/github profile.png";
import resume from "../assets/company/resume.png";
import certife from "../assets/company/certificates1.png";

const Hero = () => {
  const socialCards = [
    {
      title: "LinkedIn",
      img: linkdenProfile,
      buttonText: "Visit LinkedIn",
      link: "https://www.linkedin.com/in/yassine-el-baite-65a364349/",
      gradient: "bg-gray-700 hover:bg-gray-600", // neutral gray
      icon: <FaLinkedin className="text-3xl mb-2 text-white" />,
    },
    {
      title: "GitHub",
      img: profilegit,
      buttonText: "Visit GitHub",
      link: "https://github.com/YassineElbaite",
      gradient: "bg-purple-700 hover:bg-purple-600", // subtle purple, professional

      gradient: "bg-gray-700 hover:bg-gray-600", // neutral gray
      icon: <FaGithub className="text-3xl mb-2 text-white" />,
    },
    {
      title: "Download CV",
      img: resume,
      buttonText: "Download",
      link: "/resume.pdf",
      download: true,
      gradient: "bg-gray-800 hover:bg-gray-700", // neutral professional dark
      icon: <FaFilePdf className="text-3xl mb-2 text-white" />,
    },
    {
      title: "Certificates",
      img: certife,
      buttonText: "Visit Certificates",
      link: "https://certificates-portfolio-indol.vercel.app/",
      gradient: "bg-gray-700 hover:bg-gray-600", // neutral gray

      icon: <FaCertificate className="text-3xl mb-2 text-white" />,
    },
  ];

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* Left vertical line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Intro text */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Yassine El Baite</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I build intelligent software systems,
            <br className="sm:block hidden" />
            blending Software Engineering with AI & Data Science.
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap gap-6 mt-6 justify-center">
            {socialCards.map((card, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-gray-900 text-gray-200 rounded-2xl shadow-xl w-64 overflow-hidden transition-transform duration-300 border border-gray-700 hover:border-gray-500"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-6 flex flex-col items-center">
                  {card.icon}
                  <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                  <a
                    href={card.link}
                    download={card.download ? true : false}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${card.gradient} text-white px-6 py-2 rounded-lg font-semibold shadow-md transition-all duration-300 hover:shadow-lg`}
                  >
                    {card.buttonText}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
