import "./App.css";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import GetABed from "./sections/GetABed";
import PgOwner from "./sections/PgOwner";

import Navbar from "./components/Navbar";
import VerticalSpacer from "./components/VerticalSpacer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <VerticalSpacer />
      <Features />
      <VerticalSpacer />
      {/* <GetABed /> */}
      <VerticalSpacer />
      <PgOwner />
      <VerticalSpacer />
    </>
  );
}

export default App;
