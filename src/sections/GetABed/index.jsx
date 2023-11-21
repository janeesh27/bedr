import React from "react";
import ButtonStandard from "../../components/ButtonStandard";

const GetABed = () => {
  return (
    <div className="grid grid-rows-[auto_auto] sm:flex sm:flex-row-reverse">
      <div className="">
        <div>
          <img src="./getabed_mobile.png" className="min-w-[400px]" />
        </div>
      </div>
      <div className="bg-[#60ACF5] relative">
        <div className="absolute top-0">
          <img src="./getabed2.png" />
        </div>

        <div className="p-16">
          <h1 className="text-[24px] font-700 text-left leading-7 mt-8">
            With BedR, affordable living is not just a choice; it's a lifestyle
            we curate for students to thrive in.
          </h1>
          <div className="mt-8">
            <ButtonStandard text="FIND A BedR NEAR YOU" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetABed;
