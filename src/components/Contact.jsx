import React from "react";
import { motion } from "motion/react";

const Contact = () => {
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
    <motion.div variants={boxVariant}
    initial="hidden"
    whileInView="visible" id="contactRef" className="flex flex-col justify-center items-center">
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        We’d love to hear from you! Feel free to share your questions, comments,
        or feedback using the form below.
      </p>
      <form className="flex flex-col justify-center items-center gap-5 w-[90%] sm:w-2/4">
        <div className="flex justify-between items-center gap-2 sm:gap-10 w-full">
          <input
            type="text"
            required
            className="border p-3 rounded-lg outline-none w-full"
            placeholder="Enter Full Name"
          />
          <input
            type="email"
            required
            className="border p-3 rounded-lg outline-none w-full"
            placeholder="Enter Email"
          />
        </div>
        <textarea
          required
          className="resize-none border p-3 rounded-lg outline-none w-full"
          rows={5}
          placeholder="Enter Message"
        ></textarea>
        <div className="py-10">
          <button className="rounded-full border px-5 py-3 hover:shadow-lg bg-black text-white flex justify-between items-center gap-3 hover:gap-5 transition-all">
            Contact Us
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAUCAYAAAAHpoRMAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFHSURBVHgBxdY/TsMwFAbwl6QHyBF6hLKx5c/EmJGt4QSlaxQpTi4ANwBOwNyJ+ASEDbayMZYDJOF7yEgVldsuef4kS8+Jpfzk2HGIBFIUxeKccR5NHKVUPI7jC8rO87wE/Z1trE/Tp0Pboi2Aujs2cHIMzwTPiAHlVVU92MYGJJC2bXdJkmiU12iXcRyHWusNucAY0BdAGwOKoygigLQTzB7og0F4dQcgUYwBvQP0iTL7DxLHGFCHdfON8opBaZpuce3Nw2rnLbciN8nQQi58389nwzDcQrckx4Ejn0Gk+r5vyUHwbH4jfFTwt2g9+XFgS13XFWZDcQ3IBZZLJ3EcnILcMOS3JuEAsgLk3nTX6P/Vshg8eAnII9fYwXXTNGr/vhimLMssCIJnG0QMY75l/E8T2iAiGEDmALyegnAkdtPcQJ6OQTg/PYye1LTum6YAAAAASUVORK5CYII="
              alt=""
              className="w-4"
            />
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Contact;
