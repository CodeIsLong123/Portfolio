import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMail, AiOutlineMenu, AiOutlineHome } from "react-icons/ai";
import { BsCalendarDate, BsPerson } from "react-icons/bs";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-8 right-4 z-[99] md:hidden"
        size={40}
      />
      {nav ? (
        <div className=" w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <Link
            to="/"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-grey-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </Link>
          <Link
            to="/about"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-grey-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4">About Us</span>
          </Link>
         
          <Link
            to="/contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-grey-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </Link>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[35%] z-10">
        <div className="flex flex-col">
          <Link
            to="/"
            className="bg-white rounded-full shadow-lg bg-white-100 shadow-white-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
          </Link>
          <Link
            to="/about"
            className="bg-white rounded-full shadow-lg bg-grey-100 shadow-white-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} />
          </Link>
          <Link
            to="/contact"
            className="bg-white rounded-full shadow-lg bg-grey-100 shadow-white-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
          </Link>
        
          
        </div>
      </div>
    </div>
  );
};

export default Sidenav;