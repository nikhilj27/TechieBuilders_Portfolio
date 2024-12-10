import React from "react";
import { motion } from "motion/react";

const Work = () => {
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
    <motion.div
      variants={boxVariant}
      initial="hidden"
      whileInView="visible"
      id="workRef"
      className="py-10"
    >
      <h2 className="text-center text-3xl sm:text-5xl font-ovo">
        Our Latest Work
      </h2>
      <div className="flex sm:flex-row flex-col justify-between items-center px-10 sm:px-40 py-3 sm:py-10 gap-10">
        {[1, 2, 3, 4].map((ele) => {
          return (
            <div
              key={ele}
              className="border border-gray-400 rounded-lg px-8 py-12
        hover:shadow-black cursor-pointer hover:-translate-y-1 duration-500 hover:bg-white"
            >
              <img
                src="data:image/png;base64,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"
                alt=""
                className="w-10"
              />
              <h3 className="text-lg my-4 text-gray-700 dark:text-white">
                Web design
              </h3>
              <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
                Web development is the process of building, programming...
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

export default Work;
