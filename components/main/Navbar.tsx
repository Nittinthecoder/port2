import { Socials1, Socials2, Socials3 } from "@/constants";
import Image from "next/image";
import React from "react";
import Js from "../../public/js.png"

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#Home"
          className="h-auto w-auto flex flex-row items-center cursor-pointer"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Nittin | Portfolio
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#Hero" className="cursor-pointer">
              Home
            </a>
            <a href="#about" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            <a href="#contacts" className="cursor-pointer">
              Contact
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials1.map((social1) => (
            <a  
              key={social1.name}
              target="_blank"
              href="https://www.instagram.com/"
              className="cursor-pointer animate-pulse rounded-lg  bg-gradient-to-r from-purple-500 to-cyan-500  hover:scale-150 duration-100"
            >
              <Image
              src={social1.src}
              alt={social1.name}
              key={social1.name}
              width={24}
              height={24}
            />
            </a>
          ))}
          {Socials3.map((social3) => (
          <a
            key={social3.name}
            target="_blank"
            href="https://discord.com/channels/@me/1173249698803494962"
            className="cursor-pointer animate-pulse hover:scale-150"
          >
            <Image
              src={social3.src}
              alt={social3.name}
              key={social3.name}
              width={24}
              height={24}
            />
          </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;