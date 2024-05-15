import React from "react";

const Package2 = () => {
  return (
    <div className=" space-y-4">
      <p>Package Type</p>
      <div className=" bg-gray-50 p-2.5 rounded-md space-y-3">
        <div className=" flex justify-start items-center flex-wrap gap-3">
          <p className=" border border-indigo-500 text-indigo-500 rounded-md cursor-pointer px-4 py-1 text-xs">
            Alphard(1-5 persons)
          </p>
          <p className=" border border-gray-500 text-gray-700 rounded-md cursor-pointer px-4 py-1 text-xs">
            Sedan(1-3 persons)
          </p>
          <p className=" border border-gray-500 text-gray-700 rounded-md cursor-pointer px-4 py-1 text-xs">
            Van(4-10 persons)
          </p>
        </div>
        <div className=" pt-2 space-y-2">
          <div className=" flex justify-between items-center px-2 bg-white shadow-sm rounded-md py-1.5">
            <p className=" text-[10px] ">Per Private Alphard(1-5)</p>
            <div className=" flex justify-end items-center gap-x-2">
              <p className=" text-[9px] text-gray-400 line-through">$ 100</p>
              <p className=" text-[12px] font-semibold">$ 200</p>
              <p className=" bg-gray-200 py-0.5 px-2 rounded-md font-semibold">
                -
              </p>
              <p className="  py-0.5 px-2 rounded-md font-semibold">1</p>
              <p className=" bg-gray-200 py-0.5 px-2 rounded-md font-semibold">
                +
              </p>
            </div>
          </div>
          <div className=" flex justify-between items-center px-2 bg-white shadow-sm rounded-md py-1.5">
            <p className=" text-[10px] ">Adult Ticket</p>
            <div className=" flex justify-end items-center gap-x-2">
              <p className=" text-[9px] text-gray-400 line-through">$ 600</p>
              <p className=" text-[12px] font-semibold">$ 300</p>
              <p className=" bg-gray-200 py-0.5 px-2 rounded-md font-semibold">
                -
              </p>
              <p className="  py-0.5 px-2 rounded-md font-semibold">1</p>
              <p className=" bg-gray-200 py-0.5 px-2 rounded-md font-semibold">
                +
              </p>
            </div>
          </div>
          <div className=" flex justify-between items-center px-2 bg-white shadow-sm rounded-md py-1.5">
            <p className=" text-[10px] ">Child (Height between 100 - 140 cm)</p>
            <div className=" flex justify-end items-center gap-x-2">
              <p className=" text-[9px] text-gray-400 line-through">$ 700</p>
              <p className=" text-[12px] font-semibold">$ 400</p>
              <p className=" bg-gray-200 py-0.5 px-2 rounded-md font-semibold">
                -
              </p>
              <p className="  py-0.5 px-2 rounded-md font-semibold">1</p>
              <p className=" bg-gray-200 py-0.5 px-2 rounded-md font-semibold">
                +
              </p>
            </div>
          </div>
          <div className=" flex justify-between items-center px-2 bg-white shadow-sm rounded-md py-1.5">
            <p className=" text-[10px] ">Optional english Tour Guide</p>
            <div className=" flex justify-end items-center gap-x-2">
              <p className=" text-[9px] text-gray-400 line-through">$ 900</p>
              <p className=" text-[12px] font-semibold">$ 500</p>
              <p className=" bg-gray-200 py-0.5 px-2 rounded-md font-semibold">
                -
              </p>
              <p className="  py-0.5 px-2 rounded-md font-semibold">1</p>
              <p className=" bg-gray-200 py-0.5 px-2 rounded-md font-semibold">
                +
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package2;
