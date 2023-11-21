import React from "react";

const ButtonPrimary = ({ text }) => {
  return (
    <>
      <button className="py-2 px-4 text-[white] bg-[--primary-orange] rounded-[3px] text-[12px] font-[500] leading-3">
        {text}
      </button>
    </>
  );
};

export default ButtonPrimary;
