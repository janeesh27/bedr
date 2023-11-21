import React from 'react';
import ButtonStandard from '../../components/ButtonStandard';

import getabedHeroImg from '../../assets/getabedHero.svg';
import getabedBgLeft from '../../assets/getabedBgLeft.svg';
import getabedBgTop from '../../assets/getabedBgTop.svg';

const GetABed = () => {
    return (
        <div className="lg:flex flex-row-reverse	">
            <div className="lg:w-2/5">
                <img src={getabedHeroImg} alt="get a bed" className="lg:object-cover" />
            </div>

            <div className="bg-[#60ACF5] relative h-[310px] overflow-hidden lg:h-[600px] lg:w-3/5">
                <img className="absolute left-0 w-[64px] h-full lg:w-[136px]" src={getabedBgLeft} />
                <img
                    className="absolute left-[54px] top-[54px] w-full h-[10px] object-cover lg:h-[22px] lg:left-[110px] lg:top-[107px]	"
                    src={getabedBgTop}
                />

                <div className="ml-[80px] mt-[110px] mr-[30px] lg:ml-[220px] lg:mt-[180px] lg:mr-[120px]">
                    <h1 className="text-[24px] font-bold text-left leading-7 uppercase lg:text-[48px] lg:leading-[64px]">
                        With BedR, affordable living is not just a choice; it's a lifestyle we curate for students to
                        thrive in.
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
