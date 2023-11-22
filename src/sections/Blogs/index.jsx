import React from "react";

const propertiesData = [
  {
    srcImage: "./blogs.png",
    title: "Beautiful Apartment",
    text: "Our platform is dedicated to connecting students with a diverse range of housing ",
  },

  {
    srcImage: "./blogs.png",
    title: "Cozy House",
    text: "Suburbia",
  },
  {
    srcImage: "./blogs.png",
    title: "Luxury Penthouse",
    text: "Downtown",
  },
  {
    srcImage: "./blogs.png",
    title: "Luxury Penthouse",
    text: "Downtown",
  },
  // Add more objects as needed
];

const PropertyCard = ({ srcImage, title, text }) => {
  return (
    <div className="w-[242px] h-[295px] sm:w-[306px] sm:h-[333px] border-[--primary-blue] border-[1px] rounded-lg">
      <div className="p-2">
        <img
          src={srcImage}
          alt={title}
          className="min-w-[216px] min-h-[129px]"
        />
      </div>
      <div className="ml-2">
        <h2 className="text-[--primary-blue] pt-4 text-[14px] border-t-[1px] border-[--primary-blue] leading-4 font-semibold">
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
      <div className="mx-2">
        <h1 className="text-[24px] leading-7 font-[700] pr-8 ">
          KNOW WHAT’S GOING ON IN THE INDUSTRY WITH BedR BLOGS
        </h1>
        <div className="flex gap-4 md:justify-center justify-start md:flex-wrap pt-4 mx-4 overflow-auto">
          {propertiesData.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </div>
    </>
  );
};

export default index;
