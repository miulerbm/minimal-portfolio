// import React from "react";
import Intro from "./components/Intro";
import Timeline from "./components/Timeline";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="App">
        <Intro></Intro>
        <Portfolio></Portfolio>
        <Timeline />
      </div>
    </>
  );
}

export default App;
