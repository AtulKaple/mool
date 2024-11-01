"use client";
import React, { useEffect, useRef, useState } from "react";
import OfferCard from "./OfferCard";
import Image from "next/image";
import Partition from "../Partition";

const Products = ({ user, setUser, subscriptionType, setSubscriptionType }) => {
  const timeoutRef = useRef(null);

  const handleUsersIncrease = () => {
    setUser((prevValue) => prevValue + 1);
  };

  const handleUsersDecrease = () => {
    setUser((prevValue) => Math.max(prevValue - 1, 1));
  };

  const handleUserChange = (event) => {
    const newValue = parseInt(event.target.value);
    setUser(newValue);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (isNaN(newValue)) {
      timeoutRef.current = setTimeout(() => {
        setUser(1);
      }, 1500);
    }
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <>
      <div className="products h-[30.625vw] w-[44.766vw] bg-[#FFFFFF] rounded-[0.5rem] shadow-custom-shadow  p-[1.875vw]   ">
        <div className="productsTitle flex items-center mb-[1.25vw] ">
          <Image src="/moolLogo.png" alt="logo" height={30} width={36} />
          <h2 className="text-[#1A181E] text-[1.5625vw] leading-[1.5625vw] font-semibold ml-[0.9375vw] ">
            Your products
          </h2>
          <Image
            src="/tick.png"
            alt="tick"
            height={14}
            width={14}
            className=" ml-[0.78122vw] "
          />
        </div>
        <Partition width="35.1042vw" />
        <div className="usersCount mt-[1.172vw] ">
          <h3 className="text-[1.4063vw] font-medium leading-[1.5625vw] text-[#1A181E] flex items-center ">
            Select the number of users
            <Image
              src="/info.png"
              alt="tick"
              height={18.5}
              width={18.5}
              className=" ml-[0.4vw] cursor-pointer "
            />
          </h3>
          <h4 className=" mt-[0.3125vw] text-[1.09375vw] text-[#808080] leading-[1.5625vw] ">
            The minimum amount is 1 user.
          </h4>
          <div className="inputCount mt-[0.9375vw] relative h-[2.8125vw]  w-[20.07vw] ">
            <input
              type="number"
              value={user}
              onChange={handleUserChange}
              min={1}
              className=" w-[20.07vw] h-[2.8125vw] py-[0.625vw] px-[1.25vw] focus:border-transparent focus:outline-none cursor-default absolute shadow-custom-light "
              style={{
                border: "1.4px solid #E5E7EB",
                borderRadius: "8px",
                color: "#146EB4",
              }}
            />
            <div
              onClick={handleUsersDecrease}
              className="minus absolute h-[2.8125vw] w-[2.8125vw] flex items-center justify-center bg-[#FFFFFF] border-[1.4px] border-[#E5E7EB] hover:border-[#146EB4] right-[2.73vw] cursor-pointer peer  "
            >
              <Image
                src="/minus.png"
                alt="minus"
                height={16}
                width={16}
                className="select-none "
              />
            </div>
            <div
              onClick={handleUsersIncrease}
              className="plus absolute h-[2.8125vw] w-[2.8125vw] flex items-center justify-center bg-[#FFFFFF] border-[1.4px] border-[#E5E7EB] right-0 rounded-tr-[8px] rounded-br-[8px] cursor-pointer hover:border-[#146EB4] peer-hover:border-l-[#146EB4] "
            >
              <Image
                src="/plus.png"
                alt="plus"
                height={16}
                width={16}
                className="select-none "
              />
            </div>
          </div>
        </div>
        <div className="subscription mt-[1.25vw] ">
          <h3 className="text-[1.4063vw] font-medium leading-[1.5625vw] text-[#1A181E] ">
            Select a subscription cycle
          </h3>
          <div className="offers mt-[1.4844vw] flex justify-between ">
            {/* Reused OfferCard component */}
            <OfferCard
              duration={"monthly"}
              price={1300}
              renew={"month"}
              subscriptionType={subscriptionType}
              onClick={() => setSubscriptionType("monthly")}
            />
            <OfferCard
              duration={"yearly"}
              price={12500}
              renew={"year"}
              subscriptionType={subscriptionType}
              onClick={() => setSubscriptionType("yearly")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
