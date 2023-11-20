import React from "react";
import PgOwnerCard from "../../components/PgOwnerCard";

const index = () => {
  return (
    <>
      <div className="relative bg-[--primary-orange] rounded-xl mx-4 md:grid md:grid-cols-2">
        <div className="pt-8 md:pt-12 text-[#01192D] leading-4 font-[600] text-[16px] text-center">
          <h1 className="md:text-[32px] md:leading-9 md:font-[600]">
            Are you a PG Owner?
          </h1>
          <h2 className="pt-4 text-[12px] mx-8 md:mx-12 font-[400] md:text-[16px]">
            Our platform is dedicated to connecting students with a diverse
            range of housing options
          </h2>
          <h3 className="text-white pt-4 pb-16 md:text-[20px]">
            List Your Property
          </h3>
        </div>
        <div className="absolute bottom-[-20px] left-[35px] md:left-[390px] lg:left-[600px] md:bottom-[-30px]">
          <PgOwnerCard text="TENANT MATCHING GUARANTEED" percentage="100%" />
        </div>
        <div className="absolute bottom-[-20px] right-[35px] md:bottom-[60px] ">
          <PgOwnerCard
            text="ZERO COMMISSION PROPERTY LISTING"
            percentage="0%"
          />
        </div>
      </div>
    </>
  );
};

export default index;
