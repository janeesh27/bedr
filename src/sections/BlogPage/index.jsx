import React from 'react';

const blogData = [
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

const BlogCard = ({ srcImage, title, buttonText, duration }) => {
    return (
        <div className="w-[328px] h-[300px] sm:w-[306px] sm:h-[300px] border-[--primary-blue] border-[1px] rounded-lg">
            <div className="p-2">
                <img
                    src={srcImage}
                    alt={title}
                    className="min-w-[306px] min-h-[158px] sm:min-h-[129px] sm:min-w-[216px] "
                />
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
            <div className="flex gap-4 md:justify-center flex-col-reverse sm:flex-row justify-start md:flex-wrap py-4 mx-6 sm:overflow-auto">
                {blogData.map((property, index) => (
                    <BlogCard key={index} {...property} />
                ))}
            </div>
        </>
    );
};

export default index;
