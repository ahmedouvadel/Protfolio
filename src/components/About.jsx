import { useState } from "react";
import epi from "../img/epi.jpg";
import img2 from "../img/img2.png"; // Add more images here
import img3 from "../img/img3.jpg";
import cv from "../img/cv.pdf";
import { ABOUT_TEXT } from "../data/data";
import { motion } from "framer-motion";
import { MdSaveAlt } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Font Awesome Icons

const About = () => {
  const images = [epi, img2, img3]; // Array of images
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length); // Loop to the first image
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length); // Loop to the last image
  };

  return (
    <div id="about" className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        About
        <motion.span
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 3 }}
          className="text-neutral-500"
        >
          {" "}
          Me
        </motion.span>
      </motion.h1>
      <div className="flex flex-wrap justify-center items-center">
        {/* Image Slider Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 3 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="relative w-full p-5">
            <img
              className="rounded-2xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 shadow-2xl"
              src={images[currentImage]}
              alt={`Slide ${currentImage + 1}`}
            />
            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
              <FaChevronLeft className="text-lg" /> {/* Left Arrow Icon */}
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
              <FaChevronRight className="text-lg" /> {/* Right Arrow Icon */}
            </button>
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 2.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex flex-col justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 lg:text-2xl tracking-tighter min-[400px]:text-xs font-light">
              {ABOUT_TEXT}
            </p>

            {/* Download CV Button */}
            <a
              href={cv} // Use the imported CV file
              download
              className="mt-4 flex items-center justify-center gap-2 w-40 bg-gradient-to-r from-pink-300 to-purple-500 text-gray-950 text-center py-2 px-4 rounded-lg shadow-md hover:bg-cyan-600 transition font-medium duration-300"
            >
              <MdSaveAlt className="text-2xl" /> {/* Icon with adjusted size */}
              Download <p>CV</p>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
