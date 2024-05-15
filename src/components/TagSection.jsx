import React from "react";
import TagBar1 from "./TagBar1";
import TagBar2 from "./TagBar2";
import Image from "next/image";

const TagSection = () => {
  return (
    <div className=" px-28 py-10 grid grid-cols-3 gap-6 relative">
      <div className="absolute bottom-0 left-0 z-10 w-full h-full">
        <Image
          src="https://img.freepik.com/free-vector/abstract-halftone-background_23-2148573406.jpg?t=st=1715798906~exp=1715802506~hmac=6d1e7e42d606339495ab0a429a09b51191327399895fb56bef90b6ffc6940e5a&w=996"
          alt="cover"
          width={1000}
          height={1000}
          className=" h-full w-full opacity-25 object-cover"
        />
      </div>
      <div className=" col-span-2 relative z-30">
        <TagBar1 />
      </div>
      <div className=" relative z-20">
        <TagBar2 />
      </div>
    </div>
  );
};

export default TagSection;
