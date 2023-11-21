import React from "react";
import ButtonPrimary from "../../components/ButtonPrimary";

const propertiesData = [
  {
    srcImage: "./localities.png",
    title: "Beautiful Apartment",
    text: "Our platform is dedicated to connecting students with a diverse range of housing ",
  },

  {
    srcImage: "./localities.png",
    title: "Cozy House",
    text: "Suburbia",
  },
  {
    srcImage: "./localities.png",
    title: "Luxury Penthouse",
    text: "Downtown",
  },
  {
    srcImage: "./localities.png",
    title: "Luxury Penthouse",
    text: "Downtown",
  },
  // Add more objects as needed
];

const PropertyCard = ({ srcImage, title, text }) => {
  return (
    <div className="w-[242px] h-[295px] sm:w-[306px] sm:h-[333px]">
      <div className="p-2">
        <img
          src={srcImage}
          alt={title}
          className="min-w-[216px] min-h-[129px]"
        />
      </div>
      <div className="pl-2">
        <h2 className="text-[--primary-blue] pt-4 text-[14px] leading-4 font-semibold">
          {title}
        </h2>
        <p className="text-[10px] pt-4 mr-8 leading-3 text-[--primary-blue]">
          {text}
        </p>
      </div>
    </div>
  );
};

const index = () => {
  return (
    <>
      <div className="relative grid grid-cols-2">
        <h1 className="text-[--primary-blue] text-[24px] leading-9 ml-4 font-bold ">
          POPULAR LOCALITIES IN YOUR CITY
        </h1>
        <h1 className="text-[--primary-orange] text-[9px] leading-4 font-medium absolute bottom-0 right-4">
          Choose Location
        </h1>
      </div>
      <div className="flex gap-4 md:justify-center justify-start md:flex-wrap pt-4 mx-4 overflow-auto">
        {propertiesData.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>
    </>
  );
};

export default index;
