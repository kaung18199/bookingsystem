"use client";
import React, { useState } from "react";
import Image from "next/image";
import { dataExample } from "@/db/dummarydb";

const TagDev5 = () => {
  const data = dataExample;
  return (
    <div>
      <div className=" space-y-4 ">
        <p className="  leading-6">
          Each image tells a unique story, inviting us into a world of emotion,
          beauty, and complexity. Get ready to be moved, inspired, and
          challenged as we journey through this captivating collection of
          images.
        </p>
      </div>
      <div className=" grid grid-cols-3 gap-3 pt-8">
        {data.map((d, index) => (
          <div
            key={d.id}
            className={`${
              index == 0 ? " row-span-2" : ""
            } rounded-md overflow-hidden shadow-sm`}
          >
            <Image
              src={d.image}
              alt="truck"
              width={600}
              height={600}
              className=" w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>
      <div className=" flex justify-center items-center pt-10">
        <p className=" border font-semibold border-primary px-10 button2 cursor-pointer text-primary py-2.5 rounded-md">
          Download PDF
        </p>
      </div>
    </div>
  );
};

export default TagDev5;
