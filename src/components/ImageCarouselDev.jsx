"use client";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataExample } from "@/db/dummarydb";
import Image from "next/image";

const ImageCarouselDev = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  const list = dataExample;

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

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

  return (
    <div className="slider-container rounded-md overflow-hidden">
      <h2 className=" hidden">Slider Syncing (AsNavFor)</h2>
      <h4 className=" hidden">First Slider</h4>
      <Slider asNavFor={nav2} ref={(slider) => (sliderRef1 = slider)}>
        {list.map((d, index) => (
          <div key={d.id} className=" h-[300px] w-[100%]">
            <Image
              src={d.image}
              alt={d.name}
              width={500}
              height={500}
              className=" w-full h-full object-cover "
            />
          </div>
        ))}
      </Slider>
      <h4 className=" hidden">Second Slider</h4>
      <Slider
        {...settings}
        asNavFor={nav1}
        ref={(slider) => (sliderRef2 = slider)}
        slidesToShow={5}
        swipeToSlide={true}
        focusOnSelect={true}
        className=" rounded-b-md overflow-hidden"
      >
        {list.map((d, index) => (
          <div
            key={d.id}
            className=" h-[95px] w-[100px] rounded-md overflow-hidden"
          >
            <Image
              src={d.image}
              alt={d.name}
              width={300}
              height={300}
              className=" w-full h-full  object-cover "
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarouselDev;
