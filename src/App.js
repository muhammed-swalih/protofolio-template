import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro"
import Services from "./components/Services";
import Protofolio from "./components/Protofolio";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Protofolio/>
    </div>
  );
}

export default App;
