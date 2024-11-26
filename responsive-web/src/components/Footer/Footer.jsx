import React from "react";
import logo from "../../assets/logo.svg";
import { FaTelegram } from "react-icons/fa6";
import vector from "../../assets/vector.svg";
import { CiTwitter } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="bg-[#051422] border-black">
      <div className="flex max-mobile-2:flex-col max-mobile-2:gap-12 justify-between max-mobile-3:px-10 px-32 py-16 items-center">
        <div className="logo">
          <img src={logo} alt="logo" width={150} />
        </div>

        {/* <div className="flex justify-between gap-7"> */}
          <ul className="flex gap-14 max-mobile-3:grid max-mobile-3:grid-cols-2 text-white font-semibold">
            <li>About Us</li>
            <li>Roadmap</li>
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>

          <div className="flex flex-col gap-3 items-center">
            <h1 className="text-xl text-white font-semibold">
              Contact <span className="text-yellow-400">Us</span>
            </h1>
            <div className="flex gap-5">
              <FaTelegram className="w-7 h-7 text-white" />
              <img src={vector} alt="vector" width={30} />
              <CiTwitter className="w-7 h-7 text-white" />
            </div>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Footer;
