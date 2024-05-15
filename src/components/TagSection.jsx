import React from "react";
import TagBar1 from "./TagBar1";
import TagBar2 from "./TagBar2";

const TagSection = () => {
  return (
    <div className=" px-10 py-10 grid grid-cols-3 gap-6">
      <div className=" col-span-2">
        <TagBar1 />
      </div>
      <div>
        <TagBar2 />
      </div>
    </div>
  );
};

export default TagSection;
