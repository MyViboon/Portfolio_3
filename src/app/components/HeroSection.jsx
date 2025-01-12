"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-3 text-4xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello,I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                " วิบูลย์ ปานแก้ว",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "ช่างเทคนิค IT",
                1000,
                "นักดนตรีกลางคืน",
                1000,
                "โปรแกรมเมอร์",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-lg mb-5 lg:text-xl">
            รหัสนิสิต 6502040074 <br />
            คณะ บริหารธุระกิจและรัฐประสานศาสตร์ สาขา คอมพิวเตอร์ธุระกิจ <br />
            มหาวิทยาลัยเวสเทิร์น
          </p>
          <div>
            <button className="px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              ติดต่อฉัน
            </button>
            <button className="px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-transparent  hover:bg-slate-200 text-white mt-3 ">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-12 lg:mt-2">
          <div className="rounded-full bg-[#181818] w-[270px] h-[270px] lg:w-[380px] lg:h-[380px] relative">
            <Image
              src="/images/viboon.png"
              alt="viboon"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
