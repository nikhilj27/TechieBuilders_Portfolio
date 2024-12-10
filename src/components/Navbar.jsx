import React, { useRef, useState } from "react";
import Logo from "../assets/logo.png";
import { LuMenu } from "react-icons/lu";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [isTop, setIsTop] = useState(true);
  const [toggleMenu, setToggleMenu] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  });

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 60; // Adjust this value to the height of your navbar
      const elementPosition =
        section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`${
        isTop ? "bg-white" : "bg-opacity-50 backdrop-blur-lg shadow-sm border"
      } w-full fixed flex justify-between items-center top-0 left-0 right-0 px-5 sm:px-10 py-5 z-50`}
    >
      <img
        src={Logo}
        alt="Logo"
        className="w-28 sm:w-40 cursor-pointer mr-14 dark:hidden"
        onClick={() => handleScroll("homeRef")}
      />
      <ul
        className={`${
          isTop
            ? "shadow-sm rounded-full px-5 py-3 border"
            : "bg-opacity-50 backdrop-blur-lg"
        } hidden sm:flex gap-10 font-semibold font-quicksand `}
      >
        <li className="cursor-pointer" onClick={() => handleScroll("homeRef")}>
          Home
        </li>
        <li className="cursor-pointer" onClick={() => handleScroll("aboutRef")}>
          About
        </li>
        <li
          className="cursor-pointer"
          onClick={() => handleScroll("servicesRef")}
        >
          service
        </li>
      {/* <li className="cursor-pointer" onClick={() => handleScroll("workRef")}>
        work
      </li> */}
        {/* <li className="cursor-pointer" onClick={() => handleScroll("testimonialsRef")}>Testimonials</li> */}
        <li
          className="cursor-pointer"
          onClick={() => handleScroll("contactRef")}
        >
          Contact
        </li>
      </ul>

      <div>
        <button
          onClick={() => handleScroll("contactRef")}
          className="rounded-full border px-2 sm:px-5 py-2 sm:py-3 hover:shadow-lg bg-white font-ovo"
        >
          Contact Us
        </button>
      </div>

      <div className="sm:hidden">
        {toggleMenu ? (
          <MdOutlineClose
            onClick={() => setToggleMenu(!toggleMenu)}
            className="text-2xl"
          />
        ) : (
          <LuMenu
            onClick={() => setToggleMenu(!toggleMenu)}
            className="text-2xl"
          />
        )}
      </div>
      {
        toggleMenu &&
      <div className="shadow-md bg-white border-t absolute w-full h-max right-0 top-20">
        <ul className="flex flex-col gap-3 px-3 py-3">
          <li
            className="cursor-pointer font-quicksand font-semibold"
            onClick={() => {handleScroll("homeRef"); setToggleMenu(!toggleMenu)}}
          >
            Home
          </li>
          <li
            className="cursor-pointer font-quicksand font-semibold"
            onClick={() => {handleScroll("aboutRef"); setToggleMenu(!toggleMenu)}}
          >
            About
          </li>
          <li
            className="cursor-pointer font-quicksand font-semibold"
            onClick={() => {handleScroll("servicesRef"); setToggleMenu(!toggleMenu)}}
          >
            service
          </li>
          {/* <li
            className="cursor-pointer font-quicksand font-semibold"
            onClick={() => {handleScroll("workRef"); setToggleMenu(!toggleMenu)}}
          >
            work
          </li> */}
          <li
            className="cursor-pointer font-quicksand font-semibold"
            onClick={() => {handleScroll("contactRef"); setToggleMenu(!toggleMenu)}}
          >
            Contact
          </li>
        </ul>
      </div>
      }
    </nav>
  );
};

export default Navbar;
