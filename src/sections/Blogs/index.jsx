import React from 'react';

const propertiesData = [
    {
        srcImage: './blogs.png',
        title: 'Real Estate Housing Market Stocks in India 2023',
        buttonText: 'READ MORE',
        duration: '10 min read',
    },
    {
        srcImage: './blogs.png',
        title: 'Real Estate Housing Market Stocks in India 2023',
        buttonText: 'READ MORE',
        duration: '10 min read',
    },
    {
        srcImage: './blogs.png',
        title: 'Real Estate Housing Market Stocks in India 2023',
        buttonText: 'READ MORE',
        duration: '10 min read',
    },
    {
        srcImage: './blogs.png',
        title: 'Real Estate Housing Market Stocks in India 2023',
        buttonText: 'READ MORE',
        duration: '10 min read',
    },

    // Add more objects as needed
];

const PropertyCard = ({ srcImage, title, buttonText, duration }) => {
    return (
        <div className="w-[242px] h-[241px] sm:w-[306px] sm:h-[333px] border-[--primary-blue] border-[1px] rounded-lg">
            <div className="p-2">
                <img src={srcImage} alt={title} className="min-w-[216px] min-h-[129px]" />
            </div>
            <div className="ml-2">
                <h2 className="text-[--primary-blue] pt-4 text-[14px] border-t-[1px] border-[--primary-blue] leading-4 font-semibold">
                    {title}
                </h2>
                <div className="flex justify-between">
                    <button className="text-[10px] pt-4 leading-3 text-[--primary-blue]">{buttonText}</button>
                    <p className="text-primary-blue pt-4 text-right mr-4 text-[10px] leading-[11px]"> {duration}</p>
                </div>
            </div>
        </div>
    );
};

const index = () => {
    return (
        <>
            <div className="mx-2">
                <h1 className="text-[24px] text-[--primary-blue] leading-7 font-[700] pr-8 ">
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
