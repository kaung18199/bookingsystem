import Image from "next/image";
import React from "react";

const Section = () => {
  return (
    <div className=" relative w-full h-[300px]">
      <Image
        src="https://img.freepik.com/free-photo/beautiful-nature-tropical-beach-sea-with-coconut-palm-tree-paradise-island_74190-1036.jpg?t=st=1715766792~exp=1715770392~hmac=0bed1d617c185ce51855060d95f4107bd0bf1d4c9710c64b78036281466f4b8b&w=996"
        alt="cover "
        width={1000}
        height={500}
        className=" w-full relative z-10 h-[300px] object-cover object-center"
      />
      <div className=" w-full h-full bg-black/50 absolute top-0 left-0 z-20"></div>
      <div className="  absolute top-0 left-0 w-full z-30 flex justify-center items-center h-full">
        <div className="grid grid-cols-2 gap-8 w-full">
          <div className=" text-white px-28">
            <p className=" text-3xl font-semibold tracking-[6px]">
              Let's Stay Connected !
            </p>
            <p className=" text-lg font-medium pr-28 pt-6">
              Be the first to hear about our best tour services deals that are
              perfect for you.
            </p>
          </div>
          <div className="px-40">
            <div className=" bg-white flex justify-between rounded-md overflow-hidden">
              <input
                type="email"
                name=""
                className=" focus:outline-none border-0 px-4 text-base font-normal text-gray-500"
                placeholder="Enter your Email"
                id=""
              />
              <button className=" bg-primary button2 text-white py-3 px-10 ">
                SUBMIT
              </button>
            </div>
            <p className=" text-white text-xs pt-6 leading-6">
              By signing up, you are agreeing to our Privacy Policy & Terms of
              Use. You can unsubscribe at any time
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
