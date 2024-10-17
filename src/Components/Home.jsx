import React from "react";
import picture from "../Assest/heroImage.jpg";
import { TiArrowRight  } from "react-icons/ti";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <div
      name="home"
      className="min-h-screen w-full bg-gradient-to-b from-black
     via-black to-gray-800 mt-10" 
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col
      items-center justify-center min-h-screen  px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Front-end Developer
          </h2>
          <p className="text-gray-500 mt-4">
            As a recent entrant in the software field, I'm eager to kick-start
            my career and apply my skills and knowledge in a dynamic and
            innovative environment. With a strong foundation in computer science
            and a passion for technology, I'm now looking for an opportunity to
            join a forward-thinking organization where I can learn, grow, and
            contribute to exciting projects that make a real impact
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2
            flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-800 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <TiArrowRight size={25} />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={picture}
            alt="my profile"
            className="rounded-2xl max-auto w-2/3 md:w-full px-3 "
          />
        </div>
      </div>
    </div>
  );
}
