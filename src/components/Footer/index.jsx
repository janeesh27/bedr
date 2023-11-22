import React from 'react';

import TextInput from '../TextInput';
import IconContainer from '../IconContainer';

import footerLogo from '../../assets/footerLogo.svg';
import Facebook from '../../assets/Facebook.svg';
import Instagram from '../../assets/Instagram.svg';
import LinkedIn from '../../assets/LinkedIn.svg';
import Twitter from '../../assets/Twitter.svg';
import Youtube from '../../assets/Youtube.svg';

const quickLinks1 = ['Rent a House', 'List a Property', 'About Us', 'Blogs', 'Careers'];
const quickLinks2 = ['Terms & Conditions', 'Privacy Policy', 'Cookie Policy', 'Fraud Disclaimer', 'Help Center'];

const icons = ['Facebook', 'Instagram', 'LinkedIn', 'Twitter', 'Youtube'];

const Footer = () => {
    return (
        <footer className="bg-primary-blue px-9 py-12 lg:flex lg:justify-between text-[12px] leading-[26px] lg:text-[16px] lg:leading-[38px] lg:py-[65px] lg:px-[100px]">
            <div className="lg:w-[450px] lg:order-last">
                <h1 className="text-2xl font-bold text-white mb-4 lg:text-[48px] lg:mb-6">GET IN TOUCH</h1>

                <form>
                    <TextInput name="name" placeholder="name" />
                    <TextInput name="email" placeholder="Email" type="email" />
                    <TextInput name="message" placeholder="Message" />

                    <button className="w-[105px] h-[30px] cursor-pointer bg-primary-orange mt-6 rounded-xl text-[10px] lg:text-[16px] lg:w-[185px] lg:h-[55px] lg-rounded-[18px]">
                        SEND
                    </button>
                </form>
            </div>

            <div className="mt-8 lg:mt-0 text-center lg:text-left   ">
                <p className=" font-semibold text-primary-orange ">QUICK LINKS</p>

                <div className="flex justify-center gap-[50px] lg:mt-3">
                    <div>
                        {quickLinks1.map(name => (
                            <a className="text-white block font-normal" href="/">
                                {name}
                            </a>
                        ))}
                    </div>
                    <div>
                        {quickLinks2.map(name => (
                            <a className="text-white block font-normal" href="/">
                                {name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="text-center font-bold lg:order-first mt-12 lg:mt-0 lg:text-left">
                <IconContainer className="mx-auto lg:mx-0" src={footerLogo} alt="Bedr Logo" width={150} height={50} />

                <p className="mt-6 lg:mt-4">+91-987654321</p>
                <p className="mt-3 lg:mt-2">info@bedrindia.net</p>
                <p className="mt-3 lg:mt-2">Street xyz, Town xyx , Lane xyx City, State , 123123</p>

                <div className="flex justify-center gap-[20px] mt-2 lg:justify-start lg:mt-4">
                    <IconContainer src={Facebook} alt="Facebook" height={20} width={20} />
                    <IconContainer src={Instagram} alt="Instagram" height={20} width={20} />
                    <IconContainer src={LinkedIn} alt="LinkedIn" height={20} width={20} />
                    <IconContainer src={Twitter} alt="Twitter" height={20} width={20} />
                    <IconContainer src={Youtube} alt="Youtube" height={20} width={20} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
