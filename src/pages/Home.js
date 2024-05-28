import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="flex flex-col justify-center h-screen">
        <div className="text-5xl font-bold text-center px-4 py-12">
          {" "}
          VARUN GUPTA{" "}
        </div>
        <div className="text-xl font-semibold text-center px-4">
          {" "}
          here is your leaderboard and scanner page which is <span className="bg-slate-300 dark:bg-slate-800 p-1 rounded-lg">Responsive</span> for all
          devices<br/> with <span className="bg-slate-300 dark:bg-slate-800 p-1 rounded-lg ">Light & dark Mode</span> also{" "}
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-3xl py-24 w-full">
          <Link to="/leaderboard" className='w-4/5 md:w-1/4 p-8 font-semibold flex items-center justify-center rounded-2xl gap-2 border border-gray-800 dark:border-gray-200 hover:scale-110 transition duration-300'>
              Leaderboard <FaArrowRight className="text-2xl" />
          </Link>
          <Link to="/scanner" className='w-4/5 md:w-1/4 p-8 font-semibold flex items-center justify-center rounded-2xl gap-2 border border-gray-800 dark:border-gray-200 hover:scale-110 transition duration-300'>
              Scanner <FaArrowRight className="text-2xl mt-1" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
