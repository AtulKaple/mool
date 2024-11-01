"use client";
import React, { useState } from "react";
import Topbar from "../Topbar/Topbar";
import Products from "../Products/Products";
import InvoiceDetails from "../InvoiceDetails/InvoiceDetails";
import Summary from "../Summary/Summary";

const Checkout = () => {
  const [user, setUser] = useState(1);
  const [subscriptionType, setSubscriptionType] = useState("monthly");
  return (
    <>
      <div className="checkout h-[200vh] w-full relative ">
        {/* Component 1 */}
        <Topbar />
        <div className="maincontent absolute flex flex-col md:flex-row w-full mt-[15.25rem] px-[8vw] gap-[2.5vw] ">
          <div className="left ">
            {/* Component 2 */}
            <Products
              user={user}
              setUser={setUser}
              subscriptionType={subscriptionType}
              setSubscriptionType={setSubscriptionType}
            />
            {/* Component 3 */}
            <InvoiceDetails />
          </div>
          <div className="right">
            {/* Component 4 */}
            <Summary user={user} subscriptionType={subscriptionType} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
