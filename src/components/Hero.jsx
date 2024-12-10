import React from "react";
import { motion } from "motion/react"

const Hero = () => {
  return (
    <div
      id="homeRef"
      className="flex flex-col gap-5 justify-center items-center py-20 bg-purple-400"
    >
      <motion.h1 initial={{y: 25, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 1, ease: "easeInOut"}} className="text-3xl sm:text-6xl lg:text-[66px] font-ovo text-center px-20">
        Innovating Web and Mobile Solutions for Your Success
      </motion.h1>
      <motion.p initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }} className="overflow-hidden max-w-2xl mx-auto font-Ovo text-center font-quicksand">
        Building Websites and Apps That Power Your Digital Future
      </motion.p>
      <button className="px-10 py-3 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent font-quicksand">
        Contact Us
      </button>
    </div>
  );
};

export default Hero;
