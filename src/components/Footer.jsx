import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className=" relative">
      <div className="absolute bottom-0 left-0 z-10 w-full h-full">
        <Image
          src="https://img.freepik.com/free-vector/abstract-halftone-background_23-2148573406.jpg?t=st=1715798906~exp=1715802506~hmac=6d1e7e42d606339495ab0a429a09b51191327399895fb56bef90b6ffc6940e5a&w=996"
          alt="cover"
          width={1000}
          height={1000}
          className=" h-full w-full opacity-10 object-cover"
        />
      </div>
      <div className=" px-28 py-10 bg-gray-900 space-y-8">
        <div className=" w-[100px] h-[100px] rounded-md overflow-hidden">
          <Image
            src={
              "https://img.freepik.com/premium-vector/detailed-travel-logo_23-2148616612.jpg"
            }
            alt="logo image"
            width={500}
            height={500}
            className=" w-full h-full object-contain object-center"
          />
        </div>
        <div className=" flex justify-start items-center gap-x-6">
          <div className=" w-[20px] h-[20px] ">
            <Image
              src="/facebook-color-svgrepo-com.svg"
              alt="logo image"
              width={500}
              height={500}
              className=" w-full  cursor-pointer h-full object-contain object-center"
            />
          </div>
          <div className=" w-[20px] h-[20px] ">
            <Image
              src="/youtube-color-svgrepo-com.svg"
              alt="logo image"
              width={500}
              height={500}
              className=" w-full  cursor-pointer h-full object-contain object-center"
            />
          </div>
          <div className=" w-[20px] h-[20px] ">
            <Image
              src="/twitter-color-svgrepo-com.svg"
              alt="logo image"
              width={500}
              height={500}
              className=" w-full  cursor-pointer h-full object-contain object-center"
            />
          </div>
        </div>
        <div className=" grid grid-cols-4 gap-6 text-gray-200">
          <div>
            <p className=" text-lg font-semibold">Why Choose with Us</p>
            <div className=" pt-6 space-y-3">
              <p>Airport Assistance</p>
              <p>Transport</p>
              <p>Tours</p>
              <p>Domestic Flight</p>
              <p>Attraction Tickets</p>
            </div>
          </div>
          <div>
            <p className=" text-lg font-semibold">Contact Us</p>
            <div className=" pt-6 space-y-3">
              <p>Customer Support</p>
              <p>Service Guarantee</p>
              <p>More Servic Info</p>
              <p>Website Feedbacks</p>
            </div>
          </div>
          <div>
            <p className=" text-lg font-semibold">About</p>
            <div className=" pt-6 space-y-3">
              <p>About</p>
              <p>News</p>
              <p>Terms & Conditions</p>
              <p>Privacy Statement</p>
            </div>
          </div>
          <div>
            <p className=" text-lg font-semibold">Payment Methods</p>
            <div className=" pt-6 flex justify-start items-center gap-x-3">
              <div className=" w-[60px] rounded-md overflow-hidden h-[40px] ">
                <Image
                  src="/visa-4-logo-svgrepo-com.svg"
                  alt="logo image"
                  width={500}
                  height={500}
                  className=" w-full  cursor-pointer h-full object-cover object-center"
                />
              </div>
              <div className=" w-[60px] rounded-md overflow-hidden h-[40px] ">
                <Image
                  src="/jcb-svgrepo-com.svg"
                  alt="logo image"
                  width={500}
                  height={500}
                  className=" w-full  cursor-pointer h-full object-cover object-center"
                />
              </div>
              <div className=" w-[60px] rounded-md overflow-hidden h-[40px] ">
                <Image
                  src="/mastercard-svgrepo-com.svg"
                  alt="logo image"
                  width={500}
                  height={500}
                  className=" w-full  cursor-pointer h-full object-cover object-center"
                />
              </div>
              <div className=" w-[60px] rounded-md overflow-hidden h-[40px] ">
                <Image
                  src="/pay-u-svgrepo-com.svg"
                  alt="logo image"
                  width={500}
                  height={500}
                  className=" w-full  cursor-pointer h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-center text-gray-950 bg-gray-300 py-2 text-xs">
        Copyrights @ 2024 Company Name . All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
