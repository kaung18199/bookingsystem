"use client";
import Image from "next/image";
import React, { useState } from "react";
import TagDev1 from "./TagDev1";
import TagDev2 from "./TagDev2";
import TagDev3 from "./TagDev3";
import TagDev4 from "./TagDev4";
import TagDev5 from "./TagDev5";

const TagBar1 = () => {
  const [show, setShow] = useState(1);
  return (
    <div>
      <div className=" flex justify-start text-center items-center text-xs border border-gray-500 w-full rounded-md">
        <div
          onClick={(pre) => {
            if (show != 1) {
              setShow(show - 1);
            }
          }}
          className="   py-3 cursor-pointer hover:bg-indigo-500 hover:text-white transition duration-150 w-[5%] flex justify-center items-center "
        >
          <Image
            src="/arrow-left-2-svgrepo-com.svg"
            alt="right icon"
            width={10}
            height={8}
            className="w-[18px] h-full "
          />
        </div>
        <div
          className={` border-l border-gray-500 py-3 cursor-pointer hover:bg-indigo-500 hover:text-white transition duration-150 h-full w-[25%] ${
            show == 1 ? "bg-indigo-500 text-white" : ""
          }`}
          onClick={() => setShow(1)}
        >
          <p className=" text-center w-full text-nowrap">
            Enjooy the adventure
          </p>
        </div>
        <div
          className={` border-l border-gray-500 py-3 cursor-pointer hover:bg-indigo-500 hover:text-white transition duration-150 h-full w-[20%] ${
            show == 2 ? "bg-indigo-500 text-white" : ""
          }`}
          onClick={() => setShow(2)}
        >
          Included/Encluded
        </div>
        <div
          className={` border-l border-gray-500 py-3 cursor-pointer hover:bg-indigo-500 hover:text-white transition duration-150 h-full w-[15%] ${
            show == 3 ? "bg-indigo-500 text-white" : ""
          }`}
          onClick={() => setShow(3)}
        >
          Tour Map
        </div>
        <div
          className={` border-l border-gray-500 py-3 cursor-pointer hover:bg-indigo-500 hover:text-white transition duration-150 h-full w-[15%] ${
            show == 4 ? "bg-indigo-500 text-white" : ""
          }`}
          onClick={() => setShow(4)}
        >
          Itinerary
        </div>
        <div
          className={` border-l border-gray-500 py-3 cursor-pointer hover:bg-indigo-500 hover:text-white transition duration-150 h-full w-[15%] ${
            show == 5 ? "bg-indigo-500 text-white" : ""
          }`}
          onClick={() => setShow(5)}
        >
          Gallery
        </div>
        <div
          className=" border-l border-gray-500 py-3 cursor-pointer hover:bg-indigo-500 hover:text-white transition duration-150 w-[5%] flex justify-center items-center"
          onClick={(pre) => {
            if (show != 5) {
              setShow(show + 1);
            }
          }}
        >
          <Image
            src="/right-arrow-svgrepo-com.svg"
            alt="right icon"
            width={10}
            height={8}
            className="w-[18px] h-full "
          />
        </div>
      </div>
      <div className=" mt-10">
        {show == 1 && (
          <div>
            <TagDev1 />
          </div>
        )}
        {show == 2 && (
          <div>
            <TagDev2 />
          </div>
        )}
        {show == 3 && (
          <div>
            <TagDev3 />
          </div>
        )}
        {show == 4 && (
          <div>
            <TagDev4 />
          </div>
        )}
        {show == 5 && (
          <div>
            <TagDev5 />
          </div>
        )}
      </div>
    </div>
  );
};

export default TagBar1;
