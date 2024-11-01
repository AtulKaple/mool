import React from "react";
import Service from "./Service";

const Topbar = () => {
  return (
    <>
      <div
        className="services h-[17.5785vw] w-full absolute mt-[6.125rem] "
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(134, 186, 227, 0.5), rgba(49, 128, 189, 0.5))", // 50% opacity
        }}
      >
        <h1 className=" text-[1.875vw] text-[#124974] text-center mt-[2.1875vw] font-semibold leading-[1.5625vw] ">
          Complete Your Purchase
        </h1>
        <div className="service_info  flex items-center justify-center gap-[3rem] mt-[1.375rem]  ">
          <p className="text-[#124974] leading-[1.5625vw] text-[1.25vw] ">
            Your plan includes:
          </p>
          <div className="flex gap-[1.5rem] ">
            <Service content="24/7 customer care" />
            <Service content="24/7 customer care" />
            <Service content="24/7 customer care" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
