import React from "react";
import { Link } from "react-router-dom";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsCoin } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <div className="flex justify-between">
        <div className="my-2 mx-4 p-2 bg-gray-100 rounded-3xl flex justify-center items-center">
          <img src="/logo.png" alt="err" className="h-8 md:h-10" />
        </div>

        <div className="bg-gray-200 dark:bg-slate-900 h-16 rounded-b-3xl flex items-center justify-between gap-4 px-4 font-semibold max-lg:hidden">
          <Link
            to="/leaderboard"
            className="hover:bg-purple-400 py-1 px-2 rounded-xl transition delay-50 ease-out"
          >
            Leaderboard
          </Link>
          <Link
            to="/scanner"
            className="hover:bg-purple-400 py-1 px-2 rounded-xl transition delay-50 ease-out"
          >
            Historical Trading
          </Link>
          <Link
            to="/scanner"
            className="hover:bg-purple-400 py-1 px-2 rounded-xl transition delay-50 ease-out"
          >
            Historical Chart
          </Link>
          <Link
            to="/scanner"
            className="hover:bg-purple-400 py-1 px-2 rounded-xl transition delay-50 ease-out"
          >
            Scanner
          </Link>
          <Link
            to="/scanner"
            className="hover:bg-purple-400 py-1 px-2 rounded-xl transition delay-50 ease-out"
          >
            Alerts
          </Link>
          <Link
            to="/scanner"
            className="hover:bg-purple-400 py-1 px-2 rounded-xl transition delay-50 ease-out"
          >
            Basic Basket
          </Link>
          <Link
            to="/scanner"
            className="hover:bg-purple-400 py-1 px-2 rounded-xl transition delay-50 ease-out"
          >
            Advanced Basket
          </Link>
          <Link
            to="/scanner"
            className="hover:bg-purple-400 py-1 px-2 rounded-xl transition delay-50 ease-out"
          >
            Pricing
          </Link>
          <Link
            to="/scanner"
            className="hover:bg-purple-400 py-1 px-2 rounded-xl transition delay-50 ease-out"
          >
            My Earning
          </Link>
        </div>
        <div className="flex items-center h-16 gap-4 md:gap-6 pr-3 text-2xl md:text-3xl">
          <div className="lg:hidden hover:cursor-pointer"> <FaBars className="md:text-2xl"/></div>
          <div className="relative hover:cursor-pointer">
            <IoNotificationsOutline/>
            <div className="absolute -right-1 -top-1 outline outline-1 outline-gray-950 bg-purple-400 h-4 md:h-5 aspect-square rounded-full text-sm flex justify-center items-center">8</div>
          </div>
          <div className="flex items-center gap-1 hover:cursor-pointer">
            <BsCoin/>
            <span className="text-purple-400 text-sm md:text-xl">4</span> 
          </div>
          <div className="flex items-center text-xl hover:cursor-pointer">
            <img src="/profile.jpg" alt="err" className="rounded-full w-8"/>
            <IoMdArrowDropdown />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
