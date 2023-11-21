import React from "react";
import ButtonPrimary from "../../components/ButtonPrimary";
import VerticalSpacer from "../../components/VerticalSpacer";

const index = () => {
  return (
    <>
      <div className="md:grid">
        <div className="bg-[--primary-blue]">
          <div className="pt-8 mx-4">
            <img src="./community.png" />
          </div>
          <h1 className="text-white font-[700] text-[24px] leading-7 text-center px-12 pt-8">
            A GROWING COMMUNITY OF STUDENTS, PG OWNERS AND HOUSING STUDENTS, PG
            OWNERS
          </h1>
          <h2 className="text-white text-[12px] fomt-[300] text-center px-12 pt-4">
            Our platform is dedicated to connecting students with a diverse
            range of housing options across India.
          </h2>
          <div className="py-8 flex justify-center">
            <ButtonPrimary text="Join Now" />
          </div>
        </div>
        <div className="bg-[--primary-sky] text-[--primary-blue] py-6 grid grid-flow-col text-[14px] leading-4 font-semibold">
          <div className="text-center">
            30K+ <br />
            <span className="text-[10px] leading-3 font-normal">
              STUDENTS <br />
              CONNECTED
            </span>
          </div>
          <div className="text-center">
            22K+ <br />
            <span className="text-[10px] leading-3 font-normal">
              PROPERTIES <br />
              LISTED
            </span>
          </div>
          <div className="text-center">
            5L+ <br />
            <span className="text-[10px] leading-3 font-normal">
              BROKERAGE <br />
              SAVED
            </span>
          </div>
        </div>
      </div>
      <VerticalSpacer />
      <div className="mx-8">
        <h1 className="text-center text-[24px] font-bold leading-8 text-[#01192D]">
          DON’T TAKE OUR WORD FOR IT
        </h1>
        <div className="py-8 flex justify-center">
          <img src="./community2.png" className="h-[40px] w-[40px]" />
        </div>
        <h2 className="text-[--primary-blue] text-center text-[14px] leading-3 font-semibold">
          User Testimonials
        </h2>
        <h3 className="text-center text-[--primary-blue] pt-4 pb-8 text-[12px] font-[500] leading-4 ">
          I found a good house for rent and the process was smooth. The staff
          were courteous and the customer care was helpful barring one incident.
          The deposit they ask from tenants is very reasonable. Owners in
          Bangalore have the habit of demanding a deposit of atleast 10 months.
          With nestaway it's only two months which was very reasonable. The
          service requests also were answered to promptly.
        </h3>
        <h4 className="text-center font-semibold text-[--primary-blue] text-[12px] leading-4 pb-8 border-b-[1px] border-[--primary-blue]">
          Akash Sharma, Parent
        </h4>
        <div className="pt-12 flex justify-center ">
          <img src="./community3.png" className="h-[40px] w-[40px]" />
        </div>
        <h4 className="text-center font-semibold text-[--primary-blue] text-[14px] leading-4 py-8 ">
          Press Coverage
        </h4>
        <div className="flex justify-center ">
          <img src="./community4.png" className="w-[195px] h-[110px]" />
        </div>
      </div>
    </>
  );
};

export default index;
