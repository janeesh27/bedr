import React, { useState, useEffect } from 'react';

import IconContainer from '../IconContainer';

import logoMobile from '../../assets/logoMobile.svg';
import logoDesktop from '../../assets/logoDesktop.svg';
import headerbg from '../../assets/headerBg.svg';
import search from '../../assets/searchIcon.svg';
import admin from '../../assets/adminIcon.svg';

import styles from './index.module.css';
import Hamburger from '../Hamburger';

const Navbar = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (active) {
            document.querySelector('body').classList.add('overflow_hidden');
        } else {
            document.querySelector('body').classList.remove('overflow_hidden');
        }
    }, [active]);

    return (
        <nav className="h-[50px] bg-primary-blue flex items-center w-screen pl-[14px] md:h-[80px] md:justify-center lg:pl-[100px]">
            <div className="shrink-0">
                {/* Mobile Logo */}
                <IconContainer src={logoMobile} alt="Bedr logo" height={30} width={20} className="md:hidden" />
                {/* Desktop Logo */}
                <IconContainer src={logoDesktop} alt="Bedr logo" height={48} width={142} className="hidden md:block" />
            </div>

            <div className="relative w-full h-full">
                <img className="absolute z-[1] inset-0 h-full w-full object-cover" src={headerbg} alt="" />

                {/* Navbar Mobile Items */}
                <div className="flex items-center h-full justify-end gap-[27px] pr-[14px] md:hidden">
                    <IconContainer className="z-[999999]" src={search} height={17} width={17} />
                    <IconContainer className="z-[999999]" src={admin} height={16} width={16} />
                    <div className="z-[999999]">
                        <Hamburger
                            onClick={() => {
                                setActive(!active);
                            }}
                        />
                    </div>
                </div>

                <ul className={`${styles.navMenuMobile} text-black ${active && styles.active}`}>jhghfhgj</ul>

                <ul
                    className={`${styles.navMenuDesktop} hidden md:flex h-full items-center justify-end lg:pr-[100px] md:pr-[24px] lg:gap-[100px] md:gap-[50px] z-[999999]`}
                >
                    <li>Item1</li>
                    <li>Item2</li>
                    <li>Item3</li>
                    <li>Item4</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
