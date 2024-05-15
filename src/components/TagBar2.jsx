"use client";
import Image from "next/image";
import React, { useState } from "react";
import Package1 from "./Package1";
import Package2 from "./Package2";

const TagBar2 = () => {
  const [type, setType] = useState(1);
  return (
    <div>
      <div className=" border border-gray-500 rounded-md px-4 relative">
        <div>
          <p className=" text-[8px]">Keyword (Option)</p>
          {/* <p className=" text-xs pb-1 text-gray-400">
            Search Attraction or Activity
          </p> */}
          <input
            type="text"
            name=""
            className=" focus:outline-none border-none text-xs w-full pb-1 text-gray-400"
            placeholder="Search Attraction or Activity"
          />
        </div>
        <div className=" bg-indigo-500 absolute right-0 top-0 h-full px-3 cursor-pointer flex justify-center items-center">
          <Image
            src="/search-svgrepo-com.svg"
            alt="search icons"
            width={20}
            height={20}
            className=" object-contain "
          />
        </div>
      </div>
      <div className=" mt-10">
        <div className=" bg-white shadow-md rounded-md p-4 space-y-4">
          <p className=" text-indigo-500 font-semibold">Booking Form</p>
          <div className=" flex justify-between items-center border-b border-gray-300 pb-5">
            <div className=" space-y-2">
              <p className=" text-xs text-gray-500">Price</p>
              <p className=" font-semibold">From</p>
            </div>
            <p className=" text-2xl font-bold">$ 120</p>
          </div>
          <div className=" flex justify-between items-center border-b border-gray-300 pb-5">
            <div className=" space-y-2">
              <p className=" font-semibold">Date</p>
              <p className="text-xs text-gray-500">05-11-2024</p>
            </div>
            <Image
              src="/date-svgrepo-com.svg"
              alt="date"
              width={30}
              height={30}
            />
          </div>
          <div className=" space-y-4">
            <p className=" text-xs font-medium">Trip Type</p>
            <div className=" w-full border border-indigo-500 rounded-md flex justify-between items-center ">
              <p
                className={` w-[50%] h-full text-indigo-500 text-center hover:bg-indigo-500 hover:text-white cursor-pointer py-2 text-xs ${
                  type == 1 ? "bg-indigo-500 text-white" : ""
                }`}
                onClick={() => setType(1)}
              >
                Join Tour
              </p>
              <p
                className={` w-[50%] h-full text-indigo-500 text-center hover:bg-indigo-500 hover:text-white cursor-pointer py-2 text-xs ${
                  type == 2 ? "bg-indigo-500 text-white" : ""
                }`}
                onClick={() => setType(2)}
              >
                Private Tour
              </p>
            </div>
            {type == 1 ? <Package1 /> : <Package2 />}
            <div className=" pt-3">
              <p className=" border font-semibold border-indigo-500 px-6 text-indigo-500 py-2.5 hover:bg-indigo-500 hover:text-white text-center cursor-pointer rounded-md w-full">
                BOOK NOW FOR $ 120
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagBar2;
