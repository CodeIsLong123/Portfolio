import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMail, AiOutlineMenu, AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div>
      {/* Mobile Menu Button */}
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-8 right-4 z-50 md:hidden"
        size={40}
      />
      
      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-full bg-black/20 z-40 transform ${nav ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col justify-center items-center h-full">
          <Link
            to="/"
            onClick={handleNav}
            className="w-3/4 flex justify-center items-center rounded-full shadow-lg bg-white m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </Link>
          <Link
            to="/about"
            onClick={handleNav}
            className="w-3/4 flex justify-center items-center rounded-full shadow-lg bg-white m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4">About Me</span>
          </Link>
          <Link
            to="/contact"
            onClick={handleNav}
            className="w-3/4 flex justify-center items-center rounded-full shadow-lg bg-white m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </Link>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="md:block hidden fixed top-1/3 left-0 z-10">
        <div className="flex flex-col">
          <Link
            to="/"
            className="bg-white rounded-full shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
          </Link>
          <Link
            to="/about"
            className="bg-white rounded-full shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} />
          </Link>
          <Link
            to="/contact"
            className="bg-white rounded-full shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
