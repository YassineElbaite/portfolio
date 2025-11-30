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
      gradient: "bg-[#0a66c2] hover:bg-[#084c90]",
      icon: <FaLinkedin className="text-2xl sm:text-3xl mb-2 text-white" />,
    },
    {
      title: "GitHub",
      img: profilegit,
      buttonText: "Visit GitHub",
      link: "https://github.com/YassineElbaite",
      gradient: "bg-gray-800 hover:bg-gray-700",
      icon: <FaGithub className="text-2xl sm:text-3xl mb-2 text-white" />,
    },
    {
      title: "Download CV",
      img: resume,
      buttonText: "Download",
      link: "/resume.pdf",
      download: true,
      gradient: "bg-red-700 hover:bg-red-600",
      icon: <FaFilePdf className="text-2xl sm:text-3xl mb-2 text-white" />,
    },
    {
      title: "Certificates",
      img: certife,
      buttonText: "Visit Certificates",
      link: "https://certificates-portfolio-indol.vercel.app/",
      gradient: "bg-gray-700 hover:bg-gray-600",
      icon: <FaCertificate className="text-2xl sm:text-3xl mb-2 text-white" />,
    },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center">
      <div
        className={`relative w-full max-w-7xl mx-auto ${styles.paddingX} pt-24 pb-16 flex flex-col md:flex-row items-start gap-6 md:gap-10`}
      >
        {/* Left vertical line */}
        <div className="hidden sm:flex flex-col justify-center items-center mt-4 mr-2">
          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-72 h-40 violet-gradient" />
        </div>

        {/* Intro + cards */}
        <div className="flex-1 text-center md:text-left">
          <h1 className={`${styles.heroHeadText} text-white leading-tight`}>
            Hi, I'm <span className="text-[#915EFF]">Yassine El Baite</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I build intelligent software systems,
            <br className="hidden sm:inline" />
            blending Software Engineering with AI &amp; Data Science.
          </p>

          {/* Social cards */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 justify-items-center">
            {socialCards.map((card, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-gray-900 text-gray-200 rounded-2xl shadow-xl w-full max-w-xs overflow-hidden transition-transform duration-300 border border-gray-700 hover:border-gray-500"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-28 sm:h-32 object-cover"
                />
                <div className="p-4 sm:p-6 flex flex-col items-center">
                  {card.icon}
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                    {card.title}
                  </h3>
                  <a
                    href={card.link}
                    download={card.download ? true : undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${card.gradient} text-sm sm:text-base text-white px-4 sm:px-6 py-2 rounded-lg font-semibold shadow-md transition-all duration-300 hover:shadow-lg w-full text-center`}
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
      <div className="absolute bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[60px] sm:w-[35px] sm:h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
