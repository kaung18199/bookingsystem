"use client";
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { dataExample } from "@/db/dummarydb";
import RelativeCart from "./RelativeCart";

const RelativeTour = () => {
  const data = dataExample;

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 824,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {}, []);
  return (
    <div className=" py-20">
      <div className=" pl-10">
        <div className=" border-l-8 border-indigo-500 pl-4 py-2 space-y-1">
          <p className=" text-xl font-semibold ">Related Tour Packages</p>
          <p className=" text-red-500 font-semibold">
            Discover Top Tours and Attractions at Great Prices
          </p>
        </div>
      </div>
      <div className=" pt-8 pl-3">
        <div className="slider-container overflow-hidden w-full">
          <Slider {...settings}>
            {data.map((d, index) => (
              <div
                key={d.id}
                className=" min-w-[200px] h-full overflow-hidden pb-3"
              >
                <RelativeCart data={d} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default RelativeTour;
