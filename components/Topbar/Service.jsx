import Image from "next/image";
import React from "react";

const Service = ({ content }) => {
  return (
    <div className=" flex items-center gap-2 text-[#1A181E] ">
      <Image src="/tick.png" alt="tick" height={24} width={24} />
      <h3 className="text-[1.25vw] leading-[1.5625vw]">{content}</h3>
    </div>
  );
};

export default Service;
