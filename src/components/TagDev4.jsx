"use client";
import React, { useState } from "react";
import Image from "next/image";

const TagDev4 = () => {
  const [show, setShow] = useState(1);
  return (
    <div>
      <div className=" space-y-4 ">
        <p className="  leading-6">
          We have carefully planned out each day to give you the best possible
          experience. From exploring historic landmarks to tasting delicious
          local cuisine, each day is packed with adventure and excitement. Join
          us as we take you on a journey through some of the most fascinating
          destinations in the world.
        </p>
      </div>
      <div className=" mt-4 border border-gray-100 bg-white rounded-md shadow-md p-6">
        <div className=" border-b border-gray-300 pb-5">
          <div className=" flex justify-between items-center">
            <p
              className={` text-xs font-semibold text-primary pl-4 ${
                show == 1 ? "border-l-4 border-primary" : ""
              }`}
            >
              Day 1 -{" "}
              <span className=" text-gray-800 font-semibold">
                Arrival & Orientation
              </span>
            </p>
            <Image
              onClick={() => setShow(1)}
              src="/right-arrow-svgrepo-com.svg"
              width={20}
              height={20}
              className=" w-[30px] h-[30px] object-cover cursor-pointer"
            />
          </div>
          <p
            className={` text-xs text-gray-800 leading-7 pt-2 pl-5 ${
              show == 1 ? "" : "hidden"
            }`}
          >
            Upon arrival, you’ll be greeted by your guide and transferred to
            your hotel. After settling in, you’ll attend an orientation meeting
            to go over the itinerary and meet your fellow travelers.{" "}
          </p>
        </div>
        <div className=" border-b border-gray-300 pb-5 pt-3">
          <div className=" flex justify-between items-center">
            <p
              className={` text-xs font-semibold text-primary pl-4 ${
                show == 2 ? "border-l-4 border-primary" : ""
              }`}
            >
              Day 2 -{" "}
              <span className=" text-gray-800 font-semibold">City Tour</span>
            </p>
            <Image
              onClick={() => setShow(2)}
              src="/right-arrow-svgrepo-com.svg"
              width={20}
              height={20}
              className=" w-[30px] h-[30px] object-cover cursor-pointer"
            />
          </div>
          <p
            className={` text-xs text-gray-800 leading-7 pt-2 pl-5 ${
              show == 2 ? "" : "hidden"
            }`}
          >
            Upon arrival, you’ll be greeted by your guide and transferred to
            your hotel. After settling in, you’ll attend an orientation meeting
            to go over the itinerary and meet your fellow travelers.{" "}
          </p>
        </div>
        <div className=" border-b border-gray-300 pb-5 pt-3">
          <div className=" flex justify-between items-center">
            <p
              className={` text-xs font-semibold text-primary pl-4 ${
                show == 3 ? "border-l-4 border-primary" : ""
              }`}
            >
              Day 3 -{" "}
              <span className=" text-gray-800 font-semibold">Adventure</span>
            </p>
            <Image
              onClick={() => setShow(3)}
              src="/right-arrow-svgrepo-com.svg"
              width={20}
              height={20}
              className=" w-[30px] h-[30px] object-cover cursor-pointer"
            />
          </div>
          <p
            className={` text-xs text-gray-800 leading-7 pt-2 pl-5 ${
              show == 3 ? "" : "hidden"
            }`}
          >
            Upon arrival, you’ll be greeted by your guide and transferred to
            your hotel. After settling in, you’ll attend an orientation meeting
            to go over the itinerary and meet your fellow travelers.{" "}
          </p>
        </div>
        <div className=" border-b border-gray-300 pb-5 pt-3">
          <div className=" flex justify-between items-center">
            <p
              className={` text-xs font-semibold text-primary pl-4 ${
                show == 4 ? "border-l-4 border-primary" : ""
              }`}
            >
              Day 4 -{" "}
              <span className=" text-gray-800 font-semibold">
                Nature Hiking
              </span>
            </p>
            <Image
              onClick={() => setShow(4)}
              src="/right-arrow-svgrepo-com.svg"
              width={20}
              height={20}
              className=" w-[30px] h-[30px] object-cover cursor-pointer"
            />
          </div>
          <p
            className={` text-xs text-gray-800 leading-7 pt-2 pl-5 ${
              show == 4 ? "" : "hidden"
            }`}
          >
            Upon arrival, you’ll be greeted by your guide and transferred to
            your hotel. After settling in, you’ll attend an orientation meeting
            to go over the itinerary and meet your fellow travelers.{" "}
          </p>
        </div>
        <div className=" pt-3 ">
          <div className=" flex justify-between items-center">
            <p
              className={` text-xs font-semibold text-primary pl-4 ${
                show == 5 ? "border-l-4 border-primary" : ""
              }`}
            >
              Day 5 -{" "}
              <span className=" text-gray-800 font-semibold">
                Cooking Class
              </span>
            </p>
            <Image
              onClick={() => setShow(5)}
              src="/right-arrow-svgrepo-com.svg"
              width={20}
              height={20}
              className=" w-[30px] h-[30px] object-cover cursor-pointer"
            />
          </div>
          <p
            className={` text-xs text-gray-800 leading-7 pt-2 pl-5 ${
              show == 5 ? "" : "hidden"
            }`}
          >
            Upon arrival, you’ll be greeted by your guide and transferred to
            your hotel. After settling in, you’ll attend an orientation meeting
            to go over the itinerary and meet your fellow travelers.{" "}
          </p>
        </div>
      </div>
      <div className=" flex justify-center items-center pt-10">
        <p className=" border font-semibold border-primary px-10 button2 cursor-pointer text-primary py-2.5 rounded-md">
          Download PDF
        </p>
      </div>
    </div>
  );
};

export default TagDev4;
