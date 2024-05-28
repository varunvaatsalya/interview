import React, { useState } from "react";
import Navbar from "../components/Navbar";
import {
  IoMdArrowDropdown,
  IoMdArrowDropleft,
  IoMdArrowDropright,
  IoMdArrowDropup,
} from "react-icons/io";
import { HiArrowTrendingUp } from "react-icons/hi2";
function Leaderboard() {
  let users = [
    {
      rank: 1,
      status: "+2",
      status: "+2",
      name: "Selling with enter",
      calmarRatio: 3.96,
      overallProf: 381845,
      avgDailtProf: 319.54,
      win: 0.65,
      price: "-",
      action: "View",
    },
    {
      rank: 2,
      status: "+1",
      name: "strategy_name",
      calmarRatio: 3.62,
      overallProf: 268872.5,
      avgDailtProf: 216.54,
      win: 0.67,
      price: "500",
      action: "Buy",
    },
    {
      rank: 3,
      status: "-2",
      name: "Based on premium",
      calmarRatio: 4.05,
      overallProf: 381245,
      avgDailtProf: 326.24,
      win: 0.61,
      price: "-",
      action: "View",
    },
    {
      rank: 4,
      status: "+3",
      name: "strategy_name",
      calmarRatio: 3.52,
      overallProf: 421576,
      avgDailtProf: 254.54,
      win: 0.6,
      price: "-",
      action: "View",
    },
    {
      rank: 5,
      status: "",
      name: "strategy_name",
      calmarRatio: 3.52,
      overallProf: 421576,
      avgDailtProf: 254.54,
      win: 0.6,
      price: "-",
      action: "View",
    },
    {
      rank: 6,
      status: "-1",
      name: "strategy_name",
      calmarRatio: 3.52,
      overallProf: 421576,
      avgDailtProf: 254.54,
      win: 0.6,
      price: "-",
      action: "View",
    },
    {
      rank: 7,
      status: "-5",
      name: "strategy_name",
      calmarRatio: 3.52,
      overallProf: 421576,
      avgDailtProf: 254.54,
      win: 0.6,
      price: "-",
      action: "View",
    },
    {
      rank: 8,
      status: "+7",
      name: "strategy_name",
      calmarRatio: 3.52,
      overallProf: 421576,
      avgDailtProf: 254.54,
      win: 0.6,
      price: "-",
      action: "View",
    },
    {
      rank: 9,
      status: "",
      name: "strategy_name",
      calmarRatio: 3.52,
      overallProf: 421576,
      avgDailtProf: 254.54,
      win: 0.6,
      price: "-",
      action: "View",
    },
    {
      rank: 10,
      status: "-5",
      name: "strategy_name",
      calmarRatio: 3.52,
      overallProf: 421576,
      avgDailtProf: 254.54,
      win: 0.6,
      price: "-",
      action: "View",
    },
  ];
  const [open, setOpen] = useState(null);
  function toggleOpen(key) {
    if (open == key) setOpen(null);
    else setOpen(key);
  }
  return (
    <>
      <div className="fixed top-0 w-full bg-gray-100 dark:bg-gray-950">
        <Navbar />
        <hr className="border border-slate-300 dark:border-slate-800 w-full my-2 md:hidden" />
        <div className="font-bold text-3xl text-center my-2">Leaderboard</div>
        <header className="h-12 w-[98%] md:w-[90%] bg-slate-200 dark:bg-slate-900 mx-auto rounded-xl flex items-center px-4 font-bold my-2 md:my-4 text-sm md:text-base">
          <div className="w-[20%] md:w-[7%]">Rank</div>
          <div className="w-[36%] md:w-[18%]">Name</div>
          <div className="w-[28%] md:w-[15%] text-center">Calmar Ratio</div>
          <div className="w-[15%] text-center max-md:hidden">
            Overall Profit
          </div>
          <div className="w-[15%] text-center max-md:hidden">
            Avg Daily Profit
          </div>
          <div className="w-[10%] text-center max-md:hidden">Win %(Day)</div>
          <div className="w-[10%] text-center max-md:hidden">Price (Rs)</div>
          <div className="w-[16%] md:w-[10%] text-center">Action</div>
          <div className="w-2 h-5"></div>
        </header>
      </div>
      <div className="w-full mt-52">
        {users.map((user, key) => {
          return (
            <div className="w-[98%] md:w-[90%] py-5 bg-slate-200 dark:bg-gray-900 rounded-2xl mx-auto my-3 ">
              <div className="flex items-center px-2 md:px-4 font-medium">
                <div className="w-[20%] md:w-[7%] pl-2 flex items-center gap-1">
                  <span className="font-bold">{user.rank}.</span>
                  <div
                    className={` font-bold text-xs 
                  ${user.status[0] == "-" ? "text-red-400" : "text-green-600 dark:text-green-400"}
                `}
                  >
                    <div className="flex items-center">
                      {user.status[0] == "-" ? (
                        <IoMdArrowDropdown className="text-sm" />
                      ) : (
                        <></>
                      )}
                      {user.status[0] == "+" ? (
                        <IoMdArrowDropup className="text-sm" />
                      ) : (
                        <></>
                      )}
                      {user.status[1]}
                    </div>
                  </div>
                </div>
                <div className="w-[38%] md:w-[18%]">{user.name}</div>
                <div className="w-[28%] md:w-[15%] flex items-center justify-center gap-2">
                  <HiArrowTrendingUp className="text-green-600 dark:text-green-400" />
                  {user.calmarRatio}
                </div>
                <div className="w-[15%] text-center max-md:hidden">
                  {user.overallProf}
                </div>
                <div className="w-[15%] text-center max-md:hidden">
                  {user.avgDailtProf}
                </div>
                <div className="w-[10%] text-center max-md:hidden">
                  {user.win}
                </div>
                <div className="w-[10%] text-center max-md:hidden">
                  {user.price}
                </div>
                <div className="w-[16%] md:w-[10%] text-center text-blue-400 text-sm ">
                  <u>{user.action}</u>
                </div>
                <div className="md:hidden" onClick={() => toggleOpen(key)}>
                  <IoMdArrowDropdown
                    key={key}
                    className={`${
                      open == key ? "rotate-180" : ""
                    } bg-gray-200 dark:bg-gray-700 h-5 w-5 rounded-full`}
                  />{" "}
                </div>
              </div>
              <div className={open == key ? "block" : "hidden"}>
                <hr className="my-2 border border-gray-200 dark:border-gray-800" />
                <div className="text-center py-2">
                  <div className="flex my-2 pb-2 border-b border-gray-200 dark:border-gray-800">
                    <div className="w-1/2">
                      <div className="font-bold text-sm text-gray-500 dark:text-gray-600">Overall Profit</div>
                      <div className="">{user.overallProf}</div>
                    </div>
                    <div className="w-1/2 border-l border-gray-200 dark:border-gray-800">
                      <div className="font-bold text-sm text-gray-500 dark:text-gray-600">Avg Daily Profit</div>
                      <div className="">{user.avgDailtProf}</div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-1/2">
                      <div className="font-bold text-sm text-gray-500 dark:text-gray-600">Win % (Day)</div>
                      <div className="">{user.win}</div>
                    </div>
                    <div className="w-1/2 border-l border-gray-200 dark:border-gray-800">
                      <div className="font-bold text-sm text-gray-500 dark:text-gray-600">Price</div>
                      <div className="">{user.price}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <hr className="mx-auto w-[98%] md:w-[90%] border border-gray-200 dark:border-gray-800 my-6" />
        <div className=" w-[98%] md:w-[90%] mx-auto my-6 flex items-center justify-between rounded-xl bg-gray-100 dark:bg-gray-900 px-4 py-3 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <a
              href="#"
              className="relative inline-flex items-center rounded-md border border-gray-400 bg-gray-200 dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 hover:dark:bg-gray-700"
            >
              Previous
            </a>
            <a
              href="#"
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-400 bg-gray-200 dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 hover:dark:bg-gray-700"
            >
              Next
            </a>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700 dark:text-gray-200">
                Showing <span className="font-medium">1</span> to{" "}
                <span className="font-medium">10</span> of{" "}
                <span className="font-medium">97</span> results
              </p>
            </div>
            <div>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 hover:dark:bg-gray-700 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
                  <IoMdArrowDropleft className="h-5 w-5" aria-hidden="true" />
                </a>
                {/* Current: "z-10 bg-purple-600 text-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600", Default: "text-gray-900 dark:text-gray-200 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 hover:dark:bg-gray-700 focus:outline-offset-0" */}
                <a
                  href="#"
                  aria-current="page"
                  className="relative z-10 inline-flex items-center bg-purple-600 px-4 py-2 text-sm font-semibold text-gray-200 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                >
                  1
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 dark:text-gray-200 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 hover:dark:bg-gray-700 focus:z-20 focus:outline-offset-0"
                >
                  2
                </a>
                <a
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 dark:text-gray-200 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 hover:dark:bg-gray-700 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  3
                </a>
                <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:outline-offset-0 focus:dark:outline-70ffset-0">
                  ...
                </span>
                <a
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 dark:text-gray-200 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 hover:dark:bg-gray-700 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  8
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 dark:text-gray-200 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 hover:dark:bg-gray-700 focus:z-20 focus:outline-offset-0"
                >
                  9
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 dark:text-gray-200 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 hover:dark:bg-gray-700 focus:z-20 focus:outline-offset-0"
                >
                  10
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 hover:dark:bg-gray-700 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Next</span>
                  <IoMdArrowDropright className="h-5 w-5" aria-hidden="true" />
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Leaderboard;
