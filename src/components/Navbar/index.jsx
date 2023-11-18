import React from 'react';

import logoMobile from '../../assets/logoMobile.svg';
import headerbg from '../../assets/headerBg.svg';

const Navbar = () => {
    return (
        <nav className="h-[50px] fixed bg-primary-blue flex items-center w-screen pl-[14px]">
            <div className="h-[30px] w-[20px] shrink-0">
                <img src={logoMobile} alt="Bedr logo" />
            </div>
            <div className="relative w-full h-full">
                <img className="absolute inset-0 h-full w-full object-cover" src={headerbg} alt="" />
            </div>
        </nav>
    );
};

export default Navbar;
