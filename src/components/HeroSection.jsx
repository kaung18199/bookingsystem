import Image from "next/image";

const HeroSection = () => {
  return (
    <div className=" relative">
      <div className=" w-full h-[550px] overflow-hidden relative">
        <div className=" w-full h-full bg-black/50 absolute z-20"></div>
        <div className=" w-full h-full flex justify-center items-center absolute z-30">
          <p className=" text-white text-4xl font-semibold">
            Creating Smiles Across The Globe
          </p>
        </div>
        <Image
          src={
            "https://images.pexels.com/photos/315998/pexels-photo-315998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt="image cover"
          width={1000}
          height={1000}
          className="w-full h-full object-cover object-center relative z-10"
        />
      </div>
      <div className="wave">
        <svg
          width="100%"
          height="200px"
          fill="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="white"
            d="
              M0 67
              C 273,183
                822,-41
                1920.01,106 
              V 359 
              H 0 
              V 67
              Z"
            transform="scale(-1, 1) translate(-1600, 0)"
          ></path>
        </svg>
      </div>
      <div className=" absolute bottom-6 z-30 w-full px-28">
        <div className=" flex justify-between items-center">
          <div className=" space-y-2">
            <p className=" text-xl font-semibold">Chao Phraya</p>
            <div className=" flex justify-start items-center gap-4">
              <Image
                src="/location-pin-svgrepo-com.svg"
                width={16}
                height={16}
                alt="icon"
              />
              <p className=" text-sm text-red-500 font-semibold">Location</p>
            </div>
          </div>
          <div className=" flex justify-end items-center gap-x-20">
            <div className=" space-y-2">
              <div className=" flex justify-start items-center gap-4">
                <Image
                  src="/clock-circle-svgrepo-com (1).svg"
                  width={20}
                  height={20}
                  alt="icon"
                />
                <p className=" text-sm text-red-500 font-semibold">Duration</p>
              </div>
              <p className=" pl-9 text-base font-medium">5 Days</p>
            </div>
            <div className=" space-y-2">
              <div className=" flex justify-start items-center gap-4">
                <Image
                  src="/building-property-svgrepo-com.svg"
                  width={20}
                  height={20}
                  alt="icon"
                />
                <p className=" text-sm text-red-500 font-semibold">
                  Destination
                </p>
              </div>
              <p className=" pl-9 text-base font-medium">12</p>
            </div>
            <div className=" space-y-2">
              <div className=" flex justify-start items-center gap-4">
                <Image
                  src="/discount-shape-svgrepo-com.svg"
                  width={20}
                  height={20}
                  alt="icon"
                />
                <p className=" text-sm text-red-500 font-semibold">Promotion</p>
              </div>
              <p className=" pl-9 text-base font-medium">20%</p>
            </div>
            {/* <div className=" ">
              <p className=" border font-semibold border-primary px-6 hover:bg-primary hover:text-white cursor-pointer text-primary py-2.5 rounded-md">
                BOOK NOW
              </p>
            </div> */}
            <button class="button2 font-semibold py-1.5 px-4 rounded-md border border-primary">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
      <div id="container">
        <h1 className=" text-4xl text-gray-400">Your content here</h1>
      </div>
    </div>
  );
};

export default HeroSection;
