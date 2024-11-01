import Image from "next/image";
import React from "react";

const Button = ({ text, img, src }) => {
  return (
    <div className=" h-[3.75vw] w-full flex items-center justify-center gap-[0.625vw] py-[0.9375vw] px-[1.5625vw] rounded-[6px] bg-[#146EB4] hover:bg-[#0f5a95] cursor-pointer ">
      {img ? (
        <Image
          src={src}
          alt="lock"
          height={24}
          width={24}
          className=" h-auto w-auto"
        />
      ) : null}
      <h3 className=" text-[1.25vw] font-medium text-[#FFFFFF] leading-[1.5625vw] ">
        Submit Purchase
      </h3>
    </div>
  );
};

export default Button;
