import React from "react";
import picture from "../Assest/hero image.png";
import { TiArrowRight  } from "react-icons/ti";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <div name='home' className="h-screen w-full bg-gradient-to-b from-black
     via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col
      items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a Front-end Developer</h2>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            venenatis tellus at risus sollicitudin, at tincidunt urna consequat.
            Pellentesque in nunc augue. Cras ornare lobortis sem, a varius urna
            tempus a. Etiam vitae mi tempus, malesuada tellus at, porta nibh.
            Nulla tempus justo eget nibh auctor, ac euismod velit aliquam.
            Mauris convallis blandit varius. Curabitur dignissim orci mauris,
            nec dictum enim feugiat malesuada. Duis at feugiat nunc. Morbi
            magna
          </p>
          <div>
            <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2
            flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-800 cursor-pointer">
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                    <TiArrowRight size={25}/>
                </span>
            </Link>
          </div>
        </div>
        <div>
            <img src={picture} alt="my profile"
            className="rounded-2xl max-auto w-2/3 md:w-full" />
        </div>
      </div>
    </div>
  );
}
