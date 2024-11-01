// "use st"
import React, { useState } from "react";
import Partition from "../Partition";
import Button from "./Button";
import Image from "next/image";
import { data } from "@/app/data";
import PromoCode from "./PromoCode";

const Summary = ({ user, subscriptionType }) => {
  const [discount, setDiscount] = useState(0);

  // All the calculations are done here

  const pricePerUser =
    subscriptionType === "monthly" ? data.monthlyPrice : data.yearlyPrice;
  const subtotal = user * pricePerUser;
  const discountedSubtotal = subtotal - (subtotal * discount) / 100;
  const gstAmount = Math.ceil((discountedSubtotal * data.gstPercentage) / 100);
  const total = subtotal + gstAmount || 0;
  const formattedTotal = total.toLocaleString();

  return (
    <>
      <div className="summary h-[48.047vw] w-[32.969vw] bg-[#FFFFFF] rounded-[0.5rem] shadow-custom-shadow p-[1.875vw]  ">
        <h2 className="text-[#1A181E] text-[1.5625vw] leading-[1.5625vw] font-semibold mb-[1.5625vw]  ">
          Summary
        </h2>
        <Partition />
        <h3 className="text-[1.25vw] text-[#1A181E] leading-[1.5625vw] font-medium mt-[1.172vw] ">
          Premium
        </h3>
        <div className="div flex justify-between text-[1.09375vw] text-[#1A181E] leading-[1.5625vw] mt-[0.3125vw] ">
          <h4>
            {pricePerUser} INR / employee /{" "}
            {subscriptionType === "monthly" ? "month" : "year"}
          </h4>
          <h4>₹{pricePerUser}</h4>
        </div>
        <div className=" flex justify-between ">
          <h4 className="text-[1.09375vw] text-[#146EB4] font-medium leading-[1.5625vw] mt-[0.625vw] cursor-pointer">
            Change plan
          </h4>
          <h4 className="text-[1.09375vw] text-[#1A181E] leading-[1.5625vw] mt-[0.625vw] ">
            User : <span className="text-[#146EB4]">{user || 1}</span>
          </h4>
        </div>
        <div>
          {/* Promocode component */}
          <PromoCode discount={discount} setDiscount={setDiscount} />
        </div>
        <Partition />
        <div className="div flex justify-between text-[1.09375vw] text-[#1A181E] leading-[1.5625vw] mt-[0.8594vw]  ">
          <h4>Subtotal</h4>
          <h4>₹{discountedSubtotal || 0}</h4>
        </div>
        <div className="div flex justify-between text-[1.09375vw] text-[#1A181E] leading-[1.5625vw] mt-[0.625vw] mb-[1.25vw] ">
          <h4>GST ({data.gstPercentage}%)</h4>
          <h4>₹{gstAmount || 0}</h4>
        </div>
        <Partition />
        <div className="div flex justify-between text-[1.25vw] text-[#1A181E] leading-[1.5625vw] font-semibold mt-[0.625vw] mb-[2.1875vw] ">
          <h4>Total</h4>
          <h4>₹{formattedTotal || 0}</h4>
        </div>
        <Button img={true} src={"/lock.png"} />
        <div className="flex items-center justify-center gap-[0.625vw] mt-[1.875vw] ">
          <Image src="/shield.png" alt="shield" height={24} width={22} />
          <h4 className="text-[1.25vw] text-[#1A181E] leading-[1.5625vw]">
            Safe & Secure Payment
          </h4>
        </div>
        <p className=" text-[0.9375vw] leading-[1.5625vw] text-[#808080] mt-[2.1875vw] ">
          By purchasing, you accept the{" "}
          <span className="text-[#146EB4] cursor-pointer">Terms of Use</span>{" "}
          and acknowledge reading the{" "}
          <span className="text-[#146EB4] cursor-pointer">Privacy Policy</span>.
          You also agree to auto renewal of your yearly subscription for
          US$136.99, which can be disabled at any time through your account. Any
          eligible tax exemptions will be applied when you're charged for your
          next renewal payment. Your card details will be saved for future
          purchases and subscription renewals.
        </p>
      </div>
    </>
  );
};

export default Summary;
