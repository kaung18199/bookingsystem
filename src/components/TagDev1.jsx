import React from "react";
import ImageCarouselDev from "./ImageCarouselDev";
import Image from "next/image";

const TagDev1 = () => {
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
      <div className=" space-y-4 pt-2">
        <p className="  leading-6">
          Are you looking for an adventure of a lifetime? Join us on an
          unforgettable journey through some of the world's most stunning
          landscapes and cultural destinations. Our expertly curated tours take
          you to incredible destinations, from the rugged mountains of Patagonia
          to the vibrant cities of Asia.
        </p>
        <p className=" leading-6">
          Our itineraries are designed to immerse you in the local culture, with
          opportunities to meet locals, try new foods, and learn about the
          history and traditions of each destination. Our experienced guides
          will lead you through each destination, sharing their knowledge and
          passion for travel. We offer a range of activities to suit every
          traveler, from hiking and kayaking to cultural tours and culinary
          experiences.
        </p>
      </div>
    </div>
  );
};

export default TagDev1;
