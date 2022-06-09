import React from "react";
import { 
  SiFacebook,
  SiTwitter,
  SiLinkedin,
  SiYoutube
} from "react-icons/si";

const SocialIcons = () => {
  return (
    <div className="text-[#0385b0]">
      <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-blue-400 duration-300 ">
        <SiFacebook />
      </span>
      <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-blue-400 duration-300 ">
        <SiTwitter />
      </span>
      <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-blue-400 duration-300 ">
        <SiLinkedin />
      </span>
      <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-blue-400 duration-300 ">
        <SiYoutube />
      </span>
    </div>
  );
};

export default SocialIcons;