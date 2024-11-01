import React, { useState } from "react";
import { promoCodes } from "@/app/data";

const PromoCode = ({ discount, setDiscount }) => {
  const [enterCode, setEnterCode] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [error, setError] = useState("");
  const handleApplyPromo = () => {
    const promo = promoCodes.find((p) => p.code === promoCode);
    if (promo) {
      setDiscount(promo.discount);
      setError("");
    } else {
      setError("Invalid promo code");
      setDiscount(0);
    }
  };
  return (
    <>
      {!enterCode ? (
        <h4
          onClick={() => setEnterCode(true)}
          className="text-[1.09375vw] text-[#1A181E] font-medium leading-[1.5625vw] mt-[0.625vw] mb-[1.25vw] underline underline-offset-[3.5px] hover:scale-[1.01] cursor-pointer "
        >
          Enter promo code
        </h4>
      ) : (
        <>
          <div className="flex items-center justify-between ">
            <div>
              <input
                type="text"
                className="  h-[2.5vw] w-[10vw] py-[0.625vw] px-[0.9375vw] text-[1.09375vw] text-[#171717] leading-[1.5625vw] placeholder:text-[0.9375vw] border-[1.5px] border-[#D9D9D9] shadow-custom-shadow-input rounded-[6px] mt-[0.625vw] mb-[0.625vw] "
                placeholder="Enter promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button
                onClick={handleApplyPromo}
                className="h-[2.5vw] w-[5vw] text-[1.09375vw] bg-[#146EB4] hover:bg-[#0f5a95] rounded-[6px] ml-[0.3vw] "
              >
                Apply
              </button>
            </div>
            <div>
              {discount > 0 && (
                <p className="text-[1.09375vw] text-[#1A181E] leading-[1.5625vw]">
                  Discount : <span className="text-[#146EB4]">{discount}%</span>
                </p>
              )}

              {error && (
                <p className="text-[1.09375vw] text-red-600 leading-[1.5625vw]">
                  {error}
                </p>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PromoCode;
