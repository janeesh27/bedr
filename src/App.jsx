import './App.css';
import Hero from './sections/Hero';
import Features from './sections/Features';
import GetABed from './sections/GetABed';
import PgOwner from './sections/PgOwner';
import Community from './sections/Community';
import ThankyouPage from './sections/ThankyouPage';

import Navbar from './components/Navbar';
import VerticalSpacer from './components/VerticalSpacer';

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
        </>
    );
}

export default App;
