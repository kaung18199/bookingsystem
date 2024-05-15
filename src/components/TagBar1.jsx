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
      <div className=" flex justify-start text-center bg-white items-center text-xs border border-primary w-full rounded-md">
        <div
          onClick={(pre) => {
            if (show != 1) {
              setShow(show - 1);
            }
          }}
          className="   py-3  w-[5%] flex justify-center items-center "
        >
          <Image
            src="/arrow-left-2-svgrepo-com.svg"
            alt="right icon"
            width={10}
            height={8}
            className="w-[18px] h-full "
          />
        </div>
        <button
          className={`border-l border-gray-500 py-3 cursor-pointer h-full w-[25%] button2 ${
            show == 1 ? "bg-primary text-white" : ""
          }`}
          onClick={() => setShow(1)}
        >
          <p className=" text-center w-full text-nowrap">
            Enjooy the adventure
          </p>
        </button>
        <button
          className={` border-l border-gray-500 py-3 cursor-pointer h-full button2 w-[20%] ${
            show == 2 ? "bg-primary text-white" : ""
          }`}
          onClick={() => setShow(2)}
        >
          Included/Encluded
        </button>
        <button
          className={`border-l border-gray-500 py-3 button2 cursor-pointer h-full  w-[15%] ${
            show == 3 ? "bg-primary text-white" : ""
          }`}
          onClick={() => setShow(3)}
        >
          Tour Map
        </button>
        <button
          className={`border-l border-gray-500 py-3 button2 cursor-pointer h-full  w-[15%] ${
            show == 4 ? "bg-primary text-white" : ""
          }`}
          onClick={() => setShow(4)}
        >
          Itinerary
        </button>
        <button
          className={`border-l border-gray-500 py-3 button2 cursor-pointer h-full  w-[15%] ${
            show == 5 ? "bg-primary text-white" : ""
          }`}
          onClick={() => setShow(5)}
        >
          Gallery
        </button>
        <div
          className="py-3  w-[5%] flex justify-center items-center border-l border-gray-500"
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
