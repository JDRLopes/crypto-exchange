import React from "react";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
    </div>
    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">Project GitHub Repository</p>
      <p className="text-white text-sm text-center font-medium mt-2">https://github.com/JDRLopes/crypto-exchange</p>
    </div>

  </div>
);

export default Footer;