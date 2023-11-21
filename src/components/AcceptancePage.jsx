import React from "react";

const AcceptancePage = ({ title, text, imgsrc, buttonText, iconSrc }) => {
  return (
    <>
      <div className="bg-[--primary-blue] h-[100vh] text-center text-[--primary-orange] pt-8 md:pt-24">
        <h1 className="text-[32px] font-bold leading-9">{title}</h1>
        {/*    //change font */}
        <h2 className="text-[16px] md:text-[20px] pt-4 leading-[22px] mx-14">
          {text}
        </h2>
        <div className="flex justify-center pt-16">
          <img
            src={imgsrc}
            className="h-[216px] w-[191px] md:h-[270px] md:w-[231px]"
          />
        </div>
        <div className="absolute bottom-0">
          <img src={iconSrc} />
        </div>
        <button className="mt-16 text-white border-[--primary-orange] border-[2px] rounded-lg px-16 py-4 ">
          {buttonText}
        </button>
      </div>
    </>
  );
};

export default AcceptancePage;
