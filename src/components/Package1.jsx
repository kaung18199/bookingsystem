import React from "react";

const Package1 = () => {
  return (
    <div>
      <div className=" flex justify-between items-center ">
        <div className=" space-y-1">
          <p className=" text-xs font-medium text-gray-500">Adults</p>
          <p className=" text-[10px] text-gray-600">Over 18 ($120)</p>
        </div>
        <div className=" flex justify-end items-center">
          <p className=" text-base font-semibold px-2">-</p>
          <p className=" text-base font-semibold px-2">1</p>
          <p className=" text-base font-semibold px-2">+</p>
        </div>
      </div>
      <div className=" flex justify-between items-center ">
        <div className=" space-y-1">
          <p className=" text-xs font-medium text-gray-500">Children</p>
          <p className=" text-[10px] text-gray-600">
            Under 18 ($30){" "}
            <span className=" text-red-500">free for infants 2 years</span>
          </p>
        </div>
        <div className=" flex justify-end items-center">
          <p className=" text-base font-semibold px-2">-</p>
          <p className=" text-base font-semibold px-2">0</p>
          <p className=" text-base font-semibold px-2">+</p>
        </div>
      </div>
      <div className=" space-y-4">
        <p className="text-xs font-medium text-gray-500">Meetup Location</p>
        <div className=" flex justify-start items-center gap-3">
          <p className=" border border-primary rounded-md py-1 px-4 text-[12px] text-primary">
            Hotel Pick up
          </p>
          <p className=" border border-gray-500 rounded-md py-1 px-4 text-[12px] text-gray-500">
            Central World
          </p>
        </div>
        <p className="text-xs font-medium text-gray-500">Time-slot</p>
        <div className=" flex justify-start items-center gap-3">
          <p className=" border border-primary rounded-md py-1 px-5 text-[12px] text-primary">
            1:00 3:00 PM
          </p>
          <p className=" border border-gray-500 rounded-md py-1 px-5 text-[12px] text-gray-500">
            5:00 6:00 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default Package1;
