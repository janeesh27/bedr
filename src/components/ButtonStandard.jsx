import React from "react";

const ButtonStandard = ({ text }) => {
  return (
    <button className="p-2 px-4 text-[12px] bg-[--primary-blue] text-[--primary-orange] rounded-[3.75px]">
      {text}
    </button>
  );
};

export default ButtonStandard;
