import './App.css';

import Hero from './sections/Hero';
import Features from './sections/Features';
import GetABed from './sections/GetABed';
import PgOwner from './sections/PgOwner';
import Community from './sections/Community';
import ThankyouPage from './sections/ThankyouPage';
import PopularCities from './sections/PopularCities';
import PopularLocalities from './sections/PopularLocalities';
import Blogs from './sections/Blogs';
import BlogPage from './sections/BlogPage';
import SignUp from './sections/SignUp';
import FilterPage from './sections/FilterPage';

import Navbar from './components/Navbar';
import VerticalSpacer from './components/VerticalSpacer';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Navbar />
            {/* <FilterPage /> */}
            <Hero />
            <VerticalSpacer />
            <Features />
            <VerticalSpacer />
            <GetABed />
            <VerticalSpacer />
            <VerticalSpacer />
            <PgOwner />
            <VerticalSpacer />
            <VerticalSpacer />
            <PopularLocalities />
            <VerticalSpacer />
            <PopularCities />
            <VerticalSpacer />
            <Community />
            <VerticalSpacer />
            <Blogs />
            <VerticalSpacer />
            {/* <ThankyouPage /> */}
            {/* <SignUp /> */}
            {/* <BlogPage /> */}
            <Footer />
        </>
    );
}

export default App;
