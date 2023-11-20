import React from "react";

const PgOwnerCard = ({ text, percentage }) => {
  return (
    <div className="grid grid-flow-col md:grid-flow-row bg-[--primary-blue] w-[120px] h-[60px] md:w-[151px] md:h-[205px] text-center rounded-md text-white">
      <div className="text-[16px] md:text-[48px] flex my-auto p-2 md:justify-evenly">
        {percentage}
      </div>
      <div className="text-[8px] md:text-[12px] flex my-auto p-2 md:justify-evenly ">
        {text}
      </div>
    </div>
  );
};

export default PgOwnerCard;
