import React from "react";
import ImageCarouselDev from "./ImageCarouselDev";
import Image from "next/image";

const TagDev2 = () => {
  return (
    <div>
      <div className=" grid grid-cols-3 gap-2">
        <div className=" col-span-2 overflow-hidden">
          <ImageCarouselDev />
        </div>
        <div className=" space-y-2">
          <div className=" w-full h-[49%] overflow-hidden rounded-md">
            <Image
              src="https://img.freepik.com/free-photo/wat-rong-khun-temple-white-temple-chiang-rai-thailand_335224-973.jpg?t=st=1715764563~exp=1715768163~hmac=230a0300845900af5673decded85fb2c696382f8d91ad3b119a225cb468e8b63&w=996"
              alt="image"
              width={500}
              height={500}
              className=" object-cover h-full w-full"
            />
          </div>
          <div className=" w-full h-[49%] overflow-hidden rounded-md">
            <Image
              src="https://img.freepik.com/free-photo/aerial-view-beautiful-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-726.jpg?t=st=1715764634~exp=1715768234~hmac=0582a2a51a5eb191d643637d1d3ea15b5fc73411561d7847103236cae1f5f3b4&w=996"
              alt="image"
              width={500}
              height={500}
              className=" object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center py-5">
        <p className=" border font-semibold border-primary px-10 button2 cursor-pointer text-primary py-2.5 rounded-md">
          Download PDF
        </p>
      </div>
      <div className=" space-y-8 pt-2">
        <p className="  leading-6">
          To help you plan your trip, we have put together a list of what's
          included and what's not included in your tour package. This will give
          you a clear understanding of what to expect and help you make any
          necessary arrangements before your journey begins
        </p>
        <div className=" p-6 shadow-lg grid bg-white grid-cols-2 gap-4 rounded-md border border-gray-200">
          <div className=" flex justify-start items-center gap-x-2 ">
            <Image
              src="/verified-svgrepo-com.svg"
              alt="icon"
              width={50}
              height={50}
              className=" object-cover w-[25px] h-[25px]"
            />
            <p>Train tickets and Bus transportation</p>
          </div>
          <div className=" flex justify-start items-center gap-x-2 ">
            <Image
              src="/verified-svgrepo-com.svg"
              alt="icon"
              width={50}
              height={50}
              className=" object-cover w-[25px] h-[25px]"
            />
            <p>Professional Tour guide</p>
          </div>
          <div className=" flex justify-start items-center gap-x-2 ">
            <Image
              src="/verified-svgrepo-com.svg"
              alt="icon"
              width={50}
              height={50}
              className=" object-cover w-[25px] h-[25px]"
            />
            <p>Breakfast , lunch and dinner</p>
          </div>
          <div className=" flex justify-start items-center gap-x-2 ">
            <Image
              src="/verified-svgrepo-com.svg"
              alt="icon"
              width={50}
              height={50}
              className=" object-cover w-[25px] h-[25px]"
            />
            <p>Transfers between accomodation</p>
          </div>
          <div className=" flex justify-start items-center gap-x-2 ">
            <Image
              src="/verified-svgrepo-com.svg"
              alt="icon"
              width={50}
              height={50}
              className=" object-cover w-[25px] h-[25px]"
            />
            <p>Accommodation at hotel</p>
          </div>
          <div className=" flex justify-start items-center gap-x-2 ">
            <Image
              src="/wrong-access-svgrepo-com.svg"
              alt="icon"
              width={50}
              height={50}
              className=" object-cover w-[25px] h-[25px]"
            />
            <p>Entrance fees to museum</p>
          </div>
          <div className=" flex justify-start items-center gap-x-2 ">
            <Image
              src="/verified-svgrepo-com.svg"
              alt="icon"
              width={50}
              height={50}
              className=" object-cover w-[25px] h-[25px]"
            />
            <p>Train tickets and Bus transportation</p>
          </div>
          <div className=" flex justify-start items-center gap-x-2 ">
            <Image
              src="/wrong-access-svgrepo-com.svg"
              alt="icon"
              width={50}
              height={50}
              className=" object-cover w-[25px] h-[25px]"
            />
            <p>Bus transporation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagDev2;
