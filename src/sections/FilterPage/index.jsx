import React from 'react';

const index = () => {
    return (
        <>
            <div className="bg-primary-blue pt-8 sm:pt-16">
                <h1 className="text-primary-orange text-[24px] leading-[30px] text-center">EXPLORE A BedR NEAR YOU</h1>
                <div className="pt-8 sm:pt-16 flex justify-center">
                    <button className="border-primary-orange border-[1px]">
                        <img src="./filter1.png" className="h-[13px] w-[13px]" />
                        <h1 className="text-[white] text-[14px] leading-5">Filter</h1>
                    </button>
                    <button className="border-primary-orange border-[1px]">
                        <img src="./filter1.png" className="h-[13px] w-[13px]" />
                        <h1 className="text-[white] text-[14px] leading-5">Filter</h1>
                    </button>
                </div>
            </div>
        </>
    );
};

export default index;
