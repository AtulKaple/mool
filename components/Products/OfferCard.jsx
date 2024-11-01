import React from "react";

const OfferCard = ({ duration, price, renew, subscriptionType, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={` h-[10.625vw] w-[19.7vw] border-[1.5px]  rounded-[8px] p-[1.875vw] cursor-pointer ${
        subscriptionType === duration ? "border-[#146EB4]" : "border-[#D9D9D9]"
      } `}
    >
      <h4 className="text-[1.25vw] text-[#1A181E] leading-[1.5625vw] capitalize ">
        {duration}
      </h4>
      <h2 className="text-[2.5vw] text-[#1A181E] leading-[1.5625vw] font-bold mt-[0.9375vw]  ">
        ₹{price}
      </h2>
      <h4 className="text-[1.09375vw] text-[#808080] leading-[1.5625vw] mt-[1.25vw]  ">
        /{renew}/user, billed {duration}
      </h4>
    </div>
  );
};

export default OfferCard;
