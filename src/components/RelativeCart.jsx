import Image from "next/image";
import React from "react";

const RelativeCart = ({ data }) => {
  return (
    <div>
      <div className=" bg-white w-[95%] shadow-md border-b-8 border-primary p-3  rounded-md relative">
        <Image
          src={data.image}
          alt="image"
          className="w-full rounded-md"
          width={500}
          height={500}
        />
        <div className=" flex gap-x-2 absolute top-8 right-0 justify-start items-center w-[130px] py-1.5 rounded-l-lg px-2 bg-red-500 text-white">
          <p className=" line-through italic text-xs font-normal text-gray-200">
            $ 6,400
          </p>
          <p className=" text-white font-semibold">$ 2,400</p>
        </div>
        <p className=" text-primary font-semibold text-xl pt-4 pb-2">
          {data.name}
        </p>
        <p className=" font-semibold  pb-4">{data.second_name}</p>
        <div className=" flex justify-start items-center gap-x-4">
          <Image
            src="/star-sharp-svgrepo-com.svg"
            alt="start"
            width={20}
            height={20}
          />
          <p className=" font-bold text-orange-500">4.6</p>
          <p className=" italic text-xs text-gray-600">+2M people reserved</p>
        </div>
        <div className=" flex justify-start items-center gap-2 py-4 flex-wrap">
          <p className=" bg-slate-500/20 px-3 py-0.5  text-[10px] text-gray-500 text-nowrap">
            Easy Refund
          </p>
          <p className=" bg-slate-500/20 px-3 py-0.5  text-[10px] text-gray-500 text-nowrap">
            Book now for tomorrow
          </p>
        </div>
      </div>
    </div>
  );
};

export default RelativeCart;
