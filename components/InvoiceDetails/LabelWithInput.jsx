import React from "react";

const LabelWithInput = ({ label, placeholder, type = "text", ...props }) => {
  return (
    <div className=" h-[5.157vw] mt-[1.25vw] flex flex-col ">
      <label
        htmlFor=""
        className="text-[1.09375vw] text-[#4D4D4D] leading-[1.719vw] tracking-[-0.02em] "
      >
        {label}
      </label>
      <input
        type={type}
        className="  h-[3.125vw] w-[32.5vw] py-[0.625vw] px-[0.9375vw] text-[1.09375vw] text-[#171717] leading-[1.5625vw] placeholder:text-[0.9375vw] border-[1.5px] border-[#D9D9D9] shadow-custom-shadow-input rounded-[6px] mt-[0.3125vw] "
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default LabelWithInput;
