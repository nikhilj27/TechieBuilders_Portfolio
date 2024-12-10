import React from "react";
import Logo from "../assets/logo.png";

const Footer = () => {
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
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-2 md:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <img
              src={Logo}
              alt="Logo"
              className="w-56 cursor-pointer mr-14 dark:hidden"
            />
            <p className="text-gray-400 font-quicksand mt-2">
              Building the future of web & mobile applications
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 font-ovo">Quick Links</h3>
            <ul className="text-gray-400">
              {/* <li>
                <a href="#" className="hover:text-gray-200 font-quicksand">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200 font-quicksand">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200 font-quicksand">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200 font-quicksand">
                  Contact
                </a>
              </li> */}
              <li
                className="cursor-pointer hover:text-gray-200 font-quicksand"
                onClick={() => handleScroll("homeRef")}
              >
                Home
              </li>
              <li
                className="cursor-pointer hover:text-gray-200 font-quicksand"
                onClick={() => handleScroll("aboutRef")}
              >
                About
              </li>
              <li
                className="cursor-pointer hover:text-gray-200 font-quicksand"
                onClick={() => handleScroll("servicesRef")}
              >
                service
              </li>
              {/* <li
                className="cursor-pointer hover:text-gray-200 font-quicksand"
                onClick={() => handleScroll("workRef")}
              >
                work
              </li> */}
              <li
                className="cursor-pointer hover:text-gray-200 font-quicksand"
                onClick={() => handleScroll("contactRef")}
              >
                Contact
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 font-ovo">Services</h3>
            <ul className="text-gray-400">
              <li>
                <a href="#" className="hover:text-gray-200 font-quicksand">
                  Static Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200 font-quicksand">
                  Dynamic and E-Commerce Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200 font-quicksand">
                  Android App Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200 font-quicksand">
                  iOS App Development
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 font-ovo">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-200">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 border-t py-4 border-slate-300">
          <p className="text-gray-400 text-sm font-ovo">
            &copy; 2024 TechieBuilders. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
