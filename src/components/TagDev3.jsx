import React from "react";
import Image from "next/image";

const TagDev3 = () => {
  return (
    <div>
      <div className=" space-y-4 ">
        <p className="  leading-6">
          To help you plan your trip, we have put together a list of what's
          included and what's not included in your tour package. This will give
          you a clear understanding of what to expect and help you make any
          necessary arrangements before your journey begins.
        </p>
      </div>
      <div className=" pt-6 rounded-md overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1935059.5190751406!2d97.47088639774606!3d18.690313648090164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30d0ccc8c2997841%3A0x6a69e176922503d4!2sChiang%20Mai%2C%20Thailand!5e0!3m2!1sen!2smm!4v1715775971299!5m2!1sen!2smm"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className=" flex justify-center items-center pt-10">
        <p className=" border font-semibold border-indigo-500 px-10 hover:bg-indigo-500 hover:text-white cursor-pointer text-indigo-500 py-2.5 rounded-md">
          Download PDF
        </p>
      </div>
    </div>
  );
};

export default TagDev3;
