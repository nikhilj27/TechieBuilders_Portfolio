import React from "react";
import { motion } from "motion/react";

const Aboutus = () => {
  const boxVariant = {
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
    hidden: {
      opacity: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      variants={boxVariant}
      initial="hidden"
      whileInView="visible"
      id="aboutRef"
      className="text-center font-ovo py-10 px-10 sm:px-20"
    >
      <p>
        <h2 className="text-center text-3xl sm:text-5xl font-ovo py-3 sm:py-5">
          About Us: TechieBuilders
        </h2>
      </p>
      <p className="font-quicksand font-medium">
        At TechieBuilders, we are passionate about transforming ideas into
        exceptional digital experiences. As experts in web development and
        mobile application development, we specialize in crafting innovative,
        user-friendly solutions tailored to meet the unique needs of businesses
        in the ever-evolving digital landscape.
      </p>
      <p className="font-quicksand font-medium">
        Founded with a vision to empower brands and streamline operations
        through cutting-edge technology, we combine creativity, technical
        expertise, and a customer-first approach to deliver impactful results.
        From sleek, responsive websites to robust mobile apps for Android and
        iOS, we ensure that your digital presence stands out and drives success.
      </p>
      <p className="font-quicksand font-medium">
        Our team of skilled developers, designers, and strategists is dedicated
        to bringing your vision to life with precision and care. Whether you're
        a startup looking to establish your digital footprint or an established
        business seeking to expand, TechieBuilders is your trusted partner for
        innovative and scalable solutions.
      </p>
      <p className="font-quicksand font-semibold">
        Let’s build something extraordinary together!
      </p>
    </motion.section>
  );
};

export default Aboutus;
