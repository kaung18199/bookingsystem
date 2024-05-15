import Image from "next/image";

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center pr-20 bg-white">
      <div className=" w-[300px] h-[100px] ">
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
      <div className=" flex justify-end items-center space-x-10">
        <p className=" font-semibold text-indigo-500 border-r-2 pr-8 text-base border-l-indigo-500">
          Airport Assistance
        </p>
        <p className=" font-semibold">Login</p>
        <p className=" border font-semibold border-indigo-500 px-6 text-indigo-500 py-2.5 hover:bg-indigo-500 hover:text-white cursor-pointer rounded-md">
          Sign Up
        </p>
      </div>
    </div>
  );
};

export default Navbar;
