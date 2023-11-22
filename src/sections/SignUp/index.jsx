import React from 'react';
import { useNavigate } from 'react-router-dom';

const index = () => {
    const navigate = useNavigate();

    return (
        <div className=" h-[100vh]">
            <h1 className="text-[--primary-blue] font-bold text-[32px] leading-9 text-center mt-8 px-16">
                Enter Mobile Number to login
            </h1>
            <h2 className="text-[--primary-blue] text-[16px] font-normal text-center leading-6 pt-4 px-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h2>
            <div className="flex justify-center pt-8">
                <img src="./signup.png" className="w-[191px] h-[216px]" />
            </div>
            <div className="flex justify-center">
                <input
                    placeholder="Enter mobile number"
                    className="mt-12 h-[58px] border-[--primary-blue] p-2 text-[--primary-blue] text-[14px]  leading-4 border-[2px] rounded-lg w-[328px]"
                />
            </div>
            <div className="flex justify-center pt-2 ">
                <button
                    onClick={() => {
                        navigate('/homepage');
                    }}
                    className="h-[58px] w-[328px] border-[--primary-orange] border-[2px] pt-5 rounded-lg px flex justify-center text-primary-blue text-[14px] leading-4"
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default index;
