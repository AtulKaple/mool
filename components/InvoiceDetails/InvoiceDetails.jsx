import React from "react";
import LabelWithInput from "./LabelWithInput";
import Image from "next/image";
import { getStatesOfIndia } from "@/app/data";

const InvoiceDetails = () => {
  return (
    <>
      <div className="invoiceDetails h-[31.9532vw] w-[44.766vw] bg-[#FFFFFF] rounded-[0.5rem] shadow-custom-shadow mt-[2.5vw] p-[1.875vw]  ">
        <h2 className="text-[#1A181E] text-[1.5625vw] leading-[1.5625vw] font-semibold flex items-center ">
          Invoice details
          <Image
            src="/info.png"
            alt="tick"
            height={18.5}
            width={18.5}
            className=" ml-[0.6vw]  cursor-pointer "
          />
        </h2>
        {/* Reused Label and Input component */}
        <LabelWithInput
          label={"Address Line 1"}
          placeholder={"Eg: HSR Layout"}
        />
        <LabelWithInput
          label={"Address Line 2 ( Landmark )"}
          placeholder={"Eg: near apollo"}
        />
        <LabelWithInput
          label={"Pincode"}
          placeholder={"Eg: 5784"}
          type={"number"}
          min={0}
        />
        <div className=" h-[5.157vw] w-[25vw] mt-[1.25vw] flex flex-col relative ">
          <label
            htmlFor=""
            className="text-[1.09375vw] text-[#4D4D4D] leading-[1.719vw] tracking-[-0.02em]"
          >
            Office working location
          </label>
          <select
            defaultValue="defaultState"
            className=" h-[3.45vw] w-[25vw] py-[0.78122vw] px-[1.09375vw] text-[1.25vw] text-[#989898]  leading-[1.875vw] border-[1.5px] border-[#D9D9D9] rounded-[8px] z-50 bg-transparent mt-[0.3125vw] "
            style={{
              WebkitAppearance: "none",
            }}
          >
            <option
              value="defaultState"
              disabled
              style={{
                backgroundColor: "#FFFFFF",
              }}
            >
              Select state
            </option>

            {/* States Maped from data.js */}
            {getStatesOfIndia.map((state) => (
              <option value={state.name} key={state.id}>
                {state.name}
              </option>
            ))}
          </select>

          <Image
            src="/dropDown.png"
            alt="dropDown"
            height={5}
            width={10}
            className=" h-auto w-auto absolute bottom-[1.2vw] right-[1.8vw] "
          />
        </div>
      </div>
    </>
  );
};

export default InvoiceDetails;
