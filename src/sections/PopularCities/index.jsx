import React from 'react';
import ButtonPrimary from '../../components/ButtonPrimary';

const propertiesData = [
    {
        srcImage: './pgnearme.png',
        title: 'Beautiful Apartment',
        location: 'City Center',
        pricePerMonth: 1500,
    },
    {
        srcImage: './pgnearme.png',
        title: 'Cozy House',
        location: 'Suburbia',
        pricePerMonth: 2000,
    },
    {
        srcImage: './pgnearme.png',
        title: 'Luxury Penthouse',
        location: 'Downtown',
        pricePerMonth: 3000,
    },
    {
        srcImage: './pgnearme.png',
        title: 'Luxury Penthouse',
        location: 'Downtown',
        pricePerMonth: 3000,
    },
    // Add more objects as needed
];

const PropertyCard = ({ srcImage, title, location, pricePerMonth }) => {
    return (
        <div className="w-[242px] h-[295px] sm:w-[306px] sm:h-[333px]">
            <div className="border-[--primary-blue] rounded-t-lg border-[1px] p-2">
                <img src={srcImage} alt={title} className="min-w-[216px] min-h-[129px]" />
            </div>
            <div className=" border-[--primary-blue] border-[1px] rounded-b-lg pl-2">
                <h2 className="text-[--primary-blue] pt-4 text-[14px] leading-4 font-semibold">{title}</h2>
                <p className="text-[10px] leading-3 text-[--primary-blue]">{location}</p>
                <p className="py-4 text-[14px] text-primary-blue font-bold">{`$${pricePerMonth}/month`}</p>
                <div className="pb-2">
                    <ButtonPrimary text="BOOK NOW" />
                </div>
            </div>
        </div>
    );
};

const index = () => {
    return (
        <>
            <div>
                <h1 className="text-[--primary-blue] text-[24px] leading-9 ml-4 font-bold">
                    TRENDING PGs IN YOUR AREA
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
