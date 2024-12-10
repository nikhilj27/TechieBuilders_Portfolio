import React, { useEffect } from "react";
import { CgWebsite } from "react-icons/cg";
import { MdDynamicForm } from "react-icons/md";
import { IoLogoAndroid } from "react-icons/io";
import { FaAppStoreIos } from "react-icons/fa6";
import { motion, useAnimation } from "motion/react";
import { useInView } from "react-intersection-observer";

const Services = () => {
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

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const serviceList = [
    {
      id: 1,
      title: "Static Web Development",
      content: "Create lightweight, fast, and efficient static websites.",
      icon: <CgWebsite className="text-white text-2xl" />,
    },
    {
      id: 2,
      title: "Dynamic and E-Commerce Web Development",
      content:
        "Build interactive websites, including custom e-commerce platforms to power your business.",
      icon: <MdDynamicForm className="text-white text-2xl" />,
    },
    {
      id: 3,
      title: "Android App Development",
      content: "Develop feature-rich mobile apps tailored for Android users.",
      icon: <IoLogoAndroid className="text-white text-2xl" />,
    },
    {
      id: 4,
      title: "iOS App Development",
      content: "Craft sleek, high-performing applications for Apple devices.",
      icon: <FaAppStoreIos className="text-white text-2xl" />,
    },
  ];
  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      animate={control}
      initial="hidden"
      transition={{ duration: 1, ease: "easeInOut" }}
      className="py-10 overflow-hidden"
      id="servicesRef"
    >
      <h2 className="text-center text-3xl sm:text-5xl font-ovo">
        Services we offer
      </h2>
      <div className="flex flex-col sm:flex-row justify-between items-center px-10 sm:px-40 py-3 sm:py-10 gap-10">
        {serviceList.map((ele) => {
          return (
            <div
              key={ele.id}
              className="border border-gray-400 rounded-lg px-8 py-12 w-full sm:w-1/4
        hover:shadow-black cursor-pointer hover:-translate-y-1 duration-500 hover:bg-white"
            >
              <div className="bg-pink-700 rounded-md p-2 w-max flex justify-center items-center">
                {ele.icon}
              </div>
              <h3 className="text-lg my-4 text-gray-700 dark:text-white line-clamp-2">
                {ele.title}
              </h3>
              <p className="text-sm text-gray-600 leading-5 dark:text-white/80 line-clamp-3">
                {ele.content}
              </p>
              <a href="" className="flex items-center gap-2 text-sm mt-5">
                Read more{" "}
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAUCAYAAAAHpoRMAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFHSURBVHgBxdY/TsMwFAbwl6QHyBF6hLKx5c/EmJGt4QSlaxQpTi4ANwBOwNyJ+ASEDbayMZYDJOF7yEgVldsuef4kS8+Jpfzk2HGIBFIUxeKccR5NHKVUPI7jC8rO87wE/Z1trE/Tp0Pboi2Aujs2cHIMzwTPiAHlVVU92MYGJJC2bXdJkmiU12iXcRyHWusNucAY0BdAGwOKoygigLQTzB7og0F4dQcgUYwBvQP0iTL7DxLHGFCHdfON8opBaZpuce3Nw2rnLbciN8nQQi58389nwzDcQrckx4Ejn0Gk+r5vyUHwbH4jfFTwt2g9+XFgS13XFWZDcQ3IBZZLJ3EcnILcMOS3JuEAsgLk3nTX6P/Vshg8eAnII9fYwXXTNGr/vhimLMssCIJnG0QMY75l/E8T2iAiGEDmALyegnAkdtPcQJ6OQTg/PYye1LTum6YAAAAASUVORK5CYII="
                  alt=""
                  className="w-4"
                />
              </a>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Services;
