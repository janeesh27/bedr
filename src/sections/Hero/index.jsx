import React from 'react';

import heroImg from '../../assets/hero.svg';
import heroImgDesktop from '../../assets/heroDesktop.svg';

import styles from './index.module.css';

const Hero = () => {
    return (
        <main className="bg-primary-blue pt-[94px]">
            <div className="lg:flex items-center justify-center lg:mt-20 gap-5">
                <div className={`${styles.heroImgDesktop} hidden lg:block`}>
                    <img src={heroImgDesktop} alt="hero-img" />
                </div>

                <div className="md:mt-10 text-center lg:text-start px-10 lg:px-0 lg:mt-0 lg:w-[450px] lg:relative relative lg:top-[-115px]">
                    <h1 className="text-4xl  font-bold text-white leading-12 lg:text-[64px] lg:leading-[72px]">
                        STEP INTO AN AFFORDABLE HAVEN FOR STUDENT LIVING
                    </h1>
                    <section>
                        <p className="text-white font-light text-sm mt-2 lg:text-[20px] lg:leading-[30px] ">
                            Our platform is dedicated to connecting students with a diverse range of housing options
                            across India
                        </p>
                    </section>

                    <button className="px-4 py-2 rounded bg-secondary-peach font-medium text-secondary-dark-blue text-xs block mx-auto mt-8 cursor-pointer lg:mx-0 lg:mt-4 lg:px-10 lg:py-3">
                        START RENTING
                    </button>
                </div>
            </div>

            <div className={`${styles.heroImg} mx-auto z-0 lg:hidden`}>
                <img src={heroImg} alt="hero-img" />
            </div>
        </main>
    );
};

export default Hero;
