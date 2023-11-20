import React from "react";

const data = [
  {
    imgSrc: "./feature1.png",
    number: "01",
    title: "Student Friendly Accomodations",
    animationText: "Animate me!",
  },
  {
    imgSrc: "./feature2.png",
    number: "02",
    title: "Verified  and Vetted PG Owners",
    animationText: "Animate me!",
  },
  {
    imgSrc: "./feature3.png",
    number: "03",
    title: "No broker and Visit Hassle",
    animationText: "Animate me!",
  },
  {
    imgSrc: "./feature4.png",
    number: "04",
    title: "Available at Prime Locations",
    animationText: "Animate me!",
  },
];

const FeatureBox = ({ imgSrc, number, title, animationText }) => {
  return (
    <div className="relative w-[157px] h-[171px] sm:w-[306px] sm:h-[333px] m-4 bg-[--primary-blue] rounded-lg transition duration-300 transform hover:scale-105">
      <img
        src={imgSrc}
        alt={title}
        className="absolute top-4 left-4 w-[28px] h-[28px] sm:w-[56px] sm:h-[55px]"
      />
      <div className="absolute bottom-0 left-0  bg-opacity-80 p-4 w-full box-border">
        <div className="text-[6px] sm:text-[12px] text-white font-bold">
          {number}
        </div>
        <div className="text-[12px] sm:text-[24px] text-white leading-3 sm:leading-6 font-[600]">
          {title}
        </div>
      </div>
      <div className="absolute top-0 left-0 p-4 w-full h-full bg-black bg-opacity-70 text-white opacity-0 transition duration-300 group-hover:opacity-100">
        {animationText}
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <div className="flex overflow-scroll sm:overflow-hidden sm:w-full sm:justify-center">
      {data.map((feature, index) => (
        <FeatureBox key={index} {...feature} />
      ))}
    </div>
  );
};

export default Features;
