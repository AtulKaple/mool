import React from "react";

const Partition = ({ width = "100%" }) => {
  return (
    <div
      className="border-[1px] "
      style={{
        width: `${width}`,
      }}
    ></div>
  );
};

export default Partition;
