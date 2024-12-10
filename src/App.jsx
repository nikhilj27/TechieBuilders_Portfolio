import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Aboutus from "./components/Aboutus";
import Work from "./components/Work";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="mt-20">
        <Hero />
        <Aboutus />
        <Services />
        {/* <Work /> */}
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
