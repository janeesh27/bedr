import React from 'react';

import heroImg from '../../assets/hero.svg';

import styles from './index.module.css';

const Hero = () => {
    return (
        <main className="bg-primary-blue pt-[94px]">
            <h1 className="text-4xl text-center	px-10 font-bold text-white leading-12">
                STEP INTO AN AFFORDABLE HAVEN FOR STUDENT LIVING
            </h1>

            <section>
                <p className="text-center px-8 text-white font-light text-sm mt-2 ">
                    Our platform is dedicated to connecting students with a diverse range of housing options across
                    India
                </p>
            </section>

            <button className="px-4 py-2 rounded bg-secondary-peach font-medium text-secondary-dark-blue text-xs block mx-auto mt-8 cursor-pointer">
                START RENTING
            </button>

            <img src={heroImg} alt="hero-img" className={`${styles.heroImg} mx-auto relative top-[-15px]`} />
        </main>
    );
};

export default Hero;
