import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center md:text-left py-14 ">
            I'm a Frontend Web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 0-1 years of experience building websites and designing software.
            I love to work on web applications using technologies like
            React, React Redux, Tailwind CSS.
          </p>

          <div className="portfolio-btn">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-2xl w-2/3 sm:w-3/4 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
