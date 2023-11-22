import './App.css';
import Hero from './sections/Hero';
import Features from './sections/Features';
import GetABed from './sections/GetABed';
import PgOwner from './sections/PgOwner';
import Community from './sections/Community';
import ThankyouPage from './sections/ThankyouPage';
import PopularCities from './sections/PopularCities';
import PopularLocalities from './sections/PopularLocalities';

import Navbar from './components/Navbar';
import VerticalSpacer from './components/VerticalSpacer';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <VerticalSpacer />
            <Features />
            <VerticalSpacer />
            <GetABed />
            <VerticalSpacer />
            <PgOwner />
            <VerticalSpacer />
            <Community />
            {/* <ThankyouPage /> */}
            <Footer />
        </>
    );
}

export default App;
